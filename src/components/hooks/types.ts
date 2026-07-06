export interface ResponsiveScale {
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
