import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { WeatherSidebarProps } from "../types";

export default function WeatherSidebar({
  predictionText,
  temp,
  condition,
  currentIcon,
  weatherChips,
}: WeatherSidebarProps) {
  return (
    <aside className="flex flex-col h-full justify-between gap-10">
      {/* Editorial Title */}
      <div>
        <h2 className="text-editorial text-[clamp(3.5rem,6vw,6rem)] text-midnight-steel leading-[0.85] tracking-tight mb-8">
          Today's
          <br />
          Weather
        </h2>

        {/* Temperature + Condition */}
        <div className="flex items-end gap-6 mb-10">
          <span className="text-swiss font-thin text-[6rem] leading-none text-midnight-steel tabular-nums tracking-tighter">
            {temp}°
          </span>
          <div className="pb-4">
            <FontAwesomeIcon
              icon={currentIcon}
              className="text-5xl text-midnight-steel mb-3 block"
            />
            <span className="text-swiss text-xl font-black uppercase tracking-[0.1em] text-midnight-steel">
              {condition}
            </span>
          </div>
        </div>

        {/* Prediction Text */}
        <div className="border-l-4 border-midnight-steel/30 pl-6">
          <span className="text-swiss text-lg font-black tracking-[0.1em] uppercase text-midnight-steel block mb-2">
            Local Forecast —
          </span>
          <p className="text-swiss text-xl text-midnight-steel font-medium leading-relaxed">
            {predictionText}
          </p>
        </div>
      </div>

      {/* Weather Chips */}
      <div className="flex flex-col gap-4 border-t-2 border-midnight-steel/20 pt-10">
        {weatherChips.map(({ icon, label, title }) => (
          <div key={title} className="flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center border-2 border-midnight-steel/30 bg-midnight-steel/5 shrink-0 rounded-xl">
              <FontAwesomeIcon icon={icon} className="text-xl text-midnight-steel" />
            </div>
            <div className="flex items-center justify-between flex-1">
              <span className="text-swiss text-lg font-black tracking-[0.1em] uppercase text-midnight-steel/70">
                {title}
              </span>
              <span className="text-swiss text-2xl font-black text-midnight-steel">
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
}
