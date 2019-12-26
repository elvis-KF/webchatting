import Vue, { AsyncComponent } from "vue";
import VueRouter, { RouteConfig, Route, NavigationGuard } from "vue-router";

Vue.use(VueRouter);

const Login: AsyncComponent = (): any => 
  import(
    /* webpackChunkName: "Login" */ "@/views/Login.vue"
  );

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
