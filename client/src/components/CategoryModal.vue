<template>
    <div id="authentication-modal" tabindex="-1" aria-hidden="true"
        class="fixed top-0 left-0 right-0 z-50 flex justify-center items-center w-full p-4 overflow-x-hidden shadow-lg bg-gray-700 bg-opacity-50 overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button @click="$emit('closeCategoryModal')" type="button"
                    class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                    <h3 class="mb-4 text-left text-xl font-medium text-gray-900 dark:text-white">{{ typeOfCategory }}</h3>
                    <form class="space-y-6" action="#">
                        <div>
                            <label for="category"
                                class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label
                                }}</label>
                            <input type="text" v-model="enteredCategory" name="category" id="category"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-button-bg focus:border-button-bg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                :placeholder="placeholder" required />
                        </div>
                    </form>
                </div>
                <div class="pb-6 text-center">
                    <button @click="addCategory"  type="button"
                        class="text-white w-fit bg-button-bg hover:bg-button-bg-hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex justify-center items-center disabled:opacity-50">
                        Add Category
                    </button>
                    <button @click="$emit('closeCategoryModal')" type="button"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No,
                        cancel</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, computed  } from 'vue';

defineProps({
    typeOfCategory: String,
    label: String,
    placeholder: String
});

const emits: any = defineEmits();
let enteredCategory = '';

const isEnteredCategoryEmpty = computed(() => enteredCategory.trim().length === 0);

const addCategory = () => {
    emits('addCategory', enteredCategory);
    enteredCategory = '';
};
</script>