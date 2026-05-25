import type { Variants } from "framer-motion";

/**
 * UI Overlay Text Stagger Container
 */
export const overlayTextContainer: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.5,
    },
  },
};

/**
 * UI Overlay Character Reveal
 */
export const overlayCharacter: Variants = {
  hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
  visible: {
    opacity: 0.95,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};
