/*
 * 履修登録済みか否かでフィルターするコンポーネント
 */

"use client";
import React from "react";
import { FlagButton } from "../UI/FlagButton";

/**
 * 履修登録済みか否かのフィルターのプロパティ
 */
interface RegistrationFilterProp {
  showRegistered?: boolean; // 履修登録済みの講義を表示するか否か
  showNotRegistered?: boolean; // 未履修の講義を表示するか否か
  setShowRegistered: (
    showRegistered: boolean,
    showNotRegistered: boolean,
  ) => void;
}

/**
 * 履修登録済みか否かのフィルターのコンポーネント
 * @param prop フィルターのプロパティ
 * @returns コンポーネント
 */
export const RegistrationFilter: React.FC<RegistrationFilterProp> = (
  prop: RegistrationFilterProp,
) => {
  const showRegistered = prop.showRegistered ?? true;
  const showNotRegistered = prop.showNotRegistered ?? true;

  // ボタンがクリックされたときの関数
  const onClick = (showRegistered: boolean, showNotRegistered: boolean) => {
    prop.setShowRegistered(showRegistered, showNotRegistered);
  };

  return (
    <div className="flex gap-2">
      <FlagButton
        label={"未"}
        isSelected={showNotRegistered}
        onClick={() => onClick(showRegistered, !showNotRegistered)}
        className="aspect-square" // 円形
      />
      <FlagButton
        label={"済"}
        isSelected={showRegistered}
        onClick={() => onClick(!showRegistered, showNotRegistered)}
        className="aspect-square" // 円形
      />
    </div>
  );
};
