/*
    定義済みColorを用いてインプットフィールドをデザインするサンプル
*/
"use client";
import type React from "react";
import { useForm } from "react-hook-form";

type ValidatedInputProps = {
  placeholder?: string;
};

/**
 * フォームの入力内容を表すinterface
 */
interface IFormInput {
  content: string;
}

/**
 * 定義済みColorを用いてデザインしたinputフィールドのサンプル
 * @param param0 props
 * @param param0.placeholder placeholderのテキスト
 * @returns inputフィールドのサンプル
 */
const ValidatedInput: React.FC<ValidatedInputProps> = ({
  placeholder = "Only alphanumeric!",
}) => {
  const {
    register,

    // フォームの状態を管理する。
    // ユーザーとフォームのやり取りを追跡できる。
    // ここではエラー状態を利用しているが、他にも様々な状態を管理できる。
    formState: { errors },
  } = useForm<IFormInput>({ mode: "onChange" });

  return (
    <div className="flex flex-col items-center">
      <input
        className={`${
          errors.content ? "border-error" : "border-tertiary"
        } border-b-2`}
        {...register("content", { pattern: /^[a-zA-Z0-9]*$/ })}
        placeholder={placeholder}
      />
      {errors.content && (
        <p className="text-error mt-2 text-nowrap">英数のみ使用してください</p>
      )}
    </div>
  );
};

export default ValidatedInput;
