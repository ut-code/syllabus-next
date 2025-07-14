"use client";

import type { RegisterType } from "@/app/type";
import { SampleUser } from "@/app/utils/mock_data";

const MODE = process.env.NEXT_PUBLIC_MODE;

export class User {
  private user: RegisterType | undefined;

  constructor() {
    if (typeof window !== "undefined") {
      if (MODE === "mock") {
        this.user = SampleUser;
      } else {
        const storedUser = localStorage.getItem("user");
        this.user = storedUser ? JSON.parse(storedUser) : undefined;
      }
    } else {
      this.user = undefined;
    }
  }

  /**
   * ユーザー情報を取得します。
   * undefinedの場合は、未登録とみなします。
   * @returns 現在のユーザー情報
   */
  getUser(): RegisterType | undefined {
    return this.user;
  }

  /**
   * ユーザー情報を更新します。
   * クライアントサイドのみで localStorage を更新します。
   * @param newUser 新しいユーザー情報
   */
  setUser(newUser: RegisterType): void {
    this.user = newUser;

    if (typeof window !== "undefined" && MODE !== "mock") {
      localStorage.setItem("user", JSON.stringify(newUser));
    }
  }
}
