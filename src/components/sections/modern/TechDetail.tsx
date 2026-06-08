import React from "react";
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ImageWithSkeleton } from "../../shared/Skeleton";

const TechDetail: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const timeline = [
    { year: t('tech.timeline.year1980'), event: t('tech.timeline.event1980'), desc: t('tech.timeline.desc1980') },
    { year: t('tech.timeline.year2000'), event: t('tech.timeline.event2000'), desc: t('tech.timeline.desc2000') },
    { year: t('tech.timeline.year2015'), event: t('tech.timeline.event2015'), desc: t('tech.timeline.desc2015') },
    { year: t('tech.timeline.yearToday'), event: t('tech.timeline.eventToday'), desc: t('tech.timeline.descToday') },
  ];

  const studentFeatures = [
    {
      title: t('tech.creative.feature01'),
      desc: t('tech.creative.desc01'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3.33 3 10.67 3 14 0v-5" />
        </svg>
      )
    },
    {
      title: t('tech.creative.feature02'),
      desc: t('tech.creative.desc02'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      title: t('tech.creative.feature03'),
      desc: t('tech.creative.desc03'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-5c1.62-2.2 5-3 5-3s-.38 3.38-2.5 5.5c-1.9 1.9-4.5 2.5-4.5 2.5z" /><path d="M12 15v5s3.03-.55 5-2c2.2-1.62 3-5 3-5s-3.38.38-5.5 2.5c-1.9 1.9-2.5 4.5-2.5 4.5z" />
        </svg>
      )
    },
    {
      title: t('tech.creative.feature04'),
      desc: t('tech.creative.desc04'),
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" /><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
        </svg>
      )
    },
  ];

  return (
    <div className="min-h-screen bg-[#F2E9E4] text-[#0A0A0A] font-sans selection:bg-[#4A5759]/20">

      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-[#F2E9E4]">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F2E9E4] z-10" />
          <ImageWithSkeleton
            src="/this.jpg"
            alt="Modern Malang"
            className="w-full h-full object-cover opacity-40 grayscale-[0.2]"
            wrapperClassName="absolute inset-0 w-full h-full"
          />
        </motion.div>

        <button
          onClick={() => navigate("/")}
          className="absolute top-8 left-8 z-30 w-10 h-10 flex items-center justify-center rounded-full bg-black/5 border border-black/10 hover:bg-black/10 transition"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="relative z-20 text-center swiss-container">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-swiss text-[12px] md:text-[14px] font-black tracking-[0.8em] text-[#0A0A0A]/40 uppercase mb-8 block"
          >
            {t('tech.hero.label')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-editorial text-[clamp(4.5rem,11vw,8rem)] text-balance leading-[0.85] uppercase tracking-tighter mb-10 text-[#0A0A0A]"
          >
            {t('tech.hero.titleLine1')} <br /> {t('tech.hero.titleLine2')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-swiss text-[12px] md:text-base text-[#0A0A0A]/50 tracking-[0.5em] uppercase max-w-2xl mx-auto mb-14 font-medium"
          >
            {t('tech.hero.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* 2. A CITY OF STUDENTS & CREATIVITY */}
      <section className="py-32 -mt-1 relative z-20 bg-[#F2E9E4]">
        <div className="swiss-container">
          <div className="text-center mb-24">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-swiss text-[10px] font-black tracking-[0.5em] text-[#4A5759] uppercase mb-4 block"
            >
              {t('tech.creative.label')}
            </motion.span>
            <h2 className="text-editorial text-5xl md:text-7xl uppercase tracking-tighter leading-none text-[#0A0A0A] text-balance">{t('tech.creative.titleLine1')} <br /> {t('tech.creative.titleLine2')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentFeatures.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-white/30 border border-[#0A0A0A]/5 rounded-2xl group hover:bg-[#A3B18A]/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-[#4A5759] mb-8 bg-[#0A0A0A]/5 w-14 h-14 flex items-center justify-center rounded-xl group-hover:bg-[#4A5759] group-hover:text-white transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-swiss text-lg font-bold uppercase mb-3 text-[#0A0A0A] text-balance">{f.title}</h3>
                <p className="text-swiss text-xs text-[#0A0A0A]/50 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. MALANG THROUGH THE YEARS */}
      <section className="py-32 bg-[#0A0A0A]/5 relative">
        <div className="swiss-container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
            <h2 className="text-editorial text-5xl md:text-7xl uppercase tracking-tighter leading-none text-[#0A0A0A] text-balance">{t('tech.timeline.titleLine1')} <br /> {t('tech.timeline.titleLine2')}</h2>
            <p className="text-swiss text-[#0A0A0A]/30 text-[10px] md:text-xs max-w-[200px] text-right uppercase tracking-[0.3em] font-black leading-relaxed">{t('tech.timeline.subtitle')}</p>
          </div>

          <div className="relative px-8 md:px-0">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-[#0A0A0A]/10" />

            <div className="space-y-40">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-0 relative`}
                >
                  {/* LEFT SIDE CONTENT */}
                  <div className="flex-1 w-full order-2 md:order-1 text-center md:text-right md:pr-16">
                    {i % 2 === 0 ? (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                      >
                        <h3 className="text-swiss text-xl font-black uppercase mb-2 text-[#0A0A0A] text-balance">{item.event}</h3>
                        <p className="text-[#0A0A0A]/50 text-xs max-w-xs ml-auto mr-auto md:mr-0 leading-relaxed">{item.desc}</p>
                      </motion.div>
                    ) : <div className="hidden md:block" />}
                  </div>

                  {/* CENTER CIRCLE WITH YEAR */}
                  <div className="order-1 md:order-2 w-20 h-20 rounded-full bg-[#F2E9E4] border-2 border-[#4A5759]/10 flex items-center justify-center relative z-10 shrink-0 shadow-lg group hover:border-[#A3B18A] transition-colors duration-500">
                    <div className="text-center">
                      <span className="text-editorial text-sm md:text-base text-[#4A5759] leading-none block font-black">{item.year}</span>
                    </div>
                  </div>

                  {/* RIGHT SIDE CONTENT */}
                  <div className="flex-1 w-full order-3 md:order-3 text-center md:text-left md:pl-16">
                    {i % 2 !== 0 ? (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                      >
                        <h3 className="text-swiss text-xl font-black uppercase mb-2 text-[#0A0A0A] text-balance">{item.event}</h3>
                        <p className="text-[#0A0A0A]/50 text-xs max-w-xs ml-auto mr-auto md:ml-0 leading-relaxed">{item.desc}</p>
                      </motion.div>
                    ) : <div className="hidden md:block" />}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. TOWARDS A SMARTER MALANG */}
      <section className="py-32 overflow-hidden relative bg-white">
        <div className="swiss-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-swiss text-[10px] font-black tracking-[0.5em] text-[#A3B18A] uppercase mb-6 block"
              >
                {t('tech.future.label')}
              </motion.span>
              <h2 className="text-editorial text-5xl md:text-8xl uppercase tracking-tighter leading-[0.85] mb-10 text-[#0A0A0A] text-balance">{t('tech.future.titleLine1')} <br /> {t('tech.future.titleLine2')} <br /> {t('tech.future.titleLine3')}</h2>
              <p className="text-swiss text-lg md:text-xl text-[#0A0A0A]/60 leading-relaxed max-w-xl font-medium">
                “{t('tech.future.quote')}”
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              {[t('tech.future.item01'), t('tech.future.item02'), t('tech.future.item03')].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 15 }}
                  className="p-8 border border-[#0A0A0A]/10 rounded-2xl flex items-center justify-between group hover:bg-[#F2E9E4] transition-all duration-500"
                >
                  <span className="text-swiss text-base font-bold uppercase tracking-widest text-[#0A0A0A]">{item}</span>
                  <div className="w-10 h-10 rounded-full border border-[#0A0A0A]/10 flex items-center justify-center group-hover:bg-[#4A5759] group-hover:text-white transition-colors">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA */}
      <section className="py-48 bg-[#F2E9E4] relative overflow-hidden border-t border-[#0A0A0A]/5">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-[#A3B18A]/10 blur-[150px] rounded-full" />
        <div className="swiss-container relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-editorial text-6xl md:text-[8rem] uppercase tracking-tighter mb-10 leading-none text-[#0A0A0A]"
          >
            {t('tech.closing.titleLine1')} <br /> {t('tech.closing.titleLine2')}
          </motion.h2>
          <p className="text-swiss text-base md:text-lg text-[#0A0A0A]/40 max-w-xl mx-auto mb-16 uppercase tracking-[0.3em] font-black">
            {t('tech.closing.subtitle')}
          </p>
          <button
            onClick={() => navigate("/")}
            className="group flex flex-col items-center gap-6 mx-auto"
          >
            <div className="w-20 h-20 rounded-full border border-[#0A0A0A]/20 flex items-center justify-center group-hover:bg-[#0A0A0A] group-hover:text-white transition-all duration-500 scale-100 group-hover:scale-110 shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="text-swiss text-[10px] font-black uppercase tracking-[0.5em] text-[#0A0A0A]/30 group-hover:text-[#0A0A0A] transition-colors">{t('tech.closing.cta')}</span>
          </button>
        </div>
      </section>

    </div>
  );
};

export default TechDetail;
