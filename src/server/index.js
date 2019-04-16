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

import "regenerator-runtime/runtime";
import Hapi from "hapi";
import HapiAuthCookie from "hapi-auth-cookie";
import { User } from "models/user";
import { routes } from "routes";

const server = {
  start: async () => {
    const server = Hapi.server({
      host: "localhost",
      port: "8339"
    });

    server.route(routes);

    await server.register(HapiAuthCookie);

    server.auth.strategy("session", "cookie", {
      cookie: {
        name: "puzzle",
        password:
          process.env.PUZZLE_SECRET_KEY ||
          "$2y$12$IVpqJeYwY2I2aQMSg8uT2ObwavLdiiGeG.fcRYN64F8QRAPVQSjgm",
        ttl: 1000 * 60 * 60 * 24 * 7,
        clearInvalid: true,
        isSecure: false
      },
      keepAlive: true,
      redirectTo: "/puzzle/login",
      validateFunc: (request, session) => {
        const user = User.query().findById(session.id);
        if (user == null) {
          return { valid: false };
        }
        return { valid: true };
      }
    });

    server.auth.default("session");

    await server.start();

    console.log("server running at:", server.info.uri);
  }
};

export { server };
