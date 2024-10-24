import Header from "@/app/components/Header";
import { options, gradeOptions, numberOptions } from "@/app/profile/data";
import Selector from "@/app/profile/Selector";

/**
 * Profile 個人データを入力するページ。
 * @returns HTMLを生成するReactコンポーネント。
 */
export default function Profile(): JSX.Element {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="border border-gray-300 p-4 rounded-md shadow-md h-1/4 w-1/3 flex flex-col items-center justify-center">
          <div className="grid grid-cols-3 gap-2 mb-4">
            <Selector {...options} />
            <Selector {...gradeOptions} />
            <Selector {...numberOptions} />
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="required-auto-fill" className="mr-2" />
            <label
              htmlFor="required-auto-fill"
              className="text-sm text-gray-700"
            >
              必修を自動入力する
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
