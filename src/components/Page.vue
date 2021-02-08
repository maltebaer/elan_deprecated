<template>
  <div
    :id="id"
    class="scroll-snap-item h-full max-w-4xl xl:max-w-6xl mx-auto p-4 md:py-32 bg-gray-200"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "Page",

  props: {
    id: {
      type: String,
    },
  },
});
</script>

<style>
.scroll-snap-item {
  scroll-snap-align: start;
}
</style>
