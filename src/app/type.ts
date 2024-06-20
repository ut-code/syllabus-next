export type ThemeType = "light" | "dark";

export type ThemeProviderValue = {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
};

export type RegisterType = {
  stream: string | undefined;
  grade: string | undefined;
  classNumber: string | undefined;
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

type DayPeriod = {
  day: "mon" | "tue" | "wed" | "thu" | "fri" | "sat";
  period: 1 | 2 | 3 | 4 | 5 | 6;
};
