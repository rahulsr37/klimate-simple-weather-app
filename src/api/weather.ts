import { API_CONFIG } from "./config";
import type {
  AirPollutionResponse,
  CurrentWeather,
  ForecastResponse,
  GeocodingResponse,
  ReverseGeocodingResponse,
} from "./types";

class WeatherAPI {
  private createUrl(endpoint: string, params: Record<string, string | number>) {
    const searchParams = new URLSearchParams({
      appid: API_CONFIG.API_KEY,
      ...params,
    });
    return `${endpoint}?${searchParams.toString()}`;
  }

  private async fetchData<T>(url: string): Promise<T> {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Weather API Error: ${response.statusText}`);
    }

    return response.json();
  }

  async getCurrentWeather({
    lat,
    lon,
  }: {
    lat: number;
    lon: number;
  }): Promise<CurrentWeather> {
    const url = this.createUrl(`${API_CONFIG.BASE_URL}/weather`, {
      lat: lat.toString(),
      lon: lon.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units,
    });
    return this.fetchData<CurrentWeather>(url);
  }

  async getForecast({
    lat,
    lon,
  }: {
    lat: number;
    lon: number;
  }): Promise<ForecastResponse> {
    const url = this.createUrl(`${API_CONFIG.BASE_URL}/forecast`, {
      lat: lat.toString(),
      lon: lon.toString(),
      units: API_CONFIG.DEFAULT_PARAMS.units,
    });
    return this.fetchData<ForecastResponse>(url);
  }

  async reverseGeocode({
    lat,
    lon,
  }: {
    lat: number;
    lon: number;
  }): Promise<ReverseGeocodingResponse> {
    const url = this.createUrl(`${API_CONFIG.GEO_CODING_API}/reverse`, {
      lat: lat.toString(),
      lon: lon.toString(),
      limit: "1",
    });
    return this.fetchData<ReverseGeocodingResponse>(url);
  }

  async searchLocations(query: string): Promise<GeocodingResponse[]> {
    const url = this.createUrl(`${API_CONFIG.GEO_CODING_API}/direct`, {
      q: query,
      limit: "5",
    });
    return this.fetchData<GeocodingResponse[]>(url);
  }

  async getAirPollution({
    lat,
    lon,
  }: {
    lat: number;
    lon: number;
  }): Promise<AirPollutionResponse> {
    const url = this.createUrl(`${API_CONFIG.BASE_URL}/air_pollution`, {
      lat: lat.toString(),
      lon: lon.toString(),
    });
    return this.fetchData<AirPollutionResponse>(url);
  }
}

export const weatherAPI = new WeatherAPI();
