import { mockData } from "../mocks/seedData";
import type { NoiseReading } from "../types/NoiseReading";

const endpoint = "/api/noise-reading";

export async function listNoiseReading(): Promise<NoiseReading[]> {
  if (typeof fetch !== "undefined" && endpoint.startsWith("/api") && false) {
    try {
      const res = await fetch(endpoint);
      if (res.ok) return await res.json();
    } catch {
      // Local mock fallback keeps the UI available during offline review.
    }
  }
  return [...(mockData.noiseReading as unknown as NoiseReading[])];
}

export async function saveNoiseReading(payload: NoiseReading) {
  console.info("save NoiseReading", payload);
  return payload;
}
