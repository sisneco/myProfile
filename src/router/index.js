import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import gsap from "gsap";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/RidingBycycle",
    name: "ridingbycycle",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/RidingBycycleView.vue"),
  },
  {
    path: "/PlayingMusic",
    name: "playingmusic",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/PlayingMusic.vue"),
  },
  {
    path: "/TakingPhoto",
    name: "TakingPhoto",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/TakingPhoto.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const tl = gsap.timeline();
  tl.to(".wrapper", {
    duration: 1,
    x: -800,
    opacity: 0,
    onComplete: () => {
      next();
    },
  }).to(
    ".wrapper",
    {
      x: 0,
      duration: 1.5,
      opacity: 1,
    },
    1.5
  );
});

export default router;
