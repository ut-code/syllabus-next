"use client";

import { Inter } from "next/font/google";
import { useState } from "react";

import "./globals.css";
import { ThemeType, ThemeProviderValue } from "@/type";
import { ThemeContext } from "@/context";

const inter = Inter({ subsets: ["latin"] });

/**
 * RootLayout コンポーネントは、アプリケーション全体のレイアウトを定義します。
 * @param props - コンポーネントのプロパティ。
 * @param props.children - レイアウト内に表示する子要素。
 * @returns HTMLドキュメントのルート要素としてのJSX要素。
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState<ThemeType>("light");
  return (
    // ライト/ダークモードで背景色と文字色を変更
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      <html
        lang="ja"
        className={`bg-surface-container text-text-default ${theme}`}
      >
        <body className={inter.className}>{children}</body>
      </html>
    </ThemeContext.Provider>
  );
}
