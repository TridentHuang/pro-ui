import Vue from "vue";
import App from "./App.vue";
import ProUI from "../packages/index";
import router from "./router";
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";

Vue.use(ProUI);
Vue.use(ViewUI);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
