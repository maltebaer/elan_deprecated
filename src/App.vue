<template>
  <side-nav />
  <main-nav />
  <div class="scroll-container">
    <page id="home">
      <main>
        <h1 class="text-center">Home</h1>
      </main>
    </page>
    <page id="what-we-do">
      <layout>
        <template v-slot:main>
          <h1>What we do</h1>
          <p>
            We are a Berlin-based, international constellation of creatives
            developing customized events and experiences for clients and brands.
          </p>
          <p>
            We want to connect purpose-driven companies to communities, artists,
            and professionals that are helping to reshape the local and global
            scene towards a future of awareness and inclusion.
          </p>
        </template>
        <template v-slot:aside>
          <h1 class="text-center">Image</h1>
        </template>
      </layout>
    </page>
    <page id="work">
      <layout>
        <template v-slot:main>
          <h1>Work</h1>
          <p>B2B and B2C Event Conceptualization and Execution, including:</p>
          <ul class="work-list list-square list-outside">
            <li>Brand Strategy, Creative Research, and Creative Ideation</li>
            <li>Budgeting and Project Management</li>
            <li>Guest and Venue Curation</li>
            <li>Vendor and Talent Procurement</li>
            <li>Sponsorships and Partnerships</li>
            <li>On Site Facilities and Experience Management</li>
            <li>Pre-Production and Post-Event Breakdown</li>
            <li>Pre-Event and Post-Event Social Media Coverage</li>
          </ul>
          <br />
          <p>Explore some of our projects by clicking on the client's name.</p>
        </template>
        <template v-slot:aside>
          <h1 class="text-center">Showcase</h1>
        </template>
      </layout>
    </page>
    <page id="our-network">
      <layout>
        <template v-slot:main>
          <h1>Our Network</h1>
          <p>
            Do you need help with an upcoming event or would you like to be part
            of our community of creatives? Reach out to us — we are always open
            to meaningful collaborations.
          </p>
        </template>
        <template v-slot:aside>
          <h1 class="text-center">Instagram</h1>
        </template>
      </layout>
    </page>
    <page id="about">
      <layout>
        <template v-slot:main>
          <h1>About</h1>
          <p>
            ELAN was born out of the need to challenge existing power dynamics
            and the traditional flow of knowledge that exists in both the
            corporate world and the cultural zeitgeist.
          </p>

          <p>
            User adoption is often thought of as a challenge for businesses to
            try to find product market fit. How do they do it? They listen to
            their customers, but in the end what dictates their decisions is a
            preexisting idea of who their customer should be. We at ELAN don't
            believe in what consumers should be or shouldn't be. We believe that
            products and their messaging need to shift to fit this newer,
            emerging world.
          </p>

          <p>
            Additionally, we know that the mechanism for this dual change has to
            come through exposure to diversity &amp; inclusion, giving something
            back to the community and supporting the local scene.
          </p>

          <p>The unnegotiable.</p>

          <p>
            The clients we work with embrace — or are open to embracing — this
            changing world wholeheartedly.
          </p>
        </template>
        <template v-slot:aside>
          <h1 class="text-center">Portraits</h1>
        </template>
      </layout>
    </page>
  </div>
  <custom-footer />
</template>

<script lang="ts">
import {defineComponent} from "vue";

import Page from "./components/Page.vue";
import Layout from "./components/Layout.vue";
import MainNav from "./components/MainNav.vue";
import SideNav from "./components/SideNav.vue";
import CustomFooter from "./components/CustomFooter.vue";

export default defineComponent({
  name: "App",

  components: {
    Page,
    Layout,
    MainNav,
    SideNav,
    CustomFooter,
  },
});
</script>

<style>
.scroll-container {
  height: 100%;

  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.work-list {
  padding-inline-start: 4rem;
}
</style>
