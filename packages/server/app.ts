import { Elysia } from "elysia";
import { usersRouter } from "./router/users.sample";

export const app = new Elysia({
  prefix: "/api",
}).group("/users", (app) => app.use(usersRouter));

export type App = typeof app;
