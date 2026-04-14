import { motion } from "framer-motion";
import type { HeroTuguProps } from "../types";

export default function HeroTugu({ tuguScale, tuguY }: HeroTuguProps) {
  return (
    <motion.img
      src="/tugu.webp"
      loading="lazy"
      alt="Tugu Malang Monument"
      style={{
        scale: tuguScale,
        y: tuguY,
        transformOrigin: "top center",
      }}
      className="absolute inset-x-0 bottom-0 mx-auto w-full h-[160vh] object-cover object-top z-20 pointer-events-none"
    />
  );
}
