<template>
    <section class="mx-auto px-4 sm:px-6 lg:px-4 mb-12 dark:bg-gray-800">
      <article class="flex flex-col">
        <h2 class="news-heading mt-36 mb-10 text-3xl font-bold dark:text-white uppercase">
          Recent News
        </h2>
        <section class="news-section mt-28 flex flex-col gap-20">
          <div v-for="newsItem in newsItems" :key="newsItem.id" class="news w-full flex items-center justify-between">
            <article
              class="news-image relative bg-cover bg-center group overflow-hidden hover:scale-105 transition duration-300 ease-in-out"
              :style="{ backgroundImage: `url(${newsItem.imageUrl})` }">
            </article>
            <div class="news-description lg:w-2/5 md:w-2/5 w-2/5 flex flex-col gap-4 text-left">
              <h2 class="text-2xl font-bold text-left dark:text-white">{{ newsItem.title }}</h2>
              <p class="description font-light text-gray-500 dark:text-gray-400">{{ newsItem.description }}</p>
            </div>
          </div>
        </section>
      </article>
      <div>
        <router-link to="/all-news" custom v-slot="{ navigate }"><button type="button" @click="navigate"
            class="mt-20 mb-20 button text-white uppercase font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-green-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-button-bg dark:hover:bg-button-bg-hover dark:focus:bg-button-bg-hover hover:bg-button-bg-hover">
            VIEW ALL
          </button></router-link>
      </div>
    </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const newsItems = ref([
      {
        id: 1,
        imageUrl: require('../assets/news-1.jpeg'),
        title: 'GEMA HOLDS PUBLIC HEARING ON MTDP',
        description: 'The Ga East Municipal Assembly (GEMA) has held a Public Hearing on the 2022-2025 Medium Term Development Plan (MTDP) to review the needs assessment information gathered from the electoral area-stakeholders engagements and seek their input for final drafting and adoption by the Assembly.'
      },
      {
        id: 2,
        imageUrl: require('../assets/news-2.jpeg'),
        title: 'BOI CLINIC TO START OPERATIONS SOON',
        description: 'The Municipal Chief Executive (MCE), for the Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, has handed over various medical items to the Health Directorate for the operationalization of the Boi Clinic, tasking them to ensure the facility starts operations within the shortest possible time.'
      },
      {
        id: 3,
        imageUrl: require('../assets/news-3.jpeg'),
        title: 'MCE LEADS STAFF AND RESIDENTS IN SPECIAL CLEAN-UP EXERCISE',
        description: 'The Municipal Chief Executive (MCE) for Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, Thursday morning led Assembly Staff and residents to embark on a special clean-up exercise to intensify the awareness creation on the "Operation Clean Your Frontage" (OCYF) campaign.'
      }
    ]);
</script>
<style lang="">
    
</style>