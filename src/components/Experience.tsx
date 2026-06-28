import { lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import bgGolden from "/this.jpg";
import chairSilhouette from "/seat.svg";
import FlightStage from "./sections/airplane/FlightStage";
import LanguageSwitcher from "./shared/parts/LanguageSwitcher";
import { useExperienceState } from "./hooks/useExperienceState";

// ── Lazy-loaded sections (below the fold) ────────────────────────
// These are only loaded after the user clicks "descend" from the airplane.
// During the airplane splash screen (~1.2s), we preload the hero.
const HeroStage = lazy(() => import("./sections/hero/HeroStage"));
const PopularDestinationsSection = lazy(() => import("./sections/popular/PopularDestinationsSection"));
const HeritageStage = lazy(() => import("./sections/heritage/HeritageStage"));
const ActivityList = lazy(() => import("./sections/activity/ActivityList"));
const TechEntrance = lazy(() => import("./sections/modern/TechEntrance"));
const WeatherStage = lazy(() => import("./sections/weather/WeatherStage"));
const RegionalPlanner = lazy(() => import("./sections/planner/RegionalPlanner"));

// Preload the hero section while the airplane splash is visible
function preloadLandingSections() {
  import("./sections/hero/HeroStage");
  // Stagger the rest so we don't compete with hero rendering
  setTimeout(() => {
    import("./sections/popular/PopularDestinationsSection");
    import("./sections/heritage/HeritageStage");
    import("./sections/activity/ActivityList");
  }, 1000);
  setTimeout(() => {
    import("./sections/modern/TechEntrance");
    import("./sections/weather/WeatherStage");
    import("./sections/planner/RegionalPlanner");
  }, 2500);
}

/** Inline suspense fallback — minimal to avoid layout shift */
function SectionFallback() {
  return (
    <div className="w-full h-screen bg-[#f5f4f0] flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#1a1a1a]/10 border-t-[#1a1a1a]/40 rounded-full animate-spin" />
    </div>
  );
}

export default function Experience() {
  const { phase, handleDescend, handleMouseMove, springX, springY, pOrigin } =
    useExperienceState();

  // Preload landing sections on first render (during airplane splash)
  // This is a side effect — no need to track completion
  preloadLandingSections();

  return (
    <div className={`experience-root relative w-full min-h-screen transition-colors duration-1000 ${phase === 'flight' ? 'bg-black' : 'bg-[#f5f4f0]'}`}>
      <AnimatePresence>
        {phase === "flight" ? (
          <motion.div
            key="flight"
            onMouseMove={handleMouseMove}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: "-120vh" }}
            transition={{
              opacity: { duration: 0.8, ease: "easeIn" },
              y: { duration: 1.4, ease: [0.32, 0, 0.67, 0] },
            }}
            style={
              {
                perspective: "1200px",
                transformStyle: "preserve-3d",
                perspectiveOrigin: pOrigin,
                width: "100%",
                height: "100%",
                translateZ: 0,
              } as any
            }
            className="w-full h-screen fixed inset-0 z-10 overflow-hidden"
          >
            <FlightStage
              bgGolden={bgGolden}
              chairSilhouette={chairSilhouette}
              onDescend={handleDescend}
              mousePos={{ x: springX, y: springY }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="landing"
            className="w-full relative z-0 bg-[#f5f4f0] min-h-screen"
            initial={{ opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          >
            {/* Language Switcher - only after landing */}
            <div className="fixed top-4 right-4 z-[9999]">
              <LanguageSwitcher />
            </div>

            <Suspense fallback={<SectionFallback />}>
              <HeroStage />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <PopularDestinationsSection />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <HeritageStage />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <ActivityList />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <TechEntrance />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <WeatherStage />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <RegionalPlanner />
            </Suspense>

            {/* Footer */}
            <footer className="w-full bg-[#f5f4f0] pb-16 pt-10 text-center flex flex-col items-center justify-center gap-2.5 select-none">
              <p className="text-lg font-bold text-black/55 tracking-widest uppercase font-swiss">
                Come and Visit Malang
              </p>
              <p className="text-sm font-semibold text-black/35 font-main">
                &copy; {new Date().getFullYear()} Team Khalid & Resty. All rights reserved.
              </p>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
