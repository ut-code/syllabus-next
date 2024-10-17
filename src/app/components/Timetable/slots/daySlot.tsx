import { Day } from "@/app/type";
import { SlotDiv, slotProps } from "./slot";

/**
 * 曜日が表示されるスロット要素のプロパティ
 */
interface dayProps extends slotProps {
  day: Day;
}

/**
 * 曜日スロット要素
 * @param props 曜日スロット要素のプロパティ
 * @returns 曜日スロット要素
 */
export const DaySlot: React.FC<dayProps> = (props: dayProps) => {
  return <SlotDiv className="col-span-2 row-span-1">{props.day}</SlotDiv>;
};
