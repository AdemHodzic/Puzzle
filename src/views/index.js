"use strict";

import Login from "components/views/login";
import Vue from "vue";
import { createRenderer } from "vue-server-renderer";

const renderer = createRenderer();

export const adminView = () => "admin";

export const editorView = () => "editor";

export const entryView = () => "entry";

export const loginView = () => {
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
