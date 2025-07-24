import type { Preview } from "@storybook/react";
import "../src/app.css";
import { ThemeContext, useThemeProvider } from "@/services/theme/index.ts";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [
  (Story: () => React.ReactNode) => {
    const provider = useThemeProvider();
    return (
      <ThemeContext.Provider value={provider}>
        <Story />
      </ThemeContext.Provider>
    );
  },
];
