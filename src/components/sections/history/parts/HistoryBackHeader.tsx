import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import NavButton from "../../../shared/parts/NavButton";

interface HistoryBackHeaderProps {
  onBack: () => void;
}

export default function HistoryBackHeader({ onBack }: HistoryBackHeaderProps) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <NavButton
        icon={faArrowLeft}
        onClick={onBack}
        direction="left"
        ariaLabel="Back"
        className="text-[#0A0A0A]/40 hover:text-[#0A0A0A]"
      />
      <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A3B18A]">
        History Archive
      </span>
    </div>
  );
}
