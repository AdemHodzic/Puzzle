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

import { createRenderer } from 'vue-server-renderer'

/**
 * @description
 * Appends a string at the beginning of each route's URI.
 *
 * @param {string} path - The string to append at the beginning of the URI.
 * @param {Array} routes - Array objects that represent a Hapi route.
 * @returns {Array} - A copy of routes but with modified paths.
 *
 * @example
 * // returns [{path: '/root/child'}]
 * concatRoutes('/root', [{ path: '/child' }])
 */
export const concatRoutes = (path, routes) =>
  routes.map(route => ({
    ...route,
    path: `${path}${route.path}`,
  }))

/**
 * @description
 * Returns the DB configuration. The configuration is read from the environment
 * variables. See docs/databases.md for more information.
 *
 * @returns {Object} - An Object with the configuration.
 */
export const dbConfig = () => {
  const client = process.env.DB_CLIENT || 'sqlite3'

  if (client === 'pg') {
    return {
      client,
      connection: {
        database: process.env.DB_NAME || 'puzzle',
        host: process.env.DB_HOST || 'localhost',
        password: process.env.DB_PASSWORD || 'puzzle',
        user: process.env.DB_USER || 'puzzle',
      },
    }
  }

  return {
    client,
    connection: {
      filename: process.env.DB_NAME || 'db.sqlite',
    },
  }
}

/**
 * @description
 * Generates a simple HTML template.
 *
 * @param {Array} scripts - An array of the script names that will be injected
 * in the body.
 * @param {string} style - Name of the CSS file to use.
 * @param {string} id - Id to use in root element. Defaults to "app".
 * @returns {string} - A HTML template.
 */
export const htmlTemplate = (
  scripts = [],
  style = '',
  id = 'app'
) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/puzzle/css/${style}" rel="stylesheet">
  </head>
  <body>
    <div id="${id}"></div>
    ${scripts.reduce(
      (res, script) =>
        `${res}<script type="application/javascript" src="/puzzle/js/${script}"></script>`,
      ''
    )}
  </body>
</html>`

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
</html>`,
})
