import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudSun, faThermometerHalf, faWind, faDroplet, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { malangRecommendations } from "./weatherData";
import RecommendationCard from "./RecommendationCard";

export default function WeatherStage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const date = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date());

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % malangRecommendations.length);
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + malangRecommendations.length) % malangRecommendations.length);
  }, []);

  // Weather meta chips
  const weatherChips = [
    { icon: faThermometerHalf, label: "22°C" },
    { icon: faWind, label: "12 km/h" },
    { icon: faDroplet, label: "72%" },
  ];

  return (
    <section className="relative w-full h-screen bg-midnight-steel flex flex-col overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />

      <div className="relative z-10 flex flex-col flex-1 gap-4 pt-8 pb-6 px-8 max-w-7xl mx-auto w-full">

        {/* ── Header Row ── */}
        <div className="grid grid-cols-[1fr_auto] items-end gap-8">
          {/* Left: Label + Title + Subtitle */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-['Urbanist'] text-[10px] tracking-[0.45em] text-white/30 uppercase mb-2"
            >
              02 — Daily Conditions
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-['Urbanist'] font-black text-[clamp(2.8rem,6vw,5.5rem)] text-white leading-[0.9] uppercase tracking-tight"
            >
              Today's<br />Weather
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-['Urbanist'] text-sm text-white/35 lowercase mt-2 tracking-wide"
            >
              perfect conditions for exploring Malang.
            </motion.p>
          </div>

          {/* Right: Temp + Icon + Chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-end gap-3"
          >
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="font-['Urbanist'] font-thin text-[clamp(3rem,6vw,5rem)] text-white leading-none tabular-nums">
                  22°
                </div>
                <div className="font-['Urbanist'] text-[11px] text-white/30 lowercase tracking-widest mt-1">{date}</div>
              </div>
              <div className="h-14 w-px bg-white/15" />
              <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="text-white/80">
                <FontAwesomeIcon icon={faCloudSun} className="text-5xl" />
              </motion.div>
            </div>
            <div className="flex items-center gap-2">
              {weatherChips.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-white/50 text-[10px] font-['Urbanist'] tracking-wider">
                  <FontAwesomeIcon icon={icon} className="text-[9px]" />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-white/8" />

        {/* ── Stacked Carousel ── */}
        <div className="relative flex-1 flex items-center justify-center min-h-0">
          <div className="relative w-full h-full flex items-center justify-center">

            {/* Navigation Buttons */}
            <div className="absolute left-0 z-50 flex items-center justify-center">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black text-white transition-all flex items-center justify-center backdrop-blur-md group"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="text-sm group-hover:-translate-x-0.5 transition-transform" />
              </button>
            </div>

            <div className="absolute right-0 z-50 flex items-center justify-center">
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black text-white transition-all flex items-center justify-center backdrop-blur-md group"
              >
                <FontAwesomeIcon icon={faChevronRight} className="text-sm group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* The Cards Stack */}
            <div className="relative w-full h-full flex items-center justify-center perspective-distant">
              {malangRecommendations.map((rec, index) => {
                let relativeIndex = index - activeIndex;
                if (relativeIndex > malangRecommendations.length / 2) relativeIndex -= malangRecommendations.length;
                if (relativeIndex < -malangRecommendations.length / 2) relativeIndex += malangRecommendations.length;

                return (
                  <RecommendationCard
                    key={rec.id}
                    recommendation={rec}
                    index={index}
                    activeIndex={activeIndex}
                    relativeIndex={relativeIndex}
                    onClick={() => setActiveIndex(index)}
                  />
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Pagination Indicator ── */}
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <span className="font-['Urbanist'] text-[10px] tracking-[0.35em] text-white/50 uppercase italic">
              Experience {String(activeIndex + 1).padStart(2, '0')}
            </span>
            <div className="flex gap-1.5">
              {malangRecommendations.map((_, i) => (
                <div
                  key={i}
                  className={`h-[3px] transition-all duration-500 rounded-full ${i === activeIndex ? 'w-7 bg-white' : 'w-1.5 bg-white/10'}`}
                />
              ))}
            </div>
            <span className="font-['Urbanist'] text-[10px] tracking-[0.35em] text-white/20 uppercase">
              / {String(malangRecommendations.length).padStart(2, '0')}
            </span>
          </div>
          <span className="font-['Urbanist'] text-[10px] tracking-[0.35em] text-white/20 uppercase">
            click to explore
          </span>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-px bg-white/10" />
    </section>
  );
}

