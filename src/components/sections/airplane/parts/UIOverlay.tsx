import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";
import type { UIOverlayProps } from "../types";
import { useUIOverlayState } from "../hook/useUIOverlayState";
import { overlayTextContainer, overlayCharacter } from "../animations";

export default function UIOverlay({ onDescend, mousePos }: UIOverlayProps) {
  const { t } = useTranslation();
  const {
    isHovered,
    setIsHovered,
    driftX,
    driftY,
    ctaDriftX,
    ctaDriftY,
    handleInteraction,
    characters,
  } = useUIOverlayState(onDescend, mousePos);

  return (
    <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
      {/* 1. Focused Click Zone */}
      <div
        className="absolute cursor-pointer pointer-events-auto"
        style={{
          left: "29.2%",
          top: "5.5%",
          width: "41.6%",
          height: "88.9%",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleInteraction}
      />

      <div className="ui-overlay absolute top-[45%] -translate-y-1/2 left-0 right-0 flex flex-col items-center">
        <motion.div
          className="question-text flex gap-[0.2em]"
          style={
            {
              x: driftX,
              y: driftY,
              fontFamily: '"Sue Ellen Francisco", cursive',
              fontSize: "4rem",
              fontWeight: "normal",
              letterSpacing: "0.2em",
              textShadow:
                "0 10px 30px rgba(0,0,0,0.8), 0 2px 10px rgba(0,0,0,0.5)",
            } as any
          }
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", stiffness: 40, damping: 25 }}
        >
          <motion.div
            className="flex gap-[0.2em]"
            initial="hidden"
            animate="visible"
            variants={overlayTextContainer}
          >
            {characters.map((char, index) => (
              <motion.span key={index} variants={overlayCharacter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={
            {
              x: ctaDriftX,
              y: ctaDriftY,
              fontFamily: '"Urbanist", sans-serif',
            } as any
          }
          transition={{
            opacity: { delay: 2, duration: 1.5 },
          }}
        >
          <div
            className="click-cta flex items-center justify-center gap-3 px-6 py-3 transition-all duration-500 ease-out"
            style={{
              opacity: isHovered ? 1 : 0.6,
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          >
            <span className="text-[1rem] tracking-[0.3em] font-medium text-white/90">
              {t('hero.airplane.tap')}
            </span>
          </div>
          <div
            className="w-40 h-px bg-white/20 mt-2 transition-all duration-500 ease-out"
            style={{
              width: isHovered ? "12rem" : "6rem",
              opacity: isHovered ? 0.8 : 0.3,
            }}
          />
        </motion.div>
      </div>

      <button className="skip-btn pointer-events-auto" onClick={onDescend}>
        {t('app.skip')} ›
      </button>
    </div>
  );
}
