import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMountain, faTrain, faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { HISTORY_PERIODS, HISTORY_ACCENTS } from "./historyData";
import { HISTORY_PERIOD_META } from "./historyMeta";

const eraDecor = {
  kingdoms: {
    border: "border-[#b8a080]",
    bg: "bg-[#eaddce]",
    iconBg: "bg-[#d4bc9a]/30",
    iconColor: "text-[#8a6e4a]",
    decoIcon: faMountain,
    decoImage: "/decorations/candi-badut.webp",
    markerBar: "bg-[#c4835a]",
    accentText: "text-[#6a5038]",
  },
  colonial: {
    border: "border-[#9ab8b8]",
    bg: "bg-[#dee4e0]",
    iconBg: "bg-[#b8d0ce]/30",
    iconColor: "text-[#3d7a7a]",
    decoIcon: faTrain,
    decoImage: "/decorations/city.svg",
    markerBar: "bg-[#b8847a]",
    accentText: "text-[#2c5f5f]",
  },
  modern: {
    border: "border-[#c4b8a8]",
    bg: "bg-[#e8e4dc]",
    iconBg: "bg-[#d0c8b8]/30",
    iconColor: "text-[#6a7a5a]",
    decoIcon: faGraduationCap,
    decoImage: "/decorations/mount-bromo.webp",
    markerBar: "bg-[#c46b4a]",
    accentText: "text-[#4a6a3a]",
  },
} as const;

export default function HistoryStage() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full bg-[#f5f4f0] overflow-hidden min-h-[400px]">
      <div className="swiss-container py-16 sm:py-20 lg:py-28">
        <div className="mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#3A5A3A] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#3A5A3A]" />
            Malang History
          </span>
          <h2 className="text-editorial text-[clamp(2.5rem,5vw,4.5rem)] text-[#0A0A0A] leading-[0.92] tracking-tight mb-4">
            How Malang<br /><span className="text-[#3A5A3A]">came to be</span>
          </h2>
          <p className="text-sm sm:text-base text-[#0A0A0A]/60 font-medium leading-relaxed max-w-2xl">
            From ancient inscriptions to a modern city of students and layered culture — explore the key eras that shaped Malang.
          </p>
        </div>

        <div className="hidden lg:block mb-6">
          <div className="relative px-8">
            <div className="absolute left-8 right-8 top-[34px] h-px bg-black/[0.08]" />
            <div className="grid grid-cols-3 gap-6 relative z-10">
              {HISTORY_PERIODS.map((period) => {
                const accent = HISTORY_ACCENTS[period.accent];
                const meta = HISTORY_PERIOD_META[period.key];
                const deco = eraDecor[period.key];
                return (
                  <button key={period.key} onClick={() => navigate(`/history?period=${period.key}`)} className="flex flex-col items-center text-center group">
                    <p className="text-sm font-medium text-[#0A0A0A]/48 mb-5">{period.range}</p>
                    <div className={`w-4 h-4 rounded-full ${deco.markerBar} border-2 border-white shadow-sm`} />
                    <div className="w-px h-6 bg-black/[0.08] mt-3" />
                    <div className={`mt-4 rounded-[28px] border-2 ${deco.border} ${deco.bg} p-5 sm:p-6 text-left w-full relative overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg`}>
                      <img src={deco.decoImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.1] mix-blend-overlay pointer-events-none" />
                      <div className="absolute -right-8 -top-8 text-black/[0.04]">
                        <FontAwesomeIcon icon={deco.decoIcon} className="text-[120px]" />
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-start justify-between gap-4 mb-5">
                          <div className="text-left">
                            <p className={`text-[48px] leading-none font-bold ${deco.accentText} opacity-40`}>{meta.chapter}</p>
                            <span className={`inline-flex items-center gap-2 text-[10px] font-black tracking-[0.16em] px-2.5 py-1 rounded-full border mt-2 ${accent.chip}`}>
                              {period.range}
                            </span>
                          </div>
                          <div className={`shrink-0 rounded-2xl ${deco.iconBg} ${deco.iconColor} w-[72px] h-[72px] flex items-center justify-center border border-white/40`}>
                            <FontAwesomeIcon icon={meta.icon} className="text-[28px]" />
                          </div>
                        </div>
                        <div className={`w-12 h-1 rounded-full mb-4 ${deco.markerBar}`} />
                        <h3 className={`text-[26px] font-black leading-tight mb-3 ${deco.accentText}`}>{period.label}</h3>
                        <p className={`text-sm leading-relaxed mb-4 ${deco.accentText} opacity-70 font-medium`}>{period.summary}</p>
                        <p className={`text-xs font-medium ${deco.accentText} opacity-50`}>{meta.landmarks.join(" • ")}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="lg:hidden relative pl-7 border-l border-black/[0.08] flex flex-col gap-5">
          {HISTORY_PERIODS.map((period) => {
            const accent = HISTORY_ACCENTS[period.accent];
            const meta = HISTORY_PERIOD_META[period.key];
            const deco = eraDecor[period.key];
            return (
              <button key={period.key} onClick={() => navigate(`/history?period=${period.key}`)} className={`relative text-left rounded-[28px] border-2 ${deco.border} ${deco.bg} p-5 overflow-hidden transition-all hover:shadow-md`}>
                <img src={deco.decoImage} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.1] mix-blend-overlay pointer-events-none" />
                <div className="absolute -right-6 -top-6 text-black/[0.04]">
                  <FontAwesomeIcon icon={deco.decoIcon} className="text-[100px]" />
                </div>
                <div className={`absolute -left-[33px] top-8 w-4 h-4 rounded-full ${deco.markerBar} border-2 border-white shadow-sm`} />
                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <p className={`text-[40px] leading-none font-bold ${deco.accentText} opacity-40`}>{meta.chapter}</p>
                      <span className={`inline-flex items-center gap-2 text-[10px] font-black tracking-[0.16em] px-2.5 py-1 rounded-full border mt-2 ${accent.chip}`}>{period.range}</span>
                    </div>
                    <div className={`shrink-0 rounded-2xl ${deco.iconBg} ${deco.iconColor} w-14 h-14 flex items-center justify-center border border-white/40`}>
                      <FontAwesomeIcon icon={meta.icon} className="text-[22px]" />
                    </div>
                  </div>
                  <div className={`w-10 h-1 rounded-full mb-3 ${deco.markerBar}`} />
                  <h3 className={`text-[24px] font-black leading-tight mb-2 ${deco.accentText}`}>{period.label}</h3>
                  <p className={`text-sm leading-relaxed mb-3 ${deco.accentText} opacity-70 font-medium`}>{period.summary}</p>
                  <p className={`text-xs font-medium ${deco.accentText} opacity-50`}>{meta.landmarks.join(" • ")}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
