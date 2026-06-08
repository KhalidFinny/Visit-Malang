import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CATEGORY_META, MAP_PLACES, type MapCategory } from '../../../../data/mapPlaces';
import { ImageWithSkeleton } from '../../../shared/Skeleton';

const CATEGORIES: MapCategory[] = ['Nature', 'Culinary', 'Attraction', 'Historical'];

const CATEGORY_LOCALE_KEY: Record<MapCategory, string> = {
  Nature:     'hero.categories.nature',
  Culinary:   'hero.categories.culinary',
  Attraction: 'hero.categories.attractions',
  Historical: 'hero.categories.heritage',
};

const CATEGORY_BG: Record<MapCategory, string> = {
  Nature:     'https://images.unsplash.com/photo-1602154663343-89fe0bf541ab?q=70&w=800&auto=format&fit=crop',
  Culinary:   'https://images.unsplash.com/photo-1547928576-a4a33237ecd3?q=70&w=800&auto=format&fit=crop',
  Attraction: 'https://images.unsplash.com/photo-1518151246473-fd677e497d39?q=70&w=800&auto=format&fit=crop',
  Historical: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=70&w=800&auto=format&fit=crop',
};

interface HeroCategoriesProps {
  onSelect: (cat: MapCategory) => void;
}

export default function HeroCategories({ onSelect }: HeroCategoriesProps) {
  const { t } = useTranslation();
  return (
    <div className="relative w-full h-screen bg-[#f5f4f0] flex flex-col overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="shrink-0 px-10 md:px-16 pt-16 pb-10 z-10"
      >
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[14px] font-black uppercase tracking-[0.5em] text-[#1a1a1a]/40 mb-3">
            {t('hero.explorer.label')}
          </p>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-[#1a1a1a] uppercase tracking-tight leading-none text-balance">
            {t('hero.explorer.titleLine1')}<br />
            {t('hero.explorer.titleLine2')}
          </h2>
        </div>
      </motion.div>

      {/* Category grid */}
      <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 min-h-0 px-10 md:px-16 pb-16 gap-4">
        {CATEGORIES.map((cat, i) => {
          const meta = CATEGORY_META[cat];
          const count = MAP_PLACES.filter((p) => p.category === cat).length;

          return (
            <motion.button
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              onClick={() => onSelect(cat)}
              className="group relative overflow-hidden rounded-3xl text-left"
            >
              {/* Full background image */}
              <div className="absolute inset-0">
                <ImageWithSkeleton
                  src={CATEGORY_BG[cat]}
                  alt={cat}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  wrapperClassName="w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent z-10" />
              </div>

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 inset-x-0 h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                style={{ backgroundColor: meta.color }}
              />

              {/* Text content */}
              <div className="relative z-20 flex flex-col justify-end h-full px-7 pb-10 pt-8">
                <div className="mt-auto">
                  <span className="text-4xl md:text-5xl mb-4 block">{meta.emoji}</span>
                  <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight leading-none mb-2 text-balance">
                    {t(CATEGORY_LOCALE_KEY[cat])}
                  </h3>
                  <p className="text-[14px] font-bold uppercase tracking-widest text-white/50 mb-5">
                    {count} {t('hero.explorer.spots')}
                  </p>
                  <span className="text-[14px] font-black uppercase tracking-[0.3em] text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    {t('hero.explorer.explore')}
                  </span>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
