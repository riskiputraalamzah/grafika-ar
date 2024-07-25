import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
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
      path: "/ar/",
      name: "ar",

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
  ],
});

export default router;
