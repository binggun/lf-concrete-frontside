import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Login from "@/views/Login.vue";
import Booking from "@/views/Booking.vue";
import User from "@/views/User/User.vue";
import Home from "@/views/Home.vue";
import Concrete from "@/views/Concrete/Concrete.vue";
import ConcreteDetial from "@/views/ConcreteDetial/ConcreteDetial.vue";
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
  {
    path: "/concrete",
    name: "Concrete",
    component: Concrete,
    meta: {
      requireAuth: true,
      title: "Concrete",
    },
  },
  {
    path: "/concrete/:id",
    name: "Concrete detail",
    component: ConcreteDetial,
    meta: {
      requireAuth: true,
      title: "Concrete Detail",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
