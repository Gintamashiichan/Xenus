<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure>
      <img
        src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">
        <!-- {{ $data.postData[0].id }} Bug -->
        <div class="badge badge-secondary">NEW</div>
      </h2>
    </div>
  </div>
</template>
<script lang="ts">
import NavBar from "../components/NavBar.vue";
import Buttons from "../ui/Buttons.vue";
import { getPostData } from "../libs/posts";

export default {
  name: "Card",
  data() {
    return {
      postData: new Array(),
    };
  },
  props: {
    id: String,
  },
  components: {
    NavBar,
    Buttons,
  },
  async mounted() {
    this.postData.push(await getPostData(this.$props.id as string));
  },
};
</script>
