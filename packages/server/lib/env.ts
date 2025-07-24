import * as e from "./utils/environment.ts";

export const env = {
  DATABASE_URL: e.string("DATABASE_URL"),
  PUBLIC_WEB_URL: e.string("PUBLIC_WEB_URL"),
  GOOGLE_CLIENT_ID: e.string("GOOGLE_CLIENT_ID"),
  GOOGLE_CLIENT_SECRET: e.string("GOOGLE_CLIENT_SECRET"),

  SERVER_PORT: e.string_optional("SERVER_PORT"),
  PORT: e.string_optional("PORT"),
  PUBLIC_SERVER_URL: e.string_optional("PUBLIC_SERVER_URL"),

  PUBLIC_MOCK_DATA: e.boolean("PUBLIC_MOCK_DATA"),
};
