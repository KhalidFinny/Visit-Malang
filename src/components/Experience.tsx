import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import bgGolden from "/this.jpg";
import chairSilhouette from "/seat.svg";
import FlightStage from "./sections/airplane/FlightStage";
import HeroStage from "./sections/hero/HeroStage";
import { useCameraPhysics } from "./hooks/useCameraPhysics";

import WeatherStage from "./sections/weather/WeatherStage";
import PlaceholderStage from "./sections/top5/PlaceholderStage";

export default function Experience() {
  const [phase, setPhase] = useState<"flight" | "landing">(() => {
    return (sessionStorage.getItem("malangPhase") as "flight" | "landing") || "flight";
  });

  // Persist phase on change
  useEffect(() => {
    sessionStorage.setItem("malangPhase", phase);
  }, [phase]);
  
  const { mouseX, mouseY, springX, springY, pOrigin } = useCameraPhysics();

  const handleDescend = () => {
    setPhase("landing");
    sessionStorage.setItem("malangPhase", "landing");
  };

  return (
    <div className="experience-root bg-black relative w-full min-h-screen">
      <AnimatePresence>
        {phase === "flight" ? (
          <motion.div
            key="flight"
            onMouseMove={(e) => {
              mouseX.set(Math.max(0, Math.min(1, e.clientX / window.innerWidth)));
              mouseY.set(Math.max(0, Math.min(1, e.clientY / window.innerHeight)));
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ 
              perspective: "1200px", 
              transformStyle: "preserve-3d",
              perspectiveOrigin: pOrigin,
              width: "100%",
              height: "100%",
              translateZ: 0 
            }}
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
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="w-full relative z-0"
          >
            <HeroStage />
            <WeatherStage />
            <PlaceholderStage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
