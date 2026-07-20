import { useState, useEffect } from "react";
import { useCameraPhysics } from "./useCameraPhysics";

/**
 * Hook to manage the global experience state and transitions
 */
export function useExperienceState() {
  const [phase, setPhase] = useState<"flight" | "landing">(() => {
    const storedPhase = sessionStorage.getItem("malangPhase");
    if (storedPhase === "flight" || storedPhase === "landing") {
      return storedPhase;
    }

    const introSeen = sessionStorage.getItem("malangIntroSeen");
    if (introSeen === "true") {
      return "landing";
    }

    return "flight";
  });

  const [skipLandingAnim] = useState(() => {
    const storedPhase = sessionStorage.getItem("malangPhase");
    return storedPhase === "landing";
  });

  useEffect(() => {
    sessionStorage.setItem("malangPhase", phase);
    if (phase === "landing") {
      sessionStorage.setItem("malangIntroSeen", "true");
    }
  }, [phase]);

  const { mouseX, mouseY, springX, springY, pOrigin } = useCameraPhysics();

  const handleDescend = () => {
    setPhase("landing");
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(Math.max(0, Math.min(1, e.clientX / window.innerWidth)));
    mouseY.set(Math.max(0, Math.min(1, e.clientY / window.innerHeight)));
  };

  return {
    phase,
    skipLandingAnim,
    setPhase,
    handleDescend,
    handleMouseMove,
    springX,
    springY,
    pOrigin,
  };
}
