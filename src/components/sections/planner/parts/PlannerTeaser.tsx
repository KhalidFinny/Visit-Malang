import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import { ImageWithSkeleton } from "../../../shared/Skeleton";

interface PlannerTeaserProps {
  onOpen: () => void;
}

export default function PlannerTeaser({ onOpen }: PlannerTeaserProps) {
  const { t } = useTranslation();

  return (
    <section 
      className="relative w-full h-[80vh] md:h-screen overflow-hidden cursor-pointer group"
      onClick={onOpen}
    >
      {/* 1. Iconic Bromo Background */}
      <div className="absolute inset-0">
        <ImageWithSkeleton 
          src="https://images.unsplash.com/photo-1602154663343-89fe0bf541ab?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
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
          className="text-swiss text-white/80 text-xl md:text-3xl font-light max-w-2xl leading-relaxed mb-12"
        >
          {t('planner.teaser.subtitle')}
        </motion.p>

        {/* Large CTA: Vina Sans (Editorial) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="absolute bottom-20 right-10 md:right-20 flex flex-col items-end max-w-[50vw]"
        >
          <div className="relative group/cta">
            <h3 className="text-editorial text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[8rem] text-white leading-[0.85] select-none text-right text-balance">
              {t('planner.teaser.ctaLine1')}{' '}
              {t('planner.teaser.ctaLine2')}
            </h3>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur Gradients */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-heritage-sage/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-petal-blush/10 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}
