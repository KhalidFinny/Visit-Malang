import type { Category } from "./types";

export const activitiesData: Record<string, Category> = {
  "nature-seeker": {
    title: "Nature Seeker",
    description: "Jelajahi keindahan alam Malang yang memukau dari gunung hingga air terjun.",
    places: [
      {
        title: "Mount Bromo",
        description: "Gunung api aktif yang menjulang megah di atas lautan pasir seluas ribuan hektar — panorama sunrise-nya diakui sebagai salah satu yang terindah di Asia Tenggara, dengan asap belerang yang mengepul dari kawah di ujung jalan setapak.",
        heroImage: "/bromo.jpg",
        thingsToDo: [
          { title: "Sunrise Hunt", desc: "Menyaksikan fajar perlahan menyapu lautan pasir dari puncak Penanjakan — momen yang tidak akan pernah terlupakan." },
          { title: "Jeep Ride", desc: "Menjelajahi gurun pasir dan savana luas dengan jeep klasik ala petualangan safari." },
          { title: "Kawah Walk", desc: "Berjalan menuju bibir kawah aktif Bromo, mendengar gemuruh bumi dari kedalaman." },
          { title: "Camping", desc: "Bermalam di bawah langit bertabur bintang di tengah lautan pasir yang sunyi." },
        ],
        tips: ["Gunakan jaket tebal — suhu bisa turun hingga 5°C", "Pakai masker untuk abu vulkanik"],
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
        description: "Air terjun bertirai selebar seratus meter yang jatuh dari tebing setengah lingkaran ke dalam lembah hijau yang diselimuti kabut — salah satu air terjun terindah di Jawa Timur dengan ketinggian sekitar 120 meter.",
        heroImage: "/bromo.jpg",
        thingsToDo: [
        { title: "Waterfall Trek", desc: "Menuruni tebing curam menuju dasar air terjun, merasakan semburan air." },
        { title: "Photo Spot", desc: "Mengabadikan momen di spot foto legendaris dengan latar air terjun." },
        { title: "River Walk", desc: "Jalan-jalan di sepanjang sungai di dasar lembah yang rimbun." },
      ],
        tips: ["Gunakan sepatu anti slip — jalur curam dan licin"],
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
        description: "Pantai konservasi dengan gradasi tiga warna air laut yang memukau — dari biru muda, biru kehijauan, hingga biru laut dalam. Terumbu karangnya masih asri dan terjaga berkat status kawasan lindung.",
        heroImage: "/bromo.jpg",
        thingsToDo: [{ title: "Snorkeling", desc: "Menyelam di antara terumbu karang warna-warni sambil dikelilingi ikan tropis." }],
        tips: ["Reservasi dulu — jumlah pengunjung dibatasi"],
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
        description: "Air terjun dataran tinggi yang memantulkan spektrum warna pelangi di pagi hari ketika sinar matahari menerpa butiran air yang berterbangan. Dikelilingi hutan tropis yang rimbun dan udara sejuk khas pegunungan.",
        heroImage: "/bromo.jpg",
        thingsToDo: [
        { title: "Hiking", desc: "Menyusuri setapak hujan menuju air terjun dengan suara gemericik air menemani langkah." },
        { title: "Rainbow Hunt", desc: "Mengabadikan momen pelangi yang muncul di semburan air terjun saat sinar pagi." },
        { title: "Forest Bathing", desc: "Duduk tenang di tepi sungai sambil menikmati kesejukan hutan dataran tinggi." },
      ],
        tips: ["Datang pagi — pelangi hanya muncul antara pukul 09:00–12:00"],
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
        description: "Cagar alam pulau tropis yang menyimpan laguna air asin tersembunyi di tengahnya — Segara Anakan. Airnya berwarna hijau toska jernih, dikelilingi tebing karang dan hutan tropis yang lebat.",
        heroImage: "/bromo.jpg",
        thingsToDo: [
        { title: "Hutan Trek", desc: "Menjelajahi hutan tropis pulau menuju laguna tersembunyi Segara Anakan." },
        { title: "Lagoon Swim", desc: "Berenang di laguna air asin hijau toska yang dikelilingi tebing karang." },
        { title: "Bird Watching", desc: "Mengamati burung endemik di sepanjang jalur hutan." },
      ],
        tips: ["Izin wajib — kawasan cagar alam dilindungi"],
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
        description: "Bukit tinggi dengan jalur setapak yang menawarkan panorama 360° Gunung Arjuno dari puncaknya. Dikelilingi hutan pinus yang rimbun, tempat ini menjadi favorit para pendaki dan pecinta camping di bawah bintang.",
        heroImage: "/bromo.jpg",
        thingsToDo: [
        { title: "Offroad", desc: "Menantang medan berbatu menuju puncak dengan kendaraan 4x4." },
        { title: "Camping", desc: "Mendirikan tenda di puncak bukit dengan panorama Gunung Arjuo di kejauhan." },
        { title: "Stargazing", desc: "Mengamati langit malam yang cerah bebas polusi cahaya dari ketinggian." },
      ],
        tips: ["Gunakan kendaraan kuat — medan terjal"],
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
        description: "Taman tema edukatif dan rekreasi terbesar di Malang — menggabungkan wahana permainan modern dengan pusat sains interaktif. Cocok untuk keluarga dengan anak-anak yang ingin belajar sambil bermain.",
        heroImage: "/bromo.jpg",
        thingsToDo: [
        { title: "Thrill Rides", desc: "Menikmati wahana roller coaster dan bianglala raksasa." },
        { title: "Science Zone", desc: "Belajar sains interaktif di laboratorium dan museum sains." },
        { title: "Waterpark", desc: "Bermain air di kolam ombak dan seluncuran raksasa." },
      ],
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
        description: "Museum transportasi bertaraf internasional dengan koleksi lebih dari 300 kendaraan klasik dari seluruh dunia, ditata dalam tema zona Hollywood, Eropa, dan Asia. Setiap sudutnya instagramable dan penuh sejarah.",
        heroImage: "/bromo.jpg",
        thingsToDo: [
        { title: "Auto Collection", desc: "Melihat lebih dari 300 kendaraan klasik dari seluruh dunia." },
        { title: "Hollywood Zone", desc: "Berfoto di set Hollywood dan jalanan era 1950-an." },
        { title: "European Walk", desc: "Jalan-jalan di zona Eropa dengan arsitektur khas." },
      ],
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
        description: "Koridor bersejarah di pusat Malang yang mempertahankan arsitektur kolonial Belanda asli — deretan bangunan art deco, jalan berbatu, dan kafe-kafe vintage yang menyajikan pengalaman Eropa lama di tengah kota.",
        heroImage: "/bromo.jpg",
        thingsToDo: [
        { title: "Heritage Walk", desc: "Jalan-jalan di sepanjang koridor bersejarah dengan arsitektur kolonial Belanda." },
        { title: "Vintage Coffee", desc: "Mampir di kafe-kafe vintage yang menyajikan kopi lokal." },
        { title: "Photo Tour", desc: "Berfoto di depan bangunan art deco dan mural jalanan." },
      ],
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
        description: "Mata air alami dengan air sejernih kristal yang memancar dari celah-celah bebatuan. Dikelilingi pepohonan tropis dan tanaman air yang bergoyang lembut — tempat snorkeling air tawar yang unik di Malang selatan.",
        heroImage: "/bromo.jpg",
        thingsToDo: [
        { title: "Freshwater Snorkeling", desc: "Snorkeling di mata air alami dengan visibilitas air sangat jernih." },
        { title: "Spring Dive", desc: "Menyelam dangkal di kolam alami dengan tanaman air yang bergoyang." },
        { title: "Picnic", desc: "Bersantai di tepi sungai sambil menikmati bekal makan siang." },
      ],
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
        description: "Kafe modern 24 jam dengan interior industrial, meja besar komunal, pencahayaan hangat, dan colokan listrik di setiap sudut — tempat favorit para remote worker dan pelajar yang membutuhkan suasana kerja produktif.",
        heroImage: "/bromo.jpg",
        thingsToDo: [
        { title: "Remote Work", desc: "Bekerja dengan nyaman di meja besar dengan colokan dan WiFi kencang." },
        { title: "Coffee Tasting", desc: "Mencoba berbagai varian kopi lokal specialty." },
        { title: "Meet & Greet", desc: "Bertemu sesama digital nomad di coworking space." },
      ],
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
