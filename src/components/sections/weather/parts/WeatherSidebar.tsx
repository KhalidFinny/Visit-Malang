import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { WeatherSidebarProps } from "../types";

export default function WeatherSidebar({
  predictionText,
  temp,
  condition,
  currentIcon,
  weatherChips,
  hourlyForecast,
}: WeatherSidebarProps) {
  return (
    <aside className="flex flex-col h-full justify-between gap-12">
      {/* Editorial Title */}
      <div>
        <h2 className="text-editorial text-[clamp(2.5rem,4.5vw,4.5rem)] text-white leading-[0.9] tracking-tight mb-8">
          Local
          <br />
          Conditions
        </h2>

        {/* Temperature + Condition */}
        <div className="flex items-end gap-8 mb-10">
          <span className="text-swiss font-thin text-[7rem] leading-none text-white tabular-nums tracking-tighter">
            {temp}°
          </span>
          <div className="pb-4">
            <FontAwesomeIcon
              icon={currentIcon}
              className="text-5xl text-white mb-4 block"
            />
            <span className="text-swiss text-2xl font-bold uppercase tracking-[0.2em] text-white">
              {condition}
            </span>
          </div>
        </div>

        {/* Forecast Bar — Support horizontal scroll without clipping */}
        <div className="w-full flex gap-4 mb-4 overflow-x-auto pb-4 scroll-smooth">
          {hourlyForecast?.map((h, i) => (
            <div key={i} className="flex flex-col items-center p-5 border-2 border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl min-w-[100px] shrink-0">
              <span className="text-[11px] font-black text-white uppercase mb-3">{h.time}</span>
              <FontAwesomeIcon icon={h.icon} className="text-white text-xl mb-3" />
              <span className="text-lg font-bold text-white">{h.temp}°</span>
            </div>
          ))}
        </div>

      </div>

      {/* Weather Chips */}
      <div className="flex flex-col gap-8 border-t-2 border-white/10 pt-10">
        {weatherChips.map(({ icon, label, title }) => (
          <div key={title} className="flex items-center gap-8">
            <div className="w-14 h-14 flex items-center justify-center border-2 border-white/20 bg-white/5 shrink-0 rounded-xl">
              <FontAwesomeIcon icon={icon} className="text-xl text-white" />
            </div>
            <div className="flex items-center justify-between flex-1">
              <span className="text-swiss text-sm font-black tracking-[0.2em] uppercase text-white/70">
                {title}
              </span>
              <span className="text-2xl font-bold text-white">
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
