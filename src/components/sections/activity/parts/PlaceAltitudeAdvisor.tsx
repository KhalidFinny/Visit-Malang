import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain, faCheck, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import type { PlaceAltitudeAdvisorProps } from "../types";

export default function PlaceAltitudeAdvisor({ altitude }: PlaceAltitudeAdvisorProps) {
  const { t } = useTranslation();

  return (
    <div className="p-4 sm:p-6 lg:p-8 font-sans">
      <div className="flex items-center gap-2 mb-4">
        <FontAwesomeIcon icon={faMountain} className="text-sm text-[#A3B18A]" />
        <span className="text-swiss text-[10px] font-black tracking-[0.15em] uppercase text-[#A3B18A]">{t("placeDetail.altitude.label")}</span>
      </div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#2D221F]/10">
        <h4 className="text-xl md:text-2xl font-black text-editorial text-[#2D221F] uppercase tracking-tight">{t("placeDetail.altitude.checklist")}</h4>
        <div className="px-3.5 py-1.5 rounded-lg bg-[#A3B18A]/10 border border-[#A3B18A]/20 text-[#A3B18A] text-swiss text-[9px] font-black tracking-[0.15em] uppercase self-start sm:self-auto flex items-center gap-2">
          <FontAwesomeIcon icon={faMountain} className="text-xs" />
          <span>{t("placeDetail.altitude.badge", { altitude: altitude.altitude.toLocaleString() })}</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
        <div className="bg-[#f5f4f0] border border-[#2D221F]/10 p-5 rounded-xl flex flex-col justify-center">
          <span className="text-swiss text-[9px] font-black tracking-[0.15em] uppercase text-[#2D221F]/40 block mb-1">{t("placeDetail.altitude.expectedTemperature")}</span>
          <span className="text-3xl font-black text-editorial text-[#A3B18A] tracking-tight leading-none my-1.5">{altitude.temp_range}</span>
          <span className="text-[9px] text-[#2D221F]/40 font-bold uppercase tracking-wider block mt-1">{t("placeDetail.altitude.colderThanCity")}</span>
        </div>
        <div className="md:col-span-2">
          <h5 className="text-swiss text-[10px] font-black tracking-[0.15em] uppercase text-[#2D221F]/40 mb-3">{t("placeDetail.altitude.recommendedPacking")}</h5>
          <div className="flex flex-wrap gap-2">
            {altitude.packing_list.split(",").map((item: string, i: number) => (
              <span key={i} className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold bg-[#f5f4f0] border border-[#2D221F]/10 rounded-xl text-[#2D221F]">
                <FontAwesomeIcon icon={faCheck} className="text-[#A3B18A] text-[10px]" />
                {item.trim()}
              </span>
            ))}
          </div>
          {altitude.altitude > 1500 && (
            <p className="text-xs text-amber-600 leading-relaxed font-bold mt-4 flex items-center gap-2 uppercase tracking-wide font-swiss">
              <FontAwesomeIcon icon={faTriangleExclamation} />
              <span>{t("placeDetail.altitude.highElevationWarning")}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
