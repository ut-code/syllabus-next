import { t } from "elysia";

// TODO: Elysia のスキーマにする
// サンプル変換:

export type Stream = typeof Stream.static;
export const Stream = t.Enum({
  s1: "s1",
  s2: "s2",
  s3: "s3",
  l1: "l1",
  l2: "l2",
  l3: "l3",
});

export type User = {
  stream: Stream | undefined;
  grade: number | undefined;
  classNumber: number | undefined;
};

export type ClassDataType = {
  code: string;
  type: string;
  category: string;
  semester: string;
  dayPeriod: DayPeriod[] | "集中";
  classroom: string;
  titleJp: string;
  lecturer: string;
  titleEn: string;
  lecturerEn: string;
  ccCode: string;
  credits: number;
  detail: string;
  schedule: string;
  methods: string;
  evaluation: string;
  notes: string;
  class: string;
  guidance: string;
  guidanceDate: string;
  guidancePeriod: string;
  time: number;
  timeCompensation: string;
  targetClass: string[][];
  importance: string[][];
  shortenedCategory: string;
  shortenedEvaluation: string;
  shortenedClassroom: string;
};

export type Day = "mon" | "tue" | "wed" | "thu" | "fri" | "sat";

export type DayPeriod = {
  day: Day;
  period: 1 | 2 | 3 | 4 | 5 | 6;
};

export const dayMapping: { [key in Day]: string } = {
  mon: "月",
  tue: "火",
  wed: "水",
  thu: "木",
  fri: "金",
  sat: "土",
};

/**
 * セメスターを表現する型
 */
export type Semester = "S" | "S1" | "S2" | "A" | "A1" | "A2";

/**
 * 評価方法を表現する型
 */
export type Evaluation = "試験" | "レポート" | "出席" | "平常";

/**
 * セメスターを表現する型
 */
export type ClassType =
  | "基礎"
  | "要求"
  | "主題"
  | "展開"
  | "L"
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F";
