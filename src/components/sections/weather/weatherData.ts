export interface Recommendation {
  id: string;
  name: string;
  category: string;
  description: string;
  idealWeather: 'Sunny' | 'Overcast' | 'Rainy' | 'Any';
  imageUrl: string;
}

export const malangRecommendations: Recommendation[] = [
  {
    id: 'jatim-park-3',
    name: 'JATIM PARK 3',
    category: 'Themed Park',
    description: 'A spectacular journey into the prehistoric era at Dino Park.',
    idealWeather: 'Overcast',
    imageUrl: 'https://images.unsplash.com/photo-1519500310700-0df156a56ec9?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'museum-angkut',
    name: 'MUSEUM ANGKUT',
    category: 'Cultural / Indoor',
    description: 'Explore classic transportation in themed international city settings.',
    idealWeather: 'Rainy',
    imageUrl: 'https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'jodipan',
    name: 'KAMPUNG JODIPAN',
    category: 'Photo Spot',
    description: 'The iconic rainbow village with vibrant colors and a glass bridge.',
    idealWeather: 'Sunny',
    imageUrl: 'https://images.unsplash.com/photo-1596422846543-75c6fc18a593?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'bromo',
    name: 'MOUNT BROMO',
    category: 'Nature / Adventure',
    description: 'Witness the surreal volcanic sunrise above the sea of sand.',
    idealWeather: 'Sunny',
    imageUrl: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'tumpak-sewu',
    name: 'TUMPAK SEWU',
    category: 'Nature',
    description: 'The thousand waterfalls forming a majestic curtain in a lush ravine.',
    idealWeather: 'Sunny',
    imageUrl: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=2070&auto=format&fit=crop'
  }
];

export const getRecommendationsByWeather = (weather: 'Sunny' | 'Overcast' | 'Rainy') => {
  return malangRecommendations.filter(rec => rec.idealWeather === weather || rec.idealWeather === 'Any');
};
