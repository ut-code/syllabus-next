"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewClassData = void 0;
const previousClassDaya_1 = require("./previousClassDaya");
const type_1 = require("./type");
/**
 * 新シ楽バス仕様の講義情報クラス
 * 構造はほとんど同様なのでPreviousClassTypeを継承する
 */
class NewClassData extends previousClassDaya_1.PreviousClassData {
  /**
   * 旧シ楽バスのデータをもとにインスタンス化する
   * @param prevClass 旧シ楽バスのデータ
   */
  constructor(prevClass) {
    super();
    /********* プロパティのコピー *********/
    Object.assign(this, prevClass);
    /********* 新仕様特有のプロパティ *********/
    if (!prevClass.periods) throw "入力データのperiodsがundefinedです";
    this.dayPeriod = this.toDayPeriod(prevClass.periods);
    this.periods = undefined;
    if (!prevClass.lecturerJp) throw "入力データのlecturerJpがundefinedです";
    this.lecturer = prevClass.lecturerJp;
    this.lecturerJp = undefined;
  }
  /**
   * 現行シ楽バスの曜限表現を新シラバス仕様に変換する
   * @param dayPeriodStrs 旧シラバスの曜限表現
   * @returns 新シラバスの曜限表現
   */
  toDayPeriod(dayPeriodStrs) {
    // 集中講義ならそのまま"集中"を返す
    if (dayPeriodStrs.indexOf("集中") != -1) return "集中";
    // 授業は複数コマ開講されることがあるため、
    // 各曜限を新シラバス仕様に変換
    return dayPeriodStrs.map((dayStr) => {
      // dayStrは必ず2文字
      const day = dayStr[0];
      const period = Number(dayStr[1]);
      // 新フォーマットを返す
      return {
        day: type_1.dayMappingToEn[day],
        period: period,
      };
    });
  }
}
exports.NewClassData = NewClassData;
