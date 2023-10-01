<template>
  <div class="flex gap-10 flex-col max-w-7xl mx-auto justify-center mt-28 ml-[22.5%]">
    <h1 class="text-xl uppercase font-semibold text-[#322121] dark:text-white">
      View Departments
    </h1>

    <div class="text-left dark:text-white">
      <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
        category</label>
      <select placeholder="Select category" id="countries" v-model="category" @change="fetchNewsItems"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option disabled>Select Category</option>
        <option>DEPARTMENTS</option>
        <option>UNITS</option>
      </select>
    </div>

    <div class="relative h-full w-full sm:rounded-lg mb-20">
      <table v-if="!loading" class="mb-10 w-full border dark:border-gray-600 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">No</th>
            <th scope="col" class="px-6 py-3">Title</th>
            <!-- <th scope="col" class="px-6 py-3">Description</th> -->
            <th v-if="category === 'UNITS'" scope="col" class="px-6 py-3">Department</th>
            <th scope="col" class="px-6 py-3">View</th>
            <th scope="col" class="px-6 py-3">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in allDepartments" :key="item.id">
            <td class="px-6 py-4">{{ calculatePostNumber(index) }}</td>
            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ category === "DEPARTMENTS" ? item?.name?.slice(0, 80) : item?.title?.slice(0, 80) }}
            </td>
            <!-- <td scope="row" v-html="decodeEntities(item?.about?.slice(0, 80))" class="px-6 w-3/6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            </td> -->
            <td v-if="category === 'UNITS'" scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ item?.departmentId }}
            </td>
            <td class="px-6 py-4">
              <button @click="editDepartment(item.id)"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
            </td>
            <td class="px-6 py-4">
              <button @click="openDeleteModal(item.id)"
                class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Loader class="my-52" v-else />
      <EmptyState :showEmptyState="emptyState" />
      <Pagination  v-model="currentPage" :per-page="perPage" :total-items="count" :layout="'table'"></Pagination>
    </div>
  </div>
  <DeleteModal @deletePost="deleteDocument" @closeDeleteModal='closeDeleteModal' :item="'department'" v-if="deleteModal" />
  <SuccessMessage :showSuccessMessage="showSuccessMessage" :successMessage="successMessage" />
  <ErrorMessage :errorAlert="errorAlert" :errorMessage="errorMessage" />
  
</template>
<script setup lang="ts">
import { ref, watch } from 'vue';
import { Pagination } from 'flowbite-vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
import { url } from '@/functions/endpoint';
import { decodeEntities } from "@/functions";
import DeleteModal from "@/components/DeleteModal.vue";
import SuccessMessage from "@/components/SuccessMessage.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import Loader from "@/components/Loader.vue";
import EmptyState from "@/components/EmptyState.vue";
import { Posts } from '@/types';

let count = ref(0);
const postId = ref();
const router = useRouter()
let successMessage = ref('');
let showSuccessMessage = ref(false);
const loading = ref(false);
let errorAlert = ref(false);
let errorMessage = ref('');
let emptyState = ref(false);
const perPage = ref(12);
const currentPage = ref(1);
const category = ref<string>("DEPARTMENTS")

const calculatePostNumber = (index: number) => {
  return (currentPage.value - 1) * perPage.value + index + 1;
};

const editDepartment = (departmentId: number) => {
  router.push({ name: 'EditDepartment', params: { id: departmentId } });
};

const deleteModal = ref(false);
const openDeleteModal = (id: number) => {
  postId.value = id;
  deleteModal.value = true;
};

const closeDeleteModal = () => {
  deleteModal.value = false;
};

const deleteDocument = async () => {
  try {
    const response = await axios.delete(
      category.value === 'DEPARTMENTS'
        ? `${url}/departments/delete/${postId.value}`
        : `${url}/unit/delete/${postId.value}`
    );

    deleteModal.value = false;
    successMessage = response.data;
    showSuccessMessage.value = true;

    const deletedIndex = allDepartments.value.findIndex((item: any) => item.id === postId.value);
    if (deletedIndex !== -1) {
      allDepartments.value.splice(deletedIndex, 1);
    }

    setTimeout(() => {
      showSuccessMessage.value = false;
    }, 2000);
  } catch (error: any) {
    deleteModal.value = false;
    errorAlert.value = true;
    errorMessage.value = error.message;

    setTimeout(() => {
      errorAlert.value = false;
    }, 2500);
  }
};


const allDepartments: any = ref([]);
const fetchNewsItems = () => {
  loading.value = true;
  emptyState.value = false;
  category.value === 'DEPARTMENTS' ? 
  axios
    .get(`${url}/departments`, {
      params: {
        page: currentPage.value,
        limit: perPage.value
      }
    })
    .then((response: any) => {
      allDepartments.value = response.data;
      count.value = response.data?.length;
    })
    .catch((error: string) => {
      console.error(error);
    })
    .finally(() => {
      loading.value = false;
    }) : axios
    .get(`${url}/unit`, {
      params: {
        page: currentPage.value,
        limit: perPage.value
      }
    })
    .then((response: any) => {
      allDepartments.value = response.data[1];
      count.value = response.data[0].totalLength;
    })
    .catch((error: string) => {
      console.error(error);
    })
    .finally(() => {
      loading.value = false;
    })
};

watch(currentPage, fetchNewsItems);
fetchNewsItems();
</script>
<style></style>
  