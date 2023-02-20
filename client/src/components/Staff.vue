<template>
    <section class="staff lg:w-3/4 md:w-3/4 mt-36 mx-auto lg:px-4">
      <article>
        <div class="mx-4 staff-section-heading flex justify-between items-center mb-20">
          <h2 class="text-left text-3xl font-bold dark:text-white">
            OUR STAFF<br />
            HEAD
          </h2>
          <router-link to="/about" custom v-slot="{ navigate }"><button @click="navigate" type="button"
              class="button text-white uppercase font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-green-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-button-bg dark:hover:bg-button-bg-hover dark:focus:bg-button-bg-hover hover:bg-button-bg-hover">
              ABOUT US
            </button></router-link>
        </div>

        <section v-for="(item, i) in staff" :key="i" class="staff-section mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-20">
          <div>
            <article class="relative bg-cover bg-center group overflow-hidden transition duration-300 ease-in-out">
              <div class="staff-pic relative w-full h-full lg:px-4 flex justify-center items-end">
                <img class="w-96" :src="item.backgroundImage" alt="" />
                <img class="absolute top-0 left-0 ml-6 w-96" :src="item.imageUrl" alt="" />
              </div>
            </article>
            <div class="title mx-5 flex justify-between mb-10 mt-5">
              <span class="font-bold dark:text-white">{{ item.staffName }}</span>
              <span class="text-gray-400">{{ item.role }}</span>
            </div>
          </div>
        </section>
      </article>
    </section>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const staff = ref([{
  staffName: 'HON. ELIZABETH KAAKIE MANN',
  role: 'MCE',
  imageUrl: require('../assets/mce.png'),
  backgroundImage: require('../assets/background-1.png')
}, {
  staffName: 'Mr. Emmanuel Kwame Kungi',
  role: 'MCD',
  
  backgroundImage: require('../assets/background-2.png'),
}, {
  staffName: 'Municipal Engineer',
  role: 'ENGINEER',
  
  backgroundImage: require('../assets/background-3.png'),
},])
</script>
