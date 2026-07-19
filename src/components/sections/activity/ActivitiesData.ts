import type { Category } from "./types";

export const activitiesData: Record<string, Category> = {
  "nature-seeker": {
    title: "Nature Seeker",
    description: "Jelajahi keindahan alam Malang yang memukau dari gunung hingga air terjun.",
    places: [
      {
        title: "Mount Bromo",
        tagline: "The Majestic Sunrise Over the Sea of Sand",
        description: "The crown jewel of East Java. Witness a surreal sunrise over the Sea of Sand and the active crater, a breathtaking drive from Malang.",
        heroImage: "/bromo.jpg",
        
        basicInfo: {
          location: "Taman Nasional Bromo Tengger Semeru, Jawa Timur",
          hours: "Buka 24 Jam",
          price: "Rp 29.000 (Lokal, Weekday) / Rp 220.000 (Mancanegara)",
          ticketLink: "https://bookingbromo.bromotenggersemeru.org/",
          rating: "4.8/5",
          category: "Alam / Petualangan / Budaya",
        },

        gallery: [
          { src: "/bromo.jpg", desc: "Golden sunrise menyinari kawah Bromo dan Gunung Batok" },
          { src: "/bromo.jpg", desc: "Pura Luhur Poten di tengah lautan pasir yang luas" },
          { src: "/bromo.jpg", desc: "Kawah Bromo yang masih aktif mengepulkan asap putih" },
          { src: "/bromo.jpg", desc: "Padang Sabana (Bukit Teletubbies) yang menghijau" },
          { src: "/bromo.jpg", desc: "Jeep 4x4 berjejer menembus kabut lautan pasir berbisik" },
        ],

        story: "Behind its dramatic landscape, Mount Bromo holds a deep cultural and spiritual story. For the Tenggerese people, this mountain is not just a destination, it is a sacred place tied to their beliefs and identity. The name “Bromo” comes from Brahma, the Hindu god of creation. To this day, the Tengger community continues to perform the Yadnya Kasada ritual, offering crops and prayers into the crater as a symbol of gratitude and devotion. This living tradition adds a deeper meaning to Bromo, where nature, culture, and belief come together in one unforgettable experience.",

        keyAttractions: [
          { title: "Penanjakan 1", desc: "Titik pandang tertinggi dan paling populer untuk menyaksikan sunrise berlatar Bromo dan Semeru." },
          { title: "Lautan Pasir Berbisik", desc: "Hamparan pasir vulkanik seluas 10 km persegi yang membentang mengelilingi kaldera gunung." },
          { title: "Pura Luhur Poten", desc: "Tempat ibadah suci umat Hindu Tengger yang berdiri megah di tengah gersangnya lautan pasir." },
          { title: "Kawah Aktif Bromo", desc: "Kawah dengan diameter 800 meter yang selalu mengepulkan asap belerang tebal." },
        ],

        thingsToDo: [
          { title: "Menanti Matahari Terbit", desc: "Berkumpul di titik pandang (viewpoint) menanti semburat cahaya keemasan pertama.", difficulty: "Mudah", image: "/bromo.jpg" },
          { title: "Off-Road Jeep 4x4", desc: "Menjelajahi luasnya lautan pasir bergelombang menggunakan Jeep sewaan yang seru.", difficulty: "Mudah", image: "/bromo.jpg" },
          { title: "Mendaki ke Bibir Kawah", desc: "Berjalan melintasi pasir dan menaiki sekitar 250 anak tangga menuju bibir kawah yang berasap.", difficulty: "Sedang", image: "/bromo.jpg" },
          { title: "Menunggang Kuda", desc: "Menyewa kuda dari area parkir Jeep menuju kaki tangga kawah jika Anda tidak ingin berjalan kaki.", difficulty: "Mudah", image: "/bromo.jpg" },
          { title: "Fotografi Landscape", desc: "Membidik keindahan alam, milky way di malam hari, atau potret sabana yang hijau.", difficulty: "Mudah", image: "/bromo.jpg" },
        ],

        visitorTips: {
          bestTime: "April hingga Oktober (Musim Kemarau) atau jam 03:00 pagi untuk sunrise.",
          bring: ["Bawa jaket tebal & sarung tangan", "Gunakan masker & kacamata", "Pakai sepatu trekking yang nyaman", "Sediakan uang tunai pecahan kecil"],
          avoid: [
            "Jangan membuang sampah sembarangan", 
            "Jangan berjalan di luar jalur pendakian", 
            "Hindari mengganggu area sakral Pura Luhur Poten",
            "Jangan menyalakan api unggun sembarangan di area padang sabana"
          ],
          insiderTips: [
            "Lakukan booking tiket online jauh-jauh hari karena kuota harian dibatasi.",
            "Sewalah jaket atau beli kopi panas dari warga lokal jika tidak kuat dingin."
          ]
        },

        tips: ["Gunakan jaket tebal — suhu bisa turun hingga 5°C", "Pakai masker untuk abu vulkanik"],

        bestTime: [
          {
            icon: "sunrise",
            badge: "Golden Hour",
            label: "Early Morning",
            value: "03:00 – 06:00 WIB",
            color: "#EF9F27",
            intensity: "85%",
          },
          {
            icon: "sun",
            badge: "Dry Season",
            label: "Musim Kemarau",
            value: "April – Oktober",
            color: "#378ADD",
            intensity: "65%",
          },
        ],

        howToGetThere: {
          fromMalang: "Rute Malang - Tumpang - Gubugklakah - Ngadas - Jemplang - Bromo. Sekitar 2-2.5 jam. Direkomendasikan menyewa Jeep dari Tumpang atau Malang kota.",
          fromBatu: "Berangkat tengah malam (00:00) menggunakan travel/Jeep sewaan, bergabung dengan rute via Malang. Waktu tempuh sekitar 3 jam.",
          fromSurabaya: "Rute Surabaya - Sidoarjo - Pasuruan - Probolinggo - Cemoro Lawang. Sekitar 3-4 jam perjalanan darat.",
          publicTransport: "Tersedia angkutan umum (Bison) dari Terminal Bayuangga Probolinggo menuju Cemoro Lawang, namun jadwalnya sangat terbatas.",
          recommendations: "Untuk kepraktisan, sangat disarankan menggunakan jasa Open Trip atau Private Trip Jeep dari Malang (berkisar Rp 300.000 - Rp 350.000/orang)."
        },

        facilities: [
          "Area Parkir luas di pintu masuk dan lautan pasir (khusus Jeep/Motor trail)",
          "Toilet umum (berbayar, sediakan uang koin)",
          "Mushola di area Penanjakan dan Cemoro Lawang",
          "Warung makan dan kopi (buka sejak dini hari)"
        ],
        foodNearby: ["Warung Kopi Penanjakan", "Cafe Bromo Permai", "Lava View Restaurant"],
        stayNearby: ["Jiwa Jawa Resort Bromo", "Lava View Lodge", "Cemara Indah Hotel"],
        contactInfo: "Website resmi booking: bookingbromo.bromotenggersemeru.org",

        funFacts: [
          "Bromo adalah salah satu gunung berapi paling aktif di Indonesia, telah meletus lebih dari 50 kali sejak 1767.",
          "Suhu udara di Puncak Penanjakan saat kemarau bisa anjlok mendekati 0 derajat Celcius, bahkan sering muncul lapisan es tipis (embun upas) di lautan pasir.",
          "Lautan Pasir Bromo ditetapkan sebagai kawasan lindung khusus dan merupakan satu-satunya kawasan konservasi berbentuk lautan pasir di Indonesia."
        ],

        nearbyPlaces: [
          { name: "Air Terjun Madakaripura", distance: "± 45 Menit (dari Cemoro Lawang)", reason: "Air terjun tertinggi di Pulau Jawa dengan pesona tirai air melingkar yang spektakuler." },
          { name: "Bukit Kingkong", distance: "± 10 Menit", reason: "Alternatif terbaik untuk melihat sunrise jika Penanjakan 1 terlalu padat." },
          { name: "Desa Wisata Ngadas", distance: "± 30 Menit (rute Malang)", reason: "Melihat kehidupan autentik masyarakat Tengger yang harmonis di atas awan." }
        ],

        closingCTA: "Rasakan sendiri magisnya berdiri di atas awan sambil menatap lanskap purba yang tak terlupakan. Kemas ransel Anda, pasang alarm pagi-pagi buta, dan siapkan diri Anda untuk terpesona oleh Gunung Bromo. Sampai jumpa di puncak sunrise!",

        location: { lat: -7.9425, lng: 112.953 },
      },

      {
        title: "Tumpak Sewu",
        tagline: "The Thousand Waterfalls of East Java",
        description: "Indonesia's 'Little Niagara'. A massive, curtain-like waterfall tucked deep in the lush tropical highlands.",
        heroImage: "/locations/Tumpak_Sewu.jpg",
        
        basicInfo: {
          location: "Sidomulyo, Pronojiwo, Kabupaten Lumajang, Jawa Timur",
          hours: "07:00 – 17:00 WIB",
          price: "Rp 10.000 (Domestik) / Rp 20.000 (Mancanegara)",
          rating: "4.7/5",
          category: "Alam / Air Terjun",
        },

        gallery: ["/locations/Tumpak_Sewu.jpg"],

        story: "Tumpak Sewu, which translates to 'a thousand waterfalls' in Javanese, gets its name from the countless streams of water that flow down its semi-circular cliff. Unlike single-drop waterfalls, it forms a majestic curtain of water that plunges into a deep, misty ravine. For generations, the surrounding forests and springs have been preserved by the local community as a sacred source of life and agriculture, making it a beautiful marriage of raw volcanic terrain and pristine nature.",

        keyAttractions: [
          { title: "Panorama Viewpoint", desc: "Titik pandang atas untuk melihat keindahan air terjun secara keseluruhan secara vertikal." },
          { title: "Goa Tetes", desc: "Sistem gua eksotis dengan rembesan air belerang yang membentuk stalaktit alami." },
        ],

        thingsToDo: [
          { title: "Waterfall Trek", desc: "Menuruni tebing curam menuju dasar air terjun, merasakan semburan air.", difficulty: "Sedang", image: "/locations/Tumpak_Sewu.jpg" },
          { title: "Photo Spot", desc: "Mengabadikan momen di spot foto legendaris dengan latar air terjun.", difficulty: "Mudah", image: "/locations/Tumpak_Sewu.jpg" },
          { title: "River Walk", desc: "Jalan-jalan di sepanjang sungai di dasar lembah yang rimbun.", difficulty: "Mudah", image: "/locations/Tumpak_Sewu.jpg" },
        ],

        visitorTips: {
          bestTime: "Jam 07:00 - 10:00 pagi saat sinar matahari menyinari kabut air terjun secara dramatis.",
          bring: ["Bawa sandal gunung / sepatu trekking anti slip", "Siapkan baju ganti & kantong tahan air", "Gunakan jas hujan plastik"],
          avoid: ["Jangan berenang terlalu dekat dengan pusaran air terjun", "Hindari turun ke dasar lembah saat hujan lebat"],
          insiderTips: ["Sewa pemandu lokal jika Anda ingin menuruni tebing demi keamanan ekstra."]
        },

        tips: ["Gunakan sepatu trekking anti slip", "Jangan turun saat hujan lebat karena risiko banjir bandang"],

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

        funFacts: [
          "Nama Tumpak Sewu diambil karena aliran air terjunnya yang sangat banyak menyerupai seribu tirai.",
          "Air terjun ini bersumber langsung dari aliran Gunung Semeru, gunung tertinggi di Pulau Jawa.",
          "Tebing batu melingkar di Tumpak Sewu terbentuk secara alami akibat aktivitas vulkanik purba."
        ],

        closingCTA: "Saksikan langsung kemegahan tirai air seribu di dasar lembah tersembunyi. Petualangan mendebarkan menanti Anda!",

        location: { lat: -8.2307, lng: 112.9167 },
      },

      {
        title: "Pantai 3 Warna",
        tagline: "A Pristine Marine Conservation Oasis",
        description: "A pristine conservation beach known for its three distinct water colors and vibrant coral reefs, accessible via a light trek.",
        heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
        
        basicInfo: {
          location: "Sendang Biru, Sumbermanjing Wetan, Kabupaten Malang, Jawa Timur",
          hours: "06:00 – 16:00 WIB",
          price: "Rp 15.000 / orang + Pemandu Wajib (Rp 150.000 per 10 orang)",
          rating: "4.6/5",
          category: "Pantai / Konservasi",
        },

        gallery: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"],

        story: "Pantai Tiga Warna is a pristine marine sanctuary located within the Clungup Mangrove Conservation (CMC) area. Its name is derived from the unique gradations of blue, green, and reddish-brown colors created by varying water depths and coral reef health. The beach is strictly managed with a daily visitor quota to prevent overtourism and preserve the rich marine ecosystem, making it a proud symbol of local conservation efforts.",

        keyAttractions: [
          { title: "Terumbu Karang Clungup", desc: "Taman bawah laut yang dihuni karang lunak dan keras yang dilindungi." },
          { title: "Hutan Mangrove CMC", desc: "Hutan bakau pembatas abrasi yang juga menjadi habitat satwa pesisir." },
        ],

        thingsToDo: [
          { title: "Snorkeling", desc: "Menyelam di antara terumbu karang warna-warni sambil dikelilingi ikan tropis.", difficulty: "Mudah", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" },
          { title: "Canoeing", desc: "Menyewa kano untuk menjelajahi perairan tenang di sekitar teluk.", difficulty: "Mudah", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" },
        ],

        visitorTips: {
          bestTime: "Matahari terik di pagi hari untuk visibilitas bawah laut terbaik saat snorkeling.",
          bring: ["Peralatan snorkeling pribadi jika ada", "Baju renang & tabir sunya ramah lingkungan", "Kantong sampah ramah lingkungan"],
          avoid: ["Dilarang keras menyentuh atau menginjak terumbu karang", "Jangan meninggalkan sampah plastik apa pun di area pantai"],
          insiderTips: ["Lakukan reservasi kunjungan beberapa minggu sebelumnya karena tiket harian sangat dibatasi."]
        },

        tips: ["Reservasi dulu — jumlah pengunjung dibatasi", "Bawa kantong plastik untuk membawa pulang sampah Anda"],

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

        funFacts: [
          "Pantai ini memiliki aturan ketat pemeriksaan sampah bawaan sebelum masuk dan keluar kawasan pantai.",
          "Perbedaan warna air disebabkan oleh gradasi kedalaman laut dan keberadaan padang lamun di bawah air.",
          "Kawasan pantai ini dikelola langsung secara swadaya oleh masyarakat lokal yang tergabung dalam CMC."
        ],

        closingCTA: "Jelajahi surga bawah laut tersembunyi dengan terumbu karang yang terjaga sempurna. Mari jaga kelestarian alam bersama!",

        location: { lat: -8.4444, lng: 112.6789 },
      },

      {
        title: "Coban Pelangi",
        tagline: "A Rainbow in the Highland Mist",
        description: "The 'Rainbow Waterfall'. When the mist catches the morning light, it creates beautiful iridescent arches in the forest.",
        heroImage: "https://images.unsplash.com/photo-1501179611942-0c2610dd1dd7?auto=format&fit=crop&q=80&w=800",
        
        basicInfo: {
          location: "Gubugklakah, Poncokusumo, Kabupaten Malang, Jawa Timur",
          hours: "08:00 – 17:00 WIB",
          price: "Rp 10.000 (Weekday) / Rp 15.000 (Weekend)",
          rating: "4.5/5",
          category: "Alam / Air Terjun",
        },

        gallery: ["https://images.unsplash.com/photo-1501179611942-0c2610dd1dd7?auto=format&fit=crop&q=80&w=800"],

        story: "Coban Pelangi is situated at an elevation of 1,299 meters above sea level on the slope of Mount Semeru. It is famous for the rainbow phenomenon that frequently appears in the morning mist between 9:00 AM and noon. As sunlight passes through the high-pressure water droplets cascading down the 110-meter cliff, it splits into a vibrant rainbow arch, casting a magical atmosphere over the lush pine valley.",

        keyAttractions: [
          { title: "Bibir Air Terjun", desc: "Area bawah jembatan kayu untuk melihat jatuhnya air dari dekat secara dramatis." },
          { title: "Jalur Hutan Pinus", desc: "Jalur setapak trekking sejuk yang dikelilingi pohon pinus tinggi menjulang." },
        ],

        thingsToDo: [
          { title: "Hiking", desc: "Menyusuri setapak hujan menuju air terjun dengan suara gemericik air menemani langkah.", difficulty: "Sedang", image: "https://images.unsplash.com/photo-1501179611942-0c2610dd1dd7?auto=format&fit=crop&q=80&w=800" },
          { title: "Rainbow Hunt", desc: "Mengabadikan momen pelangi yang muncul di semburan air terjun saat sinar pagi.", difficulty: "Mudah", image: "https://images.unsplash.com/photo-1501179611942-0c2610dd1dd7?auto=format&fit=crop&q=80&w=800" },
          { title: "Forest Bathing", desc: "Duduk tenang di tepi sungai sambil menikmati kesejukan hutan dataran tinggi.", difficulty: "Mudah", image: "https://images.unsplash.com/photo-1501179611942-0c2610dd1dd7?auto=format&fit=crop&q=80&w=800" },
        ],

        visitorTips: {
          bestTime: "Datang pagi antara jam 09:00 - 12:00 WIB untuk menyaksikan keindahan bias pelangi secara maksimal.",
          bring: ["Jaket atau pakaian hangat karena suhu dingin pegunungan", "Kamera tahan air", "Payung atau jas hujan"],
          avoid: ["Jangan mandi tepat di bawah air terjun utama karena tekanan air sangat deras", "Hindari melompati pagar pembatas tebing"],
          insiderTips: ["Datanglah sekitar pukul 10:00 pagi saat sinar matahari berada di sudut terbaik untuk memunculkan pelangi."]
        },

        tips: ["Datang pagi — pelangi hanya muncul antara pukul 09:00–12:00", "Bawa baju hangat"],

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

        funFacts: [
          "Suhu udara di sekitar air terjun bisa mencapai 15 derajat Celcius di pagi hari.",
          "Air terjun ini merupakan bagian penting dari daerah tangkapan air Taman Nasional Bromo Tengger Semeru.",
          "Nama 'Coban' sendiri dalam bahasa Jawa berarti air terjun."
        ],

        closingCTA: "Saksikan langsung tarian pelangi abadi di tengah kabut hutan pinus yang sunyi dan menenangkan.",

        location: { lat: -8.0193, lng: 112.8234 },
      },

      {
        title: "Pulau Sempu",
        tagline: "The Mystical Hidden Saltwater Lagoon",
        description: "A remote tropical island nature reserve sheltering a stunning hidden lagoon — Segara Anakan — with crystal-clear turquoise water ringed by cliffs and dense jungle.",
        heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800",
        
        basicInfo: {
          location: "Kecamatan Sumbermanjing Wetan, Kabupaten Malang, Jawa Timur",
          hours: "Perizinan Khusus BKSDA (Akses Terbatas)",
          price: "Sewa Perahu Nelayan Sendang Biru (± Rp 150.000) + Registrasi Perizinan",
          rating: "4.7/5",
          category: "Pulau / Cagar Alam",
        },

        gallery: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800"],

        story: "Pulau Sempu is a strictly protected nature reserve separated from the southern coast of Malang by a narrow strait. Its greatest wonder is Segara Anakan, a secluded saltwater lagoon filled with azure waters, replenished by ocean waves breaking through a natural hole in the high cliffs. Due to its status as a nature reserve (Cagar Alam), tourist access is strictly regulated to protect endangered Javanese flora and fauna.",

        keyAttractions: [
          { title: "Segara Anakan", desc: "Laguna air asin tenang di tengah pulau yang dikelilingi pasir putih halus." },
          { title: "Tebing Karang Bolong", desc: "Tebing tinggi pembatas samudra yang mengalirkan air laut ke dalam laguna." },
        ],

        thingsToDo: [
          { title: "Hutan Trek", desc: "Menjelajahi hutan tropis pulau menuju laguna tersembunyi Segara Anakan.", difficulty: "Sulit", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" },
          { title: "Lagoon Swim", desc: "Berenang di laguna air asin hijau toska yang dikelilingi tebing karang.", difficulty: "Sedang", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" },
          { title: "Bird Watching", desc: "Mengamati burung endemik di sepanjang jalur hutan.", difficulty: "Mudah", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=800" },
        ],

        visitorTips: {
          bestTime: "Musim kemarau saat jalur hutan tanah liat tidak becek berlumpur.",
          bring: ["Sepatu trekking dengan grip kuat", "Persediaan air minum & makanan yang cukup", "Kantong sampah wajib bawa kembali"],
          avoid: ["Dilarang berkemah tanpa izin khusus BKSDA Jawa Timur", "Jangan merusak tanaman atau mengganggu satwa liar di hutan"],
          insiderTips: ["Jalur hutan menuju laguna bisa berubah menjadi lumpur setinggi lutut saat musim hujan, sehingga hindari datang di musim basah."]
        },

        tips: ["Izin wajib — kawasan cagar alam dilindungi", "Siapkan fisik untuk trekking hutan lebat"],

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

        funFacts: [
          "Pulau Sempu dihuni oleh satwa langka seperti macan tutul Jawa dan lutung Jawa.",
          "Segara Anakan merupakan muara air asin alami yang pasang-surutnya diatur oleh ombak Samudra Hindia.",
          "Pulau ini tidak memiliki pasokan air tawar publik sama sekali, menjaga ekosistemnya tetap liar."
        ],

        closingCTA: "Hormati cagar alam liar Indonesia. Jelajahi dengan izin resmi dan biarkan keindahannya tetap perawan.",

        location: { lat: -8.4483, lng: 112.6881 },
      },

      {
        title: "Budug Asu",
        tagline: "A 360° Camp View of Mount Arjuno",
        description: "A challenging yet rewarding highland trek to a peak with sweeping 360° views of Mt. Arjuno, surrounded by dense pine forest and ideal for stargazing.",
        heroImage: "https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=800",
        
        basicInfo: {
          location: "Kreweh, Gunungrejo, Singosari, Kabupaten Malang, Jawa Timur",
          hours: "Buka 24 Jam",
          price: "Rp 10.000 / orang",
          rating: "4.4/5",
          category: "Bukit / Pendakian / Camping",
        },

        gallery: ["https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=800"],

        story: "Budug Asu is a scenic hilltop located at the foot of Mount Arjuno, Singosari. Historically a tracking route for local hunters, it has developed into a popular weekend getaway for young hikers, trail runners, and off-road motor enthusiasts. The main draw is the wooden viewing deck shaped like a wolf's head, which frames the towering peak of Mount Arjuno directly behind it.",

        keyAttractions: [
          { title: "Puncak Budug Asu", desc: "Tebing pandang dengan latar belakang megah lereng Gunung Arjuno." },
          { title: "Kebun Teh Wonosari", desc: "Perkebunan teh hijau yang membentang luas di sepanjang kaki bukit Singosari." },
        ],

        thingsToDo: [
          { title: "Offroad", desc: "Menantang medan berbatu menuju puncak dengan kendaraan 4x4.", difficulty: "Sedang", image: "https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=800" },
          { title: "Camping", desc: "Mendirikan tenda di puncak bukit dengan panorama Gunung Arjuno di kejauhan.", difficulty: "Sedang", image: "https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=800" },
          { title: "Stargazing", desc: "Mengamati langit malam yang cerah bebas polusi cahaya dari ketinggian.", difficulty: "Mudah", image: "https://images.unsplash.com/photo-1500382017468-9049fee74a62?auto=format&fit=crop&q=80&w=800" },
        ],

        visitorTips: {
          bestTime: "Malam hari yang cerah saat kemarau untuk menikmati pemandangan gugusan bintang Bima Sakti (Milky Way).",
          bring: ["Peralatan camping tebal jika ingin menginap", "Senter / headlamp", "Jaket penahan angin"],
          avoid: ["Jangan menyalakan api unggun dekat tenda saat angin kencang", "Hindari mendaki menggunakan motor matic biasa karena tanjakan sangat terjal"],
          insiderTips: ["Jalur pendakian via kebun teh Wonosari menawarkan pemandangan yang lebih santai dan sejuk."]
        },

        tips: ["Gunakan kendaraan kuat — medan terjal", "Bawa jaket windbreaker tebal"],

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

        funFacts: [
          "Nama 'Budug Asu' berasal dari bahasa lokal karena dahulu bukit ini sering dihuni anjing liar.",
          "Kawasan ini merupakan salah satu pintu masuk alternatif tidak resmi bagi pendaki Gunung Arjuno.",
          "Puncak bukit ini berada di ketinggian sekitar 1.400 meter di atas permukaan laut."
        ],

        closingCTA: "Nyalakan jiwa petualang Anda, nikmati malam bertabur bintang di puncak bukit di kaki Gunung Arjuno.",

        location: { lat: -7.8078, lng: 112.7089 },
      },
    ],
  },

  "fun-&-entertainment": {
    title: "Fun & Entertainment",
    description: "Wahana bermain keluarga.",
    places: [
      {
        title: "Jatim Park 1",
        tagline: "The Premier Science & Thrills Family Theme Park",
        description: "A high-energy cultural theme park combining Indonesian science and heritage with massive amusement rides.",
        heroImage: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=800",
        
        basicInfo: {
          location: "Jl. Kartika No. 2, Sisir, Kecamatan Batu, Kota Batu, Jawa Timur",
          hours: "08:30 – 16:30 WIB",
          price: "Rp 100.000 (Weekday) / Rp 120.000 (Weekend)",
          rating: "4.6/5",
          category: "Taman Hiburan / Edukasi",
        },

        gallery: ["https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=800"],

        story: "Jawa Timur Park 1 is the pioneer of modern tourism in Batu City. Combining theme park thrills with national culture, it features a massive cultural gallery that displays traditional houses, costumes, and musical instruments from all 34 provinces of Indonesia. In addition, its science center and outdoor waterpark make it a beloved educational hub for school trips and families.",

        keyAttractions: [
          { title: "Galeri Etnik Nusantara", desc: "Museum budaya interaktif yang menampilkan sejarah suku-suku di Indonesia." },
          { title: "Science Center", desc: "Laboratorium fisika, kimia, dan biologi interaktif untuk anak-anak." },
        ],

        thingsToDo: [
          { title: "Thrill Rides", desc: "Menikmati wahana roller coaster dan bianglala raksasa.", difficulty: "Sedang", image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=800" },
          { title: "Science Zone", desc: "Belajar sains interaktif di laboratorium dan museum sains.", difficulty: "Mudah", image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=800" },
          { title: "Waterpark", desc: "Bermain air di kolam ombak dan seluncuran raksasa.", difficulty: "Mudah", image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&q=80&w=800" },
        ],

        visitorTips: {
          bestTime: "Datanglah hari biasa (Weekday) untuk menghindari antrean wahana bermain yang sangat panjang.",
          bring: ["Pakaian renang untuk kolam air", "Kamera untuk berfoto di galeri budaya", "Topi & kacamata hitam"],
          avoid: ["Dilarang membawa makanan berat dari luar ke dalam area taman", "Jangan mengabaikan instruksi keselamatan wahana ekstrem"],
          insiderTips: ["Membeli tiket terusan (Jatim Park 1 & Museum Tubuh) jauh lebih murah daripada membeli tiket terpisah."]
        },

        tips: ["Datang pagi", "Bawa pakaian ganti untuk bermain di area waterpark"],

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

        funFacts: [
          "Jatim Park 1 merupakan salah satu pelopor taman wisata edukasi terbesar di Jawa Timur.",
          "Galeri Etnik Nusantara di sini mengoleksi pakaian adat asli langsung dari daerah asalnya.",
          "Taman airnya didesain ramah anak dengan kedalaman kolam aman dan pengawasan lifesaver."
        ],

        closingCTA: "Bawa seluruh keluarga Anda untuk belajar budaya Nusantara dan rasakan petualangan sains yang seru dan mengasyikkan!",

        location: { lat: -7.8841, lng: 112.5240 },
      },

      {
        title: "Museum Angkut",
        tagline: "A Journey Through Cinematic Transport History",
        description: "Southeast Asia's first world-class transportation museum. Explore over 300 vintage vehicles through cinematic global zones.",
        heroImage: "https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&q=80&w=800",
        
        basicInfo: {
          location: "Jl. Terusan Sultan Agung No. 2, Ngaglik, Kota Batu, Jawa Timur",
          hours: "12:00 – 20:00 WIB",
          price: "Rp 100.000 / orang + Tiket Kamera Pro (Rp 30.000)",
          rating: "4.8/5",
          category: "Museum / Atraksi / Seni",
        },

        gallery: ["https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&q=80&w=800"],

        story: "Museum Angkut is Southeast Asia's first transport-themed museum. Stretching over 3.8 hectares, the museum tells the history of global transportation, from traditional horse-drawn carriages to state-of-the-art electric vehicles and historic aircraft. The museum is renowned for its immersive movie-set zones like the European Walk, Buckingham Palace, and Gangster Town, which regularly host Broadway-style parade shows.",

        keyAttractions: [
          { title: "Gangster Town", desc: "Replika jalanan Chicago tahun 1930-an lengkap dengan mobil polisi kuno di sampingnya." },
          { title: "Runway 27", desc: "Replika bandara militer dengan pesawat Boeing 737 asli yang bisa dimasuki pengunjung." },
        ],

        thingsToDo: [
          { title: "Auto Collection", desc: "Melihat lebih dari 300 kendaraan klasik dari seluruh dunia.", difficulty: "Mudah", image: "https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&q=80&w=800" },
          { title: "Hollywood Zone", desc: "Berfoto di set Hollywood dan jalanan era 1950-an.", difficulty: "Mudah", image: "https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&q=80&w=800" },
          { title: "European Walk", desc: "Jalan-jalan di zona Eropa dengan arsitektur khas.", difficulty: "Mudah", image: "https://images.unsplash.com/photo-1551522435-a13afa10f103?auto=format&fit=crop&q=80&w=800" },
        ],

        visitorTips: {
          bestTime: "Jam 16:00 sore saat pertunjukan karnaval Broadway dimulai di jalanan utama.",
          bring: ["Kamera atau smartphone baterai penuh", "Alas kaki yang nyaman karena area museum sangat luas", "Uang elektronik untuk transaksi di pasar apung"],
          avoid: ["Jangan menyalakan lampu kilat (flash) berlebihan di dekat pelat informasi mobil", "Dilarang memanjat kendaraan pameran tanpa izin petugas"],
          insiderTips: ["Broadway Show di Gangster Town dimulai sekitar pukul 16:30 WIB, ini adalah pertunjukan yang wajib ditonton!"]
        },

        tips: ["Datang sore", "Bawa kamera terbaik Anda untuk berfoto di zona tematik"],

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

        funFacts: [
          "Museum ini mengoleksi mobil helikopter pertama kepresidenan RI milik Bung Karno.",
          "Seluruh mobil klasik di museum ini dirawat secara rutin dan beberapa di antaranya masih bisa dikendarai.",
          "Zona Pasar Apung Nusantara menyajikan aneka jajanan tradisional langsung di atas perahu kayu."
        ],

        closingCTA: "Jelajahi sejarah transportasi dunia di tengah set film Hollywood yang menakjubkan. Petualangan visual menanti Anda!",

        location: { lat: -7.8789, lng: 112.5195 },
      },
    ],
  },

  "city-explorer": {
    title: "Heritage",
    description: "Wisata kota.",
    places: [
      {
        title: "Kayutangan Heritage",
        tagline: "Strolling Through Art Deco Colonial History",
        description: "Malang's historic corridor. Explore preserved colonial streets, vintage shopfronts, and hidden riverside heritage alleys.",
        heroImage: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800",
        
        basicInfo: {
          location: "Jalan Jenderal Basuki Rahmat, Klojen, Kota Malang, Jawa Timur",
          hours: "Buka 24 Jam",
          price: "Gratis (Umum) / Rp 5.000 (Masuk Gang Perkampungan)",
          rating: "4.6/5",
          category: "Cagar Budaya / Wisata Kota",
        },

        gallery: ["https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800"],

        story: "Kayutangan Heritage represents the heart of old Malang town, dating back to the late 19th century when it was the central commercial street under Dutch East Indies rule. The area spans both the main cobblestone boulevard (Jalan Basuki Rahmat) and the hidden residential alleys inside Kampoeng Heritage. Many houses inside are still owned by descendants of original colonial clerks, maintaining their signature high-ceiling structure, vintage Dutch tiles, and historical family heirlooms.",

        keyAttractions: [
          { title: "Kampoeng Heritage", desc: "Jaringan gang kuno dengan rumah tinggal warga lokal dari era tahun 1920-an." },
          { title: "Gereja Hati Kudus Yesus", desc: "Gereja Katedral Ijen dengan arsitektur Gothic kuno yang anggun." },
        ],

        thingsToDo: [
          { title: "Heritage Walk", desc: "Jalan-jalan di sepanjang koridor bersejarah dengan arsitektur kolonial Belanda.", difficulty: "Mudah", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800" },
          { title: "Vintage Coffee", desc: "Mampir di kafe-kafe vintage yang menyajikan kopi lokal.", difficulty: "Mudah", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800" },
          { title: "Photo Tour", desc: "Berfoto di depan bangunan art deco dan mural jalanan.", difficulty: "Mudah", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800" },
        ],

        visitorTips: {
          bestTime: "Sore hingga malam hari saat lampu-lampu antik koridor mulai menyala indah.",
          bring: ["Pakaian bergaya vintage untuk foto terbaik", "Uang tunai kecil untuk retribusi gang perkampungan", "Alas kaki santai untuk jalan kaki"],
          avoid: ["Jangan berbicara terlalu keras saat menelusuri gang karena area tersebut pemukiman aktif warga", "Hindari memotret warga lokal di halaman rumah mereka tanpa izin"],
          insiderTips: ["Mampirlah ke Kafe Kopi Lonceng untuk merasakan seduhan kopi lokal legendaris di meja kasir era Belanda."]
        },

        tips: ["Datang sore", "Pilih busana bergaya tempo dulu untuk sesi pemotretan bertema kolonial"],

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

        funFacts: [
          "Batu paving jalanan Kayutangan menggunakan batu khusus untuk meredam kecepatan lalu lintas demi pejalan kaki.",
          "Kampung Heritage dihuni oleh komunitas seniman dan pengrajin barang antik lokal.",
          "Beberapa rumah kuno di dalam gang telah berusia lebih dari satu abad dan masih kokoh berdiri."
        ],

        closingCTA: "Telusuri lorong waktu dan rasakan romansa arsitektur kolonial Eropa di jantung Kota Malang kuno.",

        location: { lat: -7.9793, lng: 112.6294 },
      },
    ],
  },

  "hidden-gem": {
    title: "Hidden Gem",
    description: "Tempat tersembunyi.",
    places: [
      {
        title: "Sumber Sirah",
        tagline: "Snorkeling Under Fresh Crystal Water",
        description: "Crystal clear freshwater springs. Swim through underwater gardens of river grass and schools of small fish.",
        heroImage: "https://images.unsplash.com/photo-1501179611942-0c2610dd1dd7?auto=format&fit=crop&q=80&w=800",
        
        basicInfo: {
          location: "Gondanglegi Kulon, Gondanglegi, Kabupaten Malang, Jawa Timur",
          hours: "07:00 – 17:00 WIB",
          price: "Rp 5.000 / orang",
          rating: "4.5/5",
          category: "Sumber Mata Air / Kolam Alami",
        },

        gallery: ["https://images.unsplash.com/photo-1501179611942-0c2610dd1dd7?auto=format&fit=crop&q=80&w=800"],

        story: "Sumber Sirah is a hidden natural spring famous for its astonishingly clear water. The water is so transparent that visitors can look down to see green freshwater algae growing like a miniature pine forest on the sandy pool bed, with schools of tiny fish darting among the leaves. The spring is a natural source of irrigation for the surrounding rice paddies and has been kept clean by the local farmers who protect the spring head.",

        keyAttractions: [
          { title: "Kolam Alami Sirah", desc: "Kolam berpasir hitam dengan tanaman air ganggang hijau yang indah." },
          { title: "Sungai Irigasi", desc: "Aliran air jernih tenang untuk wahana susur air menggunakan ban dalam." },
        ],

        thingsToDo: [
          { title: "Freshwater Snorkeling", desc: "Snorkeling di mata air alami dengan visibilitas air sangat jernih.", difficulty: "Mudah", image: "https://images.unsplash.com/photo-1501179611942-0c2610dd1dd7?auto=format&fit=crop&q=80&w=800" },
          { title: "Spring Dive", desc: "Menyelam dangkal di kolam alami dengan tanaman air yang bergoyang.", difficulty: "Sedang", image: "https://images.unsplash.com/photo-1501179611942-0c2610dd1dd7?auto=format&fit=crop&q=80&w=800" },
          { title: "Picnic", desc: "Bersantai di tepi sungai sambil menikmati bekal makan siang.", difficulty: "Mudah", image: "https://images.unsplash.com/photo-1501179611942-0c2610dd1dd7?auto=format&fit=crop&q=80&w=800" },
        ],

        visitorTips: {
          bestTime: "Matahari berada tepat di atas kepala agar cahaya menyinari ganggang bawah air secara dramatis.",
          bring: ["Kacamata renang atau snorkel", "Baju ganti & handuk kering", "Pelindung waterproof untuk HP"],
          avoid: ["Dilarang keras menginjak tanaman ganggang hijau di dasar air karena sangat rapuh", "Hindari melompat langsung dari tepi karena kolam cukup dangkal di bagian pinggir"],
          insiderTips: ["Datanglah saat matahari bersinar terik di atas kepala agar cahaya menembus air dan menerangi ganggang bawah air secara dramatis."]
        },

        tips: ["Jangan injak tanaman", "Bawa kacamata renang untuk snorkeling air tawar"],

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

        funFacts: [
          "Tanaman ganggang air di kolam ini menghasilkan gelembung oksigen segar yang dapat terlihat jelas menempel pada daunnya.",
          "Air dari Sumber Sirah ini langsung dikonsumsi warga lokal setelah melalui penyaringan alami dari batuan karst.",
          "Terdapat penyewaan ban karet ban dalam di lokasi untuk wahana mengambang santai."
        ],

        closingCTA: "Rasakan kesegaran abadi berenang di taman air tawar bawah laut alami yang tenang dan menyejukkan.",

        location: { lat: -8.1432, lng: 112.6048 },
      },
    ],
  },

  "digital-nomad-hub": {
    title: "Digital Nomad Hub",
    description: "Tempat kerja santai.",
    places: [
      {
        title: "Nakoa Coffee",
        tagline: "The Cozy Work & Study Cafe",
        description: "A serene modern café perched high in the hills, blending specialty coffee culture with panoramic mountain views — the perfect highland escape.",
        heroImage: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800",
        
        basicInfo: {
          location: "Jl. Bondowoso No. 14, Gading Kasri, Klojen, Kota Malang, Jawa Timur",
          hours: "Buka 24 Jam",
          price: "Mulai dari Rp 18.000 (Kopi Susu) / Rp 25.000 (Specialty Coffee)",
          rating: "4.7/5",
          category: "Kafe / Ruang Kerja Bersama",
        },

        gallery: ["https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800"],

        story: "Nakoa Coffee is the premier destination for Malang's creative minds and remote workers. Located in Klojen, it addresses the need for a comfortable, uninterrupted working space. With its industrial design, leafy outdoor patio, and massive indoor tables equipped with dedicated power sockets and high-speed Wi-Fi, it has built a community of local digital nomads and students.",

        keyAttractions: [
          { title: "Indoor Working Space", desc: "Ruangan ber-AC tenang dengan meja komunal panjang khusus untuk laptop." },
          { title: "Leafy Outdoor Patio", desc: "Area luar ruangan yang rindang dan berangin sejuk untuk berdiskusi santai." },
        ],

        thingsToDo: [
          { title: "Remote Work", desc: "Bekerja dengan nyaman di meja besar dengan colokan dan WiFi kencang.", difficulty: "Mudah", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" },
          { title: "Coffee Tasting", desc: "Mencoba berbagai varian kopi lokal specialty.", difficulty: "Mudah", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" },
          { title: "Meet & Greet", desc: "Bertemu sesama digital nomad di coworking space.", difficulty: "Mudah", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" },
        ],

        visitorTips: {
          bestTime: "Malam hari di atas jam 20:00 saat pengunjung umum mulai berkurang dan suasana menjadi hening produktif.",
          bring: ["Laptop dan charger pribadi", "Earphone peredam kebisingan", "Jaket jika ingin duduk lama di ruang AC"],
          avoid: ["Hindari meletakkan gelas minuman basah langsung di dekat soket listrik", "Jangan meninggalkan barang berharga tanpa pengawasan"],
          insiderTips: ["Cobalah menu Kopi Susu Nakoa Signature dingin yang manis dan beraroma kuat untuk menemani begadang semalam suntuk."]
        },

        tips: ["Bawa charger", "Datang di luar jam sibuk sore hari jika memerlukan suasana super tenang"],

        bestTime: [
          {
            icon: "💻",
            badge: "All Day",
            label: "Open Hours",
            value: "24 Jam",
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

        funFacts: [
          "Kafe ini memiliki koneksi internet dengan kecepatan hingga 100 Mbps khusus penunjang remote worker.",
          "Bagian luar kafe dipenuhi pohon kelapa dan tanaman hias tropis yang segar.",
          "Nakoa menyajikan pastry dan donat segar buatan sendiri setiap harinya."
        ],

        closingCTA: "Selesaikan tenggat waktu kerjaan Anda dengan suasana kopi hangat yang tenang dan produktif di Nakoa.",

        location: { lat: -7.9666, lng: 112.6326 },
      },
    ],
  },
};
