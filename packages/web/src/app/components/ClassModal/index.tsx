import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { FiX } from "react-icons/fi";
import { type ClassDataType, type DayPeriod, dayMapping } from "@/app/type";
import Item from "./ClassModalItem.tsx";

/**
 * モーダルに渡すprops
 */
interface ModalProps {
  /**
   * モーダルが表示中か否か
   */
  isOpen: boolean;

  /**
   * モーダルの閉じるボタンが押された時のコールバック
   * @param currentIsOpen 現在表示中か否か
   */
  onCloseButtonClicked: (currentIsOpen: boolean) => void;

  /**
   * 授業の情報
   */
  classData: ClassDataType;
}

/**
 * 講義情報のdayPeriodsを文字列に変換する
 * 曜限は"漢字+数字"
 * 集中の場合は"集中"と表示
 *
 * (例)
 * [{ "day": "mon", "period": 1 }, { "day": "wed", "period": 1 } ]
 *    => "月1, 水1"
 * @param dayPeriods 講義の曜限
 * @returns 曜限を表す文字列
 */
function dayPeriodsToString(dayPeriods: DayPeriod[] | "集中"): string {
  if (dayPeriods === "集中") {
    // 集中の場合は"集中"と表示
    return "集中";
  }

  // カンマ区切りで曜限を結合
  return dayPeriods
    .map((dayPeriod) => {
      // 曜日は漢字に変換
      const day = dayMapping[dayPeriod.day];
      // 曜限は、漢字の曜日 + 数字
      return day + dayPeriod.period;
    })
    .join(", ");
}

/**
 * 授業の詳細を表示するモーダル
 * 表示非表示は親コンポーネントで制御することを想定しています
 * useStateなどを利用して実装してください
 *
 * 具体的には
 * shouldOpenをuseStateのisOpenに
 * onCloseButtonClickedの中で、setIsOpenにfalseを渡す想定です
 * @param props モーダルに渡すプロパティ
 * @param props.isOpen このモーダルが表示中か否か
 * @param props.onCloseButtonClicked モーダルの閉じるボタンが押された時のコールバック
 * @param props.classData 授業の情報
 * @returns モーダルコンポーネント
 */
const ClassModalComponent: React.FC<ModalProps> = ({
  isOpen,
  onCloseButtonClicked,
  classData,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={() => onCloseButtonClicked(isOpen)} // モーダル外をクリック(=閉じるボタンをクリック)。連打対策のため、現在表示されているかを渡す
      className="relative z-50" // 他の要素よりも手前に表示
    >
      {/* モーダルが表示されている時メイン画面を覆う */}
      <div className="fixed inset-0 bg-scrim/30" />

      {/* モーダルの本体 */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-[70%] space-y-4 border bg-surface overflow-hidden items-center p-8">
          {/* モーダルのヘッダー */}
          <div className="flex justify-between">
            {/* タイトル (日本語表記 / 英語表記) */}
            <DialogTitle className="font-bold text-xl">
              {classData.titleJp} / {classData.titleEn}
            </DialogTitle>
            {/* 閉じるボタン */}
            {/* onClickでモーダルを閉じる処理を期待する。連打対策のため現在表示されているかを渡す */}
            <button
              type="button"
              onClick={() => onCloseButtonClicked(isOpen)}
              className="text-3xl"
            >
              <FiX />
            </button>
          </div>

          {/* 講義情報 */}
          <div className="max-h-[60vh] overflow-auto bg-surface-container p-4 rounded-lg">
            <Item
              title={"教員"}
              description={`${classData.lecturer} / ${classData.lecturerEn}`}
            />
            <Item
              title={"時間割コード / 共通時間割コード"}
              description={`${classData.code} / ${classData.ccCode}`}
            />
            <Item
              title={"種別"}
              description={`${classData.type} / ${classData.category}`}
            />
            <Item
              title={"学期 / 曜限 / 単位数"}
              description={
                classData.semester +
                " / " +
                dayPeriodsToString(classData.dayPeriod) +
                " / " +
                classData.credits +
                "単位"
              }
            />
            <Item
              title={"授業時間 / 補填方法"}
              description={`${classData.time}分 / ${classData.timeCompensation}`}
            />
            <Item title={"対象クラス"} description={classData.class} />
            <Item title={"教室"} description={classData.classroom} />
            <Item title={"ガイダンス"} description={classData.guidance} />
            <Item title={"履修上の注意"} description={classData.notes} />
            <Item title={"成績評価方法"} description={classData.evaluation} />
            <Item title={"詳細"} description={classData.detail} />
            <Item title={"講義方法"} description={classData.methods} />
            <Item title={"講義計画"} description={classData.schedule} />
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ClassModalComponent;
