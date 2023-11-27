<template>
  <div class="select-none h-full flex flex-col">
    <NavBar />
  </div>
  <h1 class="text-center text-3xl font-extrabold mb-8">
    Articles under "{{ $route.params.tag }}" tag
  </h1>
  <div class="select-none h-full w-full flex flex-row flex-wrap justify-center">
    <div v-for="i in posts" class="p-5">
      <Buttons type="outline" class="rounded-full">
        <RouterLink :to="'/posts/' + i">
          {{ i }}
        </RouterLink>
      </Buttons>
    </div>
  </div>
</template>

<script lang="ts">
import NavBar from "../../components/NavBar.vue";
import Buttons from "../../ui/Buttons.vue";
import { getPostsByTag } from "../../libs/tags";

export default {
  name: "TagList",
  data() {
    return {
      posts: new Array<string>(),
    };
  },
  components: {
    NavBar,
    Buttons,
  },
  async mounted() {
    this.posts.push(...(await getPostsByTag(this.$route.params.tag as string)));
  },
};
</script>
