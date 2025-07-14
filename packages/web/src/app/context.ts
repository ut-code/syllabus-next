import { createContext } from "react";

import type { ThemeProviderValue } from "@/app/type";

/**
 * テーマコンテキスト
 * dark modeとlight modeの切り替えをHeaderでするためのContext
 */
export const ThemeContext = createContext<ThemeProviderValue | null>(null);
