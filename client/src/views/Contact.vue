<template>
  <div class="bg-white dark:bg-gray-900">
    <section class="w-3/4 py-8 lg:py-16 mx-auto ">
      <div class="flex justify-start mb-8 px-4">
        <span class="text-4xl text-left">We value your feedback,<br> Get in touch!</span>
      </div>

      <div class="px-4 grid contact">
        <div class="">
          <div class="flex justify-between">
            <div class="flex justify-start text-left flex-col gap-4">
              <span class="text-lg font-bold">Public Relations</span>
              <p class="text-md">Ga East Municipal Assembly <br> Head of Client Service Unit & Public
                Relations Officer<br> P. O. Box AQ5 Abokobi </p>
              <p class="text-md">Tel: 0302-2962718/0559920954(Whatsapp)</p>

              <div class="flex justify-start text-left mt-10 flex-col gap-2">
                <span class="text-lg font-bold">Cooperate email</span>
                <p class="text-md">info@gema.gov.gh</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex gap-4 flex-col">
          <div>
            <label for="email" class="block mb-2 text-left text-lg font-medium text-gray-900 dark:text-gray-300">Your
              email</label>
            <input type="email" id="email"
              class="shadow-sm border rounded-lg bg-[#EEEEEE] border-gray-300 text-gray-900 text-sm focus:ring-button-bg focus:border-button-bg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Your name" required />
          </div>
          <div>
            <label for="subject"
              class="block mb-2 text-left text-lg font-medium text-gray-900 dark:text-gray-300">Subject</label>
            <input type="text" id="subject"
              class="block p-3 w-full rounded-lg bg-[#EEEEEE] text-sm text-gray-900 border border-gray-300 shadow-sm focus:ring-button-bg focus:border-button-bg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Let us know how we can help you" required />
          </div>
        </div>
      </div>

      <div class="sm:col-span-2 px-4 mt-8">
        <label for="message" class="block mb-2 text-lg text-left font-medium text-gray-900 dark:text-gray-400 mb-4">Message</label>
        <textarea id="message" rows="6"
          class="block p-2.5 w-full text-sm bg-[#EEEEEE] rounded-lg text-gray-900 shadow-sm border border-gray-300 focus:ring-button-bg focus:border-button-bg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Leave a comment..."></textarea>
      </div>
    </section>
  </div>
  <div>
    <Footer />
  </div>

  <!-- <form action="#" class="space-y-8">
          
          
          <div>
            <button
              type="button"
              class="button text-white uppercase font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-blue-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:bg-button-bg-hover"
            >
              Send Message
            </button>
          </div>
        </form> -->
</template>
<script setup lang="ts">
import Footer from "@/components/Footer.vue";
</script>
<style>
/* * {
  outline: 1px solid;
} */

.contact {
  grid-template-columns: 50% 50%;
}
</style>
