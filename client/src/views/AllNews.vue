<template>
  <div class="dark:bg-gray-800">
    <!-- <FilterAndSearch /> -->
    <!-- component -->
    <section class="max-w-7xl mx-auto px-4 sm:px- my-20 lg:px-4">
      <article class="">
        <section v-if="!loading" class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-20">
          <div class="cursor-pointer" v-for="newsItem in allNews" :key="newsItem.id">
            <router-link :to="'/single-post/' + encryptString(newsItem.id.toString())" custom v-slot="{ navigate }">
              <article @click="navigate"
                class="relative w-full h-64 bg-cover bg-center group overflow-hidden transition duration-300 ease-in-out"
                :style="{ backgroundImage: `url(${appendBaseURL(newsItem.image)})` }">
                <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center"></div>
              </article>
              <div @click="navigate" class="mt-3 text-left">
                <span class="hover:underline text-news-section-text dark:text-white text-lg">{{
                  decodeEntities(newsItem.title?.slice(0, 50)) + "..." }}</span>
                <div v-html="decodeEntities(newsItem.article?.slice(0, 100))"
                  class="hover:underline description font-light text-gray-500 dark:text-gray-400"></div>
                <span class="bg-transparent h-6 text-xs font-medium inline-flex items-center py-0.5 dark:text-green-400">
                  <span class="text-button-bg-hover text-base mr-1.5">Posted
                  </span>
                  |
                  <span class="text-base ml-1.5">{{ formattedCreatedAt(newsItem?.createdAt) }}</span>
                </span>
              </div>
            </router-link>
          </div>
        </section>
        <Loader class="my-52" v-if="allNews.length < 1" />
      </article>
    </section>
    <div class="flex items-center justify-center mb-20 text-center">
    <Pagination
        v-model="currentPage"
        :per-page="perPage"
        :total-items="count"
        :layout="'table'"
    ></Pagination>
  </div>
    <router-view></router-view>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import FilterAndSearch from "@/components/FilterAndSearch.vue";
import { Pagination } from 'flowbite-vue'
import Footer from "@/components/Footer.vue";
import Loader from "@/components/Loader.vue";
import { decodeEntities, appendBaseURL } from "@/functions";
import { encryptString } from '@/functions/encryption';
import { url } from "@/functions/endpoint";

const loading = ref(false);
const perPage = ref(12)
const currentPage = ref(1)
let count = ref(0)
import moment from "moment";
import axios from "axios";

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const formattedCreatedAt = (createdAt: string): any => {
  const dateTime = moment(createdAt);
  return dateTime.fromNow();
};

console.log(url);
const allNews: any = ref([]);
const fetchNewsItems = () => {
  loading.value = true; // Set loading to true before making the API request

  axios
    .get(`${url}/posts`, {
      params: {
        category: 'NEWS',
        page: currentPage.value,
        limit: perPage.value
      }
    })
    .then((response: any) => {
      allNews.value = response.data[1];
      count.value = response.data[0].totalLength;
    })
    .catch((error: string) => {
      console.error(error);
    })
    .finally(() => {
      loading.value = false;
    });
};

// Watcher for currentPage
watch(currentPage, fetchNewsItems);

fetchNewsItems();
</script>
<style scoped>
/* * {
  outline: 1px solid;
} */

.active-page {
  background-color: blue;
  color: white;
}
</style>
