import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faCheck, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import type { PlaceAltitudeAdvisorProps } from "../types";

export default function PlaceAltitudeAdvisor({ altitude }: PlaceAltitudeAdvisorProps) {
  return (
    <section className="p-6 rounded-3xl border border-white/[0.06] bg-white/[0.01]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span className="text-[10px] font-black uppercase tracking-widest text-sky-400">
              Microclimate Advisor
            </span>
          </div>
          <h4 className="text-lg font-bold text-white uppercase tracking-tight">
            Altitude & Packing checklist
          </h4>
        </div>
        <div className="px-3.5 py-1.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-black uppercase tracking-wider self-start sm:self-auto flex items-center gap-2">
          <FontAwesomeIcon icon={faMountain} className="text-xs" />
          <span>{altitude.altitude.toLocaleString()}m Altitude</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
        {/* Climate Range */}
        <div className="flex flex-col justify-center bg-white/[0.02] border border-white/[0.05] p-5 rounded-2xl">
          <span className="text-xs text-white/70 font-bold uppercase tracking-wider mb-1">Expected Temperature</span>
          <span className="text-3xl font-black text-sky-400 tracking-tight">
            {altitude.temp_range}
          </span>
          <span className="text-[10px] text-white/60 font-bold uppercase tracking-wider mt-1.5">
            Significantly colder than Malang city
          </span>
        </div>

        {/* Checklist details */}
        <div className="md:col-span-2 flex flex-col justify-between">
          <div>
            <h5 className="text-xs font-bold text-white/80 uppercase tracking-wider mb-3">Recommended Packing Gear</h5>
            <div className="flex flex-wrap gap-2">
              {altitude.packing_list.split(",").map((item: string, i: number) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.12] rounded-full text-white transition-all select-none"
                >
                  <FontAwesomeIcon icon={faCheck} className="text-sky-400 text-[10px]" />
                  <span>{item.trim()}</span>
                </span>
              ))}
            </div>
          </div>
          {altitude.altitude > 1500 && (
            <p className="text-xs text-amber-400/80 leading-relaxed font-semibold mt-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faTriangleExclamation} />
              <span>High elevation area: Frost or morning dew is common. Warm layers and thermal gear are highly recommended if attempting the early sunrise view.</span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
