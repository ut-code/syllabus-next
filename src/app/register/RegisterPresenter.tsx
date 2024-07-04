"use client";

import { Select, Input } from "@headlessui/react";

import { RegisterType } from "@/type";
import { streamOptions, gradeOptions } from "@/app/register/options";

type RegisterPresenterProps = {
  registeredInfo: RegisterType;
  setRegisteredInfo: (info: RegisterType) => void;
  isAutofillCompulsory: boolean;
  setIsAutofillCompulsory: (isAutofillCompulsory: boolean) => void;
};

/**
 * RegisterPresenter component renders a form for registering user information including stream, grade, and class number.
 * It also includes a checkbox for compulsory autofill option.
 * @param props - The props for the component.
 * @param props.registeredInfo - The currently registered information.
 * @param props.setRegisteredInfo - Function to update the registered information.
 * @param props.isAutofillCompulsory - Flag indicating if autofill is compulsory.
 * @param props.setIsAutofillCompulsory - Function to update the compulsory autofill flag.
 * @returns The RegisterPresenter component.
 */
export default function RegisterPresenter({
  registeredInfo,
  setRegisteredInfo,
  isAutofillCompulsory,
  setIsAutofillCompulsory,
}: RegisterPresenterProps): JSX.Element {
  const { stream, grade, classNumber } = registeredInfo;

  /**
   * StreamSelect component renders a select dropdown for stream options.
   * @returns The StreamSelect component.
   */
  function StreamSelect(): JSX.Element {
    return (
      <Select
        name="stream"
        id="compulsory"
        value={stream}
        onChange={(e) =>
          setRegisteredInfo({ ...registeredInfo, stream: e.target.value })
        }
        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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

  /**
   * GradeSelect component renders a select dropdown for grade options.
   * @returns The GradeSelect component.
   */
  function GradeSelect(): JSX.Element {
    return (
      <Select
        name="grade"
        id="grade"
        value={grade}
        onChange={(e) =>
          setRegisteredInfo({ ...registeredInfo, grade: e.target.value })
        }
        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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

  /**
   * ClassNumberInput component renders an input field for class number.
   * @returns The ClassNumberInput component.
   */
  function ClassNumberInput(): JSX.Element {
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
        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      />
    );
  }

  /**
   * CompulsoryAutofillCheckbox component renders a checkbox for compulsory autofill option.
   * @returns The CompulsoryAutofillCheckbox component.
   */
  function CompulsoryAutofillCheckbox(): JSX.Element {
    return (
      <div className="mt-2">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={isAutofillCompulsory}
            onChange={(e) => setIsAutofillCompulsory(e.target.checked)}
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
          />
          <span>必修を自動入力する</span>
        </label>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <header className="text-xl font-semibold text-center mb-4">
          所属入力
        </header>
        <div className="flex space-x-2">
          <div className="flex-1">
            <StreamSelect />
          </div>
          <div className="flex-1">
            <GradeSelect />
          </div>
          <div className="flex-1">
            <ClassNumberInput />
          </div>
        </div>
        <CompulsoryAutofillCheckbox />
        <div className="flex justify-center">
          <button
            id="close-status"
            className="mt-4 w-1/2 bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
