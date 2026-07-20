import type { Category } from "./types";

export const activitiesData: Record<string, Category> = {
  "nature-seeker": {
    "title": "Nature Seeker",
    "description": "Explore the breathtaking natural beauty of Malang, from towering volcanoes to stunning waterfalls.",
    "places": [
      {
        "title": "Mount Bromo",
        "tagline": "The Majestic Sunrise Over the Sea of Sand",
        "description": "The crown jewel of East Java. Witness a surreal sunrise over the Sea of Sand and the active crater, a breathtaking drive from Malang.",
        "heroImage": "/locations/nature/gunung-bromo/cover.webp",
        "basicInfo": {
          "location": "Taman Nasional Bromo Tengger Semeru, Jawa Timur",
          "hours": "Buka 24 Jam",
          "price": "Rp 29.000 (Domestic, Weekday) / Rp 34.500 (Domestic, Weekend) / Rp 220.000 (Foreign Tourist)",
          "ticketLink": "https://bookingbromo.bromotenggersemeru.org/",
          "rating": "4.8/5",
          "category": "Alam / Petualangan / Budaya"
        },
        "gallery": [
          "/locations/nature/gunung-bromo/cover.webp"
        ],
        "story": "Behind its dramatic landscape, Mount Bromo holds a deep cultural and spiritual story. For the Tenggerese people, this mountain is not just a destination, it is a sacred place tied to their beliefs and identity. The name “Bromo” comes from Brahma, the Hindu god of creation. To this day, the Tengger community continues to perform the Yadnya Kasada ritual, offering crops and prayers into the crater as a symbol of gratitude and devotion. This living tradition adds a deeper meaning to Bromo, where nature, culture, and belief come together in one unforgettable experience.",
        "keyAttractions": [
          {
            "title": "Crater",
            "desc": "The active volcanic crater of Mount Bromo, emitting thick sulfur smoke and reachable via a staircase.",
            "image": "/locations/nature/gunung-bromo/kawah.webp"
          },
          {
            "title": "Pasir Berbisik",
            "desc": "A vast 10-square-kilometer volcanic sand plain surrounding the caldera, creating whispering sand sounds when winds blow.",
            "image": "/locations/nature/gunung-bromo/pasir-berbisik.webp"
          },
          {
            "title": "Sunrise View Point",
            "desc": "The highest and most famous sunrise viewpoint overlooking the active Bromo crater, Mount Batok, and Mount Semeru.",
            "image": "/locations/nature/gunung-bromo/sunrise-view-point.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Horse Riding",
            "desc": "Rent a local pony to ride across the sea of sand from the jeep parking area to the foot of Bromo's crater stairs.",
            "difficulty": "Easy",
            "image": "/locations/nature/gunung-bromo/horse-riding.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "April hingga Oktober (Musim Kemarau) atau jam 03:00 pagi untuk sunrise.",
          "bring": [
            "Bawa jaket tebal & sarung tangan",
            "Gunakan masker & kacamata",
            "Pakai sepatu trekking yang nyaman",
            "Sediakan uang tunai pecahan kecil"
          ],
          "avoid": [
            "Jangan membuang sampah sembarangan",
            "Jangan berjalan di luar jalur pendakian",
            "Hindari mengganggu area sakral Pura Luhur Poten",
            "Jangan menyalakan api unggun sembarangan di area padang sabana"
          ],
          "insiderTips": [
            "Lakukan booking tiket online jauh-jauh hari karena kuota harian dibatasi.",
            "Sewalah jaket atau beli kopi panas dari warga lokal jika tidak kuat dingin."
          ]
        },
        "tips": [
          "Gunakan jaket tebal — suhu bisa turun hingga 5°C",
          "Pakai masker untuk abu vulkanik"
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Golden Hour",
            "label": "Early Morning",
            "value": "03:00 – 06:00 WIB",
            "color": "#EF9F27",
            "intensity": "85%"
          },
          {
            "icon": "sun",
            "badge": "Dry Season",
            "label": "Musim Kemarau",
            "value": "April – Oktober",
            "color": "#378ADD",
            "intensity": "65%"
          }
        ],
        "howToGetThere": {
          "fromMalang": "Rute Malang - Tumpang - Gubugklakah - Ngadas - Jemplang - Bromo. Sekitar 2-2.5 jam. Direkomendasikan menyewa Jeep dari Tumpang atau Malang kota.",
          "fromBatu": "Berangkat tengah malam (00:00) menggunakan travel/Jeep sewaan, bergabung dengan rute via Malang. Waktu tempuh sekitar 3 jam.",
          "fromSurabaya": "Rute Surabaya - Sidoarjo - Pasuruan - Probolinggo - Cemoro Lawang. Sekitar 3-4 jam perjalanan darat.",
          "publicTransport": "Tersedia angkutan umum (Bison) dari Terminal Bayuangga Probolinggo menuju Cemoro Lawang, namun jadwalnya sangat terbatas.",
          "recommendations": "Untuk kepraktisan, sangat disarankan menggunakan jasa Open Trip atau Private Trip Jeep dari Malang (berkisar Rp 300.000 - Rp 350.000/orang)."
        },
        "facilities": [
          "Area Parkir luas di pintu masuk dan lautan pasir (khusus Jeep/Motor trail)",
          "Toilet umum (berbayar, sediakan uang koin)",
          "Mushola di area Penanjakan dan Cemoro Lawang",
          "Warung makan dan kopi (buka sejak dini hari)"
        ],
        "foodNearby": [
          "Warung Kopi Penanjakan",
          "Cafe Bromo Permai",
          "Lava View Restaurant"
        ],
        "stayNearby": [
          "Jiwa Jawa Resort Bromo",
          "Lava View Lodge",
          "Cemara Indah Hotel"
        ],
        "contactInfo": "Website resmi booking: bookingbromo.bromotenggersemeru.org",
        "funFacts": [
          "Bromo adalah salah satu gunung berapi paling aktif di Indonesia, telah meletus lebih dari 50 kali sejak 1767.",
          "Suhu udara di Puncak Penanjakan saat kemarau bisa anjlok mendekati 0 derajat Celcius, bahkan sering muncul lapisan es tipis (embun upas) di lautan pasir.",
          "Lautan Pasir Bromo ditetapkan sebagai kawasan lindung khusus dan merupakan satu-satunya kawasan konservasi berbentuk lautan pasir di Indonesia."
        ],
        "nearbyPlaces": [
          {
            "name": "Air Terjun Madakaripura",
            "distance": "± 45 Menit (dari Cemoro Lawang)",
            "reason": "Air terjun tertinggi di Pulau Jawa dengan pesona tirai air melingkar yang spektakuler."
          },
          {
            "name": "Bukit Kingkong",
            "distance": "± 10 Menit",
            "reason": "Alternatif terbaik untuk melihat sunrise jika Penanjakan 1 terlalu padat."
          },
          {
            "name": "Desa Wisata Ngadas",
            "distance": "± 30 Menit (rute Malang)",
            "reason": "Melihat kehidupan autentik masyarakat Tengger yang harmonis di atas awan."
          }
        ],
        "closingCTA": "Rasakan sendiri magisnya berdiri di atas awan sambil menatap lanskap purba yang tak terlupakan. Kemas ransel Anda, pasang alarm pagi-pagi buta, dan siapkan diri Anda untuk terpesona oleh Gunung Bromo. Sampai jumpa di puncak sunrise!",
        "location": {
          "lat": -7.9425,
          "lng": 112.953
        }
      },
      {
        "title": "Tumpak Sewu",
        "tagline": "The Thousand Waterfalls of East Java",
        "description": "Indonesia's 'Little Niagara'. A massive, curtain-like waterfall tucked deep in the lush tropical highlands.",
        "heroImage": "/locations/nature/tumpak-sewu/cover.webp",
        "basicInfo": {
          "location": "Sidomulyo, Pronojiwo, Kabupaten Lumajang, Jawa Timur",
          "hours": "07:00 – 17:00 WIB",
          "price": "Rp 10.000 (Domestic) / Rp 20.000 (Foreign Tourist)",
          "rating": "4.7/5",
          "category": "Alam / Air Terjun"
        },
        "gallery": [
          "/locations/nature/tumpak-sewu/cover.webp"
        ],
        "story": "Tumpak Sewu, which translates to 'a thousand waterfalls' in Javanese, gets its name from the countless streams of water that flow down its semi-circular cliff. Unlike single-drop waterfalls, it forms a majestic curtain of water that plunges into a deep, misty ravine. For generations, the surrounding forests and springs have been preserved by the local community as a sacred source of life and agriculture, making it a beautiful marriage of raw volcanic terrain and pristine nature.",
        "keyAttractions": [
          {
            "title": "Waterfall",
            "desc": "The majestic semi-circular volcanic canyon where hundreds of individual waterfall streams cascade down 120 meters.",
            "image": "/locations/nature/tumpak-sewu/air-terjun.webp"
          },
          {
            "title": "Drip Cave",
            "desc": "A unique limestone cave and cascade complex where water constantly drips through mossy stalactites.",
            "image": "/locations/nature/tumpak-sewu/goa-tetes.webp"
          },
          {
            "title": "Top Panorama",
            "desc": "The upper observation deck offering a spectacular 180-degree view of the semi-circular curtain waterfall dropping into the ravine.",
            "image": "/locations/nature/tumpak-sewu/panorama-atas.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Trekking Trail",
            "desc": "Hike down the steep bamboo ladders and wet rocky cliffs to stand right at the base of the massive curtain waterfall.",
            "difficulty": "Moderate",
            "image": "/locations/nature/tumpak-sewu/jalur-trecking.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Jam 07:00 - 10:00 pagi saat sinar matahari menyinari kabut air terjun secara dramatis.",
          "bring": [
            "Bawa sandal gunung / sepatu trekking anti slip",
            "Siapkan baju ganti & kantong tahan air",
            "Gunakan jas hujan plastik"
          ],
          "avoid": [
            "Jangan berenang terlalu dekat dengan pusaran air terjun",
            "Hindari turun ke dasar lembah saat hujan lebat"
          ],
          "insiderTips": [
            "Sewa pemandu lokal jika Anda ingin menuruni tebing demi keamanan ekstra."
          ]
        },
        "tips": [
          "Gunakan sepatu trekking anti slip",
          "Jangan turun saat hujan lebat karena risiko banjir bandang"
        ],
        "bestTime": [
          {
            "icon": "🌄",
            "badge": "Best Light",
            "label": "Morning",
            "value": "06:00 – 10:00 WIB",
            "color": "#EF9F27",
            "intensity": "75%"
          },
          {
            "icon": "🌧️",
            "badge": "Rainy Season",
            "label": "Musim Hujan",
            "value": "Nov – Maret",
            "color": "#378ADD",
            "intensity": "90%"
          }
        ],
        "funFacts": [
          "Nama Tumpak Sewu diambil karena aliran air terjunnya yang sangat banyak menyerupai seribu tirai.",
          "Air terjun ini bersumber langsung dari aliran Gunung Semeru, gunung tertinggi di Pulau Jawa.",
          "Tebing batu melingkar di Tumpak Sewu terbentuk secara alami akibat aktivitas vulkanik purba."
        ],
        "closingCTA": "Saksikan langsung kemegahan tirai air seribu di dasar lembah tersembunyi. Petualangan mendebarkan menanti Anda!",
        "location": {
          "lat": -8.2307,
          "lng": 112.9167
        }
      },
      {
        "title": "Pantai 3 Warna",
        "tagline": "A Pristine Marine Conservation Oasis",
        "description": "A pristine conservation beach known for its three distinct water colors and vibrant coral reefs, accessible via a light trek.",
        "heroImage": "/locations/nature/pantai-3-warna/cover.webp",
        "basicInfo": {
          "location": "Sendang Biru, Sumbermanjing Wetan, Kabupaten Malang, Jawa Timur",
          "hours": "06:00 – 16:00 WIB",
          "price": "Rp 15.000 / person + Mandatory guide fee (Rp 150.000 per group of 10)",
          "rating": "4.6/5",
          "category": "Pantai / Konservasi"
        },
        "gallery": [
          "/locations/nature/pantai-3-warna/cover.webp"
        ],
        "story": "Pantai Tiga Warna is a pristine marine sanctuary located within the Clungup Mangrove Conservation (CMC) area. Its name is derived from the unique gradations of blue, green, and reddish-brown colors created by varying water depths and coral reef health. The beach is strictly managed with a daily visitor quota to prevent overtourism and preserve the rich marine ecosystem, making it a proud symbol of local conservation efforts.",
        "keyAttractions": [
          {
            "title": "Mangrove Forest",
            "desc": "The Clungup Mangrove Conservation forest protecting the estuary and hosting various coastal wildlife.",
            "image": "/locations/nature/pantai-3-warna/hutan-mangrove.webp"
          },
          {
            "title": "Marine Life",
            "desc": "Observe diverse coastal marine fauna, crabs, and starfish residing in the shallow tide pools.",
            "image": "/locations/nature/pantai-3-warna/sea-creature.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Canoeing",
            "desc": "Rent a canoe to paddle across the calm, sheltered waters of the three-colored bay.",
            "difficulty": "Easy",
            "image": "/locations/nature/pantai-3-warna/mendayung-kano.webp"
          },
          {
            "title": "Snorkeling",
            "desc": "Explore the vibrant coral gardens and swim with schools of tropical fish in the clear, protected waters.",
            "difficulty": "Mudah",
            "image": "/locations/nature/pantai-3-warna/snorkeling.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Matahari terik di pagi hari untuk visibilitas bawah laut terbaik saat snorkeling.",
          "bring": [
            "Peralatan snorkeling pribadi jika ada",
            "Baju renang & tabir sunya ramah lingkungan",
            "Kantong sampah ramah lingkungan"
          ],
          "avoid": [
            "Dilarang keras menyentuh atau menginjak terumbu karang",
            "Jangan meninggalkan sampah plastik apa pun di area pantai"
          ],
          "insiderTips": [
            "Lakukan reservasi kunjungan beberapa minggu sebelumnya karena tiket harian sangat dibatasi."
          ]
        },
        "tips": [
          "Reservasi dulu — jumlah pengunjung dibatasi",
          "Bawa kantong plastik untuk membawa pulang sampah Anda"
        ],
        "bestTime": [
          {
            "icon": "☀️",
            "badge": "Clear Water",
            "label": "Morning",
            "value": "07:00 – 11:00 WIB",
            "color": "#1D9E75",
            "intensity": "80%"
          },
          {
            "icon": "🌴",
            "badge": "Dry Season",
            "label": "Musim Kemarau",
            "value": "April – Oktober",
            "color": "#378ADD",
            "intensity": "70%"
          }
        ],
        "funFacts": [
          "Pantai ini memiliki aturan ketat pemeriksaan sampah bawaan sebelum masuk dan keluar kawasan pantai.",
          "Perbedaan warna air disebabkan oleh gradasi kedalaman laut dan keberadaan padang lamun di bawah air.",
          "Kawasan pantai ini dikelola langsung secara swadaya oleh masyarakat lokal yang tergabung dalam CMC."
        ],
        "closingCTA": "Jelajahi surga bawah laut tersembunyi dengan terumbu karang yang terjaga sempurna. Mari jaga kelestarian alam bersama!",
        "location": {
          "lat": -8.4444,
          "lng": 112.6789
        }
      },
      {
        "title": "Coban Pelangi",
        "tagline": "A Rainbow in the Highland Mist",
        "description": "The 'Rainbow Waterfall'. When the mist catches the morning light, it creates beautiful iridescent arches in the forest.",
        "heroImage": "/locations/nature/coban-pelangi/cover.webp",
        "basicInfo": {
          "location": "Gubugklakah, Poncokusumo, Kabupaten Malang, Jawa Timur",
          "hours": "08:00 – 17:00 WIB",
          "price": "Rp 10.000 (Weekday) / Rp 15.000 (Weekend)",
          "rating": "4.5/5",
          "category": "Alam / Air Terjun"
        },
        "gallery": [
          "/locations/nature/coban-pelangi/cover.webp"
        ],
        "story": "Coban Pelangi is situated at an elevation of 1,299 meters above sea level on the slope of Mount Semeru. It is famous for the rainbow phenomenon that frequently appears in the morning mist between 9:00 AM and noon. As sunlight passes through the high-pressure water droplets cascading down the 110-meter cliff, it splits into a vibrant rainbow arch, casting a magical atmosphere over the lush pine valley.",
        "keyAttractions": [
          {
            "title": "Waterfall",
            "desc": "The base of the 110-meter waterfall where the heavy cascade crashes down, generating refreshing cool mist.",
            "image": "/locations/nature/coban-pelangi/air-terjun.webp"
          },
          {
            "title": "Camping Ground",
            "desc": "A peaceful riverside campground surrounded by pine forests, ideal for overnight stays under the stars.",
            "image": "/locations/nature/coban-pelangi/perkemahan.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "White Water Rafting",
            "desc": "Spot the beautiful rainbow arches appearing in the waterfall's mist when morning sunlight hits the valley.",
            "difficulty": "Easy",
            "image": "/locations/nature/coban-pelangi/arung-jeram.webp"
          },
          {
            "title": "Trekking Trail",
            "desc": "Trek along the scenic forested trail alongside the flowing mountain river to reach the waterfall.",
            "difficulty": "Moderate",
            "image": "/locations/nature/coban-pelangi/jalur-trekking.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Datang pagi antara jam 09:00 - 12:00 WIB untuk menyaksikan keindahan bias pelangi secara maksimal.",
          "bring": [
            "Jaket atau pakaian hangat karena suhu dingin pegunungan",
            "Kamera tahan air",
            "Payung atau jas hujan"
          ],
          "avoid": [
            "Jangan mandi tepat di bawah air terjun utama karena tekanan air sangat deras",
            "Hindari melompati pagar pembatas tebing"
          ],
          "insiderTips": [
            "Datanglah sekitar pukul 10:00 pagi saat sinar matahari berada di sudut terbaik untuk memunculkan pelangi."
          ]
        },
        "tips": [
          "Datang pagi — pelangi hanya muncul antara pukul 09:00–12:00",
          "Bawa baju hangat"
        ],
        "bestTime": [
          {
            "icon": "🌈",
            "badge": "Rainbow Time",
            "label": "Late Morning",
            "value": "09:00 – 12:00 WIB",
            "color": "#D85A30",
            "intensity": "70%"
          },
          {
            "icon": "☀️",
            "badge": "Dry Season",
            "label": "Musim Kemarau",
            "value": "April – Oktober",
            "color": "#378ADD",
            "intensity": "60%"
          }
        ],
        "funFacts": [
          "Suhu udara di sekitar air terjun bisa mencapai 15 derajat Celcius di pagi hari.",
          "Air terjun ini merupakan bagian penting dari daerah tangkapan air Taman Nasional Bromo Tengger Semeru.",
          "Nama 'Coban' sendiri dalam bahasa Jawa berarti air terjun."
        ],
        "closingCTA": "Saksikan langsung tarian pelangi abadi di tengah kabut hutan pinus yang sunyi dan menenangkan.",
        "location": {
          "lat": -8.0193,
          "lng": 112.8234
        }
      },
      {
        "title": "Pulau Sempu",
        "tagline": "The Mystical Hidden Saltwater Lagoon",
        "description": "A remote tropical island nature reserve sheltering a stunning hidden lagoon — Segara Anakan — with crystal-clear turquoise water ringed by cliffs and dense jungle.",
        "heroImage": "/locations/nature/pulau-sempu/cover.webp",
        "basicInfo": {
          "location": "Kecamatan Sumbermanjing Wetan, Kabupaten Malang, Jawa Timur",
          "hours": "Perizinan Khusus BKSDA (Akses Terbatas)",
          "price": "Free entrance (Sendangbiru beach fee + boat rental ±Rp 150.000/boat + BKSDA permit required)",
          "rating": "4.7/5",
          "category": "Pulau / Cagar Alam"
        },
        "gallery": [
          "/locations/nature/pulau-sempu/cover.webp"
        ],
        "story": "Pulau Sempu is a strictly protected nature reserve separated from the southern coast of Malang by a narrow strait. Its greatest wonder is Segara Anakan, a secluded saltwater lagoon filled with azure waters, replenished by ocean waves breaking through a natural hole in the high cliffs. Due to its status as a nature reserve (Cagar Alam), tourist access is strictly regulated to protect endangered Javanese flora and fauna.",
        "keyAttractions": [
          {
            "title": "Tropical Rainforest",
            "desc": "The dense, undisturbed tropical rainforest sanctuary covering the island, home to wild animals.",
            "image": "/locations/nature/pulau-sempu/hutan-tropis.webp"
          },
          {
            "title": "Segara Anakan Lagoon",
            "desc": "A beautiful hidden saltwater lagoon in the middle of the island, separated from the open sea by high rock cliffs.",
            "image": "/locations/nature/pulau-sempu/segara-anakan.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Wildlife Spotting",
            "desc": "Spot endemic wildlife such as Javan langurs, eagles, and monitor lizards along the forest paths.",
            "difficulty": "Easy",
            "image": "/locations/nature/pulau-sempu/meliihat-satwa.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Musim kemarau saat jalur hutan tanah liat tidak becek berlumpur.",
          "bring": [
            "Sepatu trekking dengan grip kuat",
            "Persediaan air minum & makanan yang cukup",
            "Kantong sampah wajib bawa kembali"
          ],
          "avoid": [
            "Dilarang berkemah tanpa izin khusus BKSDA Jawa Timur",
            "Jangan merusak tanaman atau mengganggu satwa liar di hutan"
          ],
          "insiderTips": [
            "Jalur hutan menuju laguna bisa berubah menjadi lumpur setinggi lutut saat musim hujan, sehingga hindari datang di musim basah."
          ]
        },
        "tips": [
          "Izin wajib — kawasan cagar alam dilindungi",
          "Siapkan fisik untuk trekking hutan lebat"
        ],
        "bestTime": [
          {
            "icon": "🌴",
            "badge": "Dry Season",
            "label": "Musim Kemarau",
            "value": "April – Oktober",
            "color": "#1D9E75",
            "intensity": "85%"
          },
          {
            "icon": "🌅",
            "badge": "Best View",
            "label": "Early Morning",
            "value": "05:00 – 08:00 WIB",
            "color": "#EF9F27",
            "intensity": "75%"
          }
        ],
        "funFacts": [
          "Pulau Sempu dihuni oleh satwa langka seperti macan tutul Jawa dan lutung Jawa.",
          "Segara Anakan merupakan muara air asin alami yang pasang-surutnya diatur oleh ombak Samudra Hindia.",
          "Pulau ini tidak memiliki pasokan air tawar publik sama sekali, menjaga ekosistemnya tetap liar."
        ],
        "closingCTA": "Hormati cagar alam liar Indonesia. Jelajahi dengan izin resmi dan biarkan keindahannya tetap perawan.",
        "location": {
          "lat": -8.4483,
          "lng": 112.6881
        }
      },
      {
        "title": "Budug Asu",
        "tagline": "A 360° Camp View of Mount Arjuno",
        "description": "A challenging yet rewarding highland trek to a peak with sweeping 360° views of Mt. Arjuno, surrounded by dense pine forest and ideal for stargazing.",
        "heroImage": "/locations/nature/budug-asu/cover.webp",
        "basicInfo": {
          "location": "Kreweh, Gunungrejo, Singosari, Kabupaten Malang, Jawa Timur",
          "hours": "Buka 24 Jam",
          "price": "Rp 10.000 – Rp 15.000 / person",
          "rating": "4.4/5",
          "category": "Bukit / Pendakian / Camping"
        },
        "gallery": [
          "/locations/nature/budug-asu/cover.webp"
        ],
        "story": "Budug Asu is a scenic hilltop located at the foot of Mount Arjuno, Singosari. Historically a tracking route for local hunters, it has developed into a popular weekend getaway for young hikers, trail runners, and off-road motor enthusiasts. The main draw is the wooden viewing deck shaped like a wolf's head, which frames the towering peak of Mount Arjuno directly behind it.",
        "keyAttractions": [
          {
            "title": "Summit Viewpoint",
            "desc": "The viewing deck summit at 1,400m altitude, offering sweeping views of Mount Arjuno's ridges.",
            "image": "/locations/nature/budug-asu/puncak.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Camping",
            "desc": "Set up a tent at the hilltop campsite to enjoy panoramic sunrise views and chilly mountain temperatures.",
            "difficulty": "Sedang",
            "image": "/locations/nature/budug-asu/camping.webp"
          },
          {
            "title": "Canyoning",
            "desc": "Ride a modified 4x4 vehicle or dirt bike up the steep, rocky off-road trails to the summit.",
            "difficulty": "Moderate",
            "image": "/locations/nature/budug-asu/canyoning.webp"
          },
          {
            "title": "Rock Climbing",
            "desc": "Set up a tent at the hilltop campsite to enjoy panoramic sunrise views and chilly mountain temperatures.",
            "difficulty": "Moderate",
            "image": "/locations/nature/budug-asu/rock-climbing.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Malam hari yang cerah saat kemarau untuk menikmati pemandangan gugusan bintang Bima Sakti (Milky Way).",
          "bring": [
            "Peralatan camping tebal jika ingin menginap",
            "Senter / headlamp",
            "Jaket penahan angin"
          ],
          "avoid": [
            "Jangan menyalakan api unggun dekat tenda saat angin kencang",
            "Hindari mendaki menggunakan motor matic biasa karena tanjakan sangat terjal"
          ],
          "insiderTips": [
            "Jalur pendakian via kebun teh Wonosari menawarkan pemandangan yang lebih santai dan sejuk."
          ]
        },
        "tips": [
          "Gunakan kendaraan kuat — medan terjal",
          "Bawa jaket windbreaker tebal"
        ],
        "bestTime": [
          {
            "icon": "🌅",
            "badge": "Golden Hour",
            "label": "Sunrise / Sunset",
            "value": "05:00 & 17:00 WIB",
            "color": "#EF9F27",
            "intensity": "90%"
          },
          {
            "icon": "🌙",
            "badge": "Stargazing",
            "label": "Malam Cerah",
            "value": "19:00 – 23:00 WIB",
            "color": "#534AB7",
            "intensity": "65%"
          }
        ],
        "funFacts": [
          "Nama 'Budug Asu' berasal dari bahasa lokal karena dahulu bukit ini sering dihuni anjing liar.",
          "Kawasan ini merupakan salah satu pintu masuk alternatif tidak resmi bagi pendaki Gunung Arjuno.",
          "Puncak bukit ini berada di ketinggian sekitar 1.400 meter di atas permukaan laut."
        ],
        "closingCTA": "Nyalakan jiwa petualang Anda, nikmati malam bertabur bintang di puncak bukit di kaki Gunung Arjuno.",
        "location": {
          "lat": -7.8078,
          "lng": 112.7089
        }
      },
      {
        "title": "Wonosari Tea Plantation",
        "tagline": "Rolling green hills of tea leaves on the slopes of Mt",
        "description": "Rolling green hills of tea leaves on the slopes of Mt. Arjuno. Breath clean air and enjoy sweeping panoramic views from Bukit Kuneer.",
        "heroImage": "/locations/nature/wonosari-tea-plantation/cover.webp",
        "basicInfo": {
          "location": "Wonosari Tea Plantation, Malang, Jawa Timur",
          "hours": "08:00 WIB - 17:00 WIB",
          "price": "Rp 15.000 (Weekday) / Rp 20.000 (Weekend)",
          "rating": "4.5/5",
          "category": "Nature Seeker"
        },
        "gallery": [
          "/locations/nature/wonosari-tea-plantation/cover.webp"
        ],
        "story": "Established in 1910 by a Dutch colonial company, Wonosari Tea Plantation sits beautifully on the slopes of Mount Arjuno. It offers a cool, refreshing climate and insight into traditional tea processing. Visitors can explore rolling green hills and witness a century-old heritage of East Java's tea industry.",
        "keyAttractions": [
          {
            "title": "Tea Plantation",
            "desc": "Scenic walking paths weaving through vast, rolling green tea bushes at the foothills of Mount Arjuno.",
            "image": "/locations/nature/wonosari-tea-plantation/kebun-teh.webp"
          },
          {
            "title": "Tea Factory",
            "desc": "The historic processing facility built in 1910, where tea leaves are withered, rolled, and sorted.",
            "image": "/locations/nature/wonosari-tea-plantation/pabrik-teh.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Atv",
            "desc": "Drive an all-terrain vehicle along dedicated dirt paths looping through the rolling tea fields.",
            "difficulty": "Easy",
            "image": "/locations/nature/wonosari-tea-plantation/atv.webp"
          },
          {
            "title": "Tea Picking & Processing",
            "desc": "Learn how to harvest fresh tea leaves from local farmers and see the manufacturing process inside the factory.",
            "difficulty": "Easy",
            "image": "/locations/nature/wonosari-tea-plantation/petik-dan-olah-teh.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Dry season (May to September) for the best weather.",
          "bring": [
            "Comfortable walking shoes",
            "Sunscreen & sunglasses",
            "Water bottle"
          ],
          "avoid": [
            "Littering in the area",
            "Damaging structures or display items"
          ],
          "insiderTips": [
            "Arrive early to beat the crowds and enjoy the best lighting for photos."
          ]
        },
        "tips": [
          "Bring cash as some local vendors and parking attendants do not accept card payments."
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Golden Hour",
            "label": "Early Morning",
            "value": "06:00 – 09:00 WIB",
            "color": "#EF9F27",
            "intensity": "90%"
          },
          {
            "icon": "calendar",
            "badge": "Dry Season",
            "label": "May – September",
            "value": "Best plantation conditions",
            "color": "#378ADD",
            "intensity": "70%"
          }
        ],
        "location": {
          "lat": -7.8648,
          "lng": 112.5166
        },
        "funFacts": [
          "Wonosari Tea Plantation was established in 1910 by the Dutch colonial company NV Cultumaatschappij Wonosarie, making it over a century old.",
          "The plantation sits at 950 meters above sea level on the cool slopes of Mount Arjuno, giving the tea its distinct fresh and aromatic flavor.",
          "Visitors can join a full tea journey — from hand-picking fresh leaves in the field to watching the leaves processed inside the historic colonial factory."
        ]
      },
      {
        "title": "Coban Rondo Waterfall",
        "tagline": "A majestic 84-meter waterfall surrounded by lush pine forests, featuring a famous garden labyrinth",
        "description": "A majestic 84-meter waterfall surrounded by lush pine forests, featuring a famous garden labyrinth.",
        "heroImage": "/locations/nature/coban-rondo/cover.webp",
        "basicInfo": {
          "location": "Coban Rondo Waterfall, Malang, Jawa Timur",
          "hours": "08:00 WIB - 17:00 WIB",
          "price": "Rp 35.000 – Rp 40.000 (includes access to several park attractions)",
          "rating": "4.5/5",
          "category": "Nature Seeker"
        },
        "gallery": [
          "/locations/nature/coban-rondo/cover.webp"
        ],
        "story": "Legend has it that Coban Rondo ('Widow's Waterfall') was named after Dewi Anjarwati, who was hidden here after her husband died in a duel. Plunging 84 meters down a forested cliff, it is one of Malang's most famous and accessible natural wonders. The surrounding pine forest adds a mystical and tranquil atmosphere.",
        "keyAttractions": [
          {
            "title": "Labirin",
            "desc": "A giant, challenging green hedge maze located in the main recreation area.",
            "image": "/locations/nature/coban-rondo/labirin.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Atv Adventure",
            "desc": "Rent an ATV to ride along the designated muddy forest trails under the shade of tall pine trees.",
            "difficulty": "Easy",
            "image": "/locations/nature/coban-rondo/atv-adventure.webp"
          },
          {
            "title": "Flying Fox",
            "desc": "Glide down a high-wire zipline suspended over the forest floor for an exciting adrenaline rush.",
            "difficulty": "Easy",
            "image": "/locations/nature/coban-rondo/flying-fox.webp"
          },
          {
            "title": "Rafting",
            "desc": "Enjoy a fun river rafting or tubing journey down the cool mountain stream.",
            "difficulty": "Easy",
            "image": "/locations/nature/coban-rondo/rafting.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Dry season (May to September) for the best weather.",
          "bring": [
            "Comfortable walking shoes",
            "Sunscreen & sunglasses",
            "Water bottle"
          ],
          "avoid": [
            "Littering in the area",
            "Damaging structures or display items"
          ],
          "insiderTips": [
            "Arrive early to beat the crowds and enjoy the best lighting for photos."
          ]
        },
        "tips": [
          "Bring cash as some local vendors and parking attendants do not accept card payments."
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Best Light",
            "label": "Morning",
            "value": "07:00 – 10:00 WIB",
            "color": "#EF9F27",
            "intensity": "85%"
          },
          {
            "icon": "calendar",
            "badge": "Dry Season",
            "label": "May – October",
            "value": "Clearer skies & trails",
            "color": "#378ADD",
            "intensity": "65%"
          }
        ],
        "location": {
          "lat": -7.8291,
          "lng": 112.4485
        },
        "funFacts": [
          "The name Coban Rondo means 'Widow's Waterfall' in Javanese, stemming from a local legend about a princess named Dewi Anjarwati who wept here after losing her husband.",
          "The waterfall drops 84 meters into a rocky ravine and is fed by two rivers — the Konto River and the Amprong River — that merge at the top.",
          "The giant green hedge maze (labyrinth) inside the park was planted over 20 years ago and has grown into one of the largest natural mazes in East Java."
        ]
      },
      {
        "title": "Paralayang Batu (omah Kayu)",
        "tagline": "High above the clouds",
        "description": "High above the clouds. Stunning treehouse stays and paragliding launch spots overlooking the twinkling lights of Batu city.",
        "heroImage": "/locations/nature/paralayang-batu/cover.webp",
        "basicInfo": {
          "location": "Paralayang Batu (omah Kayu), Malang, Jawa Timur",
          "hours": "08:00 WIB - 17:00 WIB",
          "price": "Rp 5.000 – Rp 15.000 (area entrance) / Rp 400.000 – Rp 500.000 (tandem paragliding)",
          "rating": "4.5/5",
          "category": "Nature Seeker"
        },
        "gallery": [
          "/locations/nature/paralayang-batu/cover.webp"
        ],
        "story": "Located on Mount Banyak, Paralayang Batu opened around the year 2000 as a premier paragliding launch site. It gained massive popularity for its breathtaking sunset views and sparkling night cityscapes of Batu. The addition of Omah Kayu's rustic treehouses transformed it into an iconic romantic and adventurous getaway.",
        "keyAttractions": [
          {
            "title": "Paragliding Zone",
            "desc": "The panoramic cliff summit at Banyak Hill, serving as the takeoff site for paragliders.",
            "image": "/locations/nature/paralayang-batu/area-paralayang.webp"
          },
          {
            "title": "Citilight",
            "desc": "Enjoy the dazzling view of Batu city lights shining below the summit in the evening.",
            "image": "/locations/nature/paralayang-batu/citilight.webp"
          },
          {
            "title": "Omah Kayu",
            "desc": "Unique rustic wooden cabins built directly onto pine tree trunks hanging over the cliffside.",
            "image": "/locations/nature/paralayang-batu/omah-kayu.webp"
          },
          {
            "title": "Photo Spot",
            "desc": "Discover the breathtaking sights at Spot Foto, one of the key landmarks in the destination.",
            "image": "/locations/nature/paralayang-batu/spot-foto.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Paragliding Tandem Flight",
            "desc": "Soar above the lush pine forests and Batu city skyline with professional tandem paragliding instructors.",
            "difficulty": "Easy",
            "image": "/locations/nature/paralayang-batu/area-paralayang.webp"
          },
          {
            "title": "Sunset & City Lights Photography",
            "desc": "Capture dramatic sunset panoramas over Mount Arjuno and the sparkling evening lights of Batu city.",
            "difficulty": "Easy",
            "image": "/locations/nature/paralayang-batu/citilight.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Dry season (May to September) for the best weather.",
          "bring": [
            "Comfortable walking shoes",
            "Sunscreen & sunglasses",
            "Water bottle"
          ],
          "avoid": [
            "Littering in the area",
            "Damaging structures or display items"
          ],
          "insiderTips": [
            "Arrive early to beat the crowds and enjoy the best lighting for photos."
          ]
        },
        "tips": [
          "Bring cash as some local vendors and parking attendants do not accept card payments."
        ],
        "bestTime": [
          {
            "icon": "sun",
            "badge": "Thermal Winds",
            "label": "Mid Morning",
            "value": "09:00 – 13:00 WIB",
            "color": "#A3B18A",
            "intensity": "90%"
          },
          {
            "icon": "calendar",
            "badge": "Dry Season",
            "label": "May – September",
            "value": "Stable thermals & clear skies",
            "color": "#378ADD",
            "intensity": "70%"
          }
        ],
        "location": {
          "lat": -7.85494,
          "lng": 112.49728
        },
        "funFacts": [
          "Mount Banyak, where the launch site is located, is one of the highest points in Batu, offering a nearly 360-degree view of the Malang highland basin.",
          "Omah Kayu treehouses were initially built for environmental education to encourage visitors to respect and preserve the local pine forests.",
          "Paragliding here is weather-dependent and typically runs best between 09:00 and 14:00 WIB when thermal winds are most stable."
        ]
      },
      {
        "title": "Selecta Park",
        "tagline": "A historic flower garden and recreational park in the highlands",
        "description": "A historic flower garden and recreational park in the highlands. Iconic for its vibrant flower beds and cool climate.",
        "heroImage": "/locations/nature/selecta/cover.webp",
        "basicInfo": {
          "location": "Selecta Park, Malang, Jawa Timur",
          "hours": "08:00 WIB - 17:00 WIB",
          "price": "Rp 50.000 / person",
          "rating": "4.5/5",
          "category": "Nature Seeker"
        },
        "gallery": [
          "/locations/nature/selecta/cover.webp"
        ],
        "story": "Built in 1928 by a Dutchman named Ruyter de Wildt, Selecta was originally an exclusive retreat for colonial elites. Today, it remains a beloved historic park known for its meticulously landscaped flower gardens and cool mountain spring pools. It stands as a timeless piece of Batu's heritage.",
        "keyAttractions": [
          {
            "title": "Swimming Pool",
            "desc": "A historic public pool built in 1930, filled with refreshing natural mountain spring water.",
            "image": "/locations/nature/selecta/kolam-renang.webp"
          },
          {
            "title": "Flower Garden",
            "desc": "A massive, beautifully landscaped valley featuring vibrant, well-manicured flower beds.",
            "image": "/locations/nature/selecta/taman-bunga.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Paddle Boat",
            "desc": "Ride pedal boats across the scenic artificial lake inside the recreational park.",
            "difficulty": "Easy",
            "image": "/locations/nature/selecta/paddle-boat.webp"
          },
          {
            "title": "Sky Bike",
            "desc": "Pedal an elevated sky-bike along a monorail track running high above the colorful flower gardens.",
            "difficulty": "Easy",
            "image": "/locations/nature/selecta/sky-bike.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Dry season (May to September) for the best weather.",
          "bring": [
            "Comfortable walking shoes",
            "Sunscreen & sunglasses",
            "Water bottle"
          ],
          "avoid": [
            "Littering in the area",
            "Damaging structures or display items"
          ],
          "insiderTips": [
            "Arrive early to beat the crowds and enjoy the best lighting for photos."
          ]
        },
        "tips": [
          "Bring cash as some local vendors and parking attendants do not accept card payments."
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Best Light",
            "label": "Morning",
            "value": "08:00 – 11:00 WIB",
            "color": "#EF9F27",
            "intensity": "85%"
          },
          {
            "icon": "calendar",
            "badge": "Weekday",
            "label": "Mon – Fri",
            "value": "Less crowded",
            "color": "#A3B18A",
            "intensity": "60%"
          }
        ],
        "location": {
          "lat": -7.82322,
          "lng": 112.52793
        },
        "funFacts": [
          "Selecta was built in 1928 by Dutch settler Ruyter de Wildt, originally as a private highland resort for colonial European elites who sought cool mountain air.",
          "The spring-fed swimming pool, filled entirely with natural mountain water at 18°C, has been open to the public since 1930 and is still operating today.",
          "Selecta's flower garden is replanted seasonally with over 30 different varieties of temperate and tropical flowers, making every visit visually unique."
        ]
      },
      {
        "title": "Coban Rais",
        "tagline": "A beautiful waterfall combined with 'Stone Flower Garden' for incredible photo opportunities high in the Batu hills",
        "description": "A beautiful waterfall combined with 'Stone Flower Garden' for incredible photo opportunities high in the Batu hills.",
        "heroImage": "/locations/nature/coban-rais/cover.webp",
        "basicInfo": {
          "location": "Coban Rais, Malang, Jawa Timur",
          "hours": "08:00 WIB - 17:00 WIB",
          "price": "Rp 10.000 – Rp 12.500 (park entrance) / +Rp 25.000 (Batu Flower Garden)",
          "rating": "4.5/5",
          "category": "Nature Seeker"
        },
        "gallery": [
          "/locations/nature/coban-rais/cover.webp"
        ],
        "story": "Formerly known as Coban Sabrangan, Coban Rais is a beautiful 20-meter waterfall hidden deep in the Batu hills. It recently surged in popularity with the addition of the Batu Flower Garden, which offers creative photo spots overlooking the lush valleys. It perfectly blends a nature trek with modern photogenic attractions.",
        "keyAttractions": [
          {
            "title": "Rock Flower Garden",
            "desc": "A popular photogenic garden featuring flower beds, swings, and viewing decks.",
            "image": "/locations/nature/coban-rais/batu-flower-garden.webp"
          },
          {
            "title": "Flower Garden",
            "desc": "A popular photogenic garden featuring flower beds, swings, and viewing decks.",
            "image": "/locations/nature/coban-rais/taman-bunga.webp"
          },
          {
            "title": "Waterfall",
            "desc": "A serene 20-meter waterfall nestled deep in a quiet, rocky forest valley.",
            "image": "/locations/nature/coban-rais/waterfall.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Camping Area",
            "desc": "Enjoy the thrill of Area Camping surrounded by the beautiful natural landscapes of this scenic spot.",
            "difficulty": "Easy",
            "image": "/locations/nature/coban-rais/area-camping.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Dry season (May to September) for the best weather.",
          "bring": [
            "Comfortable walking shoes",
            "Sunscreen & sunglasses",
            "Water bottle"
          ],
          "avoid": [
            "Littering in the area",
            "Damaging structures or display items"
          ],
          "insiderTips": [
            "Arrive early to beat the crowds and enjoy the best lighting for photos."
          ]
        },
        "tips": [
          "Bring cash as some local vendors and parking attendants do not accept card payments."
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Best Light",
            "label": "Morning",
            "value": "07:30 – 10:30 WIB",
            "color": "#EF9F27",
            "intensity": "85%"
          },
          {
            "icon": "calendar",
            "badge": "Dry Season",
            "label": "May – October",
            "value": "Clear paths & waterfalls",
            "color": "#378ADD",
            "intensity": "65%"
          }
        ],
        "location": {
          "lat": -7.8745,
          "lng": 112.4816
        },
        "funFacts": [
          "Coban Rais is known locally as Coban Sabrangan, meaning 'the waterfall you cross to reach', because visitors must trek across a suspension bridge to access the main falls.",
          "The Batu Flower Garden added in 2018 features over 500 varieties of highland flowers and boasts the longest pedestrian suspension bridge in Batu City at 120 meters.",
          "The surrounding pine forest around Coban Rais is a protected watershed area managed by Perhutani, the Indonesian state forestry company, as part of the Songgoriti Reserve."
        ]
      }
    ]
  },
  "fun-entertainment": {
    "title": "Fun & Entertainment",
    "description": "Enjoy Southeast Asia's world-class theme parks, vintage transport museums, and colorful evening carnivals in Batu.",
    "places": [
      {
        "title": "Jatim Park 1",
        "tagline": "The Premier Science & Thrills Family Theme Park",
        "description": "A high-energy cultural theme park combining Indonesian science and heritage with massive amusement rides.",
        "heroImage": "/locations/fun/jatim-park-1/cover.webp",
        "basicInfo": {
          "location": "Jl. Kartika No. 2, Sisir, Kecamatan Batu, Kota Batu, Jawa Timur",
          "hours": "08:30 – 16:30 WIB",
          "price": "Rp 115.000 – Rp 125.000 (JP1 + Museum Tubuh combo) / Rp 150.000 – Rp 170.000 (JP1 + Museum Angkut combo)",
          "rating": "4.6/5",
          "category": "Amusement Park / Educational Site"
        },
        "gallery": [
          "/locations/fun/jatim-park-1/cover.webp"
        ],
        "story": "Jawa Timur Park 1 is the pioneer of modern tourism in Batu City. Combining theme park thrills with national culture, it features a massive cultural gallery that displays traditional houses, costumes, and musical instruments from all 34 provinces of Indonesia. In addition, its science center and outdoor waterpark make it a beloved educational hub for school trips and families.",
        "keyAttractions": [
          {
            "title": "Cultural Gallery",
            "desc": "A grand exhibition gallery displaying traditional houses, ethnic costumes, and musical instruments from all across Indonesia.",
            "image": "/locations/fun/jatim-park-1/galeri-budaya.webp"
          },
          {
            "title": "Body Museum",
            "desc": "A massive six-story interactive museum shaped like a human body where visitors can walk through organs to learn anatomy.",
            "image": "/locations/fun/jatim-park-1/museum-tubuh.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Swimming Pool",
            "desc": "Splash and slide in the refreshing outdoor waterpark featuring giant tipping buckets and spiral water slides.",
            "difficulty": "Easy",
            "image": "/locations/fun/jatim-park-1/kolam-renang.webp"
          },
          {
            "title": "Amusement Rides",
            "desc": "Experience adrenaline-pumping outdoor rides such as the roller coaster, flying tornado, and spinning pendulum.",
            "difficulty": "Easy",
            "image": "/locations/fun/jatim-park-1/wahana-permainan.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Visit during weekdays to avoid extremely long queues for the rides.",
          "bring": [
            "Swimwear for the waterpark",
            "Camera for photos in the cultural gallery",
            "Sun hat and sunglasses"
          ],
          "avoid": [
            "Do not bring heavy outside food into the park grounds",
            "Do not ignore safety instructions on extreme amusement rides"
          ],
          "insiderTips": [
            "Buying a combo pass (Jatim Park 1 + Body Museum) is much cheaper than buying individual tickets."
          ]
        },
        "tips": [
          "Arrive early in the morning",
          "Bring a change of clothes for the waterpark zone"
        ],
        "bestTime": [
          {
            "icon": "☀️",
            "badge": "Peak Hours",
            "label": "Daytime",
            "value": "09:00 – 17:00 WIB",
            "color": "#EF9F27",
            "intensity": "80%"
          },
          {
            "icon": "📅",
            "badge": "Less Crowd",
            "label": "Weekday",
            "value": "Senin – Jumat",
            "color": "#1D9E75",
            "intensity": "55%"
          }
        ],
        "funFacts": [
          "Jatim Park 1 is a pioneer of large-scale educational theme parks in East Java.",
          "The ethnic gallery houses genuine traditional costumes collected directly from their regions of origin.",
          "The waterpark is designed for all ages with lifesavers actively monitoring the pool areas."
        ],
        "closingCTA": "Bring your whole family to learn about Indonesian heritage and experience the thrills of science and rides!",
        "location": {
          "lat": -7.8841,
          "lng": 112.524
        }
      },
      {
        "title": "Museum Angkut",
        "tagline": "A Journey Through Cinematic Transport History",
        "description": "Southeast Asia's first world-class transportation museum. Explore over 300 vintage vehicles through cinematic global zones.",
        "heroImage": "/locations/fun/museum-angkut/cover.webp",
        "basicInfo": {
          "location": "Jl. Terusan Sultan Agung No. 2, Ngaglik, Kota Batu, Jawa Timur",
          "hours": "12:00 – 20:00 WIB",
          "price": "Rp 110.000 – Rp 120.000 / person (weekday / weekend)",
          "rating": "4.8/5",
          "category": "Transportation Museum / Interactive Arts"
        },
        "gallery": [
          "/locations/fun/museum-angkut/cover.webp"
        ],
        "story": "Museum Angkut is Southeast Asia's first transport-themed museum. Stretching over 3.8 hectares, the museum tells the history of global transportation, from traditional horse-drawn carriages to state-of-the-art electric vehicles and historic aircraft. The museum is renowned for its immersive movie-set zones like the European Walk, Buckingham Palace, and Gangster Town, which regularly host Broadway-style parade shows.",
        "keyAttractions": [
          {
            "title": "Gangster Town",
            "desc": "A highly detailed outdoor movie-set zone recreating the street atmosphere of Chicago in the 1920s classic mobster era.",
            "image": "/locations/fun/museum-angkut/gangster-town.webp"
          },
          {
            "title": "Koleksi Kendaraan",
            "desc": "A collection of historic presidential cars, vintage European carriages, and classic American muscle cars.",
            "image": "/locations/fun/museum-angkut/koleksi-kendaraan.webp"
          },
          {
            "title": "Runway 27",
            "desc": "The rooftop zone displaying a genuine Boeing 737 aircraft where visitors can enter the cockpit.",
            "image": "/locations/fun/museum-angkut/runway-27.webp"
          },
          {
            "title": "Zona Hollywood",
            "desc": "A cinematic theme zone featuring famous Hollywood characters, movie memorabilia, and classic vehicles.",
            "image": "/locations/fun/museum-angkut/zona-hollywood.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Vehicle Collection Tour",
            "desc": "Explore over 300 vintage vehicles arranged in cinematic global zones, from horse carriages to a real Boeing 737.",
            "difficulty": "Easy",
            "image": "/locations/fun/museum-angkut/koleksi-kendaraan.webp"
          },
          {
            "title": "Broadway Show & Zone Walk",
            "desc": "Stroll through the Gangster Town, Hollywood, and European Walk zones and watch the spectacular Broadway parade show.",
            "difficulty": "Easy",
            "image": "/locations/fun/museum-angkut/gangster-town.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Around 16:00 WIB when the Broadway-style carnival show starts on the main street.",
          "bring": [
            "Fully charged camera or smartphone",
            "Comfortable walking shoes as the museum covers 3.8 hectares",
            "E-money for transactions at the floating market"
          ],
          "avoid": [
            "Avoid using camera flash close to vehicle information panels",
            "Climbing onto or entering vehicles on exhibition without permission is strictly prohibited"
          ],
          "insiderTips": [
            "The Broadway Show in Gangster Town is a must-watch and starts around 16:30 WIB daily."
          ]
        },
        "tips": [
          "Arrive in the afternoon",
          "Bring your best camera for the thematic movie-set zones"
        ],
        "bestTime": [
          {
            "icon": "🌆",
            "badge": "Best Lighting",
            "label": "Afternoon",
            "value": "13:00 – 18:00 WIB",
            "color": "#D85A30",
            "intensity": "70%"
          },
          {
            "icon": "📅",
            "badge": "Less Crowd",
            "label": "Weekday",
            "value": "Senin – Jumat",
            "color": "#1D9E75",
            "intensity": "50%"
          }
        ],
        "funFacts": [
          "It is the first transportation-themed museum in Southeast Asia, covering over 3.8 hectares.",
          "The museum features a floating market zone where visitors can buy traditional snacks from boats.",
          "Many vintage cars in the presidential collection are still in working condition."
        ],
        "closingCTA": "Embark on a cinematic journey through global transport history and watch spectacular broadway street shows!",
        "location": {
          "lat": -7.8789,
          "lng": 112.5195
        }
      },
      {
        "title": "Jatim Park 2 (secret Zoo)",
        "tagline": "A stunning, modern zoo experience that prioritizes conservation and education in a world-class facility",
        "description": "A stunning, modern zoo experience that prioritizes conservation and education in a world-class facility.",
        "heroImage": "/locations/fun/jatim-park-2/cover.webp",
        "basicInfo": {
          "location": "Jatim Park 2 (secret Zoo), Malang, Jawa Timur",
          "hours": "09:30 – 17:30 WIB",
          "price": "From Rp 125.000 (includes Museum Satwa) / Combo packages available",
          "rating": "4.5/5",
          "category": "Modern Zoo / Natural History Museum"
        },
        "gallery": [
          "/locations/fun/jatim-park-2/cover.webp"
        ],
        "story": "Opened in 2010, Jatim Park 2 revolutionized the traditional zoo concept by focusing strongly on interactive education and conservation. It houses the Batu Secret Zoo and Museum Satwa, featuring innovative animal enclosures and grand prehistoric dioramas. It is widely regarded as one of the most modern and well-maintained zoos in Southeast Asia.",
        "keyAttractions": [
          {
            "title": "Eco Green Park",
            "desc": "Explore the amazing Eco Green Park, one of the key family-friendly highlights of the park.",
            "image": "/locations/fun/jatim-park-2/eco-green-park.webp"
          },
          {
            "title": "Wildlife Museum",
            "desc": "A grand dome building housing life-size wildlife dioramas, prehistoric fossil skeletons, and massive insectariums.",
            "image": "/locations/fun/jatim-park-2/museum-satwa.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Jungle Adventure",
            "desc": "Enjoy the exciting Jungle Adventure activity, perfect for family fun and group entertainment.",
            "difficulty": "Easy",
            "image": "/locations/fun/jatim-park-2/jungle-adventure.webp"
          },
          {
            "title": "Animal Watching",
            "desc": "Enjoy the exciting Melihat Hewan activity, perfect for family fun and group entertainment.",
            "difficulty": "Easy",
            "image": "/locations/fun/jatim-park-2/melihat-hewan.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Morning at opening time when animals are most active and temperatures are cool.",
          "bring": [
            "Sunscreen and umbrella",
            "Stroller for young children",
            "Camera with a zoom lens"
          ],
          "avoid": [
            "Do not feed animals with outside food or throw objects into enclosures",
            "Do not tap on glass windows of animal habitats"
          ],
          "insiderTips": [
            "You can rent electric e-bikes near the entrance to explore the massive zoo without walking."
          ]
        },
        "tips": [
          "Rent an e-bike if traveling with children or elderly family members",
          "Watch the feeding schedule for tigers and penguins"
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Animal Feeding",
            "label": "Morning",
            "value": "09:30 – 12:00 WIB",
            "color": "#A3B18A",
            "intensity": "85%"
          },
          {
            "icon": "calendar",
            "badge": "Weekday",
            "label": "Mon – Fri",
            "value": "Shorter queues & cooler air",
            "color": "#378ADD",
            "intensity": "60%"
          }
        ],
        "location": {
          "lat": -7.888,
          "lng": 112.5296
        },
        "funFacts": [
          "Batu Secret Zoo is consistently ranked as one of the best and cleanest modern zoos in Asia.",
          "Museum Satwa contains a giant replica of a prehistoric T-Rex skeleton and mammoth fossils.",
          "The zoo features a unique water park and custom-designed animal-shaped boats to sail around the central primate island."
        ],
        "closingCTA": "Explore a world-class modern zoo and marvel at wildlife diversity from all over the globe!"
      },
      {
        "title": "Jatim Park 3 (dino Park)",
        "tagline": "Jurassic world comes to Batu",
        "description": "Jurassic world comes to Batu. Interactive dinosaur museums and high-tech amusement zones for an unforgettable family day.",
        "heroImage": "/locations/fun/jatim-park-3/cover.webp",
        "basicInfo": {
          "location": "Jatim Park 3 (dino Park), Malang, Jawa Timur",
          "hours": "11:00 – 20:00 WIB",
          "price": "Rp 100.000 – Rp 190.000 (depending on zone & day type) / Combo packages available",
          "rating": "4.5/5",
          "category": "Dinosaur Theme Park / Wax Museum"
        },
        "gallery": [
          "/locations/fun/jatim-park-3/cover.webp"
        ],
        "story": "Launched in 2017, Jatim Park 3 brings a futuristic and prehistoric entertainment experience to Batu. Its centerpiece, Dino Park, features life-size animatronic dinosaurs and immersive geological history exhibits. The complex also houses high-tech virtual reality arenas and the famous Legend Star wax museum.",
        "keyAttractions": [
          {
            "title": "Dino Park",
            "desc": "A massive prehistoric theme zone featuring life-size animatronic dinosaurs, interactive displays, and dinosaur skeleton exhibits.",
            "image": "/locations/fun/jatim-park-3/dino-park.webp"
          },
          {
            "title": "Fun Tech Plaza",
            "desc": "Explore the amazing Fun Tech Plaza, one of the key family-friendly highlights of the park.",
            "image": "/locations/fun/jatim-park-3/fun-tech-plaza.webp"
          },
          {
            "title": "Ice Age Zone",
            "desc": "Explore the amazing Ice Age, one of the key family-friendly highlights of the park.",
            "image": "/locations/fun/jatim-park-3/ice-age.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Amusement Rides",
            "desc": "Enjoy the exciting Wahana Permainan activity, perfect for family fun and group entertainment.",
            "difficulty": "Easy",
            "image": "/locations/fun/jatim-park-3/wahana-permainan.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Late afternoon when the outdoor lighting highlights the dinosaur models beautifully.",
          "bring": [
            "Camera",
            "Comfortable walking shoes"
          ],
          "avoid": [
            "Do not climb onto the dinosaur animatronics",
            "Do not touch the wax figures in the Legend Star museum"
          ],
          "insiderTips": [
            "The Dino Action 5D theater is included in the ticket and offers an amazing interactive experience."
          ]
        },
        "tips": [
          "Buy combo tickets if you plan to visit both Dino Park and the Legend Star",
          "Watch the dinosaur parade show schedules"
        ],
        "bestTime": [
          {
            "icon": "sun",
            "badge": "Best Lighting",
            "label": "Late Afternoon",
            "value": "15:00 – 18:00 WIB",
            "color": "#EF9F27",
            "intensity": "80%"
          },
          {
            "icon": "calendar",
            "badge": "Weekday",
            "label": "Mon – Fri",
            "value": "Avoid weekend crowd peaks",
            "color": "#378ADD",
            "intensity": "60%"
          }
        ],
        "location": {
          "lat": -7.8969,
          "lng": 112.5532
        },
        "funFacts": [
          "The animatronic dinosaurs in Dino Park are built to scale and move dynamically with authentic sound effects.",
          "The Legend Star wax figures are crafted by professional artists with high-fidelity details.",
          "The park's signature '5 Eras of Dinosaurs' ride takes visitors on a large train through highly realistic animatronic dinosaur eras."
        ],
        "closingCTA": "Travel back in time to the age of dinosaurs and stand next to world icons at Jatim Park 3!"
      },
      {
        "title": "Batu Night Spectacular",
        "tagline": "The city’s evening carnival",
        "description": "The city’s evening carnival. Enjoy neon light gardens, family rides, and night markets in the cool mountain air.",
        "heroImage": "/locations/fun/batu-night-spectacular/cover.webp",
        "basicInfo": {
          "location": "Batu Night Spectacular, Malang, Jawa Timur",
          "hours": "15:00 – 23:00 WIB",
          "price": "Rp 35.000 (Weekday) / Rp 40.000 (Weekend) entrance / Rp 110.000 (Weekday) / Rp 120.000 (Weekend) all-ride pass",
          "rating": "4.5/5",
          "category": "Night Amusement Park / Light Show"
        },
        "gallery": [
          "/locations/fun/batu-night-spectacular/cover.webp"
        ],
        "story": "Opening its doors in 2008, Batu Night Spectacular (BNS) was the first dedicated night amusement park in the region. It revived Batu's evening economy by offering a vibrant mix of carnival rides, a spectacular lantern garden, and lively night markets. It remains a staple for families wanting to enjoy the cool highland nights.",
        "keyAttractions": [
          {
            "title": "Lantern Garden",
            "desc": "A romantic evening garden filled with thousands of glowing, colorful Chinese silk lanterns in various artistic shapes.",
            "image": "/locations/fun/batu-night-spectacular/lampion-garden.webp"
          },
          {
            "title": "Trick Art Gallery",
            "desc": "Explore the amazing Trick Art Gallery, one of the key family-friendly highlights of the park.",
            "image": "/locations/fun/batu-night-spectacular/trick-art-gallery.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Go Kart",
            "desc": "Race on a fast, professional outdoor go-kart track with friends.",
            "difficulty": "Easy",
            "image": "/locations/fun/batu-night-spectacular/go-kart.webp"
          },
          {
            "title": "Amusement Rides",
            "desc": "Enjoy the exciting Wahana Permainan activity, perfect for family fun and group entertainment.",
            "difficulty": "Easy",
            "image": "/locations/fun/batu-night-spectacular/wahana-permainan.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "After 18:30 WIB when all the lights and lanterns are fully lit.",
          "bring": [
            "Jacket or warm clothing as Batu nights can be quite cold",
            "Smartphone or camera with good low-light mode"
          ],
          "avoid": [
            "Avoid pushing in queues for popular rides",
            "Do not touch or lean on fragile silk lanterns"
          ],
          "insiderTips": [
            "The laser fountain show starts around 20:30 WIB near the central food court area."
          ]
        },
        "tips": [
          "Bring a jacket to stay warm in the cool Batu night air",
          "Use night mode on your camera for the best photos in the lantern garden"
        ],
        "bestTime": [
          {
            "icon": "moon",
            "badge": "Full Lights",
            "label": "Night",
            "value": "18:30 – 22:00 WIB",
            "color": "#6C63FF",
            "intensity": "95%"
          },
          {
            "icon": "calendar",
            "badge": "Weekday",
            "label": "Mon – Thu",
            "value": "Fewer crowds, faster entry",
            "color": "#378ADD",
            "intensity": "55%"
          }
        ],
        "location": {
          "lat": -7.8965,
          "lng": 112.5346
        },
        "funFacts": [
          "It is the first night-themed amusement park in Malang Raya, operating fully after dark.",
          "The Lampion Garden features a giant lantern castle that serves as a popular photo background.",
          "BNS features a stunning Lantern Garden filled with elaborate, glowing light installations shaped like castles, animals, and flowers."
        ],
        "closingCTA": "Experience the magic of Batu City at night with thrilling carnival rides and glowing lantern gardens!"
      },
      {
        "title": "Kampung Warna Warni Jodipan",
        "tagline": "The iconic 'Rainbow Village'",
        "description": "The iconic 'Rainbow Village'. A transformed riverside community now famous for its vibrant walls and creative energy.",
        "heroImage": "/locations/fun/kampung-warna-warni/cover.webp",
        "basicInfo": {
          "location": "Kampung Warna Warni Jodipan, Malang, Jawa Timur",
          "hours": "07:00 – 18:00 WIB",
          "price": "Rp 5.000 / person",
          "rating": "4.5/5",
          "category": "Vibrant Art Village / Urban Landmark"
        },
        "gallery": [
          "/locations/fun/kampung-warna-warni/cover.webp"
        ],
        "story": "In 2016, local university students transformed Jodipan from a neglected riverside slum into Indonesia's iconic 'Rainbow Village'. Every roof, wall, and alley was painted in vibrant hues, drastically improving local sanitation and the community's economy. Connected by a glass bridge, it is a testament to the power of creative urban revitalization.",
        "keyAttractions": [
          {
            "title": "Photo Area",
            "desc": "Explore the amazing Area Foto, one of the key family-friendly highlights of the park.",
            "image": "/locations/fun/kampung-warna-warni/area-foto.webp"
          },
          {
            "title": "Jembatan Kaca",
            "desc": "The famous yellow steel pedestrian bridge with a transparent glass floor suspended high over the Brantas River.",
            "image": "/locations/fun/kampung-warna-warni/jembatan-kaca.webp"
          },
          {
            "title": "Lorong Warna Warni",
            "desc": "Explore the amazing Lorong Warna Warni, one of the key family-friendly highlights of the park.",
            "image": "/locations/fun/kampung-warna-warni/lorong-warna-warni.webp"
          },
          {
            "title": "Murals",
            "desc": "Vibrant murals and 3D street art painted on the walls of houses throughout the colorful neighborhood.",
            "image": "/locations/fun/kampung-warna-warni/mural.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Rainbow Alley Walk",
            "desc": "Wander through the vibrantly painted alleyways and discover colorful murals and 3D street art around every corner.",
            "difficulty": "Easy",
            "image": "/locations/fun/kampung-warna-warni/lorong-warna-warni.webp"
          },
          {
            "title": "Glass Bridge Crossing",
            "desc": "Cross the iconic yellow steel bridge with a transparent glass floor suspended high over the Brantas River.",
            "difficulty": "Easy",
            "image": "/locations/fun/kampung-warna-warni/jembatan-kaca.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Morning before 10:00 WIB or late afternoon for the best light conditions.",
          "bring": [
            "Small cash for entry tickets and local snacks",
            "Camera with a wide-angle lens",
            "Sun hat"
          ],
          "avoid": [
            "Do not enter private properties or homes of residents without permission",
            "Littering in the village pathways is strictly forbidden"
          ],
          "insiderTips": [
            "The ticket entry fee includes a unique key chain handmade by local villagers."
          ]
        },
        "tips": [
          "Respect the residents' privacy while taking photos",
          "Cross over to Kampung Tridi via the glass bridge for more 3D wall art"
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Golden Light",
            "label": "Morning",
            "value": "07:00 – 10:00 WIB",
            "color": "#EF9F27",
            "intensity": "90%"
          },
          {
            "icon": "calendar",
            "badge": "Weekday",
            "label": "Mon – Fri",
            "value": "Quieter streets, better photos",
            "color": "#A3B18A",
            "intensity": "60%"
          }
        ],
        "location": {
          "lat": -7.9855,
          "lng": 112.6196
        },
        "funFacts": [
          "The village was once a neglected riverside slum before local university students collaborated to paint it.",
          "It is now recognized as one of the most successful community-driven urban revitalizations in Indonesia.",
          "The village was once a slum area before 8 public relations students from a local university initiated the painting project in 2016 to improve sanitation and tourism."
        ],
        "closingCTA": "Stroll through the most colorful alleys in Indonesia and cross the thrilling glass bridge over Brantas River!"
      },
      {
        "title": "Malang Night Paradise",
        "tagline": "A dazzling neon forest featuring lanterns, magic rivers, and dancing fountains that light up the Malang night",
        "description": "A dazzling neon forest featuring lanterns, magic rivers, and dancing fountains that light up the Malang night.",
        "heroImage": "/locations/fun/malang-night-paradise/cover.webp",
        "basicInfo": {
          "location": "Malang Night Paradise, Malang, Jawa Timur",
          "hours": "17:45 – 23:00 WIB",
          "price": "Rp 75.000 (Weekday) / Rp 80.000 (Weekend) / All-ride pass from Rp 160.000",
          "rating": "4.5/5",
          "category": "LED Theme Park / Night Carnival"
        },
        "gallery": [
          "/locations/fun/malang-night-paradise/cover.webp"
        ],
        "story": "Opened in 2017, Malang Night Paradise is the city's largest glowing LED and lantern park. It features millions of colorful lights forming glowing flower gardens, tunnels, and a mesmerizing Magic Journey boat ride. The park offers a magical, fairytale-like atmosphere perfect for evening strolls and photography.",
        "keyAttractions": [
          {
            "title": "Paradise of Light",
            "desc": "Explore the amazing Paradise Of Light, one of the key family-friendly highlights of the park.",
            "image": "/locations/fun/malang-night-paradise/paradise-of-light.webp"
          },
          {
            "title": "Dinosaur Garden",
            "desc": "Explore the amazing Taman Dinosaurus, one of the key family-friendly highlights of the park.",
            "image": "/locations/fun/malang-night-paradise/taman-dinosaurus.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Magic Journey",
            "desc": "Board a paddle boat to float down a glowing 500-meter indoor river illuminated by colorful LED installations.",
            "difficulty": "Easy",
            "image": "/locations/fun/malang-night-paradise/magic-journey.webp"
          },
          {
            "title": "Boat Ride",
            "desc": "Enjoy the exciting Perahu activity, perfect for family fun and group entertainment.",
            "difficulty": "Easy",
            "image": "/locations/fun/malang-night-paradise/perahu.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Right at opening at 17:45 WIB to enjoy the transitions from dusk to full LED illumination.",
          "bring": [
            "Camera with good low-light capabilities",
            "Comfortable shoes for walking"
          ],
          "avoid": [
            "Do not throw objects into the water during the boat ride",
            "Do not pull on hanging LED light strings"
          ],
          "insiderTips": [
            "The Magic Journey boat ride has an additional ticket but is highly recommended for couples and families."
          ]
        },
        "tips": [
          "Buy tickets online to avoid weekend box office lines",
          "The park is fully outdoors, so check weather forecasts before visiting"
        ],
        "bestTime": [
          {
            "icon": "moon",
            "badge": "Full Illumination",
            "label": "Night",
            "value": "17:30 – 22:00 WIB",
            "color": "#6C63FF",
            "intensity": "95%"
          },
          {
            "icon": "calendar",
            "badge": "Weekday",
            "label": "Mon – Thu",
            "value": "Shorter queues for river ride",
            "color": "#378ADD",
            "intensity": "55%"
          }
        ],
        "location": {
          "lat": -7.92369,
          "lng": 112.65795
        },
        "funFacts": [
          "It is one of the largest LED light installations in East Java, featuring millions of high-efficiency color-changing lights.",
          "The Magic Journey features nine different themed light zones including Japan, Jungle, and Avatar.",
          "The park features a 500-meter-long glowing Magic Journey river ride where visitors can float through themed illuminated tunnels on inflatable rafts."
        ],
        "closingCTA": "Immerse yourself in a glowing fairytale world of LED forest tunnels and magic river cruises!"
      },
      {
        "title": "Hawai Waterpark",
        "tagline": "Island-themed water park featuring a massive wave pool and high-speed slides for an adrenaline-fueled afternoon",
        "description": "Island-themed water park featuring a massive wave pool and high-speed slides for an adrenaline-fueled afternoon.",
        "heroImage": "/locations/fun/hawai-waterpark/cover.webp",
        "basicInfo": {
          "location": "Hawai Waterpark, Malang, Jawa Timur",
          "hours": "09:00 – 17:00 WIB",
          "price": "Rp 85.000 (Weekday) / Rp 120.000 (Weekend / High Season)",
          "rating": "4.5/5",
          "category": "Hawaiian-themed Waterpark / Wave Pool"
        },
        "gallery": [
          "/locations/fun/hawai-waterpark/cover.webp"
        ],
        "story": "Hawai Waterpark brought a slice of tropical island fun to Malang when it opened in 2015. It is most famous for its Waikiki Beach wave pool, which simulates massive tsunami-like surges using advanced pneumatic technology. The park offers world-class water slides and high-energy aquatic thrills for all ages.",
        "keyAttractions": [
          {
            "title": "Jet Coaster",
            "desc": "Explore the amazing Jet Coaster, one of the key family-friendly highlights of the park.",
            "image": "/locations/fun/hawai-waterpark/jet-coaster.webp"
          },
          {
            "title": "Kids Pool",
            "desc": "Explore the amazing Kolam Anak, one of the key family-friendly highlights of the park.",
            "image": "/locations/fun/hawai-waterpark/kolam-anak.webp"
          },
          {
            "title": "Waikiki Beach",
            "desc": "Explore the amazing Wakiki Beach, one of the key family-friendly highlights of the park.",
            "image": "/locations/fun/hawai-waterpark/wakiki-beach.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Rainbow Slide",
            "desc": "Enjoy the exciting Rainbow Slide activity, perfect for family fun and group entertainment.",
            "difficulty": "Easy",
            "image": "/locations/fun/hawai-waterpark/rainbow-slide.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Arrive around 10:00 WIB to enjoy the waterpark before peak midday temperatures.",
          "bring": [
            "Swimwear and towel",
            "Change of dry clothes",
            "Sunscreen"
          ],
          "avoid": [
            "Wearing jewelry or metal accessories on high-speed slides",
            "Leaving children unattended in deep wave pool areas"
          ],
          "insiderTips": [
            "The Tsunami wave show runs on a specific schedule, usually starting every 2 hours; listen to announcements."
          ]
        },
        "tips": [
          "Rent a locker to secure your valuables while swimming",
          "Keep your tube tightly held during the Tsunami wave simulation"
        ],
        "bestTime": [
          {
            "icon": "sun",
            "badge": "Peak Fun",
            "label": "Midday",
            "value": "10:00 – 14:00 WIB",
            "color": "#EF9F27",
            "intensity": "85%"
          },
          {
            "icon": "calendar",
            "badge": "Weekday",
            "label": "Mon – Fri",
            "value": "Much shorter slide queues",
            "color": "#378ADD",
            "intensity": "65%"
          }
        ],
        "location": {
          "lat": -7.92369,
          "lng": 112.65795
        },
        "funFacts": [
          "The tsunami wave pool uses advanced wave-generation tech to simulate realistic ocean surges safely.",
          "All slides and pools are monitored continuously by certified lifeguards.",
          "Its main attraction is the Waikiki Wave pool, which produces giant artificial tsunami waves up to 3.5 meters high, making it one of the largest wave pools in Indonesia."
        ],
        "closingCTA": "Experience the ultimate water adventure and ride the massive tsunami waves at Hawai Waterpark!"
      },
      {
        "title": "San Terra Del Fonte",
        "tagline": "European architecture meets Javanese landscapes",
        "description": "European architecture meets Javanese landscapes. Explore miniature Dutch canals and colorful replica villages.",
        "heroImage": "/locations/fun/san-terra-del-fonte/cover.webp",
        "basicInfo": {
          "location": "San Terra Del Fonte, Malang, Jawa Timur",
          "hours": "08:00 – 17:00 WIB",
          "price": "Rp 25.000 (Weekday) / Rp 30.000 – Rp 35.000 (Weekend) + pay-per-ride attractions",
          "rating": "4.5/5",
          "category": "Floral Park / European & Asian Replicas"
        },
        "gallery": [
          "/locations/fun/san-terra-del-fonte/cover.webp"
        ],
        "story": "Opened in late 2019, Flora Wisata San Terra offers a stunning visual blend of European and Asian architecture set against lush Javanese mountains. Visitors can stroll past realistic Dutch windmills, colorful Korean-style villages, and expansive beds of highland flowers. It is a highly photogenic park designed for immersive cultural photography.",
        "keyAttractions": [
          {
            "title": "Dutch Village",
            "desc": "Explore the amazing Dutch Village, one of the key family-friendly highlights of the park.",
            "image": "/locations/fun/san-terra-del-fonte/dutch-village.webp"
          },
          {
            "title": "Flower Garden",
            "desc": "A vast upland garden featuring hundreds of colorful blooming flower varieties and green landscaping.",
            "image": "/locations/fun/san-terra-del-fonte/taman-bunga.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Rainbow Slide",
            "desc": "Enjoy the exciting Rainbow Slide activity, perfect for family fun and group entertainment.",
            "difficulty": "Easy",
            "image": "/locations/fun/san-terra-del-fonte/rainbow-slide.webp"
          },
          {
            "title": "Amusement Rides",
            "desc": "Enjoy the exciting Wahana Permainan activity, perfect for family fun and group entertainment.",
            "difficulty": "Easy",
            "image": "/locations/fun/san-terra-del-fonte/wahana-permainan.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Morning between 08:30 and 10:30 WIB for cool mountain breezes and soft natural sunlight.",
          "bring": [
            "Camera",
            "Sun hat or umbrella",
            "Comfortable walking shoes"
          ],
          "avoid": [
            "Stepping into the flower beds or picking flowers",
            "Littering in the manicured gardens"
          ],
          "insiderTips": [
            "The costume rental shop is located near the entrance of the Korean zone; rent early for the best selection."
          ]
        },
        "tips": [
          "Rent a traditional costume early in the morning to avoid queues",
          "Prepare your phone storage as every corner of this park is highly photogenic"
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Soft Light",
            "label": "Morning",
            "value": "08:00 – 11:00 WIB",
            "color": "#EF9F27",
            "intensity": "85%"
          },
          {
            "icon": "calendar",
            "badge": "Weekday",
            "label": "Mon – Fri",
            "value": "Uncrowded garden & photo spots",
            "color": "#A3B18A",
            "intensity": "60%"
          }
        ],
        "location": {
          "lat": -7.816,
          "lng": 112.472
        },
        "funFacts": [
          "The park hosts over 700 varieties of highland flowers, kept in blooming condition year-round by botanists.",
          "The replicas of the Dutch windmills and Korean buildings are built in realistic colors and proportions.",
          "The park features highly photogenic replicas of colorful European and Korean streets surrounded by massive gardens of seasonal flowers."
        ],
        "closingCTA": "Walk through vibrant European canals and historic Asian streets in a massive upland garden paradise!"
      },
      {
        "title": "Predator Fun Park",
        "tagline": "An educational park dedicated to the world's most misunderstood predators, featuring crocodiles and interactive galleries",
        "description": "An educational park dedicated to the world's most misunderstood predators, featuring crocodiles and interactive galleries.",
        "heroImage": "/locations/fun/predator-fun-park/cover.webp",
        "basicInfo": {
          "location": "Predator Fun Park, Malang, Jawa Timur",
          "hours": "08:30 – 16:30 WIB",
          "price": "Free entrance / Pay-per-ride attractions (approx Rp 10.000 – Rp 30.000 per ride)",
          "rating": "4.5/5",
          "category": "Reptile Educational Park / Water Play"
        },
        "gallery": [
          "/locations/fun/predator-fun-park/cover.webp"
        ],
        "story": "Established in 2015, Predator Fun Park is a unique educational zoo dedicated to the world's apex predators, particularly crocodiles. It aims to demystify these feared reptiles through interactive galleries, feeding shows, and safe handling zones. The park balances education with fun by including a croco-themed waterpark and outbound games.",
        "keyAttractions": [
          {
            "title": "Crocodile Gallery",
            "desc": "Explore the amazing Galeri Buaya, one of the key family-friendly highlights of the park.",
            "image": "/locations/fun/predator-fun-park/galeri-buaya.webp"
          },
          {
            "title": "Crocodile Pool",
            "desc": "Explore the amazing Kolam Buaya, one of the key family-friendly highlights of the park.",
            "image": "/locations/fun/predator-fun-park/kolam-buaya.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Croco Train",
            "desc": "Enjoy the exciting Croco Train activity, perfect for family fun and group entertainment.",
            "difficulty": "Easy",
            "image": "/locations/fun/predator-fun-park/croco-train.webp"
          },
          {
            "title": "Waterboom",
            "desc": "Enjoy the exciting Waterboom activity, perfect for family fun and group entertainment.",
            "difficulty": "Easy",
            "image": "/locations/fun/predator-fun-park/waterboom.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Morning when crocodiles are most active during their feeding sessions.",
          "bring": [
            "Swimwear for children",
            "Camera",
            "Sunscreen"
          ],
          "avoid": [
            "Do not lean over safety railings of crocodile enclosures",
            "Do not throw plastic or trash into animal pools"
          ],
          "insiderTips": [
            "There is a reptile handling corner where you can safely touch and take photos with baby crocodiles and iguanas."
          ]
        },
        "tips": [
          "Take children to the interactive educational gallery to learn about reptile biology",
          "Watch the snake show schedule at the central stage"
        ],
        "bestTime": [
          {
            "icon": "sun",
            "badge": "Feeding Time",
            "label": "Morning",
            "value": "09:00 – 11:30 WIB",
            "color": "#A3B18A",
            "intensity": "85%"
          },
          {
            "icon": "calendar",
            "badge": "Weekday",
            "label": "Mon – Fri",
            "value": "Crocodiles most active, fewer visitors",
            "color": "#378ADD",
            "intensity": "60%"
          }
        ],
        "location": {
          "lat": -7.91307,
          "lng": 112.54841
        },
        "funFacts": [
          "The park houses over a hundred crocodiles of different species, including saltwater and freshwater crocodiles.",
          "It is designed to educate families and children about reptiles in a safe and highly engaging setting.",
          "In addition to live crocodiles, the park has a specialized water playground and educational gallery detailing the biology of ancient reptiles."
        ],
        "closingCTA": "Get up close with ancient reptiles and enjoy a fun splash at the crocodile-themed waterpark!"
      }
    ]
  },
  "heritage": {
    "title": "Heritage",
    "description": "Discover the historic sites, centuries-old temples, and unique colonial architecture that define Malang's heritage.",
    "places": [
      {
        "title": "Kayutangan Heritage",
        "tagline": "Strolling Through Art Deco Colonial History",
        "description": "Malang's historic corridor. Explore preserved colonial streets, vintage shopfronts, and hidden riverside heritage alleys.",
        "heroImage": "/locations/heritage/kayutangan/cover.webp",
        "basicInfo": {
          "location": "Jalan Jenderal Basuki Rahmat, Klojen, Kota Malang, Jawa Timur",
          "hours": "Open 24 Hours",
          "price": "Free (street-level access) / Rp 5.000 (heritage alley entrance)",
          "rating": "4.6/5",
          "category": "Heritage Site / Urban Tourism"
        },
        "gallery": [
          "/locations/heritage/kayutangan/cover.webp"
        ],
        "story": "Kayutangan Heritage represents the heart of old Malang town, dating back to the late 19th century when it was the central commercial street under Dutch East Indies rule. The area spans both the main cobblestone boulevard (Jalan Basuki Rahmat) and the hidden residential alleys inside Kampoeng Heritage. Many houses inside are still owned by descendants of original colonial clerks, maintaining their signature high-ceiling structure, vintage Dutch tiles, and historical family heirlooms.",
        "keyAttractions": [
          {
            "title": "Village Gate",
            "desc": "The main decorative entrance gate leading into the historical residential alleys of Kampoeng Heritage Kayutangan.",
            "image": "/locations/heritage/kayutangan/gerbang-desa.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Culinary District",
            "desc": "Taste local traditional coffee and legendary snacks at vintage street vendors and retro cafes lining the corridor.",
            "difficulty": "Easy",
            "image": "/locations/heritage/kayutangan/kawasan-kuliner.webp"
          },
          {
            "title": "Murals",
            "desc": "Admire the beautiful retro-themed murals painted on historical walls depicting local life and Malang's colonial era.",
            "difficulty": "Easy",
            "image": "/locations/heritage/kayutangan/mural.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Late afternoon to evening when the antique street lamps light up the corridor beautifully.",
          "bring": [
            "Vintage outfit for photos",
            "Small cash for alley entrance fees",
            "Comfortable walking shoes"
          ],
          "avoid": [
            "Avoid talking loudly in the alleys as it is an active residential neighborhood",
            "Avoid taking photos of local residents inside their private yards without permission"
          ],
          "insiderTips": [
            "Stop by Kopi Lonceng Cafe to taste legendary local coffee served at a Dutch-era cashier desk."
          ]
        },
        "tips": [
          "Arrive in the late afternoon",
          "Wear retro colonial-style clothing for historical photoshoots"
        ],
        "bestTime": [
          {
            "icon": "🌃",
            "badge": "Night Vibes",
            "label": "Evening",
            "value": "17:00 – 21:00 WIB",
            "color": "#534AB7",
            "intensity": "85%"
          },
          {
            "icon": "🌤️",
            "badge": "Nice Weather",
            "label": "Late Afternoon",
            "value": "15:00 – 18:00 WIB",
            "color": "#EF9F27",
            "intensity": "65%"
          }
        ],
        "funFacts": [
          "The paving stones of Kayutangan use special cobbles to slow down traffic for pedestrians.",
          "Kampoeng Heritage is inhabited by a community of local artists and antique craftsmen.",
          "Several heritage houses in the alleys are over a century old and remain fully intact."
        ],
        "closingCTA": "Step back in time and feel the romance of European colonial architecture in the heart of old Malang city.",
        "location": {
          "lat": -7.9793,
          "lng": 112.6294
        }
      },
      {
        "title": "Alun-alun Malang",
        "tagline": "The historic heart of the city",
        "description": "The historic heart of the city. A lush green square perfect for people-watching and enjoying the cool evening breeze.",
        "heroImage": "/locations/heritage/alun-alun-malang/cover.webp",
        "basicInfo": {
          "location": "Alun-alun Malang, Malang, Jawa Timur",
          "hours": "Open 24 Hours",
          "price": "Free",
          "rating": "4.5/5",
          "category": "Public Park / Heritage Site"
        },
        "gallery": [
          "/locations/heritage/alun-alun-malang/cover.webp"
        ],
        "story": "Established in 1882 by the Dutch colonial government, Alun-alun Malang has served as the historic civic heart of the city for over a century. Surrounded by heritage buildings, a grand mosque, and a church, it symbolizes religious harmony. Today, its lush banyan trees and dancing fountains make it a beloved public gathering space.",
        "keyAttractions": [
          {
            "title": "Fountain",
            "desc": "The iconic giant water fountain at the center of the park that puts on light and water shows in the evening.",
            "image": "/locations/heritage/alun-alun-malang/air-mancur.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Relaxation Area",
            "desc": "Spacious green lawns shaded by century-old banyan trees, ideal for family picnics and relaxing in the cool breeze.",
            "difficulty": "Easy",
            "image": "/locations/heritage/alun-alun-malang/area-bersantai.webp"
          },
          {
            "title": "Playground",
            "desc": "A safe, dedicated recreation area equipped with swings, slides, and fun activities for children.",
            "difficulty": "Easy",
            "image": "/locations/heritage/alun-alun-malang/taman-bermain.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Late afternoon or early morning for cool breezes and light shows.",
          "bring": [
            "Camera",
            "Picnic mat or blanket",
            "Comfortable walking shoes"
          ],
          "avoid": [
            "Littering anywhere in the park grounds",
            "Feeding pigeons with unsuitable food"
          ],
          "insiderTips": [
            "Visit in the evening to watch the central water fountain illuminate with colorful light displays."
          ]
        },
        "tips": [
          "Visit during evening hours to watch the illuminated water fountain show."
        ],
        "bestTime": [
          {
            "icon": "sun",
            "badge": "Evening Glow",
            "label": "Late Afternoon",
            "value": "16:00 – 19:00 WIB",
            "color": "#EF9F27",
            "intensity": "80%"
          },
          {
            "icon": "calendar",
            "badge": "Weekday",
            "label": "Mon – Fri",
            "value": "Calm atmosphere, less crowded",
            "color": "#A3B18A",
            "intensity": "55%"
          }
        ],
        "location": {
          "lat": -7.9829,
          "lng": 112.6298
        },
        "funFacts": [
          "Alun-alun Malang was redesigned as a modern green park, featuring wifi spots, bird cages, and running tracks.",
          "The central banyan trees in the square have stood for over a century, providing massive shade.",
          "The square is famous for its large populations of friendly pigeons and is surrounded by historic colonial-era landmarks like the Great Mosque."
        ],
        "closingCTA": "Relax in the green heart of Malang and soak in the city's historic ambiance."
      },
      {
        "title": "Candi Singosari",
        "tagline": "The 13th-century funerary temple of King Kertanegara",
        "description": "The 13th-century funerary temple of King Kertanegara. A masterpiece of Hindu-Buddhist architecture and the pride of Malang.",
        "heroImage": "/locations/heritage/candi-singosari/cover.webp",
        "basicInfo": {
          "location": "Candi Singosari, Malang, Jawa Timur",
          "hours": "08:00 – 17:00 WIB",
          "price": "Free (voluntary donation)",
          "rating": "4.5/5",
          "category": "Historical Temple / Archaeological Site"
        },
        "gallery": [
          "/locations/heritage/candi-singosari/cover.webp"
        ],
        "story": "Built around 1300 AD, Candi Singosari is a grand, unfinished Hindu-Buddhist temple honoring King Kertanegara, the last ruler of the Singhasari Dynasty. The temple is distinct for having its intricate carvings mostly on the lower levels, while the top remains bare stone. It is guarded by two massive, fiercely carved Dwarapala statues nearby.",
        "keyAttractions": [
          {
            "title": "Dvarapala Statues",
            "desc": "Two massive stone guardian statues standing at 3.7 meters tall, guarding the ancient entrance to the temple complex.",
            "image": "/locations/heritage/candi-singosari/arca-dwarpala.webp"
          },
          {
            "title": "Temple Gate",
            "desc": "The welcoming entrance to the archaeological park showcasing the historic layout of the Singhasari kingdom.",
            "image": "/locations/heritage/candi-singosari/gerbang-kawasan.webp"
          },
          {
            "title": "Temple Front View",
            "desc": "The front facade of the unfinished 13th-century red stone temple, showcasing beautiful Hindu-Buddhist architecture.",
            "image": "/locations/heritage/candi-singosari/tampak-depan-candi.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Temple Architecture Tour",
            "desc": "Walk around the grand 13th-century unfinished Hindu-Buddhist temple and study its intricate lower-level stone carvings.",
            "difficulty": "Easy",
            "image": "/locations/heritage/candi-singosari/tampak-depan-candi.webp"
          },
          {
            "title": "Dwarapala Statue Visit",
            "desc": "Walk 300 meters west to see the two colossal 3.7-meter-tall stone guardian statues depicting fearsome temple protectors.",
            "difficulty": "Easy",
            "image": "/locations/heritage/candi-singosari/arca-dwarpala.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Morning hours between 08:00 and 10:00 WIB for gentle lighting.",
          "bring": [
            "Camera",
            "Sun hat and sunscreen",
            "Cash for entrance and local guide"
          ],
          "avoid": [
            "Climbing on sacred temple stones or reliefs",
            "Leaving trash near the archaeological artifacts"
          ],
          "insiderTips": [
            "Don't miss the two colossal Dwarapala guardian statues located 300 meters west of the main temple."
          ]
        },
        "tips": [
          "Walk 300 meters west to visit the twin massive Dwarapala guardian statues."
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Morning Calm",
            "label": "Early Morning",
            "value": "07:00 – 10:00 WIB",
            "color": "#EF9F27",
            "intensity": "85%"
          },
          {
            "icon": "calendar",
            "badge": "Dry Season",
            "label": "May – October",
            "value": "Clear skies, best for photography",
            "color": "#378ADD",
            "intensity": "65%"
          }
        ],
        "location": {
          "lat": -7.9107,
          "lng": 112.6667
        },
        "funFacts": [
          "Candi Singosari is an unfinished temple built to honor King Kertanegara, the last king of the Singhasari Dynasty.",
          "The two giant Dwarapala statues guarding the area are among the largest ancient stone guardians in Indonesia.",
          "The temple is historically significant as the resting place of King Kertanegara, the last king of the Singhasari Kingdom, who was assassinated in 1292 AD."
        ],
        "closingCTA": "Discover the grand history of the 13th-century Singhasari Kingdom at this majestic red stone site."
      },
      {
        "title": "Tugu Malang",
        "tagline": "The symbol of Malang’s independence",
        "description": "The symbol of Malang’s independence. A beautiful monument surrounded by a lotus pond and lush, classic Javanese gardens.",
        "heroImage": "/locations/heritage/tugu-malang/cover.webp",
        "basicInfo": {
          "location": "Tugu Malang, Malang, Jawa Timur",
          "hours": "Open 24 Hours",
          "price": "Free",
          "rating": "4.5/5",
          "category": "City Landmark / Historical Park"
        },
        "gallery": [
          "/locations/heritage/tugu-malang/cover.webp"
        ],
        "story": "Tugu Malang was originally built in 1946 to commemorate Indonesian independence, but was destroyed by the Dutch during military aggression. It was rebuilt in 1953 and inaugurated by President Sukarno. Surrounded by a beautiful lotus pond, the monument stands proudly in front of the colonial City Hall as a symbol of resilience.",
        "keyAttractions": [
          {
            "title": "City Hall",
            "desc": "The historic colonial Dutch town hall building flanking the circle, displaying beautiful European neo-classical facades.",
            "image": "/locations/heritage/tugu-malang/balai-kota.webp"
          },
          {
            "title": "Lotus Pond",
            "desc": "The elegant ring of water surrounding the Tugu monument, filled with blooming pink and white lotus flowers.",
            "image": "/locations/heritage/tugu-malang/kolam-teratai.webp"
          },
          {
            "title": "Garden",
            "desc": "A beautifully manicured circular garden surrounding the monument, featuring century-old trees and colorful flower beds.",
            "image": "/locations/heritage/tugu-malang/taman.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Lotus Pond & Monument Walk",
            "desc": "Stroll around the iconic monument surrounded by a serene lotus pond and manicured gardens.",
            "difficulty": "Easy",
            "image": "/locations/heritage/tugu-malang/kolam-teratai.webp"
          },
          {
            "title": "Colonial Architecture Photography",
            "desc": "Capture stunning shots of the neo-classical Malang City Hall framed together with the Tugu monument.",
            "difficulty": "Easy",
            "image": "/locations/heritage/tugu-malang/balai-kota.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Early morning or dusk when the lotus flowers open and surrounding traffic slows down.",
          "bring": [
            "Camera for wide-angle shots",
            "Comfortable walking shoes"
          ],
          "avoid": [
            "Stepping inside the lotus water pond",
            "Crossing the busy roundabout without using pedestrian crossings"
          ],
          "insiderTips": [
            "Position yourself on the west walkway to frame both the Tugu monument and the colonial Malang City Hall in one photo."
          ]
        },
        "tips": [
          "Visit during early morning to see blooming lotus flowers surrounding the monument."
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Golden Hour",
            "label": "Morning",
            "value": "07:00 – 09:00 WIB",
            "color": "#EF9F27",
            "intensity": "85%"
          },
          {
            "icon": "moon",
            "badge": "Night Glow",
            "label": "Evening",
            "value": "19:00 – 21:00 WIB",
            "color": "#6C63FF",
            "intensity": "75%"
          }
        ],
        "location": {
          "lat": -7.9802,
          "lng": 112.6268
        },
        "funFacts": [
          "Tugu Malang was originally built in 1946, destroyed during the revolution, and rebuilt by President Sukarno in 1953.",
          "The lotus pond surrounding the monument features red and white water lilies representing national unity.",
          "Designed in 1946 by Mr. Anwari, the monument was destroyed during the Dutch Military Aggression but rebuilt and officially inaugurated by President Sukarno in 1953."
        ],
        "closingCTA": "Stand at the historic center of Malang and admire the iconic lotus monument and colonial architecture."
      },
      {
        "title": "Candi Badut",
        "tagline": "The oldest temple in East Java, built in 760 AD",
        "description": "The oldest temple in East Java, built in 760 AD. A simple yet powerful stone structure surrounded by a quiet residential neighborhood.",
        "heroImage": "/locations/heritage/candi-badut/cover.webp",
        "basicInfo": {
          "location": "Candi Badut, Malang, Jawa Timur",
          "hours": "08:00 – 17:00 WIB",
          "price": "Free",
          "rating": "4.5/5",
          "category": "Ancient Temple / Archaeological Site"
        },
        "gallery": [
          "/locations/heritage/candi-badut/cover.webp"
        ],
        "story": "Dating back to 760 AD, Candi Badut is recognized as the oldest known stone temple in East Java, built by King Gajayana of the Kanjuruhan Kingdom. Its architectural style closely resembles the older temples of Central Java with its simple, sturdy Andean stone structure. It remains a quiet, spiritual remnant of a largely forgotten early civilization.",
        "keyAttractions": [
          {
            "title": "Main Structure",
            "desc": "The oldest temple in East Java, built in 760 AD, featuring an Andean style volcanic stone masonry.",
            "image": "/locations/heritage/candi-badut/bangunan-utama.webp"
          },
          {
            "title": "Temple Complex",
            "desc": "A peaceful green courtyard surrounding the stone ruins, set in a quiet suburban residential neighborhood.",
            "image": "/locations/heritage/candi-badut/kompleks-candi.webp"
          },
          {
            "title": "Statue Niches",
            "desc": "The stone niches on the temple walls which once housed statues of Hindu deities like Durga and Agastya.",
            "image": "/locations/heritage/candi-badut/relung-arca.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Ancient Temple Tour",
            "desc": "Walk around the oldest stone temple in East Java, built in 760 AD, and study its distinctive Andean-style stone masonry.",
            "difficulty": "Easy",
            "image": "/locations/heritage/candi-badut/bangunan-utama.webp"
          },
          {
            "title": "Inscription & Artifact Study",
            "desc": "Ask the caretaker to see the ancient inscription stone and examine the Hindu deity statue niches on the temple walls.",
            "difficulty": "Easy",
            "image": "/locations/heritage/candi-badut/relung-arca.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Morning for quiet reflection and soft natural light.",
          "bring": [
            "Water bottle",
            "Camera"
          ],
          "avoid": [
            "Touching or carving on delicate ancient stone surfaces"
          ],
          "insiderTips": [
            "Ask the caretaker at the site entrance to show you the ancient inscription stone found near the temple."
          ]
        },
        "tips": [
          "Ask the local caretaker for a guided explanation of the 8th-century Gajayana Kingdom."
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Soft Light",
            "label": "Morning",
            "value": "07:30 – 10:30 WIB",
            "color": "#EF9F27",
            "intensity": "85%"
          },
          {
            "icon": "calendar",
            "badge": "Dry Season",
            "label": "May – October",
            "value": "No rain, stable temple site",
            "color": "#378ADD",
            "intensity": "65%"
          }
        ],
        "location": {
          "lat": -7.9578,
          "lng": 112.5986
        },
        "funFacts": [
          "Candi Badut dates back to 760 AD, making it older than Borobudur and the oldest known stone temple in East Java.",
          "The name 'Badut' comes from the Sanskrit word 'Bhadraya', meaning the noble star Agastya.",
          "Dating back to 760 AD, Candi Badut is widely recognized as the oldest temple in East Java and was built during the reign of King Gajayana of the Kanjuruhan Kingdom."
        ],
        "closingCTA": "Uncover East Java's oldest civilization at this peaceful 8th-century sanctuary."
      },
      {
        "title": "Gereja Ijen",
        "tagline": "Our Lady of Mount Carmel Cathedral",
        "description": "Our Lady of Mount Carmel Cathedral. A stunning piece of neo-gothic architecture located on the historic Ijen Boulevard.",
        "heroImage": "/locations/heritage/gereja-ijen/cover.webp",
        "basicInfo": {
          "location": "Gereja Ijen, Malang, Jawa Timur",
          "hours": "06:00 – 19:00 WIB",
          "price": "Free",
          "rating": "4.5/5",
          "category": "Colonial Cathedral / Heritage Landmark"
        },
        "gallery": [
          "/locations/heritage/gereja-ijen/cover.webp"
        ],
        "story": "Officially named the Cathedral of Our Lady of Mount Carmel, Gereja Ijen was built in 1934 by Dutch architect L. Estourgie. It is widely celebrated for its pristine Neo-Gothic architecture and authentic European stained-glass windows. Positioned on the historic Ijen Boulevard, it has been a center of Catholic worship and an architectural landmark for decades.",
        "keyAttractions": [
          {
            "title": "Main Altar",
            "desc": "The majestic white marble altar at the front of the cathedral, beautifully framed by high stained-glass windows.",
            "image": "/locations/heritage/gereja-ijen/altar-utama.webp"
          },
          {
            "title": "Church Interior",
            "desc": "The soaring Gothic cathedral interior, showing beautiful wooden ribs, rows of classic benches, and calm lighting.",
            "image": "/locations/heritage/gereja-ijen/interior-gereja.webp"
          },
          {
            "title": "Church Tower",
            "desc": "The twin Neo-Gothic spires rising high above Ijen Boulevard, serving as a signature landmark of Malang city.",
            "image": "/locations/heritage/gereja-ijen/menara-gereja.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Cathedral Interior Visit",
            "desc": "Step inside the soaring Neo-Gothic cathedral to admire the stained-glass windows, white marble altar, and wooden ribbed ceiling.",
            "difficulty": "Easy",
            "image": "/locations/heritage/gereja-ijen/interior-gereja.webp"
          },
          {
            "title": "Ijen Boulevard Walk",
            "desc": "Stroll along the historic Ijen Boulevard lined with preserved Dutch-era villas and palm-lined avenues.",
            "difficulty": "Easy",
            "image": "/locations/heritage/gereja-ijen/menara-gereja.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Sunday morning for Mass or late afternoon for golden hour exterior photography.",
          "bring": [
            "Modest attire suitable for a house of worship",
            "Camera"
          ],
          "avoid": [
            "Taking flash photos during ongoing religious services",
            "Making loud noises inside the sanctuary"
          ],
          "insiderTips": [
            "Walk along Ijen Boulevard after visiting to see preserved Dutch-era villas and palm-lined avenues."
          ]
        },
        "tips": [
          "Maintain respectful silence inside the cathedral sanctuary at all times."
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Soft Morning Light",
            "label": "Morning",
            "value": "07:00 – 10:00 WIB",
            "color": "#EF9F27",
            "intensity": "85%"
          },
          {
            "icon": "calendar",
            "badge": "Weekday",
            "label": "Mon – Sat",
            "value": "Open for visitors, no mass service",
            "color": "#A3B18A",
            "intensity": "60%"
          }
        ],
        "location": {
          "lat": -7.962,
          "lng": 112.625
        },
        "funFacts": [
          "Built in 1934 by Dutch architect L. Estourgie, it is one of the finest examples of Neo-Gothic architecture in Indonesia.",
          "The cathedral features genuine stained-glass windows imported from Europe during the colonial period.",
          "Formally known as Our Lady of Mount Carmel Cathedral, the church features twin neo-gothic spires and a historic pipe organ brought directly from Europe."
        ],
        "closingCTA": "Admire the soaring Neo-Gothic architecture and serene atmosphere of Malang's most famous cathedral."
      },
      {
        "title": "Klenteng Eng An Kiong",
        "tagline": "A 200-year-old Chinese temple",
        "description": "A 200-year-old Chinese temple. Vibrant red colors, incense-filled courtyards, and a living symbol of Malang's multi-cultural history.",
        "heroImage": "/locations/heritage/klenteng-eng-an-kiong/cover.webp",
        "basicInfo": {
          "location": "Klenteng Eng An Kiong, Malang, Jawa Timur",
          "hours": "07:00 – 17:00 WIB",
          "price": "Free",
          "rating": "4.5/5",
          "category": "Heritage Temple / Cultural Landmark"
        },
        "gallery": [
          "/locations/heritage/klenteng-eng-an-kiong/cover.webp"
        ],
        "story": "Founded in 1825, Eng An Kiong ('The Temple of Eternal Peace') is one of the oldest Chinese temples in East Java. Serving the Tri Dharma faiths—Confucianism, Taoism, and Buddhism—it is a cornerstone of Malang's Chinese-Indonesian heritage. The temple is also famous for preserving the rare, traditional art of Wayang Potehi (glove puppetry).",
        "keyAttractions": [
          {
            "title": "Main Altar",
            "desc": "The central sacred altar dedicated to the main deity Kongco Hok Tek Ceng Sin, adorned with red silk and gold.",
            "image": "/locations/heritage/klenteng-eng-an-kiong/altar-utama.webp"
          },
          {
            "title": "Temple Courtyard",
            "desc": "The vibrant front courtyard filled with large dragon incense burners and bright red Chinese lanterns hanging overhead.",
            "image": "/locations/heritage/klenteng-eng-an-kiong/pelataran-klenteng.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Prayer Hall",
            "desc": "Take a scenic walk and appreciate the historical value of the Ruang Ibadah area.",
            "difficulty": "Easy",
            "image": "/locations/heritage/klenteng-eng-an-kiong/ruang-ibadah.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Chinese New Year or Cap Go Meh celebrations for vibrant cultural shows.",
          "bring": [
            "Modest clothing",
            "Camera"
          ],
          "avoid": [
            "Disturbing worshippers offering incense",
            "Pointing directly at sacred statues"
          ],
          "insiderTips": [
            "The temple uniquely accommodates three traditional faiths: Confucianism, Taoism, and Buddhism under one roof."
          ]
        },
        "tips": [
          "Visit during Chinese New Year festivals to watch traditional Wayang Potehi glove puppet shows."
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Morning Prayers",
            "label": "Early Morning",
            "value": "07:00 – 09:00 WIB",
            "color": "#EF9F27",
            "intensity": "85%"
          },
          {
            "icon": "calendar",
            "badge": "Festival",
            "label": "Chinese New Year",
            "value": "Late Jan – Feb",
            "color": "#EF4423",
            "intensity": "95%"
          }
        ],
        "location": {
          "lat": -7.9877,
          "lng": 112.636
        },
        "funFacts": [
          "Founded in 1825 by Chinese immigrants, Eng An Kiong means 'The Temple of Eternal Peace'.",
          "It is famous for preserving the rare traditional art of Wayang Potehi (Chinese glove puppetry).",
          "The temple was founded in 1825 by a Chinese merchant named Lizae, making it one of the oldest active Tri Dharma (Taoist, Buddhist, Confucian) places of worship in East Java."
        ],
        "closingCTA": "Immerse yourself in two centuries of vibrant Chinese-Indonesian heritage and spiritual culture."
      },
      {
        "title": "Monumen Juang 45",
        "tagline": "An epic, high-relief bronze sculpture depicting the heroes of the independence movement right in front of the Central Station",
        "description": "An epic, high-relief bronze sculpture depicting the heroes of the independence movement right in front of the Central Station.",
        "heroImage": "/locations/heritage/monumen-juang-45/monument-juang-45.webp",
        "basicInfo": {
          "location": "Monumen Juang 45, Malang, Jawa Timur",
          "hours": "Open 24 Hours",
          "price": "Free",
          "rating": "4.5/5",
          "category": "Historical Monument / City Landmark"
        },
        "gallery": [
          "/locations/heritage/monumen-juang-45/monument-juang-45.webp"
        ],
        "story": "Located directly across from Malang's main railway station, Monumen Juang 45 was erected to honor the heroic struggles of the local army (TRIM) against colonial forces. The massive bronze relief vividly depicts 19 freedom fighters in intense battle poses. It serves as a dramatic, powerful reminder of the city's fight for independence.",
        "keyAttractions": [
          {
            "title": "Monument of Struggle",
            "desc": "The massive copper sculpture depicting local freedom fighters pushing back colonial forces, located in front of the station.",
            "image": "/locations/heritage/monumen-juang-45/monument-juang-45.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "History Panel",
            "desc": "Take a scenic walk and appreciate the historical value of the Panel Sejarah area.",
            "difficulty": "Easy",
            "image": "/locations/heritage/monumen-juang-45/panel-sejarah.webp"
          },
          {
            "title": "Struggle Relief",
            "desc": "Take a scenic walk and appreciate the historical value of the Relief Perjuangan area.",
            "difficulty": "Easy",
            "image": "/locations/heritage/monumen-juang-45/relief-perjuangan.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Late afternoon when arriving or departing via Malang Kota Baru train station.",
          "bring": [
            "Camera"
          ],
          "avoid": [
            "Climbing onto the monument base or copper statues"
          ],
          "insiderTips": [
            "Located right opposite Malang Kota Baru Railway Station, making it a perfect quick stop."
          ]
        },
        "tips": [
          "Combine your visit with a walk through nearby Taman Trunojoyo park."
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Morning Light",
            "label": "Morning",
            "value": "07:00 – 10:00 WIB",
            "color": "#EF9F27",
            "intensity": "80%"
          },
          {
            "icon": "calendar",
            "badge": "National Day",
            "label": "Aug 17 Area",
            "value": "Best patriotic atmosphere",
            "color": "#C0392B",
            "intensity": "90%"
          }
        ],
        "location": {
          "lat": -7.9775,
          "lng": 112.6361
        },
        "funFacts": [
          "The monument stands 19 meters long, depicting nineteen freedom fighters in dramatic battle poses.",
          "It honors the heroics of the TRIM (Tentara Republik Indonesia Malang) forces during the Independence War.",
          "The massive monument depicts a giant soldier stepping on a broken chain, symbolizing the Indonesian people breaking free from the shackles of colonialism."
        ],
        "closingCTA": "Honor the fierce bravery of Malang's freedom fighters at this dramatic railway plaza monument."
      },
      {
        "title": "Candi Kidal",
        "tagline": "Built to honor King Anusapati",
        "description": "Built to honor King Anusapati. Famous for its intricate Garuda carvings that tell the story of a hero's devotion.",
        "heroImage": "/locations/heritage/candi-kidal/cover.webp",
        "basicInfo": {
          "location": "Candi Kidal, Malang, Jawa Timur",
          "hours": "08:00 – 17:00 WIB",
          "price": "Free (voluntary donation for conservation)",
          "rating": "4.5/5",
          "category": "Historical Temple / Archaeological Site"
        },
        "gallery": [
          "/locations/heritage/candi-kidal/cover.webp"
        ],
        "story": "Built in 1248 AD to honor King Anusapati of the Singhasari Kingdom, Candi Kidal is renowned for its slender profile and highly detailed carvings. Its most significant features are the Garudeya reliefs at its base, which depict the mythical bird Garuda freeing his mother from slavery. This specific carving heavily inspired Indonesia's national emblem, Garuda Pancasila.",
        "keyAttractions": [
          {
            "title": "Main Structure",
            "desc": "A slender and elegant 13th-century stone temple built as a dedication to King Anusapati of the Singhasari Dynasty.",
            "image": "/locations/heritage/candi-kidal/bangunan-utama.webp"
          },
          {
            "title": "Kala Ornament",
            "desc": "The masterpiece stone carving of Kala's head above the temple portal, showing fierce, detailed expressions to ward off evil.",
            "image": "/locations/heritage/candi-kidal/ornamen-kala.webp"
          },
          {
            "title": "Garuda Relief",
            "desc": "The iconic stone relief panels telling the mythological story of Garudeya's struggle to free his mother from slavery.",
            "image": "/locations/heritage/candi-kidal/relief-garuda.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Garuda Relief Study",
            "desc": "Examine the three iconic Garudeya relief panels at the base of the temple that inspired Indonesia's national emblem.",
            "difficulty": "Easy",
            "image": "/locations/heritage/candi-kidal/relief-garuda.webp"
          },
          {
            "title": "Temple Grounds Photography",
            "desc": "Capture the elegant slender profile of the 13th-century temple and its intricate Kala ornaments from every angle.",
            "difficulty": "Easy",
            "image": "/locations/heritage/candi-kidal/bangunan-utama.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Morning hours for crisp lighting on the detailed stone reliefs.",
          "bring": [
            "Camera",
            "Sun hat"
          ],
          "avoid": [
            "Climbing or leaning on the delicate stone reliefs"
          ],
          "insiderTips": [
            "Look closely at the lower base of the temple to spot the three Garudeya relief panels."
          ]
        },
        "tips": [
          "Examine the three Garudeya reliefs carved around the base of the temple."
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Morning Calm",
            "label": "Early Morning",
            "value": "07:30 – 10:00 WIB",
            "color": "#EF9F27",
            "intensity": "85%"
          },
          {
            "icon": "calendar",
            "badge": "Dry Season",
            "label": "May – October",
            "value": "Clear sky for carvings photography",
            "color": "#378ADD",
            "intensity": "65%"
          }
        ],
        "location": {
          "lat": -8.0258,
          "lng": 112.7091
        },
        "funFacts": [
          "Candi Kidal was built in 1248 AD to house the ashes of King Anusapati of the Singhasari Kingdom.",
          "The Garudeya relief carved here is the inspiration for Indonesia's national emblem, Garuda Pancasila.",
          "The temple was constructed in 1248 AD to honor King Anusapati of Singhasari, and is famous for its rich Garudeya carvings which later inspired the Indonesian national emblem."
        ],
        "closingCTA": "Behold the legendary Garuda reliefs that inspired Indonesia's national emblem."
      },
      {
        "title": "Candi Jago",
        "tagline": "A unique terraced temple structure featuring exquisite reliefs that mix Hindu and Buddhist myths and legends",
        "description": "A unique terraced temple structure featuring exquisite reliefs that mix Hindu and Buddhist myths and legends.",
        "heroImage": "/locations/heritage/candi-jago/cover.webp",
        "basicInfo": {
          "location": "Candi Jago, Malang, Jawa Timur",
          "hours": "08:00 – 17:00 WIB",
          "price": "Rp 10.000 (Weekday) / Rp 15.000 (Weekend)",
          "rating": "4.5/5",
          "category": "Historical Temple / Archaeological Site"
        },
        "gallery": [
          "/locations/heritage/candi-jago/cover.webp"
        ],
        "story": "Constructed in 1268 AD as a shrine for King Vishnuwardhana, Candi Jago features a unique step-pyramid terrace design mixing Tantric Buddhist and Hindu elements. It is famous for its intricate, two-dimensional 'Wayang Kulit' style stone reliefs. These carvings tell epic moral tales, including the journey of Kunjarakarna, meant to be read by walking counter-clockwise.",
        "keyAttractions": [
          {
            "title": "Kala Ornament",
            "desc": "Intricate stone carvings of Kala faces and mythical creatures adorning the corners of the temple's terraces.",
            "image": "/locations/heritage/candi-jago/ornamen-kala.webp"
          },
          {
            "title": "Temple Reliefs",
            "desc": "Unique Wayang-style reliefs carved into the temple base, depicting the Buddhist story of Kunjarakarna's journey.",
            "image": "/locations/heritage/candi-jago/relief-candi.webp"
          },
          {
            "title": "Front Facade",
            "desc": "The unique multi-tiered step-pyramid terrace facade, showcasing a blend of Hindu and Buddhist architectural elements.",
            "image": "/locations/heritage/candi-jago/tampak-depan.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Wayang Relief Walk",
            "desc": "Follow the counter-clockwise path around the temple base to read the unique Wayang-style stone reliefs telling the story of Kunjarakarna.",
            "difficulty": "Easy",
            "image": "/locations/heritage/candi-jago/relief-candi.webp"
          },
          {
            "title": "Temple Terrace Photography",
            "desc": "Capture the unique multi-tiered step-pyramid terrace facade showcasing a blend of Hindu and Buddhist architectural elements.",
            "difficulty": "Easy",
            "image": "/locations/heritage/candi-jago/tampak-depan.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Morning hours when the sun illuminates the west-facing wayang reliefs.",
          "bring": [
            "Camera",
            "Notebook"
          ],
          "avoid": [
            "Stepping on loose terrace stones"
          ],
          "insiderTips": [
            "Read the reliefs from bottom to top in a counter-clockwise direction (Pradaksina) as ancients did."
          ]
        },
        "tips": [
          "Follow the counter-clockwise path around the base to read the wayang stone stories."
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Soft Light",
            "label": "Morning",
            "value": "08:00 – 10:30 WIB",
            "color": "#EF9F27",
            "intensity": "85%"
          },
          {
            "icon": "calendar",
            "badge": "Dry Season",
            "label": "May – October",
            "value": "Low humidity, ideal for reliefs",
            "color": "#378ADD",
            "intensity": "65%"
          }
        ],
        "location": {
          "lat": -8.0058,
          "lng": 112.7641
        },
        "funFacts": [
          "Built in 1268 AD, Candi Jago combines Tantric Buddhist and Hindu architecture in a unique step-pyramid design.",
          "Its stone reliefs are drawn in the two-dimensional 'Wayang Kulit' puppet art style, unique to East Javanese temples.",
          "Uniquely built in a terraced style (punden berundak), Candi Jago exhibits a mixture of Buddhist and Hindu relief carvings, depicting stories like the Kunjarakarna and Mahabharata."
        ],
        "closingCTA": "Explore the unique step-pyramid terraces and wayang-style stone reliefs of Candi Jago."
      },
      {
        "title": "Museum Musik Indonesia",
        "tagline": "A unique, independent archive celebrating the rich history of Indonesian music from traditional to modern pop",
        "description": "A unique, independent archive celebrating the rich history of Indonesian music from traditional to modern pop.",
        "heroImage": "/locations/heritage/museum-music-indonesia/cover.webp",
        "basicInfo": {
          "location": "Museum Musik Indonesia, Malang, Jawa Timur",
          "hours": "10:00 – 17:00 WIB (Tuesday – Sunday)",
          "price": "Rp 10.000 / person (includes one vinyl record play session)",
          "rating": "4.5/5",
          "category": "Music Museum / Cultural Archive"
        },
        "gallery": [
          "/locations/heritage/museum-music-indonesia/cover.webp"
        ],
        "story": "Originally started as an independent gallery in 2009, the Museum Musik Indonesia is the nation's premier archive of musical history. It houses over 25,000 items, including rare vinyl records, cassettes, and traditional ethnic instruments from all over the archipelago. It stands as a vital cultural institution preserving a century of Indonesian soundscapes.",
        "keyAttractions": [
          {
            "title": "Music Corridor",
            "desc": "A timeline corridor documenting the evolution of Indonesian popular music and famous national artists.",
            "image": "/locations/heritage/museum-music-indonesia/koridor-musik.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Instrument Gallery",
            "desc": "Take a scenic walk and appreciate the historical value of the Galeri Alat Musik area.",
            "difficulty": "Easy",
            "image": "/locations/heritage/museum-music-indonesia/galeri-alat-musik.webp"
          },
          {
            "title": "Vinyl Collection",
            "desc": "Take a scenic walk and appreciate the historical value of the Koleksi Vinyl area.",
            "difficulty": "Easy",
            "image": "/locations/heritage/museum-music-indonesia/koleksi-vinyl.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Afternoon for quiet listening sessions.",
          "bring": [
            "Headphones",
            "Camera"
          ],
          "avoid": [
            "Handling rare vintage vinyl records without staff guidance"
          ],
          "insiderTips": [
            "You can request staff to play digitized tracks of ultra-rare 1960s Indonesian pop vinyls."
          ]
        },
        "tips": [
          "Ask the curator to demonstrate rare traditional instruments from outside Java."
        ],
        "bestTime": [
          {
            "icon": "sun",
            "badge": "Peak Hours",
            "label": "Morning",
            "value": "09:00 – 12:00 WIB",
            "color": "#A3B18A",
            "intensity": "80%"
          },
          {
            "icon": "calendar",
            "badge": "Weekday",
            "label": "Tue – Sun",
            "value": "Quieter, more guide availability",
            "color": "#378ADD",
            "intensity": "55%"
          }
        ],
        "location": {
          "lat": -7.98798,
          "lng": 112.62664
        },
        "funFacts": [
          "It is the first and only officially recognized music museum in Indonesia, housing over 25,000 physical media items.",
          "The collection includes rare recordings from every Indonesian province and traditional ethnic music archives.",
          "It is the only official music museum in Indonesia, housing a massive collection of over 20,000 physical music records, cassettes, vinyls, and instruments."
        ],
        "closingCTA": "Journey through a century of Indonesian sound, song, and musical heritage."
      },
      {
        "title": "Museum Brawijaya",
        "tagline": "Essential for history enthusiasts",
        "description": "Essential for history enthusiasts. Documents East Java's military history and the struggle for Indonesian independence.",
        "heroImage": "/locations/heritage/museum-brawijaya/cover.webp",
        "basicInfo": {
          "location": "Museum Brawijaya, Malang, Jawa Timur",
          "hours": "08:00 – 15:00 WIB",
          "price": "Rp 5.000 (Adult) / Rp 3.000 (Child)",
          "rating": "4.5/5",
          "category": "Military History Museum"
        },
        "gallery": [
          "/locations/heritage/museum-brawijaya/cover.webp"
        ],
        "story": "Established in 1968, Museum Brawijaya chronicles the grueling military history of East Java during the Indonesian National Revolution. Its most harrowing artifact is the 'Gerbong Maut' (Death Wagon), a freight car where dozens of captured freedom fighters tragically suffocated in 1947. The museum offers a sobering, deeply moving look at the price of independence.",
        "keyAttractions": [
          {
            "title": "Death Carriage",
            "desc": "The historic freight car where 100 Indonesian freedom fighters were locked in by the Dutch, leading to tragic deaths.",
            "image": "/locations/heritage/museum-brawijaya/gerbong-maut.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "War Vehicles",
            "desc": "Take a scenic walk and appreciate the historical value of the Koleksi Kendaraan Perang area.",
            "difficulty": "Easy",
            "image": "/locations/heritage/museum-brawijaya/koleksi-kendaraan-perang.webp"
          },
          {
            "title": "Weapons Collection",
            "desc": "Take a scenic walk and appreciate the historical value of the Koleksi Senjata area.",
            "difficulty": "Easy",
            "image": "/locations/heritage/museum-brawijaya/koleksi-senjata.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Morning hours before school tour groups arrive.",
          "bring": [
            "Camera",
            "Notebook"
          ],
          "avoid": [
            "Touching or climbing on vintage military weapons and tanks"
          ],
          "insiderTips": [
            "Visit the rear courtyard to view the 'Gerbong Maut' and the historic naval patrol boat."
          ]
        },
        "tips": [
          "Pay quiet respect when viewing the historic 'Gerbong Maut' carriage in the courtyard."
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Opening Hours",
            "label": "Morning",
            "value": "08:00 – 11:30 WIB",
            "color": "#EF9F27",
            "intensity": "85%"
          },
          {
            "icon": "calendar",
            "badge": "Weekday",
            "label": "Mon – Thu",
            "value": "Quieter, guides available",
            "color": "#378ADD",
            "intensity": "55%"
          }
        ],
        "location": {
          "lat": -7.97203,
          "lng": 112.62089
        },
        "funFacts": [
          "Museum Brawijaya houses the famous 'Gerbong Maut' (Death Carriage), a grim reminder of the 1947 independence struggle.",
          "The outdoor plaza displays original tanks and cannons captured during wartime operations.",
          "The museum houses the infamous 'Gerbong Maut' (Death Car), a railway cargo container used by Dutch forces to transport 100 Indonesian prisoners, resulting in 46 deaths."
        ],
        "closingCTA": "Experience the heroic struggle for Indonesian independence through authentic wartime relics."
      }
    ]
  },
  "culinary": {
    "title": "Culinary",
    "description": "Savor the rich local flavors of Malang, from legendary street food to heritage cafes and cozy hangout spots.",
    "places": [
      {
        "title": "Toko Oen",
        "tagline": "Step back into the 1930s",
        "description": "Step back into the 1930s. A legendary colonial restaurant serving world-famous homemade ice cream and Dutch-Indonesian pastries.",
        "heroImage": "/locations/culinary/toko-oen/cover.webp",
        "basicInfo": {
          "location": "Toko Oen, Malang, Jawa Timur",
          "hours": "08:00 – 20:00 WIB",
          "price": "Rp 35.000 – Rp 95.000",
          "rating": "4.5/5",
          "category": "Colonial Restaurant / Dessert Shop"
        },
        "gallery": [
          "/locations/culinary/toko-oen/cover.webp"
        ],
        "story": "Opening its Malang branch in 1930, Toko Oen is an enduring culinary relic of the Dutch East Indies era. It famously retains its original 1930s interior, from the rattan chairs to the antique Italian ice cream churners. Serving classic homemade ice cream and Dutch-Indonesian pastries, it offers a nostalgic taste of colonial-era leisure.",
        "keyAttractions": [
          {
            "title": "Vintage Dining Room",
            "desc": "A grand dining hall decorated with classic rattan chairs, retro photographs, and high colonial ceilings.",
            "image": "/locations/culinary/toko-oen/bitterballen.webp"
          },
          {
            "title": "Ice Cream Bar",
            "desc": "The original marble counter serving homemade ice creams since the 1930s.",
            "image": "/locations/culinary/toko-oen/ice-cream.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Tasting Classic Ice Cream",
            "desc": "Try Toko Oen's famous ice cream symphony or classic Tutti Frutti scoops made with their original 1930s recipe.",
            "difficulty": "Easy",
            "image": "/locations/culinary/toko-oen/steak-lidah-sapi.webp"
          },
          {
            "title": "Sampling Dutch Pastries",
            "desc": "Enjoy traditional Dutch pastries such as Speculaas, Bitterballen, and Apple Strudel.",
            "difficulty": "Easy",
            "image": "/locations/culinary/toko-oen/bitterballen.webp"
          }
        ],
        "tips": [
          "Try their signature chocolate ice cream scoops",
          "Check out the antique furniture and colonial pictures on the walls"
        ],
        "location": {
          "lat": -7.9776,
          "lng": 112.6311
        },
        "priceRange": "Rp 35.000 - Rp 95.000",
        "ambience": "1930s Dutch-Colonial Nostalgic Vibe",
        "paymentMethods": [
          "QRIS",
          "Cash",
          "Credit Card"
        ],
        "bestFor": "Tasting Legendary Homemade Ice Cream & Dutch Snacks",
        "signatureDishes": [
          {
            "name": "Bitterballen",
            "desc": "Classic Dutch deep-fried breaded balls filled with a thick, savory beef ragout, served with mustard dip.",
            "price": "Rp 35.000",
            "image": "/locations/culinary/toko-oen/bitterballen.webp"
          },
          {
            "name": "Ice Cream",
            "desc": "A traditional platter of five scoops of homemade ice cream made using their original vintage recipes.",
            "price": "Rp 45.000",
            "image": "/locations/culinary/toko-oen/ice-cream.webp"
          },
          {
            "name": "Steak Lidah Sapi",
            "desc": "Tender, slow-cooked ox tongue steak served with a rich, savory brown gravy and local vegetables.",
            "price": "Rp 65.000",
            "image": "/locations/culinary/toko-oen/steak-lidah-sapi.webp"
          }
        ],
        "funFacts": [
          "Toko Oen originally started in Yogyakarta in 1910 before expanding to Semarang and Malang in the 1930s.",
          "The restaurant still uses vintage manual ice cream churning machines from Italy to maintain their authentic texture.",
          "The restaurant retains its original Dutch colonial atmosphere, using 1930s wicker chairs, vintage tableware, and serving ice creams made using recipes unchanged for nearly a century."
        ],
        "visitorTips": {
          "bestTime": "Afternoon around 15:00 WIB for a relaxed teatime and dessert experience.",
          "bring": [
            "Camera for retro-themed interior photography",
            "Cash or credit cards"
          ],
          "avoid": [
            "Avoid peak Sunday lunch hours as the main dining room can get crowded"
          ],
          "insiderTips": [
            "Look at the vintage piano in the dining room, which has been in the restaurant since it first opened."
          ]
        },
        "closingCTA": "Experience the timeless charm of the 1930s with colonial Javanese architecture and legendary homemade ice cream!"
      },
      {
        "title": "Bakso President",
        "tagline": "The dining experience of a lifetime",
        "description": "The dining experience of a lifetime. Enjoy Malang's most famous meatballs right next to the active railway tracks.",
        "heroImage": "/locations/culinary/bakso-president/cover.webp",
        "basicInfo": {
          "location": "Bakso President, Malang, Jawa Timur",
          "hours": "08:45 – 21:30 WIB",
          "price": "Rp 20.000 – Rp 60.000",
          "rating": "4.5/5",
          "category": "Traditional Street Food / Dining Experience"
        },
        "gallery": [
          "/locations/culinary/bakso-president/cover.webp"
        ],
        "story": "Established in 1977 behind the old President Cinema, this modest food stall has grown into a culinary icon. It is globally famous not just for its authentic Malang-style meatballs, but for its thrilling location directly alongside an active railway line. Diners can savor hot soup while passenger trains rumble past just meters away.",
        "keyAttractions": [
          {
            "title": "Railway Tracks Dining",
            "desc": "Outdoor dining tables set up directly alongside the active railway line, offering a unique thrill.",
            "image": "/locations/culinary/bakso-president/bakso-bakar.webp"
          },
          {
            "title": "Bakso Selection Bar",
            "desc": "A food station displaying a wide variety of meatballs, tofu, fried wontons, and noodles.",
            "image": "/locations/culinary/bakso-president/bakso-komplit.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Dining Beside the Train",
            "desc": "Eat hot bowls of bakso and watch the passenger train rumble directly next to your table.",
            "difficulty": "Easy",
            "image": "/locations/culinary/bakso-president/keripik-bakso.webp"
          },
          {
            "title": "Customizing your Bakso Bowl",
            "desc": "Choose your own combination of fried meatballs, steamed meatballs, and crispy wontons.",
            "difficulty": "Easy",
            "image": "/locations/culinary/bakso-president/bakso-bakar.webp"
          }
        ],
        "tips": [
          "Always check for train warning sirens before standing near the tracks",
          "Order the grilled meatballs (Bakso Bakar) together with the hot soup"
        ],
        "location": {
          "lat": -7.9827,
          "lng": 112.6281
        },
        "priceRange": "Rp 20.000 - Rp 60.000",
        "ambience": "Lively Trackside Food Stall (Sensory Dining)",
        "paymentMethods": [
          "Cash",
          "QRIS"
        ],
        "bestFor": "Eating Bakso persis di pinggir rel kereta api",
        "signatureDishes": [
          {
            "name": "Bakso Bakar",
            "desc": "Grilled meatballs glazed in a savory-sweet, slightly spicy local kecap sauce, incredibly fragrant.",
            "price": "Rp 25.000",
            "image": "/locations/culinary/bakso-president/bakso-bakar.webp"
          },
          {
            "name": "Bakso Komplit",
            "desc": "Classic Malang local dish, cooked to perfection with traditional spices.",
            "price": "Rp 35.000",
            "image": "/locations/culinary/bakso-president/bakso-komplit.webp"
          },
          {
            "name": "Keripik Bakso",
            "desc": "Classic Malang local dish, cooked to perfection with traditional spices.",
            "price": "Rp 35.000",
            "image": "/locations/culinary/bakso-president/keripik-bakso.webp"
          }
        ],
        "funFacts": [
          "The restaurant is named 'President' because it was originally founded behind the old President Cinema in Malang.",
          "Trains pass by just meters away from the dining tables several times a day, making it a globally famous sensory dining spot.",
          "The restaurant is famously located right next to an active railway track, offering diners the unique thrill of eating meatball soup while trains pass inches away."
        ],
        "visitorTips": {
          "bestTime": "Lunch or early evening before the daily soup inventory runs out.",
          "bring": [
            "Camera or smartphone to capture trains passing next to the tables",
            "Cash or QRIS payment app"
          ],
          "avoid": [
            "Do not step onto or stand inside the active railway tracks when trains are approaching"
          ],
          "insiderTips": [
            "The best table for the railway view is at the outdoor terrace closest to the iron fence."
          ]
        },
        "closingCTA": "Taste Malang's most famous meatballs and watch train cars rumble directly next to your dining table!"
      },
      {
        "title": "Rawon Nguling",
        "tagline": "The quintessential black beef soup of East Java",
        "description": "The quintessential black beef soup of East Java. Authentic flavors and tender meat that have been famous for generations.",
        "heroImage": "/locations/culinary/rawon-nguling/cover.webp",
        "basicInfo": {
          "location": "Rawon Nguling, Malang, Jawa Timur",
          "hours": "07:00 – 15:30 WIB",
          "price": "Rp 30.000 – Rp 75.000",
          "rating": "4.5/5",
          "category": "Traditional Javanese Diner"
        },
        "gallery": [
          "/locations/culinary/rawon-nguling/cover.webp"
        ],
        "story": "Originating in the 1940s from the border town of Nguling, this family recipe has become the gold standard for East Javanese rawon. The soup's signature black color and earthy flavor come from the fermented keluak nut. Served with generous cuts of beef and crispy fried lungs, it is a deeply comforting, historic local dish.",
        "keyAttractions": [
          {
            "title": "Rawon Station",
            "desc": "The fast-paced kitchen counter where bowls of hot, black beef soup are freshly prepared.",
            "image": "/locations/culinary/rawon-nguling/nasi-rawon.webp"
          },
          {
            "title": "Side Dishes",
            "desc": "Trays of salted eggs, fried beef lungs (babat/paru), and crispy tempeh.",
            "image": "/locations/culinary/rawon-nguling/paru-goreng.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Savoring Black Beef Soup",
            "desc": "Enjoy Malang's iconic Rawon soup, rich in black keluak nut spice.",
            "difficulty": "Easy",
            "image": "/locations/culinary/rawon-nguling/paru-goreng.webp"
          },
          {
            "title": "Adding Fried Lungs Side",
            "desc": "Pair your rawon with crispy fried lungs, salted egg yolk, and spicy sambal.",
            "difficulty": "Easy",
            "image": "/locations/culinary/rawon-nguling/paru-goreng.webp"
          }
        ],
        "tips": [
          "Try their signature thick-cut beef lung side dish",
          "Pour a spoonful of local spicy sambal for a spicy kick"
        ],
        "location": {
          "lat": -7.984,
          "lng": 112.6305
        },
        "priceRange": "Rp 35.000 - Rp 70.000",
        "ambience": "Bustling, Fast-paced Heritage Eatery",
        "paymentMethods": [
          "Cash",
          "QRIS"
        ],
        "bestFor": "Rich, Herbal Rawon Soup with Crispy Side Dishes",
        "signatureDishes": [
          {
            "name": "Nasi Rawon",
            "desc": "A traditional Javanese dish of steamed rice fully drenched in aromatic black beef rawon soup.",
            "price": "Rp 35.000",
            "image": "/locations/culinary/rawon-nguling/nasi-rawon.webp"
          },
          {
            "name": "Paru Goreng",
            "desc": "Crispy, deep-fried beef lungs seasoned with traditional spices, perfect side dish for rawon.",
            "price": "Rp 12.000",
            "image": "/locations/culinary/rawon-nguling/paru-goreng.webp"
          }
        ],
        "funFacts": [
          "Rawon Nguling originated on the border of Probolinggo and Pasuruan before opening their famous branch in Malang.",
          "The dark color of the soup comes from keluak, a tropical seed that must be fermented to remove toxins and unlock its rich flavor.",
          "Famous for its dark, savory broth made with local kluwek nuts, Rawon Nguling has been a culinary staple of the Malang region since its inception in the 1940s."
        ],
        "visitorTips": {
          "bestTime": "Breakfast or early lunch as they close early in the afternoon.",
          "bring": [
            "Cash",
            "Hand wipes"
          ],
          "avoid": [
            "Avoid arriving after 14:00 WIB as popular side dishes like beef lung and brains might be sold out"
          ],
          "insiderTips": [
            "Pair your rawon with their signature thick-cut fried beef lung for the ultimate local combination."
          ]
        },
        "closingCTA": "Savor the rich, dark beef rawon soup that has defined East Javanese comfort food for generations!"
      },
      {
        "title": "Rawon Rampal",
        "tagline": "A historic rawon stall frequented by presidents",
        "description": "A historic rawon stall frequented by presidents. Pure, robust flavors cooked with traditional charcoal fires.",
        "heroImage": "/locations/culinary/rawon-rampal/cover.webp",
        "basicInfo": {
          "location": "Rawon Rampal, Malang, Jawa Timur",
          "hours": "07:00 – 14:00 WIB",
          "price": "Rp 35.000 – Rp 80.000",
          "rating": "4.5/5",
          "category": "Wood-Fired Heritage Diner"
        },
        "gallery": [
          "/locations/culinary/rawon-rampal/cover.webp"
        ],
        "story": "Founded in 1957, Rawon Rampal is legendary for maintaining its traditional cooking methods, slow-boiling its rich beef broth exclusively over wood and charcoal fires. This imparts a unique, smoky depth to the soup that modern stoves cannot replicate. Its uncompromising flavor has made it a favorite dining spot for Indonesian presidents and national figures.",
        "keyAttractions": [
          {
            "title": "Charcoal Kitchen",
            "desc": "The open kitchen where large rawon pots are cooked slowly over traditional charcoal fires.",
            "image": "/locations/culinary/rawon-rampal/nasi-pecel.webp"
          },
          {
            "title": "Historic Dining Hall",
            "desc": "A simple, heritage dining space filled with photos of old Malang.",
            "image": "/locations/culinary/rawon-rampal/nasi-rawon.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Charcoal Cooked Rawon Tasting",
            "desc": "Enjoy rawon with a distinct, smoky flavor developed from slow charcoal cooking.",
            "difficulty": "Easy",
            "image": "/locations/culinary/rawon-rampal/soto-daging.webp"
          },
          {
            "title": "Savoring Sweet Beef Empal",
            "desc": "Try the famous sweet and savory beef empal side dish.",
            "difficulty": "Easy",
            "image": "/locations/culinary/rawon-rampal/nasi-rawon.webp"
          }
        ],
        "tips": [
          "Order the Empal cutlet as a side dish",
          "Arrive early before 11:00 WIB"
        ],
        "location": {
          "lat": -8.0023,
          "lng": 112.6345
        },
        "priceRange": "Rp 40.000 - Rp 80.000",
        "ambience": "Rustic, Traditional Open Kitchen with Charcoal Fires",
        "paymentMethods": [
          "Cash",
          "QRIS"
        ],
        "bestFor": "Slow-Cooked Charcoal Rawon (Smoky Flavor)",
        "signatureDishes": [
          {
            "name": "Nasi Pecel",
            "desc": "A house specialty dish, prepared fresh using premium local ingredients and a traditional recipe.",
            "price": "Rp 35.000",
            "image": "/locations/culinary/rawon-rampal/nasi-pecel.webp"
          },
          {
            "name": "Nasi Rawon",
            "desc": "Classic Malang local dish, cooked to perfection with traditional spices.",
            "price": "Rp 35.000",
            "image": "/locations/culinary/rawon-rampal/nasi-rawon.webp"
          },
          {
            "name": "Soto Daging",
            "desc": "A house specialty dish, prepared fresh using premium local ingredients and a traditional recipe.",
            "price": "Rp 35.000",
            "image": "/locations/culinary/rawon-rampal/soto-daging.webp"
          }
        ],
        "funFacts": [
          "Founded in 1957 by Mbah Muji, Rawon Rampal still uses traditional wood-burning stoves to cook its soup broth.",
          "President Indonesia Sukarno and subsequent presidents have famously dined at this heritage rawon stall.",
          "The restaurant has been cooking its signature beef soup over traditional charcoal burners since 1957, preserving a smoky flavor that modern gas stoves cannot replicate."
        ],
        "visitorTips": {
          "bestTime": "Morning between 07:30 and 10:00 WIB for fresh, hot wood-fired rawon broth.",
          "bring": [
            "Cash"
          ],
          "avoid": [
            "Do not wait until noon as the beef rawon and signature empal sell out quickly"
          ],
          "insiderTips": [
            "Former Indonesian presidents and national figures frequently visit this humble wood-fired diner."
          ]
        },
        "closingCTA": "Taste the legendary wood-fired rawon that has won the hearts of presidents and food lovers since 1957!"
      },
      {
        "title": "Madam Wang Secret Garden",
        "tagline": "A whimsical, hidden gem featuring a lush garden interior and artisanal pasta, perfect for a cozy afternoon escape",
        "description": "A whimsical, hidden gem featuring a lush garden interior and artisanal pasta, perfect for a cozy afternoon escape.",
        "heroImage": "/locations/culinary/madam-wang-secret-garden/cover.webp",
        "basicInfo": {
          "location": "Madam Wang Secret Garden, Malang, Jawa Timur",
          "hours": "10:00 – 21:00 WIB",
          "price": "Rp 35.000 – Rp 110.000",
          "rating": "4.5/5",
          "category": "Garden Cafe / Fusion & Heritage Dining"
        },
        "gallery": [
          "/locations/culinary/madam-wang-secret-garden/cover.webp"
        ],
        "story": "Madam Wang Secret Garden is a whimsical boutique cafe known for its lush, glasshouse garden dining area. Blending vintage European aesthetics with local craftsmanship, it also supports local female weavers through its attached boutique. The cafe is celebrated for its cozy afternoon tea atmosphere and creative fusion menu.",
        "keyAttractions": [
          {
            "title": "Garden Pavilions",
            "desc": "A beautiful, secluded greenhouse garden dining area filled with plants and flowers.",
            "image": "/locations/culinary/madam-wang-secret-garden/bingsoo.webp"
          },
          {
            "title": "Boutique Room",
            "desc": "An indoor dining salon showcasing unique vintage crafts and boutique clothes.",
            "image": "/locations/culinary/madam-wang-secret-garden/nasi-goreng.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Garden Afternoon Tea",
            "desc": "Sip herbal teas and enjoy homemade cakes in the quiet backyard greenhouse.",
            "difficulty": "Easy",
            "image": "/locations/culinary/madam-wang-secret-garden/salad.webp"
          },
          {
            "title": "Creative Photography",
            "desc": "Capture photos in the colorful, glass-walled garden booths.",
            "difficulty": "Easy",
            "image": "/locations/culinary/madam-wang-secret-garden/salad.webp"
          }
        ],
        "tips": [
          "Try their signature Gudeg Jogja or Rendang Pizza",
          "Order a teapot of floral herbal tea"
        ],
        "location": {
          "lat": -7.97,
          "lng": 112.619
        },
        "priceRange": "Rp 25.000 - Rp 70.000",
        "ambience": "Lush Greenhouse Garden Vibe, Quiet & Secluded",
        "paymentMethods": [
          "QRIS",
          "Cash",
          "Debit Card"
        ],
        "bestFor": "Garden Tea Parties & Instagrammable Photos",
        "signatureDishes": [
          {
            "name": "Bingsoo",
            "desc": "Delicious signature dessert, sweet and perfect for pairing with coffee.",
            "price": "Rp 32.000",
            "image": "/locations/culinary/madam-wang-secret-garden/bingsoo.webp"
          },
          {
            "name": "Nasi Goreng",
            "desc": "Signature green-chili spiced fried rice served with sunny-side-up eggs, pickles, and chicken satay.",
            "price": "Rp 38.000",
            "image": "/locations/culinary/madam-wang-secret-garden/nasi-goreng.webp"
          },
          {
            "name": "Salad",
            "desc": "A house specialty dish, prepared fresh using premium local ingredients and a traditional recipe.",
            "price": "Rp 35.000",
            "image": "/locations/culinary/madam-wang-secret-garden/salad.webp"
          }
        ],
        "funFacts": [
          "The venue doubles as an artisan boutique supporting local women crafters and traditional weavers in East Java.",
          "The greenhouse garden houses over 50 varieties of tropical plants and succulents.",
          "In addition to its eclectic garden dining areas, the cafe features a hidden vintage boutique and a cozy indoor room decorated with colorful hand-woven threads."
        ],
        "visitorTips": {
          "bestTime": "Late afternoon around 16:30 WIB for high tea in the sunlit greenhouse.",
          "bring": [
            "Camera for botanical garden photos",
            "Credit card or QRIS"
          ],
          "avoid": [
            "Avoid peak weekend dinner hours without a reservation"
          ],
          "insiderTips": [
            "Sit near the rear glasshouse area for the best natural lighting and plant backdrops."
          ]
        },
        "closingCTA": "Unwind in a hidden greenhouse garden while enjoying gourmet fusion cuisine and floral teas!"
      },
      {
        "title": "Taman Indie Resto",
        "tagline": "Dine alongside the Brantas river in traditional Javanese pavilions",
        "description": "Dine alongside the Brantas river in traditional Javanese pavilions. A serene atmosphere focused on classic local heritage dishes.",
        "heroImage": "/locations/culinary/taman-indie-resto/cover.webp",
        "basicInfo": {
          "location": "Taman Indie Resto, Malang, Jawa Timur",
          "hours": "10:00 – 21:00 WIB",
          "price": "Rp 50.000 – Rp 150.000",
          "rating": "4.5/5",
          "category": "Riverside Heritage Restaurant"
        },
        "gallery": [
          "/locations/culinary/taman-indie-resto/cover.webp"
        ],
        "story": "Set on the banks of the historic Bango River, Taman Indie provides a premium traditional Javanese dining experience. The restaurant's architecture utilizes authentic reclaimed teak wood to form grand Joglo pavilions and intimate riverside gazebos (saung). It beautifully captures the essence of a serene, rural Javanese village in the modern era.",
        "keyAttractions": [
          {
            "title": "Riverside Gazebos",
            "desc": "Traditional open-air wooden gazebos situated directly alongside the flowing Brantas River.",
            "image": "/locations/culinary/taman-indie-resto/nasi-buk-madura.webp"
          },
          {
            "title": "Antique Joglo",
            "desc": "The main dining hall built inside a massive, beautifully carved teak Joglo house.",
            "image": "/locations/culinary/taman-indie-resto/nasi-campur-bali.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Riverside Javanese Dining",
            "desc": "Enjoy traditional Javanese meals while listening to the river flow.",
            "difficulty": "Easy",
            "image": "/locations/culinary/taman-indie-resto/nasi-tempong.webp"
          },
          {
            "title": "Exploring the Gardens",
            "desc": "Walk through the large, well-manicured tropical gardens surrounding the pavilions.",
            "difficulty": "Easy",
            "image": "/locations/culinary/taman-indie-resto/nasi-tempong.webp"
          }
        ],
        "tips": [
          "Reserve a riverside gazebo (saung) in advance",
          "Try their signature Gurame Bakar charcoal grilled fish"
        ],
        "location": {
          "lat": -7.9395,
          "lng": 112.6646
        },
        "priceRange": "Rp 50.000 - Rp 150.000",
        "ambience": "Riverside Open-air Gazebos in Tropical Gardens",
        "paymentMethods": [
          "QRIS",
          "Debit Card",
          "Credit Card",
          "Cash"
        ],
        "bestFor": "Family Get-togethers & Traditional Javanese Dinings",
        "signatureDishes": [
          {
            "name": "Nasi Buk Madura",
            "desc": "A house specialty dish, prepared fresh using premium local ingredients and a traditional recipe.",
            "price": "Rp 35.000",
            "image": "/locations/culinary/taman-indie-resto/nasi-buk-madura.webp"
          },
          {
            "name": "Nasi Campur Bali",
            "desc": "A house specialty dish, prepared fresh using premium local ingredients and a traditional recipe.",
            "price": "Rp 35.000",
            "image": "/locations/culinary/taman-indie-resto/nasi-campur-bali.webp"
          },
          {
            "name": "Nasi Tempong",
            "desc": "A house specialty dish, prepared fresh using premium local ingredients and a traditional recipe.",
            "price": "Rp 35.000",
            "image": "/locations/culinary/taman-indie-resto/nasi-tempong.webp"
          }
        ],
        "funFacts": [
          "Taman Indie was built with authentic reclaimed teak wood from traditional Javanese Limasan houses.",
          "The restaurant overlooks the historic Bango River, which has flowed through Malang since ancient Singhasari times.",
          "The restaurant is designed as an open-air Javanese village, featuring traditional wooden gazebos set along the banks of the scenic Bango River."
        ],
        "visitorTips": {
          "bestTime": "Sunset around 17:30 WIB to experience romantic lighting along the riverbank.",
          "bring": [
            "Camera for scenic landscape shots",
            "Insect repellent for evening outdoor dining"
          ],
          "avoid": [
            "Avoid arriving without a gazebo reservation during weekend family lunch hours"
          ],
          "insiderTips": [
            "Book Gazebo #5 or #6 for the best uninterrupted view of the Bango River rapids."
          ]
        },
        "closingCTA": "Experience authentic Javanese fine dining in private riverside gazebos surrounded by lush tropical nature!"
      },
      {
        "title": "Java Dancer Coffee",
        "tagline": "Pioneering specialty coffee in Malang",
        "description": "Pioneering specialty coffee in Malang. Enjoy authentic Indonesian beans in a beautiful Javanese-themed wooden joglo.",
        "heroImage": "/locations/culinary/java-dancer-coffee/cover.webp",
        "basicInfo": {
          "location": "Java Dancer Coffee, Malang, Jawa Timur",
          "hours": "08:00 – 23:00 WIB",
          "price": "Rp 30.000 – Rp 85.000",
          "rating": "4.5/5",
          "category": "Heritage Coffee Shop / Specialty Roastery"
        },
        "gallery": [
          "/locations/culinary/java-dancer-coffee/cover.webp"
        ],
        "story": "Opening in 2008, Java Dancer was a pioneer of the specialty coffee movement in Malang. It distinguishes itself by celebrating Indonesian single-origin beans within a beautiful, traditional Javanese wooden Joglo setting. The cafe's atmosphere is rich with cultural elements, featuring Wayang shadow puppet aesthetics and local wood carvings.",
        "keyAttractions": [
          {
            "title": "Joglo Pavilion",
            "desc": "A quiet, open-air wooden pavilion featuring traditional Javanese carvings.",
            "image": "/locations/culinary/java-dancer-coffee/affogato.webp"
          },
          {
            "title": "Coffee Bar",
            "desc": "A modern bar showcasing manual brewing equipment and single-origin beans.",
            "image": "/locations/culinary/java-dancer-coffee/manual-brew.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Manual Brew Tasting",
            "desc": "Sample premium Indonesian single-origin coffees brewed using V60 or Syphon.",
            "difficulty": "Easy",
            "image": "/locations/culinary/java-dancer-coffee/sop-buntut.webp"
          },
          {
            "title": "Remote Working",
            "desc": "Connect to the Wi-Fi and work in the comfortable, quiet wooden booths.",
            "difficulty": "Easy",
            "image": "/locations/culinary/java-dancer-coffee/affogato.webp"
          }
        ],
        "tips": [
          "Try their signature Arabica Java estate pour-over",
          "Order the cheese-topped fried bananas"
        ],
        "location": {
          "lat": -7.966,
          "lng": 112.623
        },
        "priceRange": "Rp 25.000 - Rp 55.000",
        "ambience": "Traditional Javanese Joglo, Rustic & Quiet",
        "paymentMethods": [
          "QRIS",
          "Cash",
          "Credit Card"
        ],
        "bestFor": "Specialty Single-Origin Coffee Tastings",
        "signatureDishes": [
          {
            "name": "Affogato",
            "desc": "A house specialty dish, prepared fresh using premium local ingredients and a traditional recipe.",
            "price": "Rp 35.000",
            "image": "/locations/culinary/java-dancer-coffee/affogato.webp"
          },
          {
            "name": "Manual Brew",
            "desc": "Specialty brewed beverage using selected local single-origin beans.",
            "price": "Rp 28.000",
            "image": "/locations/culinary/java-dancer-coffee/manual-brew.webp"
          },
          {
            "name": "Sop Buntut",
            "desc": "Slow-cooked beef specialty served with rich broth and fresh herbs.",
            "price": "Rp 65.000",
            "image": "/locations/culinary/java-dancer-coffee/sop-buntut.webp"
          }
        ],
        "funFacts": [
          "Java Dancer Coffee was one of the pioneers of specialty coffee roasteries in Malang, celebrating Indonesian bean origins.",
          "The interior design is heavily inspired by classical Javanese wayang theater and teak craftsmanship.",
          "Established in 2008, Java Dancer is a pioneer of specialty coffee shops in Malang, decorated with classic Javanese puppet characters (Wayang)."
        ],
        "visitorTips": {
          "bestTime": "Morning for fresh coffee or late night for a relaxed hangout.",
          "bring": [
            "Laptop or book for a cozy work session",
            "Cash or QRIS"
          ],
          "avoid": [
            "Avoid peak evening hours if you need a quiet space to work"
          ],
          "insiderTips": [
            "Ask the barista for recommendations on single-origin pour-overs based on your preferred acidity level."
          ]
        },
        "closingCTA": "Savor artisanal single-origin Indonesian coffee in a warm, wayang-inspired heritage cafe!"
      },
      {
        "title": "Cafe Litchi",
        "tagline": "Mediterranean vibes in the heart of Malang",
        "description": "Mediterranean vibes in the heart of Malang. Modern aesthetics, refreshing drinks, and one of the most Instagrammable spots in town.",
        "heroImage": "/locations/culinary/cafe-litchi/cover.webp",
        "basicInfo": {
          "location": "Cafe Litchi, Malang, Jawa Timur",
          "hours": "10:00 – 22:00 WIB",
          "price": "Rp 35.000 – Rp 110.000",
          "rating": "4.5/5",
          "category": "Mediterranean Cafe / Poolside Brunch Spot"
        },
        "gallery": [
          "/locations/culinary/cafe-litchi/cover.webp"
        ],
        "story": "Cafe Litchi brings a bright, Mediterranean beach-club aesthetic to the cool highlands of Malang. Featuring white Santorini-style walls, tropical plants, and a central turquoise pool, it is one of the city's most visually stunning hangout spots. It has quickly become a favorite for modern brunch dates and social media photography.",
        "keyAttractions": [
          {
            "title": "Poolside Deck",
            "desc": "A gorgeous outdoor dining deck decorated in white plaster and light wood, surrounding a small pool.",
            "image": "/locations/culinary/cafe-litchi/chicken-grill-pesto.webp"
          },
          {
            "title": "Cozy Nooks",
            "desc": "Indoor booths equipped with charging outlets and comfortable seating.",
            "image": "/locations/culinary/cafe-litchi/pizza.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Poolside Brunch",
            "desc": "Enjoy aesthetic smoothies, breakfast bowls, and Western-Asian fusion dishes.",
            "difficulty": "Easy",
            "image": "/locations/culinary/cafe-litchi/tiramisu.webp"
          },
          {
            "title": "Social Media Photography",
            "desc": "Take bright, summery photos in the Mediterranean-themed corners.",
            "difficulty": "Easy",
            "image": "/locations/culinary/cafe-litchi/pizza.webp"
          }
        ],
        "tips": [
          "Wear bright summer clothing for the best photos against the white Santorini walls",
          "Order their refreshing signature Lychee Iced Tea"
        ],
        "location": {
          "lat": -7.9747,
          "lng": 112.6133
        },
        "priceRange": "Rp 30.000 - Rp 80.000",
        "ambience": "Mediterranean Beach-club Vibe with Swimming Pool",
        "paymentMethods": [
          "QRIS",
          "Debit Card",
          "Credit Card"
        ],
        "bestFor": "Aesthetic Brunch & Social Media Photos",
        "signatureDishes": [
          {
            "name": "Chicken Grill Pesto",
            "desc": "Freshly baked and grilled specialty plate, seasoned with aromatic herbs.",
            "price": "Rp 55.000",
            "image": "/locations/culinary/cafe-litchi/chicken-grill-pesto.webp"
          },
          {
            "name": "Pizza",
            "desc": "Freshly baked and grilled specialty plate, seasoned with aromatic herbs.",
            "price": "Rp 55.000",
            "image": "/locations/culinary/cafe-litchi/pizza.webp"
          },
          {
            "name": "Tiramisu",
            "desc": "Delicious signature dessert, sweet and perfect for pairing with coffee.",
            "price": "Rp 32.000",
            "image": "/locations/culinary/cafe-litchi/tiramisu.webp"
          }
        ],
        "funFacts": [
          "Cafe Litchi brings a piece of Santorini Greece and Bali vibes right into the heart of Malang City.",
          "The central turquoise pool is surrounded by tropical flora specially curated for photogenic lighting.",
          "The cafe's unique architecture is inspired by Mediterranean beach clubs, featuring whitewashed plaster walls, a central pool, and lush palm trees."
        ],
        "visitorTips": {
          "bestTime": "Sunny morning between 10:00 and 11:30 WIB for the brightest natural light and pool reflections.",
          "bring": [
            "Camera or smartphone",
            "Sunglasses and summer outfits"
          ],
          "avoid": [
            "Avoid arriving during heavy afternoon rain as the best photogenic spots are outdoors"
          ],
          "insiderTips": [
            "The poolside outdoor tables have the best natural sunlight for food and portrait photos."
          ]
        },
        "closingCTA": "Step into a sunny Mediterranean paradise and enjoy poolside brunch and tropical drinks!"
      },
      {
        "title": "Pecel Kawi Malang Hj Musilah",
        "tagline": "Legendary Javanese Salad Since 1975",
        "description": "Savor authentic Javanese mixed salad with a rich, nutty peanut sauce recipe passed down since 1975, accompanied by traditional Javanese side dishes.",
        "heroImage": "/locations/culinary/pecel-kawi-malang-hj-musilah/cover.webp",
        "basicInfo": {
          "location": "Jl. Kawi No.43B, Bareng, Kec. Klojen, Kota Malang",
          "hours": "06:00 – 20:00 WIB",
          "price": "Rp 15.000 – Rp 40.000",
          "rating": "4.6/5",
          "category": "Heritage Javanese Breakfast Spot"
        },
        "gallery": [
          "/locations/culinary/pecel-kawi-malang-hj-musilah/cover.webp"
        ],
        "story": "Pecel Kawi Hj Musilah was founded in 1975. Starting as a small street-side stall on Jalan Kawi, it has become one of Malang's most famous culinary landmarks, renowned for its thick, spicy, and savory peanut sauce.",
        "keyAttractions": [
          {
            "title": "Peanut Sauce",
            "desc": "A legendary family recipe featuring hand-ground peanuts and a complex blend of aromatic spices.",
            "image": "/locations/culinary/pecel-kawi-malang-hj-musilah/nasi-pecel.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Traditional Breakfast Tasting",
            "desc": "Enjoy a hearty Javanese breakfast of pecel rice served on banana leaves with crispy rempeyek.",
            "difficulty": "Easy",
            "image": "/locations/culinary/pecel-kawi-malang-hj-musilah/nasi-pecel.webp"
          }
        ],
        "tips": [
          "Buy sealed peanut sauce packs as souvenirs",
          "Add crispy Rempeyek peanut crackers for extra crunch"
        ],
        "location": {
          "lat": -7.9782,
          "lng": 112.6234
        },
        "priceRange": "Rp 12.000 - Rp 30.000",
        "ambience": "Casual Family Eatery, Bustling Breakfast Spot",
        "paymentMethods": [
          "Cash",
          "QRIS"
        ],
        "signatureDishes": [
          {
            "name": "Nasi Pecel",
            "desc": "Steamed rice topped with blanched spinach, bean sprouts, and long beans, covered in legendary thick peanut sauce.",
            "price": "Rp 15.000",
            "image": "/locations/culinary/pecel-kawi-malang-hj-musilah/nasi-pecel.webp"
          }
        ],
        "funFacts": [
          "Serving since 1975, Pecel Kawi Hj Musilah is considered the golden benchmark for authentic Malang-style pecel.",
          "Their peanut sauce recipe uses roasted groundnuts blended with kaffir lime leaves and palm sugar without preservatives.",
          "Serving Malang since 1975, the eatery is legendary for its sweet and savory peanut sauce recipe, which is freshly ground daily using local spices."
        ],
        "visitorTips": {
          "bestTime": "Breakfast time between 07:00 and 09:00 WIB for hot fresh rice and peak morning energy.",
          "bring": [
            "Cash"
          ],
          "avoid": [
            "Avoid peak Sunday breakfast rush if you dislike waiting for tables"
          ],
          "insiderTips": [
            "You can purchase their legendary peanut sauce in sealed travel packs to take home as a culinary gift."
          ]
        },
        "closingCTA": "Start your morning like a local with Malang's legendary pecel rice drenched in rich peanut sauce!"
      },
      {
        "title": "Pos Ketan Legenda 1967",
        "tagline": "Malang's Most Iconic Sticky Rice Stall Since 1967",
        "description": "A legendary street food stall offering soft, warm sticky rice topped with unique combinations like grated coconut, durian, and cheese.",
        "heroImage": "/locations/culinary/pos-ketan-legenda-1967/cover.webp",
        "basicInfo": {
          "location": "Jl. Kartini No.6, Ngaglik, Kec. Batu, Kota Batu",
          "hours": "15:00 – 23:00 WIB",
          "price": "Rp 10.000 – Rp 25.000",
          "rating": "4.5/5",
          "category": "Traditional Street Dessert / Snack Stall"
        },
        "gallery": [
          "/locations/culinary/pos-ketan-legenda-1967/cover.webp"
        ],
        "story": "Established in 1967 near Batu Town Square (Alun-Alun Batu), Pos Ketan Legenda started as a simple gathering place for locals. It has since become a famous culinary phenomenon, drawing lines of tourists every evening.",
        "keyAttractions": [
          {
            "title": "Sticky Rice",
            "desc": "A popular night hangout serving warm, fresh sticky rice topped with grated coconut and brown sugar.",
            "image": "/locations/culinary/pos-ketan-legenda-1967/ketan-susu-durian.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Sweet and Savory Sticky Rice Tasting",
            "desc": "Try their diverse toppings, ranging from classic grated coconut to premium durian paste.",
            "difficulty": "Easy",
            "image": "/locations/culinary/pos-ketan-legenda-1967/ketan-susu-durian.webp"
          }
        ],
        "tips": [
          "Order the legendary soybean powder sticky rice for an authentic 1967 taste",
          "Expect long queues during weekend nights and holidays"
        ],
        "location": {
          "lat": -7.8711,
          "lng": 112.5268
        },
        "priceRange": "Rp 8.000 - Rp 25.000",
        "ambience": "Casual Street Stall, Bustling and Lively Night Vibe",
        "paymentMethods": [
          "Cash",
          "QRIS"
        ],
        "signatureDishes": [
          {
            "name": "Ketan Susu Durian",
            "desc": "Warm, premium sticky rice topped with sweet, aromatic durian paste and rich condensed milk.",
            "price": "Rp 18.000",
            "image": "/locations/culinary/pos-ketan-legenda-1967/ketan-susu-durian.webp"
          },
          {
            "name": "Ketan Susu Kacang",
            "desc": "Steamed sticky rice topped with roasted peanuts, grated coconut, and sweet condensed milk.",
            "price": "Rp 10.000",
            "image": "/locations/culinary/pos-ketan-legenda-1967/ketan-susu-kacang.webp"
          }
        ],
        "funFacts": [
          "Established in 1967, it is one of the oldest running street dessert stalls in the Batu highlands.",
          "They use a special variety of high-quality glutinous rice sourced locally to ensure a perfect chewy texture.",
          "Starting as a humble street food stall in 1967, the shop is famous for serving traditional sticky rice topped with sweet grated coconut, powdered soybean, and durian."
        ],
        "visitorTips": {
          "bestTime": "Evening between 19:00 and 21:00 WIB to enjoy the bustling night vibes of Batu town square.",
          "bring": [
            "Cash",
            "Smartphone for photos"
          ],
          "avoid": [
            "Avoid visiting during rainy evenings as seating is mostly outdoors and unprotected"
          ],
          "insiderTips": [
            "The traditional soybean powder with grated coconut (Ketan Bubuk Kelapa) is the original recipe served since 1967."
          ]
        },
        "closingCTA": "Taste Batu's legendary sweet sticky rice and enjoy the cool evening breeze of the town square!"
      }
    ]
  },
  "hidden-gem": {
    "title": "Hidden Gem",
    "description": "Uncover the serene, untouched natural springs, hidden waterfalls, and secret spots in Malang Raya away from the crowds.",
    "places": [
      {
        "title": "Sumber Sirah",
        "tagline": "Snorkeling Under Fresh Crystal Water",
        "description": "Crystal clear freshwater springs. Swim through underwater gardens of river grass and schools of small fish.",
        "heroImage": "/locations/hidden-gem/sumber-sirah/cover.webp",
        "basicInfo": {
          "location": "Gondanglegi Kulon, Gondanglegi, Kabupaten Malang, Jawa Timur",
          "hours": "07:00 – 17:00 WIB",
          "price": "Rp 5.000 / person",
          "rating": "4.5/5",
          "category": "Sumber Mata Air / Kolam Alami"
        },
        "gallery": [
          "/locations/hidden-gem/sumber-sirah/cover.webp"
        ],
        "story": "Sumber Sirah is a hidden natural spring famous for its astonishingly clear water. The water is so transparent that visitors can look down to see green freshwater algae growing like a miniature pine forest on the sandy pool bed, with schools of tiny fish darting among the leaves. The spring is a natural source of irrigation for the surrounding rice paddies and has been kept clean by the local farmers who protect the spring head.",
        "keyAttractions": [
          {
            "title": "Aquatic Plants",
            "desc": "A surreal underwater forest of bright green freshwater algae growing on the sandy bed like miniature pines.",
            "image": "/locations/hidden-gem/sumber-sirah/tanaman-air.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Swimming",
            "desc": "Swim gently in the cool, crystal-clear natural spring pool to appreciate the rich aquatic ecosystem.",
            "difficulty": "Easy",
            "image": "/locations/hidden-gem/sumber-sirah/berenang.webp"
          },
          {
            "title": "Snorkeling",
            "desc": "Snorkel with goggles to observe tiny fish darting among the delicate underwater green algae carpet.",
            "difficulty": "Mudah",
            "image": "/locations/hidden-gem/sumber-sirah/snorkeling.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Matahari berada tepat di atas kepala agar cahaya menyinari ganggang bawah air secara dramatis.",
          "bring": [
            "Kacamata renang atau snorkel",
            "Baju ganti & handuk kering",
            "Pelindung waterproof untuk HP"
          ],
          "avoid": [
            "Dilarang keras menginjak tanaman ganggang hijau di dasar air karena sangat rapuh",
            "Hindari melompat langsung dari tepi karena kolam cukup dangkal di bagian pinggir"
          ],
          "insiderTips": [
            "Datanglah saat matahari bersinar terik di atas kepala agar cahaya menembus air dan menerangi ganggang bawah air secara dramatis."
          ]
        },
        "tips": [
          "Jangan injak tanaman",
          "Bawa kacamata renang untuk snorkeling air tawar"
        ],
        "bestTime": [
          {
            "icon": "☀️",
            "badge": "Clear Water",
            "label": "Morning",
            "value": "08:00 – 11:00 WIB",
            "color": "#1D9E75",
            "intensity": "80%"
          },
          {
            "icon": "🌴",
            "badge": "Dry Season",
            "label": "Musim Kemarau",
            "value": "April – Oktober",
            "color": "#378ADD",
            "intensity": "70%"
          }
        ],
        "funFacts": [
          "Tanaman ganggang air di kolam ini menghasilkan gelembung oksigen segar yang dapat terlihat jelas menempel pada daunnya.",
          "Air dari Sumber Sirah ini langsung dikonsumsi warga lokal setelah melalui penyaringan alami dari batuan karst.",
          "Terdapat penyewaan ban karet ban dalam di lokasi untuk wahana mengambang santai."
        ],
        "closingCTA": "Rasakan kesegaran abadi berenang di taman air tawar bawah laut alami yang tenang dan menyejukkan.",
        "location": {
          "lat": -8.1432,
          "lng": 112.6048
        }
      },
      {
        "title": "Sumber Maron",
        "tagline": "Natural River Springs & Exhilarating River Tubing",
        "description": "A beautiful natural spring surrounded by green rice fields, featuring a gentle waterfall and an active river tubing track popular with locals.",
        "heroImage": "/locations/hidden-gem/sumber-maron/cover.webp",
        "basicInfo": {
          "location": "Pagelaran, Kabupaten Malang, Jawa Timur",
          "hours": "07:00 WIB - 17:00 WIB",
          "price": "Rp 5.000 (Weekday) / Rp 10.000 (Weekend)",
          "rating": "4.6/5",
          "category": "Hidden Gem / Nature / Adventure"
        },
        "gallery": [
          "/locations/hidden-gem/sumber-maron/cover.webp"
        ],
        "story": "Sumber Maron is a refreshing natural spring located in the rural Pagelaran area. Famous for its clear water flowing directly through local rice fields, it offers visitors the chance to float down a natural river on inner tubes, ending near a picturesque half-cascade waterfall.",
        "keyAttractions": [
          {
            "title": "Rice Field View",
            "desc": "Beautiful views of terraced green rice fields lining the banks of the clear, flowing river.",
            "image": "/locations/hidden-gem/sumber-maron/panorama-bersawah.webp"
          },
          {
            "title": "Sumber Maron View",
            "desc": "A wide, gentle 5-meter-high river cascade where water rushes over flat, mossy rocks.",
            "image": "/locations/hidden-gem/sumber-maron/pemandangan-sumber-maron.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "River Tubing",
            "desc": "Rent a rubber inner tube to float down the rushing, clear river currents alongside scenic green rice paddies.",
            "difficulty": "Easy",
            "image": "/locations/hidden-gem/sumber-maron/river-tubing.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Weekday mornings for a quiet, relaxing atmosphere.",
          "bring": [
            "Change of clothes",
            "Waterproof bag",
            "Towel",
            "Cash for rentals"
          ],
          "avoid": [
            "Do not litter in the river",
            "Avoid tubing during sudden heavy rain"
          ],
          "insiderTips": [
            "Tube rentals are very cheap (around Rp 5,000). Get one right at the entrance."
          ]
        },
        "tips": [
          "Changing rooms and lockers are available on-site for a small fee."
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Morning Calm",
            "label": "Morning",
            "value": "07:00 – 10:00 WIB",
            "color": "#EF9F27",
            "intensity": "85%"
          },
          {
            "icon": "calendar",
            "badge": "Dry Season",
            "label": "May – October",
            "value": "Crystal-clear spring water",
            "color": "#378ADD",
            "intensity": "70%"
          }
        ],
        "location": {
          "lat": -8.1652,
          "lng": 112.6283
        },
        "funFacts": [
          "Sumber Maron's water is fed by an underground spring originating from Mount Kawi and flows at a constant temperature of 24°C regardless of the season.",
          "The river cascades that flow through Sumber Maron are surrounded by terraced rice paddies that have been actively farmed by local families for generations.",
          "River tubing at Sumber Maron has gained global recognition, being featured in several international travel blogs as one of Indonesia's top underrated water activities."
        ]
      },
      {
        "title": "Sumber Jenon",
        "tagline": "Luminous Blue Springs & Ancient Fossilized Forests",
        "description": "A mysterious natural spring with a bright turquoise-blue hue, featuring an ancient fossilized tree trunk resting at the bottom of its deep waters.",
        "heroImage": "/locations/hidden-gem/sumber-jenon/cover.webp",
        "basicInfo": {
          "location": "Tajinan, Kabupaten Malang, Jawa Timur",
          "hours": "08:00 WIB - 17:00 WIB",
          "price": "Rp 10.000 / person",
          "rating": "4.5/5",
          "category": "Hidden Gem / Nature / Snorkeling"
        },
        "gallery": [
          "/locations/hidden-gem/sumber-jenon/cover.webp"
        ],
        "story": "Sumber Jenon is a serene, deep-water spring tucked away in the Tajinan district. The spring is legendary for its vibrant blue hue and the ancient, giant tree trunk that has lain fossilized on the pool floor for centuries, creating a fascinating sight for snorkelers.",
        "keyAttractions": [
          {
            "title": "Black Fish",
            "desc": "Observe the ancient, sacred black Sengkaring fish swimming among the submerged fossilized logs.",
            "image": "/locations/hidden-gem/sumber-jenon/ikan-hitam.webp"
          },
          {
            "title": "Natural Pool",
            "desc": "A deep, clear natural freshwater spring pool showing beautiful turquoise and emerald green gradations.",
            "image": "/locations/hidden-gem/sumber-jenon/kolam-alami.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Snorkeling",
            "desc": "Swim and dive in the refreshing, crystal-clear spring waters to see the submerged fossilized tree logs.",
            "difficulty": "Easy",
            "image": "/locations/hidden-gem/sumber-jenon/snorkeling.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Sunny afternoons when the sun shines directly into the water, highlighting the blue color.",
          "bring": [
            "Snorkeling mask & goggles",
            "Towel",
            "Dry bag"
          ],
          "avoid": [
            "Do not step on the ancient log",
            "Avoid diving without checking the depth first"
          ],
          "insiderTips": [
            "Bring your own snorkeling gear as on-site rentals are limited to basic life jackets."
          ]
        },
        "tips": [
          "The pool is quite deep (up to 4 meters in the center). Rent a life jacket if you are not a strong swimmer."
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Morning Serenity",
            "label": "Morning",
            "value": "07:00 – 10:00 WIB",
            "color": "#EF9F27",
            "intensity": "85%"
          },
          {
            "icon": "calendar",
            "badge": "Dry Season",
            "label": "May – October",
            "value": "Clearest water, safest swimming",
            "color": "#378ADD",
            "intensity": "70%"
          }
        ],
        "location": {
          "lat": -8.2045,
          "lng": 112.6879
        },
        "funFacts": [
          "Sumber Jenon's signature feature is a large, submerged fossilized tree trunk visible at 3 meters depth in the clear spring pool — believed by locals to be hundreds of years old.",
          "The sacred black Sengkaring fish that inhabit the spring are protected by local custom and considered guardians of the water source, so catching or harming them is strictly forbidden.",
          "The spring is located in the remote Tajinan district, far from main tourist routes, making it one of the least visited and most pristine natural springs in Malang Regency."
        ]
      },
      {
        "title": "Coban Sumber Pitu Pujon",
        "tagline": "The Seven Sacred Waterfalls of the Pujon Highlands",
        "description": "An extraordinary natural wonder where seven waterfalls cascade side-by-side directly from a vertical, moss-covered green cliff face.",
        "heroImage": "/locations/hidden-gem/coban-sumber-pitu-pujon/cover.webp",
        "basicInfo": {
          "location": "Pujon, Kabupaten Malang, Jawa Timur",
          "hours": "08:00 WIB - 16:00 WIB",
          "price": "Rp 5.000 – Rp 10.000 / person",
          "rating": "4.7/5",
          "category": "Hidden Gem / Nature / Hiking"
        },
        "gallery": [
          "/locations/hidden-gem/coban-sumber-pitu-pujon/cover.webp"
        ],
        "story": "Coban Sumber Pitu (Seven Springs Waterfall) is one of the most spectacular hidden waterfalls in East Java. Located high in the Pujon hills, the water emerges directly from a subterranean spring, bursting out from a mossy cliffside to form seven parallel falls cascading into a lush, misty gorge.",
        "keyAttractions": [
          {
            "title": "Waterfall Stream",
            "desc": "A spectacular wall of water featuring seven distinct streams emerging directly from a lush, mossy cliffside.",
            "image": "/locations/hidden-gem/coban-sumber-pitu-pujon/aliran-air-terjun.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Hiking Trail",
            "desc": "Hike up the steep forest trails and cross shallow streams to reach the hidden cliffside waterfall.",
            "difficulty": "Easy",
            "image": "/locations/hidden-gem/coban-sumber-pitu-pujon/jalur-pendakian.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Dry season mornings. The trail can be very muddy and slippery during the rainy season.",
          "bring": [
            "Sturdy trekking shoes",
            "Raincoat",
            "Extra clothes",
            "Water bottle"
          ],
          "avoid": [
            "Do not trek alone without experience",
            "Avoid throwing trash along the forest trail"
          ],
          "insiderTips": [
            "Hire a local guide at the base if you are unsure of the jungle route."
          ]
        },
        "tips": [
          "Physical fitness is required as the final climb to the falls is steep and demanding."
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Mist & Light",
            "label": "Early Morning",
            "value": "07:00 – 09:30 WIB",
            "color": "#EF9F27",
            "intensity": "90%"
          },
          {
            "icon": "calendar",
            "badge": "Dry Season",
            "label": "May – September",
            "value": "Clear flow, dramatic mist",
            "color": "#378ADD",
            "intensity": "70%"
          }
        ],
        "location": {
          "lat": -7.9278,
          "lng": 112.3551
        },
        "funFacts": [
          "'Sumber Pitu' literally means 'Seven Springs' in Javanese, referring to the seven distinct stream channels that emerge from separate fissures in the mossy cliff wall.",
          "The waterfall is located within the protected Coban Pitu Nature Reserve in Pujon, accessible only by a 2-kilometer forest trek — which keeps the site remarkably pristine.",
          "During the rainy season (November–March), all seven streams merge into a single powerful curtain of water, making it one of the most dramatic waterfalls in Malang Regency."
        ]
      },
      {
        "title": "Pantai Gatra",
        "tagline": "The Protected Reef Islands and Raja Ampat of Malang",
        "description": "A pristine, eco-protected white sand beach dotted with small green coral islands, offering calm waters ideal for canoeing.",
        "heroImage": "/locations/hidden-gem/pantai-gatra/cover.webp",
        "basicInfo": {
          "location": "Sitiarjo, Kabupaten Malang, Jawa Timur",
          "hours": "Open 24 Hours",
          "price": "Rp 10.000 / person",
          "rating": "4.6/5",
          "category": "Hidden Gem / Beach / Canoeing"
        },
        "gallery": [
          "/locations/hidden-gem/pantai-gatra/cover.webp"
        ],
        "story": "Pantai Gatra is a protected conservation beach located in the Clungup Mangrove Conservation area. Protected by a ring of small limestone islands just off the shore, it has calm, wave-free waters that make it a rare beach in Southern Malang where visitors can safely swim and canoe.",
        "keyAttractions": [
          {
            "title": "Mangrove Forest",
            "desc": "A protected green mangrove estuary along the bay, serving as a breeding ground for local marine life.",
            "image": "/locations/hidden-gem/pantai-gatra/hutan-mangrove.webp"
          },
          {
            "title": "Coastal Panorama",
            "desc": "A scenic viewpoint showing the quiet turquoise bay dotted with green karst rocky islets resembling Raja Ampat.",
            "image": "/locations/hidden-gem/pantai-gatra/panorama-pesisir.webp"
          },
          {
            "title": "White Sand Beach",
            "desc": "A clean, peaceful white sand beach with calm waves protected by offshore coral reefs, ideal for swimming.",
            "image": "/locations/hidden-gem/pantai-gatra/pantai-pasir-putih.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Swimming & Snorkeling",
            "desc": "Swim in the calm, wave-free turquoise waters protected by the offshore coral reefs and limestone islets.",
            "difficulty": "Easy",
            "image": "/locations/hidden-gem/pantai-gatra/pantai-pasir-putih.webp"
          },
          {
            "title": "Mangrove Forest Walk",
            "desc": "Explore the protected Clungup Mangrove Conservation area and learn about the community-led marine conservation efforts.",
            "difficulty": "Easy",
            "image": "/locations/hidden-gem/pantai-gatra/hutan-mangrove.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Early mornings for peaceful waters and cool temperatures.",
          "bring": [
            "Trash bag",
            "Sunscreen",
            "Swimwear",
            "Camping gear if staying overnight"
          ],
          "avoid": [
            "Do not bring single-use plastics without registering them at the check post",
            "Do not disturb the coral reefs"
          ],
          "insiderTips": [
            "Every piece of plastic you bring in will be counted and checked again when you leave. Keep your trash secure!"
          ]
        },
        "tips": [
          "Rent a tent and canoe directly at the conservation office for a small contribution."
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Sunrise View",
            "label": "Early Morning",
            "value": "05:30 – 08:00 WIB",
            "color": "#EF9F27",
            "intensity": "90%"
          },
          {
            "icon": "calendar",
            "badge": "Dry Season",
            "label": "May – October",
            "value": "Calm waves, best snorkeling",
            "color": "#378ADD",
            "intensity": "70%"
          }
        ],
        "location": {
          "lat": -8.4311,
          "lng": 112.6478
        },
        "funFacts": [
          "Pantai Gatra is part of the Clungup Mangrove Conservation (CMC) Area, one of the first community-managed marine conservation zones in East Java, established in 2013.",
          "Access to the beach is strictly controlled by a daily visitor quota of just 25 people, which has successfully maintained its pristine coral reefs and white sand.",
          "The bay's three-colored water effect — turquoise, green, and deep blue — is caused by varying seafloor depths and the reflection of surrounding vegetation."
        ]
      },
      {
        "title": "Candi Sumberawan",
        "tagline": "The Sacred Forest Stupa and Healing Springs of Singosari",
        "description": "The only bell-shaped Buddhist stupa temple in East Java, built in the 14th century and hidden deep inside a peaceful pine forest with a natural spring.",
        "heroImage": "/locations/hidden-gem/candi-sumberawan/cover.webp",
        "basicInfo": {
          "location": "Singosari, Kabupaten Malang, Jawa Timur",
          "hours": "08:00 WIB - 17:00 WIB",
          "price": "Rp 5.000 / person",
          "rating": "4.6/5",
          "category": "Hidden Gem / Heritage / Meditation"
        },
        "gallery": [
          "/locations/hidden-gem/candi-sumberawan/cover.webp"
        ],
        "story": "Candi Sumberawan is a unique historical relic located in a quiet pine forest at the foot of Mount Arjuno. Unlike other Javanese temples, it is a pure bell-shaped Buddhist stupa. The temple sits next to a crystal-clear spring water source believed by locals to hold spiritual healing properties.",
        "keyAttractions": [
          {
            "title": "Main Stupa",
            "desc": "The unique 14th-century bell-shaped stone stupa, the only Buddhist stupa temple of its kind in East Java.",
            "image": "/locations/hidden-gem/candi-sumberawan/stupa-utama.webp"
          },
          {
            "title": "Holy Spring",
            "desc": "A crystal-clear natural spring flowing directly beside the temple, believed by locals to have healing properties.",
            "image": "/locations/hidden-gem/candi-sumberawan/sumber-mata-air.webp"
          },
          {
            "title": "Aerial View",
            "desc": "The peaceful upper canopy view of the temple nestled inside a dense, cool pine forest at the foot of Mt. Arjuno.",
            "image": "/locations/hidden-gem/candi-sumberawan/tampak-atas.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Stupa & Sacred Spring Visit",
            "desc": "Walk around the only bell-shaped Buddhist stupa in East Java and drink directly from the crystal-clear sacred spring beside it.",
            "difficulty": "Easy",
            "image": "/locations/hidden-gem/candi-sumberawan/stupa-utama.webp"
          },
          {
            "title": "Pine Forest Trekking",
            "desc": "Enjoy a peaceful walk through the dense pine forest at the foot of Mount Arjuno surrounding the temple area.",
            "difficulty": "Easy",
            "image": "/locations/hidden-gem/candi-sumberawan/tampak-atas.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Late afternoons when the sunlight filters softly through the tall pine trees.",
          "bring": [
            "Modest attire",
            "Slippers for the spring area",
            "Cash for ticket"
          ],
          "avoid": [
            "Do not climb onto the stone stupa structure",
            "Do not pollute the sacred spring pool"
          ],
          "insiderTips": [
            "Drink directly from the spring outlet; the water is incredibly clean, cool, and sweet."
          ]
        },
        "tips": [
          "Respect local visitors who come to perform prayers and wash in the sacred pool."
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Morning Mist",
            "label": "Early Morning",
            "value": "07:00 – 10:00 WIB",
            "color": "#EF9F27",
            "intensity": "85%"
          },
          {
            "icon": "calendar",
            "badge": "Dry Season",
            "label": "May – October",
            "value": "Clear surroundings, less muddy path",
            "color": "#378ADD",
            "intensity": "65%"
          }
        ],
        "location": {
          "lat": -7.8667,
          "lng": 112.5892
        },
        "funFacts": [
          "Candi Sumberawan is the only purely Buddhist stupa-form temple ever discovered in East Java, dating back to the late Majapahit period around the 14th–15th century.",
          "Dutch archaeologist N.J. Krom was the first to document and study the temple in 1904, noting that its bell-shaped stupa design closely resembles the Sanchi Stupa of India.",
          "The sacred spring flowing beside the temple was historically used for royal purification rituals during the Majapahit era, according to inscriptions found near the site."
        ]
      },
      {
        "title": "Lembah Indah Malang",
        "tagline": "The Swiss Glamping Valley of Mount Kawi",
        "description": "A gorgeous, lush green agricultural resort tucked in a valley at Mt. Kawi's foot, featuring organic farms and iconic white dome glamping sites.",
        "heroImage": "/locations/hidden-gem/lembah-indah-malang/cover.webp",
        "basicInfo": {
          "location": "Kepanjen, Kabupaten Malang, Jawa Timur",
          "hours": "08:00 WIB - 17:00 WIB",
          "price": "Rp 20.000 / person (area access, excludes accommodation)",
          "rating": "4.5/5",
          "category": "Hidden Gem / Nature / Resort"
        },
        "gallery": [
          "/locations/hidden-gem/lembah-indah-malang/cover.webp"
        ],
        "story": "Lembah Indah Malang is a scenic agricultural tourism resort located in the cool highlands of Kepanjen. Surrounded by the rolling green ridges of Mount Kawi, it features beautiful organic farms, vegetable greenhouses, and futuristic glamping domes that offer a Swiss-like mountain escape.",
        "keyAttractions": [
          {
            "title": "Dome Glamping",
            "desc": "Futuristic white glamping domes nestled in the lush green valley floor, offering a Swiss-like mountain getaway.",
            "image": "/locations/hidden-gem/lembah-indah-malang/dome-glamping.webp"
          },
          {
            "title": "Valley Panorama",
            "desc": "The beautiful 360-degree panorama of rolling green pasture hills on the lower slopes of Mount Kawi.",
            "image": "/locations/hidden-gem/lembah-indah-malang/panorama-lembah.webp"
          },
          {
            "title": "Dining Area",
            "desc": "A farm-to-table restaurant serving fresh dishes made from organic ingredients harvested directly from the resort's greenhouse.",
            "image": "/locations/hidden-gem/lembah-indah-malang/tempat-makan.webp"
          }
        ],
        "thingsToDo": [
          {
            "title": "Valley Panorama Walk",
            "desc": "Stroll through the rolling green valley floor surrounded by the ridges of Mount Kawi and capture panoramic photos.",
            "difficulty": "Easy",
            "image": "/locations/hidden-gem/lembah-indah-malang/panorama-lembah.webp"
          },
          {
            "title": "Organic Farm Tour",
            "desc": "Visit the hydroponic greenhouses and organic strawberry farms to pick fresh produce straight from the plants.",
            "difficulty": "Easy",
            "image": "/locations/hidden-gem/lembah-indah-malang/dome-glamping.webp"
          }
        ],
        "visitorTips": {
          "bestTime": "Mornings when the mountain mist is still rolling across the green valley floor.",
          "bring": [
            "Warm jacket",
            "Camera",
            "Comfortable walking shoes"
          ],
          "avoid": [
            "Do not damage the organic plants",
            "Do not feed animals unauthorized food"
          ],
          "insiderTips": [
            "Book glamping spots well in advance for weekend stays as they fill up quickly."
          ]
        },
        "tips": [
          "The resort features a premium restaurant serving dishes made from fresh, locally harvested farm ingredients."
        ],
        "bestTime": [
          {
            "icon": "sunrise",
            "badge": "Morning Light",
            "label": "Morning",
            "value": "07:00 – 10:00 WIB",
            "color": "#EF9F27",
            "intensity": "85%"
          },
          {
            "icon": "calendar",
            "badge": "Weekday",
            "label": "Mon – Fri",
            "value": "Empty pools, uncrowded trails",
            "color": "#A3B18A",
            "intensity": "60%"
          }
        ],
        "location": {
          "lat": -8.0111,
          "lng": 112.5183
        },
        "funFacts": [
          "Lembah Indah Malang sits at 900 meters altitude on the lower slopes of Mount Kawi, providing a cool 18–22°C year-round climate ideal for highland agriculture and tourism.",
          "The resort grows over 30 varieties of organic strawberries in its controlled greenhouse using hydroponic techniques, and visitors can pick and eat directly from the plants.",
          "The glamping dome structures are designed to maximize stargazing — positioned away from city light pollution, they offer a clear view of the Milky Way on dry-season nights."
        ]
      }
    ]
  }
};
