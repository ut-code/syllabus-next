"use client";
import { useState } from "react";
import { Freeword } from "./FilterComponents/Freeword";
import { Evaluation, Semester } from "@/app/type";
import { SemestersCheckbox } from "./FilterComponents/Semester";
import { EvaluationFilter } from "./FilterComponents/Evaluation";

/**
 *  フィルタの型定義
 */
type Filter = {
  isFreewordForSyllabusDetail?: boolean;
  semesters?: Semester[];
  evaluation_included?: Evaluation[];
  evaluation_excluded?: Evaluation[];
};

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
        setFreewordTarget={(isFreewordForSyllabusDetail) =>
          setFilter({ ...filter, isFreewordForSyllabusDetail })
        }
      />
      <SemestersCheckbox
        selectedSemesters={filter.semesters}
        setSelectedSemesters={(semesters: Semester[]) =>
          setFilter({ ...filter, semesters })
        }
      />
      <EvaluationFilter
        evaluation_included={filter.evaluation_included}
        evaluation_excluded={filter.evaluation_excluded}
        setEvaluation={(
          evaluation_included: Evaluation[],
          evaluation_excluded,
        ) => setFilter({ ...filter, evaluation_included, evaluation_excluded })}
      />
    </div>
  );
};
