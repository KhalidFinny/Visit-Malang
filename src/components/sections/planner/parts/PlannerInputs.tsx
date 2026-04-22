import type { BudgetTier, EconomyOrigin } from "../types";
import { ECONOMIES } from "../utils/PlannerLogic";

interface Props {
  budget: BudgetTier;
  setBudget: (b: BudgetTier) => void;
  origin: EconomyOrigin;
  setOrigin: (o: EconomyOrigin) => void;
  compact?: boolean;
}

export default function PlannerInputs({ budget, setBudget, origin, setOrigin, compact }: Props) {
  if (compact) {
    return (
      <div className="flex items-center gap-4 flex-wrap">
        {/* Origin — icon-only pill row */}
        <div className="flex gap-1">
          {ECONOMIES.map((e) => (
            <button
              key={e.code}
              onClick={() => setOrigin(e)}
              title={e.name}
              className={`w-7 h-7 rounded-full text-sm flex items-center justify-center transition-all border ${
                origin.code === e.code
                  ? "border-white bg-white/10"
                  : "border-transparent opacity-40 hover:opacity-70"
              }`}
            >
              {e.flag}
            </button>
          ))}
        </div>

        <div className="w-px h-4 bg-white/10" />

        {/* Budget — text toggle row */}
        <div className="flex gap-1">
          {(["backpacker", "balanced", "luxury"] as BudgetTier[]).map((tier) => (
            <button
              key={tier}
              onClick={() => setBudget(tier)}
              className={`px-3 py-1 text-[10px] font-black uppercase tracking-widest rounded transition-all border ${
                budget === tier
                  ? "border-white bg-white text-black"
                  : "border-white/10 text-white/40 hover:text-white/70"
              }`}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Origin Selector */}
      <div className="flex flex-col gap-2">
        <label className="text-swiss text-[9px] font-black uppercase text-white/25 tracking-widest">
          Economic Origin
        </label>
        <div className="grid grid-cols-3 gap-2">
          {ECONOMIES.map((e) => (
            <button
              key={e.code}
              onClick={() => setOrigin(e)}
              className={`flex items-center gap-2 px-3 py-2 border transition-all rounded-md ${
                origin.code === e.code
                  ? "border-white bg-white text-black"
                  : "border-white/[0.08] text-white/50 hover:border-white/20"
              }`}
            >
              <span className="text-base">{e.flag}</span>
              <span className="text-[11px] font-black">{e.code}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Budget Tiers */}
      <div className="flex flex-col gap-2">
        <label className="text-swiss text-[9px] font-black uppercase text-white/25 tracking-widest">
          Planned Pursuit
        </label>
        <div className="flex flex-col gap-1.5">
          {(["backpacker", "balanced", "luxury"] as BudgetTier[]).map((tier) => (
            <button
              key={tier}
              onClick={() => setBudget(tier)}
              className={`flex items-center justify-between px-4 py-3 border transition-all rounded-md ${
                budget === tier
                  ? "border-white bg-white text-black"
                  : "border-white/[0.08] text-white hover:border-white/20"
              }`}
            >
              <div className="flex flex-col items-start">
                <span className={`text-[11px] font-black uppercase tracking-widest ${budget === tier ? "text-black" : "text-white"}`}>
                  {tier}
                </span>
                <span className={`text-[9px] ${budget === tier ? "text-black/50" : "text-white/30"}`}>
                  {tier === "backpacker" && "Essential & Authentic"}
                  {tier === "balanced" && "Curated & Comfortable"}
                  {tier === "luxury" && "Legacy & Exclusive"}
                </span>
              </div>
              <div className={`w-2 h-2 rounded-full ${budget === tier ? "bg-black" : "bg-white/15"}`} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
