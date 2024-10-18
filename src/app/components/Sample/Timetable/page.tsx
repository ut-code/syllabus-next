"use client";
import { ClassDataType } from "@/app/type";
import TimetableFrame from "../../Timetable/timetableFrame";
import { useState } from "react";
import ClassModalComponent from "../../ClassModal";

const TimetableComponent: React.FC = () => {
  return (
    <div className="m-5 w-5/6 h-[800px] bg-surface">
      <TimetableFrame
        hasSaturday={true}
        classSlotElement={ClassSlotElement}
        periodSlotElement={(p) => <div>{p}</div>}
        daySlotElement={(d) => <div>{d}</div>}
      />
    </div>
  );
};

function ClassSlotElement(classes: ClassDataType[]) {
  const [classForModal, setClassForModal] = useState<ClassDataType>();

  return (
    <>
      {/* スロット内の要素 */}
      <div className="w-full h-full flex items-center justify-center">
        {classes.map((c, i) => {
          return (
            <div
              className="flex w-full h-full items-center justify-center min-w-0 m-1"
              key={i}
              onClick={() => setClassForModal(c)}
            >
              <div className="cursor-pointer bg-secondary/10 w-full h-5/6 max-w-40">
                <div className="m-2 text-sm font-bold truncate">
                  {c.titleJp}
                </div>
                <div className="m-2 text-xs text-text-default/50 text-wrap">
                  {c.classroom}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 講義がクリックされたとき、詳細を表示 */}
      {classForModal && (
        <ClassModalComponent
          isOpen={true}
          onCloseButtonClicked={() => setClassForModal(undefined)}
          classData={classForModal}
        />
      )}
    </>
  );
}

export default TimetableComponent;
