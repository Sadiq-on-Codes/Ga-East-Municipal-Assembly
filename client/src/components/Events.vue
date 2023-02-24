<template>
  <section class="lg:w-3/4 md:w-3/4 mt-20 mx-auto sm:px-6 lg:px-4">
    <div
      class="text-sm font-medium text-center text-gray-500 border-b border-gray-300 dark:text-gray-400 dark:border-gray-700"
    >
      <ul class="flex text-center text-lg p-3 flex-wrap justify-between">
        <li class="mr-2">
          <button
            @click="switchTab('past')"
            :class="{ 'text-button-bg-hover': activeTab === 'past' }"
          >
            Past Events
          </button>
        </li>
        <li class="mr-2">
          <button
            @click="switchTab('upcoming')"
            :class="{ 'text-button-bg-hover': activeTab === 'upcoming' }"
            aria-current="page"
          >
            Upcoming Events
          </button>
        </li>
        <li class="mr-2">
          <button
            @click="switchTab('notice')"
            :class="{ 'text-button-bg-hover': activeTab === 'notice' }"
          >
            Notice
          </button>
        </li>
      </ul>
    </div>
    <div
      class="grid grid-cols-1 mx-4 lg:mx-0 md:mx-0 md:grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6 mt-10 h-auto"
    >
      <div
        :class="{ hidden: activeTab === 'notice' }"
        class="flex flex-col mb-20 items-start gap-5"
      >
        <img class="event-image-large" :src="dataMain.imageUrl" alt="" />
        <span
          :class="{ hidden: activeTab === 'past' }"
          class="text-white uppercase font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-green-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-button-bg dark:focus:bg-button-bg-hover"
        >
          <img class="inline-block mr-1.5" src="../assets/tag.svg" alt="" />
          UP NEXT
        </span>
        <span
          :class="{ hidden: activeTab === 'upcoming' }"
          class="text-white uppercase font-semibold bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-red-800 dark:focus:bg-button-bg-hover"
        >
          <img class="inline-block mr-1.5" src="../assets/tag.svg" alt="" />
          PREVIOUSLY
        </span>
        <span
          class="w-3/4 text-lg uppercase font-light text-left text-gray-900 dark:text-white"
        >
          {{ dataMain.title }}
        </span>
        <span class="text-gray-400">{{ dataMain.date }}</span>
      </div>
      <div>
        <div
          v-for="event in data"
          :key="event.id"
          class="up-events flex gap-10 justify-between pb-4 border-b border-gray-300"
        >
          <div class="event-details flex flex-col items-start gap-5 w-3/5">
            <span
              class="event-title uppercase text-lg font-light text-left text-gray-900 dark:text-white"
            >
              {{ event.title }}
            </span>
            <span class="text-gray-400">{{ event.date }}</span>
          </div>
          <div>
            <img
              class="event-image-small h-auto"
              :src="event.imageUrl"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Define constants for the main events and event lists
const PAST_EVENT_MAIN = {
  title:
    "2021 Population and Housing Census, Starting on the 7th of July, 2022",
  date: "March 6th 2023",
  imageUrl: require("../assets/event-3.jpeg"),
};

const PAST_EVENTS = [
  {
    id: 1,
    title:
      "Contractor hands over completed kindergarten block to the Ga East Municipal Assembly",
    date: "February 1st, 2022",
    imageUrl: require("../assets/event-6.jpg"),
  },
  {
    id: 2,
    title:
      "HON. ADWOA SAFO OFFERS SCHOLARSHIP TO FIVE BEST STUDENTS OF KWABENYA COMMUNITY SHS",
    date: "January 15th, 2022",
    imageUrl: require("../assets/event-5.jpeg"),
  },
  {
    id: 3,
    title: "MCE HONOURED BY GEMA-NASPA WOMEN'S COMMISSION TO MARK MOTHER'S DAY",
    date: "December 22nd, 2021",
    imageUrl: require("../assets/event-7.jpeg"),
  },
];

const UPCOMING_EVENT_MAIN = {
  title:
    "GREEN GHANA DAY – GA EAST MCE LEADS STAKEHOLDERS TO PLANT OVER 8,000 TREES IN THE MUNICIPALITY",
  date: "March 6th 2023",
  imageUrl: require("../assets/event-12.jpeg"),
};

const UPCOMING_EVENTS = [
  {
    id: 1,
    title:
      "GEMA PARTNERS GAYO, OTHERS TO IMPROVE WASTE MANAGEMENT AS IT FORMALIZES INFORMAL WASTE COLLECTION",
    date: "February 1st, 2022",
    imageUrl: require("../assets/event-9.jpeg"),
  },
  {
    id: 2,
    title:
      "GA EAST MUNICIPAL HOSPITAL SET TO OPEN FOR PUBLIC HEALTHCARE IN APRIL, 2021 - MEDICAL SUPERINTENDENT DISCLOSES",
    date: "January 15th, 2022",
    imageUrl: require("../assets/event-10.jpeg"),
  },
  {
    id: 3,
    title: "GEMA TO EMBARK ON QUARTERLY CLEAN-UP EXERCISE IN ALL MARKETS",
    date: "December 22nd, 2021",
    imageUrl: require("../assets/event-11.jpeg"),
  },
];

// Define refs for the event data and active tab
const dataMain = ref(PAST_EVENT_MAIN);
const data = ref(PAST_EVENTS);
const activeTab = ref("past"); // default to "past" tab
const notices = ref([]);

// Define a function to switch between tabs
function switchTab(tab: string) {
  activeTab.value = tab;

  // Update the event data based on the selected tab
  switch (tab) {
    case "past":
      dataMain.value = PAST_EVENT_MAIN;
      data.value = PAST_EVENTS;
      break;
    case "upcoming":
      dataMain.value = UPCOMING_EVENT_MAIN;
      data.value = UPCOMING_EVENTS;
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
