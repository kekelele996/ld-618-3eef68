import type { ComplaintRecord } from "../types/ComplaintRecord";

export const createDefaultComplaintRecord = (overrides: Partial<ComplaintRecord> = {}): ComplaintRecord => ({
  id: 1 as never,
  district: "district 1" as never,
  complaint_type: "OFFLINE" as never,
  description: "description 1" as never,
  related_station_id: 1 as never,
  process_status: "OFFLINE" as never,
  created_at: "2026-06-11T09:00:00Z" as never,
  ...overrides
});

export const createComplaintRecordForm = createDefaultComplaintRecord;
export const createComplaintRecordResponse = createDefaultComplaintRecord;
