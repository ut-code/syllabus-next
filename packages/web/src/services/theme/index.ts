import { createContext, useContext, useEffect, useState } from "react";
import type { ThemeService } from "@/services/theme/types";
import type { Theme } from "./types.ts";

/**
 * テーマコンテキスト
 * dark modeとlight modeの切り替えをHeaderでするためのContext
 */
export const ThemeContext = createContext<ThemeService | null>(null);

export function useThemeProvider() {
  const [theme, setTheme] = useState<Theme>("light");

  // the only proper use of useEffect
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return {
    theme,
    setTheme,
  };
}

export function useTheme() {
  const themeService = useContext(ThemeContext);

  if (!themeService) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return themeService;
}
