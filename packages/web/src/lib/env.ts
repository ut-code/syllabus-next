export const env = {
  mockData: boolean(import.meta.env.PUBLIC_MOCK_DATA),
  serverURL: string(import.meta.env.PUBLIC_SERVER_URL, {
    name: "PUBLIC_SERVER_URL",
  }),
};

function boolean(value: string | undefined): boolean {
  return value === "true" || value === "1";
}

/**
 * if value != null -> return value
 * if defaultValue != null -> return defaultValue
 * default -> throws Error
 * @param value 値
 * @param param1
 * @returns 結果
 */
function string(
  value: string | undefined,
  { name, defaultValue }: { name?: string; defaultValue?: string },
): string {
  if (value != null) {
    return value;
  }
  if (defaultValue != null) {
    return defaultValue;
  }
  throw new Error(`${name} is undefined`);
}
