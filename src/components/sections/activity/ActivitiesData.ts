type Activity = {
  title: string;
  desc: string;
};

type BestTime = {
  icon: string;
  badge: string;
  label: string;
  value: string;
  color: string;
  intensity: string;
};

type Coordinates = {
  lat: number;
  lng: number;
};

type Place = {
  title: string;
  description: string;
  heroImage: string;
  thingsToDo: Activity[];
  tips: string[];
  bestTime: BestTime[];
  location: Coordinates;
  story: string;
  gallery: string[];
};

type Category = {
  title: string;
  description: string;
  places: Place[];
};

export const activitiesData: Record<string, Category> = {
  "nature-seeker": {
    title: "Nature Seeker",
    description: "Jelajahi keindahan alam Malang yang memukau dari gunung hingga air terjun.",
    places: [
      {
        title: "Mount Bromo",
        description: "Gunung api aktif paling ikonik dengan lautan pasir luas.",
        heroImage: "/bromo.jpg",
        thingsToDo: [
          { title: "Sunrise Hunt", desc: "Melihat matahari terbit dari Penanjakan." },
          { title: "Jeep Ride", desc: "Menjelajahi lautan pasir dengan jeep." },
          { title: "Kawah Walk", desc: "Mendekati kawah aktif Bromo." },
          { title: "Camping", desc: "Bermalam di bawah bintang lautan pasir." },
        ],
        tips: ["Gunakan jaket tebal", "Pakai masker"],
        bestTime: [
          {
            icon: "🌅",
            badge: "Golden Hour",
            label: "Early Morning",
            value: "03:00 – 06:00 WIB",
            color: "#EF9F27",
            intensity: "85%",
          },
          {
            icon: "☀️",
            badge: "Dry Season",
            label: "Musim Kemarau",
            value: "April – Oktober",
            color: "#378ADD",
            intensity: "65%",
          },
        ],
        location: { lat: -7.9425, lng: 112.9508 },
        story: "Destinasi ikonik dengan sunrise terbaik.",
        gallery: ["/bromo.jpg"],
      },

      {
        title: "Tumpak Sewu",
        description: "Air terjun tirai megah.",
        heroImage: "/bromo.jpg",
        thingsToDo: [{ title: "Trekking", desc: "Turun ke bawah air terjun." }],
        tips: ["Gunakan sepatu anti slip"],
        bestTime: [
          {
            icon: "🌄",
            badge: "Best Light",
            label: "Morning",
            value: "06:00 – 10:00 WIB",
            color: "#EF9F27",
            intensity: "75%",
          },
          {
            icon: "🌧️",
            badge: "Rainy Season",
            label: "Musim Hujan",
            value: "Nov – Maret",
            color: "#378ADD",
            intensity: "90%",
          },
        ],
        location: { lat: -8.2307, lng: 112.9176 },
        story: "Air terjun epik di Jawa Timur.",
        gallery: ["/bromo.jpg"],
      },

      {
        title: "Pantai 3 Warna",
        description: "Pantai unik dengan gradasi warna.",
        heroImage: "/bromo.jpg",
        thingsToDo: [{ title: "Snorkeling", desc: "Lihat terumbu karang." }],
        tips: ["Reservasi dulu"],
        bestTime: [
          {
            icon: "☀️",
            badge: "Clear Water",
            label: "Morning",
            value: "07:00 – 11:00 WIB",
            color: "#1D9E75",
            intensity: "80%",
          },
          {
            icon: "🌴",
            badge: "Dry Season",
            label: "Musim Kemarau",
            value: "April – Oktober",
            color: "#378ADD",
            intensity: "70%",
          },
        ],
        location: { lat: -8.4351, lng: 112.6844 },
        story: "Pantai konservasi yang indah.",
        gallery: ["/bromo.jpg"],
      },

      {
        title: "Coban Pelangi",
        description: "Air terjun dengan pelangi.",
        heroImage: "/bromo.jpg",
        thingsToDo: [{ title: "Hiking", desc: "Jalan ke air terjun." }],
        tips: ["Datang pagi"],
        bestTime: [
          {
            icon: "🌈",
            badge: "Rainbow Time",
            label: "Late Morning",
            value: "09:00 – 12:00 WIB",
            color: "#D85A30",
            intensity: "70%",
          },
          {
            icon: "☀️",
            badge: "Dry Season",
            label: "Musim Kemarau",
            value: "April – Oktober",
            color: "#378ADD",
            intensity: "60%",
          },
        ],
        location: { lat: -8.0193, lng: 112.8234 },
        story: "Air terjun dengan fenomena pelangi.",
        gallery: ["/bromo.jpg"],
      },

      {
        title: "Pulau Sempu",
        description: "Cagar alam dengan laguna.",
        heroImage: "/bromo.jpg",
        thingsToDo: [{ title: "Trekking", desc: "Masuk hutan." }],
        tips: ["Izin wajib"],
        bestTime: [
          {
            icon: "🌴",
            badge: "Dry Season",
            label: "Musim Kemarau",
            value: "April – Oktober",
            color: "#1D9E75",
            intensity: "85%",
          },
          {
            icon: "🌅",
            badge: "Best View",
            label: "Early Morning",
            value: "05:00 – 08:00 WIB",
            color: "#EF9F27",
            intensity: "75%",
          },
        ],
        location: { lat: -8.4483, lng: 112.6881 },
        story: "Hidden lagoon alami.",
        gallery: ["/bromo.jpg"],
      },

      {
        title: "Budug Asu",
        description: "Bukit view Gunung Arjuno.",
        heroImage: "/bromo.jpg",
        thingsToDo: [{ title: "Offroad", desc: "Naik ke puncak." }],
        tips: ["Gunakan kendaraan kuat"],
        bestTime: [
          {
            icon: "🌅",
            badge: "Golden Hour",
            label: "Sunrise / Sunset",
            value: "05:00 & 17:00 WIB",
            color: "#EF9F27",
            intensity: "90%",
          },
          {
            icon: "🌙",
            badge: "Stargazing",
            label: "Malam Cerah",
            value: "19:00 – 23:00 WIB",
            color: "#534AB7",
            intensity: "65%",
          },
        ],
        location: { lat: -7.8078, lng: 112.7089 },
        story: "Spot camping favorit.",
        gallery: ["/bromo.jpg"],
      },
    ],
  },

  "fun-&-entertainment": {
    title: "Fun & Entertainment",
    description: "Wahana bermain keluarga.",
    places: [
      {
        title: "Jatim Park 1",
        description: "Taman hiburan.",
        heroImage: "/bromo.jpg",
        thingsToDo: [{ title: "Rides", desc: "Wahana seru." }],
        tips: ["Datang pagi"],
        bestTime: [
          {
            icon: "☀️",
            badge: "Peak Hours",
            label: "Daytime",
            value: "09:00 – 17:00 WIB",
            color: "#EF9F27",
            intensity: "80%",
          },
          {
            icon: "📅",
            badge: "Less Crowd",
            label: "Weekday",
            value: "Senin – Jumat",
            color: "#1D9E75",
            intensity: "55%",
          },
        ],
        location: { lat: -7.8841, lng: 112.5240 },
        story: "Tempat wisata edukatif.",
        gallery: ["/bromo.jpg"],
      },

      {
        title: "Museum Angkut",
        description: "Museum transportasi.",
        heroImage: "/bromo.jpg",
        thingsToDo: [{ title: "Exhibition", desc: "Lihat koleksi." }],
        tips: ["Datang sore"],
        bestTime: [
          {
            icon: "🌆",
            badge: "Best Lighting",
            label: "Afternoon",
            value: "13:00 – 18:00 WIB",
            color: "#D85A30",
            intensity: "70%",
          },
          {
            icon: "📅",
            badge: "Less Crowd",
            label: "Weekday",
            value: "Senin – Jumat",
            color: "#1D9E75",
            intensity: "50%",
          },
        ],
        location: { lat: -7.8789, lng: 112.5195 },
        story: "Museum unik di Batu.",
        gallery: ["/bromo.jpg"],
      },
    ],
  },

  "city-explorer": {
    title: "Heritage",
    description: "Wisata kota.",
    places: [
      {
        title: "Kayutangan Heritage",
        description: "Kawasan kolonial.",
        heroImage: "/bromo.jpg",
        thingsToDo: [{ title: "Walking", desc: "Jalan santai." }],
        tips: ["Datang sore"],
        bestTime: [
          {
            icon: "🌃",
            badge: "Night Vibes",
            label: "Evening",
            value: "17:00 – 21:00 WIB",
            color: "#534AB7",
            intensity: "85%",
          },
          {
            icon: "🌤️",
            badge: "Nice Weather",
            label: "Late Afternoon",
            value: "15:00 – 18:00 WIB",
            color: "#EF9F27",
            intensity: "65%",
          },
        ],
        location: { lat: -7.9826, lng: 112.6304 },
        story: "Area heritage Malang.",
        gallery: ["/bromo.jpg"],
      },
    ],
  },

  "hidden-gem": {
    title: "Hidden Gem",
    description: "Tempat tersembunyi.",
    places: [
      {
        title: "Sumber Sirah",
        description: "Air jernih.",
        heroImage: "/bromo.jpg",
        thingsToDo: [{ title: "Snorkeling", desc: "Air tawar." }],
        tips: ["Jangan injak tanaman"],
        bestTime: [
          {
            icon: "☀️",
            badge: "Clear Water",
            label: "Morning",
            value: "08:00 – 11:00 WIB",
            color: "#1D9E75",
            intensity: "80%",
          },
          {
            icon: "🌴",
            badge: "Dry Season",
            label: "Musim Kemarau",
            value: "April – Oktober",
            color: "#378ADD",
            intensity: "70%",
          },
        ],
        location: { lat: -8.1432, lng: 112.6048 },
        story: "Hidden gem Malang.",
        gallery: ["/bromo.jpg"],
      },
    ],
  },

  "digital-nomad-hub": {
    title: "Digital Nomad Hub",
    description: "Tempat kerja santai.",
    places: [
      {
        title: "Nakoa Coffee",
        description: "Cafe kerja.",
        heroImage: "/bromo.jpg",
        thingsToDo: [{ title: "Work", desc: "Nugas." }],
        tips: ["Bawa charger"],
        bestTime: [
          {
            icon: "💻",
            badge: "All Day",
            label: "Open Hours",
            value: "08:00 – 23:00 WIB",
            color: "#534AB7",
            intensity: "100%",
          },
          {
            icon: "🌙",
            badge: "Less Crowd",
            label: "Late Night",
            value: "20:00 – 23:00 WIB",
            color: "#1D9E75",
            intensity: "40%",
          },
        ],
        location: { lat: -7.9666, lng: 112.6326 },
        story: "Cafe favorit remote worker.",
        gallery: ["/bromo.jpg"],
      },
    ],
  },
};