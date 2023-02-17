<template>
  <div>
    <Carousel />
    <section class="mx-auto px-4 sm:px-6 lg:px-4 mb-12">
      <article class="flex flex-col">
        <h2 class="news-heading mt-36 text-3xl font-bold dark:text-white uppercase">
          Recent News
        </h2>
        <section class="news-section mt-28 flex flex-col gap-20">
          <div class="news w-full flex items-center xs:flex-col justify-between">
            <article
              class="news-image relative bg-cover bg-center group overflow-hidden hover:scale-105 bg-news-3 transition duration-300 ease-in-out">
            </article>
            <div class="news-description lg:w-2/5 md:w-2/5 flex flex-col gap-4 text-left">
              <span class="text-2xl font-bold  dark:text-white">GEMA HOLDS PUBLIC HEARING ON MTDP
              </span>
              <span class="description font-light text-gray-500 dark:text-gray-400">The Ga East Municipal Assembly
                (GEMA)
                has held a Public Hearing
                on the 2022-2025 Medium Term Development Plan (MTDP) to review the
                needs assessment information gathered from the electoral
                area-stakeholders engagements and seek their input for final
                drafting and adoption by the Assembly.</span>
            </div>
          </div>

          <div class="news w-full flex items-center justify-between overflow-hidden">
            <article
              class="news-image relative bg-cover bg-center group overflow-hidden hover:scale-105 bg-news-2 transition duration-300 ease-in-out">
            </article>
            <div class="news-description lg:w-2/5 md:w-2/5 w-2/5 flex flex-col gap-4 text-left">
              <span class="text-2xl font-bold text-left dark:text-white">BOI CLINIC TO START OPERATIONS SOON</span>
              <span class="description font-light text-gray-500 dark:text-gray-400">The Municipal Chief Executive (MCE),
                for the Ga East Municipal
                Assembly (GEMA), Hon. Elizabeth Kaakie Mann, has handed over
                various medical items to the Health Directorate for the
                operationalization of the Boi Clinic, tasking them to ensure the
                facility starts operations within the shortest possible
                time.</span>
            </div>
          </div>

          <div class="news w-full flex items-center justify-between">
            <article
              class="news-image relative bg-cover bg-center group overflow-hidden hover:scale-105 bg-news-1 transition duration-300 ease-in-out">
            </article>
            <div class="news-description lg:w-2/5 md:w-2/5 w-2/5 flex flex-col gap-4 text-left">
              <span class="text-2xl text-left font-bold dark:text-white">MCE LEADS STAFF AND RESIDENTS IN SPECIAL
                CLEAN-UP
                EXERCISE</span>
              <span class="description leading-10 font-light text-gray-500 dark:text-gray-400">The Municipal Chief Executive (MCE)
                for Ga East Municipal
                Assembly (GEMA), Hon. Elizabeth Kaakie Mann, Thursday morning led
                Assembly Staff and residents to embark on a special clean-up
                exercise to intensify the awareness creation on the "Operation
                Clean Your Frontage" (OCYF) campaign.</span>
            </div>
          </div>
        </section>
      </article>
      <div>
        <router-link to="/all-news" custom v-slot="{ navigate }"><button type="button" @click="navigate"
            class="mt-20 button text-white uppercase font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-button-bg-hover">
            VIEW ALL
          </button></router-link>
      </div>
      <router-view></router-view>
    </section>


    <section class="staff lg:w-3/4 md:w-3/4 mt-36 mx-auto sm:px-6 lg:px-4 mb-12">
      <article>
        <div class="staff-section-heading flex justify-between items-center mb-20">
          <h2 class="text-left text-3xl font-bold dark:text-white">
            OUR STAFF<br />
            HEAD
          </h2>
          <router-link to="/about" custom v-slot="{ navigate }"><button @click="navigate" type="button"
              class="button text-white uppercase font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-button-bg-hover">
              ABOUT US
            </button></router-link>
        </div>

        <section class="staff-section mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-20">
          <div>
            <article class="relative bg-cover bg-center group overflow-hidden transition duration-300 ease-in-out">
              <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-end">
                <img class="w-96" src="../assets/background-1.png" alt="" />
                <img class="absolute top-0 left-0 ml-6 w-96" src="../assets/mce.png" alt="" />
              </div>
            </article>
            <div class="title mx-5 flex justify-between mt-5">
              <span class="font-bold">HON. ELIZABETH KAAKIE MANN</span>
              <span class="text-gray-400">MCE</span>
            </div>
          </div>

          <div>
            <article class="mt-16 relative bg-cover bg-center group overflow-hidden transition duration-300 ease-in-out">
              <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-end">
                <img class="w-96" src="../assets/background-2.png" alt="" />
              </div>
            </article>
            <div class="title mx-5 flex justify-between mt-5">
              <span class="font-bold uppercase">Mr. Emmanuel Kwame Kungi</span>
              <span class="text-gray-400">MCD</span>
            </div>
          </div>

          <div>
            <article
              class="staff-mobile mt-36 relative bg-cover bg-center group overflow-hidden transition duration-300 ease-in-out">
              <div class="relative w-full h-auto px-4 sm:px-6 lg:px-4 flex justify-center items-end">
                <img class="w-96" src="../assets/background-3.png" alt="" />
              </div>
            </article>
            <div class="title mx-5 flex justify-between mt-5">
              <span class="font-bold uppercase">Municipal Engineer</span>
              <span class="text-gray-400">ENGINEER</span>
            </div>
          </div>
        </section>
      </article>
    </section>
  </div>
<Footer />
</template>
<script setup lang="ts">

import Carousel from "@/components/Carousel.vue";
import Footer from "@/components/Footer.vue"
import { useRouter } from "vue-router";
</script>

<style>
.carousel {
  height: 58rem;
}

.carousel-description {
  margin: 0 auto;
}

.news-section {
  width: 75%;
  margin: 0 auto;
}

.description {
  line-height: 150%;
}

.news-image {
  width: 35em;
  height: 22em;
}

.news-heading {
  margin-bottom: 2em;
}

.staff-section {
  margin: 0 auto;
}

.bg-mce,
.bg-mcd,
.bg-engineer {
  height: 30rem;
  margin: 0 auto;
}

.news {
  text-align: right;
}

.news:nth-child(odd) {
  flex-direction: row-reverse;
  text-align: left;
}

@media (max-width: 600px) {

  .news:nth-child(odd),
  .news:nth-child(even) {
    flex-direction: column;
    gap: 2em;
  }

  .news-heading {
    margin-top: 0;
    margin-bottom: 2em;
  }

  .staff {
    width: 90%;
  }

  .staff-mobile {
    margin-top: 4rem;
  }

  .news-description {
    text-align: left;
  }

  .staff {
    width: 90%;
  }

  .carousel-description,
  .overlay {
    display: none;
  }

  .carousel {
    max-height: 36em;
    margin-bottom: 0;
  }

  .default-carousel {
    height: 23em;
  }
}

@media (max-width: 1200px) {

  .news:nth-child(odd),
  .news:nth-child(even) {
    flex-direction: column;
    gap: 2em;
  }

  .news-image,
  .news-description,
  .news-section {
    width: 100%;
  }

  .bg-mce,
  .bg-mcd,
  .bg-engineer {
    height: 25rem;
  }
}

@media (max-width: 1200px) {
  .carousel {
    height: 60rem;
  }
}
</style>
