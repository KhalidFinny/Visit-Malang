import { type MotionValue } from "framer-motion";

export interface MousePosition {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export interface FlightStageProps {
  bgGolden: string;
  chairSilhouette: string;
  onDescend: () => void;
  mousePos: MousePosition;
}

export interface CabinInteriorProps {
  chairSilhouette: string;
  mousePos: MousePosition;
}

export interface FlightBackgroundProps {
  bgGolden: string;
}

export interface UIOverlayProps {
  onDescend: () => void;
  mousePos: MousePosition;
}
