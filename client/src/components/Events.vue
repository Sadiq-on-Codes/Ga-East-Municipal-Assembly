<template>
  <section class="lg:w-3/4 md:w-3/4 mt-20 mx-auto sm:px-6 lg:px-4">
    <div
      class="text-sm font-medium text-center text-gray-500 border-b border-gray-300 dark:text-gray-400 dark:border-gray-700">
      <ul class="flex text-center text-lg p-3 flex-wrap justify-between">
    <li v-for="tab in ['Upcoming', 'Past', 'Notice']" :key="tab" class="mr-2">
      <button @click="switchTab(tab)" :class="{ 'text-button-bg-hover': activeTab === tab }">
        {{ tab === 'Notice' ? 'Notice' : tab + ' Events' }}
      </button>
    </li>
  </ul>
    </div>
    <div class="grid grid-cols-1 mx-4 lg:mx-0 md:mx-0 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 mt-10 h-auto">
      <div :class="{ hidden: activeTab === 'Notice' }" class="flex flex-col mb-20 items-start gap-5">
        <img class="event-image-large" :src="appendBaseURL(dataMain?.image)" alt="" />
        <span :class="{ hidden: activeTab === 'Past' }"
          class="text-white uppercase font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-green-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-button-bg dark:focus:bg-button-bg-hover">
          <img class="inline-block mr-1.5" src="../assets/tag.svg" alt="" />
          UP NEXT
        </span>
        <span :class="{ hidden: activeTab === 'Upcoming' }"
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
import { onMounted, ref } from "vue";
import moment from "moment"
import { appendBaseURL } from "@/functions";

onMounted(() => {
  switchTab("Upcoming");
})

const UPCOMING_EVENTS: any = ref([]);
axios.get(`${url}/events/upevents`, {})
  .then((response: any) => {
    UPCOMING_EVENTS.value = response.data;
  })
  .catch((error: string) => {
    console.error(error);
  });


const PAST_EVENTS: any = ref([]);
axios.get(`${url}/events/pastevents`, {})
  .then((response: any) => {
    PAST_EVENTS.value = response.data;
  })
  .catch((error: string) => {
    console.error(error);
  });


const dataMain: any = ref([]);
const data: any = ref([]);
const activeTab = ref("Upcoming");
const notices = ref([]);

const switchTab = (tab: string) => {
  activeTab.value = tab;
  if (tab === "Upcoming") {
    dataMain.value = UPCOMING_EVENTS.value[0];
    data.value = UPCOMING_EVENTS.value;
  } else if (tab === "Past") {
    dataMain.value = PAST_EVENTS.value[0];
    data.value = PAST_EVENTS.value;
  } else if (tab === "Notice") {
    data.value = notices.value;
  }
};

</script>

<style>
.up-events:not(:first-child) {
  margin-top: 1.25rem;
}

.event-title {
  text-transform: uppercase;
}
</style>
