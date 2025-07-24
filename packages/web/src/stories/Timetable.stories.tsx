import type { ClassDataType } from "@packages/models";
import type { Meta, StoryObj } from "@storybook/react";
import Timetable from "@/components/Timetable/timetableFrame";

// Define the default export that configures the component
const meta = {
  title: "Components/Timetable",
  component: Timetable,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Timetable>;

export default meta;
type Story = StoryObj<typeof meta>;

// Helper component for class slots
const ClassSlotElement = (classes: ClassDataType[]) => {
  return (
    <div className="w-full h-full p-1">
      {classes.map((c, i) => (
        <div
          key={i}
          className="mb-1 p-2 bg-blue-100 rounded text-xs overflow-hidden hover:bg-blue-200 transition-colors cursor-pointer"
          title={`${c.titleJp}\n${c.classroom}`}
        >
          <div className="font-semibold truncate">{c.titleJp}</div>
          <div className="text-gray-600 truncate">{c.classroom}</div>
        </div>
      ))}
    </div>
  );
};

// Default story with sample data
export const Default: Story = {
  args: {
    hasSaturday: true,
    classSlotElement: ClassSlotElement,
    periodSlotElement: (period) => (
      <div className="flex items-center justify-center h-full font-medium">
        {period}
      </div>
    ),
    daySlotElement: (day) => (
      <div className="flex items-center justify-center font-medium">
        {day === "mon"
          ? "月"
          : day === "tue"
            ? "火"
            : day === "wed"
              ? "水"
              : day === "thu"
                ? "木"
                : day === "fri"
                  ? "金"
                  : "土"}
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <div className="w-[800px] h-[600px] bg-white p-4 rounded-lg shadow-lg">
        <Story />
      </div>
    ),
  ],
};

// Story without Saturday
export const WithoutSaturday: Story = {
  ...Default,
  args: {
    ...Default.args,
    hasSaturday: false,
  },
};

// Empty timetable story
export const Empty: Story = {
  args: {
    ...Default.args,
    classSlotElement: () => (
      <div className="w-full h-full flex items-center justify-center text-gray-400">
        空きコマ
      </div>
    ),
  },
};
