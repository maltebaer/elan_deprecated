<template>
  <nav class="base-nav left-0 top-0 right-0 uppercase border border-red-400">
    <ul class="flex justify-between">
      <span>
        <li>
          <button @click="useNavigation('home')">Logo</button>
        </li>
      </span>
      <span class="space-x-4">
        <li class="inline-block">
          <button
            :class="active === 'what-we-do' ? 'line-through' : ''"
            @click="useNavigation('what-we-do')"
          >
            What We Do
          </button>
        </li>
        <li class="inline-block">
          <button
            :class="active === 'work' ? 'line-through' : ''"
            @click="useNavigation('work')"
          >
            Work
          </button>
        </li>
        <li class="inline-block">
          <button
            :class="active === 'our-network' ? 'line-through' : ''"
            @click="useNavigation('our-network')"
          >
            Our Network
          </button>
        </li>
        <li class="inline-block">
          <button
            :class="active === 'about' ? 'line-through' : ''"
            @click="useNavigation('about')"
          >
            About
          </button>
        </li>
      </span>
    </ul>
  </nav>
</template>

<script lang="ts">
import {defineComponent, toRefs} from "vue";

import {useNavigation} from "../use/navigation";

export default defineComponent({
  name: "MainNav",

  props: {
    active: {
      type: String,
    },
  },

  setup(props) {
    const {active} = toRefs(props);

    return {
      useNavigation,
      active,
    };
  },
});
</script>
