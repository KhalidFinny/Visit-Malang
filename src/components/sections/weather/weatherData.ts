import type { Recommendation, CurrentWeather } from "./types";

import placesData from "../../../data/places.json";

export const malangRecommendations: Recommendation[] = placesData as Recommendation[];

export const todayWeather: CurrentWeather = {
  condition: "Overcast",
  temp: 22,
  windSpeed: 12,
  humidity: 72,
};
