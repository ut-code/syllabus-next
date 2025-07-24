import { cors } from "@elysiajs/cors";
import { Elysia } from "elysia";
import { betterAuth } from "./lib/auth.ts";

export const app = new Elysia({
  prefix: "/api",
})
  .use(betterAuth)
  .use(cors());

export type App = typeof app;
