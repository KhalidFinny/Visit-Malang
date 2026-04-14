import { useState, useEffect } from "react";
import { useCameraPhysics } from "./useCameraPhysics";

/**
 * Hook to manage the global experience state and transitions
 */
export function useExperienceState() {
  const [phase, setPhase] = useState<"flight" | "landing">(() => {
    return (
      (sessionStorage.getItem("malangPhase") as "flight" | "landing") ||
      "flight"
    );
  });

  // Persist phase on change
  useEffect(() => {
    sessionStorage.setItem("malangPhase", phase);
  }, [phase]);

  const { mouseX, mouseY, springX, springY, pOrigin } = useCameraPhysics();

  const handleDescend = () => {
    setPhase("landing");
    sessionStorage.setItem("malangPhase", "landing");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(Math.max(0, Math.min(1, e.clientX / window.innerWidth)));
    mouseY.set(Math.max(0, Math.min(1, e.clientY / window.innerHeight)));
  };

  return {
    phase,
    setPhase,
    handleDescend,
    handleMouseMove,
    springX,
    springY,
    pOrigin,
  };
}
