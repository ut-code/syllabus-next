import { Day } from "@/app/type";
import { Period, SlotDiv, slotProps } from "./slot";

/**
 * 時限が表示されるスロット要素のプロパティ
 */
interface periodProps extends slotProps {
  period: Period;
}

/**
 * 時限スロット要素
 * @param props 時限スロット要素のプロパティ
 * @returns 時限スロット要素
 */
export const PeriodSlot: React.FC<periodProps> = (props: periodProps) => {
  return <SlotDiv className="col-span-1 row-span-2">{props.period}</SlotDiv>;
};
