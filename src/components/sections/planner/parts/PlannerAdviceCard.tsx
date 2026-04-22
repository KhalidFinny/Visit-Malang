import type { EconomyOrigin, PlannerAdvice } from "../types";

interface Props {
  advice: PlannerAdvice;
  origin: EconomyOrigin;
}

export default function PlannerAdviceCard({ advice, origin }: Props) {
  return (
    <div className="flex flex-col h-full px-8 py-8 gap-8">
      {/* Eyebrow */}
      <div className="flex items-center gap-3">
        <span className="text-[9px] font-black uppercase tracking-[0.35em] text-white/20">
          {origin.flag} {origin.code} Context
        </span>
        <div className="flex-1 h-px bg-white/[0.06]" />
      </div>

      {/* Headline — big editorial */}
      <div>
        <h3 className="text-editorial text-5xl text-white leading-none tracking-tighter mb-4">
          {advice.headline}
        </h3>
        <p className="text-swiss text-sm text-white/55 leading-relaxed font-light">
          {advice.counsel}
        </p>
      </div>

      {/* Highlights */}
      <div className="flex flex-col gap-2">
        <span className="text-[9px] font-black uppercase tracking-[0.35em] text-white/20">
          Highlighted Pursuit
        </span>
        <div className="flex flex-col gap-1">
          {advice.highlights.map((h, i) => (
            <div
              key={h}
              className="flex items-center gap-4 px-4 py-3 border border-white/[0.06] rounded-md hover:border-white/20 hover:bg-white/[0.03] transition-all cursor-pointer group"
            >
              <span className="text-[9px] font-black text-white/20 w-4">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm font-semibold text-white/70 group-hover:text-white transition-colors">{h}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <p className="text-[9px] text-white/15 font-light mt-auto">
        Advice is contextual to {origin.name} economic standing and current regional conditions.
      </p>
    </div>
  );
}
