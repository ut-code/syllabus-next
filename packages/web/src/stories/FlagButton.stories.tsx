import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FlagButton } from "@/components/FilterUI/UI/FlagButton";

const meta = {
  title: "Components/UI/FlagButton",
  component: FlagButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FlagButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const FlagButtonWrapper = ({
  initialSelected = false,
  label = "Sample Button",
}) => {
  const [isSelected, setIsSelected] = useState(initialSelected);

  return (
    <FlagButton
      label={label}
      isSelected={isSelected}
      onClick={() => setIsSelected(!isSelected)}
    />
  );
};

export const Unselected: Story = {
  render: () => <FlagButtonWrapper />,
};

export const Selected: Story = {
  render: () => <FlagButtonWrapper initialSelected={true} />,
};

export const SemesterButton: Story = {
  render: () => <FlagButtonWrapper label="S1" />,
};

export const CategoryButton: Story = {
  render: () => <FlagButtonWrapper label="基礎" />,
};
