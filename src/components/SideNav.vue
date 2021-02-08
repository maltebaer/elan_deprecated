<template>
  <nav class="base-nav-vertical top-0 right-16 bottom-0 border border-red-400">
    <ul class="h-full flex flex-col justify-center items-center space-y-4">
      <li
        class="inline-block"
        :class="active === 'home' ? 'text-3xl' : ''"
        @mouseover="useNavigation('home')"
      >
        <button @click="useNavigation('home')">1</button>
      </li>
      <Vertical :double="true" v-show="active === 'home'" />
      <Vertical v-show="active === 'what-we-do'" />
      <li
        class="inline-block"
        :class="active === 'what-we-do' ? 'text-3xl' : ''"
        @mouseover="useNavigation('what-we-do')"
      >
        <button @click="useNavigation('what-we-do')">2</button>
      </li>
      <Vertical v-show="active === 'what-we-do' || active === 'work'" />
      <li
        class="inline-block"
        :class="active === 'work' ? 'text-3xl' : ''"
        @mouseover="useNavigation('work')"
      >
        <button @click="useNavigation('work')">3</button>
      </li>
      <Vertical v-show="active === 'work' || active === 'our-network'" />
      <li
        class="inline-block"
        :class="active === 'our-network' ? 'text-3xl' : ''"
        @mouseover="useNavigation('our-network')"
      >
        <button @click="useNavigation('our-network')">4</button>
      </li>
      <Vertical v-show="active === 'our-network'" />
      <Vertical :double="true" v-show="active === 'about'" />
      <li
        class="inline-block"
        :class="active === 'about' ? 'text-3xl' : ''"
        @mouseover="useNavigation('about')"
      >
        <button @click="useNavigation('about')">5</button>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from "vue";

import Vertical from "./divider/Vertical.vue";

import {useNavigation} from "../use/navigation";

export default defineComponent({
  name: "SideNav",

  props: {
    active: String,
  },

  components: {Vertical},

  setup() {
    return {
      useNavigation,
    };
  },
});
</script>
