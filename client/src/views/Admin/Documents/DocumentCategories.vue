<template>
    <div class="flex gap-10 flex-col max-w-7xl mx-auto justify-center mt-28 ml-[22.5%]">
        <h1 class="text-xl uppercase font-semibold text-[#322121] dark:text-white">
            Document Categories
        </h1>

        <div class="flex justify-end">
            <button @click="openModal = true" type="button"
                class="text-white w-fit bg-button-bg hover:bg-button-bg-hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex justify-center items-center disabled:opacity-50">
                Add Category
            </button>
        </div>
        <CategoryModal v-if="openModal" @closeCategoryModal="openModal = false" @addCategory="handleAddCategory"
            :typeOfCategory="'Add Document Category'" :label="'Document Category'"
            :placeholder="'Enter document category'" />
        <div class="relative sm:rounded-lg w-full mx-auto">
            <table class="w-full border dark:border-gray-600 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">No</th>
                        <th scope="col" class="px-6 py-3">Category</th>
                        <th scope="col" class="px-6 py-3">No of documents</th>
                    </tr>
                </thead>
                <tbody v-for="(category, index) in allCategories" :key="category.id">
                    <tr
                        class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="px-6 py-4">{{ index + 1 }}</td>
                        <td class="px-6 py-4">{{ }}</td>
                        <td class="px-6 py-4">{{ }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <SuccessMessage :showSuccessMessage="showSuccessMessage" :successMessage="successMessage" />
    <ErrorMessage :errorAlert="errorAlert" :errorMessage="errorMessage" />
</template>
<script setup lang="ts">
import CategoryModal from '@/components/CategoryModal.vue';
import { url } from "@/functions/endpoint";
import axios from 'axios';
import { ref } from 'vue';
import SuccessMessage from "@/components/SuccessMessage.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

const openModal = ref(false);
let successMessage = ref('');
let showSuccessMessage = ref(false);
let errorAlert = ref(false);
let errorMessage = ref('');

const handleAddCategory = (enteredCategory: string) => {
    console.log(enteredCategory);

    axios.post(`${url}/document-category/create/category`, { category: enteredCategory })
        .then(response => {
            showSuccessMessage.value = true
            successMessage =  response.data;
        })
        .catch(error => {
            errorAlert.value = true;
            errorMessage.value = error.message;
        });
};

const allCategories: any = ref([]);
axios.get(`${url}/document-category`)
    .then((response: any) => {
        allCategories.value = response.data;
    })
    .catch((error: string) => {
        console.error(error);
    });
</script>
<style></style>
  