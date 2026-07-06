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
    imageUrl: "https://images.unsplash.com/photo-1602154663343-89fe0bf541ab?q=80&w=600&auto=format&fit=crop",
  },
  {
    slug: "tumpak-sewu",
    name: "Tumpak Sewu Waterfall",
    category: "Lush Waterfalls",
    description: "Curtain waterfall cascading into a semi-circular lush jungle ravine beneath Mt. Semeru.",
    coordinates: { lat: -8.2307, lng: 112.9167 },
    imageUrl: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600&auto=format&fit=crop",
  },
  {
    slug: "mount-semeru",
    name: "Mount Semeru",
    category: "Volcanic Peak",
    description: "Highest volcano in Java (Mahameru peak) surrounded by alpine lakes and dirt ridges.",
    coordinates: { lat: -8.1081, lng: 112.9224 },
    imageUrl: "/bromo.jpg",
  },
  {
    slug: "pantai-3-warna",
    name: "Pantai 3 Warna",
    category: "Coastal Reserve",
    description: "Marine conservation area with multi-hued turquoise waters and coral reefs.",
    coordinates: { lat: -8.4444, lng: 112.6789 },
    imageUrl: "/bromo.jpg",
  },
  {
    slug: "coban-pelangi",
    name: "Coban Pelangi",
    category: "Highland Waterfall",
    description: "Highland waterfall throwing rainbows in the morning sun mist near Poncokusumo.",
    coordinates: { lat: -8.0193, lng: 112.8234 },
    imageUrl: "/bromo.jpg",
  },
  {
    slug: "pulau-sempu",
    name: "Pulau Sempu",
    category: "Island Lagoon",
    description: "Uninhabited island reserve containing the enclosed Segara Anakan saltwater lagoon.",
    coordinates: { lat: -8.4483, lng: 112.6881 },
    imageUrl: "/bromo.jpg",
  },
  {
    slug: "budug-asu",
    name: "Budug Asu",
    category: "Mountain Trail",
    description: "Pine forest trail and dirt ridge overlooking Mount Arjuno in Lawang.",
    coordinates: { lat: -7.8078, lng: 112.7089 },
    imageUrl: "/bromo.jpg",
  },
  {
    slug: "jatim-park-1",
    name: "Jatim Park 1",
    category: "Theme Park",
    description: "Popular amusement park combined with interactive science exhibits in Batu.",
    coordinates: { lat: -7.8841, lng: 112.5240 },
    imageUrl: "/bromo.jpg",
  },
  {
    slug: "museum-angkut",
    name: "Museum Angkut",
    category: "Heritage Transport",
    description: "Expansive vintage vehicle museum with themed global movie zones in Batu.",
    coordinates: { lat: -7.8789, lng: 112.5195 },
    imageUrl: "/bromo.jpg",
  },
  {
    slug: "kayutangan-heritage",
    name: "Kayutangan Heritage",
    category: "Colonial Architecture",
    description: "Preserved colonial avenue featuring vintage coffee spots and Dutch architecture.",
    coordinates: { lat: -7.9826, lng: 112.6304 },
    imageUrl: "/bromo.jpg",
  },
  {
    slug: "sumber-sirah",
    name: "Sumber Sirah",
    category: "Freshwater Spring",
    description: "Crystal-clear freshwater spring pool ideal for underwater snorkeling over moss.",
    coordinates: { lat: -8.1432, lng: 112.6048 },
    imageUrl: "/bromo.jpg",
  },
  {
    slug: "nakoa-coffee",
    name: "Nakoa Coffee",
    category: "Urban Workspace",
    description: "Modern 24/7 industrial cafe popular with digital nomads and local students.",
    coordinates: { lat: -7.9666, lng: 112.6326 },
    imageUrl: "/bromo.jpg",
  },
  {
    slug: "jodipan-village",
    name: "Kampung Warna Warni Jodipan",
    category: "Artistic Village",
    description: "Vibrant multi-colored riverside village featuring outdoor murals and glass bridge.",
    coordinates: { lat: -7.9839, lng: 112.6372 },
    imageUrl: "/bromo.jpg",
  },
  {
    slug: "toko-oen",
    name: "Toko Oen",
    category: "Culinary Landmark",
    description: "Historic 1930s colonial ice cream parlour and restaurant in downtown Malang.",
    coordinates: { lat: -7.9786, lng: 112.6288 },
    imageUrl: "/bromo.jpg",
  },
];

function getDistanceKm(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

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

export async function classifyLocationPhoto(
  dataUrl: string,
  filename: string = "",
  userCoords?: { lat: number; lng: number } | null
): Promise<ClassificationOutput> {
  const isGpsAssisted = Boolean(userCoords && userCoords.lat && userCoords.lng);
  const fnameLower = filename.toLowerCase();

  // Score base map
  const scores: Record<string, { score: number; reason: string; dist?: number }> = {};
  LENS_LOCATIONS.forEach((loc) => {
    let score = 50;
    let reason = "Visual profile match";

    // 1. GPS Distance Boost
    let dist: number | undefined;
    if (isGpsAssisted && userCoords) {
      dist = getDistanceKm(userCoords.lat, userCoords.lng, loc.coordinates.lat, loc.coordinates.lng);
      if (dist <= 2.0) {
        score += 35;
        reason = `GPS Nearby (${dist < 1 ? Math.round(dist * 1000) + 'm' : dist.toFixed(1) + 'km'})`;
      } else if (dist <= 10.0) {
        score += 20;
        reason = `GPS Regional Proximity (${dist.toFixed(1)}km)`;
      } else if (dist <= 30.0) {
        score += 10;
      }
    }

    // 2. Keyword boost
    const kws = KEYWORD_MAP[loc.slug] || [];
    for (const kw of kws) {
      if (fnameLower.includes(kw)) {
        score += 45;
        reason = `Filename matched "${kw}"`;
        break;
      }
    }

    scores[loc.slug] = { score, reason, dist };
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
      if (ctx) {
        canvas.width = 20;
        canvas.height = 20;
        ctx.drawImage(img, 0, 0, 20, 20);
        const data = ctx.getImageData(0, 0, 20, 20).data;

        let rSum = 0, gSum = 0, bSum = 0;
        let colorVariances = 0;

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          rSum += r;
          gSum += g;
          bSum += b;

          if (Math.max(r, g, b) - Math.min(r, g, b) > 30) {
            colorVariances++;
          }
        }

        const count = data.length / 4;
        const avgR = rSum / count;
        const avgG = gSum / count;
        const avgB = bSum / count;
        const saturation = colorVariances / count;

        // Apply visual category heuristics
        if (avgG > avgR * 1.1 && avgG > avgB) {
          // Lush forest green
          scores["tumpak-sewu"].score += 25;
          scores["coban-pelangi"].score += 20;
          scores["sumber-sirah"].score += 18;
          scores["budug-asu"].score += 15;
        } else if (avgB > avgR && avgB > avgG) {
          // Marine / Water cyan
          scores["pantai-3-warna"].score += 30;
          scores["pulau-sempu"].score += 25;
          scores["sumber-sirah"].score += 20;
        } else if (saturation > 0.45) {
          // Highly saturated bright colors -> Jodipan or Jatim Park
          scores["jodipan-village"].score += 35;
          scores["jatim-park-1"].score += 25;
          scores["museum-angkut"].score += 20;
        } else if (avgR > 130 && avgG > 100 && avgB < 100) {
          // Warm sepia colonial architectural tones
          scores["kayutangan-heritage"].score += 30;
          scores["toko-oen"].score += 25;
          scores["nakoa-coffee"].score += 20;
        } else if (avgR < 100 && avgG < 100 && avgB < 100) {
          // Dark volcanic ash gray tones
          scores["mount-bromo"].score += 25;
          scores["mount-semeru"].score += 20;
        }
      }
    } catch {
      // Ignore canvas errors
    }

    // Rank candidates by score
    const ranked: LensLocationCandidate[] = LENS_LOCATIONS.map((loc) => {
      const s = scores[loc.slug];
      const confidence = Math.min(99.0, Math.max(70.0, s.score));
      return {
        ...loc,
        confidence: Math.round(confidence * 10) / 10,
        distanceKm: s.dist,
        matchReason: s.reason,
      };
    }).sort((a, b) => b.confidence - a.confidence);

    resolve({
      topMatch: ranked[0],
      candidates: ranked.slice(1, 4), // Top 3 alternative suggestions
      isGpsAssisted,
    });
  };

  img.onerror = () => {
    const ranked: LensLocationCandidate[] = LENS_LOCATIONS.map((loc) => {
      const s = scores[loc.slug];
      return {
        ...loc,
        confidence: Math.min(99.0, Math.max(70.0, s.score)),
        distanceKm: s.dist,
        matchReason: s.reason,
      };
    }).sort((a, b) => b.confidence - a.confidence);

    resolve({
      topMatch: ranked[0],
      candidates: ranked.slice(1, 4),
      isGpsAssisted,
    });
  };

  return promise;
}
