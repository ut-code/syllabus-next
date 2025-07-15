import { Link } from "react-router-dom";

/**
 * フッター
 * @returns フッター
 */
export default function Footer() {
  return (
    <footer
      id="global-footer"
      className="flex items-center justify-end px-4 py-2 text-white bg-inverse-primary fixed bottom-0 w-full"
    >
      <div className="flex flex-wrap justify-end space-x-4 bg-gray-800">
        <a
          href="https://forms.gle/stBdKuCsXm8LUdBm8"
          className="hover:bg-surface-variant hover:text-white px-2 py-1 rounded-sm transition duration-200 "
          target="_blank"
          rel="noopener noreferrer"
        >
          ご意見
        </a>
        <Link
          to="/how-to-use"
          className="hover:bg-surface-variant hover:text-white px-2 py-1 rounded-sm transition duration-200"
        >
          使い方
        </Link>
        <Link
          to="/notion"
          className="hover:bg-surface-variant hover:text-white px-2 py-1 rounded-sm transition duration-200"
        >
          履修上の注意
        </Link>
        <Link
          to="/disclaimer"
          className="hover:bg-surface-variant hover:text-white px-2 py-1 rounded-sm transition duration-200"
        >
          免責事項
        </Link>
        <Link
          to="/aboutus"
          className="hover:bg-surface-variant hover:text-white px-2 py-1 rounded-sm transition duration-200"
        >
          About us
        </Link>
        <a
          href="https://utcode.net/"
          className="hover:bg-surface-variant hover:text-white px-2 py-1 rounded-sm transition duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          ut.code();
        </a>
      </div>
    </footer>
  );
}
