import type { BudgetTier, EconomyOrigin, PlannerAdvice } from '../types';

export const ECONOMIES: EconomyOrigin[] = [
  { code: 'IDR', name: 'Indonesia', strength: 'local', flag: '🇮🇩' },
  { code: 'SGD', name: 'Singapore', strength: 'high', flag: '🇸🇬' },
  { code: 'USD', name: 'United States', strength: 'high', flag: '🇺🇸' },
  { code: 'EUR', name: 'European Union', strength: 'high', flag: '🇪🇺' },
  { code: 'MYR', name: 'Malaysia', strength: 'medium', flag: '🇲🇾' },
];

export function generateAdvice(
  budget: BudgetTier,
  origin: EconomyOrigin,
  weather: string,
  timeOfDay: string
): PlannerAdvice {
  let headline = "";
  let counsel = "";
  let highlights: string[] = [];

  const isRaining = weather.toLowerCase().includes('rain') || weather.toLowerCase().includes('overcast');
  const isHighPower = origin.strength === 'high';

  if (isRaining) {
    if (budget === 'backpacker') {
      headline = "The Indoor Low-Cost Haven";
      counsel = `Since the sky is heavy and you're keeping it lean, we advise prioritizing the 'Kampung' architecture walkthroughs or the public coffee archives. Stay dry without breaking the bank.`;
      highlights = ["Local Coffee Archives", "Museum Angkut (Budget Entry)", "Kampung Warnawarni"];
    } else if (budget === 'luxury') {
      headline = "Indulgent Shelter";
      counsel = `Perfect timing for a high-altitude spa retreat or a long colonial lunch at Toko Oen. Your ${origin.code} strength affords you the finest indoor sanctuary Malang has to offer.`;
      highlights = ["Tugu Hotel High Tea", "Ijen Boulevard Spa", "Fine Dining in Heritage Villas"];
    } else {
      headline = "Balanced Retreat";
      counsel = "The rain provides a perfect backdrop for a museum afternoon. We recommend exploring the historical complexes before settling into a mid-range local bistro.";
      highlights = ["Brawijaya Museum", "Historical Library", "Central Culinary Hubs"];
    }
  } else {
    // Clear weather
    if (budget === 'luxury' || (isHighPower && budget !== 'backpacker')) {
      headline = "The Highland Heights";
      counsel = "Crystal clear skies. We advise an early ascent to the Batu highlands or a private mountain tea plantation tour. The visual payoff is currently at its seasonal peak.";
      highlights = ["Wonosari Tea Plantation", "Batu Skyline Tour", "Premium Agro-tourism"];
    } else {
      headline = "The Urban Exploration";
      counsel = "With clear skies and a focused budget, the city's pedestrian colonial routes are your best asset. Walk the heritage lines of Ijen in the late afternoon for the best light.";
      highlights = ["Ijen Boulevard Walk", "Alun-Alun Tugu", "Taman Bungkul"];
    }
  }

  return { headline, counsel, highlights };
}
