/*
 * フリーワード検索のコンポーネントを定義する
 */

"use client";
import React from "react";
import Checkbox from "../Checkbox";

/**
 * フリーワード検索のプロパティ
 */
interface FreewordProp {
  isFreewordForSyllabusDetail?: boolean;
  setFreewordTarget: (isFreewordForSyllabusDetail: boolean) => void;
}

/**
 * フリーワード検索のコンポーネント
 * @param prop フリーワード検索のプロパティ
 * @returns コンポーネント
 */
export const Freeword: React.FC<FreewordProp> = (prop: FreewordProp) => {
  const isFreewordForSyllabusDetail = prop.isFreewordForSyllabusDetail ?? false;
  return (
    <div>
      <input
        placeholder={
          "フリーワード : " +
          (isFreewordForSyllabusDetail ? "授業情報全体" : "講義名")
        }
      ></input>
      <Checkbox
        label={"授業情報全体を検索"}
        checked={isFreewordForSyllabusDetail}
        onChange={prop.setFreewordTarget}
      ></Checkbox>
    </div>
  );
};
