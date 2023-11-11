// src/router/index.ts

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from "../views/Index.vue";
import PostList from "../views/Blogs/PostList.vue";
import BlogView from "../views/Blogs/BlogView.vue";

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
  {
    path: "/posts/:id",
    name: "PostDetail",
    component: BlogView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
