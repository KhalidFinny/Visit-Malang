import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCity,
  faGraduationCap,
  faSeedling,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const TechModern: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();



  const stats = [
    { label: t("techModern.stats.uni.label"), value: "80+", desc: t("techModern.stats.uni.desc") },
    { label: t("techModern.stats.students.label"), value: "±300.000", desc: t("techModern.stats.students.desc") },
    { label: t("techModern.stats.smartcity.label"), value: "5+", desc: t("techModern.stats.smartcity.desc") },
    { label: t("techModern.stats.startup.label"), value: "±50", desc: t("techModern.stats.startup.desc") }
  ];

  const pillars = [
    {
      title: t("techModern.pillars.smartcity.title"),
      icon: faCity,
      desc: t("techModern.pillars.smartcity.desc"),
    },
    {
      title: t("techModern.pillars.education.title"),
      icon: faGraduationCap,
      desc: t("techModern.pillars.education.desc"),
    },
    {
      title: t("techModern.pillars.agriculture.title"),
      icon: faSeedling,
      desc: t("techModern.pillars.agriculture.desc"),
    },
    {
      title: t("techModern.pillars.tourism.title"),
      icon: faMapLocationDot,
      desc: t("techModern.pillars.tourism.desc"),
    }
  ];

  const startups = [
    { name: "Beon Intermedia", sector: t("techModern.eco.startup1.sector"), desc: t("techModern.eco.startup1.desc"), url: "https://beon.co.id" },
    { name: "Jagoan Hosting", sector: t("techModern.eco.startup2.sector"), desc: t("techModern.eco.startup2.desc"), url: "https://www.jagoanhosting.com" },
    { name: "LetsPlay Indonesia", sector: t("techModern.eco.startup3.sector"), desc: t("techModern.eco.startup3.desc"), url: "https://letsplay.id" },
    { name: "DOT Indonesia", sector: t("techModern.eco.startup4.sector"), desc: t("techModern.eco.startup4.desc"), url: "https://dot.co.id" },
    { name: "Algostudio", sector: t("techModern.eco.startup5.sector"), desc: t("techModern.eco.startup5.desc"), url: "https://algostudio.net" },
    { name: "Ngalup.co", sector: t("techModern.eco.startup6.sector"), desc: t("techModern.eco.startup6.desc"), url: "https://ngalup.co" }
  ];

  const communities = [
    { name: "Google Developer Group (GDG) Malang", type: t("techModern.eco.comm1.type"), desc: t("techModern.eco.comm1.desc"), url: "https://gdg.community.dev/gdg-malang/" },
    { name: "Startup Weekend Malang", type: t("techModern.eco.comm2.type"), desc: t("techModern.eco.comm2.desc"), url: "https://www.techstars.com/communities/startup-weekend" },
    { name: "Malang Hacker Space", type: t("techModern.eco.comm3.type"), desc: t("techModern.eco.comm3.desc"), url: "https://www.instagram.com/malanghacker/" },
    { name: "Brawijaya IT Exhibition", type: t("techModern.eco.comm4.type"), desc: t("techModern.eco.comm4.desc"), url: "https://em.ub.ac.id/" },
    { name: "STASION (Startup Singo Edan)", type: t("techModern.eco.comm5.type"), desc: t("techModern.eco.comm5.desc"), url: "https://stasion.org/" },
    { name: "Workshop & Riset Informatika (WRI)", type: t("techModern.eco.comm6.type"), desc: t("techModern.eco.comm6.desc"), url: "https://wridev.id/en/" }
  ];

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#2D221F] font-sans selection:bg-[#4A5759]/20">
      {/* 1. HERO */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#f5f4f0] pt-20 pb-20">
        <button
          onClick={() => navigate("/")}
          className="fixed top-8 left-8 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-white/50 backdrop-blur-md border border-black/10 hover:bg-black/10 transition"
          aria-label={t("techModern.closing.back")}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2D221F" strokeWidth="2.5">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="relative z-20 text-center swiss-container mx-auto">
          <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-swiss text-sm md:text-[14px] font-black tracking-[0.8em] text-[#2D221F]/40 uppercase mb-8 block"
          >
            {t("techModern.hero.label")}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-editorial text-[clamp(3.5rem,8vw,6rem)] text-balance leading-[0.9] uppercase tracking-tighter mb-10 text-[#2D221F]"
          >
            {t("techModern.hero.titleLine1")} <br /> {t("techModern.hero.titleLine2")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-swiss text-sm md:text-base text-[#2D221F]/70 leading-relaxed max-w-3xl mx-auto font-medium"
          >
            {t("techModern.hero.desc")}
          </motion.p>
          </div>
        </div>
      </section>

      {/* 2. STAT HIGHLIGHTS */}
      <section className="py-24 relative z-20 bg-white">
        <div className="swiss-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 border-l-2 border-[#A3B18A]"
              >
                <div className="text-editorial text-5xl text-[#2D221F] mb-4">{s.value}</div>
                <h3 className="text-swiss text-sm font-bold uppercase tracking-widest text-[#4A5759] mb-3">{s.label}</h3>
                <p className="text-swiss text-sm text-[#2D221F]/60 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TECHNOLOGY PILLARS */}
      <section className="py-32 bg-[#f5f4f0]">
        <div className="swiss-container">
          <div className="text-center mb-20">
            <h2 className="text-editorial text-5xl md:text-7xl uppercase tracking-tighter leading-none text-[#2D221F] mb-6">{t("techModern.pillars.title")}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="group relative bg-transparent hover:bg-[#2D221F]/[0.02] rounded-3xl overflow-hidden text-left w-full border border-[#2D221F]/10 hover:border-[#2D221F]/20 transition-all duration-300"
              >
                {/* Giant background icon */}
                <FontAwesomeIcon
                  icon={pillar.icon}
                  className="absolute -right-10 -bottom-10 text-[180px] opacity-[0.03] text-[#2D221F] pointer-events-none select-none transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 group-hover:opacity-[0.05]"
                />

                <div className="relative z-10 flex flex-col justify-between p-8 h-full">
                  {/* Top: small icon badge */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-transparent border border-[#2D221F]/10 transition-colors duration-300 group-hover:bg-[#2D221F]/5 mb-16">
                    <FontAwesomeIcon
                      icon={pillar.icon}
                      className="text-xl text-[#2D221F]"
                    />
                  </div>

                  {/* Bottom: text */}
                  <div>
                    <h3 className="text-swiss text-2xl font-bold tracking-tight leading-tight text-[#2D221F] mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-swiss text-sm text-[#2D221F]/70 leading-relaxed text-balance">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DIGITAL ECOSYSTEM */}
      <section className="py-32 bg-[#2D221F] text-white">
        <div className="swiss-container">
          <div className="mb-24">
            <h2 className="text-editorial text-5xl md:text-7xl uppercase tracking-tighter leading-none mb-6">{t("techModern.eco.title")}</h2>
            <p className="text-swiss text-sm md:text-base text-white/60 max-w-2xl leading-relaxed">
              {t("techModern.eco.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Startups */}
            <div>
              <h3 className="text-swiss text-xl font-bold uppercase tracking-widest text-[#A3B18A] mb-10 border-b border-white/10 pb-4">{t("techModern.eco.startups")}</h3>
              <div className="space-y-8">
                {startups.map((s, i) => (
                  <a href={s.url} target="_blank" rel="noopener noreferrer" key={i} className="block group">
                    <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                      <div className="flex items-center gap-3 mb-2 group-hover:text-[#A3B18A] transition-colors">
                        <h4 className="text-lg font-black">{s.name}</h4>
                        <span className="text-sm uppercase tracking-wider px-2 py-1 bg-white/10 text-white rounded-full">{s.sector}</span>
                      </div>
                      <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">{s.desc}</p>
                    </motion.div>
                  </a>
                ))}
              </div>
            </div>

            {/* Communities & Events */}
            <div>
              <h3 className="text-swiss text-xl font-bold uppercase tracking-widest text-[#A3B18A] mb-10 border-b border-white/10 pb-4">{t("techModern.eco.communities")}</h3>
              <div className="space-y-8">
                {communities.map((c, i) => (
                  <a href={c.url} target="_blank" rel="noopener noreferrer" key={i} className="block group">
                    <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                      <div className="flex items-center gap-3 mb-2 group-hover:text-[#A3B18A] transition-colors">
                        <h4 className="text-lg font-black">{c.name}</h4>
                        <span className="text-sm uppercase tracking-wider px-2 py-1 bg-[#4A5759]/50 text-white rounded-full">{c.type}</span>
                      </div>
                      <p className="text-sm text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">{c.desc}</p>
                    </motion.div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOSING */}
      <section className="py-32 bg-[#A3B18A] relative overflow-hidden text-[#2D221F]">
        <div className="swiss-container flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="opacity-20 mb-8">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-swiss text-xl md:text-2xl font-medium leading-relaxed mb-12 text-balance">
              {t("techModern.closing.quote")}
            </p>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-4 px-8 py-4 bg-[#2D221F] text-white text-sm font-black uppercase tracking-[0.3em] rounded-full hover:bg-white hover:text-[#2D221F] transition-all duration-300"
            >
              {t("techModern.closing.back")}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TechModern;
