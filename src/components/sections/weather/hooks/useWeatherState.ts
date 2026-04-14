import { useState, useCallback, useMemo } from "react";
import {
  faCloudSun,
  faSun,
  faCloudRain,
  faThermometerHalf,
  faWind,
  faDroplet,
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
    temp: weatherData?.temp ?? 24,
    humidity: weatherData?.humidity ?? 70,
    windSpeed: weatherData?.windSpeed ?? 5,
  }), [currentCondition, weatherData]);

  // 4. Get Dynamic Recommendations
  const recommendations = useRecommendations(currentCondition, timeOfDay, forecastCondition);

  const date = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
  }).format(new Date());

  const next = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % recommendations.length);
  }, [recommendations.length]);

  const prev = useCallback(() => {
    setActiveIndex(
      (prev) =>
        (prev - 1 + recommendations.length) %
        recommendations.length,
    );
  }, [recommendations.length]);

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
    timeOfDay
  };
}
