import { AnimatePresence, motion } from "framer-motion";
import bgGolden from "/this.jpg";
import chairSilhouette from "/seat.svg";
import FlightStage from "./sections/airplane/FlightStage";
import HeroStage from "./sections/hero/HeroStage";
import HeritageStage from "./sections/heritage/HeritageStage";
import ActivityList from "./sections/activity/ActivityList";
import TechEntrance from "./sections/modern/TechEntrance";
import WeatherStage from "./sections/weather/WeatherStage";
import RegionalPlanner from "./sections/planner/RegionalPlanner";
import LanguageSwitcher from "./shared/parts/LanguageSwitcher";
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
          <motion.div
            key="landing"
            className="w-full relative z-0"
            initial={{ opacity: 0, y: "12vh" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Language Switcher - only after landing */}
            <div className="fixed top-4 right-4 z-[9999]">
              <LanguageSwitcher />
            </div>

            <HeroStage />
            <HeritageStage />
            <ActivityList />
            <TechEntrance />
            <WeatherStage />
            <RegionalPlanner />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
