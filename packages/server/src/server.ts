import { SERVER_PORT } from "@util/secrets";
import { Server } from "http";
import "reflect-metadata";
import { createConnection } from "typeorm";

import app from "./app";

export let server: Server;

(async () => {
  try {
    await createConnection();
    server = app.listen(SERVER_PORT, () =>
      console.log(`Server is running on port ${SERVER_PORT}`)
    );
  } catch (e) {
    console.log("Could not connect to database");
    server = app.listen(4, () => console.log(`Server is running on port ${4}`));
    console.log("a change to check versioning");
    console.log("a change to check versioning");
    console.log("a change to check versioning");
    console.log("a change to check versioning");
    console.log("a change to check versioning");
  }
})();
