<template>
  <div
    class="select-none h-full w-full flex flex-col items-center overflow-hidden"
  >
    <h1 class="text-3xl font-bold">{{ postData.title }}</h1>
    <span class="mt-3 mb-8">{{ postData.date }}</span>
    <article class="prose lg:prose-xl max-w-full max-sm:px-8">
      <div v-html="postData.contentHtml"></div>
    </article>
  </div>
</template>
<script lang="ts">
import { getPostData } from "../../libs/posts";
import { PostData } from "../../types/Posts";

export default {
  name: "BlogView",
  data() {
    return {
      postData: {} as PostData,
    };
  },
  async mounted() {
    this.postData = await getPostData(this.$route.params.id as string);
  },
};
</script>
