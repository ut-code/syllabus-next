/*
 * 各スロットの親要素
 *
 * 曜日を表示するスロット、時限を表示するスロット、講義を表示するスロット全てに共通するプロパティを
 * 設定することで冗長な記述を避ける
 */

import React, { ReactNode } from "react";

/**
 * 時限の型
 */
export type Period = 1 | 2 | 3 | 4 | 5 | 6;

/**
 * スロット要素のプロパティ
 * (曜日を表示するスロット、時限を表示するスロット、講義を表示するスロット全てに共通するプロパティ)
 */
export interface slotProps {
  children?: ReactNode;
  className?: string;
}

/**
 * スロット要素
 * @param props スロット要素のプロパティ
 * @returns スロット要素
 */
export const SlotDiv: React.FC<slotProps> = (props) => {
  return (
    <div
      className={`border-outline border-solid flex justify-center items-center bg-surface ${props.className} w-full overflow-hidden`}>
      {props.children}
    </div>
  );
};
