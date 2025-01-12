"use client";
import { useState } from "react";
import { Freeword } from "./FilterComponents/Freeword";
import { ClassType, Evaluation, Semester } from "@/app/type";
import { SemestersCheckbox } from "./FilterComponents/Semester";
import { EvaluationFilter } from "./FilterComponents/Evaluation";
import { ClassTypeFilter } from "./FilterComponents/ClassTypeFilter";
import { RegistrationFilter } from "./FilterComponents/RegistrationFilter";

/**
 *  フィルタの型定義
 */
type Filter = {
  isFreewordForSyllabusDetail?: boolean;
  semesters?: Semester[];
  evaluation_included?: Evaluation[];
  evaluation_excluded?: Evaluation[];
  classTypes?: ClassType[];
  showRegistered?: boolean;
  showNotRegistered?: boolean;
};

/**
 *  フィルタUI
 * @returns フィルタUI
 */
export const FilterUI: React.FC = () => {
  // 現在のフィルター
  const [filter, setFilter] = useState<Filter>({});

  return (
    <div className="flex gap-8 flex-wrap">
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
      <ClassTypeFilter
        selectedClassTypes={filter.classTypes}
        setSelectedClassTypes={(classTypes: ClassType[]) =>
          setFilter({ ...filter, classTypes })
        }
      />
      <RegistrationFilter showRegistered={filter.showRegistered} showNotRegistered={filter.showNotRegistered} setShowRegistered={(showRegistered:boolean,showNotRegistered:boolean)=>setFilter({...filter, showRegistered, showNotRegistered})} />
    </div>
  );
};
