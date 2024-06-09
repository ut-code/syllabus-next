/*
  定義済みColorを用いてトグルボタンをデザインするサンプル
 */
"use client";

import React, { useState } from "react";

export default function ToggleSample() {
  const [isOn, setIsOn] = useState(true);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <button
      onClick={toggle}
      className={`
              ${
                // トグルのON/OFFによって、背景色を変更
                isOn
                  ? "bg-primary-container" // トグルがONの時、primary-containerの利用推奨
                  : "bg-surface-container-highest" // トグルがOFFの時、surface-container-highest
              } 
              border-outline border-2 relative inline-flex items-center h-6 rounded-full w-11 transition-colors`}
    >
      {/* トグルスイッチのハンドル */}
      <span
        className={`${
          isOn ? "translate-x-5" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-outline rounded-full transition-transform`}
      />
    </button>
  );
}
