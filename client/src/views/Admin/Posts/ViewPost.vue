<template>
  <div class="flex gap-10 flex-col max-w-7xl mx-auto justify-center mt-28 ml-[22.5%]">
    <h1 class="text-xl uppercase font-semibold text-[#322121] dark:text-white">
      View Posts
    </h1>

    <div class="relative w-full sm:rounded-lg mb-20">
      <table v-if="!loading" class="mb-10 w-full border dark:border-gray-600 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-green-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 w-1/6 py-3">No</th>
            <th scope="col" class="px-6 w-3/6 py-3">Title</th>
            <th scope="col" class="px-6 w-1/6 py-3">Live View</th>
            <th scope="col" class="px-6 w-1/6 py-3">Edit</th>
            <th scope="col" class="px-6 w-1/6 py-3">Delete</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in allNews" :key="item.id">
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="px-6 w-1/6 py-4">{{ calculatePostNumber(index) }}</td>
            <td scope="row" class="px-6 w-3/6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ item.title.slice(0, 80) }}
            </td>
            <td class="px-6 w-1/6 py-4">
              <a target="_blank" :href="`http://localhost:8080/single-post/${item.id}`">Live View</a>
            </td>
            <td class="px-6 w-1/6 py-4">
              <button @click="editPost(item.id)"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
            </td>
            <td class="px-6 w-1/6 py-4">
              <button @click="openDeleteModal(item.id)"
                class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Loader class="my-52" v-else />
      <Pagination  v-model="currentPage" :per-page="perPage" :total-items="count" :layout="'table'"></Pagination>
    </div>
  </div>
  <DeleteModal @deletePost="deletePost" @closeDeleteModal='closeDeleteModal' v-if="deleteModal" />
  <SuccessMessage :showSuccessMessage="showSuccessMessage" :successMessage="successMessage" />
  <ErrorMessage :errorAlert="errorAlert" :errorMessage="errorMessage" />
</template>
<script setup lang="ts">
import DeleteModal from "@/components/DeleteModal.vue";
import { Pagination } from 'flowbite-vue';
import Loader from "@/components/Loader.vue";
import { url } from "@/functions/endpoint";
import axios from "axios";
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import SuccessMessage from "@/components/SuccessMessage.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import { Posts } from "@/types/index";


let count = ref(0);
const postId = ref();
const router = useRouter()
let successMessage = ref('');
let showSuccessMessage = ref(false);
const loading = ref(false);
let errorAlert = ref(false);
let errorMessage = ref('');
const perPage = ref(12);
const currentPage = ref(1);

const calculatePostNumber = (index: number) => {
  return (currentPage.value - 1) * perPage.value + index + 1;
};

const editPost = (postId: number) => {
  router.push({ name: 'EditPost', params: { id: postId } });
}

const deleteModal = ref(false);
const openDeleteModal = (id: number) => {
  postId.value = id;
  deleteModal.value = true;
};

const closeDeleteModal = () => {
  deleteModal.value = false;
};

const deletePost = () => {
  axios.delete(`${url}/posts/delete/${postId.value}`)
    .then((response) => {
      deleteModal.value = false;
      successMessage = response.data
      showSuccessMessage.value = true;
      const deletedIndex = allNews.value.findIndex((item: Posts) => item.id === postId.value);
      if (deletedIndex !== -1) {
        allNews.value.splice(deletedIndex, 1);
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

const allNews: any = ref([]);
const fetchNewsItems = () => {
  loading.value = true;

  axios
    .get(`${url}/posts`, {
      params: {
        category: 'NEWS',
        page: currentPage.value,
        limit: perPage.value
      }
    })
    .then((response: any) => {
      allNews.value = response.data[1];
      count.value = response.data[0].totalLength;
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
