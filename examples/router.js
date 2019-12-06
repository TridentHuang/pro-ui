import Vue from "vue";
import Router from "vue-router";
import des from "./pages/des";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "des",
      component: des
    }]
});
