import Vue from "vue";
import Router from "vue-router";
import des from "./pages/des";
import card from "./pages/card";
import table from "./pages/table";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "des",
      component: des
    },{
      path: "/card",
      name: "card",
      component: card
    },{
      path: "/table",
      name: "table",
      component: table
    }
  ]
});
