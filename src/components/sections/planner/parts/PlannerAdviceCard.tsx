import type { PlannerAdvice, EconomyOrigin } from '../types';

interface Props {
  advice: PlannerAdvice;
  origin: EconomyOrigin;
}

export default function PlannerAdviceCard({ advice, origin }: Props) {
  const { places, foods, budgetEstimation, headline, counsel } = advice;

  return (
    <div className="flex flex-col">

      {/* ── Hero Section ─────────────────────────────────────────────── */}
      <div className="px-8 pt-8 pb-7 border-b border-[#1a1a1a]/8">
        <div className="flex items-start justify-between gap-8">
          <div className="flex-1">
            <p className="text-[14px] font-bold uppercase tracking-[0.3em] text-heritage-sage mb-3">
              Your Malang Itinerary
            </p>
            <h3 className="text-4xl lg:text-5xl font-black text-[#1a1a1a] uppercase tracking-tight leading-tight mb-4">
              {headline}
            </h3>
            <p className="text-[16px] font-medium leading-relaxed max-w-3xl text-[#1a1a1a]/50">
              {counsel}
            </p>
          </div>

          {/* Budget card */}
          <div className="shrink-0 flex flex-col gap-1 items-end">
            <span className="text-[14px] font-bold uppercase tracking-widest text-[#1a1a1a]/25">Strategy</span>
            <span className="text-3xl font-black text-[#1a1a1a] uppercase">{budgetEstimation.level}</span>
            <span className="text-[14px] font-semibold text-heritage-sage uppercase tracking-widest">{origin.code} · {budgetEstimation.strength}</span>
          </div>
        </div>
      </div>

      {/* ── Budget Row ───────────────────────────────────────────────── */}
      <div className="px-8 py-5 border-b border-[#1a1a1a]/8 flex items-center gap-6 flex-wrap">
        <div className="flex flex-col gap-0.5">
          <span className="text-[14px] font-bold uppercase tracking-widest text-[#1a1a1a]/30">Per Day</span>
          <span className="text-3xl font-black text-heritage-sage">{budgetEstimation.dailyEstimate}</span>
        </div>
        <div className="w-px h-10 bg-[#1a1a1a]/8" />
        <div className="flex flex-col gap-0.5">
          <span className="text-[14px] font-bold uppercase tracking-widest text-[#1a1a1a]/30">3-Day Total</span>
          <span className="text-3xl font-black text-[#1a1a1a]">{budgetEstimation.totalEstimate}</span>
        </div>
        <div className="w-px h-10 bg-[#1a1a1a]/8 hidden md:block" />
        <p className="text-[14px] text-[#1a1a1a]/40 font-medium flex-1 hidden md:block italic">
          "{budgetEstimation.suggestion}"
        </p>
      </div>

      {/* ── Content Grid ─────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[#1a1a1a]/8">

        {/* Col 1 — Places */}
        <div className="flex flex-col">
          <div className="px-6 py-3 border-b border-[#1a1a1a]/8">
            <p className="text-[14px] font-bold uppercase tracking-[0.25em] text-[#1a1a1a]/40">
              Recommended Places
            </p>
          </div>
          <div className="flex flex-col divide-y divide-[#1a1a1a]/5">
            {places.map((p, i) => (
              <div key={p.id} className="px-6 py-5 hover:bg-[#1a1a1a]/[0.02] transition-colors group">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[14px] font-bold text-heritage-sage">0{i + 1}</span>
                  <div className="h-px flex-1 bg-[#1a1a1a]/6" />
                  <span className="text-[14px] font-semibold uppercase tracking-widest text-[#1a1a1a]/20">
                    {p.category}
                  </span>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(p.name + ' Malang')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] font-black text-[#1a1a1a] uppercase tracking-tight hover:text-heritage-sage transition-colors flex items-center gap-2 w-fit mb-1"
                >
                  {p.name}
                  <span className="text-[10px] text-[#1a1a1a]/20 group-hover:text-heritage-sage/50">↗</span>
                </a>
                <p className="text-[14px] font-medium text-[#1a1a1a]/40 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Col 2 — Food */}
        <div className="flex flex-col">
          <div className="px-6 py-3 border-b border-[#1a1a1a]/8">
            <p className="text-[14px] font-bold uppercase tracking-[0.25em] text-[#1a1a1a]/40">
              Seasonal Culinary
            </p>
          </div>
          <div className="flex flex-col divide-y divide-[#1a1a1a]/5">
            {foods.map((f) => (
              <div key={f.id} className="px-6 py-5 hover:bg-[#1a1a1a]/[0.02] transition-colors">
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex items-center px-2.5 py-1 text-[14px] font-bold text-heritage-sage bg-heritage-sage/10 rounded-md uppercase tracking-wide border border-heritage-sage/20">
                    Culinary
                  </span>
                </div>
                <h4 className="text-[16px] font-black text-[#1a1a1a] uppercase tracking-tight mb-1.5">
                  {f.name}
                </h4>
                <p className="text-[14px] font-medium text-[#1a1a1a]/40 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Col 3 — Budget Synthesis */}
        <div className="flex flex-col">
          <div className="px-6 py-3 border-b border-[#1a1a1a]/8">
            <p className="text-[14px] font-bold uppercase tracking-[0.25em] text-[#1a1a1a]/40">
              Budget Synthesis
            </p>
          </div>
          <div className="px-6 py-6 flex flex-col gap-4">
            <div className="flex items-end justify-between pb-4 border-b border-[#1a1a1a]/8">
              <div>
                <p className="text-[14px] font-bold uppercase tracking-widest text-[#1a1a1a]/25 mb-1">Scale</p>
                <p className="text-3xl font-black text-[#1a1a1a] uppercase">{budgetEstimation.level}</p>
              </div>
              <div className="text-right">
                <p className="text-[14px] font-bold text-heritage-sage uppercase tracking-widest">{origin.code}</p>
                <p className="text-[14px] font-bold text-[#1a1a1a]/40">{budgetEstimation.strength}</p>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between p-3.5 bg-[#1a1a1a]/4 rounded-xl">
                <span className="text-[14px] font-bold uppercase tracking-widest text-[#1a1a1a]/40">Daily</span>
                <span className="text-xl font-black text-heritage-sage">{budgetEstimation.dailyEstimate}</span>
              </div>
              <div className="flex items-center justify-between p-3.5 bg-[#1a1a1a]/4 rounded-xl">
                <span className="text-[14px] font-bold uppercase tracking-widest text-[#1a1a1a]/40">3-Day Total</span>
                <span className="text-xl font-black text-[#1a1a1a]">{budgetEstimation.totalEstimate}</span>
              </div>
            </div>

            <div className="p-4 bg-heritage-sage/10 border border-heritage-sage/20 rounded-xl">
              <p className="text-[14px] font-bold uppercase tracking-[0.2em] text-heritage-sage mb-1.5">Strategy</p>
              <p className="text-[14px] font-semibold text-[#1a1a1a]/60 leading-relaxed italic">
                "{budgetEstimation.suggestion}"
              </p>
            </div>

            <p className="text-[14px] text-[#1a1a1a]/20 font-medium leading-relaxed mt-auto pt-3 border-t border-[#1a1a1a]/8">
              Estimates based on current exchange rates for {origin.name}.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
