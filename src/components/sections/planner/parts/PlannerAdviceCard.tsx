import { useTranslation } from 'react-i18next';
import type { PlannerAdvice, EconomyOrigin } from '../types';

interface Props {
  advice: PlannerAdvice;
  origin: EconomyOrigin;
}

export function FoodIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

export default function PlannerAdviceCard({ advice, origin }: Props) {
  const { t } = useTranslation();
  const { places, foods, budgetEstimation, headline, counsel } = advice;

  return (
    <div className="flex flex-col gap-0 w-full text-left">

      {/* ── Summary Banner ── */}
      <div className="px-6 sm:px-8 py-6 border-b border-black/[0.06] bg-black/[0.01]">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
          <div className="flex-1">
            <span className="inline-flex items-center gap-2 text-base font-semibold text-[#7a9e64] mb-2 uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7a9e64]" />
              {t('planner.advice.heading')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black uppercase tracking-tight leading-tight">
              {headline}
            </h2>
            <p className="text-base sm:text-lg text-black/55 leading-relaxed mt-2.5 max-w-3xl">
              {counsel}
            </p>
          </div>
          <div className="shrink-0 flex sm:flex-col items-start sm:items-end justify-between sm:justify-start bg-black/[0.03] sm:bg-transparent px-4 py-3 sm:p-0 rounded-xl min-w-[160px]">
            <span className="text-xs font-bold uppercase tracking-wider text-black/35 sm:block hidden">{t('planner.advice.strategy')}</span>
            <span className="text-lg sm:text-xl font-bold text-black uppercase">{budgetEstimation.level}</span>
            <span className="text-sm font-semibold text-[#7a9e64] uppercase tracking-wider sm:mt-1">{origin.code} · {budgetEstimation.strength}</span>
          </div>
        </div>
      </div>

      {/* ── Compact Budget Row ── */}
      <div className="px-6 sm:px-8 py-5 bg-[#7a9e64]/5 border-b border-black/[0.06] flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-8">
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
        <p className="text-base text-black/55 font-medium italic max-w-xl">
          "{budgetEstimation.suggestion}"
        </p>
      </div>

      {/* ── Split Columns (No Details, Large Typo) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-black/[0.06] w-full">
        
        {/* Left Column: Recommended Places */}
        <div className="flex flex-col p-6 lg:p-8">
          <h3 className="text-base font-bold uppercase tracking-wider text-black/40 mb-4">
            {t('planner.advice.recommendedPlaces')}
          </h3>
          <div className="flex flex-col gap-3">
            {places.map((p, i) => (
              <div key={p.id} className="flex items-center justify-between gap-4 bg-black/[0.02] border border-black/[0.04] p-4 rounded-xl hover:bg-black/[0.04] transition-colors">
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="text-base font-bold text-[#7a9e64]">{String(i + 1).padStart(2, '0')}</span>
                  <div className="flex flex-col min-w-0">
                    <span className="text-base font-bold text-black truncate">{p.name}</span>
                    <span className="text-xs font-semibold text-black/35 uppercase tracking-wider">{p.category}</span>
                  </div>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name + ' Malang')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 p-2 bg-white rounded-lg border border-black/[0.06] hover:text-[#7a9e64] hover:border-[#7a9e64]/30 transition-all cursor-pointer"
                  aria-label="Map Link"
                >
                  <svg className="w-4 h-4" viewBox="0 0 12 12" fill="none">
                    <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Culinary & Budget Breakdown */}
        <div className="flex flex-col p-6 lg:p-8 gap-6">
          {/* Culinary */}
          <div>
            <h3 className="text-base font-bold uppercase tracking-wider text-black/40 mb-4">
              {t('planner.advice.seasonalCulinary')}
            </h3>
            <div className="flex flex-wrap gap-2">
              {foods.map((f) => (
                <span
                  key={f.id}
                  className="inline-flex items-center gap-2 px-4 py-2 text-base font-semibold bg-white border border-black/[0.06] rounded-full text-black shadow-sm select-none"
                >
                  <FoodIcon className="w-4 h-4 text-[#7a9e64]" />
                  <span>{f.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Quick Price Synthesis */}
          <div className="bg-black/[0.02] border border-[#1a1a1a]/8 rounded-xl p-4.5 flex flex-col gap-2.5">
            <div className="flex items-center justify-between text-base">
              <span className="font-semibold text-black/45">Daily Expense</span>
              <span className="font-bold text-[#7a9e64]">{budgetEstimation.dailyEstimate}</span>
            </div>
            <div className="flex items-center justify-between text-base pt-2.5 border-t border-black/[0.04]">
              <span className="font-semibold text-black/45">Itinerary Total</span>
              <span className="font-bold text-black">{budgetEstimation.totalEstimate}</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
