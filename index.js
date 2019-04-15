"use strict";

import { server } from "server";

async function start() {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log("Server tunning at:", server.info.uri);
}

start();
