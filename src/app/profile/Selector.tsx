type Option = {
  value: string;
  data: string;
};

export type SelectorProps = {
  options: Option[];
  value: string;
};
/**
 * Selector ドロップダウンリストを表示するコンポーネント。
 * @param props options: Option[] ドロップダウンリストの選択肢。
 * @returns HTMLを生成するReactコンポーネント。
 */
export default function Selector(props: SelectorProps): JSX.Element {
  const { options, value } = props;

  return (
    <form className="max-w-sm mx-auto">
      <select
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option disabled selected>
          {value}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.data}
          </option>
        ))}
      </select>
    </form>
  );
}
