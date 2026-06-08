import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  BatikPattern,
  FloatingDecorations,
} from '../decorations';

interface HeroIntroProps {
  onExplore: () => void;
  onScrollDown: () => void;
}

export default function HeroIntro({ onExplore, onScrollDown }: HeroIntroProps) {
  const { t } = useTranslation();

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#f5f4f0]">
      {/* Decorative Layers — zero image loading */}
      <BatikPattern />

      {/* Malang line-art illustration — zoomed to fill viewport edge to edge */}
      <img
        src="/herosketch.png"
        alt="Malang landmarks illustration"
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 w-full h-full object-cover object-bottom pointer-events-none select-none z-[1] opacity-[0.7] origin-bottom scale-[1.6]"
      />

      <FloatingDecorations />



      {/* Content — Swiss editorial layout */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        {/* Label — top metadata */}
        <span className="text-[13px] font-black tracking-[0.5em] text-[#1a1a1a]/30 uppercase mb-12">
          {t('hero.intro.label')}
        </span>

        {/* Main title — the destination, enormous */}
        <h1 className="text-editorial text-[clamp(6rem,16vw,14rem)] text-[#1a1a1a] leading-[0.8] tracking-tight uppercase">
          {t('hero.intro.titleLine2')}
        </h1>

        {/* Action subtitle */}
        <p className="text-editorial text-[clamp(1.2rem,2.5vw,2rem)] text-[#1a1a1a]/50 tracking-[0.15em] uppercase mt-4 mb-10">
          {t('hero.intro.titleLine1')}
        </p>

        {/* Body subtitle */}
        <p className="text-[16px] text-[#1a1a1a]/50 font-medium max-w-md leading-relaxed mb-14 text-pretty">
          {t('hero.intro.subtitle')}
        </p>

        {/* Primary CTA */}
        <motion.button
          onClick={onExplore}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="group flex items-center gap-3 px-10 py-5 bg-[#1a1a1a] text-white text-[14px] font-black uppercase tracking-[0.25em] rounded-full hover:bg-[#1a1a1a]/90 transition-colors mb-8"
        >
          {t('hero.intro.cta')}
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

        {/* Scroll CTA — with background for visibility over sketch */}
        <button
          onClick={onScrollDown}
          className="flex flex-col items-center gap-2 px-6 py-3 rounded-full bg-[#f5f4f0]/70 backdrop-blur-sm text-[#1a1a1a]/50 hover:text-[#1a1a1a]/80 hover:bg-[#f5f4f0]/90 transition-all"
        >
          <span className="text-[11px] font-black uppercase tracking-[0.4em]">
            {t('hero.intro.scroll')}
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        className="absolute bottom-8 left-8 text-[14px] font-black tracking-[0.3em] text-[#1a1a1a]/20 uppercase z-10"
      >
        {t('hero.intro.mapLabel')}
      </motion.div>
    </div>
  );
}
