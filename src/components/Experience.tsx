import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import bgGolden from "/this.jpg";
import chairSilhouette from "/seat.svg";
import FlightStage from "./sections/airplane/FlightStage";
import HeroStage from "./sections/hero/HeroStage";
import { useCameraPhysics } from "./hooks/useCameraPhysics";

export default function Experience() {
  const [phase, setPhase] = useState<"flight" | "landing">("flight");
  
  const { mouseX, mouseY, springX, springY, pOrigin } = useCameraPhysics();

  return (
    <div className="experience-root bg-black overflow-hidden relative w-full h-full">
      <AnimatePresence mode="wait">
        {phase === "flight" ? (
          <motion.div
            key="flight"
            onMouseMove={(e) => {
              // Internal guard for additional stability
              mouseX.set(Math.max(0, Math.min(1, e.clientX / window.innerWidth)));
              mouseY.set(Math.max(0, Math.min(1, e.clientY / window.innerHeight)));
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.15 }} // Deep immersion bleed
            exit={{ 
              y: 200, 
              opacity: 0, 
              scale: 1.2,
              transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } 
            }}
            style={{ 
              perspective: "1200px", 
              transformStyle: "preserve-3d",
              perspectiveOrigin: pOrigin,
              width: "100%",
              height: "100%",
              translateZ: 0 // Hardware acceleration
            }}
            className="w-full h-full"
          >
            <FlightStage
              bgGolden={bgGolden}
              chairSilhouette={chairSilhouette}
              onDescend={() => setPhase("landing")}
              mousePos={{ x: springX, y: springY }}
            />
          </motion.div>
        ) : (
          <HeroStage />
        )}
      </AnimatePresence>
    </div>
  );
}
