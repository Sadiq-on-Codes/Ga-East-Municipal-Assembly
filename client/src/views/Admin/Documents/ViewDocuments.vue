<template>
  <div class="flex gap-10 flex-col max-w-7xl mx-auto justify-center mt-28 ml-[22.5%]">
    <h1 class="text-xl uppercase font-semibold text-[#322121] dark:text-white">
      View Documents
    </h1>

    <div class="relative w-full sm:rounded-lg mb-20">
      <table v-if="!loading" class="mb-10 w-full border dark:border-gray-600 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">No</th>
            <th scope="col" class="px-6 py-3">Title</th>
            <th scope="col" class="px-6 py-3">Download</th>
            <th scope="col" class="px-6 py-3">Edit</th>
            <th scope="col" class="px-6 py-3">Delete</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in allDocuments" :key="item.id">
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="px-6 py-4">{{ calculatePostNumber(index) }}</td>
            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ item?.title?.slice(0, 80) }}
            </td>
            <td class="px-6 py-4">
              <a target="_blank" :href="item.filename">Download</a>
            </td>
            <td class="px-6 py-4">
              <button @click="editDocument(item.id)"
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
      <Pagination v-if="allDocuments.length > 12" v-model="currentPage" :per-page="perPage" :total-items="count" :layout="'table'"></Pagination>
    </div>
  </div>
  <DeleteModal @deletePost="deleteDocument" @closeDeleteModal='closeDeleteModal' :item="'document'" v-if="deleteModal" />
  <SuccessMessage :showSuccessMessage="showSuccessMessage" :successMessage="successMessage" />
  <ErrorMessage :errorAlert="errorAlert" :errorMessage="errorMessage" />
</template>
<script setup lang="ts">
import { url } from '@/functions/endpoint';
import { encryptString } from '@/functions/encryption';
import axios from 'axios';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import SuccessMessage from "@/components/SuccessMessage.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import DeleteModal from "@/components/DeleteModal.vue";
import { Pagination } from 'flowbite-vue';
import { Posts } from "@/types/index";
import Loader from "@/components/Loader.vue";
import EmptyState from "@/components/EmptyState.vue";

let count = ref(0);
const documentId = ref();
const router = useRouter()
let successMessage = ref('');
let showSuccessMessage = ref(false);
const loading = ref(false);
let errorAlert = ref(false);
let errorMessage = ref('');
let emptyState = ref(false);
const perPage = ref(12);
const currentPage = ref(1);

const calculatePostNumber = (index: number) => {
  return (currentPage.value - 1) * perPage.value + index + 1;
};

const editDocument = (documentId: number) => {
  router.push({ name: 'EditDocument', params: { id: encryptString(documentId.toString()) } });
};

const deleteModal = ref(false);
const openDeleteModal = (id: number) => {
  documentId.value = id;
  deleteModal.value = true;
};

const closeDeleteModal = () => {
  deleteModal.value = false;
};

const deleteDocument = () => {
  axios.delete(`${url}/department-document/delete/${documentId.value}`)
    .then((response) => {
      deleteModal.value = false;
      successMessage = response.data
      showSuccessMessage.value = true;
      const deletedIndex = allDocuments.value.findIndex((item: Posts) => item.id === parseInt(documentId.value));
      if (deletedIndex !== -1) {
        allDocuments.value.splice(deletedIndex, 1);
      }
      setTimeout(() => {
        showSuccessMessage.value = false;
      }, 2000)
    })
    .catch((error) => {
      deleteModal.value = false;
      errorAlert.value = true;
      setTimeout(() => {
        errorAlert.value = false;
      }, 2500)
      errorMessage.value = error.message
    });
};

const allDocuments: any = ref([]);
const fetchNewsItems = () => {
  loading.value = true;
  emptyState.value = false;
  axios
    .get(`${url}/department-document`, {
      params: {
        page: currentPage.value,
        limit: perPage.value
      }
    })
    .then((response: any) => {
      allDocuments.value = response.data;
      // count.value = response.data[0].totalLength;
    })
    .catch((error: string) => {
      console.error(error);
    })
    .finally(() => {
      loading.value = false;
    });
};

watch(currentPage, fetchNewsItems);
fetchNewsItems();
</script>
<style></style>
  