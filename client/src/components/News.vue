<template>
  <section class="mx-auto px-4 sm:px-6 lg:px-4 mb-12 dark:bg-gray-800">
    <article class="flex flex-col">
      <h2 class="news-heading my-36 text-3xl font-bold dark:text-white uppercase">
        Recent News
      </h2>
      <section class="news-section flex flex-col gap-20">
        <div v-for="newsItem in allNews" :key="newsItem.id" class="news w-full flex items-center justify-between">
          <article
            class="news-image relative bg-cover bg-center group overflow-hidden hover:scale-105 transition duration-300 ease-in-out"
            :style="{ backgroundImage: `url(http://gema.gov.gh/images/${newsItem.image})` }"></article>

          <div class="news-description lg:w-2/5 md:w-2/5 w-2/5 flex flex-col gap-4 text-left">
            <h2 class="text-2xl font-bold text-left dark:text-white">
              {{ decodeEntities(newsItem.title) }}
            </h2>
            <span class="bg-transparent h-6 text-base font-medium inline-flex items-center py-0.5 dark:text-green-400">
              <span class="text-button-bg-hover mr-1.5">Posted on </span> |
              <span class="ml-1.5 text-base">{{ moment(newsItem.createdAt).format('LL') }}</span>
            </span>
            <div class="description font-light text-gray-500 dark:text-gray-400" v-html="decodeEntities(newsItem.article.slice(0, 200))"></div>
            <div class="title flex justify-start">
              <router-link :to="'/single-post/' + newsItem.id" custom v-slot="{ navigate }"><button @click="navigate"
                  type="button"
                  class="button text-news-section-text uppercase font-semibold bg-transparent border border-news-section-text dark:border-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-transparent dark:hover:text-button-bg-hover dark:focus:bg-button-bg-hover">
                  Read More
                </button></router-link>
            </div>
          </div>
        </div>
      </section>
    </article>
    <div>
      <router-link to="/all-news" custom v-slot="{ navigate }"><button type="button" @click="navigate"
          class="mt-20 mb-20 button text-white uppercase font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-green-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-button-bg dark:hover:bg-button-bg-hover dark:focus:bg-button-bg-hover hover:bg-button-bg-hover">
          VIEW ALL
        </button></router-link>
    </div>
  </section>
</template>
<script setup lang="ts">
import { decodeEntities } from "@/functions";
import { url } from "@/functions/endpoint";
import axios from "axios";
import moment from "moment"
import { ref } from "vue";

const allNews: any = ref([]);
axios.get(url, {
  params: {
    category: 'NEWS',
    limit: 3
  }
}).then((response: any) => {
  console.log(response.data);
  allNews.value = response.data;
})
  .catch((error: string) => {
    console.error(error);
  });
</script>
<style lang=""></style>
