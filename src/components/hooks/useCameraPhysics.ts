import { useEffect } from "react";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

export function useCameraPhysics() {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  const springConfig = { stiffness: 300, damping: 45, mass: 0.1, restDelta: 0.001 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(Math.max(0, Math.min(1, e.clientX / window.innerWidth)));
      mouseY.set(Math.max(0, Math.min(1, e.clientY / window.innerHeight)));
    };
    
    const handleMouseLeave = () => {
      mouseX.set(0.5);
      mouseY.set(0.5);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  const pOrigin = useTransform(
    [springX, springY],
    ([x, y]: number[]) => `${50 + (x - 0.5) * 2.5}% ${50 + (y - 0.5) * 2.5}%`
  );

  return {
    mouseX,
    mouseY,
    springX,
    springY,
    pOrigin
  };
}
