import { motion } from "framer-motion";
import { getWindowPath, getRimPath } from "./utils";
import { useCabinParallax } from "./hook/useCabinParallax";
import type { CabinInteriorProps } from "./types";

export default function CabinInterior({
  chairSilhouette,
  mousePos,
}: CabinInteriorProps) {
  const { cabinX, cabinY, chairTilt, chairX, chairY } =
    useCabinParallax(mousePos);

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-10"
      style={{ perspective: "1500px", transformStyle: "preserve-3d" }}
    >
      {/* 1. Main Cabin Wall (Mid-Field) */}
      <motion.div
        className="w-full h-full"
        style={{ x: cabinX, y: cabinY, scale: 1.1 }}
      >
        <motion.div
          className="w-full h-full"
          animate={{ y: [-0.6, 0.6, -0.6] }} // Isolated vibration
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg
            className="cabin-svg"
            viewBox="0 0 1920 1080"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="windowClipInner">
                <path d={getWindowPath(false, true)} />
              </clipPath>

              <linearGradient
                id="premiumWall"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#050508" />
                <stop offset="40%" stopColor="#0d0d12" />
                <stop offset="60%" stopColor="#0d0d12" />
                <stop offset="100%" stopColor="#050508" />
              </linearGradient>

              <linearGradient id="moodLight" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#a599ff" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#a599ff" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* 1. The Single Window Cutout */}
            <path
              fill="url(#premiumWall)"
              d={`M0,0 H1920 V1080 H0 Z ${getWindowPath(false, true)}`}
              fillRule="evenodd"
            />

            {/* 2. Overhead bin & Mood Light */}
            <path d="M0 0 Q960 120 1920 0 V15 H0 Z" fill="#010102" />
            <rect x="0" y="0" width="1920" height="15" fill="url(#moodLight)" />

            {/* 3. Seamless Oval Window Frame */}
            <path
              fill="#1a1a20"
              d={`${getWindowPath(false, true)} ${getWindowPath(true, true)}`}
              fillRule="evenodd"
              opacity="0.98"
            />

            {/* 4. Window Depth Rim */}
            <path
              fill="#020203"
              d={`${getWindowPath(true, true)} ${getRimPath(true)}`}
              fillRule="evenodd"
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* 2. Foreground Chairs (Near-Field - Immersive Seating) */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          x: chairX,
          y: chairY,
          rotateY: chairTilt,
          translateZ: 420,
          scale: 1.25,
        }}
      >
        <svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Left Suite Chair */}
          <image
            href={chairSilhouette}
            x="-1000"
            y="-120"
            width="3500"
            height="3500"
            opacity="1"
            preserveAspectRatio="xMidYMid meet"
          />
          {/* Right Suite Chair */}
          <image
            href={chairSilhouette}
            x="500"
            y="-120"
            width="3500"
            height="3500"
            opacity="1"
            preserveAspectRatio="xMidYMid meet"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
