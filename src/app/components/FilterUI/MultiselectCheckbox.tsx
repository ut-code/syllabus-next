import React, { useState } from "react";

// チェックボックスの型定義
type CheckboxItem = {
  id: number;
  label: string;
  checked: boolean;
};

const MultiselectCheckbox: React.FC = () => {
  // 初期チェックボックスデータ
  const [checkboxes, setCheckboxes] = useState<CheckboxItem[]>([
    { id: 1, label: "Option 1", checked: false },
    { id: 2, label: "Option 2", checked: false },
    { id: 3, label: "Option 3", checked: false },
    { id: 4, label: "Option 4", checked: false },
  ]);

  // チェック状態が変わったときのハンドラー
  const handleCheckboxChange = (id: number) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id
          ? { ...checkbox, checked: !checkbox.checked }
          : checkbox
      )
    );
  };

  return (
    <div style={{ padding: "16px" }}>
      <h1>複数選択可能なチェックボックス</h1>
      <div style={{ display: "flex", gap: "16px" }}>
        {checkboxes.map((checkbox) => (
          <label key={checkbox.id} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="checkbox"
              checked={checkbox.checked}
              onChange={() => handleCheckboxChange(checkbox.id)}
            />
            {checkbox.label}
          </label>
        ))}
      </div>
      <div style={{ marginTop: "16px" }}>
        <h2>選択された項目:</h2>
        <ul>
          {checkboxes
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => (
              <li key={checkbox.id}>{checkbox.label}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default MultiselectCheckbox;
