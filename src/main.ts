import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import { createPinia } from "pinia";
import "element-plus/lib/theme-chalk/index.css";

import { useStore } from "@/store/auth";
const app = createApp(App);

app
  .use(createPinia())
  .use(ElementPlus)
  .use(router)
  .mount("#app");

router.beforeEach((to, from, next) => {
  const store = useStore();
  if (to.meta.requireAuth) {
    if (store.isLogin) {
      next();
    } else {
      next({
        path: "/login",
      });
    }
  } else {
    next();
  }
});
