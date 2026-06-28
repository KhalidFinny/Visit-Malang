import { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";

export default function HeritageStage() {
  const { t } = useTranslation();
  
  const heritageFacts = [
    { num: "01", title: t('heritage.facts.01.title'), description: t('heritage.facts.01.description'), tag: t('heritage.facts.01.tag') },
    { num: "02", title: t('heritage.facts.02.title'), description: t('heritage.facts.02.description'), tag: t('heritage.facts.02.tag') },
    { num: "03", title: t('heritage.facts.03.title'), description: t('heritage.facts.03.description'), tag: t('heritage.facts.03.tag') },
    { num: "04", title: t('heritage.facts.04.title'), description: t('heritage.facts.04.description'), tag: t('heritage.facts.04.tag') },
    { num: "05", title: t('heritage.facts.05.title'), description: t('heritage.facts.05.description'), tag: t('heritage.facts.05.tag') },
    { num: "06", title: t('heritage.facts.06.title'), description: t('heritage.facts.06.description'), tag: t('heritage.facts.06.tag') },
    { num: "07", title: t('heritage.facts.07.title'), description: t('heritage.facts.07.description'), tag: t('heritage.facts.07.tag') },
    { num: "08", title: t('heritage.facts.08.title'), description: t('heritage.facts.08.description'), tag: t('heritage.facts.08.tag') },
    { num: "09", title: t('heritage.facts.09.title'), description: t('heritage.facts.09.description'), tag: t('heritage.facts.09.tag') },
    { num: "10", title: t('heritage.facts.10.title'), description: t('heritage.facts.10.description'), tag: t('heritage.facts.10.tag') },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heritageFacts.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  const activeFact = heritageFacts[index];


  return (
    <motion.section 
      className="relative w-full bg-[#f5f4f0] py-32 md:py-44 min-h-[85vh] flex items-center overflow-hidden"
    >
      <div className="swiss-container w-full max-w-7xl">
        
        {/* Header Block */}
        <div className="flex items-end justify-between mb-20 border-b-2 border-premium-black pb-8 select-none">
          <span className="text-swiss text-lg md:text-xl lg:text-2xl font-black text-premium-black uppercase tracking-tight">
            {t('heritage.funFact')}
          </span>
          <div className="text-right hidden md:block">
            <span className="text-swiss text-sm md:text-base tracking-widest text-[#4e653c] uppercase font-black block mb-1">
              {t('heritage.location')}
            </span>
            <span className="text-swiss text-sm md:text-base tracking-widest text-[#4e653c] uppercase font-black">
              {t('heritage.established')}
            </span>
          </div>
        </div>

        {/* Full-Screen Text Display */}
        <div className="text-left select-none w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start w-full"
            >
              {/* Category Tag (Minimum size: md) */}
              <span className="text-swiss text-sm md:text-base tracking-[0.25em] font-extrabold uppercase text-[#4e653c] mb-6 block">
                // {activeFact.tag}
              </span>

              {/* Majestic Editorial Title (Scaled down a bit) */}
              <h3 className="text-editorial text-[clamp(2rem,5vw,4rem)] text-premium-black leading-[1.05] tracking-tighter mb-8 uppercase text-balance font-black">
                {activeFact.title}
              </h3>

              {/* Readable Description (Scaled down a bit) */}
              <p className="text-swiss text-xl md:text-2xl lg:text-3xl text-premium-black/80 leading-[1.4] font-bold text-pretty transition-colors duration-300">
                {activeFact.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal Progress Indicator */}
        <div className="mt-20 h-[2.5px] bg-premium-black/10 w-full relative rounded-full overflow-hidden">
          <motion.div 
            key={index}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 15, ease: "linear" }}
            className="absolute top-0 left-0 h-full bg-[#4e653c] w-full origin-left"
          />
        </div>

      </div>
    </motion.section>
  );
}
