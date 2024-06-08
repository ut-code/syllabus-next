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
  day: string;
  period: string;
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
