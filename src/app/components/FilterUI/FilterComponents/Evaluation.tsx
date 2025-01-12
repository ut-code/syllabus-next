/*
 * 評価方法フィルターのコンポーネントを定義する
 */

"use client";
import React, { ReactNode } from "react";
import { Evaluation } from "@/app/type";
import Checkbox from "../UI/Checkbox";

const evaluations: Evaluation[] = ["試験", "レポート", "出席", "平常"];

/**
 * フリーワード検索のプロパティ
 */
interface EvaluationProp {
  evaluation_included?: Evaluation[];
  evaluation_excluded?: Evaluation[];
  setEvaluation: (
    evaluation_included: Evaluation[],
    evaluation_excluded: Evaluation[],
  ) => void;
}

/**
 * 評価方法フィルターのコンポーネント
 * @param prop  評価方法フィルターのプロパティ
 * @returns  評価方法フィルターのコンポーネント
 */
export const EvaluationFilter: React.FC<EvaluationProp> = (
  prop: EvaluationProp,
) => {
  const slots: ReactNode[] = [];

  slots.push(<div key={"void"} />);
  slots.push(<div key={"label_in"}>含む</div>);
  slots.push(<div key={"label_ex"}>除外</div>);

  evaluations.map((ev) => {
    slots.push(<div key={ev + "header"}>{ev.substring(0, 2)}</div>);
    slots.push(checkbox(true, ev, ev + "included", prop));
    slots.push(checkbox(false, ev, ev + "excluded", prop));
  });

  return <div className="grid grid-rows-3 grid-flow-col gap-2">{slots}</div>;
};

function checkbox(
  isInclude: boolean,
  ev: Evaluation,
  key: string,
  prop: EvaluationProp,
) {
  let evaluation_included = prop.evaluation_included ?? [];
  let evaluation_excluded = prop.evaluation_excluded ?? [];
  let myEvaluation = isInclude ? evaluation_included : evaluation_excluded;
  let otherEvaluation = isInclude ? evaluation_excluded : evaluation_included;

  // クリックされたときの挙動
  const onClick = (ev: Evaluation) => {
    if (myEvaluation.includes(ev)) {
      myEvaluation.splice(myEvaluation.indexOf(ev), 1);
    } else {
      const index = otherEvaluation.indexOf(ev);
      if (index >= 0) otherEvaluation.splice(index, 1);
      myEvaluation.push(ev);
    }

    prop.setEvaluation(evaluation_included, evaluation_excluded);
  };

  return (
    <Checkbox
      key={key}
      checked={myEvaluation.includes(ev)}
      onChange={(_) => onClick(ev)}
    />
  );
}
