/*
 * フィルターの内容とタイトルをセットにするコンポーネント
 */

import React, { ReactNode } from "react";

/**
 * フィルターカードのプロパティ
 */
export interface FilterCardProps {
  /** タイトル */
  title: string;

  /** フィルター */
  children: ReactNode;
}

/**
 * フィルターの内容とタイトルをセットにするコンポーネント
 * @param props フィルターのプロパティ
 * @returns コンポーネント
 */
export const FilterCard: React.FC<FilterCardProps> = ({ title, children }) => {
  return (
    <div className="gap-8 flex-wrap">
      <div className="text-2xl m-4">{title}</div>
      {children}
    </div>
  );
};
