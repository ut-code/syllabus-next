import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer/page";

/**
 * Home コンポーネントは、ホームページの内容を表示します。
 * @returns HTMLを生成するReactコンポーネント。
 */
export default function Home(): JSX.Element {
  return (
    <div>
      <Header />
      <Footer />
    </div>
  );
}
