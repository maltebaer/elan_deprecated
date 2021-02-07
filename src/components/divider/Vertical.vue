<template>
  <div class="flex justify-center">
    <div class="w-0.25 bg-gray-800" :class="double ? 'h-44' : 'h-20'" />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "DividerVertical",

  props: {
    double: Boolean,
  },
});
</script>
