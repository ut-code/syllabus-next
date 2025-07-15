import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ThemeContext } from "@/app/context";
import type { RegisterType, ThemeType } from "@/app/type";
import { UserContext, type UserContextValue } from "@/app/UserContext";
import { User } from "@/app/utils/user";
import Footer from "./app/components/Footer";
import Header from "./app/components/Header";

import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Disclaimer from "./pages/Disclaimer";
import HowToUse from "./pages/HowToUse";
import Notion from "./pages/Notion";
import NotFound from "./pages/NotFound";

/**
 * App コンポーネントは、アプリケーション全体のレイアウトを定義します。
 *
 * - テーマ（light/dark）の切り替え機能を提供します。
 * - ユーザー情報を管理し、アプリ全体で利用可能にします。
 * @returns アプリケーションのルートコンポーネント
 */
export default function App() {
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
        <div className={`bg-surface-container text-text-default ${theme} min-h-screen`}>
          <BrowserRouter>
            <div className="overscroll-none min-width-[300px] pt-12 pb-12">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route path="/disclaimer" element={<Disclaimer />} />
                <Route path="/how-to-use" element={<HowToUse />} />
                <Route path="/notion" element={<Notion />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </div>
          </BrowserRouter>
        </div>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}