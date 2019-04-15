"use strict";

import "regenerator-runtime/runtime";
import Bookshelf from "bookshelf";
import Hapi from "hapi";
import Knex from "knex";
import { routes } from "routes";

const knex = Knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: "puzzle",
    password: "puzzle",
    database: "puzzle",
    charset: "utf8"
  }
});

const db = Bookshelf(knex);

const server = new Hapi.Server({
  host: "localhost",
  port: 8339
});

server.route(routes);

export { db, server };
