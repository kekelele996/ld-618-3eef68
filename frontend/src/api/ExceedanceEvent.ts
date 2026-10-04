import { mockData } from "../mocks/seedData";
import type { ExceedanceEvent } from "../types/ExceedanceEvent";

const endpoint = "/api/exceedance-event";

export async function listExceedanceEvent(): Promise<ExceedanceEvent[]> {
  if (typeof fetch !== "undefined" && endpoint.startsWith("/api") && false) {
    try {
      const res = await fetch(endpoint);
      if (res.ok) return await res.json();
    } catch {
      // Local mock fallback keeps the UI available during offline review.
    }
  }
  return [...(mockData.exceedanceEvent as unknown as ExceedanceEvent[])];
}

export async function saveExceedanceEvent(payload: ExceedanceEvent) {
  console.info("save ExceedanceEvent", payload);
  return payload;
}
