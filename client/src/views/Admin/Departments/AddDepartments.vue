<template>
    <div class="flex gap-10 flex-col max-w-5xl mx-auto justify-center mt-28 ml-[30%]">
      <h1 class="text-xl uppercase font-semibold text-[#322121] dark:text-white">Add Department</h1>
      <div class="text-left">
        <label
          for="title"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Title</label
        >
        <input
          type="text"
          id="title"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter post title"
          required
        />
      </div>
  
      <div class="text-left h-96 dark:text-white">
        <label class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
          for="user_avatar">Description</label>
        <QuillEditor  contentType="html" theme="snow" />
      </div>
  
      <button
        type="button"
        class="mt-10 self-center w-40 mb-20 button text-white font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-green-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-button-bg dark:hover:bg-button-bg-hover dark:focus:bg-button-bg-hover hover:bg-button-bg-hover"
      >
        Add Slider
      </button>
    </div>
  </template>
  <script setup lang="ts">
  import { initTooltips } from "flowbite";
  import { onMounted } from "vue";
  import { QuillEditor } from '@vueup/vue-quill';
  
  onMounted(() => {
    initTooltips();
  });
  
  </script>
  <style>
  /* * {
    outline: 1px solid;
  } */
  </style>
  