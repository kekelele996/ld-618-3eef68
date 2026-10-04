export const MeasureStatus = ["PLANNED","RUNNING","EVALUATING","FINISHED"] as const;
export type MeasureStatus = (typeof MeasureStatus)[number];
export const MeasureStatusText: Record<MeasureStatus, string> = Object.fromEntries(MeasureStatus.map((value) => [value, value.replace(/_/g, " ")])) as Record<MeasureStatus, string>;
