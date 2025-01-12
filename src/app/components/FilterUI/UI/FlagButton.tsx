/*
 * 選択状態を示すボタン。
 * (ボタンの背景色を変更することで選択状態を示す。)
 * セメスター選択ボタンや、種別選択ボタンで使用。
 */

import React from 'react';

/**
 * 選択状態を示すボタンのプロパティ
 */
interface FlagButtonProp {
  /**
   * ボタンのラベル
   */
  label: string;
  /**
   * 選択状態かどうか
   */
  isSelected: boolean;
  /**
   * ボタンがクリックされたときの処理
   */
  onClick: () => void;

  /**
   * ボタンのスタイル
   */
  className?: string;
}

/**
 * 選択状態を示すボタンのコンポーネント
 * @param prop 選択状態を示すボタンのプロパティ
 * @returns 選択状態を示すボタンのコンポーネント
 */
export const FlagButton: React.FC<FlagButtonProp> = (prop: FlagButtonProp) => {
    const className = prop.className ?? "";
  return (
    <button
      className={`${
        prop.isSelected ? 'bg-primary/30' : 'bg-surface'
      } text-text-default px-4 py-2 rounded-full outline-2 outline-primary/30 outline` + " " + className}
      onClick={prop.onClick}
    >
      {prop.label}
    </button>
  );
}
