import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faCheck } from "@fortawesome/free-solid-svg-icons";
import type { PlaceAltitudeAdvisorProps } from "../types";

export default function PlaceAltitudeAdvisor({ altitude }: PlaceAltitudeAdvisorProps) {
  return (
    <div className="p-5 md:p-7 xl:p-8 font-sans">
      <div className="flex items-center gap-2 mb-4">
        <FontAwesomeIcon icon={faMountain} className="text-sm text-[#A3B18A]" />
        <span className="text-swiss text-sm font-black tracking-[0.08em] uppercase text-[#A3B18A]">Ketinggian &amp; Perlengkapan</span>
      </div>
      <div className="flex flex-col gap-4 pb-5 border-b border-[#2D221F]/10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
          <h4 className="text-xl md:text-2xl font-black text-editorial text-[#2D221F] uppercase tracking-tight leading-[0.95] text-balance max-w-[16ch]">
            Checklist Ketinggian &amp; Perlengkapan
          </h4>
          <div className="px-3.5 py-2 rounded-lg bg-[#A3B18A]/10 border border-[#A3B18A]/20 text-[#A3B18A] text-swiss text-sm font-black tracking-[0.08em] uppercase self-start flex items-center gap-2">
            <span>{altitude.altitude.toLocaleString()}m Ketinggian</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[minmax(200px,240px)_1fr] gap-6 py-6 items-start">
        <div className="bg-[#f5f4f0] border border-[#2D221F]/10 p-5 md:p-6 rounded-xl flex flex-col justify-center">
          <span className="text-swiss text-sm font-black tracking-[0.08em] uppercase text-[#2D221F]/40 block mb-2">Perkiraan Suhu</span>
          <span className="text-3xl md:text-4xl font-black text-editorial text-[#A3B18A] tracking-tight leading-none my-1.5 text-balance">{altitude.temp_range}</span>
          <span className="text-sm text-[#2D221F]/45 font-bold uppercase tracking-[0.06em] block mt-1">Lebih dingin dari Kota Malang</span>
        </div>
        <div>
          <h5 className="text-swiss text-sm font-black tracking-[0.08em] uppercase text-[#2D221F]/40 mb-3">Perlengkapan yang Disarankan</h5>
          <div className="flex flex-wrap gap-3">
            {altitude.packing_list.split(",").map((item: string, i: number) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-3 text-sm font-bold bg-[#f5f4f0] border border-[#2D221F]/10 rounded-xl text-[#2D221F]">
                <FontAwesomeIcon icon={faCheck} className="text-[#A3B18A] text-sm" />
                {item.trim()}
              </span>
            ))}
          </div>
          {altitude.altitude > 1500 && (
            <div className="mt-5 rounded-xl border border-amber-500/20 bg-amber-500/[0.05] px-4 py-3">
              <p className="text-sm md:text-base text-amber-700 leading-relaxed font-semibold flex items-start gap-2 text-pretty">
                <span>Area berketinggian tinggi. Disarankan membawa pakaian hangat untuk melihat matahari terbit.</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
