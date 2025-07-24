import type { User } from "@packages/models";
import { createContext, useContext } from "react";

/**
 * UserContext で管理するデータの型定義
 */
export type UserContextValue = {
  user: User | undefined;
  setUser: (newUser: User) => void;
};

/**
 * ユーザー情報を提供するContext
 */
export const UserContext = createContext<UserContextValue | null>(null);

/**
 * カスタムフック: useUser
 * @returns UserContextValue - ユーザー情報とその更新関数を提供するオブジェクト
 */
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
