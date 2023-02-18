<template>
  <div class="dark:bg-gray-800">
    <FilterAndSearch />
    <!-- component -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
      <article class="">
        <section
          class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-20"
        >
          <router-link to="/single-post" custom v-slot="{ navigate }">
            <div class="cursor-pointer" @click="navigate" v-for="newsItem in news" :key="newsItem.id">
              <article
                class="relative w-full h-64 bg-cover bg-center group overflow-hidden transition duration-300 ease-in-out"
                :style="{ backgroundImage: `url(${newsItem.imageUrl})` }"
              >
                <div
                  class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center"
                ></div>
              </article>
              <div class="mt-3 text-left">
                <span class="hover:underline text-news-section-text dark:text-white text-lg">{{
                  newsItem.title
                }}</span>
                <p
                  class="hover:underline description font-light text-gray-500 dark:text-gray-400"
                >
                  {{ newsItem.description.slice(0, 80) }}
                </p>
                <span
                  class="bg-transparent h-6 text-xs font-medium inline-flex items-center py-0.5 dark:bg-gray-700 dark:text-green-400"
                >
                  <span class="text-button-bg-hover mr-1">Posted on </span> |
                  <svg
                    aria-hidden="true"
                    class="w-3 h-3 mx-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="">{{ newsItem.postedAt }}</span>
                </span>
              </div>
            </div>
          </router-link>
        </section>
      </article>
    </section>
    <Pagination />
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import axios from "axios";
import FilterAndSearch from "@/components/FilterAndSearch.vue";
import Pagination from "@/components/Pagination.vue";
import Footer from "@/components/Footer.vue";

const news = reactive([
  {
    id: 1,
    imageUrl: require("../assets/news-3.jpeg"),
    title: "GEMA HOLDS PUBLIC HEARING ON MTDP",
    description:
      "The Ga East Municipal Assembly (GEMA) has held a Public Hearing on the 2022-2025 Medium Term Development Plan (MTDP) to review the needs assessment information gathered from the electoral area-stakeholders engagements and seek their input for final drafting and adoption by the Assembly.",
    postedAt: "5 mins ago",
  },
  {
    id: 2,
    imageUrl: require("../assets/news-2.jpeg"),
    title: "BOI CLINIC TO START OPERATIONS SOON",
    description:
      "The Municipal Chief Executive (MCE), for the Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, has handed over various medical items to the Health Directorate for the operationalization of the Boi Clinic, tasking them to ensure the facility starts operations within the shortest possible time.",
    postedAt: "Feb 14 2023",
  },
  {
    id: 3,
    imageUrl: require("../assets/news-1.jpeg"),
    title: "MCE LEADS STAFF AND RESIDENTS IN SPECIAL CLEAN-UP EXERCISE",
    description:
      'The Municipal Chief Executive (MCE) for Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, Thursday morning led Assembly Staff and residents to embark on a special clean-up exercise to intensify the awareness creation on the "Operation Clean Your Frontage" (OCYF) campaign.',
    postedAt: "Jan 23 2023",
  },
  {
    id: 2,
    imageUrl: require("../assets/news-2.jpeg"),
    title: "BOI CLINIC TO START OPERATIONS SOON",
    description:
      "The Municipal Chief Executive (MCE), for the Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, has handed over various medical items to the Health Directorate for the operationalization of the Boi Clinic, tasking them to ensure the facility starts operations within the shortest possible time.",
    postedAt: "Feb 14 2023",
  },
  {
    id: 1,
    imageUrl: require("../assets/news-3.jpeg"),
    title: "GEMA HOLDS PUBLIC HEARING ON MTDP",
    description:
      "The Ga East Municipal Assembly (GEMA) has held a Public Hearing on the 2022-2025 Medium Term Development Plan (MTDP) to review the needs assessment information gathered from the electoral area-stakeholders engagements and seek their input for final drafting and adoption by the Assembly.",
    postedAt: "5 mins ago",
  },
  {
    id: 3,
    imageUrl: require("../assets/news-1.jpeg"),
    title: "MCE LEADS STAFF AND RESIDENTS IN SPECIAL CLEAN-UP EXERCISE",
    description:
      'The Municipal Chief Executive (MCE) for Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, Thursday morning led Assembly Staff and residents to embark on a special clean-up exercise to intensify the awareness creation on the "Operation Clean Your Frontage" (OCYF) campaign.',
    postedAt: "Jan 23 2023",
  },
  {
    id: 2,
    imageUrl: require("../assets/news-2.jpeg"),
    title: "BOI CLINIC TO START OPERATIONS SOON",
    description:
      "The Municipal Chief Executive (MCE), for the Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, has handed over various medical items to the Health Directorate for the operationalization of the Boi Clinic, tasking them to ensure the facility starts operations within the shortest possible time.",
    postedAt: "Feb 14 2023",
  },
  {
    id: 1,
    imageUrl: require("../assets/news-3.jpeg"),
    title: "GEMA HOLDS PUBLIC HEARING ON MTDP",
    description:
      "The Ga East Municipal Assembly (GEMA) has held a Public Hearing on the 2022-2025 Medium Term Development Plan (MTDP) to review the needs assessment information gathered from the electoral area-stakeholders engagements and seek their input for final drafting and adoption by the Assembly.",
    postedAt: "5 mins ago",
  },
  {
    id: 2,
    imageUrl: require("../assets/news-2.jpeg"),
    title: "BOI CLINIC TO START OPERATIONS SOON",
    description:
      "The Municipal Chief Executive (MCE), for the Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, has handed over various medical items to the Health Directorate for the operationalization of the Boi Clinic, tasking them to ensure the facility starts operations within the shortest possible time.",
    postedAt: "Feb 14 2023",
  },
  {
    id: 1,
    imageUrl: require("../assets/news-3.jpeg"),
    title: "GEMA HOLDS PUBLIC HEARING ON MTDP",
    description:
      "The Ga East Municipal Assembly (GEMA) has held a Public Hearing on the 2022-2025 Medium Term Development Plan (MTDP) to review the needs assessment information gathered from the electoral area-stakeholders engagements and seek their input for final drafting and adoption by the Assembly.",
    postedAt: "5 mins ago",
  },
  {
    id: 3,
    imageUrl: require("../assets/news-1.jpeg"),
    title: "MCE LEADS STAFF AND RESIDENTS IN SPECIAL CLEAN-UP EXERCISE",
    description:
      'The Municipal Chief Executive (MCE) for Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, Thursday morning led Assembly Staff and residents to embark on a special clean-up exercise to intensify the awareness creation on the "Operation Clean Your Frontage" (OCYF) campaign.',
    postedAt: "Jan 23 2023",
  },
  {
    id: 2,
    imageUrl: require("../assets/news-2.jpeg"),
    title: "BOI CLINIC TO START OPERATIONS SOON",
    description:
      "The Municipal Chief Executive (MCE), for the Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, has handed over various medical items to the Health Directorate for the operationalization of the Boi Clinic, tasking them to ensure the facility starts operations within the shortest possible time.",
    postedAt: "Feb 14 2023",
  },
  {
    id: 1,
    imageUrl: require("../assets/news-3.jpeg"),
    title: "GEMA HOLDS PUBLIC HEARING ON MTDP",
    description:
      "The Ga East Municipal Assembly (GEMA) has held a Public Hearing on the 2022-2025 Medium Term Development Plan (MTDP) to review the needs assessment information gathered from the electoral area-stakeholders engagements and seek their input for final drafting and adoption by the Assembly.",
    postedAt: "5 mins ago",
  },
  {
    id: 3,
    imageUrl: require("../assets/news-1.jpeg"),
    title: "MCE LEADS STAFF AND RESIDENTS IN SPECIAL CLEAN-UP EXERCISE",
    description:
      'The Municipal Chief Executive (MCE) for Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, Thursday morning led Assembly Staff and residents to embark on a special clean-up exercise to intensify the awareness creation on the "Operation Clean Your Frontage" (OCYF) campaign.',
    postedAt: "Jan 23 2023",
  },
  {
    id: 2,
    imageUrl: require("../assets/news-2.jpeg"),
    title: "BOI CLINIC TO START OPERATIONS SOON",
    description:
      "The Municipal Chief Executive (MCE), for the Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, has handed over various medical items to the Health Directorate for the operationalization of the Boi Clinic, tasking them to ensure the facility starts operations within the shortest possible time.",
    postedAt: "Feb 14 2023",
  },
]);
</script>
<style></style>
