import { useState, useEffect } from 'react';

export interface WeatherForecast {
  time: string;
  temp: number;
  weatherCode: number;
}

export interface WeatherData {
  temp: number;
  weatherCode: number;
  humidity: number;
  windSpeed: number;
  forecastCode: number; // +2h forecast
  cityName: string;
  hourly: WeatherForecast[];
}

export const useWeather = (lat: number = -7.9839, lon: number = 112.6214) => {
  const [data, setData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let abortController = new AbortController();

    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&timezone=auto&forecast_days=1`,
          { signal: abortController.signal }
        );
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const json = await response.json();

        const currentHour = new Date().getHours();
        const forecastIndex = (currentHour + 2) % 24;
        const forecastCode = json.hourly.weather_code[forecastIndex];

        const hourly: WeatherForecast[] = [];
        const hoursUntilMidnight = 23 - currentHour;
        for (let i = 1; i <= hoursUntilMidnight; i++) {
          const idx = (currentHour + i) % 24;
          hourly.push({
            time: json.hourly.time[idx],
            temp: json.hourly.temperature_2m[idx],
            weatherCode: json.hourly.weather_code[idx],
          });
        }

        setData({
          temp: json.current.temperature_2m,
          weatherCode: json.current.weather_code,
          humidity: json.current.relative_humidity_2m,
          windSpeed: json.current.wind_speed_10m,
          forecastCode,
          cityName: 'Malang',
          hourly,
        });
        setLoading(false);
      } catch (err: unknown) {
        if (err instanceof Error && err.name === 'AbortError') return; // unmounted
        setError('Failed to fetch weather');
        setLoading(false);
      }
    };

    fetchWeather();
    const interval = setInterval(() => {
      abortController = new AbortController();
      fetchWeather();
    }, 600_000);

    return () => {
      abortController.abort();
      clearInterval(interval);
    };
  }, [lat, lon]);

  return { data, loading, error };
};
