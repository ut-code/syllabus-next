import Header from "@/app/components/Header";
import Logo from "@/../../public/syllabus_icon.svg"
import Image from "next/image";
/**
 * Home コンポーネントは、ホームページの内容を表示します。
 * @returns HTMLを生成するReactコンポーネント。
 */
export default function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <div className="flex items-center min-h-screen ml-24">
        <div className="absolute right-0 w-[800px] h-full">
        <Image className="opacity-40" src={"/backgroundImage.png"} 
        alt="backgroundImage" layout={'fill'} objectFit={'cover'}/>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative flex items-center rounded-lg z-10">
            <Image src={Logo} alt="Logo" width={150} height={150} className="mr-4" />
            <div className="flex items-center">
              <div className="m-4">
                <h1 className="text-6xl font-bold mb-12">Welcome to シ楽バス</h1>
                <p className="text-2xl">全ての講義情報を、いつも手元に。</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-primary text-on-primary w-36 text-center p-4 mt-24 hover:bg-primary/90 font-bold">はじめる</div>
        </div>
      </div>
    </div>
  );
}
