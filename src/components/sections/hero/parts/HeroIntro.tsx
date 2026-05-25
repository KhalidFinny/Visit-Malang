import { motion } from 'framer-motion';

const MALANG_BG = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop';

interface HeroIntroProps {
  onExplore: () => void;
  onScrollDown: () => void;
}

export default function HeroIntro({ onExplore, onScrollDown }: HeroIntroProps) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={MALANG_BG}
          alt="Malang Landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        {/* Label */}
        <span className="text-[14px] font-black tracking-[0.4em] text-white/40 uppercase mb-8">
          Discover Indonesia
        </span>

        {/* Main headline */}
        <h1 className="text-editorial text-[clamp(4rem,12vw,10rem)] text-white leading-[0.85] tracking-tight uppercase mb-6">
          Explore
          <br />
          Malang
        </h1>

        {/* Subtitle */}
        <p className="text-[18px] text-white/60 font-medium max-w-md leading-relaxed mb-12">
          A journey through East Java's most enchanting city — from ancient temples to mountain vistas.
        </p>

        {/* Primary CTA */}
        <motion.button
          onClick={onExplore}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="group flex items-center gap-3 px-10 py-5 bg-white text-[#1a1a1a] text-[14px] font-black uppercase tracking-[0.25em] rounded-full hover:bg-white/90 transition-colors mb-8"
        >
          Start Exploring
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-1 transition-transform"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </motion.button>

        {/* Scroll CTA */}
        <button
          onClick={onScrollDown}
          className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors"
        >
          <span className="text-[12px] font-black uppercase tracking-[0.3em]">
            Scroll to see the rest
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
        </button>
      </motion.div>

      {/* Bottom decorative label */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="absolute bottom-8 left-8 text-[14px] font-black tracking-[0.3em] text-white/20 uppercase"
      >
        01 / Map
      </motion.div>
    </div>
  );
}
