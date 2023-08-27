<template>
    <div class="flex gap-10 flex-col max-w-5xl mx-auto justify-center mt-28 ml-[30%]">
      <h1 class="text-xl uppercase font-semibold text-[#322121] dark:text-white">Add Slider</h1>
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
  
      <div class="text-left">
        <label
          for="description"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Short description</label
        >
        <input
          type="text"
          id="description"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter post description"
          required
        />
      </div>
  
      <div class="mx-auto w-full">
        <label
          class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
          for="user_avatar"
          >Upload slider image</label
        >
        <input
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="user_avatar_help"
          id="user_avatar"
          type="file"
        />
        <div
          class="mt-1 text-sm text-gray-500 dark:text-gray-300"
          id="user_avatar_help"
        ></div>
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
  
  onMounted(() => {
    initTooltips();
  });
  
  </script>
  <style>
  /* * {
    outline: 1px solid;
  } */
  </style>
  