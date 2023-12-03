<script lang="ts">
export default {
  name: "Index",
};
</script>
<template>
  <div class="select-none h-full flex flex-col">
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
Wanna know <a class="link no-underline hover:underline"><RouterLink to="/posts/about">more about me</RouterLink></a>?
            </pre>
            <a href="https://www.github.com/Gintamashiichan">
              <i
                class="fa-brands fa-github fa-2xl ease-in-out duration-300 hover:-translate-y-5 max-sm:mt-8"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
