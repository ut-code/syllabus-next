"use client";
import { ClassDataType, Day, DayPeriod } from "@/app/type";
import { ReactNode, useEffect, useState } from "react";
import { SampleClasses } from "../Sample/ClassModal/SampleClassData";
import { Period, SlotDiv } from "./slots/slot";
import { ClassSlot, IntensiveClassSlot } from "./slots/classSlot";
import { PeriodSlot } from "./slots/periodSlot";
import { DaySlot } from "./slots/daySlot";
import ClassModalComponent from "../ClassModal";

/**
 * 土曜日を表示するか否か
 */
const hasSaturday = true;

/**
 * 曜日を取得する
 * @returns 曜日のコレクション(土曜日表示設定に従う)
 */
function getDay(): Day[] {
  return hasSaturday
    ? ["mon", "tue", "wed", "thu", "fri", "sat"]
    : ["mon", "tue", "wed", "thu", "fri"];
}

/**
 * ユーザーが履修している講義情報を取得する
 * 【さしあたりサンプルの講義を用いる】
 * @returns 講義のコレクション
 */
async function loadClass(): Promise<ClassDataType[]> {
  return SampleClasses;
}

/**
 * 授業コレクションの中から、指定の曜限に開講される授業を取得する
 * @param classes 授業のコレクション
 * @param dayPeriod 検索対象の曜限
 * @returns 指定の曜限に開講される授業全て
 */
function findClasses(classes: ClassDataType[], dayPeriod: DayPeriod) {
  // i番目の講義が、指定の曜限(dayPeriod)に開講されているか否か。
  const predicate = (i: number) => {
    if (dayPeriod.period == "集中") {
      return classes[i].dayPeriod == "集中";
    } else {
      if (classes[i].dayPeriod == "集中") return false;

      for (let j = 0; j < classes[i].dayPeriod.length; j++) {
        const dp = classes[i].dayPeriod[j];
        if (dp.day == dayPeriod.day && dp.period == dayPeriod.period)
          return true;
      }

      return false;
    }
  };

  return classes.filter((_, i) => predicate(i));
}

/**
 * 時間割コンポーネント
 * @returns 時間割コンポーネント
 */
const Timetable: React.FC = () => {
  const [classes, setClasses] = useState<ClassDataType[]>([]);
  const [classForModal, setClassForModal] = useState<ClassDataType>();

  useEffect(() => {
    loadClass().then((d) => {
      setClasses(d);
    });
  }, []);

  // 時限のコレクション
  // 集中は除外(この行は他と構造が違うためループに使えない)
  const period: Period[] = [1, 2, 3, 4, 5, 6];

  // 曜日のコレクション
  const day = getDay();

  // 以降、時間割に表示するスロットを全てこの配列に入れる
  const slots: ReactNode[] = [];

  // 左上の空白
  slots.push(<SlotDiv key={"void"} />);

  // 曜日のヘッダー
  day.map((d) =>
    slots.push(
      <DaySlot day={d} key={d}>
        {period}
      </DaySlot>,
    ),
  );

  // 各時限でループ
  period.map((period) => {
    /* 時限のヘッダー */
    slots.push(
      <PeriodSlot period={period} key={"period" + period}>
        {period}
      </PeriodSlot>,
    );

    // 各曜日でループ
    day.map((d) => {
      const dayPeriod = { day: d, period: period };

      // このスロットに表示する講義情報
      const foundClass = findClasses(classes, dayPeriod);
      slots.push(
        <ClassSlot
          hasSaturday={hasSaturday}
          day_period={dayPeriod}
          key={d + period}
          classes={foundClass}
          classSlotClicked={setClassForModal}
        />,
      );
    });
  });

  /* 集中講義のヘッダー */
  slots.push(<PeriodSlot key={"int_head"} period={"集中"} />);

  // 集中講義のスロット
  const dayPeriod: DayPeriod = { day: "mon", period: "集中" };
  slots.push(
    <IntensiveClassSlot
      key={"int_slot"}
      hasSaturday={hasSaturday}
      day_period={dayPeriod}
      classes={findClasses(classes, dayPeriod)}
      classSlotClicked={setClassForModal}
    />,
  );

  return (
    <>
      <div
        className={`grid ${hasSaturday ? "grid-cols-13" : "grid-cols-11"} grid-rows-15 gap-[1px] grid-flow-row h-full bg-outline rounded-md border border-outline overflow-hidden min-h-0`}
      >
        {slots}
      </div>
      {classForModal && (
        <ClassModalComponent
          isOpen={true}
          onCloseButtonClicked={() => setClassForModal(undefined)}
          classData={classForModal}
        />
      )}
    </>
  );
};

export default Timetable;
