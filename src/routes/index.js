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

import { routes as apiRoutes } from "api";
import Joi from "joi";
import Path from "path";
import { concatRoutes } from "utils";
import { adminView, editorView, entryView, loginView, pageView } from "views";

const routes = [
  ...concatRoutes("/puzzle", [
    ...apiRoutes,
    {
      method: "GET",
      path: "/css/{path*}",
      handler: (request, h) => {
        const path = Path.resolve("dist/client/css/", request.params.path);
        return h.file(path);
      }
    },
    {
      method: "GET",
      path: "/js/{path*}",
      handler: (request, h) => {
        const path = Path.resolve("dist/client/js/", request.params.path);
        return h.file(path);
      }
    },
    {
      method: "GET",
      path: "/admin",
      handler: (request, h) => adminView()
    },
    {
      method: "GET",
      path: "/login",
      handler: loginView,
      options: {
        auth: false
      }
    },
    {
      method: "POST",
      path: "/login",
      handler: loginView,
      options: {
        auth: false,
        validate: {
          payload: {
            password: Joi.string()
              .min(10)
              .max(70),
            username: Joi.string()
              .alphanum()
              .min(3)
              .max(30)
          }
        }
      }
    },
    {
      method: "GET",
      path: "/logout",
      handler: (request, h) => {
        request.cookieAuth.clear();
        return h.redirect("/");
      }
    },
    {
      method: "GET",
      path: "/editor",
      handler: (request, h) => editorView()
    }
  ]),
  {
    method: "GET",
    path: "/{model}/{id}/{slug}",
    handler: (request, h) => {
      const schema = {
        model: Joi.string(),
        id: Joi.number(),
        slug: Joi.string()
      };
      const result = Joi.validate(request.params, schema);
      if (result.error != null) {
        // TODO: Use the page handler
        return pageView();
      }
      return entryView();
    },
    options: {
      auth: false
    }
  },
  {
    method: "GET",
    path: "/{path*}",
    handler: (request, h) => {
      // TODO: Get page or 404 from DB using request.path
      return pageView(/*data*/);
    },
    options: {
      auth: false
    }
  }
];

export { routes };
