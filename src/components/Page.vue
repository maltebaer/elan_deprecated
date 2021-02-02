<template>
  <div :id="id" class="page h-full p-4 md:px-16 md:py-32 bg-gray-200">
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
.page {
  scroll-snap-align: start;
}
</style>
