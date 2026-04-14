import { useMemo } from 'react';
import placesData from '../../../../data/places.json';
import { type Recommendation } from '../types';

export const useRecommendations = (weather: string, timeOfDay: string, forecast: string) => {
  const recommendations = useMemo(() => {
    // 1. Initial Filtering (Safety & Weather)
    const candidates = (placesData as Recommendation[]).filter(place => {
      if (weather === "Rainy" && place.type === "outdoor") return false;
      if (timeOfDay === "Night" && place.type === "outdoor") return false;
      return true;
    });

    // 2. Group by Category
    const categories: Record<string, Recommendation[]> = {
      'Nature': [],
      'Culture': [],
      'Culinary': [],
      'Attraction': []
    };

    candidates.forEach(c => {
      if (categories[c.semanticCategory]) {
        categories[c.semanticCategory].push(c);
      }
    });

    // 3. Balanced Selection (Popular + Hidden Gem per category)
    const result: Recommendation[] = [];
    const targetPerCategory = 2; // Grab 2 representing each category

    Object.keys(categories).forEach(cat => {
      const items = categories[cat].sort((a, b) => b.popularity - a.popularity);
      
      if (items.length > 0) {
        // Pick top popularity
        result.push(items[0]);
        
        // Pick a hidden gem (lower popularity but > mid-range or bottom half)
        if (items.length > 1) {
          const randomIndex = Math.floor(items.length / 2) + Math.floor(Math.random() * (items.length / 2));
          result.push(items[randomIndex]);
        }
      }
    });

    // 4. Fill gaps if needed or sort by global relevance
    // If we have less than 6, fill with highest remaining popularity regardless of category
    if (result.length < 6) {
      const remaining = candidates
        .filter(c => !result.find(r => r.id === c.id))
        .sort((a, b) => b.popularity - a.popularity);
      result.push(...remaining.slice(0, 6 - result.length));
    }

    // 5. Interleave for editorial flow (Nature, Culinary, Culture, Attraction...)
    // We sort slightly to make sure categories feel mixed
    return result.sort((a, b) => {
      // Just a simple shuffle or categorical sort to avoid grouping all same categories together
      const catOrder: Record<string, number> = { 'Nature': 0, 'Culinary': 1, 'Culture': 2, 'Attraction': 3 };
      return (catOrder[a.semanticCategory] || 0) - (catOrder[b.semanticCategory] || 0);
    }).slice(0, 8); 
  }, [weather, timeOfDay, forecast]);

  return recommendations;
};
