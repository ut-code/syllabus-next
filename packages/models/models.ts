import { t } from "elysia";

export type CreateUser = typeof CreateUser.static;
export const CreateUser = t.Object({
  name: t.String({
    minLength: 1,
    maxLength: 255,
  }),
});

export type User = typeof User.static;
export const User = t.Object({
  id: t.String({ format: "uuid" }),
  ...CreateUser.properties,
});
