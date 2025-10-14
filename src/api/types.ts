// Geocoding API Response
export interface GeocodingResponse {
  name: string;
  local_names?: Record<string, string>;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

// Current Weather Response
export interface CurrentWeather {
  coord: Coordinates;
  weather: Weather[];
  base: string;
  main: MainWeatherData;
  visibility: number;
  wind: Wind;
  clouds: Clouds;
  rain?: Rain;
  snow?: Snow;
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export interface Coordinates {
  lon: number;
  lat: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainWeatherData {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level?: number;
  grnd_level?: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust?: number;
}

export interface Clouds {
  all: number;
}

export interface Rain {
  "1h"?: number;
  "3h"?: number;
}

export interface Snow {
  "1h"?: number;
  "3h"?: number;
}

export interface Sys {
  type?: number;
  id?: number;
  country: string;
  sunrise: number;
  sunset: number;
}

// 5-Day Forecast Response
export interface ForecastResponse {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastItem[];
  city: City;
}

export interface ForecastItem {
  dt: number;
  main: MainWeatherData;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
  visibility: number;
  pop: number; // Probability of precipitation
  rain?: Rain;
  snow?: Snow;
  sys: {
    pod: string; // Part of day (n-night, d-day)
  };
  dt_txt: string;
}

export interface City {
  id: number;
  name: string;
  coord: Coordinates;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

// Air Pollution Response
export interface AirPollutionResponse {
  coord: Coordinates;
  list: AirPollutionData[];
}

export interface AirPollutionData {
  dt: number;
  main: {
    aqi: number; // Air Quality Index: 1=Good, 2=Fair, 3=Moderate, 4=Poor, 5=Very Poor
  };
  components: {
    co: number;
    no: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    nh3: number;
  };
}

// Reverse Geocoding Response
export type ReverseGeocodingResponse = GeocodingResponse[];
