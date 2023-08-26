<template>
  <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div class="px-3 py-3 lg:px-5 lg:pl-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-start">
          <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar"
            type="button"
            class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none md:hidden focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span class="sr-only">Open sidebar</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path clip-rule="evenodd" fill-rule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
              </path>
            </svg>
          </button>
          <a href="" class="flex ml-2 md:mr-24">
            <img src="../../assets/logo-transparent.png" class="h-8 mr-3" alt="Ga East Municipal Logo" />
            <span
              class="lg-logo self-center text-2xl tracking-wide font-bold whitespace-nowrap dark:text-white text-logo-color uppercase text-left">G.E.M.A</span>
          </a>
        </div>
        <div class="flex items-center">
          <div class="flex gap-3 items-center ml-3">
            <p class="text-sm text-gray-900 dark:text-white" role="none">{{ email }}
            </p>
            <div>

              <button type="button"
                class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                aria-expanded="false" data-dropdown-toggle="dropdown-user">
                <span class="sr-only">Open user menu</span>
                <img class="w-8 h-8 rounded-full" src="../../assets/profile.svg" alt="user photo" />
              </button>
            </div>
            <div
              class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
              id="dropdown-user">
              <ul class="py-1 text-left" role="none">
                <router-link to="/admin/dashboard" custom v-slot="{ navigate }" exact-active-class="active-nav">
                  <li @click="navigate">
                    <a href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                      role="menuitem">Dashboard</a>
                  </li>
                </router-link>
                <li>
                  <button @click="logout"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                    role="menuitem">
                    Sign out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <aside id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    aria-label="Sidebar">
    <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
      <ul class="space-y-2">
        <router-link to="/admin/dashboard" custom v-slot="{ navigate }" exact-active-class="active-nav">
          <li @click="navigate">
            <a
              class="flex cursor-pointer items-center p-2 hover:text-button-bg-hover text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg aria-hidden="true"
                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg><span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Dashboard</span>
            </a>
          </li>
        </router-link>

        <li>
          <button type="button"
            class="flex items-center w-full hover:text-button-bg-hover p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
              <path
                d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
            </svg>
            <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Posts</span>
            <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <ul id="dropdown-example" class="hidden py-2 space-y-2">
            <router-link to="/admin/new-post" custom v-slot="{ navigate }" exact-active-class="active-nav">
              <li @click="navigate">
                <button
                  class="flex items-center hover:text-button-bg-hover w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  New Post
                </button>
              </li>
            </router-link>
            <router-link to="/admin/view-posts" custom v-slot="{ navigate }" exact-active-class="active-nav">
              <li @click="navigate">
                <a
                  class="flex items-center hover:text-button-bg-hover w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">View
                  Posts</a>
              </li>
            </router-link>
          </ul>
        </li>
        <li>
          <button type="button"
            class="flex items-center w-full p-2 text-base font-normal hover:text-button-bg-hover text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-example" data-collapse-toggle="dropdown-example2">
            <svg
              class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
              <path
                d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
            </svg>
            <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Documents</span>
            <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <ul id="dropdown-example2" class="hidden py-2 space-y-2">
            <router-link to="/admin/add-document" custom v-slot="{ navigate }" exact-active-class="active-nav">
              <li @click="navigate">
                <a
                  class="flex items-center hover:text-button-bg-hover w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Add
                  Document</a>
              </li>
            </router-link>

            <router-link to="/admin/view-documents" custom v-slot="{ navigate }" exact-active-class="active-nav">
              <li @click="navigate">
                <a
                  class="flex items-center hover:text-button-bg-hover w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">View
                  Documents</a>
              </li>
            </router-link>

          </ul>
        </li>
        <li>
          <button type="button"
            class="flex items-center hover:text-button-bg-hover w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            aria-controls="dropdown-example" data-collapse-toggle="dropdown-example3">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 16 12">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h14M1 6h14M1 11h7" />
            </svg>
            <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Slider</span>
            <svg sidebar-toggle-item class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          <ul id="dropdown-example3" class="hidden py-2 space-y-2">
            <router-link to="/admin/add-slider" custom v-slot="{ navigate }" exact-active-class="active-nav">
              <li @click="navigate">
                <a
                  class="flex items-center w-full hover:text-button-bg-hover p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Add
                  Slider</a>
              </li>
            </router-link>
            <router-link to="/admin/view-sliders" custom v-slot="{ navigate }" exact-active-class="active-nav">
              <li @click="navigate">
                <a
                  class="flex items-center w-full p-2 hover:text-button-bg-hover text-base font-normal text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">View
                  Slider</a>
              </li>
            </router-link>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
  <router-view></router-view>
</template>
<script setup lang="ts">
import { onMounted, computed } from "vue";
import { initDrawers, initDropdowns, initCollapses } from "flowbite";
import { useStore } from "vuex";
import router from "@/router";

onMounted(() => {
  initDrawers();
  initDropdowns();
  initCollapses();
});

const store = useStore();
const email = computed(() => store.getters.email);

const logout = () => {
  store.dispatch("logout");
  router.push("/login");
};
</script>
<style scoped>
/* .navbar-component {
  display: none;
} */
.active-nav {
  background-color: green;
}</style>
