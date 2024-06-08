import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "シ楽バス",
  description: "ut.code();が開発する東京大学前期教養の時間割アプリ",
};

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
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
