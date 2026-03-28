import { motion, useSpring, useMotionValue, useAnimationFrame, useTransform, MotionValue } from "framer-motion";
import { useState } from "react";

interface UIOverlayProps {
  onDescend: () => void;
  mousePos: { x: MotionValue<number>; y: MotionValue<number> };
}

export default function UIOverlay({ onDescend, mousePos }: UIOverlayProps) {
  const sentence = "WHERE SHOULD WE GO NOW?";
  const characters = sentence.split("");
  const [isHovered, setIsHovered] = useState(false);

  // 1. High-Fidelity "Smooth Spin" Logic
  const rotation = useMotionValue(0);
  const spinSpeed = useSpring(isHovered ? 4 : 0.6, { 
    stiffness: 40, 
    damping: 15,
    restDelta: 0.001 
  });

  useAnimationFrame(() => {
    rotation.set(rotation.get() + spinSpeed.get());
  });

  // 2. Magnetic UI Drift Calculation (Smoothed & More Aggressive)
  const driftX = useTransform(mousePos.x, [0, 1], [-80, 80]);
  const driftY = useTransform(mousePos.y, [0, 1], [-50, 50]);

  const handleInteraction = () => {
    onDescend();
  };

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
          style={{ x: driftX, y: driftY }} // Strong follow drift
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", stiffness: 40, damping: 25 }}
        >
          <motion.div
            className="flex gap-[0.2em]"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.05,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            {characters.map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10, filter: "blur(5px)" },
                  visible: { opacity: 0.85, y: 0, filter: "blur(0px)" },
                }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }} 
          style={{ x: useTransform(mousePos.x, [0, 1], [-70, 70]), y: useTransform(mousePos.y, [0, 1], [-40, 40]) }} // Faster drift for CTA
          transition={{ 
            opacity: { delay: 2, duration: 1.5 }
          }}
        >
          <motion.p
            className="click-cta text-[1.4rem] tracking-[0.4rem]! opacity-40 font-light"
            animate={{ 
              opacity: isHovered ? [0.6, 1, 0.6] : [0.3, 0.6, 0.3],
              scale: isHovered ? 1.05 : 1
            }}
            transition={{ duration: isHovered ? 1.5 : 5, repeat: Infinity, ease: "easeInOut" }}
          >
            TAP THE WINDOW
          </motion.p>
          <div className="w-48 h-px bg-white/20 mt-4 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: isHovered ? 1.2 : 4, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>
      </div>

      <button className="skip-btn pointer-events-auto" onClick={onDescend}>
        Skip ›
      </button>
    </div>
  );
}
