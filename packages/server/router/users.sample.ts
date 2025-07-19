import { CreateUser, type User } from "@packages/models";
import { Elysia, status, t } from "elysia";

const users: User[] = [];

export const usersRouter = new Elysia()
  .get("/", () => users)
  .get("/id", ({ query }) => users.find((user) => user.id === query.id), {
    query: t.Object({
      id: t.String({
        format: "uuid",
      }),
    }),
  })
  .post(
    "/",
    ({ body }) => {
      users.push({
        id: crypto.randomUUID(),
        ...body,
      });
      return body;
    },
    {
      body: CreateUser,
    },
  )
  .delete(
    "/",
    ({ query }) => {
      const index = users.findIndex((user) => user.id === query.id);
      if (index === -1) return status(404, "User not found");
      users.splice(index, 1);
      return query.id;
    },
    {
      query: t.Object({
        id: t.String({
          format: "uuid",
        }),
      }),
    },
  );
