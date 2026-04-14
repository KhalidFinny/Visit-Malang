import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NavButtonProps } from "../types";
import { useNavButtonState } from "../hook/useNavButtonState";

/**
 * Reusable Glassmorphism Navigation Button
 */
export default function NavButton({
  icon,
  onClick,
  direction,
  className = "",
  ariaLabel,
}: NavButtonProps) {
  const { hoverTranslate } = useNavButtonState(direction);

  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className={`w-12 h-12 rounded-full border border-current/20 bg-current/5 hover:bg-current hover:text-white transition-all flex items-center justify-center backdrop-blur-md group ${className}`}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`text-sm ${hoverTranslate} transition-transform`}
      />
    </button>
  );
}
