import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

export default function HeroContent() {
  const { t } = useTranslation();
  return (
    <motion.div
      className="absolute inset-x-0 top-[15vh] md:top-[18vh] flex flex-col items-center z-10 pointer-events-none select-none"
    >
      <div className="flex flex-col items-start w-fit mx-auto px-6">
        <motion.span
          className="font-['Vina_Sans'] text-2xl md:text-4xl text-white/90 tracking-[0.2em] uppercase -mb-3 md:-mb-6 pl-1 z-10"
        >
          {t('hero.airplane.title')}
        </motion.span>
        <motion.h1
          className="text-editorial text-[28vw] md:text-[22vw] text-white drop-shadow-2xl"
        >
          {t('hero.airplane.city')}
        </motion.h1>
      </div>
    </motion.div>
  );
}
