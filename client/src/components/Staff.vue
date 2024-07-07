<template>
  <section class="staff lg:w-3/4 md:w-3/4 my-36 mx-auto lg:px-4">
    <article>
      <div class="staff-section-heading flex justify-between items-center mb-20">
        <h2 class="text-left uppercase text-3xl font-bold dark:text-white">
          Municipal Chief <br />
          Executive
        </h2>
        <router-link to="/about" custom v-slot="{ navigate }"><button @click="navigate" type="button"
            class="button text-white uppercase font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-green-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-button-bg dark:hover:bg-button-bg-hover dark:focus:bg-button-bg-hover hover:bg-button-bg-hover">
            ABOUT US
          </button></router-link>
      </div>

      <section class="staff-section mt-6 flex justify-center gap-5">
        <div class="w-[35%] section-2">
          <div class="bg-[#e9e9e9] w-4/5 px-6 pt-6 my-auto mx-auto">
            <img class="w-full  mx-auto" src="../assets/mce.jpg" alt="" />
            <p class="font-bold dark:text-white mt-2 uppercase">HON. DEBORAH AMPOFO</p>
          </div>
        </div>
      </section>
    </article>
  </section>
</template>
<script setup lang="ts">
</script>
<style scoped>
@media (max-width: 600px) {

  .staff-section {
    flex-direction: column;

  }

  .section-1,
  .section-2 {
    width: 100%;
  }

  .section-2 img {
    width: 100%;
  }
}
</style>

