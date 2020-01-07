import Vue, { AsyncComponent } from "vue";
import VueRouter, { RouteConfig, Route, NavigationGuard } from "vue-router";

Vue.use(VueRouter);

const Login: AsyncComponent = (): any => 
  import(
    /* webpackChunkName: "Login" */ "@/views/Login.vue"
  );
const Chatting: AsyncComponent = (): any => 
import(
  /* webpackChunkName: "Chatting" */ "@/views/chatting/chatting.vue"
);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/chatting",
    name: "Chatting",
    component: Chatting
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
