const fs = require('fs');
const https = require('https');

const placesToQuery = [
  // Nature (5 new)
  { name: 'Wonosari Tea Plantation Malang', category: 'Nature', id: 'nature_003' },
  { name: 'Coban Pelangi Waterfall Malang', category: 'Nature', id: 'nature_005' },
  { name: 'Mount Semeru Viewpoint Malang', category: 'Nature', id: 'nature_008' },
  { name: 'Paralayang Batu Omah Kayu', category: 'Nature', id: 'nature_009' },
  { name: 'Sumber Sirah Malang', category: 'Nature', id: 'nature_010' },
  // Culinary (5 new)
  { name: 'Melati Restaurant Hotel Tugu Malang', category: 'Culinary', id: 'culinary_003' },
  { name: 'Cafe Litchi Malang', category: 'Culinary', id: 'culinary_007' },
  { name: 'Taman Indie Resto Malang', category: 'Culinary', id: 'culinary_006' },
  { name: 'Rawon Nguling Malang', category: 'Culinary', id: 'culinary_008' },
  { name: 'Alice Tea Room Malang', category: 'Culinary', id: 'culinary_011' },
  // Attraction (5 new)
  { name: 'Museum Angkut Batu', category: 'Attraction', id: 'attraction_001' },
  { name: 'Jatim Park 1 Batu', category: 'Attraction', id: 'attraction_002' },
  { name: 'Jatim Park 2 Secret Zoo Batu', category: 'Attraction', id: 'attraction_003' },
  { name: 'Jatim Park 3 Dino Park Batu', category: 'Attraction', id: 'attraction_004' },
  { name: 'Batu Night Spectacular', category: 'Attraction', id: 'attraction_005' },
  // Historical (5 new)
  { name: 'Candi Badut Malang', category: 'Historical', id: 'historical_003' },
  { name: 'Klenteng Eng An Kiong Malang', category: 'Historical', id: 'historical_006' },
  { name: 'Monumen Juang 45 Malang', category: 'Historical', id: 'historical_007' },
  { name: 'Candi Kidal Malang', category: 'Historical', id: 'historical_009' },
  { name: 'Balai Kota Malang', category: 'Historical', id: 'historical_011' },
];

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fetchNominatim(query) {
  return new Promise((resolve, reject) => {
    const encoded = encodeURIComponent(query);
    const url = `https://nominatim.openstreetmap.org/search?q=${encoded}&format=json&limit=1`;
    
    const req = https.get(url, { headers: { 'User-Agent': 'MalangExplorer/1.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve(json);
        } catch (e) {
          reject(e);
        }
      });
    });
    
    req.on('error', reject);
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Timeout'));
    });
  });
}

async function main() {
  const results = [];
  
  for (const place of placesToQuery) {
    try {
      console.log(`Querying: ${place.name}...`);
      const data = await fetchNominatim(place.name);
      
      if (data && data.length > 0) {
        const result = data[0];
        results.push({
          ...place,
          lat: parseFloat(result.lat),
          lng: parseFloat(result.lon),
          displayName: result.display_name,
        });
        console.log(`  ✓ Found: ${result.lat}, ${result.lon}`);
      } else {
        results.push({
          ...place,
          lat: null,
          lng: null,
          error: 'Not found',
        });
        console.log(`  ✗ Not found`);
      }
    } catch (err) {
      results.push({
        ...place,
        lat: null,
        lng: null,
        error: err.message,
      });
      console.log(`  ✗ Error: ${err.message}`);
    }
    
    // Rate limit: 1 request per second
    await delay(1100);
  }
  
  fs.writeFileSync('nominatim-results.json', JSON.stringify(results, null, 2));
  console.log('\n✅ Results saved to nominatim-results.json');
}

main().catch(console.error);
