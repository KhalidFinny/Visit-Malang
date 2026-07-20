import { useState, useEffect, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import type { MapCategory } from "../../../data/mapPlaces";
import HeroCategories from "./parts/HeroCategories";
import { useWeather } from "../weather/hooks/useWeather";
import { getWeatherFromCode } from "../weather/utils";

const HeroMap = lazy(() => import("./parts/HeroMap"));

function GeometricPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <circle cx="30" cy="30" r="1.5" fill="#1a1a1a" />
          </pattern>
          <pattern id="diagonal" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="40" stroke="#1a1a1a" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#diagonal)" opacity="0.5" />
      </svg>
    </div>
  );
}

export default function HeroStage() {
  const { t } = useTranslation();
  const [mapOpen, setMapOpen] = useState(false);
  const [mapCategory, setMapCategory] = useState<MapCategory>("Nature");
  const [currentTime, setCurrentTime] = useState("");

  const { data: weatherData } = useWeather();

  // Clock format matching local Malang time (WIB, UTC+7)
  useEffect(() => {
    const updateClock = () => {
      const timeStr = new Intl.DateTimeFormat("en-US", {
        timeZone: "Asia/Jakarta",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
      setCurrentTime(timeStr);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  function handleCategorySelect(cat: MapCategory) {
    setMapCategory(cat);
    setMapOpen(true);
  }

  return (
    <section className="relative w-full bg-[#f5f4f0] flex flex-col overflow-visible">

      {/* ── Banner (Full Bleed Top) ─────────────────────────── */}
      <div className="relative w-full h-[62vh] min-h-[460px] sm:h-[68vh] sm:min-h-[520px] md:h-[72vh] md:min-h-[580px] lg:h-[78vh] lg:min-h-[640px] xl:h-[82vh] xl:min-h-[720px] flex-shrink-0 overflow-visible">
        {/* Video + overlay */}
        <div className="absolute inset-0 rounded-b-[2.5rem] md:rounded-b-[4rem] overflow-hidden bg-black">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="/bromo.webp"
            width="1280"
            height="720"
            className="w-full h-full object-cover object-center"
          >
            <source src="/malang.mp4" type="video/mp4" />
            <source src="/malang.webm" type="video/webm" />
            <track kind="captions" src="/hero-captions.vtt" srcLang="en" label="English captions" />
          </video>
          {/* Subtle gradient overlay to make top controls & center typography pop */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/70 z-10" />
        </div>

        {/* Live Weather + Time Widget in top-left banner */}
        <div className="absolute left-1/2 -translate-x-1/2 top-20 sm:left-6 sm:translate-x-0 sm:top-6 md:left-12 lg:left-16 z-20 flex items-center gap-2.5 sm:gap-4 text-white/95 font-mono text-xs sm:text-sm tracking-wider select-none rounded-full bg-black/25 backdrop-blur-md px-4 py-2 sm:rounded-none sm:bg-transparent sm:px-0 sm:py-0 sm:backdrop-blur-0">
          <div className="flex flex-col">
            <span className="text-[10px] sm:text-xs text-white/60 font-bold uppercase tracking-widest leading-none">{t("hero.custom.localTime")}</span>
            <span className="font-semibold text-white mt-1 text-xs sm:text-sm">{currentTime || "--:--:--"} {t("hero.map.timeZone")}</span>
          </div>
          <div className="h-5 sm:h-6 w-px bg-white/20" />
          {weatherData && (
            <div className="flex flex-col">
              <span className="text-[10px] sm:text-xs text-white/60 font-bold uppercase tracking-widest leading-none">{t("hero.custom.malangWeather")}</span>
              <span className="font-semibold text-white mt-1 text-xs sm:text-sm">
                {Math.round(weatherData.temp)}°C · {getWeatherFromCode(weatherData.weatherCode)}
              </span>
            </div>
          )}
        </div>

        {/* Title block — centered vertically in the banner */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white gap-0">
          {/* Eyebrow */}
          <span className="text-sm md:text-sm font-bold tracking-[0.65em] text-white/60 uppercase mb-4">
            {t("hero.custom.discover")}
          </span>

          {/* MALANG — inline split: MA outlined, LANG solid */}
          <h1 className="text-editorial text-[clamp(4.5rem,12vw,11rem)] xl:text-[clamp(6.5rem,15vw,14rem)] leading-none tracking-wide uppercase select-none relative font-black">
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "clamp(2px, 0.25vw, 4px) white" }}
            >
              Ma
            </span>
            <span className="text-white">lang</span>
            {/* Script accent — overlapping slightly for classic Swiss editorial look */}
            <span className="font-script text-[clamp(2.5rem,5vw,4.5rem)] xl:text-[clamp(3.5rem,7.5vw,6.5rem)] text-[#D88A6E] absolute bottom-[-0.15em] right-[8%] -rotate-6 select-none pointer-events-none z-20 normal-case tracking-normal">
              {t("hero.custom.timeless")}
            </span>
          </h1>

          {/* Divider + slogan */}
          <div className="w-10 h-px bg-white/30 my-4" />
          <p className="text-[clamp(11px,1.2vw,15px)] xl:text-[clamp(13px,1.4vw,18px)] text-white/80 font-light tracking-[0.32em] uppercase">
            {t("hero.custom.slogan")}
          </p>
        </div>
      </div>

      {/* ── Consolidated Hero Console Dock — 40% overlap, 90% centered ─────── */}
      <div className="relative z-20 w-full -mt-[110px] md:-mt-[135px] px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="w-full max-w-[1400px] xl:max-w-[1700px] mx-auto bg-[#f5f4f0] rounded-xl border-2 border-premium-black/20 relative overflow-hidden shadow-lg">
          {/* Subtle background dot grid pattern for extra texture */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#1c1c1c_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="px-4 md:px-12 lg:px-16 py-6 md:py-12 lg:py-14 relative z-10">
            <HeroCategories onSelect={handleCategorySelect} />
          </div>
        </div>
      </div>

      {/* Bottom spacer with geometric texture */}
      <div className="relative w-full pb-8 pt-4">
        <GeometricPattern />
      </div>

      {/* ── Map modal ──────────────────────────────────────── */}
      <AnimatePresence>
        {mapOpen && (
          <motion.div
            key="map-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9998] bg-black/40"
            onClick={() => setMapOpen(false)}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="absolute bottom-0 inset-x-0 top-0 bg-[#f0ebe3] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Suspense
                fallback={
                  <div className="w-full h-full bg-[#f5f4f0] flex items-center justify-center">
                    <span className="text-[#1a1a1a]/30 text-[14px] font-bold uppercase tracking-widest animate-pulse">
                      {t("app.loading")}
                    </span>
                  </div>
                }
              >
                <HeroMap category={mapCategory} onClose={() => setMapOpen(false)} />
              </Suspense>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
