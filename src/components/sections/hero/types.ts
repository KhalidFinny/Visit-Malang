import type { MotionValue } from "framer-motion";

export interface HeroParallaxValues {
  heroRef: React.RefObject<HTMLElement | null>;
  scrollYProgress: MotionValue<number>;
  tuguScale: MotionValue<number>;
  tuguY: MotionValue<string>;
  skyScale: MotionValue<number>;
  fadeOpacity: MotionValue<number>;
}

export interface HeroSkyProps {
  skyScale: MotionValue<number>;
}

export interface HeroTuguProps {
  tuguScale: MotionValue<number>;
  tuguY: MotionValue<string>;
}

export interface HeroContentProps {}
