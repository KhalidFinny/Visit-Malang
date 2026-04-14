import { useState, useEffect } from 'react';

export interface WeatherData {
  temp: number;
  weatherCode: number;
  humidity: number;
  windSpeed: number;
  forecastCode: number; // +2h forecast
  cityName: string;
}

export const useWeather = (lat: number = -7.9839, lon: number = 112.6214) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&hourly=weather_code&timezone=auto&forecast_days=1`
        );
        const json = await response.json();

        // Get forecast for +2 hours
        const currentHour = new Date().getHours();
        const forecastIndex = (currentHour + 2) % 24;
        const forecastCode = json.hourly.weather_code[forecastIndex];

        setData({
          temp: json.current.temperature_2m,
          weatherCode: json.current.weather_code,
          humidity: json.current.relative_humidity_2m,
          windSpeed: json.current.wind_speed_10m,
          forecastCode: forecastCode,
          cityName: "Malang"
        });
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch weather");
        setLoading(false);
      }
    };

    fetchWeather();
    const interval = setInterval(fetchWeather, 600000); // Update every 10 mins
    return () => clearInterval(interval);
  }, [lat, lon]);

  return { data, loading, error };
};
