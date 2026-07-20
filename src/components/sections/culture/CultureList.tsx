import { useTranslation } from "react-i18next";
import BackButton from "../../shared/parts/BackButton";
import { CULTURE_ENTRIES } from "./cultureData";
import CultureCard from "./parts/CultureCard";

export default function CultureList() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-[#f5f4f0] text-[#0A0A0A]">
      {/* Expanded Container Width & Unified Padding */}
      <div className="w-full max-w-[1400px] xl:max-w-[1700px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="border-b border-black/[0.08] pb-8 sm:pb-10 mb-10 sm:mb-12">
          <div className="flex items-center gap-4 mb-6">
            <BackButton to="/" />
            <span className="text-sm font-black uppercase tracking-[0.2em] text-[#A3B18A]">
              {t("culture.section")}
            </span>
          </div>

          <h1 className="text-editorial text-[clamp(2.2rem,5vw,4.8rem)] text-[#0A0A0A] leading-[0.92] tracking-tight mb-3">
            {t("culture.pageTitle")}
          </h1>
          <p className="text-sm sm:text-base text-[#0A0A0A]/60 font-medium leading-relaxed max-w-3xl">
            {t("culture.pageSubtitle")}
          </p>
        </div>

        {/* Distributed Grid: 1 col on mobile, 2 on tablet, 3 on desktop, 4 on 2xl ultra-wide */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 sm:gap-8">
          {CULTURE_ENTRIES.map((entry) => (
            <CultureCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </div>
    </div>
  );
}
