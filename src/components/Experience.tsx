import { useState, useEffect } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import bgGolden from "/this.jpg";
import chairSilhouette from "/seat.svg";
import FlightStage from "./experience/FlightStage";
import HeroStage from "./experience/HeroStage";

export default function Experience() {
  const [phase, setPhase] = useState<"flight" | "landing">("flight");
  
  // Ultra-Snappy "FPS" Camera Tracking (Zero-Lag)
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  const springConfig = { stiffness: 300, damping: 45, mass: 0.1, restDelta: 0.001 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(Math.max(0, Math.min(1, e.clientX / window.innerWidth)));
      mouseY.set(Math.max(0, Math.min(1, e.clientY / window.innerHeight)));
    };
    
    const handleMouseLeave = () => {
      // Smoothly return to neutral center on leave
      mouseX.set(0.5);
      mouseY.set(0.5);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  const pOrigin = useTransform(
    [springX, springY],
    ([x, y]: number[]) => `${50 + (x - 0.5) * 4}% ${50 + (y - 0.5) * 4}%`
  );

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
