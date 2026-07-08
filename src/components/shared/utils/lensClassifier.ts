export interface LensLocationCandidate {
  slug: string;
  name: string;
  category: string;
  description: string;
  coordinates: { lat: number; lng: number };
  imageUrl: string;
  confidence: number;
  distanceKm?: number;
  matchReason: string;
}

export interface ClassificationOutput {
  topMatch: LensLocationCandidate;
  candidates: LensLocationCandidate[];
  isGpsAssisted: boolean;
}

export const LENS_LOCATIONS: Omit<LensLocationCandidate, 'confidence' | 'matchReason' | 'distanceKm'>[] = [
  {
    slug: "mount-bromo",
    name: "Mount Bromo",
    category: "Volcanic Nature",
    description: "Iconic active volcano in the Tengger massif with sunrise sea-of-sand caldera views.",
    coordinates: { lat: -7.9425, lng: 112.9530 },
    imageUrl: "/locations/Mount_Bromo.jpg",
  },
  {
    slug: "tumpak-sewu",
    name: "Tumpak Sewu Waterfall",
    category: "Lush Waterfalls",
    description: "Curtain waterfall cascading into a semi-circular lush jungle ravine beneath Mt. Semeru.",
    coordinates: { lat: -8.2307, lng: 112.9167 },
    imageUrl: "/locations/Tumpak_Sewu.jpg",
  },
  {
    slug: "mount-semeru",
    name: "Mount Semeru",
    category: "Volcanic Peak",
    description: "Highest volcano in Java (Mahameru peak) surrounded by alpine lakes and dirt ridges.",
    coordinates: { lat: -8.1081, lng: 112.9224 },
    imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "pantai-3-warna",
    name: "Pantai 3 Warna",
    category: "Coastal Reserve",
    description: "Marine conservation area with multi-hued turquoise waters and coral reefs.",
    coordinates: { lat: -8.4444, lng: 112.6789 },
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "coban-pelangi",
    name: "Coban Pelangi",
    category: "Highland Waterfall",
    description: "Highland waterfall throwing rainbows in the morning sun mist near Poncokusumo.",
    coordinates: { lat: -8.0193, lng: 112.8234 },
    imageUrl: "https://images.unsplash.com/photo-1501179611942-0c2610dd1dd7?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "pulau-sempu",
    name: "Pulau Sempu",
    category: "Island Lagoon",
    description: "Uninhabited island reserve containing the enclosed Segara Anakan saltwater lagoon.",
    coordinates: { lat: -8.4483, lng: 112.6881 },
    imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "budug-asu",
    name: "Budug Asu",
    category: "Mountain Trail",
    description: "Pine forest trail and dirt ridge overlooking Mount Arjuno in Lawang.",
    coordinates: { lat: -7.8078, lng: 112.7089 },
    imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "jatim-park-1",
    name: "Jatim Park 1",
    category: "Theme Park",
    description: "Popular amusement park combined with interactive science exhibits in Batu.",
    coordinates: { lat: -7.8841, lng: 112.5240 },
    imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "museum-angkut",
    name: "Museum Angkut",
    category: "Heritage Transport",
    description: "Expansive vintage vehicle museum with themed global movie zones in Batu.",
    coordinates: { lat: -7.8789, lng: 112.5195 },
    imageUrl: "https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "kayutangan-heritage",
    name: "Kayutangan Heritage",
    category: "Colonial Architecture",
    description: "Preserved colonial avenue featuring vintage coffee spots and Dutch architecture.",
    coordinates: { lat: -7.9826, lng: 112.6304 },
    imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "sumber-sirah",
    name: "Sumber Sirah",
    category: "Freshwater Spring",
    description: "Crystal-clear freshwater spring pool ideal for underwater snorkeling over moss.",
    coordinates: { lat: -8.1432, lng: 112.6048 },
    imageUrl: "https://images.unsplash.com/photo-1501179611942-0c2610dd1dd7?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "nakoa-coffee",
    name: "Nakoa Coffee",
    category: "Urban Workspace",
    description: "Modern 24/7 industrial cafe popular with digital nomads and local students.",
    coordinates: { lat: -7.9666, lng: 112.6326 },
    imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "jodipan-village",
    name: "Kampung Warna Warni Jodipan",
    category: "Artistic Village",
    description: "Vibrant multi-colored riverside village featuring outdoor murals and glass bridge.",
    coordinates: { lat: -7.9839, lng: 112.6372 },
    imageUrl: "https://images.unsplash.com/photo-1518151246473-fd677e497d39?auto=format&fit=crop&q=80&w=800",
  },
  {
    slug: "toko-oen",
    name: "Toko Oen",
    category: "Culinary Landmark",
    description: "Historic 1930s colonial ice cream parlour and restaurant in downtown Malang.",
    coordinates: { lat: -7.9786, lng: 112.6288 },
    imageUrl: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=800",
  },
];



const KEYWORD_MAP: Record<string, string[]> = {
  "mount-bromo": ["bromo", "crater", "caldera", "volcano"],
  "tumpak-sewu": ["sewu", "tumpak", "waterfall"],
  "mount-semeru": ["semeru", "mahameru"],
  "pantai-3-warna": ["warna", "pantai", "beach", "coast"],
  "coban-pelangi": ["pelangi", "coban"],
  "pulau-sempu": ["sempu", "island", "lagoon"],
  "budug-asu": ["budug", "asu", "trail"],
  "jatim-park-1": ["jatim", "park"],
  "museum-angkut": ["angkut", "museum", "vehicle"],
  "kayutangan-heritage": ["kayutangan", "heritage", "colonial"],
  "sumber-sirah": ["sirah", "sumber", "spring"],
  "nakoa-coffee": ["nakoa", "coffee", "cafe"],
  "jodipan-village": ["jodipan", "warna", "colorful"],
  "toko-oen": ["oen", "toko", "icecream"],
};

// ─── Reference Image Feature Extraction & Similarity Matching ────────
// Instead of hardcoded heuristics, we compare the uploaded photo's
// structural features against actual reference images of each landmark.

interface ImageFeatures {
  grid: { hue: number; sat: number; light: number }[];
  hEdge: number;
  vEdge: number;
  shadowPct: number;
  highlightPct: number;
}

function extractFeatures(data: Uint8ClampedArray, w: number, h: number): ImageFeatures {
  const grid: { hue: number; sat: number; light: number }[] = [];
  const CELLS = 10;
  const CELL_W = w / CELLS;
  const CELL_H = h / CELLS;

  for (let gy = 0; gy < CELLS; gy++) {
    for (let gx = 0; gx < CELLS; gx++) {
      let rS = 0, gS = 0, bS = 0, pc = 0;
      for (let y = Math.floor(gy * CELL_H); y < Math.floor((gy + 1) * CELL_H); y++) {
        for (let x = Math.floor(gx * CELL_W); x < Math.floor((gx + 1) * CELL_W); x++) {
          const idx = (y * w + x) * 4;
          rS += data[idx]; gS += data[idx + 1]; bS += data[idx + 2]; pc++;
        }
      }
      const r = rS / pc / 255, g = gS / pc / 255, b = bS / pc / 255;
      const max = Math.max(r, g, b), min = Math.min(r, g, b);
      let hue = 0, sat = 0, light = (max + min) / 2;
      if (max !== min) {
        const d = max - min;
        sat = light > 0.5 ? d / (2 - max - min) : d / (max + min);
        hue = ((max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4) / 6);
      }
      grid.push({ hue: Math.round(hue * 360), sat: Math.round(sat * 100), light: Math.round(light * 100) });
    }
  }

  // Edge detection
  let hEdge = 0, vEdge = 0, edgePx = 0;
  for (let y = 1; y < h; y++) {
    for (let x = 1; x < w; x++) {
      const idx = (y * w + x) * 4;
      const luma = 0.299 * data[idx] + 0.587 * data[idx + 1] + 0.114 * data[idx + 2];
      const dx = Math.abs(luma - (0.299 * data[idx - 4] + 0.587 * data[idx - 3] + 0.114 * data[idx - 2]));
      const dy = Math.abs(luma - (0.299 * data[idx - w * 4] + 0.587 * data[idx - w * 4 + 1] + 0.114 * data[idx - w * 4 + 2]));
      if (dx > 15 || dy > 15) { hEdge += dy; vEdge += dx; edgePx++; }
    }
  }
  const e = edgePx || 1;

  let shadows = 0, highlights = 0;
  for (let i = 0; i < data.length; i += 4) {
    const luma = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    if (luma < 60) shadows++;
    else if (luma > 180) highlights++;
  }
  const total = data.length / 4;

  return { grid, hEdge: hEdge / e, vEdge: vEdge / e, shadowPct: shadows / total, highlightPct: highlights / total };
}

function cosineSimilarity(a: number[], b: number[]): number {
  let dot = 0, nA = 0, nB = 0;
  for (let i = 0; i < a.length; i++) { dot += a[i] * b[i]; nA += a[i] * a[i]; nB += b[i] * b[i]; }
  return nA && nB ? dot / (Math.sqrt(nA) * Math.sqrt(nB)) : 0;
}

// Lazy cache of reference image features
let referenceCache: Record<string, ImageFeatures> | null = null;
let cachePromise: Promise<void> | null = null;

async function loadReferenceFeatures(): Promise<Record<string, ImageFeatures>> {
  if (referenceCache) return referenceCache;
  if (cachePromise) { await cachePromise; return referenceCache!; }

  cachePromise = new Promise<void>((resolve) => {
    const results: Record<string, ImageFeatures> = {};
    let loaded = 0;
    const total = LENS_LOCATIONS.length;

    LENS_LOCATIONS.forEach((loc) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = loc.imageUrl;

      img.onload = () => {
        try {
          const c = document.createElement("canvas");
          c.width = 100; c.height = 100;
          const ctx = c.getContext("2d");
          if (ctx) {
            ctx.drawImage(img, 0, 0, 100, 100);
            const data = ctx.getImageData(0, 0, 100, 100).data;
            results[loc.slug] = extractFeatures(data, 100, 100);
          }
        } catch { /* skip */ }
        loaded++;
        if (loaded === total) { referenceCache = results; resolve(); }
      };

      img.onerror = () => {
        loaded++;
        if (loaded === total) { referenceCache = results; resolve(); }
      };
    });
  });

  await cachePromise;
  return referenceCache!;
}

function computeSimilarity(user: ImageFeatures, ref: ImageFeatures): number {
  const userVec: number[] = [];
  const refVec: number[] = [];
  for (let i = 0; i < 100; i++) {
    userVec.push(user.grid[i].hue / 360, user.grid[i].sat / 100, user.grid[i].light / 100);
    refVec.push(ref.grid[i].hue / 360, ref.grid[i].sat / 100, ref.grid[i].light / 100);
  }
  const gridSim = cosineSimilarity(userVec, refVec);

  const hRatio = user.hEdge / (ref.hEdge || 1);
  const vRatio = user.vEdge / (ref.vEdge || 1);
  const edgeSim = Math.max(0, 1 - Math.abs(hRatio - 1) - Math.abs(vRatio - 1));

  const histSim = 1 - Math.abs(user.shadowPct - ref.shadowPct) - Math.abs(user.highlightPct - ref.highlightPct);

  return Math.max(0, gridSim * 0.60 + edgeSim * 0.25 + histSim * 0.15);
}

export async function classifyLocationPhoto(
  dataUrl: string,
  filename: string = "",
  _userCoords?: { lat: number; lng: number } | null
): Promise<ClassificationOutput> {
  const fnameLower = filename.toLowerCase();

  // Score base map — pure visual + keyword, no GPS proximity
  const scores: Record<string, { score: number; reason: string }> = {};
  LENS_LOCATIONS.forEach((loc) => {
    let score = 50;
    let reason = "Visual profile match";

    // Keyword boost
    const kws = KEYWORD_MAP[loc.slug] || [];
    for (const kw of kws) {
      if (fnameLower.includes(kw)) {
        score += 45;
        reason = `Filename matched "${kw}"`;
        break;
      }
    }

    scores[loc.slug] = { score, reason };
  });

  // 3. Canvas Image Color Sampling using Promise.withResolvers()
  const { promise, resolve } = Promise.withResolvers<ClassificationOutput>();

  const img = new Image();
  img.crossOrigin = "anonymous";
  img.src = dataUrl;

  img.onload = () => {
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        // Fallback: rank using keyword/GPS only
        const ranked = LENS_LOCATIONS.map((loc) => {
          const s = scores[loc.slug];
          return { ...loc, confidence: Math.min(99.0, Math.max(70.0, s.score)), matchReason: s.reason };
        }).sort((a, b) => b.confidence - a.confidence);
        resolve({ topMatch: ranked[0], candidates: ranked.slice(1, 4), isGpsAssisted: false });
        return;
      }

      // ─── Multi-Resolution Analysis ─────────────────────────
      // 1. Fine grid: 10×10 at 100×100px (100 cells) for spatial detail
      canvas.width = 100;
      canvas.height = 100;
      ctx.drawImage(img, 0, 0, 100, 100);
      const fineData = ctx.getImageData(0, 0, 100, 100).data;
      const FINE_CELL = 10; // 10×10 grid
      const FINE_STEP = 10; // pixels per cell side (100/10)

      // 2. Coarse grid: 4×4 at 20×20px (16 cells) — keep existing
      canvas.width = 20;
      canvas.height = 20;
      ctx.drawImage(img, 0, 0, 20, 20);
      const coarseData = ctx.getImageData(0, 0, 20, 20).data;

      // ─── Texture / Edge Detection ─────────────────────────
      // Detect horizontal vs vertical edge energy via pixel-delta sums
      let hEdgeEnergy = 0;
      let vEdgeEnergy = 0;
      let edgePixels = 0;
      for (let y = 1; y < 20; y++) {
        for (let x = 1; x < 20; x++) {
          const idx = (y * 20 + x) * 4;
          const idxL = (y * 20 + (x - 1)) * 4;
          const idxU = ((y - 1) * 20 + x) * 4;
          const luma = 0.299 * coarseData[idx] + 0.587 * coarseData[idx + 1] + 0.114 * coarseData[idx + 2];
          const lumaL = 0.299 * coarseData[idxL] + 0.587 * coarseData[idxL + 1] + 0.114 * coarseData[idxL + 2];
          const lumaU = 0.299 * coarseData[idxU] + 0.587 * coarseData[idxU + 1] + 0.114 * coarseData[idxU + 2];
          const dx = Math.abs(luma - lumaL);
          const dy = Math.abs(luma - lumaU);
          if (dx > 15 || dy > 15) {
            hEdgeEnergy += dy;
            vEdgeEnergy += dx;
            edgePixels++;
          }
        }
      }
      const totalCells = edgePixels || 1;
      const hEdgeRatio = hEdgeEnergy / totalCells;
      const vEdgeRatio = vEdgeEnergy / totalCells;

      // ─── Brightness Histogram ──────────────────────────────
      let shadows = 0, midtones = 0, highlights = 0;
      for (let i = 0; i < coarseData.length; i += 4) {
        const luma = 0.299 * coarseData[i] + 0.587 * coarseData[i + 1] + 0.114 * coarseData[i + 2];
        if (luma < 60) shadows++;
        else if (luma < 180) midtones++;
        else highlights++;
      }
      const totalPx = coarseData.length / 4;
      const shadowPct = shadows / totalPx;
      const highlightPct = highlights / totalPx;

      // ─── Extract Fine Grid Signatures (100 cells) ─────────
      interface CellSig { hue: number; sat: number; light: number; variance: number }
      const fineGrid: CellSig[] = [];
      for (let gy = 0; gy < FINE_CELL; gy++) {
        for (let gx = 0; gx < FINE_CELL; gx++) {
          let rSum = 0, gSum = 0, bSum = 0, pc = 0;
          let r2Sum = 0, g2Sum = 0, b2Sum = 0;
          for (let y = gy * FINE_STEP; y < (gy + 1) * FINE_STEP; y++) {
            for (let x = gx * FINE_STEP; x < (gx + 1) * FINE_STEP; x++) {
              const idx = (y * 100 + x) * 4;
              const r = fineData[idx], g = fineData[idx + 1], b = fineData[idx + 2];
              rSum += r; gSum += g; bSum += b;
              r2Sum += r * r; g2Sum += g * g; b2Sum += b * b;
              pc++;
            }
          }
          const rAvg = rSum / pc / 255, gAvg = gSum / pc / 255, bAvg = bSum / pc / 255;
          const rVar = (r2Sum / pc - (rSum / pc) ** 2) / 65025;
          const variance = (rVar + (g2Sum / pc - (gSum / pc) ** 2) / 65025 + (b2Sum / pc - (bSum / pc) ** 2) / 65025) / 3;

          // RGB → HSL
          const max = Math.max(rAvg, gAvg, bAvg), min = Math.min(rAvg, gAvg, bAvg);
          let h = 0, s = 0, l = (max + min) / 2;
          if (max !== min) {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
              case rAvg: h = (gAvg - bAvg) / d + (gAvg < bAvg ? 6 : 0); break;
              case gAvg: h = (bAvg - rAvg) / d + 2; break;
              case bAvg: h = (rAvg - gAvg) / d + 4; break;
            }
            h /= 6;
          }
          fineGrid.push({ hue: Math.round(h * 360), sat: Math.round(s * 100), light: Math.round(l * 100), variance: Math.round(variance * 1000) });
        }
      }

      // ─── Extract Coarse Grid Signatures (16 cells) ─────────
      const coarseGrid: { hue: number; sat: number; light: number }[] = [];
      for (let gy = 0; gy < 4; gy++) {
        for (let gx = 0; gx < 4; gx++) {
          let rSum = 0, gSum = 0, bSum = 0, pc = 0;
          for (let y = gy * 5; y < (gy + 1) * 5; y++) {
            for (let x = gx * 5; x < (gx + 1) * 5; x++) {
              const idx = (y * 20 + x) * 4;
              rSum += coarseData[idx]; gSum += coarseData[idx + 1]; bSum += coarseData[idx + 2]; pc++;
            }
          }
          const r = rSum / pc / 255, g = gSum / pc / 255, b = bSum / pc / 255;
          const max = Math.max(r, g, b), min = Math.min(r, g, b);
          let h = 0, s = 0, l = (max + min) / 2;
          if (max !== min) {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
              case r: h = (g - b) / d + (g < b ? 6 : 0); break;
              case g: h = (b - r) / d + 2; break;
              case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
          }
          coarseGrid.push({ hue: Math.round(h * 360), sat: Math.round(s * 100), light: Math.round(l * 100) });
        }
      }

      // ─── Multi-Scale Landmark Classification ───────────────
      LENS_LOCATIONS.forEach((loc) => {
        let matchWeight = 0;
        const reasons: string[] = [];

        // Utility: grid slices
        const cTop = coarseGrid.slice(0, 4);
        const cMid = coarseGrid.slice(4, 12);
        const cBot = coarseGrid.slice(12, 16);
        const fTop = fineGrid.slice(0, 10);
        const fMid = fineGrid.slice(10, 90);
        const fBot = fineGrid.slice(90, 100);

        // ── Bromo / Semeru: Volcanic Caldera ──
        if (loc.slug === "mount-bromo" || loc.slug === "mount-semeru") {
          const hasSky = cTop.some(c => c.light > 65 && (c.hue > 180 || c.sat < 20));
          const darkBottom = cBot.every(c => c.light < 45 && c.sat < 25);
          const isHorizontal = hEdgeRatio > vEdgeRatio * 1.4; // strong horizon line
          const ashTexture = fBot.filter(c => c.variance < 80).length > 6; // smooth ash
          if (hasSky && darkBottom) { matchWeight += 28; reasons.push("caldera-sky horizon"); }
          if (isHorizontal) { matchWeight += 14; reasons.push("strong horizon line"); }
          if (ashTexture) { matchWeight += 12; reasons.push("ash texture profile"); }
        }

        // ── Tumpak Sewu / Coban Pelangi: Waterfall + Ravine ──
        if (loc.slug === "tumpak-sewu" || loc.slug === "coban-pelangi") {
          const greenMid = fMid.filter(c => c.hue >= 70 && c.hue <= 165 && c.sat > 20).length;
          const verticalEdge = vEdgeRatio > hEdgeRatio * 1.3;
          const brightTop = fTop.filter(c => c.light > 70).length > 5; // mist/sky at top
          if (greenMid >= 30) { matchWeight += 24; reasons.push("dense foliage grid"); }
          if (verticalEdge) { matchWeight += 16; reasons.push("vertical waterfall edges"); }
          if (brightTop) { matchWeight += 12; reasons.push("misty ravine top"); }
        }

        // ── Jodipan: Multi-color Artistic Village ──
        if (loc.slug === "jodipan-village") {
          const saturated = fineGrid.filter(c => c.sat > 35 && c.light > 25 && c.light < 85);
          const hues = new Set(saturated.map(c => Math.round(c.hue / 30) * 30));
          const highVar = fineGrid.filter(c => c.variance > 120).length; // textured paint
          if (saturated.length >= 40 && hues.size >= 5) { matchWeight += 30; reasons.push("multi-hue saturated grid"); }
          if (highVar >= 20) { matchWeight += 14; reasons.push("textured mural paint"); }
        }

        // ── Kayutangan / Toko Oen: Colonial Heritage ──
        if (loc.slug === "kayutangan-heritage" || loc.slug === "toko-oen") {
          const warmMid = cMid.filter(c => c.hue >= 10 && c.hue <= 50 && c.sat > 15).length;
          const grayBot = cBot.some(c => c.sat < 20 && c.light < 60);
          const structuredEdge = Math.abs(hEdgeRatio - vEdgeRatio) < 8; // grid-like edges
          if (warmMid >= 3 && grayBot) { matchWeight += 26; reasons.push("warm facade + street"); }
          if (structuredEdge) { matchWeight += 12; reasons.push("architectural edge grid"); }
        }

        // ── Pantai 3 Warna / Pulau Sempu: Coastal Lagoon ──
        if (loc.slug === "pantai-3-warna" || loc.slug === "pulau-sempu") {
          const water = fMid.concat(fBot).filter(c => c.hue >= 165 && c.hue <= 230 && c.sat > 20 && c.light > 30).length;
          const canopy = fTop.filter(c => c.hue >= 80 && c.hue <= 160 && c.sat > 15).length;
          if (water >= 25) { matchWeight += 24; reasons.push("aquatic water spectrum"); }
          if (canopy >= 4) { matchWeight += 14; reasons.push("coastal canopy"); }
        }

        // ── Nakoa Coffee: Dark indoor workspace ──
        if (loc.slug === "nakoa-coffee") {
          const dark = fineGrid.filter(c => c.light < 35).length;
          const warmSpot = fineGrid.filter(c => c.light > 65 && c.hue >= 20 && c.hue <= 55).length;
          const lowVar = fineGrid.filter(c => c.variance < 50).length; // smooth indoor walls
          if (dark >= 35) { matchWeight += 18; reasons.push("indoor shadow profile"); }
          if (warmSpot >= 5) { matchWeight += 12; reasons.push("warm spotlighting"); }
          if (lowVar >= 50) { matchWeight += 10; reasons.push("smooth indoor surfaces"); }
        }

        // ── Jatim Park / Museum Angkut: Structured Entertainment ──
        if (loc.slug === "jatim-park-1" || loc.slug === "museum-angkut") {
          const brightColorful = fineGrid.filter(c => c.sat > 30 && c.light > 40).length;
          const balancedEdges = Math.abs(hEdgeRatio - vEdgeRatio) < 6;
          if (brightColorful >= 40 && balancedEdges) { matchWeight += 28; reasons.push("vibrant structured scene"); }
        }

        // ── Budug Asu: Mountain trail (green canopy + brown trail center) ──
        if (loc.slug === "budug-asu") {
          const trailCenter = fineGrid.slice(40, 60).filter(c => c.hue >= 20 && c.hue <= 45 && c.sat > 10 && c.light > 30).length;
          const greenSurround = fineGrid.filter(c => c.hue >= 70 && c.hue <= 160 && c.sat > 15).length;
          if (trailCenter >= 4 && greenSurround >= 30) { matchWeight += 30; reasons.push("trail & canopy profile"); }
        }

        // ── Pantai 3 Warna: Sandy bright foreground ──
        if (loc.slug === "pantai-3-warna") {
          const brightBot = fBot.filter(c => c.light > 60 && c.sat < 25).length;
          if (brightBot >= 6) { matchWeight += 10; reasons.push("bright sand foreground"); }
        }

        // ── Sumber Sirah: Freshwater spring (cyan+bright) ──
        if (loc.slug === "sumber-sirah") {
          const cyanWater = fMid.filter(c => c.hue >= 160 && c.hue <= 200 && c.sat > 20 && c.light > 50).length;
          if (cyanWater >= 20) { matchWeight += 28; reasons.push("cyan spring water"); }
          if (highlightPct > 0.5) { matchWeight += 10; reasons.push("bright sunlit pool"); }
        }

        // ── Mount Semeru: High altitude + dark peak ──
        if (loc.slug === "mount-semeru") {
          const darkPeak = fineGrid.slice(0, 30).filter(c => c.light < 35 && c.sat < 20).length;
          if (darkPeak >= 12) { matchWeight += 12; reasons.push("dark volcanic peak"); }
          if (shadowPct > 0.4) { matchWeight += 8; reasons.push("high-contrast alpine shadows"); }
        }

        if (matchWeight > 0) {
          scores[loc.slug].score += matchWeight;
          scores[loc.slug].reason = reasons.length > 0 ? reasons.join(" & ") : scores[loc.slug].reason;
        }
      });

      // ─── Reference Image Similarity Comparison ─────────────
      // Compare user photo's features against cached reference images of each landmark.
      // This answers: "does this photo look like the actual reference photo of this place?"
      loadReferenceFeatures().then((refs) => {
        const userFeatures: ImageFeatures = {
          grid: fineGrid.map(c => ({ hue: c.hue, sat: c.sat, light: c.light })),
          hEdge: hEdgeRatio,
          vEdge: vEdgeRatio,
          shadowPct,
          highlightPct,
        };

        LENS_LOCATIONS.forEach((loc) => {
          const ref = refs[loc.slug];
          if (!ref) return;
          const sim = computeSimilarity(userFeatures, ref);
          // If similarity is strong, boost the score significantly
          if (sim > 0.65) {
            const boost = Math.round(sim * 30);
            scores[loc.slug].score += boost;
            scores[loc.slug].reason = `${scores[loc.slug].reason} · ref match ${Math.round(sim * 100)}%`;
          }
        });

        // Re-rank with updated scores
        const ranked = LENS_LOCATIONS.map((loc) => {
          const s = scores[loc.slug];
          return { ...loc, confidence: Math.min(99.0, Math.max(70.0, s.score)), matchReason: s.reason };
        }).sort((a, b) => b.confidence - a.confidence);

        resolve({ topMatch: ranked[0], candidates: ranked.slice(1, 4), isGpsAssisted: false });
      }).catch(() => {
        // Fallback: rank without reference comparison
        const ranked = LENS_LOCATIONS.map((loc) => {
          const s = scores[loc.slug];
          return { ...loc, confidence: Math.min(99.0, Math.max(70.0, s.score)), matchReason: s.reason };
        }).sort((a, b) => b.confidence - a.confidence);

        resolve({ topMatch: ranked[0], candidates: ranked.slice(1, 4), isGpsAssisted: false });
      });
    } catch {
      // Ignore canvas errors — fall through to keyword/GPS-only ranking
    }
  }
  
  img.onerror = () => {
    const ranked: LensLocationCandidate[] = LENS_LOCATIONS.map((loc) => {
      const s = scores[loc.slug];
      return {
        ...loc,
        confidence: Math.min(99.0, Math.max(70.0, s.score)),
        matchReason: s.reason,
      };
    }).sort((a, b) => b.confidence - a.confidence);

    resolve({
      topMatch: ranked[0],
      candidates: ranked.slice(1, 4),
      isGpsAssisted: false,
    });
  };

  return promise;
}
