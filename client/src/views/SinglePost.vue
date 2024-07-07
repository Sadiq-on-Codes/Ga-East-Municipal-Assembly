<template>
  <div class="dark:bg-gray-800 mt-20">
    <Loader class="my-52" v-if="!postData" />
    <section v-else class="single max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
      <div class="single-post flex mb-20 w-full gap-10 justify-around">
        <div class="title flex mt-20 text-left w-1/2 flex-col gap-16 items-left">
          <span class="bg-transparent h-6 text-lg font-medium inline-flex items-center py-0.5 dark:text-green-400">
            <span class="text-button-bg-hover text-lg mr-1.5">Posted on </span>

            <span class="text-lg ml-1.5">{{ moment(postData?.createdAt).format('LL') }}</span>
          </span>
          <h1 class="text-3xl uppercase text-left font-semibold text-[#322121] w-10/12 dark:text-white">
            {{ decodeEntities(postData?.title) }}
          </h1>
        </div>
        <article class="w-1/2">
          <img
            class="relative single-post-image w-full h-40 bg-cover bg-center group overflow-hidden transition duration-300 ease-in-out"
            :src="appendBaseURL(postData.image)" alt="">
          <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center"></div>
        </article>
      </div>
      <div class="mb-20 text-left">
        <div class="text-justify font-base text-black dark:text-white" v-html="decodeEntities(postData?.article)"></div>
      </div>

      <div class="mb-20 text-left">
        <span class="block w-full text-left pb-4 border-b-2 dark:text-white">Comments</span>
        <div class="mx-5 mt-10 flex gap-3">
          <img src="../assets/profile.svg" alt="" />
          <div class="flex content-center my-auto flex-col gap-1.5">
            <span class="text-[#847474] font-semibold uppercase">Abubakar Sadick Yahaya</span>
            <span class="dark:text-white">Ga East is the best municipality in Ghana</span>
          </div>
        </div>

        <div class="mt-20 max-w-2xl mx-auto">
          <form>
            <label for="chat" class="sr-only">Your message</label>
            <div
              class="flex items-center px-3 py-2 bg-transparent rounded-full border border-gray-300 focus:ring-green-500 focus:border-green-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500">
              <input id="chat"
                class="comment block mx-4 p-2.5 w-full :hover-border-0 text-sm text-gray-900 dark:text-white bg-transparent"
                placeholder="Add a comment..." />
              <button type="submit"
                class="inline-flex justify-center p-2 text-button-bg rounded-full cursor-pointer hover:bg-blue-100 dark:text-green-500 dark:hover:bg-gray-600">
                <svg aria-hidden="true" class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z">
                  </path>
                </svg>
                <span class="sr-only">Send message</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="">
        <span class="mb-5 block w-full font-semibold text-left dark:text-white">You may also like</span>
        <article class="">
          <section class="dark:text-white grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-20">
            <div class="cursor-pointer mb-20" v-for="newsItem in allNews" :key="newsItem.id">
              <a :href="'/single-post/' + encryptString(newsItem?.id.toString())">
                <article
                  class="relative w-full h-64 bg-cover bg-center group overflow-hidden transition duration-300 ease-in-out"
                  :style="{ backgroundImage: `url(${appendBaseURL(newsItem.image)})` }">
                  <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-center"></div>
                </article>
                <div class="flex flex-col gap-3 mt-3 text-left">
                  <span
                    class="bg-transparent h-6 text-xs font-medium inline-flex items-center py-0.5 dark:text-green-400">
                    <span class="text-[#25C200] text-base mr-1.5">Posted on
                    </span>
                    <span class="py-1 px-1.5 rounded-md bg-[#EBEEF2] text-base ml-1.5">{{
      moment(newsItem?.createdAt).format('LL') }}</span>
                  </span>
                  <div class="hover:underline text-news-section-text dark:text-white text-lg"
                    v-html="decodeEntities(newsItem?.title?.slice(0, 80))"></div>
                  <div class="hover:underline description font-light text-gray-500 dark:text-gray-400"
                    v-html="decodeEntities(newsItem?.article?.slice(0, 80))"></div>
                </div>
              </a>
            </div>
          </section>
        </article>
      </div>
    </section>
  </div>
  <Footer />
</template>
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import Footer from "@/components/Footer.vue";
import { decodeEntities, appendBaseURL } from "@/functions";
import { decryptString, encryptString } from '@/functions/encryption';
import { url } from "@/functions/endpoint";
import moment from "moment";
import axios from 'axios';
import { useRoute } from "vue-router";
import Loader from "@/components/Loader.vue";

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const route = useRoute();
const postId = computed(() => decryptString(route.params.id.toString()));

const postData: any = ref([]);
axios.get(`${url}/posts/${parseInt(postId.value)}`)
  .then(response => {
    postData.value = response.data;
    console.log(postData.value, 'data');
  })
  .catch(error => {
    console.error(error);
  });

const allNews: any = ref([]);
axios.get(`${url}/posts`, {
  params: {
    limit: 3,
    category: 'NEWS',
    createdAt: { $lt: postData.value?.createdAt }
  }
})
  .then((response) => {
    allNews.value = response.data[1];
    console.log(allNews.value, 'allNews');
  })
  .catch((error) => {
    console.error(error);
  });
</script>
<style scoped>
.comment:hover,
.comment:active,
.comment:focus {
  outline: transparent;
  border: transparent;
  background-color: transparent;
}

.single-post-image {
  width: 100em;
  height: auto;
}

@media (max-width: 600px) {
  .single-post {
    flex-direction: column-reverse;
  }

  h1 {
    font-size: large;
  }

  .title {
    gap: 2em;
    margin-top: 0;
  }

  .single-post {
    margin-top: 0;
    margin-bottom: 0;
  }

  .single-post article, .title {
    width: 100%;
  }

  .single-post-img {
    width: 100%;
  }
}

@media (max-width: 1200px) {
  .single-post {
    flex-direction: column-reverse;
  }

  h1 {
    font-size: xx-large;
  }


  .title {
    gap: 2em;
    margin-top: 0;
  }

  .single-post {
    margin-top: 0;
    margin-bottom: 0;
  }

  .single-post article {
    width: 100%;
  }
}
</style>
