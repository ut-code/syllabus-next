import { PreviousClassType } from "./type";
import fs from "fs";
import { argv } from "node:process";
import { NewClassData } from "./newClass";

/**
 * 変換処理本体
 */
function main() {
  /************ コマンドライン引数のチェック ************/
  if (argv.length != 4) {
    throw "パラメーター数が異常です。\n例: npm run start -- 2024 A\n";
  }

  if (argv[2].length < 4) {
    throw "年度は西暦で表現してください。\n例: npm run start -- 2024 A\n";
  }

  if (argv[3] != "S" && argv[3] != "A") {
    throw "セメスターはSまたはAで表現してください。\n例: npm run start -- 2024 A\n";
  }
  const semester = argv[3];
  const year = Number(argv[2]);
  if (Number.isNaN(year)) {
    throw "年度は数字で表現してください。\n例: npm run start -- 2024 A\n";
  }
  /****************************************************/

  // 入力ファイルのパス
  const inputFilepath = `./data/old/${year}${semester}.json`;

  // 出力ファイルのパス
  const outputFilepath = `./data/new/${year}${semester}.json`;

  // ファイルの読み取り
  if (!fs.existsSync(inputFilepath)) {
    throw "ファイルが見つかりませんでした。\n" + inputFilepath + "\n";
  }
  const inputData: string = fs.readFileSync(inputFilepath, "utf8");

  // PreviousClassTypeの配列にパース
  const prevClassData: PreviousClassType[] = JSON.parse(inputData);

  // データを変換
  const converted = prevClassData.map((c) => new NewClassData(c));

  // ファイル出力
  fs.writeFileSync(outputFilepath, JSON.stringify(converted, null, 2));
}

main();
