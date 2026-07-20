import type { PlaceSafetyAdvisoryProps } from "../types";

const CONTEXT_NOTES: Record<string, string> = {
  trail: "Check trail conditions before heading out. Weather at higher elevations can change rapidly.",
  urban: "Standard safety precautions apply. Stay aware of your surroundings.",
  coastal: "Tide conditions and weather can change. Check local forecasts before visiting.",
  indoor: "Venue operates under standard safety protocols.",
};

export default function PlaceSafetyAdvisory({ safety }: PlaceSafetyAdvisoryProps) {
  const ctx = (safety as unknown as Record<string, string>).contextType || "urban";
  const isOpen = safety.status === "open";
  const isCaution = safety.status === "caution";
  const statusText = isOpen ? "Open & Safe" : isCaution ? "Advisory Warning" : "Closed / Restricted";

  return (
    <div className="p-6 lg:p-8 flex items-start gap-5 bg-transparent font-sans">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
        isOpen ? 'border-[#A3B18A]/20 text-[#A3B18A] bg-[#A3B18A]/10'
          : isCaution ? 'border-amber-500/20 text-amber-600 bg-amber-50/50'
          : 'border-rose-500/20 text-rose-600 bg-rose-50/50'
      }`}>
        {isOpen && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )}
        {isCaution && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        )}
        {!isOpen && !isCaution && (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
          </svg>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-baseline gap-2 mb-1">
          <span className={`text-xl font-black text-editorial uppercase tracking-tight ${
            isOpen ? 'text-[#A3B18A]' : isCaution ? 'text-amber-600' : 'text-rose-600'
          }`}>{statusText}</span>
          <span className="text-swiss text-sm font-black tracking-[0.15em] uppercase text-[#2D221F]/30">&middot; {new Date(safety.last_updated).toLocaleDateString()}</span>
        </div>
        <p className="text-sm md:text-base text-[#2D221F]/80 leading-relaxed font-medium">{safety.details}</p>
        <span className="mt-3 text-sm font-black tracking-[0.1em] uppercase text-[#2D221F]/40 border-l-2 border-[#A3B18A] pl-3 py-0.5 block max-w-xl font-swiss">
          {CONTEXT_NOTES[ctx] || CONTEXT_NOTES.urban}
        </span>
      </div>
    </div>
  );
}
