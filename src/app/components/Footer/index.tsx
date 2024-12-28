import Link from "next/link";

/**
 * フッター
 * @returns フッター
 */
export default function Footer() {
  return (
    <footer
      id="global-footer"
      className="flex items-center justify-end p-4 text-white bg-inverse-primary sticky bottom-0 w-full"
    >
      <div className="flex flex-wrap justify-end space-x-4 bg-gray-800">
        <Link
          href="https://forms.gle/stBdKuCsXm8LUdBm8"
          className="hover:bg-surface-variant hover:text-white px-2 py-1 rounded transition duration-200 "
        >
          ご意見
        </Link>
        <Link
          href="/how-to-use"
          className="hover:bg-surface-variant hover:text-white px-2 py-1 rounded transition duration-200"
        >
          使い方
        </Link>
        <Link
          href="/notion"
          className="hover:bg-surface-variant hover:text-white px-2 py-1 rounded transition duration-200"
        >
          履修上の注意
        </Link>
        <Link
          href="#"
          className="hover:bg-surface-variant hover:text-white px-2 py-1 rounded transition duration-200"
        >
          免責事項
        </Link>
        <Link
          href="#"
          className="hover:bg-surface-variant hover:text-white px-2 py-1 rounded transition duration-200"
        >
          About us
        </Link>
        <Link
          href="https://utcode.net/"
          className="hover:bg-surface-variant hover:text-white px-2 py-1 rounded transition duration-200"
          target="_blank"
        >
          ut.code();
        </Link>
      </div>
    </footer>
  );
}
