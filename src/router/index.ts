// src/router/index.ts

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from "../views/Index.vue";
import PostList from "../views/Blogs/PostList.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/posts",
    name: "PostList",
    component: PostList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
