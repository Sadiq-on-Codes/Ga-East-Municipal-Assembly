<template>
  <div class="mx-auto max-w-7xl relative">
    <div
      class="mx-4 flex gap-4 items-center justify-between pb-4 sm:flex-row xs:flex-row"
    >
      <div class="my-16 w-96">
        <!-- Dropdown menu -->
        <div>
          <select
            id="countries"
            class="bg-gray-50 border h-10 border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
          >
            <option selected>Select duration</option>
            <option value="yesterday">Yesterday</option>
            <option value="last-week">Last Week</option>
            <option value="last-month">Last Month</option>
            <option value="last-year">Last Year</option>
          </select>
        </div>
      </div>
      <form class="flex items-center w-96">
        <label for="simple-search" class="sr-only">Search</label>
        <div class="relative w-full">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="simple-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-green-500 focus:border-green-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="Search"
            required
          />
        </div>
        <button
          type="submit"
          class="p-2.5 ml-2 text-sm font-medium text-white bg-button-bg border border-green-700 hover:bg-button-bg focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <span class="sr-only">Search</span>
        </button>
      </form>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style scoped></style>
