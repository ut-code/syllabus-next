import { app } from "./app.ts";

const port = process.env.SERVER_PORT ?? process.env.PORT ?? 4000;

app.listen(port, () =>
  console.log(`Server started at http://localhost:${port}`),
);
