import { ClassDataType, Day, DayPeriod } from "@/app/type";
import React from "react";
import { SlotDiv, slotProps } from "./slot";

/**
 * 講義が表示されるスロット要素のプロパティ
 */
interface classProps extends slotProps {
  day_period: DayPeriod; // 曜限
  hasSaturday: boolean; // 土曜日表示か否か
  classes: ClassDataType[]; // 講義情報
  classSlotClicked: (classData: ClassDataType) => void;
}

/**
 * 講義(集中講義以外)スロット要素
 * @param props 講義スロット要素のプロパティ
 * @returns 講義スロット要素
 */
export const ClassSlot: React.FC<classProps> = (props: classProps) => {
  return classSlot(props, false);
};

/**
 * 集中講義スロット要素
 * @param props 講義スロット要素のプロパティ
 * @returns 集中講義スロット要素
 */
export const IntensiveClassSlot: React.FC<classProps> = (props: classProps) => {
  return classSlot(props, true);
};

/**
 * 講義を表示するスロット
 * @param props 講義スロットのプロパティ
 * @param isIntensive 集中講義か否か
 * @returns 講義を表示するスロット
 */
const classSlot: React.FC<classProps> = (
  props: classProps,
  isIntensive: boolean,
) => {
  let col_span = "col-span-2"; // 通常講義ならグリッドの幅は2
  if (isIntensive) {
    // 集中講義なら
    if (props.hasSaturday) {
      col_span = "col-span-12"; // 土曜日表示の場合のグリッドの幅は12
    } else {
      col_span = "col-span-10"; // 土曜日非表示の場合のグリッドの幅は10
    }
  }

  return (
    <SlotDiv className={`${col_span} row-span-2 ${props.className}`}>
      <div className="w-full flex">
        {props.classes.map((c, i) => {
          return (
            <div className="flex w-full items-center justify-center" key={i}>
              <div
                className="cursor-pointer bg-secondary/10 w-full max-w-40"
                onClick={() => props.classSlotClicked(c)}
              >
                <div className="m-2 text-sm font-bold truncate">
                  {c.titleJp}
                </div>
                <div className="m-2 text-xs text-text-default/50 text-wrap">
                  {c.classroom}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SlotDiv>
  );
};
