import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/coders",
    name: "Coders",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Coders.vue"),
  },
  {
    path: "/frontend",
    name: "Frontend",
    component: () =>
      import(/* webpackChunkName: "front" */ "../views/Frontend.vue"),
  },
  {
    path: "/backend",
    name: "Backend",
    component: () =>
      import(/* webpackChunkName: "front" */ "../views/Backend.vue"),
  },
  {
    path: "/jsframe",
    name: "JSFrame",
    component: () =>
      import(/* webpackChunkName: "front" */ "../views/JSFrame.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
