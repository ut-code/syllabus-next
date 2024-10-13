import { Day, DayPeriod } from "@/app/type";
import React, { ReactNode } from "react";

export type PosV = "top"|"middle"|"bottom";
export type PosH = "left"|"center"|"right";

interface classProps extends props {
    day_period: DayPeriod
}

interface dayProps extends props {
    day: Day
}

interface periodProps extends props {
    period: 1|2|3|4|5|6|"集中"
}

interface props {
    pos_v: PosV;
    pos_h: PosH;
    children?: ReactNode
    className?: string
}

export const ClassSlot:React.FC<classProps> = (props:classProps)=>{

    return (
        <SlotDiv pos_v={props.pos_v} pos_h={props.pos_h} className={`col-span-2 row-span-2 ${props.className}`}>
            <div>
                {props.day_period.day} {props.day_period.period}
                </div>
                </SlotDiv>
    );
}

export const DaySlot:React.FC<dayProps> = (props:dayProps)=>{
    return (
        <SlotDiv className="col-span-2 row-span-1" pos_v={props.pos_v} pos_h={props.pos_h}>
            {props.day} 
        </SlotDiv>
    );
}

export const PeriodSlot:React.FC<periodProps> = (props:periodProps)=>{
    return (
        <SlotDiv className="col-span-1 row-span-2" pos_v={props.pos_v} pos_h={props.pos_h}>
            {props.period}
        </SlotDiv>
    );
}


export const SlotDiv:React.FC<props> = (prop)=>{

    let corner = "";
    if(prop.pos_v == "top"){
        if(prop.pos_h == "left"){
            corner = "rounded-tl"
        }
        if(prop.pos_h == "right"){
            corner = "rounded-tr"
        }
    }

    if(prop.pos_v == "bottom"){
        if(prop.pos_h == "left"){
            corner = "rounded-bl"
        }
        if(prop.pos_h == "right"){
            corner = "rounded-br"
        }
    }

    return (
        <div className={`border-outline border-solid flex justify-center items-center ${corner}
            ${prop.pos_v == "bottom"?"border-y":"border-t"}
            ${prop.pos_h == "right"?"border-x":"border-l"}
            ${prop.className}
            `}>
                {prop.children}
            </div>
    );
}