import {ref} from "vue";

import {Id} from "../models";

const active = ref<Id>("home");
const ids: Id[] = ["home", "what-we-do", "work", "our-network", "about"];

export const useNavigation = (id: Id) => {
  const container = document.getElementById("scroll-container");
  const scrollHeight = document.getElementById("home")?.scrollHeight;

  if (container && scrollHeight) {
    const amount = ids.findIndex((x) => x === id);

    if (amount > -1) {
      container.scrollTo({top: scrollHeight * amount, behavior: "smooth"});
      active.value = id;
    }
  }

  return {active};
};
