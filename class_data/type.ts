/**
 * 現行のシ楽バス(v1)のスクレイピング結果(json)の型
 */
export class PreviousClassType {
  code?: string;
  type?: "基礎" | "総合" | "要求" | "主題" | "展開";
  category?: string;
  semester?: "S" | "S1" | "S2" | "A" | "A1" | "A2";
  periods?: string[];
  classroom?: string;
  titleJp?: string;
  lecturerJp?: string;
  titleEn?: string;
  lecturerEn?: string;
  ccCode?: string;
  credits?: number;
  detail?: string;
  schedule?: string;
  methods?: string;
  evaluation?: string;
  notes?: string;
  class?: string;
  guidance?: string;
  guidanceDate?: string;
  guidancePeriod?: string;
  guidancePlace?: string;
  time?: number;
  timeCompensation?: string;
  targetClass?: string[][];
  importance?: ("l1" | "l2" | "l3" | "s1" | "s2" | "s3")[][];
  shortenedCategory?:
    | "基礎"
    | "要求"
    | "主題"
    | "展開"
    | "総合L"
    | "総合A"
    | "総合B"
    | "総合C"
    | "総合D"
    | "総合E"
    | "総合F";
  shortenedEvaluation?: string;
  shortenedClassroom?: string;
}

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
