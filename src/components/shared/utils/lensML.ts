import { pipeline, type Pipeline } from '@xenova/transformers';

export interface MLMatchResult {
  slug: string;
  name: string;
  category: string;
  description: string;
  coordinates: { lat: number; lng: number };
  confidence: number;
  matchReason: string;
}

export interface MLClassificationOutput {
  topMatch: MLMatchResult | null;
  candidates: MLMatchResult[];
  isUnknown: boolean;
}

interface LandmarkProfile {
  slug: string;
  name: string;
  category: string;
  description: string;
  coordinates: { lat: number; lng: number };
  texts: string[]; // visual descriptions for zero-shot matching
}

// Text descriptions that the model uses to visually identify each place.
// The model was pre-trained on billions of image-text pairs, so it already
// knows what these concepts look like. No training images needed.
const LANDMARK_PROFILES: LandmarkProfile[] = [
  {
    slug: "mount-bromo",
    name: "Mount Bromo",
    category: "Volcanic Nature",
    description: "Iconic active volcano in the Tengger massif with sunrise sea-of-sand caldera views.",
    coordinates: { lat: -7.9425, lng: 112.9530 },
    texts: [
      "a volcanic crater surrounded by grey sand desert at sunrise",
      "a large active volcano with smoke rising from its crater",
      "a dramatic sunrise over a volcanic landscape with ash plains",
    ],
  },
  {
    slug: "tumpak-sewu",
    name: "Tumpak Sewu Waterfall",
    category: "Lush Waterfalls",
    description: "Curtain waterfall cascading into a semi-circular lush jungle ravine beneath Mt. Semeru.",
    coordinates: { lat: -8.2307, lng: 112.9167 },
    texts: [
      "a wide curtain waterfall cascading down a rock cliff into a lush green tropical jungle ravine with mist",
      "a massive semi-circular curtain waterfall surrounded by lush green tropical rainforest vegetation on both sides",
      "water falling over a wide horseshoe-shaped rock cliff face into a green valley with dense jungle below",
    ],
  },
  {
    slug: "mount-semeru",
    name: "Mount Semeru",
    category: "Volcanic Peak",
    description: "Highest volcano in Java surrounded by alpine lakes and dirt ridges.",
    coordinates: { lat: -8.1081, lng: 112.9224 },
    texts: [
      "a tall volcanic mountain peak with white smoke rising from the crater against a bright blue sky",
      "a high altitude volcanic mountain landscape with rocky terrain and alpine meadow foreground",
      "an active conical volcano mountain peak puffing smoke against a clear blue sky with rocky slopes",
    ],
  },
  {
    slug: "pantai-3-warna",
    name: "Pantai 3 Warna",
    category: "Coastal Reserve",
    description: "Marine conservation area with multi-hued turquoise waters and coral reefs.",
    coordinates: { lat: -8.4444, lng: 112.6789 },
    texts: [
      "a tropical beach coastline with turquoise layered ocean water in three shades of blue and white sand",
      "a beach coastline with crystal clear blue ocean water and a gentle wave breaking on white sand",
      "a coastal nature reserve view with colorful layered turquoise water and a wide sandy beach shoreline",
    ],
  },
  {
    slug: "coban-pelangi",
    name: "Coban Pelangi",
    category: "Highland Waterfall",
    description: "Highland waterfall throwing rainbows in the morning sun mist.",
    coordinates: { lat: -8.0193, lng: 112.8234 },
    texts: [
      "a tall highland waterfall with rainbow colors forming in the misty spray above a pool",
      "water cascading down dark volcanic rocks with morning sunlight creating visible rainbow effects in the spray",
      "a waterfall in a highland tropical forest area with mist rising from the plunge pool and rainbows",
    ],
  },
  {
    slug: "pulau-sempu",
    name: "Pulau Sempu",
    category: "Island Lagoon",
    description: "Uninhabited island reserve containing an enclosed saltwater lagoon.",
    coordinates: { lat: -8.4483, lng: 112.6881 },
    texts: [
      "a turquoise colored saltwater lagoon completely surrounded by dense tropical island vegetation and green forest",
      "a hidden circular lagoon on a small tropical island, enclosed by rocky cliffs and palm trees",
      "an aerial view of a bright blue lagoon fully enclosed by steep green island hills and tropical jungle",
    ],
  },
  {
    slug: "budug-asu",
    name: "Budug Asu",
    category: "Mountain Trail",
    description: "Pine forest trail and dirt ridge overlooking Mount Arjuno.",
    coordinates: { lat: -7.8078, lng: 112.7089 },
    texts: [
      "a winding hiking trail through pine forest with a dramatic mountain peak visible in the distance",
      "a dirt path hiking trail on a mountain ridge overlooking layered green mountain valleys",
      "a mountain ridge hiking trail with scenic valley views and rows of pine trees framing the path",
    ],
  },
  {
    slug: "jatim-park-1",
    name: "Jatim Park 1",
    category: "Theme Park",
    description: "Popular amusement park combined with interactive science exhibits.",
    coordinates: { lat: -7.8841, lng: 112.5240 },
    texts: [
      "a family amusement park with colorful carnival rides, roller coasters, and bright themed buildings",
      "a large theme park entrance plaza with bright colored buildings and a visible roller coaster track",
      "a family entertainment park with colorful structures, outdoor amusement rides, and crowds of visitors",
    ],
  },
  {
    slug: "museum-angkut",
    name: "Museum Angkut",
    category: "Heritage Transport",
    description: "Expansive vintage vehicle museum with themed global movie zones.",
    coordinates: { lat: -7.8789, lng: 112.5195 },
    texts: [
      "a large museum exhibition hall displaying rows of vintage cars and classic automobiles from different eras",
      "a transportation museum with antique automobiles from the early 1900s arranged in themed exhibition zones",
      "indoor museum exhibition with spot lighting on classic vehicles and vintage cars from around the world",
    ],
  },
  {
    slug: "kayutangan-heritage",
    name: "Kayutangan Heritage",
    category: "Colonial Architecture",
    description: "Preserved colonial avenue featuring vintage coffee spots and Dutch architecture.",
    coordinates: { lat: -7.9826, lng: 112.6304 },
    texts: [
      "a street with warm orange brick colonial buildings and a grey asphalt road, heritage architecture",
      "old Dutch colonial shopfronts with large windows and outdoor cafe tables on a pedestrian street",
      "a row of heritage buildings with red brick facades, vintage lamp posts, and a cobblestone walking street",
      "a preserved colonial avenue in Indonesia with art deco buildings and vintage storefronts",
    ],
  },
  {
    slug: "sumber-sirah",
    name: "Sumber Sirah",
    category: "Freshwater Spring",
    description: "Crystal-clear freshwater spring pool ideal for snorkeling over water plants.",
    coordinates: { lat: -8.1432, lng: 112.6048 },
    texts: [
      "a crystal clear freshwater spring pool with bright green underwater grass visible through transparent water",
      "a natural swimming pool in a rocky setting with clear blue water and aquatic plants visible on the bottom",
      "a spring water pool surrounded by dark rocks and lush tropical vegetation with glass-like clear water",
    ],
  },
  {
    slug: "nakoa-coffee",
    name: "Nakoa Coffee",
    category: "Urban Workspace",
    description: "Modern 24/7 industrial cafe popular with digital nomads.",
    coordinates: { lat: -7.9666, lng: 112.6326 },
    texts: [
      "a modern industrial coffee shop interior with exposed brick walls, wooden communal tables, and warm pendant lighting",
      "a cozy workspace cafe with people working on laptops at wooden communal tables with coffee cups",
      "an indoor cafe with warm amber pendant lighting, minimalist decor, and contemporary wooden furniture",
    ],
  },
  {
    slug: "jodipan-village",
    name: "Kampung Warna Warni Jodipan",
    category: "Artistic Village",
    description: "Vibrant multi-colored riverside village featuring outdoor murals.",
    coordinates: { lat: -7.9839, lng: 112.6372 },
    texts: [
      "a steep hillside village where every house is painted bright rainbow colors with murals and art",
      "a narrow street with houses painted in multiple bright rainbow colors, colorful murals on every wall",
      "a riverside neighborhood where all buildings are painted vibrant colors with a glass bridge connecting the two sides",
    ],
  },
  {
    slug: "toko-oen",
    name: "Toko Oen",
    category: "Culinary Landmark",
    description: "Historic 1930s colonial ice cream parlour and restaurant in downtown Malang.",
    coordinates: { lat: -7.9786, lng: 112.6288 },
    texts: [
      "a vintage colonial restaurant interior with dark wooden furniture, antique framed photos, and old world character",
      "a historic 1930s ice cream parlor with retro decor, vintage wooden chairs, and classic ceiling fans",
      "an old-fashioned colonial restaurant with dark wooden paneled interiors, warm amber lighting from vintage lamps",
    ],
  },
];

// ─── Zero-Shot Image Classifier ──────────────────────────────────────
// Uses a pre-trained vision-language model (CLIP / SigLIP) that understands
// images and text together. No training data needed — the model already
// knows what "waterfall", "volcano", "colonial street" look like.

let classifier: Pipeline | null = null;
let loadPromise: Promise<void> | null = null;

/** Start loading the model in the background. Safe to call anytime. */
export function preloadModel(): void {
  if (classifier || loadPromise) return;
  loadPromise = pipeline('zero-shot-image-classification', 'Xenova/clip-vit-base-patch16')
    .then((m: any) => { classifier = m; })
    .catch(() => { classifier = null; });
}

async function loadClassifier(): Promise<void> {
  if (classifier) return;
  if (loadPromise) { await loadPromise; return; }
  preloadModel();
  await loadPromise;
}

const UNKNOWN_THRESHOLD = 0.25; // Below this → "place not recognized"

export async function zeroShotClassify(
  imageData: ImageData | HTMLImageElement | string
): Promise<MLClassificationOutput> {
  await loadClassifier();

  if (!classifier) {
    // Model failed to load — return empty result
    return { topMatch: null, candidates: [], isUnknown: true };
  }

  // Build candidate labels from all landmark text descriptions
  const candidateLabels = LANDMARK_PROFILES.flatMap((p) => p.texts);
  // Track which labels map to which landmark
  const labelToSlug: string[] = [];
  LANDMARK_PROFILES.forEach((p) => {
    p.texts.forEach(() => labelToSlug.push(p.slug));
  });

  try {
    const results = await classifier(imageData, candidateLabels);

    // Aggregate scores per-landmark (take max score across all their texts)
    const slugScores: Record<string, number> = {};
    const slugReasons: Record<string, string> = {};
    
    for (const r of results as { label: string; score: number }[]) {
      const idx = candidateLabels.indexOf(r.label);
      const slug = labelToSlug[idx];
      if (!slugScores[slug] || r.score > slugScores[slug]) {
        slugScores[slug] = r.score;
        slugReasons[slug] = `visual match: ${r.label}`;
      }
    }

    // Build ranked candidates
    const ranked = LANDMARK_PROFILES.map((p) => {
      const score = slugScores[p.slug] || 0;
      return {
        slug: p.slug,
        name: p.name,
        category: p.category,
        description: p.description,
        coordinates: p.coordinates,
        confidence: Math.round(score * 1000) / 10,
        matchReason: slugReasons[p.slug] || "low visual similarity",
      };
    }).sort((a, b) => b.confidence - a.confidence);

    const topScore = ranked[0]?.confidence ?? 0;
    const isUnknown = topScore < UNKNOWN_THRESHOLD * 100;

    if (isUnknown || !ranked[0]) {
      return { topMatch: null, candidates: ranked.slice(0, 3), isUnknown: true };
    }

    return {
      topMatch: ranked[0],
      candidates: ranked.slice(1, 4),
      isUnknown: false,
    };
  } catch {
    return { topMatch: null, candidates: [], isUnknown: true };
  }
}
