<template>
    <div class="flex flex-col justify-between">
        <section class="max-w-7xl w-full my-16 mx-auto px-4 sm:px- mb-20 lg:px-4">
        <div class="flex justify-start mb-8">
        <span class="text-4xl font-bold text-left">General Documents</span>
      </div>
        <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
                <button type="button"
                    class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-2 border-gray-200 rounded-t-xl focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                    data-accordion-target="#accordion-collapse-body-1" aria-expanded="true"
                    aria-controls="accordion-collapse-body-1">
                    <span>Annual Report</span>
                    <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M9 5 5 1 1 5" />
                    </svg>
                </button>
            </h2>
            <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
                <div class="p-5 border border-2 border-gray-200 rounded-b-xl dark:border-gray-700 dark:bg-gray-900">
                    <p class="mb-2 text-gray-500 dark:text-gray-400"> <a
                            href="/docs/getting-started/introduction/"
                            class="text-blue-600 dark:text-blue-500 hover:underline"></a></p>
                </div>
            </div>
        </div>
    </section>
    <Footer />
    </div>
</template>
<script setup lang="ts">
import { initDropdowns, initCollapses, initAccordions } from 'flowbite'
import Footer from '@/components/Footer.vue';
import { onMounted } from 'vue';

onMounted(() => {
    initDropdowns(),
        initCollapses(),
        initAccordions()
})

</script>
<style></style>