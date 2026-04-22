import { motion } from 'framer-motion';
import { CATEGORY_META, MAP_PLACES, type MapCategory } from '../../../../data/mapPlaces';

const CATEGORIES: MapCategory[] = ['Nature', 'Culinary', 'Attraction', 'Historical'];

// High-quality background images per category
const CATEGORY_BG: Record<MapCategory, string> = {
  Nature:     'https://images.unsplash.com/photo-1602154663343-89fe0bf541ab?q=70&w=800&auto=format&fit=crop',
  Culinary:   'https://images.unsplash.com/photo-1547928576-a4a33237ecd3?q=70&w=800&auto=format&fit=crop',
  Attraction: 'https://images.unsplash.com/photo-1518151246473-fd677e497d39?q=70&w=800&auto=format&fit=crop',
  Historical: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=70&w=800&auto=format&fit=crop',
};

interface HeroCategoriesProps {
  onSelect: (cat: MapCategory) => void;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function HeroCategories({ onSelect }: HeroCategoriesProps) {
  return (
    <div className="relative w-full h-screen bg-[#f5f0e8] flex flex-col overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="shrink-0 px-10 md:px-16 pt-12 pb-8 z-10 flex items-end justify-between border-b border-black/8"
      >
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-premium-black/40 mb-2">
            Malang Explorer
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-premium-black uppercase tracking-tight leading-none">
            What would you like<br />
            to explore?
          </h2>
        </div>
        <p className="text-xs font-semibold text-premium-black/30 pb-1">
          20 curated spots across Malang
        </p>
      </motion.div>

      {/* Category grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex-1 grid grid-cols-2 lg:grid-cols-4 min-h-0"
      >
        {CATEGORIES.map((cat) => {
          const meta = CATEGORY_META[cat];
          const count = MAP_PLACES.filter((p) => p.category === cat).length;

          return (
            <motion.button
              key={cat}
              variants={itemVariants}
              onClick={() => onSelect(cat)}
              className="group relative overflow-hidden border-r border-black/8 last:border-r-0 text-left"
              whileHover="hovered"
            >
              {/* Full background image — visible by default */}
              <div className="absolute inset-0">
                <img
                  src={CATEGORY_BG[cat]}
                  alt={cat}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Gradient overlay so text is always readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                {/* Hover colour tint */}
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  variants={{ hovered: { opacity: 1 } }}
                  transition={{ duration: 0.3 }}
                  style={{ backgroundColor: meta.color + '33' }}
                />
              </div>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 inset-x-0 h-1"
                initial={{ scaleX: 0 }}
                variants={{ hovered: { scaleX: 1 } }}
                transition={{ duration: 0.3 }}
                style={{ backgroundColor: meta.color, originX: 0 }}
              />

              {/* Text content — sits over the dark gradient */}
              <div className="relative z-10 flex flex-col justify-end h-full px-7 pb-10 pt-8">
                <div className="mt-auto">
                  <span className="text-3xl md:text-4xl mb-4 block">{meta.emoji}</span>
                  <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight leading-none mb-1.5">
                    {meta.label}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-5">
                    {count} spots
                  </p>
                  <motion.span
                    initial={{ opacity: 0, x: -6 }}
                    variants={{ hovered: { opacity: 1, x: 0 } }}
                    transition={{ duration: 0.2 }}
                    className="text-xs font-black uppercase tracking-[0.3em] text-white"
                  >
                    Explore →
                  </motion.span>
                </div>
              </div>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
}
