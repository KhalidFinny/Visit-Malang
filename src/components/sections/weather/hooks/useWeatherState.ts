import { useState, useCallback, useMemo } from "react";
import {
  faCloudSun,
  faSun,
  faCloudRain,
  faThermometerHalf,
  faWind,
  faDroplet,
  faSmog,
  faCloud,
  faCloudShowersHeavy,
  faCloudBolt,
} from "@fortawesome/free-solid-svg-icons";
import { useWeather } from "./useWeather";
import { useRecommendations } from "./useRecommendations";
import { getTimeOfDay, getWeatherFromCode, getWeatherPrediction } from "../utils";
import type { CurrentWeather } from "../types";

/**
 * Hook to manage Weather section state and data
 */
export function useWeatherState() {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // 1. Fetch Live Weather
  const { data: weatherData, loading } = useWeather();
  const timeOfDay = getTimeOfDay();

  // 2. Map Weather Condition
  const currentCondition = useMemo(() => 
    weatherData ? getWeatherFromCode(weatherData.weatherCode) : "Sunny"
  , [weatherData]);

  const forecastCondition = useMemo(() => 
    weatherData ? getWeatherFromCode(weatherData.forecastCode) : "Sunny"
  , [weatherData]);

  // 3. Assemble CurrentWeather object for legacy support and UI
  const todayWeather: CurrentWeather = useMemo(() => ({
    condition: currentCondition,
    temp: Math.round(weatherData?.temp ?? 24),
    humidity: weatherData?.humidity ?? 70,
    windSpeed: weatherData?.windSpeed ?? 5,
  }), [currentCondition, weatherData]);

  // 4. Map Detailed Forecast for next 5 hours
  const hourlyForecast = useMemo(() => {
    if (!weatherData?.hourly) return [];
    return weatherData.hourly.map((h) => {
      const date = new Date(h.time);
      const hourStr = date.getHours().toString().padStart(2, '0') + ':00';
      
      return {
        time: hourStr,
        temp: Math.round(h.temp),
        icon: getDetailedIcon(h.weatherCode)
      };
    });
  }, [weatherData]);

  const recommendations = useRecommendations(currentCondition, timeOfDay, forecastCondition);

  const date = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date());

  const next = useCallback(() => {
    if (recommendations.length === 0) return;
    setActiveIndex((prev) => (prev + 1) % recommendations.length);
  }, [recommendations.length]);

  const prev = useCallback(() => {
    if (recommendations.length === 0) return;
    setActiveIndex(
      (prev) =>
        (prev - 1 + recommendations.length) %
        recommendations.length,
    );
  }, [recommendations.length]);

  // Handle Auto-play — REMOVED per user request for manual navigation

  // Weather condition mapping
  const weatherInfo = {
    Sunny: { icon: faSun, label: "Sunny" },
    Overcast: { icon: faCloudSun, label: "Cloudy" },
    Rainy: { icon: faCloudRain, label: "Rainy" },
  };

  const currentInfo = weatherInfo[currentCondition];
  const predictionText = getWeatherPrediction(todayWeather);

  // Weather meta chips
  const weatherChips = [
    {
      icon: faThermometerHalf,
      label: `${todayWeather.temp}°C`,
      title: "Avg Temp",
    },
    {
      icon: faWind,
      label: `${todayWeather.windSpeed} km/h`,
      title: "Wind Speed",
    },
    { icon: faDroplet, label: `${todayWeather.humidity}%`, title: "Humidity" },
  ];

  return {
    activeIndex,
    setActiveIndex,
    date,
    next,
    prev,
    currentInfo,
    predictionText,
    weatherChips,
    recommendations,
    todayWeather,
    loading,
    timeOfDay,
    hourlyForecast
  };
}

/**
 * Detailed weather code mapping for icons
 */
function getDetailedIcon(code: number) {
  if (code === 0) return faSun;
  if (code >= 1 && code <= 2) return faCloudSun;
  if (code === 3) return faCloud;
  if (code >= 45 && code <= 48) return faSmog;
  if (code >= 51 && code <= 55) return faCloudRain; // Drizzle
  if (code >= 61 && code <= 63) return faCloudRain; // Slight/Mod rain
  if (code >= 65 && code <= 67) return faCloudShowersHeavy; // Heavy/Freezing rain
  if (code >= 80 && code <= 82) return faCloudRain; // Showers
  if (code >= 95) return faCloudBolt; // Thunderstorm
  return faSun;
}
