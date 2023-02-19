<template>
  <div class="dark:bg-gray-900">
    <Carousel />
    <News />
    <Staff />

    <section class="lg:w-3/4 md:w-3/4 my-20 mx-auto sm:px-6 lg:px-4">
      <div
        class="text-sm font-medium text-center text-gray-500 border-b border-gray-300 dark:text-gray-400 dark:border-gray-700"
      >
        <ul class="flex text-center flex-wrap justify-between">
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 text-button-bg-hover border-b-2 border-transparent active rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >Upcoming Events</a
            >
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:border-gray-300 dark:text-blue-500 dark:border-blue-500"
              aria-current="page"
              >Past Events</a
            >
          </li>
          <li class="mr-2">
            <a
              href="#"
              class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
              >Notice</a
            >
          </li>
        </ul>
      </div>
      <div class="grid grid-cols-2 mt-10 gap-5 h-auto">
          <div class="flex flex-col items-start gap-5">
            <img class="event-image-large" src="../assets/event-3.jpeg" alt="" />
            <span
              class="text-white uppercase font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-green-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-button-bg dark:hover:bg-button-bg-hover dark:focus:bg-button-bg-hover"
              ><img
                class="inline-block mr-1.5"
                src="../assets/tag.svg"
                alt=""
              />
              UP NEXT</span
            >
            <span
              class="w-3/4 text-xl capitalize font-semibold text-left text-gray-900 dark:text-white"
              >2021 POPULATION AND HOUSING CENSUS, Starting on the 7th of July,
              2022
            </span>
            <span class="text-gray-400">March 6th 2023</span>
          </div>
          <div>
            <div
              class="flex gap-10 justify-between pb-4 border-b border-gray-200"
            >
              <div class="flex flex-col items-start gap-5 w-3/5">
                <span
                  class="text-xl capitalize font-semibold text-left text-gray-900 dark:text-white"
                  >2021 POPULATION AND HOUSING CENSUS, Starting on the 7th of
                  July, 2022
                </span>
                <span class="text-gray-400">March 6th 2023</span>
              </div>
              <div>
                <img
                  class="event-image-small h-auto"
                  src="../assets/event-5.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div
              class="flex gap-10 justify-between mt-10 pb-4 border-b border-gray-200"
            >
              <div class="flex flex-col items-start gap-5 w-3/5">
                <span
                  class="text-xl capitalize font-semibold text-left text-gray-900 dark:text-white"
                  >2021 POPULATION AND HOUSING CENSUS, Starting on the 7th of
                  July, 2022
                </span>
                <span class="text-gray-400">March 6th 2023</span>
              </div>
              <div>
                <img
                  class="event-image-small h-auto"
                  src="../assets/event-5.jpeg"
                  alt=""
                />
              </div>
            </div>
            <div
              class="flex gap-10 justify-between mt-10 pb-4 border-b border-gray-200"
            >
              <div class="flex flex-col items-start gap-5 w-3/5">
                <span
                  class="text-xl capitalize font-semibold text-left text-gray-900 dark:text-white"
                  >2021 POPULATION AND HOUSING CENSUS, Starting on the 7th of
                  July, 2022
                </span>
                <span class="text-gray-400">March 6th 2023</span>
              </div>
              <div>
                <img
                  class="event-image-small h-auto"
                  src="../assets/event-5.jpeg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
    </section>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import Carousel from "@/components/Carousel.vue";
import Footer from "@/components/Footer.vue";
import { useRouter } from "vue-router";
import News from "@/components/News.vue";
import Staff from "@/components/Staff.vue";
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
  height: 20em;
}

.event-image-large {
  width: 40em;
  height: auto;
}

.event-image-small {
  width: 15em;
  height: auto;
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

.overlay {
  display: block;
}

@media (max-width: 600px) {
  .news:nth-child(odd),
  .news:nth-child(even) {
    flex-direction: column;
    gap: 2em;
  }

  .news-heading {
    margin-top: 60px;
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
