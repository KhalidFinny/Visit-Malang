import { useTranslation } from "react-i18next";
import { useMemo, type ReactNode } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { faMountain, faTrain, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import BackButton from "../../shared/parts/BackButton";
import { HISTORY_PERIODS, HISTORY_STORIES, HISTORY_ACCENTS, type HistoryPeriodKey } from "./historyData";

const ERA: Record<HistoryPeriodKey, { bg: string; accent: string; decoImage: string; deco: ReactNode; icon: IconDefinition }> = {
  kingdoms: {
    bg: "#f5f0e8", accent: "#8a6e4a", decoImage: "/decorations/candi-badut.webp", icon: faMountain,
    deco: <div className="fixed top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#c4a882]/8 to-transparent pointer-events-none z-0" />,
  },
  colonial: {
    bg: "#eef2ee", accent: "#2c5f5f", decoImage: "/decorations/city.svg", icon: faTrain,
    deco: <div className="fixed top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#9ab8b8]/8 to-transparent pointer-events-none z-0" />,
  },
  modern: {
    bg: "#f0ede6", accent: "#4a6a3a", decoImage: "/decorations/mount-bromo.webp", icon: faGraduationCap,
    deco: <div className="fixed top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#c4b8a8]/8 to-transparent pointer-events-none z-0" />,
  },
};

export default function HistoryList() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation();
  const periodKey = (searchParams.get("period") as HistoryPeriodKey | null) ?? "kingdoms";
  const activePeriod = HISTORY_PERIODS.find((p) => p.key === periodKey) ?? HISTORY_PERIODS[0];
  const vibe = ERA[activePeriod.key];
  const stories = useMemo(() => HISTORY_STORIES.filter((s) => s.period === activePeriod.key), [activePeriod.key]);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: vibe.bg }}>
      <BackButton to="/" />
      {vibe.deco}
      <img src={vibe.decoImage} alt="" className="fixed inset-0 w-full h-full object-cover opacity-[0.04] pointer-events-none z-0" />
      <div className={`fixed inset-0 opacity-[0.06] ${HISTORY_ACCENTS[activePeriod.accent].pattern} pointer-events-none z-0`} />
      
      {/* Outer container with standard horizontal padding to ensure left & right spacing on laptop screens */}
      <div className="relative z-10 mx-auto max-w-[1400px] xl:max-w-[1700px] px-4 sm:px-8 md:px-12 lg:px-16 pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20 lg:pb-24">
        
        {/* Era Navigation Chips */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
          {HISTORY_PERIODS.map((period) => {
            const active = period.key === activePeriod.key;
            const theme = HISTORY_ACCENTS[period.accent];
            return (
              <button 
                key={period.key} 
                onClick={() => setSearchParams({ period: period.key }, { replace: true })}
                className={`rounded-full border px-4 sm:px-5 py-2 text-xs sm:text-sm font-black uppercase tracking-[0.18em] transition-all cursor-pointer ${
                  active 
                    ? `bg-white shadow-sm ${theme.chip} border-transparent` 
                    : 'bg-white/50 border-black/10 text-black/55 hover:border-black/20 hover:bg-white/70'
                }`}
              >
                {t(`history.periods.${period.key}.label`)}
              </button>
            );
          })}
        </div>

        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <h1 className="text-editorial text-[clamp(2.75rem,5.5vw,5.5rem)] text-[#1a1a1a] leading-[0.9] tracking-tight mb-4 font-black uppercase">
            {t(`history.periods.${activePeriod.key}.label`)}
          </h1>
          <p className="text-base sm:text-lg text-[#1a1a1a]/60 font-medium leading-relaxed max-w-3xl">
            {t(`history.periods.${activePeriod.key}.summary`)}
          </p>
        </div>

        {/* Story List Items */}
        <div className="border-t border-[#1a1a1a]/10">
          {stories.map((story) => (
            <button 
              key={story.slug} 
              onClick={() => navigate(`/history/${story.slug}`)}
              className="group w-full text-left border-b border-[#1a1a1a]/10 py-8 sm:py-10 cursor-pointer block"
            >
              <div className="flex flex-col md:flex-row gap-6 lg:gap-10 items-start md:items-center justify-between">
                {/* Thumbnail */}
                <div className="w-full md:w-[320px] lg:w-[380px] shrink-0 h-[200px] sm:h-[230px] rounded-[20px] overflow-hidden bg-black/5">
                  <img 
                    src={story.imageUrl} 
                    alt={story.title} 
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" 
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 flex flex-col justify-center gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs sm:text-sm font-black uppercase tracking-[0.22em]" style={{ color: vibe.accent + "88" }}>
                      {story.year}
                    </span>
                    <span className="text-[#1a1a1a]/20">·</span>
                    <span className="text-xs sm:text-sm font-medium" style={{ color: vibe.accent + "aa" }}>
                      {story.place}
                    </span>
                  </div>

                  <h2 className="text-[22px] sm:text-[28px] lg:text-[34px] font-bold leading-[1.06] tracking-tight text-[#1a1a1a] group-hover:opacity-75 transition-opacity">
                    {story.title}
                  </h2>

                  <p className="text-sm sm:text-base text-[#1a1a1a]/60 font-medium leading-relaxed max-w-4xl">
                    {story.hook}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-xs sm:text-sm font-bold" style={{ color: vibe.accent + "bb" }}>
                    <span className="w-6 h-px bg-[#1a1a1a]/25 group-hover:w-10 transition-all" />
                    {t('history.readStory')}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
