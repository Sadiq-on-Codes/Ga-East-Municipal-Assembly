<template>
  <div id="default-carousel" class="relative mb-34" data-carousel="static">
    <!-- Carousel wrapper -->
    <div class="relative overflow-hidden md:h-screen h-56">
      <!-- Item 1 -->
      <div
        v-for="(item, i) in carouselItem"
        :key="i"
        class="hidden duration-200 ease-linear"
        data-carousel-item="active"
      >
        <div>
          <img
            :src="item.image"
            class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <div
          class="overlay md:h-screen h-52 absolute inset-0 bg-gray-900 bg-opacity-60"
        ></div>
        <div
          class="carousel-description absolute inset-0 flex flex-col gap-10 items-start justify-center w-4/5"
        >
          <div class="flex flex-col gap-6">
            <h1
              class="text-6xl uppercase text-left font-semibold text-white w-7/12"
            >
              {{ item.title }}
            </h1>
            <span class="text-left font-news-heading text-white w-6/12">{{
              item.description
            }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Slider indicators -->
    <div
      class="absolute z-30 flex dark:text-white space-x-3 -translate-x-1/2 bottom-5 left-1/2"
    >
      <button
        v-for="(item, index) in carouselItem"
        :key="index"
        type="button"
        class="w-3 h-3 rounded-full"
        aria-current="false"
        :aria-label="index.toString()"
        :data-carousel-slide-to="item.count"
      ></button>
    </div>
    <!-- Slider controls -->
    <button
      type="button"
      class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev
    >
      <span
        class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-white group-hover:bg-white/50 dark:group-hover:bg-button-bg group-focus:ring-4 group-focus:ring-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800 dark:hover:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button
      type="button"
      class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next
    >
      <span
        class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-white group-hover:bg-white/50 dark:group-hover:bg-button-bg group-focus:ring-4 group-focus:ring-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800 dark:hover:text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>
    <span
      @click="sendEmail()"
      data-tooltip-target="tooltip-light"
      data-tooltip-style="light"
      class="email cursor-pointer carousel-description border-b-4 border-button-bg-hover font-bold text-xl text-white pb-2 absolute top-1/2 right-52 flex flex-col gap-10 items-end content-end justify-center h-fit w-fit"
      >info@gema.gov.gh</span
    >
    <div
      id="tooltip-light"
      role="tooltip"
      class="email absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip"
    >
      Click to send us an email
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { initCarousels, initTooltips, initPopovers } from "flowbite";
// import { sendEmail } from "@/functions";

onMounted(() => {
  initCarousels();
  initTooltips();
  initPopovers();
});

//Email Functionality
const email = ref("info@gema.gov.gh");
const subject = ref("Ga East Municipal Assembly, Head Office");
const body = ref("Send us an email and we will get back to you");
const sendEmail = () => {
  window.location.href = `mailto:${email.value}?subject=${subject.value}&body=${body.value}`;
};

const carouselItem = ref([
  {
    image: require("../assets/header-1.jpg"),
    title: "Idris Alba to build a studio and shoot a movie in Ghana",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporevoluptatibus quia, sequi praesentium suscipit asperiores maxime?",
    slideNo: "Slide 1",
    count: 0,
  },
  {
    image: require("../assets/header-2.jpg"),
    title: "Idris Abla sits with the president at the Flag Staff house",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporevoluptatibus quia, sequi praesentium suscipit asperiores maxime?",
    slideNo: "Slide 2",
    count: 1,
  },
  {
    image: require("../assets/header-3.jpg"),
    title: "Planting for food and jobs",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporevoluptatibus quia, sequi praesentium suscipit asperiores maxime?",
    slideNo: "Slide 3",
    count: 2,
  },
  {
    image: require("../assets/header-4.jpg"),
    title: "President Nana Akufo Addo Speaks to the Nation",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporevoluptatibus quia, sequi praesentium suscipit asperiores maxime?",
    slideNo: "Slide 4",
    count: 3,
  },
  {
    image: require("../assets/header-5.jpg"),
    title: "Construction of Suame Interchange and Complementary Roads Project",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporevoluptatibus quia, sequi praesentium suscipit asperiores maxime?",
    slideNo: "Slide 5",
    count: 4,
  },
  {
    image: require("../assets/header-6.jpg"),
    title: "GA EAST SUPPORTS HOMOWO CELEBRATION AS MCE PRESENTS ITEMS TO TRADITIONAL AUTHORITIES",
    description:
      "The Ga East Municipal Assembly (GEMA), have donated various food items and cash to support this year's celebration of Homowo.",
    slideNo: "Slide 6",
    count: 5,
  },
]);
</script>
<style>
.animate-fade {
  animation: fade 2s ease-in-out infinite;
}

@keyframes fade {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.5;
  }

  100% {
    opacity: 1;
  }
}

.email {
  z-index: 100;
}
</style>
