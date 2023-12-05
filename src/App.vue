<template>
  <div id="app">
    <div class="select-none h-full flex flex-col">
      <NavBar />
    </div>
    <router-view />
  </div>
</template>
<script lang="ts">
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>
