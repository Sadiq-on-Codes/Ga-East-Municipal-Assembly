<template>
    <div id="default-carousel" class="relative mb-34" data-carousel="static">
        <!-- Carousel wrapper -->
        <div class="relative overflow-hidden md:h-screen h-56">
            <!-- Item 1 -->
            <div class="hidden duration-200 ease-linear" data-carousel-item="active">
                <div>
                    <img src="../assets/header-1.jpg"
                        class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div class="overlay md:h-screen h-52 absolute inset-0 bg-gray-900 bg-opacity-60"></div>
                <div class="carousel-description absolute inset-0 flex flex-col gap-10 items-start justify-center w-4/5">
                    <div class="flex flex-col gap-6">
                        <h1 class="text-6xl uppercase text-left font-semibold text-white w-7/12">
                            Idris Alba to build a studio and shoot a movie in Ghana
                        </h1>
                        <span class="text-left font-news-heading text-white w-6/12">Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Tempore
                            voluptatibus quia, sequi praesentium suscipit asperiores
                            maxime?</span>
                    </div>
                    <button type="button"
                        class="text-white w-32  font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read More
                    </button>
                </div>
            </div>
            <!-- Item 2 -->
            <div class="hidden duration-200 ease-linear" data-carousel-item>
                <div>
                    <img src="../assets/header-2.jpg"
                        class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div class="overlay md:h-screen h-52 absolute inset-0 bg-gray-900 bg-opacity-60"></div>
                <div class="carousel-description absolute inset-0 flex flex-col gap-10 items-start justify-center w-4/5">
                    <div class="flex flex-col gap-6">
                        <h1 class="text-6xl uppercase text-left font-semibold text-white w-7/12">
                            Idris Abla sits with the president at the Flag Staff house
                        </h1>
                        <span class="text-left text-white w-6/12">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tempore
                            voluptatibus quia, sequi praesentium suscipit asperiores
                            maxime?</span>
                    </div>
                    <button type="button"
                        class="button text-white uppercase font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-button-bg-hover">
                        Read More
                    </button>
                </div>
            </div>
            <!-- Item 3 -->
            <div class="hidden duration-200 ease-linear" data-carousel-item>
                <div>
                    <img src="../assets/header-3.jpg"
                        class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div class="overlay md:h-screen h-52 absolute inset-0 bg-gray-900 bg-opacity-60"></div>
                <div class="carousel-description absolute inset-0 flex flex-col gap-10 items-start justify-center w-4/5">
                    <div class="flex flex-col gap-6">
                        <h1 class="text-6xl uppercase text-left font-semibold text-white w-7/12">
                            Planting for food and jobs
                        </h1>
                        <span class="text-left text-white w-6/12">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tempore
                            voluptatibus quia, sequi praesentium suscipit asperiores
                            maxime?</span>
                    </div>
                    <button type="button"
                        class="text-white w-32 font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read More
                    </button>
                </div>
            </div>
            <!-- Item 4 -->
            <div class="hidden duration-200 ease-linear" data-carousel-item>
                <div>
                    <img src="../assets/header-4.jpg"
                        class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div class="overlay absolute md:h-screen h-56 inset-0 bg-gray-900 bg-opacity-60"></div>
                <div class="carousel-description absolute inset-0 flex flex-col gap-10 items-start justify-center w-4/5">
                    <div class="flex flex-col gap-6">
                        <h1 class="text-6xl uppercase text-left font-semibold text-white w-7/12">
                            President Nana Akufo Addo Speaks to the Nation
                        </h1>
                        <span class="text-left text-white w-6/12">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tempore
                            voluptatibus quia, sequi praesentium suscipit asperiores
                            maxime?</span>
                    </div>
                    <button type="button"
                        class="text-white w-32 font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read More
                    </button>
                </div>
            </div>
            <!-- Item 5 -->
            <div class="hidden duration-200 ease-linear" data-carousel-item>
                <div>
                    <img src="../assets/header-5.jpg"
                        class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                </div>
                <div class="overlay absolute md:h-screen h-56 inset-0 bg-gray-900 bg-opacity-60"></div>
                <div class="carousel-description absolute inset-0 flex flex-col gap-10 items-start justify-center w-4/5">
                    <div class="flex flex-col gap-6">
                        <h1 class="text-6xl uppercase text-left font-semibold text-white w-7/12">
                            Construction of Suame Interchange and Complementary Roads Project
                        </h1>
                        <span class="text-left text-white w-6/12">Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Tempore
                            voluptatibus quia, sequi praesentium suscipit asperiores
                            maxime?</span>
                    </div>
                    <button type="button"
                        class="text-white w-32 font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read More
                    </button>
                </div>
            </div>
        </div>
        <!-- Slider indicators -->
        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1"
                data-carousel-slide-to="0"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
                data-carousel-slide-to="1"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
                data-carousel-slide-to="2"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2"
                data-carousel-slide-to="4"></button>
            <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3"
                data-carousel-slide-to="5"></button>
        </div>
        <!-- Slider controls -->
        <button type="button"
            class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev>
            <span
                class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button"
            class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next>
            <span
                class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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

import { onMounted, ref } from "vue";
import { initCarousels, initTooltips, initPopovers } from 'flowbite'

onMounted(() => {
    initCarousels();
    initTooltips();
    initPopovers();
})

//Send Email function
const win: Window = window;
const sendEmail = () => {
    win.location = "mailto:info@gema.gov.gh";
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
}
</style>