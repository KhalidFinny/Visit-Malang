import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useWeather } from "../../weather/hooks/useWeather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faCloudRain, faCloud, faWind, faCloudSun } from "@fortawesome/free-solid-svg-icons";
import type { MountainSunrisePredictorProps } from "../types";

export default function MountainSunrisePredictor({ lat, lng }: MountainSunrisePredictorProps) {
  const { t } = useTranslation();
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
    let labelKey = "placeDetail.sunrise.status.crystalClear.title";
    let descKey = "placeDetail.sunrise.status.crystalClear.desc";
    let color = "text-sky-600 bg-sky-500/10 border-sky-500/20";
    let icon = faSun;

    if (humidity > 90) {
      score = 15;
      labelKey = "placeDetail.sunrise.status.veryLowVisibility.title";
      descKey = "placeDetail.sunrise.status.veryLowVisibility.desc";
      color = "text-rose-600 bg-rose-500/10 border-rose-500/20";
      icon = faCloudRain;
    } else if (humidity > 78) {
      score = 35;
      labelKey = "placeDetail.sunrise.status.likelyFoggy.title";
      descKey = "placeDetail.sunrise.status.likelyFoggy.desc";
      color = "text-amber-600 bg-amber-500/10 border-amber-500/20";
      icon = faCloud;
    } else if (humidity < 60) {
      score = 95;
      labelKey = "placeDetail.sunrise.status.crystalClear.title";
      descKey = "placeDetail.sunrise.status.crystalClear.desc";
      color = "text-sky-600 bg-sky-500/10 border-sky-500/20";
      icon = faSun;
    } else {
      score = 70;
      labelKey = "placeDetail.sunrise.status.partialCloudCover.title";
      descKey = "placeDetail.sunrise.status.partialCloudCover.desc";
      color = "text-sky-600 bg-sky-500/10 border-sky-500/20";
      icon = faCloudSun;
    }

    return {
      score,
      label: t(labelKey),
      desc: t(descKey),
      color,
      icon,
      dewPoint: Math.round(dewPoint * 10) / 10,
    };
  };

  const { score, label, desc, icon, color } = runClarityModel();

  useEffect(() => {
    if (weather && !isSimulated) { setSimHumidity(weather.humidity); setSimWind(weather.windSpeed); setSimTemp(weather.temp); }
  }, [weather, isSimulated]);

  const controls = [
    { label: t("placeDetail.sunrise.humidity"), value: simHumidity, setValue: setSimHumidity, min: 30, max: 100, icon: faCloud, unit: "%" },
    { label: t("placeDetail.sunrise.windSpeed"), value: simWind, setValue: setSimWind, min: 0, max: 50, icon: faWind, unit: " km/h" },
    { label: t("placeDetail.sunrise.temperature"), value: simTemp, setValue: setSimTemp, min: -5, max: 30, icon: faSun, unit: "°C" },
  ];

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="flex items-center gap-2 mb-4">
        <FontAwesomeIcon icon={faSun} className="text-sm text-amber-500" />
        <span className="text-swiss text-[10px] font-black tracking-[0.15em] uppercase text-[#A3B18A]">{t("placeDetail.sunrise.label")}</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`p-5 rounded-xl border ${color}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-xl bg-[#2D221F]/5 border border-[#2D221F]/10 flex items-center justify-center text-xl text-[#2D221F]">
              <FontAwesomeIcon icon={icon} />
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-[#2D221F]">{label}</p>
              <p className="text-sm text-[#2D221F]/50 font-semibold">{t("placeDetail.sunrise.clarityScore", { score })}</p>
            </div>
          </div>
          <p className="text-sm text-[#2D221F]/70 leading-relaxed font-semibold">{desc}</p>
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <div className="p-2.5 sm:p-4 rounded-xl border border-[#2D221F]/10 bg-[#f5f4f0] overflow-hidden">
              <FontAwesomeIcon icon={faSun} className="text-amber-500 text-base sm:text-lg mb-1" />
              <p className="text-[9px] sm:text-xs text-[#2D221F]/50 uppercase tracking-tight sm:tracking-wider font-bold truncate">{t("placeDetail.sunrise.temperature")}</p>
              <p className="text-base sm:text-lg font-bold text-[#2D221F]">{Math.round(temp)}°C</p>
            </div>
            <div className="p-2.5 sm:p-4 rounded-xl border border-[#2D221F]/10 bg-[#f5f4f0] overflow-hidden">
              <FontAwesomeIcon icon={faCloud} className="text-sky-500 text-base sm:text-lg mb-1" />
              <p className="text-[9px] sm:text-xs text-[#2D221F]/50 uppercase tracking-tight sm:tracking-wider font-bold truncate">{t("placeDetail.sunrise.humidity")}</p>
              <p className="text-base sm:text-lg font-bold text-[#2D221F]">{Math.round(humidity)}%</p>
            </div>
            <div className="p-2.5 sm:p-4 rounded-xl border border-[#2D221F]/10 bg-[#f5f4f0] overflow-hidden">
              <FontAwesomeIcon icon={faWind} className="text-sky-500 text-base sm:text-lg mb-1" />
              <p className="text-[9px] sm:text-xs text-[#2D221F]/50 uppercase tracking-tight sm:tracking-wider font-bold truncate">{t("placeDetail.sunrise.windSpeed")}</p>
              <p className="text-base sm:text-lg font-bold text-[#2D221F]">{Math.round(windSpeed)} km/h</p>
            </div>
          </div>
          <button onClick={() => setIsSimulated(!isSimulated)} className="text-sm font-medium text-[#A3B18A] hover:text-[#8a9e75] underline transition-all cursor-pointer">
            {isSimulated ? t("placeDetail.sunrise.useLiveWeatherData") : t("placeDetail.sunrise.simulateConditions")}
          </button>
          {isSimulated && (
            <div className="p-4 rounded-xl border border-[#2D221F]/10 bg-[#f5f4f0] space-y-3">
              {controls.map((control, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-[#2D221F]/60 font-semibold"><FontAwesomeIcon icon={control.icon} className="mr-1.5 text-[10px]" />{control.label}</span>
                    <span className="text-sm font-bold text-[#2D221F]">{control.value}{control.unit}</span>
                  </div>
                  <input type="range" min={control.min} max={control.max} value={control.value} onChange={e => control.setValue(Number(e.target.value))} className="w-full h-1.5 bg-[#2D221F]/10 rounded-full appearance-none cursor-pointer accent-[#A3B18A]" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
