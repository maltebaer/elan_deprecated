<template>
  <SideNav :active="active" />
  <MainNav :active="active" />
  <div id="scroll-container">
    <Page id="home">
      <main class="relative h-full -m-4 md:m-0">
        <div class="h-full flex justify-center items-center">
          <div
            class="h-128 w-128 md:pt-1/2 md:h-0 md:w-1/2 -mt-20 bg-cover bg-center"
            style="background-image: url('/images/holo.png')"
          />
          <div
            class="h-128 w-128 md:pt-1/2 md:h-0 md:w-1/2 mt-20 bg-cover"
            style="background-image: url('/images/cover.png')"
          />
        </div>
        <div
          class="absolute inset-0 pointer-events-none h-full w-full flex justify-center items-center overflow-hidden mask-repeat-none mask-position-center mask-size-sm lg:mask-size-md xl:mask-size-lg"
          style="mask-image: url('/images/logo.svg')"
        >
          <div
            class="h-192 w-192 bg-cover animate-spin-slow"
            style="background-image: url('/images/holo.png')"
          />
        </div>
      </main>
    </Page>
    <Page id="what-we-do">
      <Layout>
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
          <div>
            <img src="/images/elan.png" alt="elanberlin.com" />
          </div>
        </template>
      </Layout>
    </Page>
    <Page id="work">
      <Layout>
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
      </Layout>
    </Page>
    <Page id="our-network">
      <Layout>
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
      </Layout>
    </Page>
    <Page id="about">
      <Layout>
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
      </Layout>
    </Page>
  </div>
  <Footer />
</template>

<script lang="ts">
import {defineComponent} from "vue";

import Page from "./components/Page.vue";
import Layout from "./components/Layout.vue";
import MainNav from "./components/MainNav.vue";
import SideNav from "./components/SideNav.vue";
import Footer from "./components/Footer.vue";

import {useNavigation} from "./use/navigation";

const {active} = useNavigation("home");

export default defineComponent({
  name: "App",

  components: {
    Page,
    Layout,
    MainNav,
    SideNav,
    Footer,
  },

  setup() {
    return {active};
  },
});
</script>

<style>
#scroll-container {
  height: 100%;

  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.work-list {
  padding-inline-start: 4rem;
}
</style>
