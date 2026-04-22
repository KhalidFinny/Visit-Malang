import type { BudgetTier, EconomyOrigin } from '../types';
import { ECONOMIES } from '../utils/PlannerLogic';

interface Props {
  budget: BudgetTier;
  setBudget: (b: BudgetTier) => void;
  origin: EconomyOrigin;
  setOrigin: (o: EconomyOrigin) => void;
  selectedMonth?: number;
  setSelectedMonth?: (m: number) => void;
  monthsList?: string[];
  compact?: boolean;
}

const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const TIER_META: Record<BudgetTier, { label: string; sub: string }> = {
  backpacker: { label: "Backpacker", sub: "Budget-conscious essentials" },
  balanced:   { label: "Balanced",   sub: "Comfort with value" },
  luxury:     { label: "Luxury",     sub: "Premium experience" },
};

export default function PlannerInputs({
  budget, setBudget, origin, setOrigin,
  selectedMonth, setSelectedMonth, monthsList,
  compact = false,
}: Props) {
  /* ── Compact strip shown in results view ── */
  if (compact) {
    return (
      <div className="flex items-center gap-6 flex-wrap">
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-white/30 uppercase tracking-widest">Month</span>
          <span className="text-sm font-bold text-white bg-white/8 border border-white/10 px-3 py-1.5 rounded-md">
            {monthsList && selectedMonth !== undefined ? MONTHS_SHORT[selectedMonth] : "—"}
          </span>
        </div>

        <div className="w-px h-5 bg-white/10" />

        <div className="flex gap-2">
          {(["backpacker", "balanced", "luxury"] as BudgetTier[]).map((tier) => (
            <button
              key={tier}
              onClick={() => setBudget(tier)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-md border transition-all ${
                budget === tier
                  ? "bg-white text-premium-black border-white"
                  : "border-white/10 text-white/40 hover:text-white hover:border-white/25 bg-transparent"
              }`}
            >
              {tier}
            </button>
          ))}
        </div>

        <div className="w-px h-5 bg-white/10" />

        <div className="flex items-center gap-2 bg-white/8 border border-white/10 px-3 py-1.5 rounded-md">
          <span className="text-base leading-none">{origin.flag}</span>
          <span className="text-sm font-bold text-white">{origin.code}</span>
        </div>
      </div>
    );
  }

  /* ── Full setup inputs ── */
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-full">

      {/* Left: Month + Budget */}
      <div className="flex flex-col gap-8">
        {/* Month */}
        <div className="flex flex-col gap-3">
          <label className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
            Month of Visit
          </label>
          <div className="grid grid-cols-6 gap-2">
            {MONTHS_SHORT.map((m, idx) => (
              <button
                key={m}
                onClick={() => setSelectedMonth?.(idx)}
                className={`py-3 text-sm font-bold rounded-lg border transition-all ${
                  selectedMonth === idx
                    ? "bg-white text-premium-black border-white"
                    : "bg-white/5 border-white/8 text-white/50 hover:border-white/20 hover:text-white"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Budget tier */}
        <div className="flex flex-col gap-3">
          <label className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
            Travel Style
          </label>
          <div className="flex flex-col gap-2">
            {(["backpacker", "balanced", "luxury"] as BudgetTier[]).map((tier) => {
              const active = budget === tier;
              return (
                <button
                  key={tier}
                  onClick={() => setBudget(tier)}
                  className={`flex items-center justify-between px-6 py-5 border rounded-xl transition-all text-left ${
                    active
                      ? "bg-white border-white text-premium-black"
                      : "bg-white/5 border-white/8 text-white hover:border-white/20"
                  }`}
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="text-base font-bold">{TIER_META[tier].label}</span>
                    <span className={`text-xs font-medium ${active ? "text-premium-black/50" : "text-white/30"}`}>
                      {TIER_META[tier].sub}
                    </span>
                  </div>
                  <div className={`w-3 h-3 rounded-full border-2 transition-all ${
                    active ? "bg-heritage-sage border-heritage-sage" : "border-white/20 bg-transparent"
                  }`} />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right: Currency */}
      <div className="flex flex-col gap-3">
        <label className="text-xs font-bold uppercase tracking-[0.25em] text-white/40">
          Your Currency
        </label>
        <div className="grid grid-cols-3 gap-2 overflow-y-auto max-h-[360px] pr-1 pb-1">
          {ECONOMIES.map((e) => {
            const active = origin.code === e.code;
            return (
              <button
                key={e.code}
                onClick={() => setOrigin(e)}
                className={`flex flex-col items-center justify-center gap-2 py-5 border rounded-xl transition-all ${
                  active
                    ? "bg-heritage-sage/15 border-heritage-sage text-white"
                    : "bg-white/5 border-white/8 text-white/40 hover:border-white/20 hover:text-white"
                }`}
              >
                <span className="text-2xl leading-none">{e.flag}</span>
                <span className="text-sm font-bold tracking-wide">{e.code}</span>
              </button>
            );
          })}
        </div>
        <p className="text-xs text-white/20 font-medium mt-1">
          Estimates adapt to purchasing power
        </p>
      </div>

    </div>
  );
}
