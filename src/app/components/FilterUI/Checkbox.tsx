"use client";
import React from "react";

type CheckboxProps = {
  label: string; // チェックボックスに表示するラベル
  checked: boolean; // チェック状態
  onChange: (checked: boolean) => void; // チェック状態が変化したときのコールバック
};

/**
 *  チェックボックスコンポーネント
 * @param param0  チェックボックスのプロパティ
 * @param param0.label チェックボックスに表示するラベル
 * @param param0.checked チェック状態
 * @param param0.onChange チェック状態が変化したときのコールバック
 * @returns チェックボックスコンポーネント
 */
const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      {label}
    </label>
  );
};

export default Checkbox;
