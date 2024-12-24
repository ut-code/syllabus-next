/*
 * /class_data に、現状のシ楽バスのスクレイピングデータを新シ楽バス用に変換したデータを置いている
 * このページで変換後のデータを問題なく利用できることを確認する
 */
import * as classData from "@/../../class_data/data/new/2024A.json";
import { ClassDataType } from "@/app/type";

/**
 * /class_data により生成された授業情報が機能することを確認するコンポーネント
 * @returns コンポーネント
 */
const LoadClass: React.FC = () => {
  // 読み取り
  const classes = classData as ClassDataType[];

  // 1つ授業を取り出し、再度Jsonに変換
  // ( classes[64] には、全ての授業情報プロパティが入力されている )
  let json = JSON.stringify(classes[64], null, 4);

  // 表示
  return <p style={{ whiteSpace: "pre-wrap" }}>{json}</p>;
};

export default LoadClass;
