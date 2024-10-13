"use client";
import { Day, dayMapping } from "@/app/type";
import {
  ClassSlot,
  DaySlot,
  IntensiveClassSlot,
  PeriodSlot,
  PosV,
  SlotDiv,
} from "./slot";
import { ReactNode } from "react";

function getDay(): Day[] {
  return hasSaturday
    ? ["mon", "tue", "wed", "thu", "fri", "sat"]
    : ["mon", "tue", "wed", "thu", "fri"];
}
const hasSaturday = true;

function slotRow(
  period: 1 | 2 | 3 | 4 | 5 | 6 | "集中",
  pos_v: PosV,
): ReactNode[] {
  const day = getDay();
  const nodes: ReactNode[] = [];

  nodes.push(
    /* 時限のヘッダー */
    <PeriodSlot
      period={period}
      pos_v={pos_v}
      pos_h={"left"}
      key={"period" + period}
    >
      {period}
    </PeriodSlot>,
  );

  day.map((d) => {
    nodes.push(
      <ClassSlot
        hasSaturday={hasSaturday}
        day_period={{ day: d, period: period }}
        pos_v={pos_v}
        pos_h={d == day[day.length - 1] ? "right" : "center"}
        key={d + period}
      />,
    );
  });

  return nodes;
}

const Timetable: React.FC = () => {
  const period: (1 | 2 | 3 | 4 | 5 | 6 | "集中")[] = [1, 2, 3, 4, 5, 6];
  const day = getDay();
  return (
    <div
      className={`grid ${hasSaturday ? "grid-cols-13" : "grid-cols-11"} grid-flow-row h-full`}
    >
      {/* 左上の空白 */}
      <SlotDiv pos_v={"top"} pos_h={"left"} />

      {/* 曜日のヘッダー */}
      {day.map((d) => (
        <DaySlot
          day={d}
          pos_v={"top"}
          pos_h={d == day[day.length - 1] ? "right" : "center"}
          key={d}
        >
          {period}
        </DaySlot>
      ))}

      {period.map((period) => {
        return slotRow(period, "middle").map((n) => {
          return n;
        });
      })}

      {/* 集中のヘッダー */}
      <PeriodSlot period={"集中"} pos_v={"bottom"} pos_h={"left"} />

      {/* 集中の講義スロット */}
      <IntensiveClassSlot
        hasSaturday={hasSaturday}
        className="col-span-10 row-span-2"
        day_period={{ day: "mon", period: "集中" }}
        pos_v={"bottom"}
        pos_h={"right"}
      />
    </div>
  );
};

export default Timetable;
