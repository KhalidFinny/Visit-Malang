const fs = require('fs');
const path = require('path');

const enPath = path.resolve('src/locales/en/translation.json');
const idPath = path.resolve('src/locales/id/translation.json');

let enObj = JSON.parse(fs.readFileSync(enPath, 'utf8'));
let idObj = JSON.parse(fs.readFileSync(idPath, 'utf8'));

const enNew = {
  "techModern.hero.label": "Technology & Modern Potential",
  "techModern.hero.titleLine1": "Digital Innovation",
  "techModern.hero.titleLine2": "in Malang Raya",
  "techModern.hero.desc": "Malang Raya is not just about its enchanting heritage and natural beauty; it is stepping forward as a center for modern innovation. Blending tradition and technology, this region is evolving into a dynamic and highly competitive digital ecosystem. With a spirit of collaboration, Malang Raya is ready to embrace a smarter, more connected, and sustainable future while honoring its roots.",
  "techModern.stats.uni.label": "Universities & Colleges",
  "techModern.stats.uni.desc": "Home to dozens of higher education institutions producing top-tier digital talents.",
  "techModern.stats.students.label": "Active Students",
  "techModern.stats.students.desc": "A massive student ecosystem acting as the main driver for innovation and creative industries.",
  "techModern.stats.smartcity.label": "Smart City Awards",
  "techModern.stats.smartcity.desc": "National-level e-government governance awards proving the commitment to digital transformation.",
  "techModern.stats.startup.label": "Startups & Incubators",
  "techModern.stats.startup.desc": "A thriving startup community supported by various campus and local incubators.",
  "techModern.pillars.title": "Technology Pillars",
  "techModern.pillars.smartcity.title": "Smart City & E-Government",
  "techModern.pillars.smartcity.desc": "Malang City continues to innovate with digital services to ease the community's needs. Through flagship apps like Sambat Online, the government realizes a more transparent, fast, and responsive urban governance.",
  "techModern.pillars.education.title": "Education & Startup Hub",
  "techModern.pillars.education.desc": "Known as a city of education, the technology ecosystem in Malang is fully supported by leading universities. Campus-industry collaborations create business incubators that birth many tech talents and innovative startups annually.",
  "techModern.pillars.agriculture.title": "Agricultural Technology",
  "techModern.pillars.agriculture.desc": "Malang Regency combines agricultural potential with modern innovation via smart farming concepts. Technology on local commodities boosts farmer productivity while sustainably preserving the environment.",
  "techModern.pillars.tourism.title": "Digital Tourism",
  "techModern.pillars.tourism.desc": "Batu City leads tourism transformation through smart village initiatives and service digitization. QR codes at attractions, digital ticketing, and tourism guide apps provide a seamless and modern experience for every tourist.",
  "techModern.eco.title": "Digital Ecosystem",
  "techModern.eco.desc": "Connectivity in Malang Raya is continuously strengthened by expanding 4G and fiber optic networks reaching remote areas. This telecom infrastructure development runs alongside smart village programs in Malang Regency and Batu City, ensuring reliable digital access.",
  "techModern.eco.startups": "Local Startups",
  "techModern.eco.startup1.sector": "Web Hosting & Cloud",
  "techModern.eco.startup1.desc": "A leading digital infrastructure and web hosting provider born in Malang.",
  "techModern.eco.startup2.sector": "Cloud Provider",
  "techModern.eco.startup2.desc": "A pioneer in hosting services focusing on digitizing MSMEs and the youth.",
  "techModern.eco.startup3.sector": "Game-based Learning",
  "techModern.eco.startup3.desc": "An innovative startup using a board game approach for education and corporate training.",
  "techModern.eco.startup4.sector": "Software House",
  "techModern.eco.startup4.desc": "A technology company developing IT solutions and mobile apps for various industries.",
  "techModern.eco.startup5.sector": "Software Development",
  "techModern.eco.startup5.desc": "A software development studio focused on building high-quality mobile apps and websites.",
  "techModern.eco.startup6.sector": "Coworking & Ecosystem Builder",
  "techModern.eco.startup6.desc": "A collaboration hub and coworking space actively building the startup network in Malang.",
  "techModern.eco.communities": "Communities & Events",
  "techModern.eco.comm1.type": "Community",
  "techModern.eco.comm1.desc": "An active developer community regularly holding meetups and Google technology training.",
  "techModern.eco.comm2.type": "Annual Event",
  "techModern.eco.comm2.desc": "An intensive 54-hour competition and collaboration event to pioneer new startup ideas.",
  "techModern.eco.comm3.type": "Community",
  "techModern.eco.comm3.desc": "A gathering space for IT enthusiasts, programmers, and designers to share knowledge.",
  "techModern.eco.comm4.type": "University Tech Fest",
  "techModern.eco.comm4.desc": "An annual tech exhibition by students showcasing various latest digital innovations.",
  "techModern.eco.comm5.type": "Community",
  "techModern.eco.comm5.desc": "A communication forum and ecosystem accommodating local creative industry players and startups.",
  "techModern.closing.quote": "\"Malang Raya proves that harmony between future technology and local wisdom is not just a dream, but a reality being built today. Together, we step into a digital era that empowers every corner of the city and village.\"",
  "techModern.closing.back": "Back to Home",
  "techModern.entrance.titleLine1": "Digital Innovation &",
  "techModern.entrance.titleLine2": "The Future",
  "techModern.entrance.desc": "Explore how Malang Raya combines local wisdom with modern technology, building a dynamic and highly competitive digital ecosystem.",
  "techModern.entrance.cta": "Explore Technology"
};

const idNew = {
  "techModern.hero.label": "Technology & Modern Potential",
  "techModern.hero.titleLine1": "Inovasi Digital",
  "techModern.hero.titleLine2": "Malang Raya",
  "techModern.hero.desc": "Malang Raya bukan sekadar soal sejarah dan pesona alamnya yang asri, lho. Kawasan ini diam-diam terus melesat jadi pusat inovasi yang keren! Perpaduan antara tradisi lokal dan semangat teknologi bikin Malang Raya jadi ekosistem digital yang bener-bener hidup dan punya daya saing kuat. Yuk, intip gimana Malang bersiap menyambut masa depan yang lebih cerdas dan terhubung tanpa ninggalin akar budayanya.",
  "techModern.stats.uni.label": "Universitas & Kampus",
  "techModern.stats.uni.desc": "Menjadi rumah bagi puluhan perguruan tinggi yang tak henti mencetak talenta-talenta digital jempolan.",
  "techModern.stats.students.label": "Mahasiswa Aktif",
  "techModern.stats.students.desc": "Ekosistem pelajar super masif yang jadi motor penggerak utama buat dunia inovasi dan industri kreatif di sini.",
  "techModern.stats.smartcity.label": "Penghargaan Smart City",
  "techModern.stats.smartcity.desc": "Beberapa penghargaan tingkat nasional ini ngebuktiin kalau pemerintah daerah serius banget soal transformasi digital.",
  "techModern.stats.startup.label": "Startup & Inkubator",
  "techModern.stats.startup.desc": "Komunitas startup yang terus tumbuh subur berkat dukungan kenceng dari berbagai inkubator kampus dan lokal.",
  "techModern.pillars.title": "Pilar Teknologi",
  "techModern.pillars.smartcity.title": "Smart City & E-Government",
  "techModern.pillars.smartcity.desc": "Pemerintah Kota Malang sekarang makin melek digital! Biar warga gampang ngurus ini-itu, mereka bikin banyak layanan online. Contohnya aplikasi Sambat Online—kalau ada keluhan soal fasilitas kota, tinggal lapor dari hape. Jadinya, tata kelola kota terasa lebih transparan, cepet tanggap, dan nggak ribet lagi.",
  "techModern.pillars.education.title": "Pusat Edukasi & Startup",
  "techModern.pillars.education.desc": "Julukan 'Kota Pendidikan' emang nggak salah. Dengan kampus-kampus besar kaya UB, UM, UMM, dan Polinema, Malang punya pasokan talenta IT yang nggak ada habisnya. Serunya lagi, banyak kolaborasi antara kampus sama pelaku industri yang akhirnya nelurin inkubator bisnis dan startup-startup baru tiap tahunnya.",
  "techModern.pillars.agriculture.title": "Agricultural Technology",
  "techModern.pillars.agriculture.desc": "Beralih ke Kabupaten Malang, potensi pertaniannya nggak dibiarin gitu aja, lho. Mereka mulai nerapin yang namanya smart farming buat ningkatin hasil panen komoditas lokal tanpa ngerusak alam. Keren banget liat petani lokal mulai dibantu teknologi modern biar kerjanya lebih efisien dan ramah lingkungan.",
  "techModern.pillars.tourism.title": "Digital Tourism",
  "techModern.pillars.tourism.desc": "Kalau di Kota Batu, wisatawannya dimanjain banget sama fasilitas serba digital. Dari mulai pesen tiket online, scan QR code buat masuk ke wahana, sampai desa wisata yang udah nyediain info lewat aplikasi. Jalan-jalan keliling Batu sekarang kerasa banget modernnya dan anti ribet!",
  "techModern.eco.title": "Ekosistem Digital",
  "techModern.eco.desc": "Koneksi internet di Malang Raya juga terus digeber. Jaringan 4G sama fiber optik makin meluas sampai ke desa-desa. Pembangunan infrastruktur telekomunikasi ini jalan barengan sama program smart village di Kabupaten Malang dan Batu, biar semua lapisan masyarakat dan wisatawan gampang dapet sinyal kenceng di mana aja.",
  "techModern.eco.startups": "Startup Lokal",
  "techModern.eco.startup1.sector": "Web Hosting & Cloud",
  "techModern.eco.startup1.desc": "Penyedia solusi infrastruktur digital dan web hosting terkemuka yang asli lahir dari Malang.",
  "techModern.eco.startup2.sector": "Cloud Provider",
  "techModern.eco.startup2.desc": "Pionir penyedia layanan hosting yang berfokus ngebantu digitalisasi UMKM sama anak muda.",
  "techModern.eco.startup3.sector": "Game-based Learning",
  "techModern.eco.startup3.desc": "Startup inovatif yang milih jalur unik: pakai board game buat edukasi dan training perusahaan.",
  "techModern.eco.startup4.sector": "Software House",
  "techModern.eco.startup4.desc": "Perusahaan teknologi andalan yang sering ngebangun solusi IT dan aplikasi mobile keren.",
  "techModern.eco.startup5.sector": "Software Development",
  "techModern.eco.startup5.desc": "Studio yang fokus banget bikin aplikasi mobile sama website dengan kualitas wahid.",
  "techModern.eco.startup6.sector": "Coworking & Ecosystem",
  "techModern.eco.startup6.desc": "Wadah kolaborasi asik sekaligus coworking space yang aktif banget ngebangun jejaring startup di Malang.",
  "techModern.eco.communities": "Komunitas & Event",
  "techModern.eco.comm1.type": "Komunitas",
  "techModern.eco.comm1.desc": "Komunitas developer yang rajin banget ngadain meetup dan pelatihan seputar teknologi Google.",
  "techModern.eco.comm2.type": "Event Tahunan",
  "techModern.eco.comm2.desc": "Ajang nginep-nginep 54 jam buat mikirin dan ngerintis ide startup baru bareng-bareng.",
  "techModern.eco.comm3.type": "Komunitas",
  "techModern.eco.comm3.desc": "Markas kumpulnya para penggiat IT, programmer, sama desainer buat saling tukar ilmu.",
  "techModern.eco.comm4.type": "Pameran Kampus",
  "techModern.eco.comm4.desc": "Pameran tahunan mahasiswa yang mamerin berbagai penemuan digital paling fresh.",
  "techModern.eco.comm5.type": "Komunitas",
  "techModern.eco.comm5.desc": "Forum komunikasi dan ekosistem buat nyatuin para pelaku industri kreatif dan startup lokal.",
  "techModern.closing.quote": "\"Malang Raya ngebuktiin kalau harmoni antara teknologi canggih masa depan dan kearifan lokal itu bukan cuma impian kosong, tapi realita yang lagi kita bangun bareng hari ini. Sama-sama, kita melangkah ke era digital yang bikin tiap sudut kota dan desa makin berdaya.\"",
  "techModern.closing.back": "Kembali ke Beranda",
  "techModern.entrance.titleLine1": "Inovasi Digital &",
  "techModern.entrance.titleLine2": "Masa Depan",
  "techModern.entrance.desc": "Jelajahi gimana serunya Malang Raya ngegabungin kearifan lokal sama teknologi modern, ngebangun ekosistem digital yang hidup banget dan siap bersaing.",
  "techModern.entrance.cta": "Eksplorasi Teknologi"
};

Object.assign(enObj, enNew);
Object.assign(idObj, idNew);

const sortObj = o => Object.keys(o).sort().reduce((r, k) => (r[k] = o[k], r), {});
enObj = sortObj(enObj);
idObj = sortObj(idObj);

fs.writeFileSync(enPath, JSON.stringify(enObj, null, 2) + '\n');
fs.writeFileSync(idPath, JSON.stringify(idObj, null, 2) + '\n');
console.log('Translations injected successfully!');
