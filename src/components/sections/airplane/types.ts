import type { MousePosition } from "../../types";

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
  mousePos: MousePosition;
}
