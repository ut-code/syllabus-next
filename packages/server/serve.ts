import { app } from "./app.ts";
import { env } from "./lib/env.ts";

const port =
  env.SERVER_PORT ?? env.PORT ?? parsePort(env.PUBLIC_SERVER_URL) ?? "4000";

app.listen(port, () =>
  console.log(`Server started at http://localhost:${port}`),
);

function parsePort(urlstr: string | undefined) {
  if (!urlstr) return undefined;
  const url = new URL(urlstr);
  return url.port;
}
