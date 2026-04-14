import { useState } from "react";
import { useUIOverlay as useDriftAnimation } from "../../hooks/useUIOverlay";
import type { MousePosition } from "../../types";

/**
 * Hook to manage UI Overlay state and interactions
 */
export function useUIOverlayState(
  onDescend: () => void,
  mousePos: MousePosition,
) {
  const [isHovered, setIsHovered] = useState(false);

  const { driftX, driftY, ctaDriftX, ctaDriftY } = useDriftAnimation(mousePos);

  const handleInteraction = () => {
    onDescend();
  };

  const sentence = "WHERE SHOULD WE GO NOW?";
  const characters = sentence.split("");

  return {
    isHovered,
    setIsHovered,
    driftX,
    driftY,
    ctaDriftX,
    ctaDriftY,
    handleInteraction,
    characters,
  };
}
