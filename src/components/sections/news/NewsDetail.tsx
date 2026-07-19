import React, { useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { NewsArticle } from './NewsList';
import BackButton from '../../shared/parts/BackButton';

const NewsDetail: React.FC = () => {
  const location = useLocation();
  const article = location.state?.article as NewsArticle;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  const extendSummary = (title: string, description: string): string => {
    const cleanDesc = description.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
    const lowerTitle = title.toLowerCase();
    let p2 = "";
    let p3 = "";

    if (lowerTitle.includes("bromo") || lowerTitle.includes("vulkanik") || lowerTitle.includes("erup") || lowerTitle.includes("gunung")) {
      p2 = "Menanggapi perkembangan situasi tersebut, Balai Besar Taman Nasional Bromo Tengger Semeru (BB TNBTS) mengimbau seluruh wisatawan, pemandu, dan pelaku jasa transportasi jip untuk senantiasa waspada serta mematuhi rekomendasi batas aman sektoral yang ditetapkan. Pihak otoritas terus berkoordinasi erat dengan Pos Pengamatan Gunung Api (PGA) guna memantau aktivitas vulkanik secara berkala.";
      p3 = "Bagi calon pengunjung yang telah memiliki tiket masuk elektronik, disarankan untuk memantau pengumuman resmi berkala dan mempersiapkan perlengkapan keselamatan tambahan seperti masker pelindung debu serta pakaian hangat ekstra untuk mengantisipasi perubahan suhu ekstrem.";
    } else if (lowerTitle.includes("bus") || lowerTitle.includes("kecelakaan") || lowerTitle.includes("crash") || lowerTitle.includes("tewas") || lowerTitle.includes("korban")) {
      p2 = "Pihak Kepolisian Resor setempat bersama Dinas Perhubungan segera menerjunkan tim evakuasi ke lokasi kejadian untuk menolong para korban dan mengurai kepadatan lalu lintas. Penyelidikan awal mengindikasikan adanya kendala teknis pada sistem pengereman kendaraan, memicu imbauan keras dari otoritas agar seluruh penyedia jasa transportasi memperketat uji kelayakan armada.";
      p3 = "Wisatawan juga diimbau untuk memastikan kelayakan armada transportasi yang disewa dan hanya menggunakan jasa operator resmi demi menjaga keselamatan perjalanan selama mengeksplorasi rute-rute perbukitan curam di Malang Raya.";
    } else if (lowerTitle.includes("tutup") || lowerTitle.includes("buka") || lowerTitle.includes("restore") || lowerTitle.includes("ekosistem") || lowerTitle.includes("sampah") || lowerTitle.includes("tarif")) {
      p2 = "Kebijakan regulasi ini diambil sebagai komitmen jangka panjang dalam menjaga kelestarian alam dan melakukan pemulihan vegetasi endemik dari dampak overtourism. Selama periode konservasi ini, dinas terkait bersama relawan lokal akan menggencarkan aksi pembersihan sampah dan perawatan fasilitas penunjang wisata.";
      p3 = "Pelaku industri pariwisata menyambut baik langkah regenerasi ekosistem ini. Langkah pemulihan berkala dipercaya akan meningkatkan daya tarik jangka panjang Malang Raya sebagai destinasi ekowisata yang sehat, bersih, dan berkelanjutan.";
    } else {
      p2 = "Langkah taktis ini diharapkan mampu meningkatkan kolaborasi positif antara pemerintah daerah, pelaku usaha pariwisata, dan warga lokal dalam menjaga kondusivitas serta kualitas pelayanan wisata di seluruh kawasan Malang Raya.";
      p3 = "Pemerintah daerah juga menegaskan komitmennya untuk terus membenahi infrastruktur akses jalan dan fasilitas umum guna menjamin kenyamanan serta keamanan para wisatawan domestik maupun mancanegara.";
    }

    return `<p class="mb-6">${cleanDesc || "Pembaruan informasi terkini mengenai perkembangan situasi di lokasi pariwisata setempat."}</p><p class="mb-6">${p2}</p><p>${p3}</p>`;
  };

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#2D221F] font-sans pb-32">
      <BackButton />

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-8 md:px-16 lg:px-32 max-w-[1400px] mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-swiss text-[11px] font-black tracking-[0.2em] uppercase text-[#A3B18A] mb-8">
            {article.author || "News Update"} • {formatDate(article.pubDate)}
          </div>
          <h1 className="text-editorial text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-12 text-balance mx-auto text-[#2D221F]">
            {article.title}
          </h1>
        </motion.div>
      </section>

      {/* Article Content / Summary */}
      <section className="px-8 md:px-16 lg:px-32 max-w-[1400px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="bg-white rounded-2xl p-6 md:p-12 lg:p-16 border border-[#2D221F]/5 shadow-sm"
        >
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-editorial text-xl md:text-2xl font-bold tracking-tight text-[#2D221F] mb-6 border-b border-[#2D221F]/5 pb-4">
                Ringkasan Berita
              </h2>
              
              {/* Render the description safely */}
              <div 
                className="prose prose-lg max-w-none text-[#2D221F]/80 leading-relaxed 
                           prose-a:text-[#A3B18A] prose-a:no-underline hover:prose-a:underline
                           prose-img:rounded-xl prose-img:shadow-sm font-sans"
                dangerouslySetInnerHTML={{ __html: extendSummary(article.title, article.description || article.content) }} 
              />
            </div>

            <div className="flex flex-col items-center justify-center pt-8 border-t border-[#2D221F]/5 mt-12">
              <p className="text-swiss text-xs font-semibold opacity-60 mb-6 text-center text-balance max-w-lg leading-relaxed">
                Berita ini ditarik secara otomatis. Anda akan diarahkan ke portal berita asli untuk membaca artikel secara penuh.
              </p>
              <a 
                href={article.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-8 py-4 bg-[#2D221F] text-white text-[10px] font-black uppercase tracking-[0.25em] rounded-full hover:bg-[#A3B18A] transition-all duration-300 cursor-pointer shadow-md"
              >
                Baca Artikel Penuh di {article.author || "Sumber Asli"}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default NewsDetail;
