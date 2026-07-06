import { useEffect, useState } from "react";
import { useWeather } from "../../weather/hooks/useWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloudRain, faCloud, faWind, faCloudSun } from "@fortawesome/free-solid-svg-icons";
import type { MountainSunrisePredictorProps } from "../types";

export default function MountainSunrisePredictor({ lat, lng }: MountainSunrisePredictorProps) {
  // Load real-time weather for the mountain coordinates
  const { data: weather, loading } = useWeather(lat, lng);

  // Simulation controls state (overrides live weather if active)
  const [isSimulated, setIsSimulated] = useState(false);
  const [simHumidity, setSimHumidity] = useState(70);
  const [simWind, setSimWind] = useState(8);
  const [simTemp, setSimTemp] = useState(12);

  // Active metrics: live weather or simulated overrides
  const humidity = isSimulated ? simHumidity : (weather?.humidity ?? 75);
  const windSpeed = isSimulated ? simWind : (weather?.windSpeed ?? 10);
  const temp = isSimulated ? simTemp : (weather?.temp ?? 14);

  // Run clarity classification model
  const runClarityModel = () => {
    // Dew Point calculation: DewPoint = Temp - (100 - Humidity)/5
    const dewPoint = temp - (100 - humidity) / 5;

    let score = 100;
    let label = "Crystal Clear View";
    let desc = "Expected high visibility. Low atmospheric moisture will prevent fog formation, offering a pristine silhouette of the peak.";
    let color = "text-sky-400 border-sky-500/20 bg-sky-500/[0.03]";
    let icon = faSun;

    if (humidity > 90) {
      score = Math.max(10, Math.round(15 + windSpeed * 0.8));
      label = "Dense Overcast & Mist";
      desc = "Dense cloud cover and moisture will lock visibility. High chance of total whiteout at the viewpoints. Layer up for cold moisture.";
      color = "text-rose-400 border-rose-500/20 bg-rose-500/[0.03]";
      icon = faCloudRain;
    } else if (humidity > 78) {
      // High humidity, low wind = sea of clouds / valley fog
      if (windSpeed < 8) {
        score = 85;
        label = "Valley Mist (Sea of Clouds)";
        desc = "Perfect conditions! Thick morning fog will nest inside the low sand calderas while the viewpoints sit clear above the mist line.";
        color = "text-[#7a9e64] border-[#7a9e64]/20 bg-[#7a9e64]/[0.03]";
        icon = faCloud;
      } else {
        score = 45;
        label = "Scattered Clouds";
        desc = "Passing cloud layers might periodically obstruct the view. Wind is blowing cloud moisture over the peaks.";
        color = "text-amber-400 border-amber-500/20 bg-amber-500/[0.03]";
        icon = faWind;
      }
    } else if (humidity < 60) {
      score = Math.min(100, Math.round(92 + (10 - windSpeed) * 0.5));
      label = "Pristine Visibility";
      desc = "Highly stable atmosphere. Perfect clear sky views of the volcanic contours. Expect gorgeous golden hour color gradients.";
      color = "text-sky-400 border-sky-500/20 bg-sky-500/[0.03]";
      icon = faSun;
    } else {
      // Mild humidity (60 - 78)
      score = Math.round(75 + (8 - windSpeed) * 0.6);
      label = "Moderate Clarity";
      desc = "Light morning dew and trace wispy mist. Overall visibility will be good, but with a softer horizon.";
      color = "text-[#7a9e64] border-[#7a9e64]/20 bg-[#7a9e64]/[0.03]";
      icon = faCloudSun;
    }

    return { score, label, desc, color, icon, dewPoint: Math.round(dewPoint * 10) / 10 };
  };

  const { score, label, desc, icon } = runClarityModel();

  // Initialize simulation values from live weather once it loads
  useEffect(() => {
    if (weather) {
      setSimHumidity(weather.humidity);
      setSimWind(Math.round(weather.windSpeed));
      setSimTemp(Math.round(weather.temp));
    }
  }, [weather]);

  return (
    <section className="p-6 rounded-3xl border border-white/[0.06] bg-white/[0.01]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.06] mb-6">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-wider text-amber-300">
              Sunrise View Forecast
            </span>
          </div>
          <h4 className="text-xl font-bold text-white tracking-tight">
            Peak Visibility Conditions
          </h4>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] bg-white/[0.04] border border-white/10 px-2.5 py-1 rounded-lg text-white font-bold uppercase tracking-wider">
            {isSimulated ? "Custom Settings" : "Live Weather"}
          </span>
        </div>
      </div>

      {loading && !isSimulated ? (
        <div className="py-12 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white/10 border-t-white/50 rounded-full animate-spin" />
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Output metrics */}
          <div className="flex-1 flex flex-col justify-between gap-6">
            <div className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-r from-amber-500/15 via-rose-500/5 to-amber-500/5 border border-amber-500/25 animate-gradient-shift shadow-[0_8px_32px_rgba(245,158,11,0.03)]">
              <div key={score} className="flex flex-wrap items-center gap-4 justify-between animate-fade-in-up">
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300/90">
                    Summit Conditions
                  </span>
                  <h5 className="text-2xl font-bold text-white flex items-center gap-2">
                    <FontAwesomeIcon icon={icon} className="text-amber-400" />
                    {label}
                  </h5>
                </div>
                <div className="text-right">
                  <span className="text-4xl font-black text-amber-300 tracking-tighter tabular-nums">{score}%</span>
                  <span className="block text-[9px] font-bold text-white uppercase tracking-widest mt-0.5">Visibility Chance</span>
                </div>
              </div>
              <p key={`desc-${score}`} className="text-sm text-white leading-relaxed mt-4 text-swiss animate-fade-in-up">
                {desc}
              </p>
            </div>

            {/* Parameter sliders / summary - less stats-heavy and cleaner */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-3 text-xs font-semibold text-white/90">
              <span className="text-[9px] font-bold uppercase tracking-wider text-white/40 block w-full">Current mountain climate</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Humidity: <strong className="text-white font-extrabold">{humidity}%</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Wind Speed: <strong className="text-white font-extrabold">{windSpeed} km/h</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Temperature: <strong className="text-white font-extrabold">{temp}°C</strong></span>
              </div>
            </div>
          </div>

          {/* Interactive Simulation Dashboard */}
          <div className="lg:w-[300px] bg-white/[0.03] border border-white/[0.07] p-5 rounded-2xl space-y-4 shrink-0">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Customize Weather
              </span>
              <button
                onClick={() => setIsSimulated(!isSimulated)}
                className={`text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded border transition-all cursor-pointer ${
                  isSimulated 
                    ? "bg-amber-400/10 border-amber-400/20 text-amber-300" 
                    : "bg-transparent border-white/10 text-white/70 hover:text-white"
                }`}
              >
                {isSimulated ? "Custom" : "Customize"}
              </button>
            </div>

            {isSimulated ? (
              <div className="space-y-4 pt-1">
                <div>
                  <div className="flex justify-between text-[10px] text-white font-bold uppercase tracking-wider mb-1.5">
                    <span>Humidity</span>
                    <span>{simHumidity}%</span>
                  </div>
                  <input
                    type="range"
                    min="30"
                    max="100"
                    value={simHumidity}
                    onChange={(e) => setSimHumidity(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[10px] text-white font-bold uppercase tracking-wider mb-1.5">
                    <span>Wind Speed</span>
                    <span>{simWind} km/h</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    value={simWind}
                    onChange={(e) => setSimWind(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[10px] text-white font-bold uppercase tracking-wider mb-1.5">
                    <span>Temperature</span>
                    <span>{simTemp}°C</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="25"
                    value={simTemp}
                    onChange={(e) => setSimTemp(Number(e.target.value))}
                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                </div>
              </div>
            ) : (
              <p className="text-xs text-white/80 leading-relaxed py-2 text-swiss">
                Currently showing live weather. Toggle "Customize" to adjust sliders and see how wind or cloud cover impacts visibility at the peak.
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
