import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { CULTURE_ENTRIES } from "./cultureData";
import Button from "../../shared/parts/Button";
export default function CultureStage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const entry = CULTURE_ENTRIES[index];
  const { palette } = entry.decoration;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % CULTURE_ENTRIES.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const dot = (i: number) => (
    <button
      key={i}
      onClick={() => setIndex(i)}
      className="w-2 h-2 rounded-full transition-all duration-500 cursor-pointer"
      style={{
        backgroundColor: i === index ? palette.primary : "rgba(0,0,0,0.15)",
        transform: i === index ? "scale(1.4)" : "scale(1)",
      }}
      aria-label={`Go to ${CULTURE_ENTRIES[i].title}`}
    />
  );

  return (
    <section className="relative w-full bg-[#f5f4f0] py-32 md:py-44 min-h-[85vh] flex items-center overflow-hidden">
      <div className="swiss-container w-full max-w-7xl">
        {/* Header */}
        <div className="flex items-end justify-between mb-16 sm:mb-20 border-b-2 border-premium-black/10 pb-8 select-none">
          <span
            className="text-swiss text-lg md:text-xl lg:text-2xl font-black uppercase tracking-tight"
            style={{ color: palette.primary }}
          >
            {t("culture.section")}
          </span>
          <div className="hidden md:flex items-center gap-2">
            {CULTURE_ENTRIES.map((_, i) => dot(i))}
          </div>
        </div>

        {/* Content — 3fr text, 2fr photo on desktop; stacked on mobile */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 items-start"
          >
            {/* Text — 3/5 on desktop, full width on mobile */}
            <div className="lg:col-span-3">
              <span
                className="inline-block text-sm font-black uppercase tracking-[0.25em] mb-4 px-3 py-1.5 rounded-full"
                style={{
                  color: palette.primary,
                  backgroundColor: `${palette.primary}10`,
                }}
              >
                // {entry.origin}
              </span>

              <h2 className="text-editorial text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.92] tracking-tight mb-3 text-premium-black">
                {entry.title}
              </h2>

              <p className="text-swiss text-lg sm:text-xl font-bold leading-snug mb-4 text-premium-black/60">
                {entry.subtitle}
              </p>

              <p className="text-swiss text-base sm:text-lg leading-relaxed mb-8 max-w-xl text-premium-black/65">
                {entry.teaser}
              </p>
              <div className="flex flex-wrap items-center gap-3 mt-6">
                <Button
                  onClick={() => navigate("/culture")}
                  style={{ backgroundColor: palette.primary, color: "#fff" }}
                >
                  {t("culture.exploreMalang")}
                </Button>
              </div>
            </div>
            {/* Photo — 2/5 on desktop, full width on mobile */}
            <div className="lg:col-span-2">
              {entry.imageUrl && (
                <div
                  className="w-full rounded-xl overflow-hidden shadow-md aspect-[4/3]"
                  style={{
                    border: `1px solid ${palette.primary}15`,
                  }}
                >
                  <img
                    src={entry.imageUrl}
                    alt={entry.title}
                    className="w-full h-full object-cover pointer-events-none select-none"
                  />
                  <div
                    className="h-0.5 w-full"
                    style={{ backgroundColor: palette.primary }}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress */}
        <div className="mt-16 sm:mt-20 h-[2.5px] w-full relative rounded-full overflow-hidden bg-premium-black/10">
          <motion.div
            key={index}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            className="absolute top-0 left-0 h-full w-full origin-left"
            style={{ backgroundColor: palette.primary }}
          />
        </div>

      </div>
    </section>
  );
}
