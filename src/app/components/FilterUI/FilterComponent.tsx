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

"use client";
import React from "react";
import Checkbox from "./Checkbox";

interface FreewordProp {
  isFreewordForSyllabusDetail: boolean;
  setFreewordTarget: (isFreewordForSyllabusDetail: boolean) => void;
}

/**
 * フリーワード検索のコンポーネント
 * @returns コンポーネント
 */
export const FreewordComponent: React.FC<FreewordProp> = (prop: FreewordProp) => {
  return (<div>
    <input placeholder={"フリーワード : " + (prop.isFreewordForSyllabusDetail ? "授業情報全体" : "講義名")}></input>
    <Checkbox label={"授業情報全体を検索"} checked={prop.isFreewordForSyllabusDetail} onChange={prop.setFreewordTarget}></Checkbox>
  </div>);
};


