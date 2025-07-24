import { defineConfig } from "drizzle-kit";
import { env } from "./lib/env.ts";

export default defineConfig({
  out: "./drizzle",
  schema: "./db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});
