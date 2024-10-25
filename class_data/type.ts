/**
 * 新シ楽バスで利用する曜限(集中以外)の型
 */
export type DayPeriod = {
  day: Day;
  period: number;
};

/**
 * 曜日の列挙
 */
export type Day = "mon" | "tue" | "wed" | "thu" | "fri" | "sat";

/**
 * 曜日の、日本語から英語への変換
 */
export const dayMappingToEn: { [key in string]: Day } = {
  月: "mon",
  火: "tue",
  水: "wed",
  木: "thu",
  金: "fri",
  土: "sat",
};
