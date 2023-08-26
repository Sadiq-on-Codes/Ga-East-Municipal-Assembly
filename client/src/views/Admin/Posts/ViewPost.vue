<template>
  <div class="flex gap-10 flex-col max-w-7xl mx-auto justify-center mt-28 ml-[22.5%]">
    <h1 class="text-xl uppercase font-semibold text-[#322121] w-10/12 dark:text-white">
      View Posts
    </h1>

    <div class="relative w-full sm:rounded-lg">
      <table class="w-full border dark:border-gray-600 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-green-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 w-1/6 py-3">No</th>
            <th scope="col" class="px-6 w-3/6 py-3">Title</th>
            <th scope="col" class="px-6 w-1/6 py-3">Live View</th>
            <th scope="col" class="px-6 w-1/6 py-3">View</th>
            <th scope="col" class="px-6 w-1/6 py-3">Delete</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in allNews" :key="item.id">
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <td class="px-6 w-1/6 py-4">{{ index + 1 }}</td>
            <td scope="row" class="px-6 w-3/6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {{ item.title.slice(0, 80) }}
            </td>
            <td class="px-6 w-1/6 py-4">
              <a target="_blank" :href="`http://localhost:8080/single-post/${item.id}`">Live View</a>
            </td>
            <td class="px-6 w-1/6 py-4">
              <button @click="editPost(item.id)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
            </td>
            <td class="px-6 w-1/6 py-4">
              <button @click="openDeleteModal(item.id)"
                class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Loader class="my-52" v-if="allNews.length === 0" />
      <Pagination v-if="allNews.length > 0" :totalCount="allNews.length" />
    </div>
  </div>
  <DeleteModal @deletePost="deletePost" @closeDeleteModal='closeDeleteModal' v-if="deleteModal" />
</template>
<script setup lang="ts">
import DeleteModal from "@/components/DeleteModal.vue";
import Pagination from "@/components/Pagination.vue";
import Loader from "@/components/Loader.vue";
import { url } from "@/functions/endpoint";
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

interface News {
  id: number;
  title: string;
  length: number;
  value: any
}

const postId = ref();
const router = useRouter()

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
    .then(response => {
      const deletedIndex = allNews.value.findIndex((item: News) => item.id === postId.value);
      if (deletedIndex !== -1) {
        allNews.value.splice(deletedIndex, 1);
      }
      deleteModal.value = false;
    })
    .catch(error => {
      console.error('Error deleting:', error);
    });
};

const allNews: any = ref([]);
axios.get(`${url}/posts`, {
  params: {
    category: 'NEWS',
  }
})
  .then((response: any) => {
    console.log(response.data);
    allNews.value = response.data[1];
  })
  .catch((error: string) => {
    console.error(error);
  });
</script>
<style></style>
