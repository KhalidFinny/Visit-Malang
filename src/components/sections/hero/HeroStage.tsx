import { useState, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HeroIntro from './parts/HeroIntro';
import HeroCategories from './parts/HeroCategories';
import type { MapCategory } from '../../../data/mapPlaces';

const HeroMap = lazy(() => import('./parts/HeroMap'));

type HeroState = 'intro' | 'categories' | 'map';

export default function HeroStage() {
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
                    Loading map…
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
