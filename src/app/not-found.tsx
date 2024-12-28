import Logo from "@/../../public/syllabus_icon.svg";
import Image from "next/image";

/**
 * NotFound コンポーネントは、存在しないリンクへのアクセス時に表示されます。
 * @returns HTMLを生成するReactコンポーネント。
 */
export default function NotFound(): JSX.Element {
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
                <span className="max-md:hidden">404 - </span>Not Found
              </div>

              {/* サブタイトル (幅に余裕があるときに表示) */}
              <p
                className={`mt-12 text-2xl text-center md:text-left max-sm:hidden`}
              >
                お探しのページは見つかりませんでした。リンクに誤りはありませんか？
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
