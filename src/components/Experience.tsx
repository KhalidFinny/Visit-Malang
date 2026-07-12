import { lazy, Suspense, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import bgGolden from "/this.jpg";
import FlightStage from "./sections/airplane/FlightStage";
import HeaderMenu from "./shared/parts/HeaderMenu";
import StampPassportModal from "./shared/parts/StampPassportModal";
import VisualLensModal from "./shared/parts/VisualLensModal";
import PostcardModal from "./shared/parts/PostcardModal";
import { preloadModel } from "./shared/utils/lensML";
import { useExperienceState } from "./hooks/useExperienceState";

// ── Lazy-loaded sections (below the fold) ────────────────────────
// These are only loaded after the user clicks "descend" from the airplane.
// During the airplane splash screen (~1.2s), we preload the hero.
const HeroStage = lazy(() => import("./sections/hero/HeroStage"));
const PopularDestinationsSection = lazy(() => import("./sections/popular/PopularDestinationsSection"));
const HeritageStage = lazy(() => import("./sections/heritage/HeritageStage"));
const HistoryStage = lazy(() => import("./sections/history/HistoryStage"));
const CultureStage = lazy(() => import("./sections/culture/CultureStage"));
const ActivityList = lazy(() => import("./sections/activity/ActivityList"));
const TechEntrance = lazy(() => import("./sections/modern/TechEntrance"));
const WeatherStage = lazy(() => import("./sections/weather/WeatherStage"));
const RegionalPlanner = lazy(() => import("./sections/planner/RegionalPlanner"));

// Preload landing sections + critical images & video while airplane splash is visible
function preloadLandingSections() {
  import("./sections/hero/HeroStage");

  // Eagerly pre-instantiate Image objects & video buffer for instant rendering
  const criticalMedia = [
    "/malang.webm",
    "/bromo.jpg",
    "/this.jpg",
    "/tugu.webp",
    "/sky.webp",
    "https://images.unsplash.com/photo-1602154663343-89fe0bf541ab?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1593901138884-02ee723a96f7?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop",
  ];

  criticalMedia.forEach((src) => {
    if (src.endsWith(".webm")) {
      const v = document.createElement("video");
      v.src = src;
      v.preload = "auto";
    } else {
      const img = new Image();
      img.src = src;
    }
  });

  // Start downloading the AI vision model in the background during intro
  preloadModel();

  // Stagger the rest so we don't compete with hero rendering
  setTimeout(() => {
    import("./sections/popular/PopularDestinationsSection");
    import("./sections/heritage/HeritageStage");
    import("./sections/culture/CultureStage");
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
  const { phase, skipLandingAnim, handleDescend, handleMouseMove, springX, springY, pOrigin } =
    useExperienceState();
  const [passportOpen, setPassportOpen] = useState(false);
  const [lensOpen, setLensOpen] = useState(false);
  const [postcardOpen, setPostcardOpen] = useState(false);

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
              onDescend={handleDescend}
              mousePos={{ x: springX, y: springY }}
            />
          </motion.div>
        ) : (
          <motion.div
            key="landing"
            className="w-full relative z-0 bg-[#f5f4f0] min-h-screen"
            initial={skipLandingAnim ? false : { opacity: 0, y: "100vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          >
            {/* Unified Top Header Menu (Tools & Language) */}
            <HeaderMenu
              onOpenPassport={() => setPassportOpen(true)}
              onOpenLens={() => setLensOpen(true)}
              onOpenPostcard={() => setPostcardOpen(true)}
            />

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
              <CultureStage />
            </Suspense>
            <Suspense fallback={<SectionFallback />}>
              <HistoryStage />
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


            {/* Stamp Passport Booklet Modal */}
            <StampPassportModal
              isOpen={passportOpen}
              onClose={() => setPassportOpen(false)}
            />

            {/* Photo Finder Lens Modal */}
            <VisualLensModal
              isOpen={lensOpen}
              onClose={() => setLensOpen(false)}
            />

            {/* Postcard Maker Modal */}
            <PostcardModal
              isOpen={postcardOpen}
              onClose={() => setPostcardOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
