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
 * Dynamic card animation properties based on stack position
 */
export const getCardAnimateProps = (
  relativeIndex: number,
  isActive: boolean,
  isVisible: boolean,
  isMobile: boolean
) => {
  if (!isVisible) {
    return {
      opacity: 0,
      scale: 0.8,
      y: "-50%",
      x: "-50%",
      pointerEvents: "none" as const,
    };
  }

  // Differential stack offset for mobile vs desktop
  const yOffset = relativeIndex * (isMobile ? -16 : -30);

  return {
    opacity: relativeIndex < 0 ? 0 : 1 - relativeIndex * 0.2,
    scale: relativeIndex < 0 ? 1.05 : 1 - relativeIndex * 0.05,
    y: `calc(-50% + ${yOffset}px)`,
    x: "-50%",
    zIndex: 10 - Math.abs(relativeIndex),
    pointerEvents: isActive ? ("auto" as const) : ("none" as const),
  };
};

/**
 * Premium spring-like slide transition
 */
export const cardTransition = {
  duration: 0.8,
  ease: [0.16, 1, 0.3, 1] as const,
};
