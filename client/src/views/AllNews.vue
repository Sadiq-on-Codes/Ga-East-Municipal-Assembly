<template>
  <div class="dark:bg-gray-800">
    <FilterAndSearch />
    <!-- component -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
      <article class="">
        <section class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-20">
          <div class="cursor-pointer" v-for="newsItem in allNews" :key="newsItem.id">
            <router-link :to="'/single-post/' + newsItem.id" custom v-slot="{ navigate }">
              <article @click="navigate"
                class="relative w-full h-64 bg-cover bg-center group overflow-hidden transition duration-300 ease-in-out"
                :style="{ backgroundImage: `url(http://gema.gov.gh/images//${newsItem.image})` }">
                <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center"></div>
              </article>
              <div @click="navigate" class="mt-3 text-left">
                <span class="hover:underline text-news-section-text dark:text-white text-lg">{{ newsItem.title.slice(0, 38)+"..." }}</span>
                <div v-html="newsItem.article.slice(0, 80)" class="hover:underline description font-light text-gray-500 dark:text-gray-400"></div>
                  <span
                    class="bg-transparent h-6 text-xs font-medium inline-flex items-center py-0.5 dark:text-green-400">
                    <span class="text-button-bg-hover text-base mr-1.5">Posted
                    </span>
                    |
                    <span class="text-base ml-1.5">{{ formattedCreatedAt(newsItem.createdAt) }}</span>
                  </span>
                </div>
            </router-link>
          </div>
        </section>
      </article>
    </section>
    <Pagination />
    <router-view></router-view>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { ref } from "vue";
import FilterAndSearch from "@/components/FilterAndSearch.vue";
import Pagination from "@/components/Pagination.vue";
import Footer from "@/components/Footer.vue";
import moment from "moment";
import axios from "axios";

const formattedCreatedAt = (createdAt: string): any => {
    const dateTime = moment(createdAt);
    return dateTime.fromNow();
  }

const allNews: any = ref([]);
axios.get('http://localhost:8000/api/v1/posts?category=NEWS')
  .then((response: any) => {
    console.log(response.data);
    allNews.value = response.data;
  })
  .catch((error: string) => {
    console.error(error);
  });
</script>
<style></style>
