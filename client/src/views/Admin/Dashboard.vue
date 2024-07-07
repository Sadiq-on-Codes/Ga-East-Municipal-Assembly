<template>
    <div class="flex h-full gap-10 flex-col max-w-5xl mx-auto justify-center mt-28 ml-[22.5%]">
      <h1 class="text-xl text-center uppercase font-semibold text-[#322121] dark:text-white">Dashboard</h1>

      <div class="flex flex-wrap justify-evenly gap-10">
        <div>
          <span class="text-xl">Number of Posts</span>
          <span class="block text-4xl">{{postCount}}</span>
        </div>
        <div>
          <span class="text-xl">Number of Documents</span>
          <span class="block text-4xl">{{documentsCount}}</span>
        </div>
        <div>
          <span class="text-xl">Number of Sliders</span>
          <span class="block text-4xl">{{sliderCount}}</span>
        </div>
      </div>
      </div>
</template>
<script setup lang="ts">
import { url } from "@/functions/endpoint";
import store from "@/store";
import axios from "axios";
import { ref } from "vue";

const documentsCount = ref();
const postCount = ref();
const sliderCount = ref();

axios.get(`${url}/document-category`)
  .then((response: any) => {
    documentsCount.value = response.data.length;
  });

  axios.get(`${url}/posts`)
  .then((response: any) => {
    postCount.value = response.data[1].length;
  });

  axios.get(`${url}/slider`)
  .then((response: any) => {
    sliderCount.value = response.data[1].length;
  });


</script>
<style>
    
</style>import axios from "axios";
