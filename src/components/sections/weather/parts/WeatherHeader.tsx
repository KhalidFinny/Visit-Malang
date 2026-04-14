import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { WeatherHeaderProps } from "../types";

export default function WeatherHeader({
  predictionText,
  temp,
  condition,
  date,
  currentIcon,
  weatherChips,
}: WeatherHeaderProps) {
  return (
    <header className="swiss-grid gap-y-12 mb-20">
      {/* Left Area: Editorial Title */}
      <article className="col-span-12 lg:col-span-7 flex flex-col justify-end">
        <motion.p className="text-swiss text-sm tracking-[0.4em] text-midnight-steel/60 uppercase mb-4 font-bold">
          02 / Daily Conditions
        </motion.p>

        <motion.h2 className="text-editorial text-[clamp(4rem,10vw,8rem)] text-midnight-steel leading-[0.8] tracking-tight">
          Today's
          <br />
          Weather
        </motion.h2>

        <motion.p className="text-swiss text-lg md:text-xl text-midnight-steel/70 mt-8 max-w-lg leading-relaxed font-light">
          <span className="text-midnight-steel/40 uppercase text-[10px] tracking-[0.3em] block mb-2 font-bold italic">
            Local Forecast Prediction —
          </span>
          {predictionText}
        </motion.p>
      </article>

      {/* Right Area: Meteorological Stats */}
      <aside className="col-span-12 lg:col-span-5 flex flex-col lg:items-end justify-end border-l lg:border-l-0 lg:border-r border-midnight-steel/10 lg:pr-12 pl-8 lg:pl-0">
        <div className="flex items-center gap-8 mb-6">
          <data
            value={temp}
            className="text-swiss font-thin text-[clamp(6rem,8vw,9rem)] text-midnight-steel leading-none tabular-nums tracking-tighter"
          >
            {temp}°
          </data>
          <div className="text-midnight-steel/40">
            <FontAwesomeIcon
              icon={currentIcon}
              className="text-6xl lg:text-7xl"
            />
          </div>
        </div>

        <div className="text-left lg:text-right">
          <h3 className="text-swiss text-2xl text-midnight-steel uppercase tracking-[0.2em] font-black">
            {condition}
          </h3>
          <time className="text-swiss text-sm text-midnight-steel/40 lowercase tracking-[0.2em] mt-2 block font-medium">
            {date}
          </time>
        </div>
      </aside>

      {/* Bottom Bar: Detailed Metrics */}
      <div className="col-span-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-midnight-steel/10 pt-12">
        {weatherChips.map(({ icon, label, title }) => (
          <div key={label} className="flex items-center gap-6 group">
            <div className="w-12 h-12 flex items-center justify-center rounded-none border border-midnight-steel/20 bg-midnight-steel/5 group-hover:bg-midnight-steel/10 transition-colors">
              <FontAwesomeIcon
                icon={icon}
                className="text-xl text-midnight-steel/50"
              />
            </div>
            <div>
              <span className="block text-swiss text-[10px] font-bold tracking-[0.2em] uppercase text-midnight-steel/30 mb-1">
                {title}
              </span>
              <span className="block text-swiss text-2xl font-black text-midnight-steel leading-none">
                {label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
}
