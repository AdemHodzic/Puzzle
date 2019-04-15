"use strict";

import { routes as apiRoutes } from "api";
import Joi from "joi";
import { concatRoutes } from "utils";

const routes = [
  ...concatRoutes("/puzzle", [
    ...apiRoutes,
    {
      method: "GET",
      path: "/admin",
      handler: (request, h) => "admin"
    },
    {
      method: "GET",
      path: "/editor",
      handler: (request, h) => "editor"
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
        return "maybe a page";
      }
      return "entry";
    }
  },
  {
    method: "GET",
    path: "/{path*}",
    handler: (request, h) => "page"
  }
];

export { routes };
