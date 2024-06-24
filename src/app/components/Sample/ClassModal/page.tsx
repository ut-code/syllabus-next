"use client";
import React, { useState } from "react";
import ClassModalComponent from "../../ClassModal"; // モーダルのコンポーネント
import { SampleClasses } from "./SampleClassData"; // モーダルのデモで利用する講義のサンプルデータ

/**
 * ClassModalComponentを利用するサンプルです
 *
 * ClassModalComponentは親コンポーネントが表示/非表示を制御することを想定しているので
 * useStateを利用して状態を管理します
 * @returns モーダルの利用例
 */
const ThemeSampleComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="flex justify-center m-24">
        {/* モーダルを表示するボタン */}
        <button
          className="bg-primary text-on-primary p-2 rounded-full"
          onClick={() => setIsOpen(true)}
        >
          Open Modal
        </button>
      </div>

      {/* モーダル */}
      <ClassModalComponent
        isOpen={isOpen} // モーダルの表示状態
        onCloseButtonClicked={(current) => setIsOpen(!current)} // モーダルの閉じるボタンが押された時のコールバック。閉じる処理を記述する。(連打対策のため、コールバック関数の引数(現在の表示状態)を反転させる
        classData={SampleClasses[1]} // 表示したい講義情報
      />
    </>
  );
};

export default ThemeSampleComponent;
