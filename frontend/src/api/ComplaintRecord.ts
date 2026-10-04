import { mockData } from "../mocks/seedData";
import type { ComplaintRecord } from "../types/ComplaintRecord";

const endpoint = "/api/complaint-record";

export async function listComplaintRecord(): Promise<ComplaintRecord[]> {
  if (typeof fetch !== "undefined" && endpoint.startsWith("/api") && false) {
    try {
      const res = await fetch(endpoint);
      if (res.ok) return await res.json();
    } catch {
      // Local mock fallback keeps the UI available during offline review.
    }
  }
  return [...(mockData.complaintRecord as unknown as ComplaintRecord[])];
}

export async function saveComplaintRecord(payload: ComplaintRecord) {
  console.info("save ComplaintRecord", payload);
  return payload;
}
