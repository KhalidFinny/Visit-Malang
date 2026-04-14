import { motion } from "framer-motion";
import { useBackgroundParallax } from "./hook/useBackgroundParallax";
import type { FlightBackgroundProps } from "./types";

export default function FlightBackground({
  bgGolden,
  mousePos,
}: FlightBackgroundProps) {
  const { bgX, bgY } = useBackgroundParallax(mousePos);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute inset-0 flex h-full"
        style={{ x: bgX, y: bgY, scale: 2.35, willChange: "transform" }}
      >
        <motion.div
          className="flex h-full"
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: "200%",
            transform: "translateZ(0)",
          }}
        >
          {/* Deep cooling filters via DOM blending (High Performance) */}
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-color pointer-events-none z-10" />
          <div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply pointer-events-none z-10" />

          {[1, 2].map((block) => (
            <div
              key={block}
              className="flex h-full w-1/2 relative"
              style={{ marginLeft: "-1px" }}
            >
              {/* Left Side: Right-Half of the Image */}
              <div
                className="w-1/2 h-full relative overflow-hidden"
                style={{ marginRight: "-1px" }}
              >
                <img
                  src={bgGolden}
                  alt=""
                  className="absolute inset-y-0 -right-px h-full w-[calc(200%+2px)] max-w-none object-cover"
                />
              </div>

              {/* Right Side: Mirrored Right-Half of the Image */}
              <div
                className="w-1/2 h-full relative overflow-hidden ml-px"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent 2%, black 15%)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent 2%, black 15%)",
                }}
              >
                <img
                  src={bgGolden}
                  alt=""
                  className="absolute inset-y-0 -left-px h-full w-[calc(200%+2px)] max-w-none object-cover scale-x-[-1]"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 z-2">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-white/30"
            style={{
              top: `${10 + i * 14}%`,
              left: "0%",
              width: "450px",
              filter: "blur(1px)",
            }}
            animate={{ x: ["110vw", "-110vw"] }}
            transition={{
              duration: 0.8 + Math.random() * 0.5,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}
