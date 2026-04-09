import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FlightBackground from "./FlightBackground";
import CabinInterior from "./CabinInterior";
import UIOverlay from "../../shared/UIOverlay";
import type { FlightStageProps } from "../../types";

export default function FlightStage({
  bgGolden,
  chairSilhouette,
  onDescend,
  mousePos,
}: FlightStageProps) {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      key="flight"
      className="plane-stage w-full h-screen fixed inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2, ease: "easeInOut" }}
    >
      <FlightBackground bgGolden={bgGolden} mousePos={mousePos} />
      <CabinInterior chairSilhouette={chairSilhouette} mousePos={mousePos} />
      <UIOverlay onDescend={onDescend} mousePos={mousePos} />
      
      <AnimatePresence>
        {loading && (
          <motion.div
            key="splash"
            className="absolute inset-0 bg-[#050508] z-100 flex flex-col items-center justify-center space-y-6"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
              <motion.div 
                className="absolute inset-y-0 left-0 bg-white/80"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.1, ease: "easeInOut" }}
              />
            </div>
            <p className="text-white/40 text-[0.8rem] uppercase tracking-[0.4em] font-sans">
              Traveling
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
