"use client";

import Header from "@/app/components/Header";

import { ProfileFactory } from "@/factory";

/**
 * Home コンポーネントは、ホームページの内容を表示します。
 * @returns HTMLを生成するReactコンポーネント。
 */
export default function Home(): JSX.Element {
  const profile = ProfileFactory.createProfile("localStorage");
  return (
    <div>
      <Header />
    </div>
  );
}
