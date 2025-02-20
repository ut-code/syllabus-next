"use client";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Logo from "@/../../public/syllabus_icon.svg";
import Image from "next/image";
import { useUser } from "@/app/UserContext";
import { RegisterType } from "@/app/type";

import { useEffect } from "react";

/**
 * Home コンポーネントは、ホームページの内容を表示します。
 * @returns HTMLを生成するReactコンポーネント。
 */
export default function Home(): JSX.Element {
  const { user, setUser } = useUser();
  return (
    <>
      {/* バックグラウンド画像 */}
      <div className={`absolute right-0 bottom-0 w-[800px] h-full`}>
        <Image
          className="opacity-40 object-cover"
          src={"/backgroundImage.png"}
          alt="backgroundImage"
          fill
        />
      </div>

      <div className="flex items-center min-h-screen mx-12 md:ml-36">
        {/* タイトルとボタンを中央ぞろえするためgridを使用 */}
        <div className="grid grid-column-1">
          {/* タイトル */}
          <div className="relative flex justify-center items-center rounded-lg z-10">
            {/* ロゴ(解像度に応じてサイズを変える) */}
            <div
              className={`relative w-[100px] h-[100px] md:w-[150px] md:h-[150px]`}
            >
              <Image
                src={Logo}
                alt="Logo"
                className="mr-4 object-contain"
                fill
              />
            </div>

            {/* タイトル&サブタイトル */}
            <div className="m-4">
              {/* タイトル */}
              <div className={`text-6xl font-bold break-keep text-left`}>
                {/* 幅に余裕があるときに表示 */}
                <span className="max-md:hidden">Welcome to </span>シ楽バス
              </div>

              {/* サブタイトル (幅に余裕があるときに表示) */}
              <p
                className={`mt-12 text-2xl text-center md:text-left max-sm:hidden`}
              >
                全ての講義情報を、いつも手元に。
              </p>
            </div>
          </div>

          {/* はじめるボタン */}
          <div className="flex items-center justify-center">
            <div className="rounded-full bg-primary text-on-primary w-36 text-center p-3 mt-24 hover:bg-primary/90 font-bold">
              はじめる
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
