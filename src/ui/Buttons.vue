<template>
  <button
    :class="[
      'btn',
      {
        'btn-neutral': type === 'neutral',
        'btn-primary': type === 'primary',
        'btn-secondary': type === 'secondary',
        'btn-accent': type === 'accent',
        'btn-info': type === 'info',
        'btn-success': type === 'success',
        'btn-warning': type === 'warning',
        'btn-error': type === 'error',
        'btn-ghost': type === 'ghost',
        'btn-link': type === 'link',
        'btn-outline': type === 'outline',
        'btn-active': type === 'active',
        'btn-disabled': type === 'disabled',
        'btn-glass': type === 'glass',
        'btn-no-animation': type === 'no-animation',
      },
    ]"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    type: {
      type: String as PropType<
        | "neutral"
        | "primary"
        | "secondary"
        | "accent"
        | "info"
        | "success"
        | "warning"
        | "error"
        | "ghost"
        | "link"
        | "outline"
        | "active"
        | "disabled"
        | "glass"
        | "no-animation"
      >,
      default: "neutral",
    },
  },
});
</script>
