import { useNavigate } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface BackButtonProps {
  to?: string;
  className?: string;
}

export default function BackButton({ to, className = "" }: BackButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => (to ? navigate(to) : navigate(-1))}
      className={`flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/90 backdrop-blur-sm text-[#1a1a1a]/70 hover:text-[#1a1a1a] transition-all text-sm font-semibold fixed top-5 left-5 z-50 shadow-lg border border-black/[0.08] ${className}`}
    >
      <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
      <span className="hidden sm:inline">Back</span>
    </button>
  );
}
