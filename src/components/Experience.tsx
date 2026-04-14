import { AnimatePresence, motion } from "framer-motion";
import bgGolden from "/this.jpg";
import chairSilhouette from "/seat.svg";
import FlightStage from "./sections/airplane/FlightStage";
import HeroStage from "./sections/hero/HeroStage";
import WeatherStage from "./sections/weather/WeatherStage";
import PlaceholderStage from "./sections/top5/PlaceholderStage";
import { useExperienceState } from "./hooks/useExperienceState";

export default function Experience() {
  const { phase, handleDescend, handleMouseMove, springX, springY, pOrigin } =
    useExperienceState();

  return (
    <div className="experience-root bg-black relative w-full min-h-screen">
      <AnimatePresence>
        {phase === "flight" ? (
          <motion.div
            key="flight"
            onMouseMove={handleMouseMove}
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
          <motion.div key="landing" className="w-full relative z-0">
            <HeroStage />
            <WeatherStage />
            <PlaceholderStage />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
