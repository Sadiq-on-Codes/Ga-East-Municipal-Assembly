<template>
  <div class="flex gap-10 flex-col max-w-7xl mx-auto justify-center mt-28">
    <h1
      class="text-xl uppercase font-semibold text-[#322121] w-10/12 dark:text-white"
    >
      View Posts
    </h1>

    <div class="relative w-full sm:rounded-lg">
      <table class="w-full border text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-green-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">No</th>
            <th scope="col" class="px-6 py-3">Title</th>
            <th scope="col" class="px-6 py-3">Live View</th>
            <th scope="col" class="px-6 py-3">View</th>
            <th scope="col" class="px-6 py-3">Delete</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in news" :key="index">
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <td class="px-6 py-4">{{ index + 1 }}</td>
            <td
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ item.title }}
            </td>
            <td class="px-6 py-4">
              <a target="_blank" href="http://localhost:8080/single-post/"
                >Live View</a
              >
            </td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</a
              >
            </td>
            <td class="px-6 py-4">
              <a
                href="#"
                class="font-medium text-red-600 dark:text-red-500 hover:underline"
                >Delete</a
              >
            </td>
          </tr>
        </tbody>
      </table>
      <nav
        class="flex items-center h-20 justify-between mx-5 pt-4"
        aria-label="Table navigation"
      >
        <span class="text-sm font-normal text-gray-500 dark:text-gray-400"
          >Showing
          <span class="font-semibold text-gray-900 dark:text-white">1-10</span>
          of
          <span class="font-semibold text-gray-900 dark:text-white"
            >1000</span
          ></span
        >
        <ul class="inline-flex -space-x-px">
          <li>
            <a
              href="#"
              class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >Previous</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >1</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >2</a
            >
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
              >3</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >4</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >5</a
            >
          </li>
          <li>
            <a
              href="#"
              class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >Next</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const news = ref([
  {
    id: 1,
    imageUrl: require("../../../assets/news-3.jpeg"),
    title: "GEMA HOLDS PUBLIC HEARING ON MTDP",
    description:
      "The Ga East Municipal Assembly (GEMA) has held a Public Hearing on the 2022-2025 Medium Term Development Plan (MTDP) to review the needs assessment information gathered from the electoral area-stakeholders engagements and seek their input for final drafting and adoption by the Assembly.",
    postedAt: "5 mins ago",
  },
  {
    id: 2,
    imageUrl: require("../../../assets/news-2.jpeg"),
    title: "BOI CLINIC TO START OPERATIONS SOON",
    description:
      "The Municipal Chief Executive (MCE), for the Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, has handed over various medical items to the Health Directorate for the operationalization of the Boi Clinic, tasking them to ensure the facility starts operations within the shortest possible time.",
    postedAt: "Feb 14 2023",
  },
  {
    id: 3,
    imageUrl: require("../../../assets/news-1.jpeg"),
    title: "MCE LEADS STAFF AND RESIDENTS IN SPECIAL CLEAN-UP EXERCISE",
    description:
      'The Municipal Chief Executive (MCE) for Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, Thursday morning led Assembly Staff and residents to embark on a special clean-up exercise to intensify the awareness creation on the "Operation Clean Your Frontage" (OCYF) campaign.',
    postedAt: "Jan 23 2023",
  },
  {
    id: 2,
    imageUrl: require("../../../assets/news-2.jpeg"),
    title: "BOI CLINIC TO START OPERATIONS SOON",
    description:
      "The Municipal Chief Executive (MCE), for the Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, has handed over various medical items to the Health Directorate for the operationalization of the Boi Clinic, tasking them to ensure the facility starts operations within the shortest possible time.",
    postedAt: "Feb 14 2023",
  },
  {
    id: 1,
    imageUrl: require("../../../assets/news-3.jpeg"),
    title: "GEMA HOLDS PUBLIC HEARING ON MTDP",
    description:
      "The Ga East Municipal Assembly (GEMA) has held a Public Hearing on the 2022-2025 Medium Term Development Plan (MTDP) to review the needs assessment information gathered from the electoral area-stakeholders engagements and seek their input for final drafting and adoption by the Assembly.",
    postedAt: "5 mins ago",
  },
  {
    id: 3,
    imageUrl: require("../../../assets/news-1.jpeg"),
    title: "MCE LEADS STAFF AND RESIDENTS IN SPECIAL CLEAN-UP EXERCISE",
    description:
      'The Municipal Chief Executive (MCE) for Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, Thursday morning led Assembly Staff and residents to embark on a special clean-up exercise to intensify the awareness creation on the "Operation Clean Your Frontage" (OCYF) campaign.',
    postedAt: "Jan 23 2023",
  },
  {
    id: 2,
    imageUrl: require("../../../assets/news-2.jpeg"),
    title: "BOI CLINIC TO START OPERATIONS SOON",
    description:
      "The Municipal Chief Executive (MCE), for the Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, has handed over various medical items to the Health Directorate for the operationalization of the Boi Clinic, tasking them to ensure the facility starts operations within the shortest possible time.",
    postedAt: "Feb 14 2023",
  },
  {
    id: 1,
    imageUrl: require("../../../assets/news-3.jpeg"),
    title: "GEMA HOLDS PUBLIC HEARING ON MTDP",
    description:
      "The Ga East Municipal Assembly (GEMA) has held a Public Hearing on the 2022-2025 Medium Term Development Plan (MTDP) to review the needs assessment information gathered from the electoral area-stakeholders engagements and seek their input for final drafting and adoption by the Assembly.",
    postedAt: "5 mins ago",
  },
  {
    id: 2,
    imageUrl: require("../../../assets/news-2.jpeg"),
    title: "BOI CLINIC TO START OPERATIONS SOON",
    description:
      "The Municipal Chief Executive (MCE), for the Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, has handed over various medical items to the Health Directorate for the operationalization of the Boi Clinic, tasking them to ensure the facility starts operations within the shortest possible time.",
    postedAt: "Feb 14 2023",
  },
  {
    id: 1,
    imageUrl: require("../../../assets/news-3.jpeg"),
    title: "GEMA HOLDS PUBLIC HEARING ON MTDP",
    description:
      "The Ga East Municipal Assembly (GEMA) has held a Public Hearing on the 2022-2025 Medium Term Development Plan (MTDP) to review the needs assessment information gathered from the electoral area-stakeholders engagements and seek their input for final drafting and adoption by the Assembly.",
    postedAt: "5 mins ago",
  },
  {
    id: 3,
    imageUrl: require("../../../assets/news-1.jpeg"),
    title: "MCE LEADS STAFF AND RESIDENTS IN SPECIAL CLEAN-UP EXERCISE",
    description:
      'The Municipal Chief Executive (MCE) for Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, Thursday morning led Assembly Staff and residents to embark on a special clean-up exercise to intensify the awareness creation on the "Operation Clean Your Frontage" (OCYF) campaign.',
    postedAt: "Jan 23 2023",
  },
  {
    id: 2,
    imageUrl: require("../../../assets/news-2.jpeg"),
    title: "BOI CLINIC TO START OPERATIONS SOON",
    description:
      "The Municipal Chief Executive (MCE), for the Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, has handed over various medical items to the Health Directorate for the operationalization of the Boi Clinic, tasking them to ensure the facility starts operations within the shortest possible time.",
    postedAt: "Feb 14 2023",
  },
  {
    id: 1,
    imageUrl: require("../../../assets/news-3.jpeg"),
    title: "GEMA HOLDS PUBLIC HEARING ON MTDP",
    description:
      "The Ga East Municipal Assembly (GEMA) has held a Public Hearing on the 2022-2025 Medium Term Development Plan (MTDP) to review the needs assessment information gathered from the electoral area-stakeholders engagements and seek their input for final drafting and adoption by the Assembly.",
    postedAt: "5 mins ago",
  },
  {
    id: 3,
    imageUrl: require("../../../assets/news-1.jpeg"),
    title: "MCE LEADS STAFF AND RESIDENTS IN SPECIAL CLEAN-UP EXERCISE",
    description:
      'The Municipal Chief Executive (MCE) for Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, Thursday morning led Assembly Staff and residents to embark on a special clean-up exercise to intensify the awareness creation on the "Operation Clean Your Frontage" (OCYF) campaign.',
    postedAt: "Jan 23 2023",
  },
  {
    id: 2,
    imageUrl: require("../../../assets/news-2.jpeg"),
    title: "BOI CLINIC TO START OPERATIONS SOON",
    description:
      "The Municipal Chief Executive (MCE), for the Ga East Municipal Assembly (GEMA), Hon. Elizabeth Kaakie Mann, has handed over various medical items to the Health Directorate for the operationalization of the Boi Clinic, tasking them to ensure the facility starts operations within the shortest possible time.",
    postedAt: "Feb 14 2023",
  },
]);
</script>
<style></style>
