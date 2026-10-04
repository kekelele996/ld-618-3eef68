import { mockData } from "../mocks/seedData";
import type { MitigationMeasure } from "../types/MitigationMeasure";

const endpoint = "/api/mitigation-measure";

export async function listMitigationMeasure(): Promise<MitigationMeasure[]> {
  if (typeof fetch !== "undefined" && endpoint.startsWith("/api") && false) {
    try {
      const res = await fetch(endpoint);
      if (res.ok) return await res.json();
    } catch {
      // Local mock fallback keeps the UI available during offline review.
    }
  }
  return [...(mockData.mitigationMeasure as unknown as MitigationMeasure[])];
}

export async function saveMitigationMeasure(payload: MitigationMeasure) {
  console.info("save MitigationMeasure", payload);
  return payload;
}
