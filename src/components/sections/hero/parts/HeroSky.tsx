import { motion } from "framer-motion";
import type { HeroSkyProps } from "../types";

export default function HeroSky({ skyScale }: HeroSkyProps) {
  return (
    <>
      {/* Parallax Sky Background */}
      <motion.img
        src="/sky.webp"
        loading="lazy"
        alt="Malang overcast sky background"
        style={{ scale: skyScale }}
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none origin-top"
      />

      {/* Color Grading Overlay to integrate sky with color palette */}
      <div className="absolute inset-0 bg-midnight-steel/20 mix-blend-overlay z-1 pointer-events-none" />
    </>
  );
}
