import { cors } from "@elysiajs/cors";
import { Elysia } from "elysia";

export const app = new Elysia({
  prefix: "/api",
}).use(cors());

export type App = typeof app;
