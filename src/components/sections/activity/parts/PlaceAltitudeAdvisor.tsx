import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faCheck, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import type { PlaceAltitudeAdvisorProps } from "../types";

export default function PlaceAltitudeAdvisor({ altitude }: PlaceAltitudeAdvisorProps) {
  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center gap-2 mb-4">
        <FontAwesomeIcon icon={faMountain} className="text-sm text-sky-400" />
        <span className="text-sm font-bold uppercase tracking-widest text-sky-400">Altitude & Packing</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/5">
        <h4 className="text-lg font-bold text-white uppercase tracking-tight">Altitude & Packing Checklist</h4>
        <div className="px-3.5 py-1.5 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-bold uppercase tracking-wider self-start sm:self-auto flex items-center gap-2">
          <FontAwesomeIcon icon={faMountain} className="text-xs" />
          <span>{altitude.altitude.toLocaleString()}m Altitude</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
        <div className="bg-[#221a18] border border-[#f5f4f0]/5 p-5 rounded-xl">
          <span className="text-sm text-[#f5f4f0]/50 font-bold uppercase tracking-wider block mb-1">Expected Temperature</span>
          <span className="text-3xl font-black text-sky-400 tracking-tight">{altitude.temp_range}</span>
          <span className="text-sm text-[#f5f4f0]/40 font-bold uppercase tracking-wider block mt-1.5">Colder than Malang city</span>
        </div>
        <div className="md:col-span-2">
          <h5 className="text-sm font-bold text-[#f5f4f0]/70 uppercase tracking-wider mb-3">Recommended Packing Gear</h5>
          <div className="flex flex-wrap gap-2">
            {altitude.packing_list.split(",").map((item: string, i: number) => (
              <span key={i} className="inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold bg-[#221a18] border border-[#f5f4f0]/5 rounded-full text-[#f5f4f0]/70">
                <FontAwesomeIcon icon={faCheck} className="text-sky-400 text-[10px]" />
                {item.trim()}
              </span>
            ))}
          </div>
          {altitude.altitude > 1500 && (
            <p className="text-sm text-amber-400/80 leading-relaxed font-semibold mt-4 flex items-center gap-2">
              <FontAwesomeIcon icon={faTriangleExclamation} />
              <span>High elevation area. Warm layers recommended for early sunrise viewing.</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
