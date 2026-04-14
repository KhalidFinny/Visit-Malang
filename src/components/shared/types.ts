import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import type { MousePosition } from "../types";

export interface NavButtonProps {
  icon: IconDefinition;
  onClick: () => void;
  direction?: "left" | "right";
  className?: string;
  ariaLabel?: string;
}

export interface UIOverlayProps {
  onDescend: () => void;
  mousePos: MousePosition;
}
