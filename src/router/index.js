import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/start",
      name: "start",

      component: () => import("../views/StartView.vue"),
    },
    {
      path: "/tutorial",
      name: "tutorial",

      component: () => import("../views/TutorialView.vue"),
    },
    {
      path: "/exit",
      name: "exit",
      return: () => {
        return window.alert("ok");
      },
    },
  ],
});

export default router;
