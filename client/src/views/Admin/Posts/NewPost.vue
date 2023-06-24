<template>
  <div class="flex gap-10 flex-col max-w-5xl mx-auto justify-center mt-28">
    <h1 class="text-xl uppercase font-semibold text-[#322121] w-10/12 dark:text-white">New Post</h1>
    <div class="text-left">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
      <input type="email" id="email"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter post title" required v-model="createPostData.title" />
    </div>

    <div class="text-left h-96 dark:text-white">
      <label class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
        for="user_avatar">Description</label>
      <QuillEditor v-model:content="createPostData.article" contentType="html" theme="snow" />
    </div>

    <div class="text-left mt-20 dark:text-white">
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select category</label>
      <select id="countries" v-model="createPostData.category"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option>News</option>
        <option>Gallery</option>
        <option>Events</option>
        <!-- <option>Germany</option> -->
      </select>
    </div>

    <div class="mx-auto w-full">
      <label class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload post
        image</label>
      <input @change="handleImageChange"
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="user_avatar_help" id="user_avatar" type="file" />
      <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help"></div>
    </div>

    <button type="button"
      class="mt-10 self-center w-40 mb-20 button text-white font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-green-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-button-bg dark:hover:bg-button-bg-hover dark:focus:bg-button-bg-hover hover:bg-button-bg-hover"
      @click="savePost">
      Publish post
    </button>
  </div>
  <div v-if="success"
    class="absolute top-12 mx-auto flex p-4 mb-4 text-sm text-green-800 border border-green-300 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:border-green-800"
    role="alert">
    <svg aria-hidden="true" class="flex-shrink-0 inline w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
        clip-rule="evenodd"></path>
    </svg>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">Success alert!</span> Change a few things up and try submitting again.
    </div>
  </div>
</template>

<script setup lang="ts">
import { initTooltips } from "flowbite";
import { QuillEditor } from '@vueup/vue-quill';
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { onMounted, reactive, ref } from "vue";
import axios from 'axios';

onMounted(() => {
  initTooltips();
});

let success = ref(false);

const createPostData = reactive({
  title: "",
  article: "",
  image: null,
  category: ""
});

const handleImageChange = (event: any) => {
  const file = event.target.files[0];
  const imageUrl = URL.createObjectURL(file);
  createPostData.image = imageUrl;
};

const savePost = async () => {
  try {
    const postData = {
      title: createPostData.title,
      article: createPostData.article,
      image: createPostData.image,
      category: createPostData.category,
    };

    const formData = new FormData();
    formData.append('title', postData.title);
    formData.append('article', postData.article);
    formData.append('category', postData.category);
    formData.append('image', postData.image);

    const response = await axios.post(
      'https://gema-gh-6b3bf99ee2e9.herokuapp.com/api/v1/posts/create/post',
      formData
    );

    // Check if the post request was successful
    if (response.status === 200) {
      success.value = true;
      console.log(response.data);
      createPostData.title = "";
      createPostData.article = "";
      createPostData.image = null;
      createPostData.category = "";
    }
  } catch (error) {
    console.error(error);
  }
};


console.log(createPostData);
</script>

<style scoped>/* * {
  outline: 1px solid;
} */</style>
