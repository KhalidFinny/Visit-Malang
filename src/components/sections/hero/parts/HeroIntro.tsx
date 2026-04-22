import { motion } from 'framer-motion';

interface HeroIntroProps {
  onExplore: () => void;
}

const lineVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15 + 0.3,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function HeroIntro({ onExplore }: HeroIntroProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-center text-center">
      {/* Background — Real Mount Bromo Sunrise */}
      <img
        src="https://images.unsplash.com/photo-1602154663343-89fe0bf541ab?q=90&w=1920&auto=format&fit=crop"
        alt="Mount Bromo Sunrise, Malang Region"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlays for depth and readability */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />

      {/* Content Container */}
      <div className="relative z-10 px-6 max-w-5xl">
        {/* Eyebrow */}
        <motion.p
          custom={0}
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          className="text-xs font-bold uppercase tracking-[0.6em] text-white/70 mb-8"
        >
          East Java, Indonesia
        </motion.p>

        {/* 2-Line Headline */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="overflow-hidden">
            <motion.h1
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="text-[clamp(3.5rem,8vw,8rem)] font-editorial text-white uppercase leading-none"
            >
              Explore <span style={{ color: '#a3b18a' }}>Beautiful</span>
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              custom={2}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="text-[clamp(3.5rem,8vw,8rem)] font-editorial text-white uppercase leading-none"
            >
              Malang.
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Bottom Section: Subtitle + CTA */}
      <div className="absolute bottom-16 left-0 right-0 z-10 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-white/80 text-sm md:text-lg font-medium tracking-wide mb-8 max-w-md mx-auto"
        >
          Find top places, plan your trip instantly.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex flex-col items-center gap-10"
        >
          {/* Main CTA: Interactive Map */}
          <motion.button
            onClick={onExplore}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-2xl flex items-center gap-4 hover:bg-white/20 transition-all group"
          >
            <div className="flex flex-col items-start">
              <span className="text-white text-[10px] font-black uppercase tracking-[0.2em] leading-none mb-1 opacity-60">
                Experience
              </span>
              <span className="text-white text-xs font-black uppercase tracking-[0.3em] leading-none">
                Interactive Map
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-[#a3b18a]/20 flex items-center justify-center group-hover:bg-[#a3b18a]/40 transition-colors">
               <span className="text-[#a3b18a] text-sm">🗺️</span>
            </div>
          </motion.button>

          {/* Secondary CTA: Scroll hint */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-white/40 text-[9px] font-bold uppercase tracking-[0.5em]">
              Or scroll to discover
            </span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-white/20 text-lg"
            >
              ↓
            </motion.span>
          </div>
        </motion.div>
      </div>

      {/* Curated Counter Pins */}
      <div className="absolute bottom-8 left-12 right-12 flex justify-between hidden md:flex opacity-20">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">20 Curated Spots</span>
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white">4 Categories</span>
      </div>
    </div>
  );
}
