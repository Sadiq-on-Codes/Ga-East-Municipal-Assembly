<template>
  <div id="animation-carousel" class="relative mb-34" data-carousel-interval="15000" data-carousel="slide">
    <!-- Carousel wrapper -->

    <div class="relative overflow-hidden md:h-screen h-56">
      <!-- Item 1 -->
      <Loader v-if="loading" />
      <div v-else>
        <img v-if="activeImage" :src="`${imagesUrl}/uploads/${activeImage?.image}`" :data-carousel-item="activeIndex"
          class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />

        <div class="overlay md:h-screen h-52 absolute inset-0 bg-gray-900 bg-opacity-60"></div>
        <div class="carousel-description absolute inset-0 flex flex-col gap-10 items-start justify-center w-4/5"
          v-if="activeImage">
          <div class="flex flex-col gap-6">
            <h1 class="text-6xl uppercase text-left font-semibold text-white w-7/12">{{ activeImage?.title }}</h1>
            <span class="text-left font-news-heading text-white w-6/12">{{ activeImage?.description }}</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex dark:text-white space-x-3 -translate-x-1/2 bottom-5 left-1/2">
      <button v-for="(item, index) in allSliders" :key="index" type="button" class="w-3 h-3 rounded-full"
        :class="{ 'bg-white': index === activeIndex }" :aria-current="index === activeIndex ? 'true' : 'false'"
        :aria-label="index.toString()" @click="setActiveIndex(index)" :data-carousel-slide-to="index"></button>
    </div>
    <!-- Slider controls -->
    <!-- Slider controls -->
    <button type="button"
      class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-prev @click="prevImage">
      <span
        class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-white group-hover:bg-white/50 dark:group-hover:bg-button-bg group-focus:ring-4 group-focus:ring-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800 dark:hover:text-white"
          fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        <span class="sr-only">Previous</span>
      </span>
    </button>
    <button type="button"
      class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      data-carousel-next @click="nextImage">
      <span
        class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-white group-hover:bg-white/50 dark:group-hover:bg-button-bg group-focus:ring-4 group-focus:ring-gray-800/60 dark:group-focus:ring-gray-800/70 group-focus:outline-none">
        <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800 dark:hover:text-white"
          fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
        <span class="sr-only">Next</span>
      </span>
    </button>

    <span @click="sendEmail()" data-tooltip-target="tooltip-light" data-tooltip-style="light"
      class="email cursor-pointer carousel-description border-b-4 border-button-bg-hover font-bold text-xl text-white pb-2 absolute top-1/2 right-52 flex flex-col gap-10 items-end content-end justify-center h-fit w-fit">info@gema.gov.gh</span>
    <div id="tooltip-light" role="tooltip"
      class="email absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 tooltip">
      Click to send us an email
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { initCarousels, initTooltips, initPopovers } from "flowbite";
import { url, imagesUrl } from "@/functions/endpoint";
import axios from "axios";
import Loader from "./Loader.vue";

const loading = ref(false);
const email = ref("info@gema.gov.gh");
const subject = ref("Ga East Municipal Assembly, Head Office");
const body = ref("Send us an email and we will get back to you");

const allSliders = ref<any>([]);
const activeIndex = ref(0);

const fetchSliders = () => {
  loading.value = true;
  axios
    .get(`${url}/slider`)
    .then((response: any) => {
      const sliders = response.data[1];
      const slidersWithKey = sliders.map((slider: any, index: number) => ({
        ...slider,
        count: index,
      }));
      allSliders.value = slidersWithKey;
      console.log(allSliders.value);
      initTooltips(); // Initialize tooltips after fetching sliders
      if (allSliders.value.length > 0) {
        initCarousels();
        console.log("Carousel initialized.");
      }
    })
    .catch((error: string) => {
      console.log(error);
    })
    .finally(() => {
      loading.value = false;
    });
};

onMounted(fetchSliders);

const sendEmail = () => {
  const encodedSubject = encodeURIComponent(subject.value);
  const encodedBody = encodeURIComponent(body.value);
  window.location.href = `mailto:${email.value}?subject=${encodedSubject}&body=${encodedBody}`;
};

const activeImage = computed(() => {
  return allSliders.value[activeIndex.value];
});

const setActiveIndex = (index: number) => {
  activeIndex.value = index;
};

const nextImage = () => {
  activeIndex.value = (activeIndex.value + 1) % allSliders.value.length;
};

const prevImage = () => {
  activeIndex.value = (activeIndex.value - 1 + allSliders.value.length) % allSliders.value.length;
};
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
}</style>
