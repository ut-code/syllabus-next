import { useContext } from "react";
import { FaCog } from "react-icons/fa";
import { MdDarkMode, MdOutlineWbSunny } from "react-icons/md";

import { ThemeContext } from "@/app/context";
import type { ThemeProviderValue } from "@/app/type";

/**
 * ヘッダー
 * @returns ヘッダー
 */
export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeProviderValue;
  return (
    <header
      id="global-header"
      className="flex items-center justify-between px-4 py-2 bg-base-200 shadow-md fixed top-0 w-full z-10"
    >
      <div className="flex items-center space-x-2">
        <a href="/" id="syllabus-link" className="text-lg">
          <ruby>
            シ楽バス<rt>しらばす</rt>
          </ruby>
        </a>
        <a
          href="https://utcode.net/"
          target="_blank"
          id="logo-link"
          className="flex items-center space-x-1"
          rel="noopener"
        >
          <span>by</span>
          <img
            src="/utcode_logo.svg"
            alt="ut.code();"
            width={100}
            height={100}
          />
        </a>
      </div>
      <div className="flex space-x-4">
        <button type="button">
          {theme === "light" ? (
            <MdOutlineWbSunny
              size={24}
              onClick={() => setTheme("dark")}
              className="text-base-content"
            />
          ) : (
            <MdDarkMode
              size={24}
              onClick={() => setTheme("light")}
              className="text-base-content"
            />
          )}
        </button>
        <button type="button" id="settings" className="text-base-content">
          <FaCog size={24} />
        </button>
      </div>
    </header>
  );
}
