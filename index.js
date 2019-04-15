"use strict";

import "regenerator-runtime/runtime";
import Hapi from "hapi";
import Vue from "vue";
import { createRenderer } from "vue-server-renderer";

const server = new Hapi.Server({
  host: "localhost",
  port: 8339
});

server.route([
  // Admin
  {
    method: "GET",
    path: "/puzzle/admin",
    handler: function(request, h) {
      return "Admin";
    }
  },

  // API
  {
    method: "GET",
    path: "/puzzle/api",
    handler: function(request, h) {
      return "API";
    }
  },
  {
    method: ["GET", "POST"],
    path: "/puzzle/api/entries",
    handler: function(request, h) {
      return "entries";
    }
  },
  {
    method: ["DELETE", "GET", "PUT"],
    path: "/puzzle/api/entries/:id",
    handler: function(request, h) {
      return "entry detail";
    }
  },
  {
    method: ["GET", "POST"],
    path: "/puzzle/api/models",
    handler: function(request, h) {
      return "models";
    }
  },
  {
    method: ["DELETE", "GET", "PUT"],
    path: "/puzzle/api/models/:id",
    handler: function(request, h) {
      return "models detail";
    }
  },
  {
    method: ["GET", "POST"],
    path: "/puzzle/api/pages",
    handler: function(request, h) {
      return "pages";
    }
  },
  {
    method: ["DELETE", "GET", "PUT"],
    path: "/puzzle/api/pages/:id",
    handler: function(request, h) {
      return "page detail";
    }
  },
  {
    method: ["GET", "POST"],
    path: "/puzzle/api/prefabs",
    handler: function(request, h) {
      return "prefabs";
    }
  },
  {
    method: ["DELETE", "GET", "PUT"],
    path: "/puzzle/api/prefabs/:id",
    handler: function(request, h) {
      return "prefab detail";
    }
  },
  {
    method: ["GET", "POST"],
    path: "/puzzle/api/sites",
    handler: function(request, h) {
      return "sites";
    }
  },
  {
    method: ["DELETE", "GET", "PUT"],
    path: "/puzzle/api/sites/:id",
    handler: function(request, h) {
      return "site detail";
    }
  },
  {
    method: ["GET", "POST"],
    path: "/puzzle/api/users",
    handler: function(request, h) {
      return "users";
    }
  },
  {
    method: ["DELETE", "GET", "PUT"],
    path: "/puzzle/api/users/:id",
    handler: function(request, h) {
      return "user detail";
    }
  },
  {
    method: ["GET", "POST"],
    path: "/puzzle/api/views",
    handler: function(request, h) {
      return "views";
    }
  },
  {
    method: ["DELETE", "GET", "PUT"],
    path: "/puzzle/api/views/:id",
    handler: function(request, h) {
      return "view detail";
    }
  },
  {
    method: "GET",
    path: "/puzzle/editor",
    handler: function(request, h) {
      return "Editor";
    }
  },
  {
    method: "GET",
    path: "/{model}/{id}/{slug}",
    handler: function(request, h) {
      return "Entry";
    }
  },
  {
    method: "GET",
    path: "/{path*}",
    handler: function(request, h) {
      console.log(request);
      const app = new Vue({
        template: "<h1>404 this page doesn't exist</h1>"
      });
      const renderer = createRenderer();
      let page = "Error";
      renderer.renderToString(app, function(err, html) {
        if (err) {
          throw err;
        }
        page = html;
      });
      return page;
    }
  }
]);

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
