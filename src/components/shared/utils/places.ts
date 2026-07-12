export interface PlaceBase {
  slug: string;
  name: string;
  lat: number;
  lng: number;
  desc: string;
  cat: string;
  imageUrl: string;
}

export const ALL_PLACES: PlaceBase[] = [
  { slug: "mount-bromo", name: "Mount Bromo", lat: -7.9425, lng: 112.953, desc: "Volcanic caldera with sunrise sea of sand", cat: "Nature", imageUrl: "/locations/Mount_Bromo.jpg" },
  { slug: "tumpak-sewu", name: "Tumpak Sewu Waterfall", lat: -8.2307, lng: 112.9167, desc: "Curtain waterfall in lush jungle ravine", cat: "Nature", imageUrl: "/locations/Tumpak_Sewu.jpg" },
  { slug: "mount-semeru", name: "Mount Semeru", lat: -8.1081, lng: 112.9224, desc: "Highest volcano peak in Java", cat: "Nature", imageUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800" },
  { slug: "pantai-3-warna", name: "Pantai 3 Warna", lat: -8.4444, lng: 112.6789, desc: "Multi-hued coastal conservation beach", cat: "Nature", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" },
  { slug: "coban-pelangi", name: "Coban Pelangi", lat: -8.0193, lng: 112.8234, desc: "Highland rainbow waterfall", cat: "Nature", imageUrl: "https://images.unsplash.com/photo-1501179611942-0c2610dd1dd7?auto=format&fit=crop&q=80&w=800" },
  { slug: "pulau-sempu", name: "Pulau Sempu", lat: -8.4483, lng: 112.6881, desc: "Island nature reserve with lagoon", cat: "Nature", imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" },
  { slug: "budug-asu", name: "Budug Asu", lat: -7.8078, lng: 112.7089, desc: "Pine ridge hiking trail", cat: "Nature", imageUrl: "https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=800" },
  { slug: "jatim-park-1", name: "Jatim Park 1", lat: -7.8841, lng: 112.524, desc: "Theme park with science exhibits", cat: "Fun", imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=800" },
  { slug: "museum-angkut", name: "Museum Angkut", lat: -7.8789, lng: 112.5195, desc: "Vintage vehicle museum", cat: "Fun", imageUrl: "https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&q=80&w=800" },
  { slug: "kayutangan-heritage", name: "Kayutangan Heritage", lat: -7.9793, lng: 112.6294, desc: "Colonial heritage walking street", cat: "Heritage", imageUrl: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800" },
  { slug: "sumber-sirah", name: "Sumber Sirah", lat: -8.1432, lng: 112.6048, desc: "Freshwater spring snorkeling spot", cat: "Nature", imageUrl: "https://images.unsplash.com/photo-1501179611942-0c2610dd1dd7?auto=format&fit=crop&q=80&w=800" },
  { slug: "nakoa-coffee", name: "Nakoa Coffee", lat: -7.9666, lng: 112.6326, desc: "24hr modern workspace cafe", cat: "Cafe", imageUrl: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" },
  { slug: "jodipan-village", name: "Kampung Warna Warni", lat: -7.9839, lng: 112.6372, desc: "Rainbow painted riverside village", cat: "Fun", imageUrl: "https://images.unsplash.com/photo-1518151246473-fd677e497d39?auto=format&fit=crop&q=80&w=800" },
  { slug: "toko-oen", name: "Toko Oen", lat: -7.9786, lng: 112.6288, desc: "1930s colonial ice cream parlour", cat: "Cafe", imageUrl: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=800" },
];
