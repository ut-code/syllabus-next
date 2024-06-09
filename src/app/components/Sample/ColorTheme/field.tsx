/*
    定義済みColorを用いてインプットフィールドをデザインするサンプル
*/
"use client"
import React, { useState, ChangeEvent } from 'react';

type ValidatedInputProps = {
  placeholder?: string;
};
/**
 * 定義済みColorを用いてデザインしたinputフィールドのサンプル
 * @param param0 props
 * @param param0.placeholder placeholderのテキスト
 * @returns inputフィールドのサンプル
 */
const ValidatedInput: React.FC<ValidatedInputProps> = ({ placeholder = "Only alphanumeric!" }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^[a-zA-Z0-9]*$/.test(value)) {
      setError("");
    } else {
      setError("英数のみ使用してください");
    }
    setInputValue(value);
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className={`border-b-2 p-2 
        ${
            // エラーの有無で枠線の色を変更
            error ? 
            'border-error' : // エラーの場合はエラー色(推奨)
            'border-tertiary' // エラーでない場合はtertiary色(例)
        } focus:outline-none focus:ring-2 bg-surface-container`}
      />
      {error && <p className="text-error mt-2 text-nowrap">{error}</p>}
    </div>
  );
};

export default ValidatedInput;
