import React, { useEffect } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import type { NewsArticle } from './NewsList';
import BackButton from '../../shared/parts/BackButton';

const NewsDetail: React.FC = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const article = location.state?.article as NewsArticle;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!article) {
    return <Navigate to="/news" replace />;
  }

  const formatDate = (dateString: string) => {
    const locale = i18n.language || 'en';
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(dateString).toLocaleDateString(locale, options);
  };

  const extendSummary = (title: string, description: string): string => {
    const cleanDesc = description.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
    const lowerTitle = title.toLowerCase();
    let p2 = "";
    let p3 = "";

    if (lowerTitle.includes("bromo") || lowerTitle.includes("vulkanik") || lowerTitle.includes("erup") || lowerTitle.includes("gunung")) {
      p2 = t('news.fallbackExtend.volcano.p2');
      p3 = t('news.fallbackExtend.volcano.p3');
    } else if (lowerTitle.includes("bus") || lowerTitle.includes("kecelakaan") || lowerTitle.includes("crash") || lowerTitle.includes("tewas") || lowerTitle.includes("korban")) {
      p2 = t('news.fallbackExtend.accident.p2');
      p3 = t('news.fallbackExtend.accident.p3');
    } else if (lowerTitle.includes("tutup") || lowerTitle.includes("buka") || lowerTitle.includes("restore") || lowerTitle.includes("ekosistem") || lowerTitle.includes("sampah") || lowerTitle.includes("tarif")) {
      p2 = t('news.fallbackExtend.eco.p2');
      p3 = t('news.fallbackExtend.eco.p3');
    } else {
      p2 = t('news.fallbackExtend.general.p2');
      p3 = t('news.fallbackExtend.general.p3');
    }

    const fallbackDesc = cleanDesc || t('news.fallbackExtend.default');
    return `<p class="mb-6">${fallbackDesc}</p><p class="mb-6">${p2}</p><p>${p3}</p>`;
  };

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#2D221F] font-sans pb-32">
      <BackButton />

      {/* Hero Header */}
      <section className="pt-32 pb-8 md:pb-16 px-8 md:px-16 lg:px-32 max-w-[1400px] mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-swiss text-[11px] font-black tracking-[0.2em] uppercase text-[#A3B18A] mb-4 md:mb-8">
            {article.author || t('news.fallbackSource')} • {formatDate(article.pubDate)}
          </div>
          <h1 className="text-editorial text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-2 md:mb-12 text-balance mx-auto text-[#2D221F]">
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
                {t('news.summaryTitle')}
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
                {t('news.autoFetched')}
              </p>
              <a 
                href={article.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-8 py-4 bg-[#2D221F] text-white text-[10px] font-black uppercase tracking-[0.25em] rounded-full hover:bg-[#A3B18A] transition-all duration-300 cursor-pointer shadow-md"
              >
                {t('news.readFull', { source: article.author || t('news.fallbackSource') })}
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
