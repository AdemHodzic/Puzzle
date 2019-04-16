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

import Bcrypt from "bcryptjs";
import Login from "components/views/login";
import { User } from "models/user";
import Vue from "vue";
import { createRenderer } from "vue-server-renderer";

const renderer = createRenderer();

export const adminView = () => "admin";

export const editorView = () => "editor";

export const entryView = () => "entry";

export const loginView = async (request, h) => {
  if (request.route.method === "post") {
    const username = request.payload.username;
    const password = request.payload.password;
    const user = await User.query().findOne({
      username
    });
    if (user != null && Bcrypt.compareSync(password, user.password_hash)) {
      request.cookieAuth.set({ id: user.id });
      return h.redirect("/puzzle/admin");
    }
  }
  const app = new Vue({
    components: { Login },
    template: "<Login />"
  });
  return renderer
    .renderToString(app)
    .then(html => html)
    .catch(error => {
      console.log(error);
    });
};

export const pageView = () => {
  const app = new Vue({
    template: "<div><b>404</b> this page does not exist.</div>"
  });
  return renderer
    .renderToString(app)
    .then(html => html)
    .catch(error => {
      console.log(error);
    });
};
