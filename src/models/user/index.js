import { Model } from "db";

export class User extends Model {
  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [],

      properties: {
        id: { type: "integer" },
        parent: { type: ["integer", "null"] },
        email: { type: "string" },
        username: { type: "string" }
      }
    };
  }

  static get relationMappings() {}

  static get tableName() {
    return "puzzle_user";
  }
}
