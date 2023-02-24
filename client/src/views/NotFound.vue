<template>
  <div
    class="w-full h-screen flex flex-col items-center justify-center dark:bg-gray-800"
  >
    <div class="flex flex-col items-center justify-center">
      <img
        class="w-20 mb-10 h-auto"
        src="../assets/logo-transparent.png"
        alt=""
      />
      <h1
        class="text-9xl font-extrabold dark:text-white text-gray-900 tracking-widest"
      >
        404
      </h1>
      <p
        class="text-3xl md:text-4xl lg:text-5xl dark:text-white text-gray-800 mt-12"
      >
        Page Not Found
      </p>
      <p class="md:text-lg lg:text-xl dark:text-white text-gray-600 mt-8">
        Sorry, the page you are looking for could not be found.
      </p>
      <router-link to="/" custom v-slot="{ navigate }">
        <button
          @click="navigate"
          class="flex items-center space-x-2 bg-button-bg hover:bg-button-bg-hover text-gray-100 px-4 py-2 mt-12 rounded transition duration-150"
          title="Return Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>Return Home</span>
        </button>
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style></style>
