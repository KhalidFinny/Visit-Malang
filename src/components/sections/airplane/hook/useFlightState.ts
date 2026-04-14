import { useState, useEffect } from "react";

/**
 * Hook to manage flight section loading state
 */
export function useFlightState() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return {
    loading,
    setLoading,
  };
}
