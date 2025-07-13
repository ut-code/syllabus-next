import type React from "react";

type SearchResultProps = {
  headers: string[];
  // biome-ignore lint/suspicious/noExplicitAny: TODO: 直して
  data: Array<Record<string, any>>;
};

export const sampleHeader = [
  "titleJp",
  "period",
  "category",
  "credit",
  "classroom",
  "lecturer",
];

const SearchResult: React.FC<SearchResultProps> = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="m-0 h-full w-full table-fixed border-collapse border-none">
        <tbody className="cursor-pointer">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border border-t border-b border-l-0 border-r-0 border-gray-300"
            >
              <td className="px-[0.25em] py-[5px]">
                <div>
                  {headers.map((header, colIndex) => (
                    <span key={colIndex} className="px-[1em] inline-block">
                      {`${header}: ${row[header]}` || ""}
                    </span>
                  ))}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResult;
