/**
 * 現行のシ楽バス(v1)のスクレイピング結果(json)の型
 * 情報のフィールドを並べているだけ
 */
export class PreviousClassData {
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
