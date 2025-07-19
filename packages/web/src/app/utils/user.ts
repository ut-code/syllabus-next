import type { RegisterType } from "@/app/type";
import { SampleUser } from "@/app/utils/mock_data";
import { env } from "../../lib/env.ts";

export class User {
  private user: RegisterType | undefined;

  constructor() {
    if (typeof window !== "undefined") {
      if (env.mockData) {
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

    if (typeof window !== "undefined" && !env.mockData) {
      localStorage.setItem("user", JSON.stringify(newUser));
    }
  }
}
