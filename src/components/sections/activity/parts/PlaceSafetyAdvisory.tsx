import type { PlaceSafetyAdvisoryProps } from "../types";

export default function PlaceSafetyAdvisory({ safety }: PlaceSafetyAdvisoryProps) {
  return (
    <section className={`p-6 rounded-3xl border transition-colors ${
      safety.status === 'open' 
        ? 'border-emerald-500/20 bg-emerald-500/[0.02]' 
        : safety.status === 'caution'
        ? 'border-amber-500/20 bg-amber-500/[0.02]'
        : 'border-rose-500/20 bg-rose-500/[0.02]'
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border ${
          safety.status === 'open'
            ? 'border-emerald-500/20 text-emerald-400 bg-emerald-500/5'
            : safety.status === 'caution'
            ? 'border-amber-500/20 text-amber-400 bg-amber-500/5'
            : 'border-rose-500/20 text-rose-400 bg-rose-500/5'
        }`}>
          {safety.status === 'open' && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          )}
          {safety.status === 'caution' && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          )}
          {safety.status === 'closed' && (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
            </svg>
          )}
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded border ${
              safety.status === 'open'
                ? 'border-emerald-500/30 text-emerald-400'
                : safety.status === 'caution'
                ? 'border-amber-500/30 text-amber-400'
                : 'border-rose-500/30 text-rose-400'
            }`}>
              {safety.status === 'open' ? 'Live: Open & Safe' : safety.status === 'caution' ? 'Live: Advisory Warning' : 'Live: Closed / Restricted'}
            </span>
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider">
              Official Advisory &bull; Updated {new Date(safety.last_updated).toLocaleDateString()}
            </span>
          </div>
          <h4 className="text-base font-bold text-white mb-1 uppercase tracking-tight">
            {safety.name} Status Report
          </h4>
          <p className="text-sm text-white/70 leading-relaxed font-normal">
            {safety.details}
          </p>
        </div>
      </div>
    </section>
  );
}
