/*
 * 履修登録済みか否かのフィルターのコンポーネント
 */

"use client";
import React from "react";
import { FlagButton } from "../UI/FlagButton";

/**
 * 履修登録済みか否かのフィルターのプロパティ
 */
interface RegistrationFilterProp {
  showRegistered?: boolean;
  showNotRegistered?: boolean;
  setShowRegistered: (showRegistered: boolean, showNotRegistered: boolean) => void;
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
    if (!showRegistered && !showNotRegistered) {
      return;
    } else {
      prop.setShowRegistered(showRegistered, showNotRegistered);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-2">
      <FlagButton
        label={"未"}
        isSelected={showNotRegistered}
        onClick={() => onClick(showRegistered, !showNotRegistered)}
        className="aspect-square"
      />
      <FlagButton
        label={"済"}
        isSelected={showRegistered}
        onClick={() => onClick(!prop.showRegistered, showNotRegistered)}
        className="aspect-square"
      />
    </div>
  );
};
