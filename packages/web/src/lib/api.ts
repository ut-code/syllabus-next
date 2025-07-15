import { edenTreaty } from "@elysiajs/eden";
import type { App } from "@packages/server";

export const api = edenTreaty<App>("http://localhost:4000").api;
