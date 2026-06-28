import { useState, useEffect, useCallback } from 'react';

/**
 * Responsive scale hook for the airplane section.
 *
 * The airplane cabin + overlay is designed at 1920×1080.
 *
 * Desktop/tablet (≥ 768px): fit-mode — `min(vw/1920, vh/1080)`
 * so everything is visible and proportionally scaled.
 *
 * Phone (< 768px): cover-mode — `max(vw/1920, vh/1080)`
 * so the cabin window fills the portrait viewport like a
 * cropped photograph. All parallax, animations, and text
 * survive — nothing is stripped.
 */
const DESIGN_W = 1920;
const DESIGN_H = 1080;
const PHONE_BP = 768;

interface ResponsiveScale {
  /** True when viewport < 768px */
  isPhone: boolean;
  /** True when 768 ≤ vw < 1024 */
  isTablet: boolean;
  /** True when vw ≥ 1024 */
  isDesktop: boolean;
  /** Scale factor for the airplane section. */
  planeScale: number;
  /** Viewport width */
  vw: number;
  /** Viewport height */
  vh: number;
}

export function useResponsiveScale(): ResponsiveScale {
  const [dims, setDims] = useState({ vw: window.innerWidth, vh: window.innerHeight });

  const handleResize = useCallback(() => {
    setDims({ vw: window.innerWidth, vh: window.innerHeight });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  const { vw, vh } = dims;
  const isPhone = vw < PHONE_BP;
  const isTablet = vw >= PHONE_BP && vw < 1024;
  const isDesktop = vw >= 1024;

  // ── Plane scale ───────────────────────────────────────────────
  // Desktop/tablet: fit the entire 1920×1080 design into the viewport.
  // Phone:            between-fit-and-cover — zoomed out enough that the
  //                   oval cabin window plus some wall is comfortably visible.
  //                   The vh factor is attenuated (×0.7) to prevent the
  //                   portrait height from zooming in too aggressively.
  const planeScale = isPhone
    ? Math.max(vw / DESIGN_W, vh / DESIGN_H * 0.7)
    : Math.min(vw / DESIGN_W, vh / DESIGN_H);

  return { isPhone, isTablet, isDesktop, planeScale, vw, vh };
}
