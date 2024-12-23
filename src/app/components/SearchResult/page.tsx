// components/Table.tsx
import React from "react";

type SearchResultProps = {
  headers: string[];
  data: Array<Record<string, any>>;
};

export const sampleHeader = ["titleJp", "period", "category", "credit", "classroom", "lecturerJp"];

const SearchResult: React.FC<SearchResultProps> = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <div>
                {headers.map((header, colIndex) => (
                  <span
                  key={colIndex}
                  className="px-4 py-2 border-b text-gray-600"
                  >
                  {`${header}: ${row[header]}` || ""}
                  </span>
                ))}
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchResult;
