import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Login from "../views/Login.vue";
import Booking from "../views/Booking.vue";
import User from "../views/User/User.vue";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
    },
  },
  {
    path: "/booking",
    name: "Booking",
    component: Booking,
    meta: {
      requireAuth: true,
      title: "Booking",
    },
  },
  {
    path: "/user",
    name: "User",
    component: User,
    meta: {
      requireAuth: true,
      title: "User",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
