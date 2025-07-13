import { PreviousClassData } from "./previousClassDaya";
import { dayMappingToEn, type DayPeriod } from "./type";

/**
 * 新シ楽バス仕様の講義情報クラス
 * 構造はほとんど同様なのでPreviousClassTypeを継承する
 */
export class NewClassData extends PreviousClassData {
	/**
	 * 旧シ楽バスのデータをもとにインスタンス化する
	 * @param prevClass 旧シ楽バスのデータ
	 */
	constructor(prevClass: PreviousClassData) {
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
	private toDayPeriod(dayPeriodStrs: string[]): DayPeriod[] | "集中" {
		// 集中講義ならそのまま"集中"を返す
		if (dayPeriodStrs.indexOf("集中") != -1) return "集中";

		// 授業は複数コマ開講されることがあるため、
		// 各曜限を新シラバス仕様に変換
		return dayPeriodStrs.map((dayStr) => {
			// dayStrは必ず2文字
			const day: string = dayStr[0];
			const period = Number(dayStr[1]);

			// 新フォーマットを返す
			return {
				day: dayMappingToEn[day],
				period: period,
			};
		});
	}

	/********* 新仕様特有のプロパティ *********/

	/**
	 * 開講曜限
	 */
	dayPeriod: DayPeriod[] | "集中";

	/**
	 * 教授名(Ja)
	 */
	lecturer: string;
}
