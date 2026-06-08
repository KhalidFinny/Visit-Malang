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
    }, 15000); // 15 seconds cycle
    return () => clearInterval(timer);
  }, []);

  const activeFact = heritageFacts[index];

  return (
    <motion.section 
      className="relative w-full bg-[#f5f4f0] py-40 min-h-[800px] flex items-center overflow-hidden"
    >
      <div className="swiss-container">
        {/* Editorial Section Metadata */}
        <div className="flex items-start justify-between mb-32 border-b-2 border-premium-black/20 pb-10">
          <div className="flex flex-col gap-3">
            <span className="text-swiss text-sm font-black tracking-[0.5em] text-premium-black uppercase opacity-70">
              {t('heritage.section')}
            </span>
            <span className="text-swiss text-3xl font-black text-premium-black uppercase tracking-tight">
              {t('heritage.funFact')}
            </span>
          </div>
          <div className="text-right hidden md:block">
            <span className="text-swiss text-sm tracking-widest text-premium-black/60 uppercase font-black block mb-2">
              {t('heritage.location')}
            </span>
            <span className="text-swiss text-sm tracking-widest text-premium-black/60 uppercase font-black">
              {t('heritage.established')}
            </span>
          </div>
        </div>

        {/* Premium Editorial Fact Card */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-6xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center"
              >
                {/* Left: Metadata & Tag */}
                <div className="md:col-span-3 flex flex-col gap-8">
                  <div className="flex flex-col">
                    <span className="text-swiss text-[10rem] font-thin text-premium-black/10 leading-none -ml-6">
                      {activeFact.num}
                    </span>
                    <span className="text-swiss text-sm tracking-[0.6em] font-black uppercase text-premium-black ml-2">
                      {activeFact.tag}
                    </span>
                  </div>
                </div>

                {/* Right: The Fact Content */}
                <div className="md:col-span-9 border-l-2 border-premium-black/10 pl-16 md:pl-24">
                  <motion.h3 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-editorial text-[clamp(3.5rem,7vw,6.5rem)] text-premium-black leading-[0.85] tracking-tight mb-12 text-balance"
                  >
                    {activeFact.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-swiss text-3xl md:text-4xl text-premium-black leading-[1.4] font-bold max-w-3xl text-pretty"
                  >
                    {activeFact.description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Minimal Editorial Progress Line */}
            <div className="mt-32 h-[2px] bg-premium-black/10 w-full relative">
              <motion.div 
                key={index}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 15, ease: "linear" }}
                className="absolute top-0 left-0 h-full bg-premium-black/40 w-full origin-left"
              />
            </div>
          </div>
        </div>

        {/* Ambient Typography Background */}
        <div className="absolute bottom-0 right-0 translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
          <span className="text-editorial text-[45rem] font-black text-premium-black leading-none">
            {t('heritage.archive')}
          </span>
        </div>
      </div>

    </motion.section>
  );
}
