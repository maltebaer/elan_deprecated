<template>
  <nav class="base-nav-vertical top-0 right-16 bottom-0 border border-red-400">
    <ul class="h-full flex flex-col justify-center space-y-4">
      <li class="inline-block">
        <button @click="useNavigation('home')">1</button>
      </li>
      <li class="inline-block">
        <button @click="useNavigation('what-we-do')">2</button>
      </li>
      <li class="inline-block">
        <button @click="useNavigation('work')">3</button>
      </li>
      <li class="inline-block">
        <button @click="useNavigation('our-network')">4</button>
      </li>
      <li class="inline-block">
        <button @click="useNavigation('about')">5</button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from "vue";

import {useNavigation} from "../use/navigation";

export default defineComponent({
  name: "SideNav",

  setup() {
    return {
      useNavigation,
    };
  },
});
</script>
