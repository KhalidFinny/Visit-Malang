import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import type { PlannerTeaserProps } from "../types";

export default function PlannerTeaser({ onOpen }: PlannerTeaserProps) {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-[#f5f4f0] px-4 sm:px-8 md:px-12 lg:px-16 py-10 md:py-14">
      <div 
        className="w-full max-w-[1400px] xl:max-w-[1700px] mx-auto min-h-[480px] md:min-h-[560px] overflow-hidden cursor-pointer group rounded-[2.5rem] md:rounded-[4rem] border border-premium-black/10 relative flex flex-col justify-between p-8 sm:p-12 md:p-16 lg:p-20 shadow-2xl transition-all duration-500"
        onClick={onOpen}
      >
        {/* 1. Iconic Local Bromo Background */}
        <div className="absolute inset-0">
          <img 
            src="/locations/nature/gunung-bromo/cover.webp"
            alt={t('planner.teaser.imageAlt')}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Dark Gradient Overlay for optimal legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-black/75 z-10" />
        </div>

        {/* Top spacer to align content to vertical center */}
        <div className="relative z-20" />

        {/* 2. Main Centered Content Grid (Text Left, Button Right) */}
        <div className="swiss-container relative z-20 w-full my-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
            
            {/* Left Text Block */}
            <div className="flex-1 max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-editorial text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-tight mb-4"
              >
                {t('planner.teaser.title')}
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
                className="text-swiss text-white/85 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-xl"
              >
                {t('planner.teaser.subtitle')}
              </motion.p>
            </div>

            {/* Right Button */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="shrink-0 self-stretch sm:self-auto"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpen();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 sm:gap-4 rounded-full bg-white hover:bg-heritage-sage text-premium-black hover:text-white px-8 sm:px-10 py-4 sm:py-5 transition-all duration-300 shadow-2xl hover:shadow-[#A3B18A]/30 group/btn cursor-pointer"
              >
                <span className="text-editorial text-lg sm:text-xl md:text-2xl font-black uppercase tracking-wider select-none">
                  {t('planner.teaser.ctaLine1')} {t('planner.teaser.ctaLine2')}
                </span>
                <svg 
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover/btn:translate-x-1.5 shrink-0" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>

          </div>
        </div>

        {/* 3. Small Subtle Credit Footer */}
        <div className="relative z-20 w-full pt-8 text-center select-none">
          <p className="text-[10px] sm:text-xs font-semibold text-white/40 tracking-widest uppercase">
            {t('planner.teaser.footer')} &bull; &copy; {new Date().getFullYear()} Team Khalid &amp; Resty. {t('planner.teaser.rightsReserved')}
          </p>
        </div>

        {/* Decorative Ambient Blurs */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-heritage-sage/15 rounded-full blur-[100px] pointer-events-none z-10" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-[100px] pointer-events-none z-10" />
      </div>
    </section>
  );
}
