import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import type React from "react";
import type { ComponentProps } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

/**
 * 使い方ページの各項目をまとめるレイアウト
 * @param param0 プロパティ
 * @param param0.title タイトル
 * @param param0.children 内容
 * @returns レイアウト
 */
export const HowToUseItem: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <div className="flex flex-col border border-outline/50 m-8 rounded-lg bg-surface-container-lowest/40 p-8">
      <h3 className="text-2xl font-bold mb-6">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

/**
 * Quick Start の手順に利用するリストアイテム
 * @param param0 プロパティ
 * @param param0.title タイトル
 * @param param0.children 内容
 * @returns リストアイテム
 */
export const QuickStartItem: React.FC<{
  title: string;
  children: React.ReactNode;
}> = ({ title, children }) => {
  return (
    <IndentLi className="mb-4">
      <span className="font-bold">{title}</span>
      <br />
      {children}
    </IndentLi>
  );
};

/**
 * フィルターの挙動を説明するカード
 * @param param0 プロパティ
 * @param param0.title カードのタイトル
 * @param param0.detail カードの詳細
 * @param param0.onReset リセット時の挙動
 * @returns フィルターのカード
 */
export const FilterCard: React.FC<{
  title: string;
  detail: string;
  onReset: string;
}> = ({ title, detail, onReset }) => {
  return (
    <div className="flex flex-col bg-surface-container-high p-4 w-[400px]">
      <h3 className="text-xl text-center">{title}</h3>
      <div className="bg-outline/50 h-[1px] my-3" />
      <div className="my-2">
        <h3 className="font-bold">詳細</h3>
        <p className="my-1 text-sm">{detail}</p>
      </div>
      <div className="my-4">
        <h3 className="font-bold">リセット時の挙動</h3>
        <p className="my-1">{onReset}</p>
      </div>
    </div>
  );
};

/**
 * 必修、推奨を表すマークを説明するコンポーネント
 * @param param0 プロパティ
 * @param param0.title タイトル
 * @param param0.detail 詳細
 * @param param0.mark マーク
 * @returns コンポーネント
 */
export const ClassMark: React.FC<{
  title: string;
  detail: string;
  mark: React.ReactNode;
}> = ({ title, detail, mark }) => {
  return (
    <div className="flex flex-col p-4 w-[400px]">
      <h3 className="text-xl">{title}</h3>
      <p className="my-2 text-sm">{detail}</p>
      <p>マーク: {mark}</p>
    </div>
  );
};

/**
 * Faq の質問と回答を表示するコンポーネント
 * Disclosure を利用して、質問をクリックすると回答が表示されるようにする
 * @param param0 プロパティ
 * @param param0.question 質問
 * @param param0.children 回答
 * @returns コンポーネント
 */
export const FaqItem: React.FC<{
  question: string;
  children: React.ReactNode;
}> = ({ question, children }) => {
  return (
    <Disclosure as="div" className="p-6" defaultOpen={false}>
      {/* クリックで回答を表示するボタン */}
      <DisclosureButton className="group flex w-full items-center justify-between">
        {/* 質問を表示。ホーバーで色が変わる。 */}
        <span className="font-medium group-data-[hover]:text-text-default/80">
          {question}
        </span>

        {/* 開閉アイコン */}
        <MdKeyboardArrowDown className="size-5 group-data-[hover]:fill-text-default/50 group-data-[open]:rotate-180" />
      </DisclosureButton>

      {/* 回答 */}
      <DisclosurePanel className="mt-2 text-sm/5 text-text-default/60 pr-8">
        {children}
      </DisclosurePanel>
    </Disclosure>
  );
};

/**
 * 適切にインデントするli要素
 * li 要素が長くなりwrapされる際、インデントが崩れるのを防ぐ
 * @param param0 プロパティ
 * @param param0.children 子要素
 * @returns li要素
 */
export const IndentLi: React.FC<
  {
    children: React.ReactNode;
  } & ComponentProps<"li">
> = ({ children, ...prop }) => {
  return <li className={`pl-5 -indent-5 ${prop.className}`}>{children}</li>;
};
