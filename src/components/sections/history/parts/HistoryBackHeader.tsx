import { useTranslation } from "react-i18next";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import NavButton from "../../../shared/parts/NavButton";

interface HistoryBackHeaderProps {
  onBack: () => void;
}

export default function HistoryBackHeader({ onBack }: HistoryBackHeaderProps) {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-4 mb-6">
      <NavButton
        icon={faArrowLeft}
        onClick={onBack}
        direction="left"
        ariaLabel={t('history.backToHistory')}
        className="text-[#0A0A0A]/40 hover:text-[#0A0A0A]"
      />
      <span className="text-sm font-black uppercase tracking-[0.2em] text-[#3A5A3A]">
        {t('history.archiveTitle')}
      </span>
    </div>
  );
}
