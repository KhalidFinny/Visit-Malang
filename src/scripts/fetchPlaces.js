import fs from 'fs';
import path from 'path';

// Combined bounding box for Malang City, Malang Regency (parts), and Batu City
// Format: (min_lat, min_lon, max_lat, max_lon)
const BBOX = '-8.20,112.35,-7.70,112.85';

const OVERPASS_QUERY = `
[out:json][timeout:30];
(
  node["tourism"~"attraction|museum|viewpoint|zoo|theme_park|gallery"](${BBOX});
  node["amenity"="cafe"](${BBOX});
  node["leisure"="park"](${BBOX});
  way["tourism"~"attraction|museum|viewpoint|zoo|theme_park|gallery"](${BBOX});
  way["leisure"="park"](${BBOX});
);
out center;
`;

const CURATED_IMAGES = {
  "MOUNT BROMO": "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=2070&auto=format&fit=crop",
  "JATIM PARK 3": "https://images.unsplash.com/photo-1519500310700-0df156a56ec9?q=80&w=2070&auto=format&fit=crop",
  "MUSEUM ANGKUT": "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=2070&auto=format&fit=crop",
  "KAMPUNG JODIPAN": "https://images.unsplash.com/photo-1596422846543-75c6fc18a593?q=80&w=2070&auto=format&fit=crop",
  "TUMPAK SEWU": "https://images.unsplash.com/photo-1590682680695-43b964a3ae17?q=80&w=2070&auto=format&fit=crop",
  "ALUN-ALUN MALANG": "https://images.unsplash.com/photo-1621213426720-3364f8bfab08?q=80&w=2070&auto=format&fit=crop",
  "PARALAYANG BATU": "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=2070&auto=format&fit=crop",
};

const IMAGE_FALLBACKS = {
  culinary: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1000&auto=format&fit=crop", // Cafe
  nature: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000&auto=format&fit=crop", // Forest/Park
  culture: "https://images.unsplash.com/photo-1503174971373-b1f69850bbd6?q=80&w=1000&auto=format&fit=crop", // Museum
  attraction: "https://images.unsplash.com/photo-1513889959010-68a4c3068590?q=80&w=1000&auto=format&fit=crop", // Amusement
};

function getCategory(tags) {
  if (tags.amenity === 'cafe') return 'Culinary';
  if (tags.tourism === 'museum' || tags.tourism === 'gallery') return 'Culture';
  if (tags.leisure === 'park' || tags.tourism === 'viewpoint') return 'Nature';
  return 'Attraction';
}

function getIdealWeather(category) {
  switch (category) {
    case 'Culinary': return 'Rainy';
    case 'Culture': return 'Rainy';
    case 'Nature': return 'Sunny';
    default: return 'Overcast';
  }
}

function getIdealTime(tags, category) {
  if (category === 'Nature') return ['Morning', 'Evening'];
  if (category === 'Culinary') return ['Evening', 'Night'];
  if (category === 'Culture') return ['Afternoon'];
  return ['Afternoon', 'Evening'];
}

async function fetchPlaces() {
  console.log('Fetching places from Overpass API (using BBox)...');
  try {
    const response = await fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      body: `data=${encodeURIComponent(OVERPASS_QUERY)}`,
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Overpass API error: ${response.status} ${response.statusText}\n${text}`);
    }

    const data = await response.json();
    const elements = data.elements || [];

    const recommendations = elements
      .filter(el => el.tags && el.tags.name)
      .map(el => {
        const name = el.tags.name;
        const upperName = name.toUpperCase();
        const category = getCategory(el.tags);
        const description = el.tags.description || `Explore the beautiful ${name} in Malang/Batu.`;
        
        return {
          id: `osm-${el.id}`,
          name: upperName,
          category: el.tags.tourism || el.tags.amenity || el.tags.leisure || category,
          semanticCategory: category,
          description,
          idealWeather: getIdealWeather(category),
          idealTime: getIdealTime(el.tags, category),
          imageUrl: CURATED_IMAGES[upperName] || IMAGE_FALLBACKS[category.toLowerCase()] || IMAGE_FALLBACKS.attraction,
          lat: el.lat || (el.center && el.center.lat),
          lng: el.lon || (el.center && el.center.lon),
        };
      });

    const dataPath = path.join(process.cwd(), 'src/data/places.json');
    fs.writeFileSync(dataPath, JSON.stringify(recommendations, null, 2));
    console.log(`Successfully saved ${recommendations.length} places to ${dataPath}`);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchPlaces();
