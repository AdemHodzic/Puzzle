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

import { createRenderer } from "vue-server-renderer";

export const concatRoutes = (base, routes) =>
  routes.map(route => ({
    ...route,
    path: `${base}${route.path}`
  }));

const makeContext = (context = {}) => {
  const defaultContext = {
    script: "",
    style: "",
    title: ""
  };
  return { ...defaultContext, ...context };
};

export const renderer = createRenderer({
  template: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="{{ style }}" rel="stylesheet">
    <title>{{ title }}</title>
  </head>
  <body>
    <!--vue-ssr-outlet-->
    <script src="{{ script }}"></script>
  </body>
</html>`
});
