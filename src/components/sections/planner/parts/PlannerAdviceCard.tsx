import { useTranslation } from 'react-i18next';
import type { PlannerAdviceCardProps } from '../types';

export function FoodIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

export default function PlannerAdviceCard({ advice, origin }: PlannerAdviceCardProps) {
  const { t } = useTranslation();
  const { places, foods, budgetEstimation, headline } = advice;

  return (
    <div className="flex flex-col w-full text-left">
      {/* ── Editorial Headline ── */}
      <div className="px-4 sm:px-8 py-6 border-b border-black/[0.06]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black uppercase tracking-tight leading-tight">
              {headline}
            </h2>
          </div>
          <div className="shrink-0 flex items-center gap-4">
            <span className="text-lg sm:text-xl font-bold text-black uppercase">{budgetEstimation.level}</span>
            <span className="text-sm font-semibold text-[#7a9e64] uppercase tracking-wider">{origin.code} · {budgetEstimation.strength}</span>
          </div>
        </div>
      </div>

      {/* ── Budget Row ── */}
      <div className="px-4 sm:px-8 py-4 bg-[#7a9e64]/5 border-b border-black/[0.06] flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wider text-black/40">{t('planner.advice.perDay')}</span>
            <span className="text-xl sm:text-2xl font-bold text-[#4e6b38]">{budgetEstimation.dailyEstimate}</span>
          </div>
          <div className="w-px h-8 bg-black/10" />
          <div className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-wider text-black/40">{t('planner.advice.dayTotal')}</span>
            <span className="text-xl sm:text-2xl font-bold text-black">{budgetEstimation.totalEstimate}</span>
          </div>
        </div>
        <p className="text-sm text-black/55 font-medium italic max-w-md">
          "{budgetEstimation.suggestion}"
        </p>
      </div>

      {/* ── Split Columns ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/[0.06] w-full">

        {/* Places */}
        <div className="flex flex-col p-4 sm:p-6 lg:p-8">
          <h3 className="text-sm font-bold uppercase tracking-wider text-black/40 mb-4">
            {t('planner.advice.recommendedPlaces')}
          </h3>
          <div className="flex flex-col gap-2">
            {places.map((p, i) => (
              <div key={p.id} className="flex items-center justify-between gap-3 p-3 rounded-xl hover:bg-black/[0.02] transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-sm font-bold text-[#7a9e64] shrink-0">{String(i + 1).padStart(2, '0')}</span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-base font-bold text-black truncate">{p.name}</span>
                    <span className="text-xs font-semibold text-black/35 uppercase tracking-wider">{p.category}</span>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name + ' Malang')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 p-2 text-black/30 hover:text-[#7a9e64] transition-colors"
                  aria-label="Map Link"
                >
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 10L10 2M10 2H5M10 2V7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Foods + Price */}
        <div className="flex flex-col p-4 sm:p-6 lg:p-8 gap-5">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-black/40 mb-3">
              {t('planner.advice.seasonalCulinary')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {foods.map((f) => (
                <span
                  key={f.id}
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-white border border-black/[0.08] rounded-full text-black shadow-sm select-none"
                >
                  <FoodIcon className="w-4 h-4 text-[#7a9e64]" />
                  <span>{f.name}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="bg-black/[0.02] border border-black/[0.08] rounded-xl p-4 flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-semibold text-black/45">{t('planner.advice.perDay')}</span>
              <span className="font-bold text-[#7a9e64]">{budgetEstimation.dailyEstimate}</span>
            </div>
            <div className="flex items-center justify-between text-sm pt-2 border-t border-black/[0.04]">
              <span className="font-semibold text-black/45">{t('planner.advice.dayTotal')}</span>
              <span className="font-bold text-black">{budgetEstimation.totalEstimate}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
