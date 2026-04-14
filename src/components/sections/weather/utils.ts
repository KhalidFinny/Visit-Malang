import type { CurrentWeather, Recommendation } from "./types";
import { malangRecommendations } from "./weatherData";

/**
 * Get current time of day label
 */
export const getTimeOfDay = (): "Morning" | "Afternoon" | "Evening" | "Night" => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 11) return "Morning";
  if (hour >= 11 && hour < 17) return "Afternoon";
  if (hour >= 17 && hour < 21) return "Evening";
  return "Night";
};

/**
 * Map Open-Meteo WMO codes to internal weather states
 */
export const getWeatherFromCode = (code: number): "Sunny" | "Overcast" | "Rainy" => {
  if (code === 0) return "Sunny";
  if (code >= 1 && code <= 3) return "Overcast"; // Mainly clear, partly cloudy, overcast
  if (code >= 45 && code <= 48) return "Overcast"; // Fog
  if (code >= 51 && code <= 99) return "Rainy"; // Rain, snow, thunderstorms
  return "Sunny";
};

/**
 * Filter recommendations based on current weather and time of day (Top 10)
 */
export const getTopRecommendations = (
  weather: CurrentWeather,
  limit: number = 10,
): Recommendation[] => {
  const timeOfDay = getTimeOfDay();
  
  // Scoring system
  const scored = malangRecommendations.map(rec => {
    let score = 0;
    
    // Weather match (Primary)
    if (rec.idealWeather === weather.condition) score += 5;
    if (rec.idealWeather === "Any") score += 3;
    
    // Time match (Secondary)
    if (rec.idealTime.includes(timeOfDay)) score += 4;
    
    // Variety boost (Small random factor to prevent stale lists)
    score += (parseInt(rec.id.replace(/\D/g, "") || "0") % 5) * 0.1;
    
    return { rec, score };
  });

  // Sort by score and return top results
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(s => s.rec);
};

/**
 * Legacy support for weather-only filtering (still used by some hooks)
 */
export const getRecommendationsByWeather = (
  weather: "Sunny" | "Overcast" | "Rainy",
) => {
  return malangRecommendations.filter(
    (rec) => rec.idealWeather === weather || rec.idealWeather === "Any",
  );
};

/**
 * Get a localized weather prediction text based on current conditions
 */
export const getWeatherPrediction = (weather: CurrentWeather) => {
  const predictions = {
    Sunny: [
      "Clear skies today, perfect for a sunrise hike at Mount Bromo.",
      "Bright and warm. A great day to explore the vibrant Kampung Jodipan.",
      "Uninterrupted views of the city. We recommend outdoor exploration today.",
    ],
    Overcast: [
      "Cool and misty. The perfect atmosphere for exploring Malang's boutique cafes.",
      "Soft light today. Ideal for photography and wandering through the historical center.",
      "Expect gentle breezes. A comfortable day for seeing the sights without the heat.",
    ],
    Rainy: [
      "Bring an umbrella. Malang's rainy charm is best enjoyed in our world-class museums.",
      "Tropical showers expected. A cozy day for legendary culinary tours indoors.",
      "Wet streets and fresh air. We recommend visiting Museum Angkut today.",
    ],
  };

  const choices = predictions[weather.condition];
  const index = new Date().getDate() % choices.length;
  return choices[index];
};
