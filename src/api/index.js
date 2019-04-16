"use strict";

import Joi from "joi";
import { concatRoutes } from "utils";

const routes = concatRoutes("/api", [
  {
    method: "GET",
    path: "/",
    handler: function(request, h) {
      return "API";
    }
  },
  {
    method: ["GET", "POST"],
    path: "/entries",
    handler: function(request, h) {
      return "entries";
    }
  },
  {
    method: ["DELETE", "GET", "PUT"],
    path: "/entries/{id}",
    handler: function(request, h) {
      return "entry detail";
    },
    options: {
      validate: {
        params: {
          id: Joi.number()
        }
      }
    }
  },
  {
    method: ["GET", "POST"],
    path: "/layouts",
    handler: function(request, h) {
      return "views";
    }
  },
  {
    method: ["DELETE", "GET", "PUT"],
    path: "/layouts/{id}",
    handler: function(request, h) {
      return "view detail";
    },
    options: {
      validate: {
        params: {
          id: Joi.number()
        }
      }
    }
  },
  {
    method: ["GET", "POST"],
    path: "/models",
    handler: function(request, h) {
      return "models";
    }
  },
  {
    method: ["DELETE", "GET", "PUT"],
    path: "/models/{id}",
    handler: function(request, h) {
      return "models detail";
    },
    options: {
      validate: {
        params: {
          id: Joi.number()
        }
      }
    }
  },
  {
    method: ["GET", "POST"],
    path: "/pages",
    handler: function(request, h) {
      return "pages";
    }
  },
  {
    method: ["DELETE", "GET", "PUT"],
    path: "/pages/{id}",
    handler: function(request, h) {
      return "page detail";
    },
    options: {
      validate: {
        params: {
          id: Joi.number()
        }
      }
    }
  },
  {
    method: ["GET", "POST"],
    path: "/prefabs",
    handler: function(request, h) {
      return "prefabs";
    }
  },
  {
    method: ["DELETE", "GET", "PUT"],
    path: "/prefabs/{id}",
    handler: function(request, h) {
      return "prefab detail";
    },
    options: {
      validate: {
        params: {
          id: Joi.number()
        }
      }
    }
  },
  {
    method: ["GET", "POST"],
    path: "/sites",
    handler: function(request, h) {
      return "sites";
    }
  },
  {
    method: ["DELETE", "GET", "PUT"],
    path: "/sites/{id}",
    handler: function(request, h) {
      return "site detail";
    },
    options: {
      validate: {
        params: {
          id: Joi.number()
        }
      }
    }
  },
  {
    method: ["GET", "POST"],
    path: "/users",
    handler: function(request, h) {
      return "users";
    }
  },
  {
    method: ["DELETE", "GET", "PUT"],
    path: "/users/{id}",
    handler: function(request, h) {
      return "user detail";
    },
    options: {
      validate: {
        params: {
          id: Joi.number()
        }
      }
    }
  }
]);

export { routes };
