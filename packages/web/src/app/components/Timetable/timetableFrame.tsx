/*
 * 時間割のフレームを描画するコンポーネント
 *
 * フレームだけを描画し、その内部のデザインは外部から指定される
 * 時間割スロットの種類は3つ存在し「講義スロット」「曜日ヘッダー」「時限ヘッダー」がある
 * それぞれ内部の具体的なデザインはpropsを通して渡される
 * 例えばスロット内に「講義名」と「教室」を表示する、といったデザインは外部から渡される
 *
 * 使用例: components/Sample/Timetable/page
 */

import type React from "react";
import { type ReactElement, useEffect, useState } from "react";
import type { ClassDataType, Day, DayPeriod } from "@/app/type";
import { SampleClasses } from "../Sample/ClassModal/SampleClassData";
import { ClassSlot } from "./slots/classSlot";
import { DaySlot } from "./slots/daySlot";
import { PeriodSlot } from "./slots/periodSlot";
import { type Period, SlotDiv } from "./slots/slot";

/**
 * 時間割のフレームコンポーネントのプロパティ
 */
interface TimetableProps {
  // 土曜日を表示するか否か
  hasSaturday: boolean;

  // 講義スロット内のデザイン
  // このスロットに表示したい講義はこのコンポーネントで解決し
  // デザインだけ外部(classSlotElementの内容)に任せる
  classSlotElement: (classes: ClassDataType[]) => React.ReactNode;

  // 時限ヘッダー内のデザイン
  // 詳細はclassSlotElementと同じ
  periodSlotElement: (period: Period | "集中") => React.ReactNode;

  // 曜日ヘッダー内のデザイン
  // 詳細はclassSlotElementと同じ
  daySlotElement: (day: Day) => React.ReactNode;
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
function findClasses(classes: ClassDataType[], dayPeriod: DayPeriod | "集中") {
  // i番目の講義が、指定の曜限(dayPeriod)に開講されているか否かを判定する関数
  const predicate = (i: number) => {
    // 集中講義が検索されているとき
    if (dayPeriod === "集中") {
      // classes[i] が集中か否かを返す
      return classes[i]?.dayPeriod === "集中";
    }

    // 集中講義ではない場合
    else {
      // classes[i]が集中講義ならfalse
      if (classes[i]?.dayPeriod === "集中") return false;
      const dayPeriods = classes[i]?.dayPeriod as DayPeriod[];

      // classes[i]が集中講義ではない場合、
      // 開講曜限でループを回し、
      for (let j = 0; j < dayPeriods.length; j++) {
        // 一つでもdayPeriodに一致するものがあればtrue
        if (
          dayPeriods[j]?.day === dayPeriod.day &&
          dayPeriods[j]?.period === dayPeriod.period
        )
          return true;
      }

      // 一致することが無ければfalse
      return false;
    }
  };

  // 作成した判定方法を用いてフィルターをかける
  return classes.filter((_, i) => predicate(i));
}

/**
 * 時間割コンポーネント
 * @param props 時間割コンポーネントのプロパティ
 * @returns 時間割コンポーネント
 */
const Timetable: React.FC<TimetableProps> = (props: TimetableProps) => {
  // 時間割に表示したい講義
  const [classes, setClasses] = useState<ClassDataType[]>([]);

  // 時間割表示時、ユーザーが履修している講義を取得
  useEffect(() => {
    loadClass().then((d) => {
      setClasses(d);
    });
  }, []);

  // 時限のコレクション
  const period: Period[] = [1, 2, 3, 4, 5, 6];

  const day: Day[] = props.hasSaturday
    ? ["mon", "tue", "wed", "thu", "fri", "sat"]
    : ["mon", "tue", "wed", "thu", "fri"];

  // 以降、時間割に表示するスロットを作成し、全てこの配列に入れる
  // SlotDiv: 時間割表の左上の空白スロット
  // PeriodSlot: 時限ヘッダー
  // DaySlot: 曜日ヘッダー
  // ClassSlot: 講義スロット
  const slots: (
    | ReactElement<typeof SlotDiv>
    | ReactElement<typeof PeriodSlot>
    | ReactElement<typeof DaySlot>
    | ReactElement<typeof ClassSlot>
  )[] = [];

  /*
   *
   *  時間割票に配置するスロットの作成
   *
   */

  // 左上の空白
  slots.push(<SlotDiv key={"void"} />);

  // 曜日のヘッダー
  day.map((d) =>
    slots.push(
      <DaySlot key={d} day={d} daySlotElement={props.daySlotElement} />,
    ),
  );

  // 各時限に対し、時限ヘッダーと講義スロット(各曜日分)を作成
  period.map((period) => {
    /* 時限のヘッダー */
    slots.push(
      <PeriodSlot
        key={`period${period}`}
        period={period}
        periodSlotElement={props.periodSlotElement}
      />,
    );

    // 各曜日でループ
    day.map((d) => {
      const dayPeriod: DayPeriod = { day: d, period: period };

      // このスロットに表示する講義情報
      const foundClass = findClasses(classes, dayPeriod);
      slots.push(
        <ClassSlot
          key={d + period}
          hasSaturday={props.hasSaturday}
          day_period={dayPeriod}
          classes={foundClass}
          isIntensiveClass={false}
          classSlotElement={props.classSlotElement}
        />,
      );
    });
  });

  /* 集中講義のヘッダー */
  slots.push(
    <PeriodSlot
      key={"int_head"}
      period={"集中"}
      periodSlotElement={props.periodSlotElement}
    />,
  );

  // 集中講義のスロット
  const dayPeriod: DayPeriod | "集中" = "集中";
  slots.push(
    <ClassSlot
      key={"int_slot"}
      hasSaturday={props.hasSaturday}
      day_period={dayPeriod}
      isIntensiveClass={true}
      classes={findClasses(classes, dayPeriod)}
      classSlotElement={props.classSlotElement}
    />,
  );

  return (
    // gridのgapを1pxとし、時間割の枠線を表現
    // ヘッダーの厚みを1x2 (or 2x1)、講義スロットを2x2で計算し、
    // 時間割は15行11列(土曜日を表示する場合は13列)を使用
    <div
      className={`grid ${props.hasSaturday ? "grid-cols-13" : "grid-cols-11"} grid-rows-15 gap-px grid-flow-row h-full bg-outline rounded-md border border-outline overflow-hidden`}
    >
      {/* 作成したスロットを表示 */}
      {slots}
    </div>
  );
};

export default Timetable;
