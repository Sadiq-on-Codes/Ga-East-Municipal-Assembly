<template>
  <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="#" class="flex items-center">
        <img src="../assets/ga-east-logo.jpg" class="h-auto w-14 mr-3" alt="Ga East Logo" />
        <span
          class="lg-logo self-center text-2xl tracking-wide font-bold whitespace-nowrap dark:text-white text-logo-color uppercase text-left">Ga
          East <br />
          Municipal Assembly</span>
        <span
          class="sm-logo self-center text-2xl tracking-wide font-bold whitespace-nowrap dark:text-white text-logo-color uppercase text-left">G.E.M.A</span>
      </a>
      <div class="flex md:order-2">
        <a href="https://gema.gov.gh:2096/" target="_blank"
          ><button
            type="button"
            class="button text-white uppercase font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-button-bg-hover"
          >
            Staff Mail
          </button></a>
        <button data-collapse-toggle="navbar-cta" type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-cta" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul
          class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <router-link to="/" custom v-slot="{ navigate }">
            <li>
              <button @click="navigate" type="button"
                class="block uppercase nav-item  py-2 pl-3 pr-4 hover:text-white bg-transparent md:bg-transparent md:px-3 md:py-1 dark:text-white"
                aria-current="page">
                Home
              </button>
            </li>
          </router-link>
          <router-link to="/about" custom v-slot="{ navigate }">
            <li>
              <button @click="navigate" type="button"
                class="block uppercase nav-item py-2 pl-3 pr-4 hover:text-white bg-transparent md:bg-transparent md:px-3 md:py-1 dark:text-white"
                aria-current="page">
                About
              </button>
            </li>
          </router-link>
          <router-link to="/project" custom v-slot="{ navigate }">
            <li class="nav">
              <button @click="navigate" type="button"
                class="block uppercase nav-item py-2 pl-3 pr-4 hover:text-white bg-transparent md:bg-transparent md:px-3 md:py-1 dark:text-white"
                aria-current="page">
                Projects
              </button>
            </li>
          </router-link>
          <router-link to="/documents" custom v-slot="{ navigate }">
            <li class="nav">
              <button @click="navigate" type="button"
                class="block uppercase nav-item py-2 pl-3 pr-4 hover:text-white bg-transparent md:bg-transparent md:px-3 md:py-1 dark:text-white"
                aria-current="page">
                Documents
              </button>
            </li>
          </router-link>
          <router-link to="/media" custom v-slot="{ navigate }">
            <li class="nav">
              <button @click="navigate" type="button"
                class="block uppercase nav-item py-2 pl-3 pr-4 hover:text-white bg-transparent md:bg-transparent md:px-3 md:py-1 dark:text-white"
                aria-current="page">
                Media
              </button>
            </li>
          </router-link>
          <router-link to="/contact" custom v-slot="{ navigate }">
            <li>
              <button @click="navigate" type="button"
                class="block uppercase nav-item py-2 pl-3 pr-4 hover:text-white text-nav-text-color bg-transparent md:bg-transparent md:px-3 md:py-1 dark:text-white"
                aria-current="page">
                Contact
              </button>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>

  <router-view></router-view>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import { initDropdowns, initCollapses, initDrawers } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initDropdowns(),
    initCollapses(),
    initDrawers()
})

</script>
<style>
ul li{
  background: linear-gradient(0deg, rgb(13, 13, 14), rgb(13, 13, 14)) no-repeat right bottom / 0 var(--bg-h);
  transition: background-size 350ms;
  --bg-h: 100%;
}

ul li:where(:hover, :focus-visible) {
  background-size: 100% var(--bg-h);
  background-position-x: left;
}

ul li .router-link-exact-active {
  padding-bottom: 2px;
  border-bottom: 2px solid #6cc551;
}

.sm-logo {
  display: none;
}

@media (max-width: 600px) {
  .container {
    gap: 1em;
    flex-wrap: nowrap;
  }

  .nav-buttons {
    gap: 0;
    width: 100%;
    display: none;
    justify-content: flex-end;
  }

  .lg-logo {
    display: none;
  }

  .sm-logo {
    display: inline-block;
  }
}

@media (max-width: 1200px) {
  .button {
    display: none;
  }

  .lg-logo {
    display: none;
  }

  .sm-logo {
    display: inline-block;
  }
}
</style>
