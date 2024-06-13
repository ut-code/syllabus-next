import Link from "next/link";

/**
 * フッター
 * @returns フッター
 */
export default function Footer() {
  return (
    <footer
      id="global-footer"
      className="flex justify-end items-center p-4 text-white fixed bottom-0 w-full"
    >
      <div className="flex flex-wrap justify-end space-x-4">
        <Link
          href="https://forms.gle/stBdKuCsXm8LUdBm8"
          className="hover:bg-gray-700 hover:text-white px-2 py-1 rounded transition duration-200"
        >
          ご意見
        </Link>
        <Link
          href="howToUse.html"
          className="hover:bg-gray-700 hover:text-white px-2 py-1 rounded transition duration-200"
        >
          使い方
        </Link>
        <Link
          href="notion.html"
          className="hover:bg-gray-700 hover:text-white px-2 py-1 rounded transition duration-200"
        >
          履修上の注意
        </Link>
        <Link
          href="disclaimer.html"
          className="hover:bg-gray-700 hover:text-white px-2 py-1 rounded transition duration-200"
        >
          免責事項
        </Link>
        <Link
          href="aboutus.html"
          className="hover:bg-gray-700 hover:text-white px-2 py-1 rounded transition duration-200"
        >
          About us
        </Link>
        <Link
          href="https://utcode.net/"
          className="hover:bg-gray-700 hover:text-white px-2 py-1 rounded transition duration-200"
          target="_blank"
        >
          ut.code();
        </Link>
      </div>
    </footer>
  );
}
