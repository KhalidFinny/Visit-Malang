import type { BudgetTier, EconomyOrigin, PlannerAdvice } from '../types';
import placesData from '../../../../data/places.json';
import { type Recommendation } from '../../weather/types';

export const ECONOMIES: EconomyOrigin[] = [
  // ... (keeping existing economies)
  { code: 'IDR', name: 'Indonesia', strength: 'local', flag: '🇮🇩' },
  { code: 'SGD', name: 'Singapore', strength: 'high', flag: '🇸🇬' },
  { code: 'USD', name: 'United States', strength: 'high', flag: '🇺🇸' },
  { code: 'EUR', name: 'European Union', strength: 'high', flag: '🇪🇺' },
  { code: 'MYR', name: 'Malaysia', strength: 'medium', flag: '🇲🇾' },
  { code: 'GBP', name: 'United Kingdom', strength: 'high', flag: '🇬🇧' },
  { code: 'AUD', name: 'Australia', strength: 'high', flag: '🇦🇺' },
  { code: 'JPY', name: 'Japan', strength: 'high', flag: '🇯🇵' },
  { code: 'CNY', name: 'China', strength: 'high', flag: '🇨🇳' },
  { code: 'KRW', name: 'South Korea', strength: 'high', flag: '🇰🇷' },
  { code: 'HKD', name: 'Hong Kong', strength: 'high', flag: '🇭🇰' },
  { code: 'THB', name: 'Thailand', strength: 'medium', flag: '🇹🇭' },
];

// Seedable PRNG (mulberry32)
function createPRNG(seed: number) {
  return function() {
    let t = seed += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function seedShuffle<T>(array: T[], seed: number): T[] {
  const prng = createPRNG(seed);
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(prng() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const RATES: Record<string, number> = {
  IDR: 1,
  SGD: 11500,
  USD: 16000,
  EUR: 17000,
  MYR: 3400,
  GBP: 20000,
  AUD: 10500,
  JPY: 105,
  CNY: 2200,
  KRW: 11.5,
  HKD: 2000,
  THB: 440,
};

export function generateAdvice(
  budget: BudgetTier,
  origin: EconomyOrigin,
  weather: string,
  timeOfDay: string,
  seed: number = 42
): PlannerAdvice {
  const allPlaces = placesData as Recommendation[];
  const isRaining = weather.toLowerCase().includes('rain') || weather.toLowerCase().includes('overcast');

  // 1. Scoring Heuristic for Budget Consistency
  const scorePlace = (p: Recommendation) => {
    let score = p.popularity || 0.5;
    
    if (budget === 'luxury') {
      // Luxury favors High Popularity (Prestige), Indoor (Museums/Fine Dining), and Historical
      if (p.type === 'indoor') score += 0.5;
      if (p.semanticCategory === 'Historical') score += 0.3;
      if (p.popularity > 0.95) score += 0.4;
    } else if (budget === 'backpacker') {
      // Backpackers favor Nature, Outdoor, and hidden gems (lower popularity)
      if (p.semanticCategory === 'Nature') score += 0.6;
      if (p.type === 'outdoor') score += 0.3;
      if (p.popularity < 0.9) score += 0.2;
    } else {
      // Balanced favors a mix (Attractions/Culinary)
      if (p.semanticCategory === 'Attraction') score += 0.4;
      if (p.popularity > 0.85 && p.popularity < 0.95) score += 0.3;
    }
    return score;
  };

  // 2. Filter & Sort by Relevance (Deterministic base)
  const placeCandidates = allPlaces
    .filter(p => ["Nature", "Historical", "Attraction"].includes(p.semanticCategory) && (isRaining ? p.type === "indoor" : true))
    .sort((a, b) => scorePlace(b) - scorePlace(a));

  const foodCandidates = allPlaces
    .filter(p => p.semanticCategory === "Culinary")
    .sort((a, b) => (b.popularity || 0) - (a.popularity || 0));

  // 3. Select based on seed to provide variety within the tier
  // We take the top 10 relevant items and then seed-shuffle them to get 3
  const places = seedShuffle(placeCandidates.slice(0, 10), seed).slice(0, 3);
  const foods = seedShuffle(foodCandidates.slice(0, 10), seed + 1).slice(0, 3);

  // 4. Generate Headline & Counsel
  let headline = "";
  let counsel = "";

  if (isRaining) {
    headline = budget === "luxury" ? "The Indulgent Shelter" : "The Urban Sanctuary";
    counsel = `As Malang's mist settles over the territory, we invite you to explore the indoor heritage corridors. Your choice of a ${budget} pursuit ensures a comfortable journey through the city's sheltered wonders.`;
  } else {
    if (budget === "backpacker") {
      headline = "The Authentic Trail";
    } else if (budget === "luxury") {
      headline = "The Regent's Journey";
    } else {
      headline = "The Highland Expedition";
    }
    counsel = `With clear skies over the Arjuno mountains, the path is open for exploration. A ${budget} strategy allows for an immersive experience in Malang's most iconic landmarks.`;
  }

  // 5. Budget Estimation Logic
  const baseDailyIDR: Record<BudgetTier, number> = {
    backpacker: 350000,
    balanced: 1250000,
    luxury: 4500000
  };

  const exchangeRate = RATES[origin.code] || 1;
  const dailyBase = baseDailyIDR[budget];
  
  const dailyRaw = dailyBase / exchangeRate;
  const totalRaw = (dailyBase * 3) / exchangeRate;

  const formatBudget = (val: number) => {
    if (origin.code === 'IDR') return `IDR ${(val / 1000).toFixed(0)}k`;
    return `${origin.code} ${val.toLocaleString(undefined, { maximumFractionDigits: 0 })}`;
  };

  const suggestions: Record<BudgetTier, string> = {
    backpacker: "Prioritize local 'Angkringan' and heritage walks. High value, low friction.",
    balanced: "Blend boutique stays with guided cultural tours. The sweet spot of comfort.",
    luxury: "Private villas and curated dining. Experience the legacy of old Malang."
  };

  const budgetEstimation = {
    origin: origin.name,
    level: budget.charAt(0).toUpperCase() + budget.slice(1),
    strength: origin.strength.toUpperCase(),
    suggestion: suggestions[budget],
    dailyEstimate: formatBudget(dailyRaw),
    totalEstimate: formatBudget(totalRaw)
  };

  return { headline, counsel, places, foods, budgetEstimation };
}
