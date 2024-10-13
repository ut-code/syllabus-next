import { Day, dayMapping } from "@/app/type";
import { ClassSlot, DaySlot, PeriodSlot, PosV, SlotDiv } from "./slot";

const day:Day[] = ["mon","tue","wed","thu","fri"];

function slotRow(period:1|2|3|4|5|6|"集中",pos_v:PosV, hasSaturday: boolean){
    if(hasSaturday){
        day.push("sat");
    }
    return (<>

    {/* 曜限のヘッダー */}
            <PeriodSlot period={period} pos_v={pos_v} pos_h={"left"}>{period}</PeriodSlot>
        {
        day.map(d=>{
        return <ClassSlot day_period={{day:d, period:period}}
         pos_v={pos_v} pos_h={d==day[day.length-1]?"right":"left"}/>
    })
    }
    </>
    );
}

const Timetable: React.FC = () => {
    const period:(1|2|3|4|5|6|"集中")[] = [1,2,3,4,5,6];
    return (
        <div className="grid grid-cols-11 grid-flow-row h-full">

        {/* 左上の空白 */}
        <SlotDiv pos_v={"top"} pos_h={"left"} />

        {/* 曜日のヘッダー */}
        {
            day.map(d=>{
                return <DaySlot day={d} pos_v={"top"} 
                pos_h={d==day[day.length-1]?"right":"center"}
                >{period}</DaySlot>
            })
        }

            {
                period.map(d=>{
                    return slotRow(d,"middle", false);
                })
            }

            {/* 集中のヘッダー */}
            <PeriodSlot period={"集中"} pos_v={"bottom"} pos_h={"left"}/>

            {/* 集中の講義スロット */}
            <ClassSlot className="col-span-10 row-span-2" day_period={{day:"mon",period:"集中"}}
         pos_v={"bottom"} pos_h={"right"}/>
        </div>

    )
};
  
export default Timetable;