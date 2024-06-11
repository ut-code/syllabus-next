/*
  ColorThemeを利用したデザイン例
*/
import React from "react";
import ToggleSample from "./toggle";
import ValidatedInput from "./field";

const ThemeSampleComponent: React.FC = () => {
  return (
    // 子要素をグリッド状に配置する
    <div className="flex justify-center bg-surface-container">
      <div className="w-1/2 p-4">
        <h2 className="text-2xl font-bold">Theme Sample</h2>
        <p className="mt-4">定義した色を利用したデザイン例</p>
        <div className="mt-4">
          <div className="grid grid-cols-2 justify-center items-center gap-2">
            {/* primary背景に、on-primary色のテキストを使用 */}
            <div className="col-start-1 col-span-1 row-start-1 p-4 bg-primary text-on-primary">
              Primary
            </div>

            {/* FABは、primary-containerを利用推奨 */}
            <div className="col-start-2 col-span-1 row-start-1 p-4 bg-primary-container text-on-primary-container shadow rounded-full text-center">
              Float Button
            </div>

            {/* トグルボタン */}
            <ToggleSample />

            {/* 入力フィールド */}
            <ValidatedInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSampleComponent;
