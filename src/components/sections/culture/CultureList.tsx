import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { CULTURE_ENTRIES } from "./cultureData";
import BackButton from "../../shared/parts/BackButton";
import CultureCard from "./parts/CultureCard";

export default function CultureList() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#0A0A0A]">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="border-b border-black/[0.08] pb-8 sm:pb-10 mb-10 sm:mb-12">
          <div className="flex items-center gap-4 mb-6">
            <BackButton to="/" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#A3B18A]">
              {t("culture.section")}
            </span>
          </div>

          <h1 className="text-editorial text-[clamp(2.2rem,5vw,4.8rem)] text-[#0A0A0A] leading-[0.92] tracking-tight mb-3">
            {t("culture.pageTitle")}
          </h1>
          <p className="text-sm sm:text-base text-[#0A0A0A]/60 font-medium leading-relaxed max-w-2xl">
            {t("culture.pageSubtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
          {CULTURE_ENTRIES.map((entry) => (
            <CultureCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
}
