import Knex from "knex";
import { Model } from "objection";

const knex = Knex({
    client: "pg",
    connection: {
        charset: "utf8",
        database: "puzzle",
        host: "localhost",
        password: "puzzle",
        user: "puzzle",
    }
});

Model.knex(knex);

export { Model }
