"use client";

import { Inter } from "next/font/google";
import { useState } from "react";

import "./globals.css";
import { ThemeContext } from "@/app/context";
import type { RegisterType, ThemeType } from "@/app/type";
import { UserContext, type UserContextValue } from "@/app/UserContext";
import { User } from "@/app/utils/user";
import Footer from "./components/Footer";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

/**
 * RootLayout コンポーネントは、アプリケーション全体のレイアウトを定義します。
 *
 * - テーマ（light/dark）の切り替え機能を提供します。
 * - ユーザー情報を管理し、アプリ全体で利用可能にします。
 * @param props コンポーネントのプロパティ
 * @param props.children レイアウト内に表示する子要素
 * @returns HTMLドキュメントのルート要素としてのJSX要素
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /**
   * テーマ管理
   */
  const [theme, setTheme] = useState<ThemeType>("light");

  const userInstance = new User();
  const [user, setUserState] = useState<RegisterType | undefined>(
    userInstance.getUser(),
  );

  const setUser = (newUser: RegisterType) => {
    userInstance.setUser(newUser);
    setUserState(newUser);
  };

  const userContextValue: UserContextValue = {
    user,
    setUser,
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <UserContext.Provider value={userContextValue}>
        <html
          lang="ja"
          className={`bg-surface-container text-text-default ${theme}`}
        >
          <body
            className={`${inter.className} overscroll-none min-width-[300px] pt-12 pb-12`}
          >
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}
