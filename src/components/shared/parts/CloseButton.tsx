import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface CloseButtonProps {
  onClick: () => void;
  className?: string;
}

export default function CloseButton({ onClick, className = "" }: CloseButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm border border-black/10 hover:border-black/20 shadow-lg text-black/60 hover:text-black flex items-center justify-center transition-all cursor-pointer ${className}`}
      aria-label="Close"
    >
      <FontAwesomeIcon icon={faXmark} className="text-sm" />
    </button>
  );
}
