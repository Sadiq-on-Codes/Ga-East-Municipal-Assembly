<template>
  <section class="lg:w-3/4 md:w-3/4 mt-20 mx-auto sm:px-6 lg:px-4">
    <div
      class="text-sm font-medium text-center text-gray-500 border-b border-gray-300 dark:text-gray-400 dark:border-gray-700">
      <ul class="flex text-center text-lg p-3 flex-wrap justify-between">
        <li class="mr-2">
          <button @click="switchTab('upcoming')" :class="{ 'text-button-bg-hover': activeTab === 'upcoming' }"
            aria-current="page">
            Upcoming Events
          </button>
        </li>
        <li class="mr-2">
          <button @click="switchTab('past')" :class="{ 'text-button-bg-hover': activeTab === 'past' }">
            Past Events
          </button>
        </li>
        <li class="mr-2">
          <button @click="switchTab('notice')" :class="{ 'text-button-bg-hover': activeTab === 'notice' }">
            Notice
          </button>
        </li>
      </ul>
    </div>
    <div class="grid grid-cols-1 mx-4 lg:mx-0 md:mx-0 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 mt-10 h-auto">
      <div :class="{ hidden: activeTab === 'notice' }" class="flex flex-col mb-20 items-start gap-5">
        <img class="event-image-large" :src="appendBaseURL(dataMain?.image)" alt="" />
        <span :class="{ hidden: activeTab === 'past' }"
          class="text-white uppercase font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-green-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-button-bg dark:focus:bg-button-bg-hover">
          <img class="inline-block mr-1.5" src="../assets/tag.svg" alt="" />
          UP NEXT
        </span>
        <span :class="{ hidden: activeTab === 'upcoming' }"
          class="text-white uppercase font-semibold bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-800 dark:focus:bg-button-bg-hover">
          <img class="inline-block mr-1.5" src="../assets/tag.svg" alt="" />
          PREVIOUSLY
        </span>
        <span class="w-3/4 text-lg uppercase font-light text-left text-gray-900 dark:text-white">
          {{ dataMain?.title }}
        </span>
        <span class="text-gray-400">{{ moment(dataMain?.createdAt).format('LL') }}</span>
      </div>
      <div>
        <div v-for="event in data" :key="event.id"
          class="up-events flex gap-10 justify-between pb-4 border-b border-gray-300">
          <div class="event-details flex flex-col items-start gap-5 w-3/5">
            <span class="event-title uppercase text-lg font-light text-left text-gray-900 dark:text-white">
              {{ event?.title }}
            </span>
            <span class="text-gray-400">{{ moment(event?.createdAt).format('LL') }}</span>
          </div>
          <div>
            <img class="event-image-small h-auto" :src="appendBaseURL(event?.image)" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { url } from "@/functions/endpoint";
import axios from "axios";
import { ref } from "vue";
import moment from "moment"
import { appendBaseURL } from "@/functions";

// Define constants for the main events and event lists
// const PAST_EVENT_MAIN = {
//   title:
//     "2021 Population and Housing Census, Starting on the 7th of July, 2022",
//   date: "March 6th 2023",
//   imageUrl: require("../assets/event-3.jpeg"),
// };

const PAST_EVENTS: any = ref([]);
axios.get(`${url}/events/pastevents`, {
  // params: {
  //   limit: 3
  // }
}).then((response: any) => {
  console.log(response.data);
  PAST_EVENTS.value = response.data;
})
  .catch((error: string) => {
    console.error(error);
  });

const UPCOMING_EVENTS: any = ref([]);
axios.get(`${url}/events/upevents`, {
  // params: {
  //   limit: 3
  // }
}).then((response: any) => {
  UPCOMING_EVENTS.value = response.data;
})
  .catch((error: string) => {
    console.error(error);
  });

// Define refs for the event data and active tab
const dataMain = ref();
const data = ref();
const activeTab = ref("upcoming"); // default to "past" tab
const notices = ref([]);

// Define a function to switch between tabs
function switchTab(tab: string) {
  activeTab.value = tab;

  // Update the event data based on the selected tab
  switch (tab) {
    case "past":
      dataMain.value = PAST_EVENTS.value[0];
      data.value = PAST_EVENTS.value;
      break;
    case "upcoming":
      dataMain.value = UPCOMING_EVENTS.value[0];
      data.value = UPCOMING_EVENTS.value;
      break;
    case "notice":
      data.value = notices.value;
      break;
  }
}
</script>

<style>
.up-events:not(:first-child) {
  margin-top: 1.25rem;
}

.event-title {
  text-transform: uppercase;
}
</style>
