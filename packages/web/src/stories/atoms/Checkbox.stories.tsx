import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Checkbox from "@/components/FilterUI/UI/Checkbox";

const CheckboxWrapper = ({ initialChecked = false }) => {
  const [checked, setChecked] = useState(initialChecked);

  return (
    <div className="flex items-center space-x-2">
      <Checkbox checked={checked} onChange={setChecked} />
      <span>Sample Checkbox</span>
    </div>
  );
};

const meta = {
  title: "Components/atoms/Checkbox",
  component: CheckboxWrapper,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof CheckboxWrapper>;
export default meta;

type Story = StoryObj<typeof meta>;
export const Unchecked: Story = {
  render: () => <CheckboxWrapper />,
};

export const Checked: Story = {
  render: () => <CheckboxWrapper initialChecked={true} />,
};
