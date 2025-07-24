import type { Meta, StoryObj } from "@storybook/react";
import SearchResult, { sampleHeader } from "@/components/SearchResult";

const meta = {
  title: "Components/SearchResult",
  component: SearchResult,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof SearchResult>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  {
    titleJp: "数理科学基礎",
    period: "月1, 水1",
    category: "数理科学",
    credit: 2,
    classroom: "駒場5号館 523教室",
    lecturer: "逆井 卓也",
  },
  {
    titleJp: "生命科学実験α",
    period: "集中",
    category: "基礎実験",
    credit: 1,
    classroom: "その他(学内等)",
    lecturer: "市橋 伯一",
  },
  {
    titleJp: "英語二列W(ALESA)",
    period: "月2",
    category: "既修外国語",
    credit: 2,
    classroom: "駒場5号館 516教室",
    lecturer: "Simon Perry",
  },
];

export const Default: Story = {
  args: {
    headers: sampleHeader,
    data: sampleData,
  },
};

export const EmptyResults: Story = {
  args: {
    headers: sampleHeader,
    data: [],
  },
};

export const SingleResult: Story = {
  args: {
    headers: sampleHeader,
    data: [sampleData[0]],
  },
};
