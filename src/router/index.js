import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        title: "Indomie AR",
      },
    },
    {
      path: "/start",
      name: "start",

      component: () => import("../views/StartView.vue"),
    },
    {
      path: "/tutorial",
      name: "tutorial",
      meta: {
        title: "Instruksi Memasak",
      },
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
