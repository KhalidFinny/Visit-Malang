import { useState } from "react";

/**
 * Hook to manage individual recommendation card state
 */
export function useRecommendationCardState(
  index: number,
  relativeIndex: number,
) {
  const [hovered, setHovered] = useState(false);

  // Position logic for the stack
  const isActive = relativeIndex === 0;
  const isVisible = Math.abs(relativeIndex) <= 2; // Show active + 2 nearby cards
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Editorial number
  const num = String(index + 1).padStart(2, "0");

  return {
    hovered,
    setHovered,
    isActive,
    isVisible,
    isMobile,
    num,
  };
}
