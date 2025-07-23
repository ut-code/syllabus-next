import type { Meta, StoryObj } from "@storybook/react";
import { SlotDiv } from "@/components/Timetable/slots/slot";
import { DaySlot } from "@/components/Timetable/slots/daySlot";
import { PeriodSlot } from "@/components/Timetable/slots/periodSlot";
import { ClassSlot } from "@/components/Timetable/slots/classSlot";
import { SampleClasses } from "@/components/Sample/ClassModal/SampleClassData";

const meta = {
  title: "Components/Timetable/Slots",
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const BasicSlot: Story = {
  render: () => (
    <div className="w-32 h-16">
      <SlotDiv className="text-sm">
        Basic Slot
      </SlotDiv>
    </div>
  ),
};

export const DaySlotExample: Story = {
  render: () => (
    <div className="w-32 h-16">
      <DaySlot 
        day="mon" 
        daySlotElement={(day) => (
          <div className="font-bold">
            {day === "mon" ? "月" : day}
          </div>
        )}
      />
    </div>
  ),
};

export const PeriodSlotExample: Story = {
  render: () => (
    <div className="w-32 h-16">
      <PeriodSlot 
        period={1} 
        periodSlotElement={(period) => (
          <div className="font-bold text-lg">
            {period}
          </div>
        )}
      />
    </div>
  ),
};

export const IntensivePeriodSlot: Story = {
  render: () => (
    <div className="w-32 h-16">
      <PeriodSlot 
        period="集中" 
        periodSlotElement={(period) => (
          <div className="font-bold text-sm">
            {period}
          </div>
        )}
      />
    </div>
  ),
};

export const ClassSlotWithData: Story = {
  render: () => (
    <div className="w-48 h-32">
      <ClassSlot
        hasSaturday={false}
        day_period={{ day: "mon", period: 1 }}
        classes={[SampleClasses[0]]}
        isIntensiveClass={false}
        classSlotElement={(classes) => (
          <div className="p-1 text-xs">
            {classes.map((cls, idx) => (
              <div key={idx} className="truncate">
                <div className="font-bold">{cls.titleJp}</div>
                <div className="text-gray-600">{cls.classroom}</div>
              </div>
            ))}
          </div>
        )}
      />
    </div>
  ),
};

export const EmptyClassSlot: Story = {
  render: () => (
    <div className="w-48 h-32">
      <ClassSlot
        hasSaturday={false}
        day_period={{ day: "tue", period: 2 }}
        classes={[]}
        isIntensiveClass={false}
        classSlotElement={() => (
          <div className="p-1 text-xs text-gray-400">
            空き時間
          </div>
        )}
      />
    </div>
  ),
};

export const IntensiveClassSlot: Story = {
  render: () => (
    <div className="w-96 h-32">
      <ClassSlot
        hasSaturday={false}
        day_period="集中"
        classes={[SampleClasses[1]]}
        isIntensiveClass={true}
        classSlotElement={(classes) => (
          <div className="p-1 text-xs">
            {classes.map((cls, idx) => (
              <div key={idx} className="truncate">
                <div className="font-bold">{cls.titleJp}</div>
                <div className="text-gray-600">{cls.lecturer}</div>
              </div>
            ))}
          </div>
        )}
      />
    </div>
  ),
};