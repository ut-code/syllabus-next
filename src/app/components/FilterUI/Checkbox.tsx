"use client";
import React from "react";

type CheckboxProps = {
  label: string; // チェックボックスに表示するラベル
  checked: boolean; // チェック状態
  onChange: (checked: boolean) => void; // チェック状態が変化したときのコールバック
};

/**
 *  チェックボックスを表示する
 * @param param0  チェックボックスのラベル、チェック状態、チェック状態が変化したときのコールバックを受け取る
 * @returns  チェックボックスを表示する
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
