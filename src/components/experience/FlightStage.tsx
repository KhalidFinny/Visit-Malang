import { motion, MotionValue } from "framer-motion";
import FlightBackground from "./FlightBackground";
import CabinInterior from "./CabinInterior";
import UIOverlay from "./UIOverlay";

interface FlightStageProps {
  bgGolden: string;
  chairSilhouette: string;
  onDescend: () => void;
  mousePos: { x: MotionValue<number>; y: MotionValue<number> };
}

export default function FlightStage({
  bgGolden,
  chairSilhouette,
  onDescend,
  mousePos,
}: FlightStageProps) {
  return (
    <motion.div
      key="flight"
      className="plane-stage w-full h-full relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        scale: 1.08,
        y: 60,
        opacity: 0,
        filter: "blur(20px) brightness(1.2)",
      }}
      transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <FlightBackground bgGolden={bgGolden} mousePos={mousePos} />
      <CabinInterior chairSilhouette={chairSilhouette} mousePos={mousePos} />
      <UIOverlay onDescend={onDescend} mousePos={mousePos} />
    </motion.div>
  );
}
