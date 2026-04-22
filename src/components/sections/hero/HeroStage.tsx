import { useState, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HeroIntro from './parts/HeroIntro';
import HeroCategories from './parts/HeroCategories';
import type { MapCategory } from '../../../data/mapPlaces';

// Lazy-load the map so Leaflet CSS doesn't affect initial paint
const HeroMap = lazy(() => import('./parts/HeroMap'));

type HeroState = 'intro' | 'categories' | 'map';

export default function HeroStage() {
  const [state, setState] = useState<HeroState>('intro');
  const [selectedCategory, setSelectedCategory] = useState<MapCategory | null>(null);

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
            transition={{ duration: 0.35 }}
          >
            <HeroIntro onExplore={() => setState('categories')} />
          </motion.div>
        )}

        {state === 'categories' && (
          <motion.div
            key="categories"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <HeroCategories onSelect={handleCategorySelect} />
          </motion.div>
        )}

        {state === 'map' && selectedCategory && (
          <motion.div
            key="map"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Suspense
              fallback={
                <div className="w-full h-screen bg-[#f0ebe3] flex items-center justify-center">
                  <span className="text-premium-black/30 text-xs font-bold uppercase tracking-widest animate-pulse">
                    Loading map…
                  </span>
                </div>
              }
            >
              <HeroMap
                category={selectedCategory}
                onBack={() => setState('categories')}
              />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
