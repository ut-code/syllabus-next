"use client";

import { Select, Input } from "@headlessui/react";

import { RegisterType } from "@/app/type";
import { streamOptions, gradeOptions } from "./options";

type RegisterPresenterProps = {
  registeredInfo: RegisterType;
  setRegisteredInfo: (info: RegisterType) => void;
  isAutofillCompulsory: boolean;
  setIsAutofillCompulsory: (isAutofillCompulsory: boolean) => void;
};

export default function RegisterPresenter({
  registeredInfo,
  setRegisteredInfo,
  isAutofillCompulsory,
  setIsAutofillCompulsory,
}: RegisterPresenterProps) {
  const { stream, grade, classNumber } = registeredInfo;

  function StreamSelect() {
    return (
      <Select
        name="stream"
        id="compulsory"
        value={stream}
        onChange={(e) =>
          setRegisteredInfo({ ...registeredInfo, stream: e.target.value })
        }
      >
        {streamOptions.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Select>
    );
  }

  function GradeSelect() {
    return (
      <Select
        name="grade"
        id="grade"
        value={grade}
        onChange={(e) =>
          setRegisteredInfo({ ...registeredInfo, grade: e.target.value })
        }
      >
        {gradeOptions.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </Select>
    );
  }

  function ClassNumberInput() {
    return (
      <Input
        id="className-number"
        type="number"
        min="1"
        max="39"
        placeholder="組"
        value={classNumber}
        onChange={(e) => {
          setRegisteredInfo({ ...registeredInfo, classNumber: e.target.value });
        }}
      />
    );
  }

  function CompulsoryAutofillCheckbox() {
    return (
      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isAutofillCompulsory}
            onChange={(e) => setIsAutofillCompulsory(e.target.checked)}
            className="h-4 w-4 rounded border bg-white checked:bg-blue-500 checked:border-transparent checked:text-white"
          />
          <span>必修を自動入力する</span>
        </label>
      </div>
    );
  }

  return (
    <div id="input-field">
      <header id="input-message">所属入力</header>
      <StreamSelect />
      <GradeSelect />
      <ClassNumberInput />
      <CompulsoryAutofillCheckbox />
      <button id="close-status" className="m-1 inline-flex">
        OK
      </button>
    </div>
  );
}
