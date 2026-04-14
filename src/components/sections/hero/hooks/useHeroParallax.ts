import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import type { HeroParallaxValues } from "../types";

/**
 * Hook to manage Hero section parallax transforms
 */
export function useHeroParallax(): HeroParallaxValues {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });

  // Parallax mappings
  const tuguScale = useTransform(scrollYProgress, [0, 1], [1.3, 1.05]);
  const tuguY = useTransform(scrollYProgress, [0, 1], ["60vh", "0vh"]);
  const skyScale = useTransform(scrollYProgress, [0, 1], [1.0, 1.15]);
  const fadeOpacity = useTransform(scrollYProgress, [0.2, 0.9], [0, 1]);

  return {
    heroRef,
    scrollYProgress,
    tuguScale,
    tuguY,
    skyScale,
    fadeOpacity,
  };
}
