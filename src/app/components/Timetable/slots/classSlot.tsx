import { ClassDataType, DayPeriod } from "@/app/type";
import React from "react";
import { SlotDiv, slotProps } from "./slot";

/**
 * 講義が表示されるスロット要素のプロパティ
 */
interface classProps extends slotProps {
  day_period: DayPeriod; // 曜限
  hasSaturday: boolean; // 土曜日表示か否か
  classes: ClassDataType[];
  isIntensiveClass: boolean;
  classSlotElement: React.FC<ClassDataType[]>;
}

/**
 * 講義を表示するスロット
 * @param props 講義スロットのプロパティ
 * @returns 講義を表示するスロット
 */
export const ClassSlot: React.FC<classProps> = (props: classProps) => {
  let col_span = "col-span-2"; // 通常講義ならグリッドの幅は2
  if (props.isIntensiveClass) {
    // 集中講義なら
    if (props.hasSaturday) {
      col_span = "col-span-12"; // 土曜日表示の場合のグリッドの幅は12
    } else {
      col_span = "col-span-10"; // 土曜日非表示の場合のグリッドの幅は10
    }
  }

  return (
    <SlotDiv className={`${col_span} row-span-2 ${props.className}`}>
      {props.classSlotElement(props.classes)}
    </SlotDiv>
  );
};
