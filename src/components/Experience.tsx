import { lazy, Suspense, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import bgGolden from "/this.webp";
import FlightStage from "./sections/airplane/FlightStage";
import HeaderMenu from "./shared/parts/HeaderMenu";
import StampPassportModal from "./shared/parts/StampPassportModal";
import PostcardModal from "./shared/parts/PostcardModal";
const VisualLensModal = lazy(() => import("./shared/parts/VisualLensModal"));
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
const TechEntrance = lazy(() => import("./sections/tech/TechEntrance"));
const WeatherStage = lazy(() => import("./sections/weather/WeatherStage"));
const RegionalPlanner = lazy(() => import("./sections/planner/RegionalPlanner"));
// Preload landing sections + critical images & video during airplane splash.
// Runs once on mount — browser caches the chunks for instant rendering on descend.
const PRELOAD_CRITICAL_MEDIA = [
  "/malang.webm",
  "/bromo.webp",
  "/this.webp",
  "/sky.webp",
  "https://images.unsplash.com/photo-1602154663343-89fe0bf541ab?q=80&w=450&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1593901138884-02ee723a96f7?q=80&w=450&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=800&auto=format&fit=crop",
];

/** Placeholder that reserves approximate space during lazy section load — prevents layout shift */
function SectionFallback({ minH }: { minH?: string }) {
  return <div className="w-full" style={{ height: minH ?? '1px' }} />;
}

export default function Experience() {
  const { phase, skipLandingAnim, handleDescend, handleMouseMove, springX, springY, pOrigin } =
    useExperienceState();
  const [passportOpen, setPassportOpen] = useState(false);
  const [lensOpen, setLensOpen] = useState(false);
  const [postcardOpen, setPostcardOpen] = useState(false);

  // Preload section chunks & critical media once on mount (during airplane splash or page load).
  // Chunks are cached by the browser — sections render instantly when the user descends.
  useEffect(() => {
    // Start all section chunk downloads immediately — no stagger.
    // The browser prioritises network bandwidth naturally.
    import("./sections/popular/PopularDestinationsSection");
    import("./sections/heritage/HeritageStage");
    import("./sections/culture/CultureStage");
    import("./sections/activity/ActivityList");
    import("./sections/modern/TechEntrance");
    import("./sections/weather/WeatherStage");
    import("./sections/planner/RegionalPlanner");

    // Preload critical media so images/video render instantly on descend
    PRELOAD_CRITICAL_MEDIA.forEach((src) => {
      if (src.endsWith(".webm")) {
        const v = document.createElement("video");
        v.src = src;
        v.preload = "auto";
      } else {
        const img = new Image();
        img.src = src;
      }
    });

  }, []);

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
            initial={skipLandingAnim ? false : { opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            {/* Unified Top Header Menu (Tools & Language) */}
            <HeaderMenu
              onOpenPassport={() => setPassportOpen(true)}
              onOpenLens={() => setLensOpen(true)}
              onOpenPostcard={() => setPostcardOpen(true)}
            />

            <Suspense fallback={<SectionFallback minH="600px" />}>
              <HeroStage />
            </Suspense>
            <Suspense fallback={<SectionFallback minH="380px" />}>
              <PopularDestinationsSection />
            </Suspense>
            <Suspense fallback={<SectionFallback minH="85vh" />}>
              <HeritageStage />
            </Suspense>
            <Suspense fallback={<SectionFallback minH="400px" />}>
              <CultureStage />
            </Suspense>
            <Suspense fallback={<SectionFallback minH="400px" />}>
              <HistoryStage />
            </Suspense>
            <Suspense fallback={<SectionFallback minH="400px" />}>
              <ActivityList />
            </Suspense>
            <Suspense fallback={<SectionFallback minH="400px" />}>
              <TechEntrance />
            </Suspense>
            <Suspense fallback={<SectionFallback minH="300px" />}>
              <WeatherStage />
            </Suspense>
            <Suspense fallback={<SectionFallback minH="400px" />}>
              <RegionalPlanner />
            </Suspense>



            {/* Stamp Passport Booklet Modal */}
            <StampPassportModal
              isOpen={passportOpen}
              onClose={() => setPassportOpen(false)}
            />

            {/* Photo Finder Lens Modal */}
            <Suspense fallback={null}>
              <VisualLensModal
                isOpen={lensOpen}
                onClose={() => setLensOpen(false)}
              />
            </Suspense>

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
