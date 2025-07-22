import type { User } from "@packages/models";
import { SampleUser } from "@/services/user/mock_data.ts";
import { env } from "../../lib/env.ts";

// TODO: サーバーとデータを送受信する
export class UserService {
  private user: User | undefined;

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
  getUser(): User | undefined {
    return this.user;
  }

  /**
   * ユーザー情報を更新します。
   * クライアントサイドのみで localStorage を更新します。
   * @param newUser 新しいユーザー情報
   */
  setUser(newUser: User): void {
    this.user = newUser;

    if (typeof window !== "undefined" && !env.mockData) {
      localStorage.setItem("user", JSON.stringify(newUser));
    }
  }
}
