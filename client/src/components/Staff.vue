<template>
    <section class="staff lg:w-3/4 md:w-3/4 mt-36 mx-auto sm:px-6 lg:px-4">
      <article>
        <div class="staff-section-heading flex justify-between items-center mb-20">
          <h2 class="text-left text-3xl font-bold dark:text-white">
            OUR STAFF<br />
            HEAD
          </h2>
          <router-link to="/about" custom v-slot="{ navigate }"><button @click="navigate" type="button"
              class="button text-white uppercase font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-green-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-button-bg dark:hover:bg-button-bg-hover dark:focus:bg-button-bg-hover hover:bg-button-bg-hover">
              ABOUT US
            </button></router-link>
        </div>

        <section class="staff-section mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-20">
          <div>
            <article class="relative bg-cover bg-center group overflow-hidden transition duration-300 ease-in-out">
              <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-end">
                <img class="w-96" src="../assets/background-1.png" alt="" />
                <img class="absolute top-0 left-0 ml-6 w-96" src="../assets/mce.png" alt="" />
              </div>
            </article>
            <div class="title mx-5 flex justify-between mt-5">
              <span class="font-bold dark:text-white">HON. ELIZABETH KAAKIE MANN</span>
              <span class="text-gray-400">MCE</span>
            </div>
          </div>

          <div>
            <article class="mt-16 relative bg-cover bg-center group overflow-hidden transition duration-300 ease-in-out">
              <div class="relative w-full h-full px-4 sm:px-6 lg:px-4 flex justify-center items-end">
                <img class="w-96" src="../assets/background-2.png" alt="" />
              </div>
            </article>
            <div class="title mx-5 flex justify-between mt-5">
              <span class="font-bold uppercase dark:text-white">Mr. Emmanuel Kwame Kungi</span>
              <span class="text-gray-400">MCD</span>
            </div>
          </div>

          <div class="mb-12">
            <article
              class="staff-mobile mt-36 relative bg-cover bg-center group overflow-hidden transition duration-300 ease-in-out">
              <div class="relative w-full h-auto px-4 sm:px-6 lg:px-4 flex justify-center items-end">
                <img class="w-96" src="../assets/background-3.png" alt="" />
              </div>
            </article>
            <div class="title mx-5 flex justify-between mt-5">
              <span class="font-bold uppercase dark:text-white">Municipal Engineer</span>
              <span class="text-gray-400">ENGINEER</span>
            </div>
          </div>
        </section>
      </article>
    </section>
</template>
