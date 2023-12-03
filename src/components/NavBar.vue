<template>
  <div class="flex max-w-full mx-32 my-8 max-sm:mx-8 z-50">
    <div class="navbar-start">
      <span class="font-black text-4xl">Xenus</span>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal">
        <li v-for="nav in Navs" :key="nav.name">
          <a :href="nav.link" class="ml-6 font-black">
            <i class="fa-solid" :class="[
              `fa-${nav.icon}`
            ]"></i>
            {{ nav.name }}
          </a>
        </li>
      </ul>
    </div>
    <div class="drawer navbar-end">
      <input id="drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content">
        <label
          htmlFor="drawer"
          class="btn btn-ghost drawer-button sm:hidden"
        >
          <i class="fa-solid fa-bars fa-2xl"></i>
        </label>
      </div>
      <div class="drawer-side">
        <label
          htmlFor="drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <ul class="menu p-4 w-64 min-h-full bg-base-100 text-base-content">
          <li v-for="nav in Navs" :key="nav.name">
            <a :href="nav.link" class="mt-8 text-xl font-black">
              <i class="fa-solid" :class="[
                `fa-${nav.icon}`
              ]"></i>
              {{ nav.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Buttons from "../ui/Buttons.vue";
export default {
  name: "NavBar",
  data() {
    return {
      Navs: [
        {
          name: "Home",
          link: "/",
          icon: "home",
        },
        {
          name: "Blog",
          link: "/posts",
          icon: "blog",
        },
        {
          name: "Tags",
          link: "/tags",
          icon: "tags",
        },
      ],
    };
  },
  components: {
    Buttons,
  },
};
</script>
