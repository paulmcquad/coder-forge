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
    path: "/front",
    name: "Front",
    component: () =>
      import(/* webpackChunkName: "resources" */ "../views/Front.vue"),
  },
  {
    path: "/nested",
    name: "Nested",
    component: () =>
      import(/* webpackChunkName: "resources" */ "../views/Nested.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
