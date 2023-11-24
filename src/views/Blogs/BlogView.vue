<template>
  <div class="select-none h-full flex flex-col">
    <NavBar />
  </div>
  <div class="select-none h-full w-full flex flex-col items-center mx-auto">
    <!-- <img
      class="w-2/3 max-sm:w-3/4 max-sm:h-1/2 mb-8 rounded-3xl shadow-2xl"
      :src="postData.thumbnail || 'https://picsum.photos/1024/900'"
      alt="blog image"
    /> -->
    <h1 class="text-3xl font-bold">{{ postData.title }}</h1>
    <span class="mt-3 mb-8">{{ postData.date }}</span>
    <article class="prose lg:prose-xl max-sm:p-8">
      <div v-html="contents"></div>
    </article>
  </div>
</template>
<script lang="ts">
import NavBar from "../../components/NavBar.vue";
import { getPostData, getPostContent } from "../../libs/posts";
import { PostData } from "../../types/Posts";

export default {
  name: "BlogView",
  data() {
    return {
      postData: {} as PostData,
      contents: "",
    };
  },
  components: {
    NavBar,
  },
  async mounted() {
    this.postData = await getPostData(this.$route.params.id as string);
    this.contents = await getPostContent(this.$route.params.id as string);
  },
};
</script>
