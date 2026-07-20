import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BackButton from '../../shared/parts/BackButton';

export interface NewsArticle {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  author: string;
  thumbnail: string;
  description: string;
  content: string;
}

export const fetchMalangNews = async (query: string = "Malang"): Promise<NewsArticle[]> => {
  try {
    const RSS_URL = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=id&gl=ID&ceid=ID:id`;
    const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_URL)}`;
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return [];
  }
};

const NewsList: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('q') || "Malang";

  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const articles = await fetchMalangNews(query);
      setNews(articles);
      setLoading(false);
    };
    getNews();
  }, [query]);

  // Generate a safe slug from title for the URL
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

  const subtitle = query === "Malang"
    ? t('news.subtitleMalang')
    : t('news.subtitle', { place: query });

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#2D221F] font-sans">
      <BackButton />

      {/* HEADER */}
      <section className="pt-32 pb-16 px-5 sm:px-8 md:px-16 lg:px-20 max-w-[1400px] xl:max-w-[1700px] mx-auto">
        <h1 className="text-editorial text-5xl md:text-7xl lg:text-8xl uppercase tracking-tighter leading-none mb-6">
          {t('news.title')}
        </h1>
        <p className="text-lg md:text-xl opacity-70 max-w-2xl">
          {subtitle}
        </p>
      </section>

      {/* NEWS GRID */}
      <section className="pb-32 px-5 sm:px-8 md:px-16 lg:px-20 max-w-[1400px] xl:max-w-[1700px] mx-auto">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-[#2D221F]/10 border-t-[#2D221F] rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xl:gap-8">
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
                      <div className="text-swiss text-sm font-black tracking-[0.15em] uppercase text-[#A3B18A] mb-4">
                        {source}
                      </div>
                      <h3 className="text-editorial text-lg md:text-xl font-bold leading-tight tracking-tight text-[#2D221F] group-hover:text-[#A3B18A] transition-colors line-clamp-3">
                        {title}
                      </h3>
                    </div>
                    <div className="mt-8 flex items-center justify-between border-t border-[#2D221F]/5 pt-4">
                      <span className="text-swiss text-sm font-bold uppercase tracking-wider text-[#2D221F]/40">{formatDate(article.pubDate)}</span>
                      <span className="text-swiss text-sm font-black tracking-wider bg-[#f5f4f0] text-[#2D221F]/80 px-3.5 py-1.5 rounded-full border border-[#2D221F]/5 group-hover:bg-[#A3B18A] group-hover:text-white group-hover:border-[#A3B18A] transition-all duration-300">
                        {t('news.read')}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
};

export default NewsList;
