import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import Elysia from "elysia";
import { db } from "../db/index.ts";
import * as schema from "../db/schema.ts";
import { env } from "../lib/env.ts";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: schema,
  }),
  socialProviders: {
    google: {
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
  trustedOrigins: [env.PUBLIC_WEB_URL],
});

const betterAuthMacro = new Elysia({ name: "better-auth" })
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
export { betterAuthMacro as betterAuth };
