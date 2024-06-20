import { createContext } from "react";

import { ThemeProviderValue } from "@/app/type";

/**
 * テーマコンテキスト
 * dark modeとlight modeの切り替えをHeaderでするためのContext
 */
export const ThemeContext = createContext<ThemeProviderValue | null>(null);
