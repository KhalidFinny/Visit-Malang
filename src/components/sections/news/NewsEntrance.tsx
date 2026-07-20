import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { fetchMalangNews } from './NewsList';
import type { NewsArticle } from './NewsList';

interface NewsEntranceProps {
  query?: string;
}

const NewsEntrance: React.FC<NewsEntranceProps> = ({ query = "Malang" }) => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const articles = await fetchMalangNews(query);
      setNews(articles.slice(0, 3)); // Only take top 3
      setLoading(false);
    };
    getNews();
  }, [query]);

  const createSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  };

  const getArticleMeta = (article: NewsArticle) => {
    const lastHyphenIndex = article.title.lastIndexOf(" - ");
    if (lastHyphenIndex !== -1) {
      const title = article.title.substring(0, lastHyphenIndex).trim();
      const source = article.title.substring(lastHyphenIndex + 3).trim();
      return { title, source };
    }
    return { title: article.title, source: article.author || t('news.fallbackSource') };
  };

  const handleArticleClick = (article: NewsArticle) => {
    const { title, source } = getArticleMeta(article);
    const cleanArticle = {
      ...article,
      title,
      author: source
    };
    const slug = createSlug(cleanArticle.title);
    navigate(`/news/${slug}`, { state: { article: cleanArticle, placeTitle: query } });
  };

  const formatDate = (dateString: string) => {
    const locale = i18n.language || 'en';
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(locale, options);
  };

  if (!loading && news.length === 0) {
    return null;
  }

  return (
    <section className="py-8 md:py-12 relative overflow-hidden bg-transparent">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="mb-2">
              <h2 className="text-editorial text-2xl md:text-3xl uppercase tracking-tighter leading-none text-[#2D221F]">
                {t('news.sectionTitle')}
              </h2>
            </div>
            <p className="text-[#2D221F]/60 text-xs md:text-sm leading-relaxed max-w-xl">
              {t('news.sectionSubtitle', { place: query })}
            </p>
          </div>
          <button 
            onClick={() => navigate(`/news?q=${encodeURIComponent(query)}`)}
            className="inline-flex items-center gap-3 px-6 py-3 bg-transparent border border-[#2D221F]/20 text-[#2D221F] text-[10px] font-black uppercase tracking-wider rounded-full hover:bg-[#2D221F] hover:text-white hover:border-[#2D221F] transition-all duration-300 whitespace-nowrap self-start md:self-auto cursor-pointer"
          >
            {t('news.viewAll')}
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-8 h-8 border-2 border-[#2D221F]/10 border-t-[#2D221F] rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {news.map((article, i) => {
              const { title, source } = getArticleMeta(article);
              return (
                <motion.div 
                  key={article.guid}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
                  onClick={() => handleArticleClick(article)}
                  className="group cursor-pointer flex flex-col bg-white rounded-2xl overflow-hidden border border-[#2D221F]/10 hover:border-[#2D221F]/30 transition-all duration-300"
                >
                  <div className="p-6 md:p-8 flex flex-col h-full justify-between">
                    <div>
                      <div className="text-swiss text-[9px] font-black tracking-[0.15em] uppercase text-[#A3B18A] mb-4">
                        {source}
                      </div>
                      <h3 className="text-editorial text-lg md:text-xl font-bold leading-tight tracking-tight text-[#2D221F] group-hover:text-[#A3B18A] transition-colors line-clamp-3">
                        {title}
                      </h3>
                    </div>
                    <div className="mt-8 flex items-center justify-between border-t border-[#2D221F]/5 pt-4">
                      <span className="text-swiss text-[10px] font-bold uppercase tracking-wider text-[#2D221F]/40">{formatDate(article.pubDate)}</span>
                      <span className="text-swiss text-[9px] font-black tracking-wider bg-[#f5f4f0] text-[#2D221F]/80 px-3.5 py-1.5 rounded-full border border-[#2D221F]/5 group-hover:bg-[#A3B18A] group-hover:text-white group-hover:border-[#A3B18A] transition-all duration-300">
                        {t('news.read')}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsEntrance;
