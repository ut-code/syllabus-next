/*
 * フリーワード検索のコンポーネントを定義する
 */

"use client";
import type React from "react";
import Checkbox from "../UI/Checkbox";

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
        className="text-lg w-72 block"
        placeholder={
          "検索対象 : " +
          (isFreewordForSyllabusDetail ? "授業情報全体" : "講義名")
        }
      />
      {/* biome-ignore lint/a11y/noLabelWithoutControl: Checkbox has input inside */}
      <label className="flex items-center mt-2">
        <Checkbox
          checked={isFreewordForSyllabusDetail}
          onChange={prop.setFreewordTarget}
          className="mr-2"
        />
        授業情報全体を検索
      </label>
    </div>
  );
};
