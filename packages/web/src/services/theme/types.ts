export type Theme = "light" | "dark";
export type ThemeService = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
