import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import ClassModal from "@/components/ClassModal/index.tsx";
import { SampleClasses } from "@/components/Sample/ClassModal/SampleClassData";

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

const meta = {
  title: "Components/ClassModal",
  component: ClassModalWrapper,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof ClassModalWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ClassModalWrapper />,
};
