import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface NavButtonProps {
  icon: IconDefinition;
  onClick: () => void;
  direction?: "left" | "right";
  className?: string;
  ariaLabel?: string;
}
