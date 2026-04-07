import { motion, useTransform } from "framer-motion";
import type { FlightBackgroundProps } from "../../types";

export default function FlightBackground({
  bgGolden,
  mousePos,
}: FlightBackgroundProps & { mousePos: any }) {
  // Far-field parallax (Inverted for logical look-around)
  const bgX = useTransform(mousePos.x, [0, 1], [10, -10]);
  const bgY = useTransform(mousePos.y, [0, 1], [-4, 4]);

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
          {[1, 2].map((block) => (
            <div key={block} className="flex h-full w-1/2 relative">
              <div className="w-1/2 h-full relative overflow-hidden">
                <img
                  src={bgGolden}
                  alt=""
                  className="absolute inset-y-0 right-0 h-full w-[200%] max-w-none object-cover"
                />
              </div>
              <div
                className="w-1/2 h-full relative overflow-hidden ml-px"
                style={{
                  maskImage: "linear-gradient(to right, transparent, black 15%)",
                  WebkitMaskImage: "linear-gradient(to right, transparent, black 15%)",
                }}
              >
                <img
                  src={bgGolden}
                  alt=""
                  className="absolute inset-y-0 left-0 h-full w-[200%] max-w-none object-cover scale-x-[-1]"
                />
              </div>

              {/* Center Seam */}
              <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-32 bg-gradient-to-r from-transparent via-[#ffb300]/5 to-transparent pointer-events-none" />
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
