import type { MonitorStation } from "../types/MonitorStation";

export const createDefaultMonitorStation = (overrides: Partial<MonitorStation> = {}): MonitorStation => ({
  id: 1 as never,
  station_code: "station code 1" as never,
  district: "district 1" as never,
  location_desc: "location desc 1" as never,
  station_type: "OFFLINE" as never,
  install_date: "2026-06-11T09:00:00Z" as never,
  station_status: "OFFLINE" as never,
  ...overrides
});

export const createMonitorStationForm = createDefaultMonitorStation;
export const createMonitorStationResponse = createDefaultMonitorStation;
