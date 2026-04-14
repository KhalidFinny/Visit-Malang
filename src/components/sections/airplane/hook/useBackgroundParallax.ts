import { useTransform } from "framer-motion";
import type { MousePosition } from "../../../types";

/**
 * Hook to manage flight background parallax
 */
export function useBackgroundParallax(mousePos: MousePosition) {
  // Far-field parallax
  const bgX = useTransform(mousePos.x, [0, 1], [10, -10]);
  const bgY = useTransform(mousePos.y, [0, 1], [-4, 4]);

  return {
    bgX,
    bgY,
  };
}
