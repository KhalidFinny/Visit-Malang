import type { MousePosition } from "../../types";

export interface FlightStageProps {
  bgGolden: string;
  onDescend: () => void;
  mousePos: MousePosition;
}

export interface CabinInteriorProps {
  mousePos: MousePosition;
}

export interface FlightBackgroundProps {
  bgGolden: string;
  mousePos: MousePosition;
}

export interface UIOverlayProps {
  onDescend: () => void;
  mousePos: MousePosition;
}
