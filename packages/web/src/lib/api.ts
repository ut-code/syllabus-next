import { edenTreaty } from "@elysiajs/eden";
import type { App } from "@packages/server";
import { env } from "./env.ts";

export const api = edenTreaty<App>(env.serverURL).api;
