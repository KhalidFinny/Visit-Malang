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
          <span className="text-[14px] font-semibold text-[#1a1a1a]/30 uppercase tracking-widest">Month</span>
          <span className="text-[14px] font-bold text-[#1a1a1a] bg-[#1a1a1a]/5 border border-[#1a1a1a]/10 px-3 py-1.5 rounded-md">
            {monthsList && selectedMonth !== undefined ? MONTHS_SHORT[selectedMonth] : "—"}
          </span>
        </div>

        <div className="w-px h-5 bg-[#1a1a1a]/10" />

        <div className="flex gap-2">
          {(["backpacker", "balanced", "luxury"] as BudgetTier[]).map((tier) => (
            <button
              key={tier}
              onClick={() => setBudget(tier)}
              className={`px-4 py-2 text-[14px] font-bold uppercase tracking-widest rounded-md border transition-all ${
                budget === tier
                  ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                  : "border-[#1a1a1a]/10 text-[#1a1a1a]/40 hover:text-[#1a1a1a] hover:border-[#1a1a1a]/25 bg-transparent"
              }`}
            >
              {tier}
            </button>
          ))}
        </div>

        <div className="w-px h-5 bg-[#1a1a1a]/10" />

        <div className="flex items-center gap-2 bg-[#1a1a1a]/5 border border-[#1a1a1a]/10 px-3 py-1.5 rounded-md">
          <span className="text-base leading-none">{origin.flag}</span>
          <span className="text-[14px] font-bold text-[#1a1a1a]">{origin.code}</span>
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
          <label className="text-[14px] font-bold uppercase tracking-[0.25em] text-[#1a1a1a]/40">
            Month of Visit
          </label>
          <div className="grid grid-cols-6 gap-2">
            {MONTHS_SHORT.map((m, idx) => (
              <button
                key={m}
                onClick={() => setSelectedMonth?.(idx)}
                className={`py-3 text-[14px] font-bold rounded-lg border transition-all ${
                  selectedMonth === idx
                    ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                    : "bg-[#1a1a1a]/5 border-[#1a1a1a]/8 text-[#1a1a1a]/50 hover:border-[#1a1a1a]/20 hover:text-[#1a1a1a]"
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Budget tier */}
        <div className="flex flex-col gap-3">
          <label className="text-[14px] font-bold uppercase tracking-[0.25em] text-[#1a1a1a]/40">
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
                      ? "bg-[#1a1a1a] border-[#1a1a1a] text-white"
                      : "bg-[#1a1a1a]/5 border-[#1a1a1a]/8 text-[#1a1a1a] hover:border-[#1a1a1a]/20"
                  }`}
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="text-base font-bold">{TIER_META[tier].label}</span>
                    <span className={`text-[14px] font-medium ${active ? "text-white/50" : "text-[#1a1a1a]/40"}`}>
                      {TIER_META[tier].sub}
                    </span>
                  </div>
                  <div className={`w-3 h-3 rounded-full border-2 transition-all ${
                    active ? "bg-heritage-sage border-heritage-sage" : "border-[#1a1a1a]/20 bg-transparent"
                  }`} />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right: Currency */}
      <div className="flex flex-col gap-3">
        <label className="text-[14px] font-bold uppercase tracking-[0.25em] text-[#1a1a1a]/40">
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
                    ? "bg-heritage-sage/15 border-heritage-sage text-[#1a1a1a]"
                    : "bg-[#1a1a1a]/5 border-[#1a1a1a]/8 text-[#1a1a1a]/40 hover:border-[#1a1a1a]/20 hover:text-[#1a1a1a]"
                }`}
              >
                <span className="text-2xl leading-none">{e.flag}</span>
                <span className="text-[14px] font-bold tracking-wide">{e.code}</span>
              </button>
            );
          })}
        </div>
        <p className="text-[14px] text-[#1a1a1a]/20 font-medium mt-1">
          Estimates adapt to purchasing power
        </p>
      </div>

    </div>
  );
}
