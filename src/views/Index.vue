<script lang="ts">
import NavBar from "../components/NavBar.vue";
import Buttons from "../ui/Buttons.vue";
export default {
  name: "Index",
  components: {
    NavBar,
    Buttons,
  },
};
</script>
<template>
  <div class="select-none h-full flex flex-col">
    <NavBar />
    <div class="flex-grow mt-48 max-sm:mt-16">
      <div class="flex w-full max-w-screen-lg mx-auto">
        <div class="w-1/5 mx-auto max-md:hidden">
          <img
            src="https://avatars.githubusercontent.com/u/68178871?v=4"
            class="rounded-full shadow-lg"
          />
        </div>
        <div class="w-1/2 mt-4 max-sm:mx-8">
          <div class="flex flex-col justify-center items-start">
            <span class="text-6xl font-black"> Hi there! </span>
            <pre class="text-md mt-6">
Student, Designer, and Gamer.
Rookie Front-end Developer.
Wanna know <a class="link no-underline hover:underline"><RouterLink to="/about">more about me</RouterLink></a>?
            </pre>
            <a href="https://www.github.com/Gintamashiichan">
              <img
                src="../assets/github-mark.svg"
                class="w-8 h-8 ease-in-out duration-300 hover:-translate-y-5 max-sm:mt-8"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
