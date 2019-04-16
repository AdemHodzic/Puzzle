// This file is part of Puzzle.

// Puzzle is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of
// the License, or (at your option) any later version.

// Puzzle is distributed in the hope that it will be useful, but
// WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.

// You should have received a copy of the GNU Affero General Public
// License along with Puzzle. If not, see <https://www.gnu.org/licenses/>.

"use strict";

import Knex from "knex";
import { Model } from "objection";

const knex = Knex({
  client: "pg",
  connection: {
    charset: "utf8",
    database: "puzzle",
    host: "localhost",
    password: "puzzle",
    user: "puzzle"
  }
});

Model.knex(knex);

export { Model };
