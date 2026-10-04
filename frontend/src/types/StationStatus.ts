export const StationStatus = ["ONLINE","OFFLINE","MAINTENANCE","ABNORMAL"] as const;
export type StationStatus = (typeof StationStatus)[number];
export const StationStatusText: Record<StationStatus, string> = Object.fromEntries(StationStatus.map((value) => [value, value.replace(/_/g, " ")])) as Record<StationStatus, string>;
