import type { User } from "@packages/models";
import { QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  UserContext,
  type UserContextValue,
} from "@/services/user/UserContext.ts";
import { UserService } from "@/services/user/user.ts";
import Footer from "./components/Footer/index.tsx";
import Header from "./components/Header/index.tsx";
import { queryClient } from "./lib/tanstack/client.ts";
import AboutUs from "./pages/AboutUs.tsx";
import Disclaimer from "./pages/Disclaimer.tsx";
import Home from "./pages/Home.tsx";
import HowToUse from "./pages/how-to-use/page.tsx";
import NotFound from "./pages/NotFound.tsx";
import Notion from "./pages/Notion.tsx";
import { ThemeContext, useThemeProvider } from "./services/theme/index.ts";
import Profile from "./pages/Profile.tsx";
import SignIn from "./pages/SignIn.tsx";

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
  const themeService = useThemeProvider();

  const userInstance = new UserService();
  const [user, setUserState] = useState<User | undefined>(
    userInstance.getUser(),
  );

  const setUser = (newUser: User) => {
    userInstance.setUser(newUser);
    setUserState(newUser);
  };

  const userContextValue: UserContextValue = {
    user,
    setUser,
  };

  return (
    <ThemeContext.Provider value={themeService}>
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
