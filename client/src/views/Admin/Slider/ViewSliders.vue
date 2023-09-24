<template>
  <div class="flex gap-10 flex-col max-w-7xl mx-auto justify-center mt-28 ml-[22.5%]">
    <h1 class="text-xl uppercase font-semibold text-[#322121] dark:text-white">
      View Sliders
    </h1>

    <div class="relative h-full w-full sm:rounded-lg">
      <table class="w-full border dark:border-gray-600 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">No</th>
            <th scope="col" class="px-6 py-3">Title</th>
            <th scope="col" class="px-6 py-3">View Slider</th>
            <th scope="col" class="px-6 py-3">Edit</th>
            <th scope="col" class="px-6 py-3">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in allSliders" :key="item.id">
            <td class="px-6 py-4">{{ calculatePostNumber(index) }}</td>
            <td scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ item?.title?.slice(0, 80) }}
            </td>
            <td class="px-6 py-4">
              <a target="_blank" :href="`${imagesUrl}/uploads/${item.image}`">View Slider</a>
            </td>
            <td class="px-6 py-4">
              <button 
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
            </td>
            <td class="px-6 py-4">
              <button @click="openDeleteModal(item.id)"
                class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <DeleteModal @deletePost="deleteSlider" @closeDeleteModal='closeDeleteModal' :item="'slider'" v-if="deleteModal" />
  <SuccessMessage :showSuccessMessage="showSuccessMessage" :successMessage="successMessage" />
  <ErrorMessage :errorAlert="errorAlert" :errorMessage="errorMessage" />
</template>
<script setup lang="ts">
import { url, imagesUrl } from '@/functions/endpoint';
import axios from 'axios';
import { ref, watch } from 'vue';
import { decodeEntities } from "@/functions";
import { useRouter } from 'vue-router';
import DeleteModal from "@/components/DeleteModal.vue";
import SuccessMessage from "@/components/SuccessMessage.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

const sliderId = ref();
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

const deleteModal = ref(false);
const openDeleteModal = (id: number) => {
  sliderId.value = id;
  deleteModal.value = true;
};

const closeDeleteModal = () => {
  deleteModal.value = false;
};

const deleteSlider = async () => {
  try {
    const response = await axios.delete( `${url}/slider/delete/${sliderId.value}`
    );

    deleteModal.value = false;
    successMessage = response.data;
    showSuccessMessage.value = true;

    const deletedIndex = allSliders.value.findIndex((item: any) => item.id === sliderId.value);
    if (deletedIndex !== -1) {
      allSliders.value.splice(deletedIndex, 1);
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

const allSliders: any = ref([]);
const fetchNewsItems = () => {
  loading.value = true;
  axios
    .get(`${url}/slider`, {
      params: {
        page: currentPage.value,
        limit: perPage.value
      }
    })
    .then((response: any) => {
      allSliders.value = response.data[1];
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

  