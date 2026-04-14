import type { Variants } from "framer-motion";

/**
 * Weather header reveals
 */
export const headerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

/**
 * Destination card stack configuration
 */
export const getCardAnimateProps = (
  relativeIndex: number, 
  isActive: boolean, 
  isVisible: boolean,
  isMobile: boolean
) => ({
  x: relativeIndex * (isMobile ? 260 : 320),
  scale: isActive ? 1 : 0.86,
  z: isActive ? 0 : -120,
  rotateY: relativeIndex * -10,
  opacity: isVisible ? (1 - Math.abs(relativeIndex) * 0.35) : 0,
  zIndex: 40 - Math.abs(relativeIndex) * 10,
});

export const cardTransition = {
  duration: 0.9,
  ease: [0.16, 1, 0.3, 1] as const,
};
