"use client";
import { ClassDataType, Day, DayPeriod } from "@/app/type";
import {
  ClassSlot,
  DaySlot,
  IntensiveClassSlot,
  PeriodSlot,
  SlotDiv,
} from "./slot";
import { ReactNode, useEffect, useState } from "react";
import { SampleClasses } from "../Sample/ClassModal/SampleClassData";

/**
 * 土曜日を表示するか否か
 */
const hasSaturday = true;

/**
 * 曜日を取得する
 * @returns 
 */
function getDay(): Day[] {
  return hasSaturday
    ? ["mon", "tue", "wed", "thu", "fri", "sat"]
    : ["mon", "tue", "wed", "thu", "fri"];
}

type Period = 1|2|3|4|5|6|"集中";

/**
 * 各時限、曜日のスロットを作成
 * @param period 時限
 * @returns スロットのコレクション
 */
function periodSlots(
  period: Period,
  classes: ClassDataType[]
): ReactNode[] {
  const day = getDay();
  const nodes: ReactNode[] = [];

  nodes.push(
    /* 時限のヘッダー */
    <PeriodSlot
      period={period}
      pos_v={"middle"}
      pos_h={"left"}
      key={"period" + period}
    >
      {period}
    </PeriodSlot>,
  );


  day.map((d) => {
    const dayPeriod = { day: d, period: period };
  const foundClass = findClass(classes, dayPeriod);
  console.log(foundClass);
    nodes.push(
      <ClassSlot
        hasSaturday={hasSaturday}
        day_period={dayPeriod}
        pos_v={"middle"}
        pos_h={d == day[day.length - 1] ? "right" : "center"}
        key={d + period}
        classes = {foundClass}
      />,
    );
  });

  return nodes;
}

async function loadClass():Promise<ClassDataType[]>{
  return SampleClasses;
}

function findClass(classes:ClassDataType[], dayPeriod:DayPeriod){
  const predicate = (index:number) => {
    if(dayPeriod.period == "集中"){
      if(classes[index].dayPeriod == "集中"){
        return true;
      }else{
        return false;
      }
    }else{
      if(classes[index].dayPeriod == "集中"){
        return false;
      }

      let found = false;
      classes[index].dayPeriod.map(dp=>{
        if(dp.day == dayPeriod.day && dp.period == dayPeriod.period){
          found = true;
        }
      })
      return found;
    }
  }

  const ans:ClassDataType[] = [];
  for (let index = 0; index < classes.length; index++) {
    if(predicate(index)){
      ans.push(classes[index]);
    }    
  }
  return ans;
}

const Timetable: React.FC = () => {

  const [classes,setClasses] = useState<ClassDataType[]>([]);

  useEffect(()=>{
    loadClass().then(d=>{
      setClasses(d);
    });
  },[])

  // 時限のコレクション
  // 集中は除外(この行は他と構造が違うためループに使えない)
  const period: Period[] = [1, 2, 3, 4, 5, 6];

  // 曜日のコレクション
  const day = getDay();

  // 以降、時間割に表示するスロットを全てこの配列に入れる
  const slots:ReactNode[] = [];

  // 左上の空白
  slots.push(<SlotDiv key={"void"} pos_v={"top"} pos_h={"left"} />);

  // 曜日のヘッダー
  day.map((d) => (
    slots.push(<DaySlot
      day={d}
      pos_v={"top"}
      pos_h={d == day[day.length - 1] ? "right" : "center"}
      key={d}
    >
      {period}
    </DaySlot>
  )))

  // 各時限、
  period.map((period) => {
    //各曜日のスロット
    periodSlots(period, classes).map((n) => {
      slots.push(n);
    });
  })

  /* 集中のヘッダー */
  slots.push(<PeriodSlot key={"int_head"} period={"集中"} pos_v={"bottom"} pos_h={"left"} />);

  // 集中講義のスロット
  const dayPeriod:DayPeriod = { day: "mon", period: "集中" };
  slots.push(<IntensiveClassSlot
    key={"int_slot"}
    hasSaturday={hasSaturday}
    day_period={dayPeriod}
    pos_v={"bottom"}
    pos_h={"right"}
    classes={findClass(classes, dayPeriod)}
  />)

  return (
    <div
      className={`grid ${hasSaturday ? "grid-cols-13" : "grid-cols-11"} grid-flow-row h-full`}
    >
  {slots}
    </div>
  );
};

export default Timetable;
