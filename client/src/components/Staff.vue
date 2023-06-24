<template>
  <section class="staff lg:w-3/4 md:w-3/4 my-36 mx-auto lg:px-4">
    <article>
      <div class="staff-section-heading flex justify-between items-center mb-20">
        <h2 class="text-left uppercase text-3xl font-bold dark:text-white">
          Muncipal Chief <br />
          Executive
        </h2>
        <router-link to="/about" custom v-slot="{ navigate }"><button @click="navigate" type="button"
            class="button text-white uppercase font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-green-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-button-bg dark:hover:bg-button-bg-hover dark:focus:bg-button-bg-hover hover:bg-button-bg-hover">
            ABOUT US
          </button></router-link>
      </div>

      <section class="staff-section mt-6 flex flex-wrap">
        <div class="w-3/5 section-1">
          <h3 class="text-left text-xl font-bold mb-5">Hon. Elizabeth Kaakie Mann's First 100 Days in Office</h3>
          <div class="text-justify" v-for="paragraph  in paragraphs">
            <p class=" mb-5">{{ paragraph }}</p>
          </div>

        </div>
        <div class="w-2/5 my-auto section-2">
          <article class="relative bg-cover bg-center group overflow-hidden transition duration-300 ease-in-out">
            <div class="staff-pic relative w-full h-full lg:px-4 flex justify-center items-end">
              <img class="" src="../assets/background-1.png" alt="" />
              <img class="absolute bottom-0 left-0 right-0 mx-auto" src="../assets/mce.png" alt="" />
            </div>
          </article>
          <p class="font-bold dark:text-white mt-2 uppercase">HON. ELIZABETH KAAKIE MANN</p>
        </div>
      </section>
    </article>
  </section>
</template>
<script setup lang="ts">
const paragraphs = [
  "Hon. Elizabeth Kaakie Mann, the Municipal Chief Executive (MCE) for the Ga East Municipal Assembly (GEMA), has made remarkable strides in her first 100 days in office. Her commitment to punctuality, inclusive leadership, and dedication to progress has garnered admiration from colleagues and staff.",
  "Hon. Kaakie Mann has prioritized stakeholder engagements, actively seeking input from traditional leaders, residents' associations, and market traders. Through collaboration and valuable insights, she is addressing the municipality's developmental needs and fostering a sense of community.",
  "Enhancing security and easing traffic congestion have been key areas of focus for Hon. Kaakie Mann. She has distributed streetlights to improve visibility, reducing crime rates in the municipality. Additionally, she is collaborating with relevant agencies to install traffic lights strategically, improving traffic flow and ensuring smoother transportation.",
  "Hon. Kaakie Mann's commitment to development extends to sanitation and job creation. She has organized clean-up exercises, creating awareness about the 'Operation Clean Your Frontage' initiative while generating direct employment opportunities. Furthermore, she has facilitated important projects, such as the construction of a modern courts complex and the commissioning of an office for the National Health Insurance Scheme.",
  "Hon. Elizabeth Kaakie Mann's first 100 days in office reflect her visionary leadership and determination to drive progress in the Ga East Municipal Assembly. Through inclusive engagement, security enhancements, and initiatives for sanitation and job creation, she is setting a strong foundation for the municipality's future growth and development."
];
</script>
<style scoped>
@media (max-width: 600px) {
  .staff-section {

    flex-direction: column;
  }

  .section-1, .section-2 {
    width: 100%;
  }
}
</style>

