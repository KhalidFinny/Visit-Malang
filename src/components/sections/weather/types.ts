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

export interface WeatherHeaderProps {
  predictionText: string;
  temp: number;
  condition: string;
  date: string;
  currentIcon: IconDefinition;
  weatherChips: WeatherChip[];
  hourlyForecast: ForecastItem[];
}

export interface WeatherSidebarProps {
  predictionText: string;
  temp: number;
  condition: string;
  currentIcon: IconDefinition;
  weatherChips: WeatherChip[];
  hourlyForecast: ForecastItem[];
}

export interface WeatherCarouselProps {
  recommendations: Recommendation[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  next: () => void;
  prev: () => void;
}

export interface WeatherFooterProps {
  activeIndex: number;
  totalItems: number;
}

export interface RecommendationCardProps {
  recommendation: Recommendation;
  index: number;
  relativeIndex: number;
  onClick: () => void;
}
