import { app } from "./app.ts";

const port =
  process.env.SERVER_PORT ??
  process.env.PORT ??
  parsePublicServerURL() ??
  "4000";

app.listen(port, () =>
  console.log(`Server started at http://localhost:${port}`),
);

function parsePublicServerURL() {
  if (!process.env.PUBLIC_SERVER_URL) return undefined;
  const url = new URL(process.env.PUBLIC_SERVER_URL);
  return url.port;
}
