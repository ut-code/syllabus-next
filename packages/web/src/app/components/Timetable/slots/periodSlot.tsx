import { type Period, SlotDiv, type slotProps } from "./slot";

/**
 * 時限が表示されるスロット要素のプロパティ
 */
interface periodProps extends slotProps {
  period: Period | "集中";
  periodSlotElement: React.FC<Period | "集中">;
}

/**
 * 時限スロット要素
 * @param props 時限スロット要素のプロパティ
 * @returns 時限スロット要素
 */
export const PeriodSlot: React.FC<periodProps> = (props: periodProps) => {
  return (
    <SlotDiv className="col-span-1 row-span-2">
      {props.periodSlotElement(props.period)}
    </SlotDiv>
  );
};
