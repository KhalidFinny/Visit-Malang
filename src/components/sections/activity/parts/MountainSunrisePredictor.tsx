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
    let color = "text-sky-400 bg-sky-500/5 border-sky-500/20";
    let icon = faSun;
    if (humidity > 90) {
      score = 15; label = "Very Low Visibility"; desc = "Extremely high humidity suggests thick fog at elevation. The sunrise view may be completely obscured."; color = "text-rose-400 bg-rose-500/5 border-rose-500/20"; icon = faCloudRain;
    } else if (humidity > 78) {
      score = 35; label = "Likely Foggy"; desc = "Elevated moisture levels significantly increase the risk of fog and haze at the summit."; color = "text-amber-400 bg-amber-500/5 border-amber-500/20"; icon = faCloud;
    } else if (humidity < 60) {
      score = 95; label = "Crystal Clear View"; desc = "Low atmospheric moisture will prevent fog formation. Expect a pristine silhouette."; color = "text-sky-400 bg-sky-500/5 border-sky-500/20"; icon = faSun;
    } else {
      score = 70; label = "Partial Cloud Cover"; desc = "Moderate humidity suggests a mix of clear skies and passing light clouds."; color = "text-sky-400 bg-sky-500/5 border-sky-500/20"; icon = faCloudSun;
    }
    return { score, label, desc, color, icon, dewPoint: Math.round(dewPoint * 10) / 10 };
  };

  const { score, label, desc, icon, color } = runClarityModel();

  useEffect(() => {
    if (weather && !isSimulated) { setSimHumidity(weather.humidity); setSimWind(weather.windSpeed); setSimTemp(weather.temp); }
  }, [weather]);

  return (
    <div className="p-6 lg:p-8">
      <div className="flex items-center gap-2 mb-4">
        <FontAwesomeIcon icon={faSun} className="text-sm text-amber-400" />
        <span className="text-sm font-bold uppercase tracking-widest text-amber-400">Sunrise Clarity Predictor</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`p-5 rounded-xl border ${color}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl">
              <FontAwesomeIcon icon={icon} />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider">{label}</p>
              <p className="text-sm text-white/50">Clarity Score: {score}/100</p>
            </div>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 rounded-xl border border-white/5 bg-[#121212]">
              <FontAwesomeIcon icon={faSun} className="text-amber-400 text-lg mb-1" />
              <p className="text-xs text-white/50 uppercase tracking-wider font-bold">Temperature</p>
              <p className="text-lg font-bold text-white">{Math.round(temp)}°C</p>
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-[#121212]">
              <FontAwesomeIcon icon={faCloud} className="text-sky-400 text-lg mb-1" />
              <p className="text-xs text-white/50 uppercase tracking-wider font-bold">Humidity</p>
              <p className="text-lg font-bold text-white">{Math.round(humidity)}%</p>
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-[#121212]">
              <FontAwesomeIcon icon={faWind} className="text-sky-400 text-lg mb-1" />
              <p className="text-xs text-white/50 uppercase tracking-wider font-bold">Wind Speed</p>
              <p className="text-lg font-bold text-white">{Math.round(windSpeed)} km/h</p>
            </div>
          </div>
          <button onClick={() => setIsSimulated(!isSimulated)} className="text-sm font-medium text-[#A3B18A] hover:text-[#8a9e75] underline transition-all cursor-pointer">
            {isSimulated ? "Use Live Weather Data" : "Simulate Conditions"}
          </button>
          {isSimulated && (
            <div className="p-4 rounded-xl border border-white/5 bg-[#121212] space-y-3">
              {[{ label: "Humidity", v: simHumidity, s: setSimHumidity, min: 30, max: 100, icon: faCloud },
                { label: "Wind Speed", v: simWind, s: setSimWind, min: 0, max: 50, icon: faWind },
                { label: "Temperature", v: simTemp, s: setSimTemp, min: -5, max: 30, icon: faSun },
              ].map((s, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-white/60 font-semibold"><FontAwesomeIcon icon={s.icon} className="mr-1.5 text-[10px]" />{s.label}</span>
                    <span className="text-sm font-bold text-white">{s.v}{s.label === "Humidity" ? "%" : s.label === "Wind Speed" ? " km/h" : "°C"}</span>
                  </div>
                  <input type="range" min={s.min} max={s.max} value={s.v} onChange={e => s.s(Number(e.target.value))} className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-[#A3B18A]" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
