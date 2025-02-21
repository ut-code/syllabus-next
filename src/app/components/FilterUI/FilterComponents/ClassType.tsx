/*
 * セメスターフィルターのコンポーネント
 */

"use client";
import React from "react";
import { ClassType } from "@/app/type";
import { FlagButton } from "../UI/FlagButton";

/**
 * クラス種別フィルターのプロパティ
 */
interface SemesterProp {
  selectedClassTypes?: ClassType[];
  setSelectedClassTypes: (classType: ClassType[]) => void;
}

const ClassType1: ClassType[] = ["基礎", "要求", "主題", "展開"];
const ClassType2: ClassType[] = ["L", "A", "B", "C", "D", "E", "F"];

/**
 * 種別フィルターのコンポーネント
 * @param prop 種別フィルターのプロパティ
 * @returns コンポーネント
 */
export const ClassTypeFilter: React.FC<SemesterProp> = (prop: SemesterProp) => {
  const selectedClassTypes = prop.selectedClassTypes ?? [];

  // ボタンがクリックされたときの関数
  const onClick = (classType: ClassType) => {
    if (selectedClassTypes.includes(classType)) {
      // 既に含まれている場合、除外
      prop.setSelectedClassTypes(
        selectedClassTypes.filter((c) => c !== classType),
      );
    } else {
      // 含まれていた場合、追加
      prop.setSelectedClassTypes([...selectedClassTypes, classType]);
    }
  };

  return (
    <div className="grid grid-cols-8 gap-2">
      {ClassType1.map((c) => (
        <FlagButton
          key={c}
          label={c}
          isSelected={selectedClassTypes.includes(c)}
          onClick={() => onClick(c)}
          className="col-span-2"
        />
      ))}

      {ClassType2.map((c) => (
        <FlagButton
          key={c}
          label={c}
          isSelected={selectedClassTypes.includes(c)}
          onClick={() => onClick(c)}
          className="aspect-square col-span-1"
        />
      ))}
    </div>
  );
};
