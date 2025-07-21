import { QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeContext } from "@/app/context";
import type { RegisterType, ThemeType } from "@/app/type";
import { UserContext, type UserContextValue } from "@/app/UserContext";
import { User } from "@/app/utils/user";
import Footer from "./app/components/Footer/index.tsx";
import Header from "./app/components/Header/index.tsx";
import { queryClient } from "./lib/tanstack/client.ts";
import AboutUs from "./pages/AboutUs.tsx";
import Disclaimer from "./pages/Disclaimer.tsx";
import Home from "./pages/Home.tsx";
import HowToUse from "./pages/HowToUse.tsx";
import NotFound from "./pages/NotFound.tsx";
import Notion from "./pages/Notion.tsx";
import Profile from "./pages/Profile.tsx";
import SignIn from "./pages/SignIn.tsx";
import UserManagement from "./sample/UserManagement.tsx";

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
  // the only proper use of useEffect
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

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
        <QueryClientProvider client={queryClient}>
          <div
            className={`bg-surface-container text-text-default min-h-screen`}
          >
            <BrowserRouter>
              <div className="overscroll-none min-width-[300px] pt-12 pb-12">
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/aboutus" element={<AboutUs />} />
                  <Route path="/disclaimer" element={<Disclaimer />} />
                  <Route path="/how-to-use" element={<HowToUse />} />
                  <Route path="/notion" element={<Notion />} />
                  <Route path="/sample" element={<UserManagement />} />
                  <Route path="/sign-in" element={<SignIn />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
              </div>
            </BrowserRouter>
          </div>
        </QueryClientProvider>
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}
