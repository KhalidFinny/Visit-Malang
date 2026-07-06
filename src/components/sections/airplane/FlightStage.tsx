import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from "framer-motion";
import FlightBackground from "./FlightBackground";
import CabinInterior from "./CabinInterior";
import UIOverlay from "./parts/UIOverlay";
import { useFlightState } from "./hook/useFlightState";
import { useResponsiveScale } from "../../hooks/useResponsiveScale";
import type { FlightStageProps } from "./types";

export default function FlightStage({
  bgGolden,
  onDescend,
  mousePos,
}: FlightStageProps) {
  const { t } = useTranslation();
  const { loading } = useFlightState();
  const { planeScale } = useResponsiveScale();

  return (
    <motion.div className="relative w-full h-full bg-[#050508]">
      {/* Scale wrapper: renders everything at 1920×1080, then scales to fit/cover */}
      <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
        <div
          style={{
            width: 1920,
            height: 1080,
            transform: `scale(${planeScale})`,
            transformOrigin: 'center center',
            position: 'relative',
            flexShrink: 0,
          }}
        >
          {/* Top gradient mask — conceals any scaled edge artifacts */}
          <div className="absolute inset-x-0 top-0 h-[20%] z-20 pointer-events-none"
            style={{
              background: 'linear-gradient(to bottom, #050508 40%, transparent 100%)',
            }}
          />
          <FlightBackground bgGolden={bgGolden} mousePos={mousePos} />
          <CabinInterior mousePos={mousePos} />
          {/* Bottom gradient mask — same purpose */}
          <div className="absolute inset-x-0 bottom-0 h-[20%] z-20 pointer-events-none"
            style={{
              background: 'linear-gradient(to top, #050508 40%, transparent 100%)',
            }}
          />
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
                <p className="text-white/80 text-sm uppercase tracking-[0.5em] font-sans font-bold">
                  {t('app.traveling')}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
