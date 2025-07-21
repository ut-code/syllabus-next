import { cors } from "@elysiajs/cors";
import { Elysia } from "elysia";
import { auth } from "./auth.ts";
import { usersRouter } from "./router/users.sample.ts";

const betterAuth = new Elysia({ name: "better-auth" })
  .mount(auth.handler)
  .macro({
    auth: {
      async resolve({ status, request: { headers } }) {
        const session = await auth.api.getSession({
          headers,
        });
        if (!session) return status(401);

        return {
          user: session.user,
          session: session.session,
        };
      },
    },
  });

export const app = new Elysia({
  prefix: "/api",
})
  .use(betterAuth)
  .use(cors())
  .group("/users", (app) => app.use(usersRouter));

export type App = typeof app;
