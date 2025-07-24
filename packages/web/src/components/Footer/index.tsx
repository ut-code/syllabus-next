import { Link } from "react-router-dom";

/**
 * フッター
 * @returns フッター
 */
export default function Footer() {
  return (
    <footer className="flex items-center justify-end px-4 py-2 text-base-content bg-base-300 fixed bottom-0 w-full">
      <div className="flex flex-wrap justify-end space-x-4">
        <a
          href="https://forms.gle/stBdKuCsXm8LUdBm8"
          className="link link-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          ご意見
        </a>
        <Link to="/how-to-use" className="link link-btn">
          使い方
        </Link>
        <Link to="/notion" className="link link-btn">
          履修上の注意
        </Link>
        <Link to="/disclaimer" className="link link-btn">
          免責事項
        </Link>
        <Link to="/aboutus" className="link link-btn">
          About us
        </Link>
        <a
          href="https://utcode.net/"
          className="link link-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          ut.code();
        </a>
      </div>
    </footer>
  );
}
