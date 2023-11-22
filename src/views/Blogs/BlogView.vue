<template>
  <div class="select-none h-full flex flex-col">
    <NavBar />
  </div>
  <div class="select-none h-full w-full flex flex-col items-center mx-auto">
    <h1 class="text-3xl font-bold">{{ postData.title }}</h1>
    <span class="mt-3 mb-8">{{ postData.date }}</span>
    <article class="prose lg:prose-xl">
      {{ contents?.body.innerText }}
    </article>
  </div>
</template>
<script lang="ts">
import NavBar from "../../components/NavBar.vue";
import { getPostData } from "../../libs/posts";
import { PostData } from "../../types/Posts";

export default {
  name: "BlogView",
  data() {
    return {
      postData: {} as PostData,
      contents: null as Document | null,
    };
  },
  components: {
    NavBar,
  },
  async mounted() {
    this.postData = await getPostData(this.$route.params.id as string);
    const parser = new DOMParser();
    this.contents = parser.parseFromString(
      this.postData.contentHtml,
      "text/html",
    );
  },
};
</script>
