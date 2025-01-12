/*
 * セメスターフィルターのコンポーネント
 */

"use client";
import React from "react";
import { Semester } from "@/app/type";
import { FlagButton } from "../UI/FlagButton";

/**
 * セメスターフィルターのプロパティ
 */
interface SemesterProp {
  selectedSemesters?: Semester[]; // 選択されているセメスター
  setSelectedSemesters: (semesters: Semester[]) => void;
}

/**
 * セメスターフィルターのコンポーネント
 * @param prop セメスターフィルターのプロパティ
 * @returns コンポーネント
 */
export const SemestersCheckbox: React.FC<SemesterProp> = (
  prop: SemesterProp,
) => {
  const selectedSemesters = prop.selectedSemesters ?? [];

  // ボタンがクリックされたときの関数
  const onClick = (semester: Semester) => {
    if (selectedSemesters.includes(semester)) {
      prop.setSelectedSemesters(
        selectedSemesters.filter((s) => s !== semester),
      );
    } else {
      prop.setSelectedSemesters([...selectedSemesters, semester]);
    }
  };

  return (
    <div className="grid grid-cols-4 gap-2">
      <FlagButton
        label={"S1"}
        isSelected={selectedSemesters.includes("S1")}
        onClick={() => onClick("S1")}
        className="aspect-square"
      />
      <FlagButton
        label={"S2"}
        isSelected={selectedSemesters.includes("S2")}
        onClick={() => onClick("S2")}
        className="aspect-square"
      />
      <FlagButton
        label={"A1"}
        isSelected={selectedSemesters.includes("A1")}
        onClick={() => onClick("A1")}
        className="aspect-square"
      />
      <FlagButton
        label={"A2"}
        isSelected={selectedSemesters.includes("A2")}
        onClick={() => onClick("A2")}
        className="aspect-square"
      />
      <FlagButton
        label={"S"}
        isSelected={selectedSemesters.includes("S")}
        onClick={() => onClick("S")}
        className="col-span-2"
      />
      <FlagButton
        label={"A"}
        isSelected={selectedSemesters.includes("A")}
        onClick={() => onClick("A")}
        className="col-span-2"
      />
    </div>
  );
};
