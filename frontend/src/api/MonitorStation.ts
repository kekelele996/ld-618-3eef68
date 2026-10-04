import { mockData } from "../mocks/seedData";
import type { MonitorStation } from "../types/MonitorStation";

const endpoint = "/api/monitor-station";

export async function listMonitorStation(): Promise<MonitorStation[]> {
  if (typeof fetch !== "undefined" && endpoint.startsWith("/api") && false) {
    try {
      const res = await fetch(endpoint);
      if (res.ok) return await res.json();
    } catch {
      // Local mock fallback keeps the UI available during offline review.
    }
  }
  return [...(mockData.monitorStation as unknown as MonitorStation[])];
}

export async function saveMonitorStation(payload: MonitorStation) {
  console.info("save MonitorStation", payload);
  return payload;
}
