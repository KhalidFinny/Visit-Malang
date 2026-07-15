import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { ImageWithSkeleton } from "../../../shared/Skeleton";
import type { PlannerTeaserProps } from "../types";


export default function PlannerTeaser({ onOpen }: PlannerTeaserProps) {
  const { t } = useTranslation();

  return (
    <section className="relative w-full bg-[#f5f4f0] overflow-visible">
      <div 
        className="w-full h-[80vh] md:h-screen overflow-hidden cursor-pointer group rounded-t-[2.5rem] md:rounded-t-[4.5rem] border-t border-premium-black/5 relative"
        onClick={onOpen}
      >
        {/* 1. Iconic Bromo Background */}
        <div className="absolute inset-0">
          <ImageWithSkeleton 
            src="https://images.unsplash.com/photo-1602154663343-89fe0bf541ab?q=75&w=600&auto=format&fit=crop"
            alt="Mt. Bromo Landscape" 
            className="w-full h-full object-cover"
            wrapperClassName="w-full h-full"
          />
          {/* Dark Editorial Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>

        <div className="swiss-container relative h-full flex flex-col justify-center items-start z-10 pt-20">
          {/* Top Text: Script Style */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-script text-white text-5xl md:text-8xl leading-none mb-6 opacity-90"
          >
            {t('planner.teaser.title')}
          </motion.h2>

          {/* Mid Text: Urbanist (Swiss) */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-swiss text-white/80 text-base sm:text-xl md:text-3xl font-light max-w-2xl leading-relaxed mb-8 sm:mb-12"
          >
            {t('planner.teaser.subtitle')}
          </motion.p>

          {/* Styled CTA Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="absolute bottom-44 sm:bottom-48 md:bottom-56 right-6 sm:right-10 md:right-16 z-20"
          >
            <button
              onClick={onOpen}
              className="group relative inline-flex items-center gap-3 sm:gap-4 rounded-[24px] border-2 border-white/30 bg-white/12 px-6 sm:px-8 py-4 sm:py-5 backdrop-blur-md transition-all hover:border-white/50 hover:bg-white/18 active:scale-[0.97]"
            >
              <span className="text-editorial text-[1.6rem] sm:text-[2.8rem] md:text-[4rem] lg:text-[5.5rem] text-white leading-none tracking-tight select-none">
                {t('planner.teaser.ctaLine1')} {t('planner.teaser.ctaLine2')}
              </span>
              <svg className="w-7 h-7 sm:w-9 sm:h-9 text-white/70 transition-transform group-hover:translate-x-1 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Footer overlaid at bottom of image */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 w-full text-center select-none pointer-events-none">
          <p className="text-sm font-bold text-white/50 tracking-widest uppercase mb-1">
            Come and Visit Malang
          </p>
          <p className="text-sm font-semibold text-white/30">
            &copy; {new Date().getFullYear()} Team Khalid &amp; Resty. All rights reserved.
          </p>
        </div>

        {/* Decorative Blur Gradients */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-heritage-sage/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-petal-blush/10 rounded-full blur-[100px] pointer-events-none" />
      </div>
    </section>
  );
}
