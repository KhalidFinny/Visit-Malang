import express from "express";
import cors from "cors";
import sqlite3 from "sqlite3";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createClient } from "redis";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// ── REDIS CLIENT CACHING WITH MEMORY FALLBACK ──
let redisClient = null;
let isRedisConnected = false;
const localCache = new Map();

const initRedis = async () => {
  try {
    redisClient = createClient({
      url: "redis://127.0.0.1:6379"
    });
    redisClient.on("error", (err) => {
      console.warn("Redis client offline or connection failed. Falling back to local memory cache.", err.message);
      isRedisConnected = false;
    });
    await redisClient.connect();
    console.log("Connected to local Redis cache successfully.");
    isRedisConnected = true;
  } catch (err) {
    console.warn("Could not initiate Redis connection. Using in-memory fallback.", err.message);
    isRedisConnected = false;
  }
};

initRedis();

// Cache-aside helper operations
async function getCache(key) {
  if (isRedisConnected && redisClient) {
    try {
      const val = await redisClient.get(key);
      return val ? JSON.parse(val) : null;
    } catch (err) {
      console.warn("Redis read error:", err.message);
    }
  }
  const entry = localCache.get(key);
  if (entry) {
    if (Date.now() < entry.expiry) {
      return entry.value;
    }
    localCache.delete(key);
  }
  return null;
}

async function setCache(key, value, ttlSeconds = 300) {
  if (isRedisConnected && redisClient) {
    try {
      await redisClient.set(key, JSON.stringify(value), {
        EX: ttlSeconds
      });
      return;
    } catch (err) {
      console.warn("Redis write error:", err.message);
    }
  }
  localCache.set(key, {
    value,
    expiry: Date.now() + ttlSeconds * 1000
  });
}

async function clearCache(key) {
  if (isRedisConnected && redisClient) {
    try {
      await redisClient.del(key);
    } catch (err) {
      console.warn("Redis delete error:", err.message);
    }
  }
  localCache.delete(key);
}

// ── SQLITE DATABASE SETUP ──
const dbPath = join(__dirname, "malang.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
  } else {
    console.log("Connected to local SQLite database 'malang.db'.");
  }
});

// Setup database tables & seed records
db.serialize(() => {
  // 1. Volcano & Trail Safety Status Table
  db.run(`
    CREATE TABLE IF NOT EXISTS safety_status (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE,
      name TEXT NOT NULL,
      type TEXT NOT NULL,
      status TEXT CHECK(status IN ('open', 'caution', 'closed')) NOT NULL,
      details TEXT,
      last_updated DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // 2. Attraction Fees / Cash Advisory Table
  db.run(`
    CREATE TABLE IF NOT EXISTS attraction_fees (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE,
      domestic_entry INTEGER DEFAULT 0,
      foreign_entry INTEGER DEFAULT 0,
      transport_cost INTEGER DEFAULT 0,
      parking_cost INTEGER DEFAULT 0,
      notes TEXT,
      atm_info TEXT
    )
  `);

  // 3. Altitude & Packing Advisory Table
  db.run(`
    CREATE TABLE IF NOT EXISTS place_altitudes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT UNIQUE,
      altitude INTEGER NOT NULL,
      temp_range TEXT NOT NULL,
      packing_list TEXT NOT NULL
    )
  `);

  // 4. Crowdsourced Price Submissions Table
  db.run(`
    CREATE TABLE IF NOT EXISTS price_submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      slug TEXT NOT NULL,
      domestic_entry INTEGER,
      foreign_entry INTEGER,
      transport_cost INTEGER,
      parking_cost INTEGER,
      submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Seeding initial safety status data
  const seedSafety = [
    { slug: "mount-bromo", name: "Mount Bromo Crater Viewpoint", type: "volcano", status: "open", details: "Weather clear. Normal activity. All main viewpoints (Penanjakan, King Kong Hill) accessible." },
    { slug: "tumpak-sewu", name: "Tumpak Sewu Waterfall Ravine Trail", type: "trail", status: "caution", details: "Water levels elevated due to afternoon rainfall. Use caution on the lower descent paths." },
    { slug: "mount-semeru", name: "Mount Semeru Summit Route", type: "volcano", status: "closed", details: "Volcanic alert status Level III (Siaga). Trail strictly closed for safety." },
    { slug: "pantai-3-warna", name: "Pantai 3 Warna Conservation Path", type: "trail", status: "open", details: "All beach pathways open. Swimming allowed in designated colored zones." },
    { slug: "coban-pelangi", name: "Coban Pelangi Waterfall Trail", type: "trail", status: "open", details: "Trail open and dry. Safe for walking down to the river bed." },
    { slug: "pulau-sempu", name: "Pulau Sempu Nature Trail", type: "trail", status: "caution", details: "Hutan trail path is muddy and slick. Only allowed with registered local guides." },
    { slug: "budug-asu", name: "Budug Asu Ridge Road", type: "trail", status: "open", details: "Dry, clear conditions on the dirt track. Accessible to offroad vehicles." },
    { slug: "jatim-park-1", name: "Jatim Park 1 Walkways", type: "general", status: "open", details: "Amusement park trails completely open and safe." },
    { slug: "museum-angkut", name: "Museum Angkut Exhibit Halls", type: "general", status: "open", details: "Indoor and outdoor vintage galleries open to visitors." },
    { slug: "kayutangan-heritage", name: "Kayutangan Heritage Zone", type: "general", status: "open", details: "Colonial residential streets and historic buildings open to the public." },
    { slug: "sumber-sirah", name: "Sumber Sirah Springs", type: "trail", status: "open", details: "Spring pool and surrounding paddy paths open and clear." },
    { slug: "nakoa-coffee", name: "Nakoa Coffee space", type: "general", status: "open", details: "Workspace completely open." }
  ];

  // Seeding fees data for ALL 11 destinations (solving empty cash advisor view)
  const seedFees = [
    {
      slug: "mount-bromo",
      domestic_entry: 34000,
      foreign_entry: 220000,
      transport_cost: 650000,
      parking_cost: 10000,
      notes: "Jeep hire is cash-only and mandatory to navigate the sea of sand to the crater. Entrance tickets are also checked at gates.",
      atm_info: "Last reliable ATMs are located in Sukapura (18km) or Tumpang (22km). No ATMs exist near the crater.",
    },
    {
      slug: "tumpak-sewu",
      domestic_entry: 10000,
      foreign_entry: 50000,
      transport_cost: 0,
      parking_cost: 5000,
      notes: "Descent trail safety guides at the bottom cost approximately IDR 100,000 in cash. Fully optional.",
      atm_info: "Nearest ATM is at the Pronojiwo local market (3km away).",
    },
    {
      slug: "mount-semeru",
      domestic_entry: 20000,
      foreign_entry: 210000,
      transport_cost: 0,
      parking_cost: 10000,
      notes: "Climbing permit fee (currently suspended). Guide hire costs IDR 250,000 per day.",
      atm_info: "Nearest ATM is in Senduro district (15km away).",
    },
    {
      slug: "pantai-3-warna",
      domestic_entry: 10000,
      foreign_entry: 100000,
      transport_cost: 150000,
      parking_cost: 10000,
      notes: "Pre-booking is mandatory. Guide is required for ecological protection of conservation zone.",
      atm_info: "Nearest ATM is in Sendang Biru village (2.5km away) but it frequently runs out of cash.",
    },
    {
      slug: "coban-pelangi",
      domestic_entry: 15000,
      foreign_entry: 50000,
      transport_cost: 0,
      parking_cost: 5000,
      notes: "Traditional food and hot drinks stalls near the entrance are cash-only.",
      atm_info: "Last reliable ATM is at Poncokusumo village center (8km away).",
    },
    {
      slug: "pulau-sempu",
      domestic_entry: 20000,
      foreign_entry: 150000,
      transport_cost: 150000,
      parking_cost: 10000,
      notes: "Permit must be obtained at the Sendang Biru conservation office. Boat transport is cash-only.",
      atm_info: "ATM availability at Sendang Biru is extremely limited. Withdraw cash in Malang or Turen.",
    },
    {
      slug: "budug-asu",
      domestic_entry: 15000,
      foreign_entry: 50000,
      transport_cost: 200000,
      parking_cost: 5000,
      notes: "Motorcycle trail access fee is IDR 20,000. Spot is heavily cash-only.",
      atm_info: "Nearest ATMs are at Lawang town center (12km away).",
    },
    {
      slug: "jatim-park-1",
      domestic_entry: 100000,
      foreign_entry: 120000,
      transport_cost: 0,
      parking_cost: 10000,
      notes: "Cards and electronic payments (QRIS) are accepted at the main ticket counters.",
      atm_info: "Several major banks have ATM kiosks directly at the main entrance gate.",
    },
    {
      slug: "museum-angkut",
      domestic_entry: 110000,
      foreign_entry: 130000,
      transport_cost: 0,
      parking_cost: 10000,
      notes: "QRIS and card payment options are widely available at all ticketing points.",
      atm_info: "There are ATMs located inside the floating market area and near the ticket boxes.",
    },
    {
      slug: "kayutangan-heritage",
      domestic_entry: 5000,
      foreign_entry: 15000,
      transport_cost: 0,
      parking_cost: 3000,
      notes: "Kawasan Heritage is open to the public; fee is for the inside residential kampung tour.",
      atm_info: "Located in Malang city center. Dozens of ATMs are accessible within a 5-minute walk.",
    },
    {
      slug: "sumber-sirah",
      domestic_entry: 5000,
      foreign_entry: 15000,
      transport_cost: 0,
      parking_cost: 3000,
      notes: "River tube rental is IDR 10,000 in cash. Bring plastic bags for wet money.",
      atm_info: "Nearest ATM is at the Gondanglegi district main road (4.5km away).",
    },
    {
      slug: "nakoa-coffee",
      domestic_entry: 0,
      foreign_entry: 0,
      transport_cost: 0,
      parking_cost: 2000,
      notes: "Cafe space. Payment can be fully made via Credit/Debit cards or QRIS.",
      atm_info: "There is an ATM kiosk at the convenience store right across the street.",
    }
  ];

  // Seeding altitude data for all destinations
  const seedAltitudes = [
    { slug: "mount-bromo", altitude: 2329, temp_range: "3°C - 15°C", packing_list: "Thick Winter Jacket, Gloves, Beanie, Scarf, Closed Hiking Shoes" },
    { slug: "mount-semeru", altitude: 3676, temp_range: "-2°C - 8°C", packing_list: "Warm Jacket, Gloves, Beanie, Walking Shoes, Thermal Layers" },
    { slug: "tumpak-sewu", altitude: 500, temp_range: "20°C - 28°C", packing_list: "Waterproof Shoes/Sandals, Change of Clothes, Dry Bag, Raincoat" },
    { slug: "pantai-3-warna", altitude: 5, temp_range: "25°C - 32°C", packing_list: "Swimwear, Sunscreen, Change of Clothes, Waterproof Bag, Sandals" },
    { slug: "coban-pelangi", altitude: 1300, temp_range: "14°C - 21°C", packing_list: "Light Jacket, Non-slip Sneakers, Umbrella/Raincoat" },
    { slug: "pulau-sempu", altitude: 5, temp_range: "24°C - 31°C", packing_list: "Sturdy Hiking Shoes, Mosquito Repellent, Tent (if camping), Headlamp" },
    { slug: "budug-asu", altitude: 1400, temp_range: "13°C - 20°C", packing_list: "Windbreaker, Hiking boots, Warm Layer" },
    { slug: "jatim-park-1", altitude: 900, temp_range: "18°C - 25°C", packing_list: "Comfortable Sneakers, Cap, Light Casual clothing" },
    { slug: "museum-angkut", altitude: 900, temp_range: "18°C - 25°C", packing_list: "Casual Walking Shoes, Camera, Light Clothes" },
    { slug: "kayutangan-heritage", altitude: 440, temp_range: "22°C - 30°C", packing_list: "Comfortable Sandals/Shoes, Camera, Light Summer clothing" },
    { slug: "sumber-sirah", altitude: 350, temp_range: "23°C - 30°C", packing_list: "Towels, Change of Clothes, Swimming gear, Goggles" },
    { slug: "nakoa-coffee", altitude: 440, temp_range: "22°C - 28°C", packing_list: "Laptop, Casual Wear, Charger" }
  ];

  seedSafety.forEach((item) => {
    db.run(
      `INSERT OR IGNORE INTO safety_status (slug, name, type, status, details) VALUES (?, ?, ?, ?, ?)`,
      [item.slug, item.name, item.type, item.status, item.details]
    );
  });

  seedFees.forEach((item) => {
    db.run(
      `INSERT OR IGNORE INTO attraction_fees (slug, domestic_entry, foreign_entry, transport_cost, parking_cost, notes, atm_info) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [item.slug, item.domestic_entry, item.foreign_entry, item.transport_cost, item.parking_cost, item.notes, item.atm_info]
    );
  });

  seedAltitudes.forEach((item) => {
    db.run(
      `INSERT OR IGNORE INTO place_altitudes (slug, altitude, temp_range, packing_list) VALUES (?, ?, ?, ?)`,
      [item.slug, item.altitude, item.temp_range, item.packing_list]
    );
  });
});

// ── ROUTES ──
// GET /api/safety (cached-aside, TTL 5 min)
app.get("/api/safety", async (req, res) => {
  res.set("Cache-Control", "public, max-age=300, stale-while-revalidate=60");
  try {
    const cached = await getCache("safety_status");
    if (cached) {
      res.json(cached);
      return;
    }
  } catch (err) {
    console.warn("Error reading safety cache:", err.message);
  }

  db.all("SELECT * FROM safety_status", [], async (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    await setCache("safety_status", rows);
    res.json(rows);
  });
});

// GET /api/fees (cached-aside, TTL 5 min)
app.get("/api/fees", async (req, res) => {
  res.set("Cache-Control", "public, max-age=300, stale-while-revalidate=60");
  try {
    const cached = await getCache("attraction_fees");
    if (cached) {
      res.json(cached);
      return;
    }
  } catch (err) {
    console.warn("Error reading fees cache:", err.message);
  }

  db.all("SELECT * FROM attraction_fees", [], async (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    await setCache("attraction_fees", rows);
    res.json(rows);
  });
});

// GET /api/altitudes (cached-aside, TTL 5 min)
app.get("/api/altitudes", async (req, res) => {
  res.set("Cache-Control", "public, max-age=300, stale-while-revalidate=60");
  try {
    const cached = await getCache("place_altitudes");
    if (cached) {
      res.json(cached);
      return;
    }
  } catch (err) {
    console.warn("Error reading altitudes cache:", err.message);
  }

  db.all("SELECT * FROM place_altitudes", [], async (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    await setCache("place_altitudes", rows);
    res.json(rows);
  });
});


// POST /api/safety/update
app.post("/api/safety/update", (req, res) => {
  const { auth_token, slug, status, details } = req.body;
  const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "malang2026";

  if (auth_token !== ADMIN_TOKEN) {
    res.status(401).json({ error: "Unauthorized access token" });
    return;
  }

  db.run(
    `UPDATE safety_status SET status = ?, details = ?, last_updated = CURRENT_TIMESTAMP WHERE slug = ?`,
    [status, details, slug],
    async function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      if (this.changes === 0) {
        res.status(404).json({ error: "Location slug not found" });
        return;
      }
      // Invalidate safety cache so changes render immediately
      await clearCache("safety_status");
      res.json({ success: true, updated: slug, status, details });
    }
  );
});

// Helper to calculate median value
function calculateMedian(values) {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  const half = Math.floor(sorted.length / 2);
  if (sorted.length % 2 !== 0) {
    return sorted[half];
  }
  return Math.round((sorted[half - 1] + sorted[half]) / 2);
}

// POST /api/fees/report (Crowdsourced Price Correction)
app.post("/api/fees/report", (req, res) => {
  const { slug, domestic_entry, foreign_entry, transport_cost, parking_cost } = req.body;
  if (!slug) {
    res.status(400).json({ error: "Missing destination slug" });
    return;
  }

  db.run(
    `INSERT INTO price_submissions (slug, domestic_entry, foreign_entry, transport_cost, parking_cost)
     VALUES (?, ?, ?, ?, ?)`,
    [slug, domestic_entry, foreign_entry, transport_cost, parking_cost],
    function (err) {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }

      // Query last 10 submissions to calculate the updated median
      db.all(
        `SELECT domestic_entry, foreign_entry, transport_cost, parking_cost 
         FROM price_submissions 
         WHERE slug = ? 
         ORDER BY submitted_at DESC LIMIT 10`,
        [slug],
        async (err, rows) => {
          if (err) {
            res.status(500).json({ error: err.message });
            return;
          }

          if (rows.length > 0) {
            const domestics = rows.map(r => r.domestic_entry).filter(v => v !== null);
            const foreigns = rows.map(r => r.foreign_entry).filter(v => v !== null);
            const transports = rows.map(r => r.transport_cost).filter(v => v !== null);
            const parkings = rows.map(r => r.parking_cost).filter(v => v !== null);

            const newDomestic = domestics.length > 0 ? calculateMedian(domestics) : 0;
            const newForeign = foreigns.length > 0 ? calculateMedian(foreigns) : 0;
            const newTransport = transports.length > 0 ? calculateMedian(transports) : 0;
            const newParking = parkings.length > 0 ? calculateMedian(parkings) : 0;

            // Update main fees table
            db.run(
              `UPDATE attraction_fees 
               SET domestic_entry = ?, foreign_entry = ?, transport_cost = ?, parking_cost = ? 
               WHERE slug = ?`,
              [newDomestic, newForeign, newTransport, newParking, slug],
              async function (err) {
                if (err) {
                  console.error("Failed to update median attraction fees:", err.message);
                }
                
                // Clear the cache
                await clearCache("attraction_fees");
                res.json({
                  success: true,
                  updated: {
                    slug,
                    domestic_entry: newDomestic,
                    foreign_entry: newForeign,
                    transport_cost: newTransport,
                    parking_cost: newParking
                  }
                });
              }
            );
          } else {
            res.json({ success: true, message: "Submission stored" });
          }
        }
      );
    }
  );
});

// Start listening
app.listen(PORT, () => {
  console.log(`Serverless/Express backend running on http://localhost:${PORT}`);
});
