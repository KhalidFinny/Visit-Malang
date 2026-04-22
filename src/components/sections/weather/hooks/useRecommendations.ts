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

    // 2. Group by Category (New Curated set)
    const categories: Record<string, Recommendation[]> = {
      'Nature': [],
      'Historical': [],
      'Culinary': [],
      'Attraction': [],
      'Indoor': []
    };

    candidates.forEach(c => {
      const cat = c.semanticCategory as string;
      if (categories[cat]) {
        categories[cat].push(c);
      }
    });

    // 3. Selection Strategy (Priority based on weather)
    const result: Recommendation[] = [];
    
    // Define category priorities based on weather
    let preferredCategories: string[] = [];
    if (weather === "Rainy") {
      preferredCategories = ['Indoor', 'Culinary', 'Historical', 'Attraction', 'Nature'];
    } else if (weather === "Overcast") {
      preferredCategories = ['Culinary', 'Historical', 'Nature', 'Indoor', 'Attraction'];
    } else {
      preferredCategories = ['Nature', 'Attraction', 'Historical', 'Culinary', 'Indoor'];
    }

    // Grab top matches from preferred categories
    preferredCategories.forEach(cat => {
      const items = categories[cat].sort((a, b) => b.popularity - a.popularity);
      if (items.length > 0) {
        // Pick top popularity for this context
        result.push(items[0]);
        // If it's a top preferred category, maybe pick another
        if (items.length > 1 && result.length < 5) {
          result.push(items[1]);
        }
      }
    });

    // 4. Global Refinement & Interleaving
    // Return unique set, limited to 8 most relevant
    const finalSet = result
      .filter((v, i, a) => a.findIndex(t => t.id === v.id) === i)
      .slice(0, 8);

    // Sort for aesthetic flow
    const catOrder: Record<string, number> = { 
      'Nature': 0, 
      'Attraction': 1, 
      'Historical': 2, 
      'Culinary': 3, 
      'Indoor': 4 
    };

    return finalSet.sort((a, b) => 
      (catOrder[a.semanticCategory] || 0) - (catOrder[b.semanticCategory] || 0)
    );
  }, [weather, timeOfDay, forecast]);

  return recommendations;
};
