"use client";
import { useState } from "react";
import { Freeword } from "./FilterComponents/Freeword";
import { Semester } from "@/app/type";
import { SemestersCheckbox } from "./FilterComponents/Semester";

/**
 *  フィルタの型定義
 */
type Filter = {
  isFreewordForSyllabusDetail?: boolean;
  semesters?: Semester[];
}

/**
 *  フィルタUI
 * @returns フィルタUI
 */
export const FilterUI: React.FC = () => {

  // 現在のフィルター
  const [filter, setFilter] = useState<Filter>({});

  return (
    <div className="flex justify-center gap-4">

      <Freeword
        isFreewordForSyllabusDetail={filter.isFreewordForSyllabusDetail}
        setFreewordTarget={(isFreewordForSyllabusDetail) => setFilter({ ...filter, isFreewordForSyllabusDetail })}
      />
      <SemestersCheckbox 
      selectedSemesters={filter.semesters}
      setSelectedSemesters={(semesters:Semester[]) => setFilter({ ...filter, semesters })}
      />
    </div>
  );
};
