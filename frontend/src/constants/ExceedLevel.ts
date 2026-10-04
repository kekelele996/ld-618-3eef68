export const ExceedLevel = ["LOW","MEDIUM","HIGH","SEVERE"] as const;
export type ExceedLevel = (typeof ExceedLevel)[number];
export const ExceedLevelText: Record<ExceedLevel, string> = Object.fromEntries(ExceedLevel.map((value) => [value, value.replace(/_/g, " ")])) as Record<ExceedLevel, string>;
