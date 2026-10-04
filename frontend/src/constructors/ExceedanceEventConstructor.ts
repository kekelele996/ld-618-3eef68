import type { ExceedanceEvent } from "../types/ExceedanceEvent";

export const createDefaultExceedanceEvent = (overrides: Partial<ExceedanceEvent> = {}): ExceedanceEvent => ({
  id: 1 as never,
  station_id: 1 as never,
  start_time: "2026-06-11T09:00:00Z" as never,
  end_time: "2026-06-11T09:00:00Z" as never,
  max_decibel: "max decibel 1" as never,
  exceed_level: "LOW" as never,
  handled_status: "OFFLINE" as never,
  ...overrides
});

export const createExceedanceEventForm = createDefaultExceedanceEvent;
export const createExceedanceEventResponse = createDefaultExceedanceEvent;
