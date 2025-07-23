import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import ClassModal from "@/components/ClassModal/index.tsx";
import { SampleClasses } from "@/components/Sample/ClassModal/SampleClassData";
import { fn } from "@storybook/test";

const meta = {
  title: "Components/ClassModal",
  component: ClassModal,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    isOpen: false,
    onCloseButtonClicked: fn(),
  },
} satisfies Meta<typeof ClassModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const ClassModalWrapper = ({ classData = SampleClasses[0] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button 
        type="button"
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-primary text-white rounded"
      >
        Open Modal
      </button>
      <ClassModal
        isOpen={isOpen}
        onCloseButtonClicked={() => setIsOpen(false)}
        classData={classData}
      />
    </div>
  );
};

export const Default: Story = {
  render: () => <ClassModalWrapper />,
};

export const IntensiveCourse: Story = {
  render: () => <ClassModalWrapper classData={SampleClasses[1]} />,
};

export const EnglishCourse: Story = {
  render: () => <ClassModalWrapper classData={SampleClasses[2]} />,
};

export const LiteratureCourse: Story = {
  render: () => <ClassModalWrapper classData={SampleClasses[3]} />,
};