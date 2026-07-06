import { useTranslation } from 'react-i18next';
import type { PlannerInputsProps, BudgetTier } from '../types';
import { ECONOMIES } from '../utils/PlannerLogic';

const MONTH_SHORT_KEYS = [
  'months.short.jan', 'months.short.feb', 'months.short.mar', 'months.short.apr',
  'months.short.may', 'months.short.jun', 'months.short.jul', 'months.short.aug',
  'months.short.sep', 'months.short.oct', 'months.short.nov', 'months.short.dec'
];

export function BackpackerIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20V10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" />
      <path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M8 22V12h8v10" />
      <path d="M4 10h16" />
    </svg>
  );
}

export function BalancedIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" />
      <path d="M3 21h18" />
      <path d="M3 7h18" />
      <path d="M6 7l-2 8h4l-2-8z" />
      <path d="M18 7l-2 8h4l-2-8z" />
    </svg>
  );
}

export function LuxuryIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.886L19.8 9.8l-4.788 3.914L16.924 19.6 12 15.686 7.076 19.6l1.912-5.886L4.2 9.8l5.888-.914L12 3z" />
    </svg>
  );
}

export default function PlannerInputs({
  budget, setBudget, origin, setOrigin,
  selectedMonth, setSelectedMonth,
  compact = false,
  step = 1,
}: PlannerInputsProps) {
  const { t } = useTranslation();

  /* ── Compact inline strip (results footer) ── */
  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-3">
        {/* Month chip */}
        <div className="flex items-center gap-2 bg-transparent border border-black/[0.08] px-3.5 py-1.5 rounded-full select-none">
          <span className="text-xs font-semibold text-black/50 uppercase tracking-wider">
            {t('planner.input.month')}
          </span>
          <span className="text-sm font-bold text-black">
            {selectedMonth !== undefined ? t(MONTH_SHORT_KEYS[selectedMonth]) : "—"}
          </span>
        </div>

        {/* Origin chip */}
        <div className="flex items-center gap-2 bg-transparent border border-black/[0.08] px-3.5 py-1.5 rounded-full select-none">
          <span className="text-lg leading-none">{origin.flag}</span>
          <span className="text-sm font-bold text-black">{origin.code}</span>
        </div>

        {/* Budget selector (Outline only) */}
        <div className="flex items-center gap-1.5">
          {(["backpacker", "balanced", "luxury"] as BudgetTier[]).map((tier) => (
            <button
              key={tier}
              onClick={() => setBudget(tier)}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-full border transition-all cursor-pointer ${
                budget === tier
                  ? "bg-transparent border-black text-black border-2"
                  : "bg-transparent text-black/40 border-black/10 hover:border-black/25"
              }`}
            >
              {t('planner.tier.' + tier + 'Sub')}
            </button>
          ))}
        </div>
      </div>
    );
  }

  /* ── Wizard step layout (Step by Step - Outline Only) ── */
  return (
    <div className="w-full flex flex-col gap-6 py-4">

      {/* Step 1: Choose Month of Visit */}
      {step === 1 && (
        <div className="flex flex-col gap-5 text-center max-w-2xl mx-auto w-full px-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7a9e64]">Step 1 of 3</span>
            <h3 className="text-xl font-bold text-black uppercase tracking-tight">{t('planner.input.month')}</h3>
            <p className="text-sm text-black/40 font-medium">When do you plan to explore Malang?</p>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-2.5 pt-2">
            {MONTH_SHORT_KEYS.map((key, idx) => (
              <button
                key={key}
                onClick={() => setSelectedMonth?.(idx)}
                className={`py-4 text-base font-bold rounded-2xl border transition-all cursor-pointer ${
                  selectedMonth === idx
                    ? "bg-transparent border-2 border-black text-black"
                    : "bg-transparent border-black/[0.08] text-black/50 hover:border-black/20 hover:text-black"
                }`}
              >
                {t(key)}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Choose Travel Style */}
      {step === 2 && (
        <div className="flex flex-col gap-5 text-center max-w-3xl mx-auto w-full px-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7a9e64]">Step 2 of 3</span>
            <h3 className="text-xl font-bold text-black uppercase tracking-tight">{t('planner.input.travelStyle')}</h3>
            <p className="text-sm text-black/40 font-medium">Choose a style that matches your budget and comfort preference.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {(["backpacker", "balanced", "luxury"] as BudgetTier[]).map((tier) => {
              const active = budget === tier;
              return (
                <button
                  key={tier}
                  onClick={() => setBudget(tier)}
                  className={`flex flex-col items-center justify-between p-6 border rounded-2xl transition-all text-center cursor-pointer ${
                    active
                      ? "border-2 border-black bg-transparent text-black"
                      : "border-black/[0.08] bg-transparent text-black/50 hover:border-black/20"
                  }`}
                >
                  <div className={active ? "mb-3 text-black" : "mb-3 text-black/40"}>
                    {tier === 'backpacker' && <BackpackerIcon className="w-8 h-8" />}
                    {tier === 'balanced' && <BalancedIcon className="w-8 h-8" />}
                    {tier === 'luxury' && <LuxuryIcon className="w-8 h-8" />}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-base font-bold uppercase tracking-tight">{t('planner.tier.' + tier)}</span>
                    <span className="text-xs font-medium opacity-70">
                      {t('planner.tier.' + tier + 'Sub')}
                    </span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border transition-all flex items-center justify-center mt-5 ${
                    active ? "border-black bg-transparent" : "border-black/20"
                  }`}>
                    {active && <div className="w-2.5 h-2.5 rounded-full bg-black" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 3: Choose Currency */}
      {step === 3 && (
        <div className="flex flex-col gap-5 text-center max-w-2xl mx-auto w-full px-4">
          <div className="flex flex-col gap-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#7a9e64]">Step 3 of 3</span>
            <h3 className="text-xl font-bold text-black uppercase tracking-tight">{t('planner.input.currency')}</h3>
            <p className="text-sm text-black/45 font-medium">{t('planner.input.estimatesAdapt')}</p>
          </div>
          <div className="grid grid-cols-3 gap-2 sm:gap-2.5 pt-2">
            {ECONOMIES.map((e) => {
              const active = origin.code === e.code;
              return (
                <button
                  key={e.code}
                  onClick={() => setOrigin(e)}
                  className={`flex items-center justify-center gap-2.5 py-3.5 border rounded-2xl transition-all cursor-pointer ${
                    active
                      ? "border-2 border-[#7a9e64] bg-transparent text-[#4e6b38]"
                      : "border-black/[0.08] bg-transparent text-black/50 hover:border-black/20 hover:text-black"
                  }`}
                >
                  <span className="text-lg leading-none">{e.flag}</span>
                  <span className="text-sm font-bold">{e.code}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}
