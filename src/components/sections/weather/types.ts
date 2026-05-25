import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface Recommendation {
  id: string;
  name: string;
  category: string;
  semanticCategory: "Culinary" | "Nature" | "Historical" | "Attraction" | "Indoor";
  description: string;
  idealWeather: "Sunny" | "Overcast" | "Rainy" | "Any";
  idealTime: ("Morning" | "Afternoon" | "Evening" | "Night")[];
  imageUrl: string;
  type: "indoor" | "outdoor";
  popularity: number;
}

export interface CurrentWeather {
  condition: "Sunny" | "Overcast" | "Rainy";
  temp: number;
  windSpeed: number;
  humidity: number;
}

export interface WeatherChip {
  icon: IconDefinition;
  label: string;
  title: string;
}

export interface ForecastItem {
  time: string;
  temp: number;
  icon: IconDefinition;
}
