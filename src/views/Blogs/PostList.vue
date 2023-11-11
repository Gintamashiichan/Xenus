<template>
  <div class="select-none h-full flex flex-col">
    <NavBar />
  </div>
  <div class="select-none h-full w-full flex flex-row flex-wrap justify-center">
    <Card class="w-1/4 m-4" v-for="i in $data.posts" :id="i.id" />
  </div>
</template>

<script lang="ts">
import NavBar from "../../components/NavBar.vue";
import Buttons from "../../ui/Buttons.vue";
import Card from "../../ui/Card.vue";
import { getSortedPostsData } from "../../libs/posts";
import type { Post } from "../../types/Posts";

export default {
  name: "Index",
  data() {
    return {
      posts: new Array<Post>(),
    };
  },
  components: {
    NavBar,
    Buttons,
    Card,
  },
  async mounted() {
    this.posts.push(...(await getSortedPostsData()));
  },
};
</script>
