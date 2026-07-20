import { useEffect, useState } from "react";
import { useWeather } from "../../weather/hooks/useWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloudRain, faCloud, faWind, faCloudSun } from "@fortawesome/free-solid-svg-icons";
import type { MountainSunrisePredictorProps } from "../types";

export default function MountainSunrisePredictor({ lat, lng }: MountainSunrisePredictorProps) {
  const { data: weather } = useWeather(lat, lng);
  const [isSimulated, setIsSimulated] = useState(false);
  const [simHumidity, setSimHumidity] = useState(70);
  const [simWind, setSimWind] = useState(8);
  const [simTemp, setSimTemp] = useState(12);

  const humidity = isSimulated ? simHumidity : (weather?.humidity ?? 75);
  const windSpeed = isSimulated ? simWind : (weather?.windSpeed ?? 10);
  const temp = isSimulated ? simTemp : (weather?.temp ?? 14);

  const runClarityModel = () => {
    const dewPoint = temp - (100 - humidity) / 5;
    let score = 100;
    let label = "Crystal Clear View";
    let desc = "Expected high visibility. Low atmospheric moisture will prevent fog formation.";
    let color = "text-sky-600 bg-sky-500/10 border-sky-500/20";
    let icon = faSun;
    if (humidity > 90) {
      score = 15; label = "Very Low Visibility"; desc = "Extremely high humidity suggests thick fog at elevation. The sunrise view may be completely obscured."; color = "text-rose-600 bg-rose-500/10 border-rose-500/20"; icon = faCloudRain;
    } else if (humidity > 78) {
      score = 35; label = "Likely Foggy"; desc = "Elevated moisture levels significantly increase the risk of fog and haze at the summit."; color = "text-amber-600 bg-amber-500/10 border-amber-500/20"; icon = faCloud;
    } else if (humidity < 60) {
      score = 95; label = "Crystal Clear View"; desc = "Low atmospheric moisture will prevent fog formation. Expect a pristine silhouette."; color = "text-sky-600 bg-sky-500/10 border-sky-500/20"; icon = faSun;
    } else {
      score = 70; label = "Partial Cloud Cover"; desc = "Moderate humidity suggests a mix of clear skies and passing light clouds."; color = "text-sky-600 bg-sky-500/10 border-sky-500/20"; icon = faCloudSun;
    }
    return { score, label, desc, color, icon, dewPoint: Math.round(dewPoint * 10) / 10 };
  };

  const { score, label, desc, icon, color } = runClarityModel();

  useEffect(() => {
    if (weather && !isSimulated) { setSimHumidity(weather.humidity); setSimWind(weather.windSpeed); setSimTemp(weather.temp); }
  }, [weather]);

  return (
    <div className="p-5 md:p-7 xl:p-8">
      <div className="flex items-center gap-2 mb-4">
        <FontAwesomeIcon icon={faSun} className="text-sm text-amber-500" />
        <span className="text-swiss text-sm font-black tracking-[0.08em] uppercase text-[#A3B18A]">Sunrise Clarity Predictor</span>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(260px,340px)_1fr] gap-6">
        <div className={`p-5 md:p-6 rounded-xl border ${color}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#2D221F]/5 border border-[#2D221F]/10 flex items-center justify-center text-xl text-[#2D221F] shrink-0">
              <FontAwesomeIcon icon={icon} />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.08em] text-[#2D221F]">{label}</p>
              <p className="text-sm text-[#2D221F]/50 font-semibold">Clarity Score: {score}/100</p>
            </div>
          </div>
          <p className="text-sm md:text-base text-[#2D221F]/70 leading-relaxed font-medium text-pretty">{desc}</p>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl border border-[#2D221F]/10 bg-[#f5f4f0]">
              <FontAwesomeIcon icon={faSun} className="text-amber-500 text-lg mb-2" />
              <p className="text-sm text-[#2D221F]/50 uppercase tracking-[0.06em] font-bold">Temperature</p>
              <p className="text-lg font-bold text-[#2D221F] mt-1">{Math.round(temp)}°C</p>
            </div>
            <div className="p-4 rounded-xl border border-[#2D221F]/10 bg-[#f5f4f0]">
              <FontAwesomeIcon icon={faCloud} className="text-sky-500 text-lg mb-2" />
              <p className="text-sm text-[#2D221F]/50 uppercase tracking-[0.06em] font-bold">Humidity</p>
              <p className="text-lg font-bold text-[#2D221F] mt-1">{Math.round(humidity)}%</p>
            </div>
            <div className="p-4 rounded-xl border border-[#2D221F]/10 bg-[#f5f4f0] sm:col-span-2 xl:col-span-1">
              <FontAwesomeIcon icon={faWind} className="text-sky-500 text-lg mb-2" />
              <p className="text-sm text-[#2D221F]/50 uppercase tracking-[0.06em] font-bold">Wind Speed</p>
              <p className="text-lg font-bold text-[#2D221F] mt-1">{Math.round(windSpeed)} km/h</p>
            </div>
          </div>
          <button onClick={() => setIsSimulated(!isSimulated)} className="text-sm font-medium text-[#A3B18A] hover:text-[#8a9e75] underline underline-offset-4 transition-all cursor-pointer">
            {isSimulated ? "Use Live Weather Data" : "Simulate Conditions"}
          </button>
          {isSimulated && (
            <div className="p-4 rounded-xl border border-[#2D221F]/10 bg-[#f5f4f0] space-y-3">
              {[{ label: "Humidity", v: simHumidity, s: setSimHumidity, min: 30, max: 100, icon: faCloud },
                { label: "Wind Speed", v: simWind, s: setSimWind, min: 0, max: 50, icon: faWind },
                { label: "Temperature", v: simTemp, s: setSimTemp, min: -5, max: 30, icon: faSun },
              ].map((s, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between gap-4 mb-1.5">
                    <span className="text-sm text-[#2D221F]/60 font-semibold"><FontAwesomeIcon icon={s.icon} className="mr-1.5 text-sm" />{s.label}</span>
                    <span className="text-sm font-bold text-[#2D221F] whitespace-nowrap">{s.v}{s.label === "Humidity" ? "%" : s.label === "Wind Speed" ? " km/h" : "°C"}</span>
                  </div>
                  <input type="range" min={s.min} max={s.max} value={s.v} onChange={e => s.s(Number(e.target.value))} className="w-full h-1.5 bg-[#2D221F]/10 rounded-full appearance-none cursor-pointer accent-[#A3B18A]" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
