import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Checkbox from "@/components/FilterUI/UI/Checkbox";
import { FilterCard } from "@/components/FilterUI/UI/FilterCard";
import { FlagButton } from "@/components/FilterUI/UI/FlagButton";

const FilterCardExample = () => {
  const [selectedSemester, setSelectedSemester] = useState<string | null>(null);
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  return (
    <div className="space-y-4">
      <FilterCard title="学期">
        <div className="flex gap-2 p-4">
          {["S1", "S2", "A1", "A2"].map((semester) => (
            <FlagButton
              key={semester}
              label={semester}
              isSelected={selectedSemester === semester}
              onClick={() =>
                setSelectedSemester(
                  selectedSemester === semester ? null : semester,
                )
              }
            />
          ))}
        </div>
      </FilterCard>

      <FilterCard title="評価方法">
        <div className="space-y-2 p-4">
          {Object.entries(checkboxes).map(([key, checked]) => (
            <div key={key} className="flex items-center space-x-2">
              <Checkbox
                checked={checked}
                onChange={(newChecked) =>
                  setCheckboxes((prev) => ({ ...prev, [key]: newChecked }))
                }
              />
              <span>評価オプション {key.slice(-1)}</span>
            </div>
          ))}
        </div>
      </FilterCard>
    </div>
  );
};

const meta = {
  title: "Components/atoms/FilterCard",
  component: FilterCardExample,
  tags: [],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FilterCardExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <FilterCardExample />,
};
