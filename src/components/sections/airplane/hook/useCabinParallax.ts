import { useTransform } from "framer-motion";
import type { MousePosition } from "../../../types";

/**
 * Hook to manage cabin parallax transforms
 */
export function useCabinParallax(mousePos: MousePosition) {
  // Mid-field Parallax (Cabin Wall / Windows)
  const cabinX = useTransform(mousePos.x, [0, 1], [20, -20]);
  const cabinY = useTransform(mousePos.y, [0, 1], [15, -15]);

  // Near-field Parallax (Foreground Chairs)
  const chairTilt = useTransform(mousePos.x, [0, 1], [1.5, -1.5]);
  const chairX = useTransform(mousePos.x, [0, 1], [120, -120]);
  const chairY = useTransform(mousePos.y, [0, 1], [60, -60]);

  return {
    cabinX,
    cabinY,
    chairTilt,
    chairX,
    chairY,
  };
}
