import Vue from "vue";
import AdminComponent from "components/admin";

export const createAdmin = () => {
  const admin = new Vue({
    render: h => h(AdminComponent)
  });
  return admin;
};
