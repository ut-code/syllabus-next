/*
 * 全てのフィルターを表示するコンポーネント
 */

"use client";
import { useState } from "react";
import { ClassType, Evaluation, Semester } from "@/app/type";
import { SemestersCheckbox } from "./FilterComponents/Semester";
import { FilterCard } from "./UI/FilterCard";
import { EvaluationFilter } from "./FilterComponents/Evaluation";

/**
 *  フィルタの型定義
 */
type Filter = {
  isFreewordForSyllabusDetail?: boolean; // フリーワード検索
  semesters?: Semester[]; // セメスター
  evaluation_included?: Evaluation[]; // 含めたい評価方法
  evaluation_excluded?: Evaluation[]; // 除外したい評価方法
  classTypes?: ClassType[]; // 種別
  showRegistered?: boolean; // 履修登録済みの授業を表示する
  showNotRegistered?: boolean; // 未履修の授業を表示する
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
      <FilterCard title={"セメスター"}>
        <SemestersCheckbox
          selectedSemesters={filter.semesters}
          setSelectedSemesters={(semesters: Semester[]) =>
            setFilter({ ...filter, semesters })
          }
        />
      </FilterCard>

      <FilterCard title={"評価方法"}>
        <EvaluationFilter
          evaluation_included={filter.evaluation_included}
          evaluation_excluded={filter.evaluation_excluded}
          setEvaluation={(
            evaluation_included: Evaluation[],
            evaluation_excluded,
          ) =>
            setFilter({ ...filter, evaluation_included, evaluation_excluded })
          }
        />
      </FilterCard>
    </div>
  );
};
