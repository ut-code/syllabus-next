/*
 * セメスターフィルターのコンポーネントを定義する
 */

"use client";
import React from "react";
import { Semester } from "@/app/type";

/**
 * セメスターフィルターのプロパティ
 */
interface SemesterProp {
  selectedSemesters?: Semester[];
  setSelectedSemesters: (semesters: Semester[]) => void;
}

const Semesters: Semester[] = ["S", "S1", "S2", "A", "A1", "A2"];

/**
 * セメスターフィルターのコンポーネント
 * @param prop セメスターフィルターのプロパティ
 * @returns コンポーネント
 */
export const SemestersCheckbox: React.FC<SemesterProp> = (
  prop: SemesterProp,
) => {
  const selectedSemesters = prop.selectedSemesters ?? [];

  return (
    <div>
      <div style={{ display: "flex", gap: "16px" }}>
        {Semesters.map((s) => (
          <label
            key={s}
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <input
              type="checkbox"
              checked={selectedSemesters.includes(s)}
              onChange={() => {
                if (selectedSemesters.includes(s)) {
                  prop.setSelectedSemesters(
                    selectedSemesters.filter((semester) => semester !== s),
                  );
                } else {
                  prop.setSelectedSemesters([...selectedSemesters, s]);
                }
              }}
            />
            {s}
          </label>
        ))}
      </div>
      <div style={{ marginTop: "16px" }}>
        <h2>選択された項目:</h2>
        <ul>
          {selectedSemesters.map((checkbox, i) => (
            <li key={i}>{checkbox}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
