import { panic } from "./panic.ts";

export function string(name: string) {
  return (
    string_optional(name) ?? panic(`Environment variable ${name} not found`)
  );
}
export function string_optional(name: string): string | undefined {
  return process.env[name];
}
export function boolean(name: string, fallback?: boolean): boolean {
  const val = string_optional(name);
  if (val === "1" || val === "true") {
    return true;
  }
  if (val === "0" || val === "false") {
    return false;
  }
  if (fallback !== undefined) return fallback;
  panic(`Environment variable ${name} not found`);
}
