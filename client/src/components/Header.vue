<template>
  <nav class="top-nav bg-white border-gray-200 dark:bg-gray-900">
    <div
      class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5"
    >
      <a href="#" class="flex items-center">
        <img
          src="../assets/ga-east-logo.jpg"
          class="logo mr-3 sm:h-9"
          alt="Ga East Logo"
        />
        <span
          class="self-center text-text-color text-2xl font-semibold whitespace-nowrap dark:text-white"
          >Ga East Municipal Assembly</span
        >
      </a>
      <div class="flex items-center">
        <a
          href="#"
          class="mr-6 text-lg font-medium text-gray-500 dark:text-white hover:underline"
          >info@gema.gov.gh</a
        >
        <a
          href="#"
          class="text-lg px-2 py-2 rounded bg-nav-bg font-medium text-white dark:text-blue-500 hover:underline"
          >Staff Mail</a
        >
      </div>
    </div>
  </nav>

  <nav
    class="bottom-nav px-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700"
  >
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <button
        data-collapse-toggle="navbar-dropdown"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-dropdown"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <router-link to="/">
            <li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-xl text-text-color-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
                >Home</a
              >
            </li>
          </router-link>

          <router-link to="/projects">
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class="flex items-center text-xl text-text-color-3 justify-between w-full py-2 pl-3 pr-4 font-medium rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Projects
                <svg
                  class="w-5 h-5 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <!-- Dropdown menu -->
              <div
                id="dropdownNavbar"
                class="z-10 hidden font-normal divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Dashboard</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Settings</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Earnings</a
                    >
                  </li>
                </ul>
                <div class="py-1">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >Sign out</a
                  >
                </div>
              </div>
            </li>
          </router-link>

          <router-link to="/documents"
            ><li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-xl text-text-color-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Documents</a
              >
            </li>
          </router-link>

          <router-link to="/projects">
            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-xl text-text-color-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
              >
                Projects
                <svg
                  class="w-5 h-5 ml-1"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
              <!-- Dropdown menu -->
              <div
                id="dropdownNavbar"
                class="z-10 hidden font-normal divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-400"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Dashboard</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Settings</a
                    >
                  </li>
                  <li>
                    <a
                      href="#"
                      class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >Earnings</a
                    >
                  </li>
                </ul>
                <div class="py-1">
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >Sign out</a
                  >
                </div>
              </div>
            </li>
          </router-link>

          <router-link to="/media"
            ><li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-xl text-text-color-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Media</a
              >
            </li>
          </router-link>

          <router-link to="/about"
            ><li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-xl text-text-color-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >About</a
              >
            </li></router-link
          >

          <router-link to="/contact"
            ><li>
              <a
                href="#"
                class="block py-2 pl-3 pr-4 text-xl text-text-color-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >Contact</a
              >
            </li></router-link
          >
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script setup>
import { useRouter } from "vue-router";
</script>

<style>
.top-nav,
.bottom-nav {
  width: 65vw;
  margin: 0 auto;
}
</style>
