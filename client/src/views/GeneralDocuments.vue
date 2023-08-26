<template>
  <div class="flex flex-col justify-between">
    <section class="max-w-7xl w-full my-16 mx-auto px-4 sm:px- mb-20 lg:px-4">
      <div class="flex justify-start mb-8">
        <span class="text-4xl font-bold text-left">General Documents</span>
      </div>
      <div>
        <div :id="'accordion-collapse'"
          data-accordion="open">
          <div v-for="(document, index) in allDocuments" :key="document.id" class="mb-6">
            <h2 :id="`accordion-collapse-heading-${index + 1}`">
              <button type="button"
                class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-r-2 border-t-2 border-b-2 border-gray-200 rounded-t-xl focus:ring-0 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                :data-accordion-target="`#accordion-collapse-body-${index + 1}`" :aria-expanded="index === 1 ? false : true"
                :aria-controls="`accordion-collapse-body-${index + 1}`">
                <span>{{ document.title }}</span>
                <!-- <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5 5 1 1 5" />
                </svg> -->
              </button>
            </h2>
            <div :id="`accordion-collapse-body-${index + 1}`" class=""
              :aria-labelledby="`accordion-collapse-heading-${index + 1}`">
              <div
                class="p-5 border border-r-2 border-l-2 border-b-2 border-gray-200 rounded-b-xl dark:border-gray-700 dark:bg-gray-900">
                <a :href="document.image" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline">
                  <div class="flex gap-4">
                    <img src="../assets/document.svg" alt="document logo">
                    <div class="flex items-start justify-center flex-col">
                      <!-- <p class="mb-2 text-gray-500 dark:text-gray-400 capitalize">{{ document.title }}</p> -->
                      <p class="text-[#7A7878] text-md text-gray-500 dark:text-gray-400">uploaded {{
                        moment(document.createdAt).format('LL') }}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Loader class="my-52" v-if="allDocuments.length < 1" />
    </section>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { initDropdowns, initCollapses, initAccordions } from 'flowbite'
import Footer from '@/components/Footer.vue';
import Loader from "@/components/Loader.vue";
import { url } from "@/functions/endpoint";
import { onMounted, ref } from 'vue';
import moment from "moment"
import axios from 'axios';

onMounted(() => {
  initDropdowns(),
    initCollapses(),
    initAccordions()
})

const allDocuments: any = ref([]);
axios.get(`${url}/posts`, {
  params: {
    category: 'Document',
  }
}).then((response: any) => {
  console.log(response.data);
  allDocuments.value = response.data[1];
})
  .catch((error: string) => {
    console.error(error);
  });

</script>
<style>
/* * {
    outline: 1px solid;
} */
</style>