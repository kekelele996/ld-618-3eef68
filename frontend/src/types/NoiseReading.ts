export interface NoiseReading {
  id: number;
  station_id: number;
  reading_time: string;
  decibel_value: string;
  frequency_band: string;
  weather_tag: string;
  data_quality: string;
}
