const fs = require('fs');
const https = require('https');

const placesToQuery = [
  { name: 'Puncak B29 Lumajang', category: 'Nature', id: 'nature_008' },
  { name: 'Omah Kayu Paralayang Batu', category: 'Nature', id: 'nature_009' },
  { name: 'Sumber Sirah Sendang Malang', category: 'Nature', id: 'nature_010' },
  { name: 'Hotel Tugu Malang', category: 'Culinary', id: 'culinary_003' },
  { name: 'Rawon Nguling Probolinggo', category: 'Culinary', id: 'culinary_008' },
  { name: 'Alice Tea Room Batu', category: 'Culinary', id: 'culinary_011' },
  { name: 'Jatim Park 2 Batu', category: 'Attraction', id: 'attraction_003' },
  { name: 'Jatim Park 3 Batu', category: 'Attraction', id: 'attraction_004' },
  { name: 'Monumen Juang 45 Kota Malang', category: 'Historical', id: 'historical_007' },
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
    
    await delay(1100);
  }
  
  fs.writeFileSync('nominatim-results-2.json', JSON.stringify(results, null, 2));
  console.log('\n✅ Results saved to nominatim-results-2.json');
}

main().catch(console.error);
