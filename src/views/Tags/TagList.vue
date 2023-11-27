<template>
  <div class="select-none h-full flex flex-col">
    <NavBar />
  </div>
  <h1 class="text-center text-4xl font-extrabold mb-8">Tags</h1>
  <div
    class="select-none h-full w-full flex flex-row flex-wrap justify-center"
    v-if="tags"
  >
    <div v-for="i in tags" class="p-5">
      <RouterLink :to="`/tag/${i}`"
        ><Buttons type="outline" class="rounded-full">{{
          i
        }}</Buttons></RouterLink
      >
    </div>
  </div>
  <div
    class="select-none h-full w-full flex flex-row flex-wrap justify-center"
    v-else
  >
    <span class="loading loading-ring loading-lg"></span>
  </div>
</template>

<script lang="ts">
import NavBar from "../../components/NavBar.vue";
import Buttons from "../../ui/Buttons.vue";
import { getTagList } from "../../libs/tags";
import type { Tag } from "../../types/Tags";

export default {
  name: "TagList",
  data() {
    return {
      tags: new Array<Tag>(),
    };
  },
  components: {
    NavBar,
    Buttons,
  },
  async mounted() {
    this.tags.push(...(await getTagList()));
  },
};
</script>
