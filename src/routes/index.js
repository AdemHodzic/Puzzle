"use strict";

import { routes as apiRoutes } from "api";
import Joi from "joi";
import { concatRoutes } from "utils";
import { adminView, editorView, entryView, loginView, pageView } from "views";

const routes = [
  ...concatRoutes("/puzzle", [
    ...apiRoutes,
    {
      method: "GET",
      path: "/admin",
      handler: (request, h) => adminView()
    },
    {
      method: ["GET", "POST"],
      path: "/login",
      handler: (request, h) => loginView()
    },
    {
      method: "GET",
      path: "/logout",
      handler: (request, h) => "logout"
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
    }
  },
  {
    method: "GET",
    path: "/{path*}",
    handler: (request, h) => {
      // TODO: Get page or 404 from DB using request.path
      return pageView(/*data*/);
    }
  }
];

export { routes };
