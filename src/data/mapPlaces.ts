// Curated top-10 places per category for the Hero Map
// Coordinates are real GPS locations from Nominatim (OpenStreetMap)

export type MapCategory = 'Nature' | 'Culinary' | 'Attraction' | 'Historical';

export interface MapPlace {
  id: string;
  name: string;
  hook: string; // 1-sentence hook for the card
  category: MapCategory;
  imageUrl: string;
  coordinates: { lat: number; lng: number };
  googleMapsQuery: string; // Accurate place search for Google Maps
}

/**
 * Generate a Google Maps URL from coordinates
 */
export function getGoogleMapsUrl(lat: number, lng: number): string {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}

/**
 * Google Maps directions URL from origin to destination, with optional travel mode.
 */
export function getGoogleMapsDirectionsUrl(
  originLat: number, originLng: number,
  destLat: number, destLng: number,
  mode?: 'driving' | 'walking' | 'transit' | 'bicycling',
): string {
  let url = `https://www.google.com/maps/dir/${originLat},${originLng}/${destLat},${destLng}`;
  if (mode) url += `?travelmode=${mode}`;
  return url;
}

export const MAP_PLACES: MapPlace[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // NATURE (10)
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: 'nature_001',
    name: 'Mount Bromo',
    hook: 'The crown jewel of East Java — witness sunrise over the Sea of Sand.',
    category: 'Nature',
    imageUrl: '/locations/nature/gunung-bromo/cover.webp',
    coordinates: { lat: -7.9425, lng: 112.9530 },
    googleMapsQuery: 'Mount Bromo Probolinggo East Java Indonesia',
  },
  {
    id: 'nature_002',
    name: 'Tumpak Sewu Waterfall',
    hook: "Indonesia's 'Little Niagara' — a curtain of water hidden in lush highlands.",
    category: 'Nature',
    imageUrl: '/locations/nature/tumpak-sewu/cover.webp',
    coordinates: { lat: -8.2300, lng: 112.9200 },
    googleMapsQuery: 'Tumpak Sewu Waterfall Lumajang East Java Indonesia',
  },
  {
    id: 'nature_003',
    name: 'Wonosari Tea Plantation',
    hook: 'Rolling green hills of tea leaves on the slopes of Mt. Arjuno with panoramic views.',
    category: 'Nature',
    imageUrl: '/locations/nature/wonosari-tea-plantation/cover.webp',
    coordinates: { lat: -7.8211, lng: 112.6433 },
    googleMapsQuery: 'Wonosari Tea Plantation Malang Jawa Timur',
  },
  {
    id: 'nature_004',
    name: 'Coban Pelangi',
    hook: "The 'Rainbow Waterfall' — when morning mist catches light, it creates iridescent arches.",
    category: 'Nature',
    imageUrl: '/locations/nature/coban-pelangi/cover.webp',
    coordinates: { lat: -8.0109, lng: 112.8657 },
    googleMapsQuery: 'Coban Pelangi Waterfall Malang Jawa Timur',
  },
  {
    id: 'nature_005',
    name: 'Pantai Tiga Warna',
    hook: 'Three distinct water colors and vibrant coral reefs on a pristine conservation beach.',
    category: 'Nature',
    imageUrl: '/locations/nature/pantai-3-warna/cover.webp',
    coordinates: { lat: -8.4350, lng: 112.7050 },
    googleMapsQuery: 'Pantai Tiga Warna Malang Selatan East Java Indonesia',
  },
  {
    id: 'nature_006',
    name: 'Alun-Alun Malang',
    hook: 'The historic heart of the city — a lush green square perfect for people-watching.',
    category: 'Nature',
    imageUrl: '/locations/heritage/alun-alun-malang/cover.webp',
    coordinates: { lat: -7.9829, lng: 112.6298 },
    googleMapsQuery: 'Alun-Alun Merdeka Malang Jawa Timur',
  },
  {
    id: 'nature_007',
    name: 'Coban Rondo Waterfall',
    hook: 'An 84-meter waterfall surrounded by pine forests, with a famous garden labyrinth.',
    category: 'Nature',
    imageUrl: '/locations/nature/coban-rondo/cover.webp',
    coordinates: { lat: -7.8330, lng: 112.5270 },
    googleMapsQuery: 'Coban Rondo Waterfall Pujon Malang Jawa Timur',
  },
  {
    id: 'nature_008',
    name: 'Mount Semeru Viewpoint',
    hook: 'Catch a glimpse of the highest volcano in Java as it puffs smoke into the clear blue sky.',
    category: 'Nature',
    imageUrl: '/locations/others/mount semeru viewpoint.webp',
    coordinates: { lat: -8.0122, lng: 112.9469 },
    googleMapsQuery: 'Ranu Pani Lumajang East Java Indonesia',
  },
  {
    id: 'nature_009',
    name: 'Paralayang Batu',
    hook: 'High above the clouds — stunning paragliding launch spots overlooking twinkling city lights.',
    category: 'Nature',
    imageUrl: '/locations/nature/paralayang-batu/cover.webp',
    coordinates: { lat: -7.8700, lng: 112.5250 },
    googleMapsQuery: 'Paralayang Batu Omah Kayu Malang Jawa Timur',
  },
  {
    id: 'nature_010',
    name: 'Sumber Sirah',
    hook: 'Crystal clear freshwater springs. Swim through underwater gardens of river grass and fish.',
    category: 'Nature',
    imageUrl: '/locations/hidden-gem/sumber-sirah/cover.webp',
    coordinates: { lat: -8.1432, lng: 112.6048 },
    googleMapsQuery: 'Sumber Sirah Sendang Malang Jawa Timur',
  },

  // ═══════════════════════════════════════════════════════════════════════
  // CULINARY (10)
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: 'culinary_001',
    name: 'Toko Oen',
    hook: "Step back into the 1930s — legendary colonial pastries and the city's most famous ice cream.",
    category: 'Culinary',
    imageUrl: '/locations/culinary/toko-oen/cover.webp',
    coordinates: { lat: -7.9776, lng: 112.6311 },
    googleMapsQuery: 'Toko Oen Malang Jalan Jenderal Basuki Rahmat',
  },
  {
    id: 'culinary_002',
    name: 'Bakso President',
    hook: "Malang's most famous meatballs, right next to the active railway tracks.",
    category: 'Culinary',
    imageUrl: '/locations/culinary/bakso-president/cover.webp',
    coordinates: { lat: -7.9827, lng: 112.6281 },
    googleMapsQuery: 'Bakso President Malang Jawa Timur',
  },
  {
    id: 'culinary_003',
    name: 'Melati Restaurant',
    hook: 'Malang Tempo Doeloe vibe at Hotel Tugu — Peranakan cuisine in a museum-like setting.',
    category: 'Culinary',
    imageUrl: '/locations/others/melati restaurant.webp',
    coordinates: { lat: -7.9773, lng: 112.6331 },
    googleMapsQuery: 'Hotel Tugu Malang Jawa Timur',
  },
  {
    id: 'culinary_004',
    name: 'Java Dancer Coffee',
    hook: 'Pioneering specialty coffee in a beautiful Javanese wooden joglo.',
    category: 'Culinary',
    imageUrl: '/locations/culinary/java-dancer-coffee/cover.webp',
    coordinates: { lat: -7.9660, lng: 112.6230 },
    googleMapsQuery: 'Java Dancer Coffee Malang Jawa Timur',
  },
  {
    id: 'culinary_005',
    name: 'Madam Wang Secret Garden',
    hook: 'A whimsical hidden gem — lush garden interior and artisanal pasta.',
    category: 'Culinary',
    imageUrl: '/locations/culinary/madam-wang-secret-garden/cover.webp',
    coordinates: { lat: -7.9700, lng: 112.6190 },
    googleMapsQuery: 'Madam Wang Secret Garden Malang Jawa Timur',
  },
  {
    id: 'culinary_006',
    name: 'Taman Indie Resto',
    hook: 'Dine alongside the Brantas river in traditional Javanese pavilions with heritage dishes.',
    category: 'Culinary',
    imageUrl: '/locations/culinary/taman-indie-resto/cover.webp',
    coordinates: { lat: -7.9395, lng: 112.6646 },
    googleMapsQuery: 'Taman Indie Resto Malang Jawa Timur',
  },
  {
    id: 'culinary_007',
    name: 'Cafe Litchi',
    hook: 'Mediterranean vibes in the heart of Malang — modern aesthetics and refreshing drinks.',
    category: 'Culinary',
    imageUrl: '/locations/culinary/cafe-litchi/cover.webp',
    coordinates: { lat: -7.9747, lng: 112.6133 },
    googleMapsQuery: 'Cafe Litchi Malang Jawa Timur',
  },
  {
    id: 'culinary_008',
    name: 'Rawon Rampal',
    hook: 'A historic rawon stall frequented by presidents — pure robust flavors from charcoal fires.',
    category: 'Culinary',
    imageUrl: '/locations/culinary/rawon-rampal/cover.webp',
    coordinates: { lat: -8.0023, lng: 112.6345 },
    googleMapsQuery: 'Warung Rawon Rampal Malang Jawa Timur',
  },
  {
    id: 'culinary_009',
    name: 'Rawon Nguling',
    hook: "The quintessential black beef soup of East Java — authentic flavors famous for generations.",
    category: 'Culinary',
    imageUrl: '/locations/culinary/rawon-nguling/cover.webp',
    coordinates: { lat: -7.9840, lng: 112.6305 },
    googleMapsQuery: 'Rawon Nguling Kiduldalem Malang Jawa Timur',
  },
  {
    id: 'culinary_010',
    name: 'Mi Gacoan Sawojajar',
    hook: "The local spicy noodle phenomenon — energetic, loud, and incredibly popular with the youth.",
    category: 'Culinary',
    imageUrl: '/locations/others/mi gacoan sawojajar.webp',
    coordinates: { lat: -7.9811, lng: 112.6537 },
    googleMapsQuery: 'Mi Gacoan Sawojajar Malang Jawa Timur',
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ATTRACTION (10)
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: 'attraction_001',
    name: 'Museum Angkut',
    hook: "Southeast Asia's first world-class transportation museum with 300+ vintage vehicles.",
    category: 'Attraction',
    imageUrl: '/locations/fun/museum-angkut/cover.webp',
    coordinates: { lat: -7.8788, lng: 112.5201 },
    googleMapsQuery: 'Museum Angkut Batu Malang Jawa Timur',
  },
  {
    id: 'attraction_002',
    name: 'Jatim Park 1',
    hook: 'A high-energy cultural theme park combining Indonesian heritage with massive amusement rides.',
    category: 'Attraction',
    imageUrl: '/locations/fun/jatim-park-1/cover.webp',
    coordinates: { lat: -7.8873, lng: 112.5304 },
    googleMapsQuery: 'Jatim Park 1 Batu Malang Jawa Timur',
  },
  {
    id: 'attraction_003',
    name: 'Jatim Park 2',
    hook: 'A stunning modern zoo experience prioritizing conservation and education.',
    category: 'Attraction',
    imageUrl: '/locations/fun/jatim-park-2/cover.webp',
    coordinates: { lat: -7.8881, lng: 112.5297 },
    googleMapsQuery: 'Jatim Park 2 Batu Malang Jawa Timur',
  },
  {
    id: 'attraction_005',
    name: 'Kampung Warna Warni Jodipan',
    hook: "The iconic 'Rainbow Village' — a transformed riverside community bursting with color.",
    category: 'Attraction',
    imageUrl: '/locations/fun/kampung-warna-warni/cover.webp',
    coordinates: { lat: -7.9855, lng: 112.6196 },
    googleMapsQuery: 'Kampung Warna Warni Jodipan Malang Jawa Timur',
  },
  {
    id: 'attraction_006',
    name: 'Kampung Biru Arema',
    hook: "Inspired by Chefchaouen — an all-blue village celebrating Malang's legendary football spirit.",
    category: 'Attraction',
    imageUrl: '/locations/others/kampung arema malang.webp',
    coordinates: { lat: -7.9840, lng: 112.6165 },
    googleMapsQuery: 'Kampung Biru Arema Malang Jawa Timur',
  },
  {
    id: 'attraction_007',
    name: 'Batu Night Spectacular',
    hook: "The city's evening carnival — neon light gardens, family rides, and night markets.",
    category: 'Attraction',
    imageUrl: '/locations/fun/batu-night-spectacular/cover.webp',
    coordinates: { lat: -7.8965, lng: 112.5346 },
    googleMapsQuery: 'Batu Night Spectacular Malang Jawa Timur',
  },
  {
    id: 'attraction_008',
    name: 'Olympic Garden (MOG)',
    hook: 'The largest mall in Malang — a massive mix of tech, fashion, and an indoor ice rink.',
    category: 'Attraction',
    imageUrl: '/locations/others/mall olympic garden.webp',
    coordinates: { lat: -7.9650, lng: 112.6135 },
    googleMapsQuery: 'Mall Olympic Garden MOG Malang Jawa Timur',
  },
  {
    id: 'attraction_009',
    name: 'Malang Night Paradise',
    hook: 'A dazzling neon forest featuring lanterns, magic rivers, and dancing fountains at night.',
    category: 'Attraction',
    imageUrl: '/locations/fun/malang-night-paradise/cover.webp',
    coordinates: { lat: -7.9730, lng: 112.6350 },
    googleMapsQuery: 'Malang Night Paradise Jawa Timur',
  },
  {
    id: 'attraction_010',
    name: 'Malang Town Square (MATOS)',
    hook: 'The vibrant lifestyle hub — multi-level shopping with international brands and diverse food courts.',
    category: 'Attraction',
    imageUrl: '/locations/others/malang town square.webp',
    coordinates: { lat: -7.9561, lng: 112.6144 },
    googleMapsQuery: 'Malang Town Square MATOS Jawa Timur',
  },

  // ═══════════════════════════════════════════════════════════════════════
  // HISTORICAL (10)
  // ═══════════════════════════════════════════════════════════════════════
  {
    id: 'historical_001',
    name: 'Candi Singosari',
    hook: 'A 13th-century funerary temple — the masterpiece of Hindu-Buddhist architecture in Malang.',
    category: 'Historical',
    imageUrl: '/locations/heritage/candi-singosari/cover.webp',
    coordinates: { lat: -7.9107, lng: 112.6667 },
    googleMapsQuery: 'Candi Singosari Singosari Malang Jawa Timur',
  },
  {
    id: 'historical_002',
    name: 'Tugu Malang',
    hook: 'The symbol of Malang — a beautiful monument surrounded by a lotus pond and Javanese gardens.',
    category: 'Historical',
    imageUrl: '/locations/heritage/tugu-malang/cover.webp',
    coordinates: { lat: -7.9802, lng: 112.6268 },
    googleMapsQuery: 'Tugu Malang monument Jawa Timur',
  },
  {
    id: 'historical_003',
    name: 'Candi Badut',
    hook: 'The oldest temple in East Java, built in 760 AD — a silent witness to ancient civilization.',
    category: 'Historical',
    imageUrl: '/locations/heritage/candi-badut/cover.webp',
    coordinates: { lat: -7.9578, lng: 112.5986 },
    googleMapsQuery: 'Candi Badut Malang Jawa Timur',
  },
  {
    id: 'historical_004',
    name: 'Klenteng Eng An Kiong',
    hook: 'A 200-year-old Chinese temple — vibrant red colors and incense-filled courtyards.',
    category: 'Historical',
    imageUrl: '/locations/heritage/klenteng-eng-an-kiong/cover.webp',
    coordinates: { lat: -7.9877, lng: 112.6360 },
    googleMapsQuery: 'Klenteng Eng An Kiong Malang Jawa Timur',
  },
  {
    id: 'historical_005',
    name: 'Kayutangan Heritage',
    hook: "Malang's historic corridor — preserved colonial streets and hidden riverside alleys.",
    category: 'Historical',
    imageUrl: '/locations/heritage/kayutangan/cover.webp',
    coordinates: { lat: -7.9793, lng: 112.6294 },
    googleMapsQuery: 'Kayutangan Heritage Street Malang Jawa Timur',
  },
  {
    id: 'historical_006',
    name: 'Gereja Ijen',
    hook: 'A stunning neo-gothic cathedral on the historic Ijen Boulevard.',
    category: 'Historical',
    imageUrl: '/locations/heritage/gereja-ijen/cover.webp',
    coordinates: { lat: -7.9620, lng: 112.6250 },
    googleMapsQuery: 'Gereja Hati Kudus Yesus Ijen Malang Jawa Timur',
  },
  {
    id: 'historical_007',
    name: 'Candi Kidal',
    hook: 'Built to honor King Anusapati — famous for intricate Garuda carvings telling a hero\'s story.',
    category: 'Historical',
    imageUrl: '/locations/heritage/candi-kidal/cover.webp',
    coordinates: { lat: -8.0258, lng: 112.7091 },
    googleMapsQuery: 'Candi Kidal Tumpang Malang Jawa Timur',
  },
  {
    id: 'historical_008',
    name: 'Masjid Agung Jami\u2019',
    hook: 'Built in 1890 — a grand blend of Arabic and Javanese architecture overlooking the city square.',
    category: 'Historical',
    imageUrl: '/locations/others/masjid agung jami\'.webp',
    coordinates: { lat: -7.9830, lng: 112.6293 },
    googleMapsQuery: 'Masjid Agung Jami Malang Jawa Timur',
  },
  {
    id: 'historical_009',
    name: 'Candi Jago',
    hook: 'A unique terraced temple with exquisite reliefs mixing Hindu and Buddhist myths.',
    category: 'Historical',
    imageUrl: '/locations/heritage/candi-jago/cover.webp',
    coordinates: { lat: -8.0058, lng: 112.7641 },
    googleMapsQuery: 'Candi Jago Tumpang Malang Jawa Timur',
  },
  {
    id: 'historical_010',
    name: 'Balai Kota Malang',
    hook: "The majestic colonial City Hall — a monumental example of Dutch 'Indische' architecture.",
    category: 'Historical',
    imageUrl: '/locations/heritage/tugu-malang/balai-kota.webp',
    coordinates: { lat: -7.9781, lng: 112.6339 },
    googleMapsQuery: 'Balai Kota Malang Jawa Timur',
  },
];

export const CATEGORY_META: Record<MapCategory, { emoji: string; label: string; color: string }> = {
  Nature:      { emoji: '🌄', label: 'Nature',      color: '#2e7d52' },
  Culinary:    { emoji: '🍜', label: 'Culinary',    color: '#c0451a' },
  Attraction:  { emoji: '🎡', label: 'Attractions', color: '#2563a8' },
  Historical:  { emoji: '🏛', label: 'Heritage',    color: '#92700f' },
};
