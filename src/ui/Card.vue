<template>
  <div v-if="postData" class="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img
        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        <RouterLink :to="PostURL">{{ postData.title }}</RouterLink>
        <div class="badge badge-secondary">NEW</div>
      </h2>
    </div>
  </div>
  <div v-else>Loading...</div>
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
