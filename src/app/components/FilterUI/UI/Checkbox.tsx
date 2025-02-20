"use client";
import React from "react";

type CheckboxProps = {
  checked: boolean; // チェック状態
  onChange: (checked: boolean) => void; // チェック状態が変化したときのコールバック
  className?: string;
};

/**
 *  チェックボックスコンポーネント
 * @param param0  チェックボックスのプロパティ
 * @param param0.checked チェック状態
 * @param param0.onChange チェック状態が変化したときのコールバック
 * @param param0.className tailwindcss
 * @returns チェックボックスコンポーネント
 */
const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  className,
}) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={() => onChange(!checked)}
      className={"accent-primary w-6 h-6 " + className}
    />
  );
};

export default Checkbox;
