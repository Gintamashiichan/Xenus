<template>
  <div v-if="postData" class="card w-96 max-h-80 bg-base-100 shadow-xl">
    <figure>
      <img
        :src="postData.thumbnail || 'https://picsum.photos/1024/900'"
        alt="Shoes"
        loading="lazy"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title font-bold">
        <RouterLink :to="PostURL">{{ postData.title }}</RouterLink>
      </h2>
      <span class="text-slate-500">{{
        postData.description || "没有简介.."
      }}</span>
      <div class="card-actions justify-end">
        <div class="badge badge-outline p-3" v-for="tag in postData.tags">
          <RouterLink :to="'/tag/' + tag">{{ tag }}</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import NavBar from "../components/NavBar.vue";
import Buttons from "../ui/Buttons.vue";
import { getPostData } from "../libs/posts";
import type { Post } from "../types/Posts";

export default {
  name: "Card",
  data() {
    return {
      postData: new Array<Post>()[0],
      PostURL: `/posts/${this.$props.id}`,
    };
  },
  props: {
    id: String,
  },
  components: {
    NavBar,
    Buttons,
  },
  async mounted() {
    try {
      this.postData = await getPostData(this.$props.id as string);
    } catch (error) {
      console.error("Error fetching post data:", error);
    }
  },
};
</script>
