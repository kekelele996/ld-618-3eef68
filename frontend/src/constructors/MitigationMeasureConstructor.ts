import type { MitigationMeasure } from "../types/MitigationMeasure";

export const createDefaultMitigationMeasure = (overrides: Partial<MitigationMeasure> = {}): MitigationMeasure => ({
  id: 1 as never,
  district: "district 1" as never,
  measure_type: "OFFLINE" as never,
  owner_dept: "owner dept 1" as never,
  start_date: "2026-06-11T09:00:00Z" as never,
  effect_score: "LOW" as never,
  status: "OFFLINE" as never,
  ...overrides
});

export const createMitigationMeasureForm = createDefaultMitigationMeasure;
export const createMitigationMeasureResponse = createDefaultMitigationMeasure;
