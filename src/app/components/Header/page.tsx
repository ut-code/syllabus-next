import Image from "next/image";
import { FaSearch, FaCog } from "react-icons/fa";

export const Header = () => {
  return (
    <header
      id="global-header"
      className="flex items-center justify-between px-4 py-2 bg-white shadow-md fixed w-full z-10"
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
          className="flex items-center space-x-1 text-green-600"
        >
          <span>by</span>
          <Image
            src="/utcode_logo.svg"
            alt="ut.code();"
            width={100}
            height={100}
          />
        </a>
      </div>
      <div className="flex space-x-4">
        <button id="settings" className="text-green-600">
          <FaCog size={24} />
        </button>
      </div>
    </header>
  );
};
