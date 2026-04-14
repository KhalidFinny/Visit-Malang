import type { WeatherFooterProps } from "../types";

export default function WeatherFooter({ activeIndex, totalItems }: WeatherFooterProps) {
  return (
    <footer className="flex justify-between items-center py-8 border-t-2 border-midnight-steel/20">
      <div className="flex items-center gap-6">
        <span className="text-swiss text-lg tracking-[0.2em] text-midnight-steel uppercase font-black">
          {String(activeIndex + 1).padStart(2, "0")} / {String(totalItems).padStart(2, "0")}
        </span>
        <div className="flex gap-2">
          {Array.from({ length: totalItems }).map((_, i) => (
            <div
              key={i}
              className={`h-[4px] transition-all duration-500 rounded-full ${
                i === activeIndex
                  ? "w-8 bg-midnight-steel"
                  : "w-3 bg-midnight-steel/20"
              }`}
            />
          ))}
        </div>
      </div>
      <span className="text-swiss text-lg tracking-[0.1em] text-midnight-steel font-black uppercase hidden md:block">
        SCROLL OR CLICK TO EXPLORE
      </span>
    </footer>
  );
}
