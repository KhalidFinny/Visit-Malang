import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { faChevronLeft, faChevronRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { WeatherCarouselProps } from "../types";

const SLIDE_DURATION = 0.35;
const SLIDE_EASE = [0.4, 0, 0.2, 1] as const;

export default function WeatherCarousel({
  recommendations,
  activeIndex,
  next,
  prev,
}: WeatherCarouselProps) {
  const directionRef = useRef<1 | -1>(1);

  const handleNext = () => { directionRef.current = 1; next(); };
  const handlePrev = () => { directionRef.current = -1; prev(); };

  const rec = recommendations[activeIndex];
  if (!rec) return null;

  const num = String(activeIndex + 1).padStart(2, "0");
  const d = directionRef.current;

  return (
    <div className="relative flex flex-col w-full h-full gap-8">
      {/* Nav Row */}
      <div className="flex items-center justify-between flex-shrink-0 px-4">
        <button
          onClick={handlePrev}
          aria-label="Previous destination"
          className="w-12 h-12 rounded-full border-2 border-white/20 text-white hover:bg-white/10 flex items-center justify-center transition-all scale-110"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
        </button>

        <div className="flex flex-col items-center gap-1">
          <span className="text-swiss text-[11px] tracking-[0.5em] uppercase text-white font-black opacity-80">
            Curated For You
          </span>
          <span className="text-swiss text-lg font-black tracking-[0.25em] uppercase text-white">
            Malang Explorer
          </span>
        </div>

        <button
          onClick={handleNext}
          aria-label="Next destination"
          className="w-12 h-12 rounded-full border-2 border-white/20 text-white hover:bg-white/10 flex items-center justify-center transition-all scale-110"
        >
          <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
        </button>
      </div>

      {/* Card — fixed 16:9 frame, image crossfades separately */}
      <div
        className="relative w-full overflow-hidden rounded-[3rem] border-2 border-white/10"
        style={{ aspectRatio: "16/9" }}
      >
        {/* Background image — crossfades independently, no slide */}
        <AnimatePresence mode="sync" initial={false}>
          <motion.img
            key={`img-${activeIndex}`}
            src={rec.imageUrl}
            alt={rec.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Permanent vignette layer - slightly stronger for readability */}
        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-black/30 z-10" />

        {/* Fixed top-right badge — Bigger and opaque */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={`badge-${activeIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-10 right-10 z-20 text-swiss text-sm tracking-[0.4em] text-white uppercase bg-black/50 backdrop-blur-xl px-6 py-2.5 border-2 border-white/20 font-black rounded-lg"
          >
            {rec.category}
          </motion.span>
        </AnimatePresence>

        {/* Fixed top-left index watermark */}
        <span className="absolute top-6 left-10 z-20 text-swiss text-[7rem] font-thin text-white/20 leading-none select-none">
          {num}
        </span>

        {/* Bottom content — this is the HEADLINE that slides */}
        <div className="absolute bottom-0 left-0 right-0 z-20 overflow-hidden p-12 md:p-16">
          <AnimatePresence mode="popLayout" custom={d} initial={false}>
            <motion.div
              key={activeIndex}
              custom={d}
              variants={{
                enter: (dir: number) => ({ y: dir > 0 ? "100%" : "-100%", opacity: 0 }),
                center:               { y: 0,                              opacity: 1 },
                exit:  (dir: number) => ({ y: dir > 0 ? "-40%" : "40%",  opacity: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: SLIDE_DURATION, ease: SLIDE_EASE }}
              className="flex flex-col gap-6"
            >
              <div>
                <h3 className="text-editorial text-4xl md:text-6xl lg:text-7xl text-white leading-[0.9] mb-3">
                  {rec.name}
                </h3>
                <span className="text-swiss text-white text-[10px] tracking-[0.4em] uppercase font-black opacity-80">
                  Optimal conditions: {rec.idealWeather}
                </span>
              </div>

              <p className="text-swiss text-white text-xl md:text-2xl font-bold leading-relaxed max-w-2xl">
                {rec.description}
              </p>

              <div className="mt-4">
                <div className="inline-flex items-center gap-5 px-10 py-4 bg-white text-[#1A1A1A] text-xs tracking-[0.3em] uppercase font-black rounded-lg hover:bg-white/90 transition-colors">
                  Explore Now
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
