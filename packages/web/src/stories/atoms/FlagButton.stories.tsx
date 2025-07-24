import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FlagButton } from "@/components/FilterUI/UI/FlagButton";

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

const meta = {
  title: "Components/atoms/FlagButton",
  component: FlagButtonWrapper,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FlagButtonWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

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
