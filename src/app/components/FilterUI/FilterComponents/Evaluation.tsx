/*
 * 評価方法フィルターのコンポーネント
 */

"use client";
import React, { ReactNode } from "react";
import { Evaluation } from "@/app/type";
import Checkbox from "../UI/Checkbox";

const evaluations: Evaluation[] = ["試験", "レポート", "出席", "平常"];

/**
 * 評価方法フィルターのプロパティ
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
    slots.push(
      <CheckboxInGrid
        isInclude={true}
        ev={ev}
        key={ev + "included"}
        prop={prop}
      />,
    );
    slots.push(
      <CheckboxInGrid
        isInclude={false}
        ev={ev}
        key={ev + "excluded"}
        prop={prop}
      />,
    );
  });

  return <div className="grid grid-rows-3 grid-flow-col gap-2">{slots}</div>;
};

/**
 * グリッド上に並べるチェックボックスのコンポーネント
 * @param param0 プロパティ
 * @param param0.isInclude このチェックボックスが、含めたい評価方法を示しているか否か
 * @param param0.ev 評価方法
 * @param param0.prop 評価方法のフィルターコンポーネントのプロパティ
 * @returns チェックボックスコンポーネント
 */
const CheckboxInGrid: React.FC<{
  isInclude: boolean;
  ev: Evaluation;
  prop: EvaluationProp;
}> = ({ isInclude, ev, prop }) => {
  let evaluation_included = prop.evaluation_included ?? [];
  let evaluation_excluded = prop.evaluation_excluded ?? [];
  let myEvaluation = isInclude ? evaluation_included : evaluation_excluded;
  let otherEvaluation = isInclude ? evaluation_excluded : evaluation_included;

  // クリックされたときの挙動
  const onClick = (ev: Evaluation) => {
    if (myEvaluation.includes(ev)) {
      // もともとチェックされていたボックスをクリックしたら、外す
      myEvaluation.splice(myEvaluation.indexOf(ev), 1);
    } else {
      // もともとチェックされていなかったボックスをクリックしたら
      const index = otherEvaluation.indexOf(ev); // 相方のチェックがされているかを確認
      if (index >= 0) otherEvaluation.splice(index, 1); // 相方のチェックを外す
      myEvaluation.push(ev); // 自分のボックスにチェックを入れる
    }

    prop.setEvaluation(evaluation_included, evaluation_excluded);
  };

  return (
    <Checkbox
      checked={myEvaluation.includes(ev)}
      onChange={(_) => onClick(ev)}
    />
  );
};
