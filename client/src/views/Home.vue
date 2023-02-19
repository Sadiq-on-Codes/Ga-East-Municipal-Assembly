<template>
  <div class="dark:bg-gray-900">
    <Carousel />
    <News />
    <Staff />

    <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px">
        <li class="mr-2">
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Profile</a>
        </li>
        <li class="mr-2">
            <a href="#" class="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Dashboard</a>
        </li>
        <li class="mr-2">
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Settings</a>
        </li>
        <li class="mr-2">
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Contacts</a>
        </li>
        <li>
            <a class="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Disabled</a>
        </li>
    </ul>
</div>
  </div>
<Footer />
</template>
<script setup lang="ts">
import Carousel from "@/components/Carousel.vue";
import Footer from "@/components/Footer.vue"
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
