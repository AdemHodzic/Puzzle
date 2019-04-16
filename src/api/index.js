// This file is part of Puzzle.

// Puzzle is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of
// the License, or (at your option) any later version.

// Puzzle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.

// You should have received a copy of the GNU Affero General Public
// License along with Puzzle. If not, see <https://www.gnu.org/licenses/>.

"use strict";

import { User } from "models/user";
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
    handler: async (request, h) => {
      const users = await User.query();
      return users.map(u => {
        const { password_hash, ...user } = u;
        return user;
      });
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
