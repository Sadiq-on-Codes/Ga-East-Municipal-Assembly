<template>
  <nav class="navbar-component bg-white w-full h-auto border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900 flex">
    <div class=" flex flex-wrap items-center gap-10 mx-auto">
      <a href="/" class="flex items-center">
        <img src="../assets/ga-east-logo.jpg" class="h-auto w-14" alt="Ga East Logo" />
        <span
          class="lg-logo self-center text-md tracking-wide font-bold whitespace-nowrap dark:text-white text-logo-color uppercase text-left">Ga
          East <br />
          Municipal Assembly</span>
        <span
          class="sm-logo self-center text-2xl tracking-wide font-bold whitespace-nowrap dark:text-white text-logo-color uppercase text-left"></span>
      </a>

      <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
        <ul
          class="nav-menu flex flex-col p-2 mt-4 border border-gray-100 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-button-bg dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li v-for="link in links" :key="link.href" class="nav relative"
            :class="{ 'active-nav': isRouteActive(link.href) }">
            <a :href="link.href" v-if="!link.children">
              <button type="button"
                class="block uppercase nav-item py-2 pl-3 pr-4 bg-transparent md:bg-transparent md:px-3 md:py-1 dark:text-white"
                aria-current="page">
                {{ link.text }}
              </button>
            </a>
            <div v-else>
              <button type="button" :id="link.dropdownLink" :data-dropdown-toggle="link.dropdownNumber"
                class="inline-flex items-center z-auto uppercase nav-item py-2 pl-3 pr-4 bg-transparent md:bg-transparent md:px-3 md:py-1 dark:text-white">
                {{ link.text }}
                <span class="hover:fill-white">
                  <svg class="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"></path>
                  </svg>
                </span>
              </button>
              <div :id="link.dropdownNumber"
                class="absolute z-10 shadow-xl hidden bg-white divide-y divide-gray-100 dark:bg-gray-700 dark:divide-gray-600">
                <ul class="shadow-lg text-sm text-gray-700 dark:text-gray-400">
                  <li v-for="child in link.children" :key="child.href">
                    <a :href="child.href">
                      <button type="button"
                        class="block uppercase text-left px-4 py-2 w-full hover:bg-button-bg hover:text-white dark:hover:bg-gray-600 dark:hover:text-white"
                        aria-current="page">
                        {{ child.text }}
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>


      <div class="flex w-fit h-fit order-2">
        <a href="http://outlook.office365.com/" target="_blank"><button type="button"
            class="button uppercase font-semibold focus:outline-none text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-button-bg dark:hover:bg-button-bg-hover dark:focus:bg-button-bg-hover">
            Staff Mail
          </button></a>
        <img src="../assets/coat_of_arms.png" class="h-auto w-14 mx-3" alt="Ga East Logo" />
      </div>

      <div class="flex order-3">
        <button data-collapse-toggle="navbar-cta" type="button"
          class="inline-flex items-center z-20 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
    </div>
  </nav>
  <router-view></router-view>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { initDropdowns, initCollapses, initDrawers } from 'flowbite';
import { url } from "@/functions/endpoint";
import { isRouteActive } from "@/functions/index";
import { encryptString } from '@/functions/encryption';
import axios from "axios";

onMounted(() => {
  initDropdowns(),
    initCollapses(),
    initDrawers()
})

const allDepartments = ref([]);
axios.get(`${url}/departments`)
  .then((response) => {
    allDepartments.value = response.data;
    localStorage.setItem('allDepartments', JSON.stringify(allDepartments.value));
    console.error(allDepartments.value);
  })
  .catch((error) => {
    console.error(error);
  });

const allCategories = ref([]);
axios.get(`${url}/document-category`)
  .then((response) => {
    allCategories.value = response.data;
    localStorage.setItem('allCategories', JSON.stringify(allCategories.value));
    console.error(allCategories.value);
  })
  .catch((error) => {
    console.error(error);
  });

const storedDepartments = localStorage.getItem('allDepartments');
const storedCategories = localStorage.getItem('allCategories');

const links = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { 
    text: 'Documents', 
    href: '/general-documents', 
    children: [],
    dropdownLink: 'dropdownNavbarLink2',
    dropdownNumber: 'dropdownNavbar2'
  },
  { 
    text: 'Departments', 
    href: '/departments', 
    children: [],
    dropdownLink: 'dropdownNavbarLink3',
    dropdownNumber: 'dropdownNavbar3'
  },
  { 
    text: 'Media', 
    href: '/gallery', 
    children: [
      { text: 'News', href: '/all-news' },
      { text: 'Gallery', href: '/gallery' }
    ],
    dropdownLink: 'dropdownNavbarLink4',
    dropdownNumber: 'dropdownNavbar4'
  },
  { text: 'Contact', href: '/contact' }
];


if (storedDepartments) {
  const departments = JSON.parse(storedDepartments);
  const departmentsLink = links.find(link => link.text === 'Departments');
  if (departmentsLink) {
    departmentsLink.children = departments.map((dept: any) => ({
      text: dept.name,
      href: `/departments/${encryptString(dept.id.toString())}`
    }));
  }
}

if (storedCategories) {
  const categories = JSON.parse(storedCategories);
  const documentsLink = links.find(link => link.text === 'Documents');
  if (documentsLink) {
    documentsLink.children = categories.map((category: any) => ({
      text: category.category,
      href: `/general-documents/${encryptString(category.id.toString())}`
    }));
  }
}
</script>
<style scoped>
.nav button {
  border-bottom: 2px solid transparent;
}

.nav button:hover {
  border-bottom: 2px solid #6CC551;
}

.active-nav {
  border-bottom: 2px solid #6CC551;
}

#dropdownNavbar,
#dropdownNavbar2,
#dropdownNavbar3,
#dropdownNavbar4 {
  z-index: 100;
}

.sm-logo, .breadcrumb {
  display: none;
}

.nav-menu {
  color: #fff;
}

@media (max-width: 600px) {

  .nav-menu {
    color: #001630;
    align-items: flex-start;
  }

  .lg-logo, .breadcrumb {
    display: none;
  }

  .sm-logo {
    display: inline-block;
  }
}

@media (max-width: 1200px) {
  .lg-logo {
    display: none;
  }

  .sm-logo {
    display: inline-block;
  }
}
</style>
