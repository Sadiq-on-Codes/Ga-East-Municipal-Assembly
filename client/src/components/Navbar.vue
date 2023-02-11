<template>
  <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-50 top-0 left-0 dark:border-gray-600">
    <div class="container flex lg:flex-wrap md:flex-wrap items-center justify-between mx-auto">
      <a href="#" class="flex items-center">
        <img src="../assets/ga-east-logo.jpg" class="h-auto w-14 mr-3" alt="Ga East Logo" />
        <span
          class="lg-logo self-center text-2xl tracking-wide font-bold whitespace-nowrap dark:text-white text-logo-color uppercase text-left">Ga
          East <br /> Municipal Assembly</span>
        <span
          class="sm-logo self-center text-2xl tracking-wide font-bold whitespace-nowrap dark:text-white text-logo-color uppercase text-left">G.E.M.A</span>
      </a>
      <div class="flex md:order-2 nav-buttons">
        <router-link to="/documents">
          <button type="button"
            class="button text-white uppercase font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-button-bg-hover">
            Documents
          </button>
        </router-link>

        <a href="https://gema.gov.gh:2096/" target="_blank"><button type="button"
            class="button nav-item uppercase text-black ml-5 border font-semibold border-black hover:bg-button-bg-200 hover:text-black-300 focus:ring-4 focus:ring-blue-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Staff Mail
          </button></a>

        <button data-collapse-toggle="navbar-sticky" type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul
          class="flex tracking-wide uppercase nav font-bold flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <router-link to="/">
            <li>
              <a href="#"
                class="block nav-item py-3 px-5 hover:text-white bg-blue-700 md:bg-transparent md:px-3 md:py-1 dark:text-white"
                aria-current="page">Home</a>
            </li>
          </router-link>
          <router-link to="/about">
            <li>
              <a href="#"
                class="block nav-item py-2 pl-3 pr-4 hover:text-white bg-blue-700 md:bg-transparent md:px-3 md:py-1 dark:text-white"
                aria-current="page">About</a>
            </li>
          </router-link>
          <router-link to="/project">
            <li class="nav">
              <a href="#"
                class="block nav-item py-2 pl-3 pr-4 hover:text-white bg-blue-700 md:bg-transparent md:px-3 md:py-1 dark:text-white"
                aria-current="page">Projects</a>
            </li>
          </router-link>
          <router-link to="/media">
            <li lass="nav">
              <a href="#"
                class="block nav-item py-2 pl-3 pr-4 hover:text-white bg-blue-700 md:bg-transparent md:px-3 md:py-1 dark:text-white"
                aria-current="page">Media</a>
            </li>
          </router-link>
          <router-link to="/contact">
            <li>
              <a href="#"
                class="block nav-item py-2 pl-3 pr-4 hover:text-white text-nav-text-color bg-blue-700 md:bg-transparent md:px-3 md:py-1 dark:text-white"
                aria-current="page">Contact</a>
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
</script>
<style>
.nav-item {
  background: linear-gradient(0deg, rgb(13, 13, 14), rgb(13, 13, 14)) no-repeat right bottom / 0 var(--bg-h);
  transition: background-size 350ms;
  --bg-h: 100%;
}

.nav-item:where(:hover, :focus-visible) {
  background-size: 100% var(--bg-h);
  background-position-x: left;
}

.nav .router-link-exact-active {
  padding-bottom: 2px;
  border-bottom: 2px solid #6CC551;
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
    display: none
  }

  .lg-logo {
    display: none;
  }

  .sm-logo {
    display: inline-block;
  }
}
</style>
