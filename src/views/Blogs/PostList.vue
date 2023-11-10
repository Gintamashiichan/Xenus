<template>
  <div class="select-none h-full flex flex-col">
    <NavBar />
  </div>
  <div class="select-none h-full w-full flex flex-row flex-wrap justify-center">
    <Card class="w-1/4 m-4" v-for="i in 9" :key="i" />
  </div>
</template>

<script lang="ts">
import NavBar from "../../components/NavBar.vue";
import Buttons from "../../ui/Buttons.vue";
import Card from "../../ui/Card.vue";
// import { getSortedPostsData } from '../../libs/posts';
export default {
  name: "Index",
  components: {
    NavBar,
    Buttons,
    Card,
  },
};
</script>
