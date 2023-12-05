// src/router/index.ts

import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from "../views/Index.vue";
import PostList from "../views/Blogs/PostList.vue";
import BlogView from "../views/Blogs/BlogView.vue";
import TagList from "../views/Tags/TagList.vue";
import TagClassification from "../views/Tags/TagClassification.vue";
import NotFoundView from "../views/Errors/NotFoundView.vue";

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
  {
    path: "/tags",
    name: "TagList",
    component: TagList,
  },
  {
    path: "/tag/:tag",
    name: "Tag",
    component: TagClassification,
  },
  { 
    path: '/:pathMatch(.*)', 
    component: NotFoundView
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
