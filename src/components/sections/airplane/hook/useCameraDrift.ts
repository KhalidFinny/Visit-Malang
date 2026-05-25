import { useState } from "react";
import { useSpring, useMotionValue, useAnimationFrame, useTransform } from "framer-motion";
import type { MousePosition } from "../../../types";

export function useCameraDrift(mousePos: MousePosition) {
  const [isHovered, setIsHovered] = useState(false);

  // 1. High-Fidelity "Smooth Spin" Logic
  const rotation = useMotionValue(0);
  const spinSpeed = useSpring(isHovered ? 4 : 0.6, { 
    stiffness: 40, 
    damping: 15,
    restDelta: 0.001 
  });

  useAnimationFrame(() => {
    rotation.set(rotation.get() + spinSpeed.get());
  });

  // 2. Magnetic UI Drift Calculation (Smoothed & More Aggressive)
  const driftX = useTransform(mousePos.x, [0, 1], [-80, 80]);
  const driftY = useTransform(mousePos.y, [0, 1], [-50, 50]);

  // CTA specific drift
  const ctaDriftX = useTransform(mousePos.x, [0, 1], [-70, 70]);
  const ctaDriftY = useTransform(mousePos.y, [0, 1], [-40, 40]);

  return {
    isHovered,
    setIsHovered,
    driftX,
    driftY,
    ctaDriftX,
    ctaDriftY
  };
}
