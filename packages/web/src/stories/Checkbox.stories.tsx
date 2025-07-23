import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Checkbox from "@/components/FilterUI/UI/Checkbox";

const meta = {
  title: "Components/UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const CheckboxWrapper = ({ initialChecked = false }) => {
  const [checked, setChecked] = useState(initialChecked);

  return (
    <div className="flex items-center space-x-2">
      <Checkbox checked={checked} onChange={setChecked} />
      <label>Sample Checkbox</label>
    </div>
  );
};

export const Unchecked: Story = {
  render: () => <CheckboxWrapper />,
};

export const Checked: Story = {
  render: () => <CheckboxWrapper initialChecked={true} />,
};