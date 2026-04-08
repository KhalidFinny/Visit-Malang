import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import bgGolden from "/this.jpg";
import chairSilhouette from "/seat.svg";
import FlightStage from "./sections/airplane/FlightStage";
import HeroStage from "./sections/hero/HeroStage";
import { useCameraPhysics } from "./hooks/useCameraPhysics";

import DiscoverStage from "./sections/about/DiscoverStage";

export default function Experience() {
  const [phase, setPhase] = useState<"flight" | "landing">(() => {
    return (sessionStorage.getItem("malangPhase") as "flight" | "landing") || "flight";
  });

  // Persist phase on change
  useEffect(() => {
    sessionStorage.setItem("malangPhase", phase);
  }, [phase]);
  
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { mouseX, mouseY, springX, springY, pOrigin } = useCameraPhysics();

  const handleDescend = () => {
    setIsTransitioning(true);
    // When curtain is fully up, swap the components
    setTimeout(() => {
      setPhase("landing");
      sessionStorage.setItem("malangPhase", "landing");
    }, 500); 
    // Wait a brief moment, then slide the curtain away to reveal Hero
    setTimeout(() => {
      setIsTransitioning(false);
    }, 800);
  };

  return (
    <div className="experience-root bg-black overflow-hidden relative w-full h-full">
      {/* Heavy stages swapped instantaneously behind the curtain */}
      {phase === "flight" ? (
          <motion.div
            key="flight"
            onMouseMove={(e) => {
              mouseX.set(Math.max(0, Math.min(1, e.clientX / window.innerWidth)));
              mouseY.set(Math.max(0, Math.min(1, e.clientY / window.innerHeight)));
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.15 }} // Deep immersion bleed
            style={{ 
              perspective: "1200px", 
              transformStyle: "preserve-3d",
              perspectiveOrigin: pOrigin,
              width: "100%",
              height: "100%",
              translateZ: 0 
            }}
            className="w-full h-full"
          >
            <FlightStage
              bgGolden={bgGolden}
              chairSilhouette={chairSilhouette}
              onDescend={handleDescend}
              mousePos={{ x: springX, y: springY }}
            />
          </motion.div>
        ) : (
          <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth">
            <HeroStage />
            <DiscoverStage />
          </div>
      )}

      {/* Ultra high-performance curtain transition */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key="curtain"
            className="absolute inset-0 z-50 bg-heritage-sage pointer-events-none"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.64, 0, 0.16, 1] }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
