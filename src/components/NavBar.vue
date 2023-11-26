<template>
  <div class="flex max-w-full mx-32 my-8 max-sm:mx-8 z-50">
    <div class="navbar-start">
      <span class="font-black text-4xl">Xenus</span>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal">
        <li v-for="nav in Navs" :key="nav.name">
          <a :href="nav.link" class="ml-6 font-black">
            {{ nav.name }}
          </a>
        </li>
      </ul>
    </div>
    <div className="drawer navbar-end">
      <input id="drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label
          htmlFor="drawer"
          className="btn btn-ghost drawer-button sm:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-64 min-h-full bg-base-100 text-base-content">
          <li v-for="nav in Navs" :key="nav.name">
            <a :href="nav.link" class="mt-8 text-xl font-black">
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
        },
        {
          name: "About",
          link: "/posts/about",
        },
        {
          name: "Blog",
          link: "/posts",
        },
      ],
    };
  },
  components: {
    Buttons,
  },
};
</script>
