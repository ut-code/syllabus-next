import Selector, { SelectorProps } from "@/app/profile/Selector";

export const options: SelectorProps = {
  options: [
    { value: "l1", data: "文科一類" },
    { value: "l2", data: "文科二類" },
    { value: "l3", data: "文科三類" },
    { value: "s1", data: "理科一類" },
    { value: "s2", data: "理科二類" },
    { value: "s3", data: "理科三類" },
  ],
  value: "科類",
};

export const gradeOptions: SelectorProps = {
  options: [
    { value: "1", data: "1年" },
    { value: "2", data: "2年" },
  ],
  value: "学年",
};

export const numberOptions: SelectorProps = {
  options: Array.from({ length: 40 }, (_, i) => ({
    value: (i + 1).toString(),
    data: (i + 1).toString(),
  })),
  value: "クラス",
};
