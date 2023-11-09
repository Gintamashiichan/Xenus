<template>
  <div class="stack toast toast-top toast-end">
    <div
      :class="[
        'alert',
        {
          'alert-success': type === 'success',
          'alert-warning': type === 'warning',
          'alert-error': type === 'error',
        },
      ]"
    >
      <span>{{ message }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";

export default {
  props: {
    type: {
      type: String as PropType<"success" | "warning" | "error">,
      default: "info",
    },
  },
  data() {
    return {
      show: false,
      message: "",
    };
  },
  methods: {
    showToast(message: string) {
      this.message = message;
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 3000); // 控制 Toast 显示时间
    },
  },
};
</script>
