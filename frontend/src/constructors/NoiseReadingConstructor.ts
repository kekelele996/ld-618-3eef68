import type { NoiseReading } from "../types/NoiseReading";

export const createDefaultNoiseReading = (overrides: Partial<NoiseReading> = {}): NoiseReading => ({
  id: 1 as never,
  station_id: 1 as never,
  reading_time: "2026-06-11T09:00:00Z" as never,
  decibel_value: "decibel value 1" as never,
  frequency_band: "frequency band 1" as never,
  weather_tag: "weather tag 1" as never,
  data_quality: "data quality 1" as never,
  ...overrides
});

export const createNoiseReadingForm = createDefaultNoiseReading;
export const createNoiseReadingResponse = createDefaultNoiseReading;
