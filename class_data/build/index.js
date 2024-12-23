"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const node_process_1 = require("node:process");
const newClass_1 = require("./newClass");
/**
 * 変換処理本体
 */
function main() {
  /************ コマンドライン引数のチェック ************/
  if (node_process_1.argv.length != 4) {
    throw "パラメーター数が異常です。\n例: npm run start -- 2024 A\n";
  }
  if (node_process_1.argv[2].length < 4) {
    throw "年度は西暦で表現してください。\n例: npm run start -- 2024 A\n";
  }
  if (node_process_1.argv[3] != "S" && node_process_1.argv[3] != "A") {
    throw "セメスターはSまたはAで表現してください。\n例: npm run start -- 2024 A\n";
  }
  const semester = node_process_1.argv[3];
  const year = Number(node_process_1.argv[2]);
  if (Number.isNaN(year)) {
    throw "年度は数字で表現してください。\n例: npm run start -- 2024 A\n";
  }
  /****************************************************/
  // 入力ファイルのパス
  const inputFilepath = `./data/old/${year}${semester}.json`;
  // 出力ファイルのパス
  const outputFilepath = `./data/new/${year}${semester}.json`;
  // ファイルの読み取り
  if (!fs_1.default.existsSync(inputFilepath)) {
    throw "ファイルが見つかりませんでした。\n" + inputFilepath + "\n";
  }
  const inputData = fs_1.default.readFileSync(inputFilepath, "utf8");
  // PreviousClassTypeの配列にパース
  const prevClassData = JSON.parse(inputData);
  // データを変換
  const converted = prevClassData.map((c) => new newClass_1.NewClassData(c));
  // ファイル出力
  fs_1.default.writeFileSync(
    outputFilepath,
    JSON.stringify(converted, null, 2),
  );
}
main();
