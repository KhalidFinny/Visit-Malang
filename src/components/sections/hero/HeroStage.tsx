import { useState, lazy, Suspense, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import HeroIntro from './parts/HeroIntro';
import HeroCategories from './parts/HeroCategories';
import type { MapCategory } from '../../../data/mapPlaces';

const HeroMap = lazy(() => import('./parts/HeroMap'));

/** Preload these images so the category page feels instant */
const CATEGORY_BG_URLS = [
  'https://images.unsplash.com/photo-1602154663343-89fe0bf541ab?q=70&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1547928576-a4a33237ecd3?q=70&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1518151246473-fd677e497d39?q=70&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=70&w=800&auto=format&fit=crop',
];

type HeroState = 'intro' | 'categories' | 'map';

export default function HeroStage() {
  const { t } = useTranslation();
  const [state, setState] = useState<HeroState>('intro');
  const [selectedCategory, setSelectedCategory] = useState<MapCategory>('Nature');

  function handleExplore() {
    setState('categories');
  }

  function handleScrollDown() {
    // Scroll to next section (Heritage)
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }

  function handleCategorySelect(cat: MapCategory) {
    setSelectedCategory(cat);
    setState('map');
  }

  // Warm up the category background images while the intro is on screen
  useEffect(() => {
    if (state !== 'intro') return;
    const imgs = CATEGORY_BG_URLS.map((url) => {
      const img = new Image();
      img.src = url;
      return img;
    });
  }, [state]);

  return (
    <section className="relative w-full">
      <AnimatePresence mode="wait">
        {state === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroIntro
              onExplore={handleExplore}
              onScrollDown={handleScrollDown}
            />
          </motion.div>
        )}

        {state === 'categories' && (
          <motion.div
            key="categories"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroCategories onSelect={handleCategorySelect} />
          </motion.div>
        )}

        {state === 'map' && (
          <motion.div
            key="map"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-screen"
          >
            <Suspense
              fallback={
                <div className="w-full h-screen bg-[#f5f4f0] flex items-center justify-center">
                  <span className="text-[#1a1a1a]/30 text-[14px] font-bold uppercase tracking-widest animate-pulse">
                    {t('app.loadingMap')}
                  </span>
                </div>
              }
            >
              <HeroMap
                category={selectedCategory}
              />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
