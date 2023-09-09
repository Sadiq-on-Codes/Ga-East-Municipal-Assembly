<template>
  <div class="flex gap-10 flex-col max-w-5xl mx-auto justify-center mt-28 ml-[30%]">
    <h1 class="text-xl uppercase font-semibold text-[#322121] dark:text-white">Add Document</h1>

    <div v-if="isEditing && documentInfo.length === 0">
      <Loader class="my-52" />
    </div>

    <div v-else class="flex gap-10 flex-col">
      <div class="text-left">
        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
        <input type="text" id="title"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter document title" required v-model="createDocumentData.title" />
      </div>
      <div class="text-left dark:text-white">
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
          category</label>
        <select placeholder="Select category" id="countries" v-model="createDocumentData.category"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option disabled>Select Category</option>
          <option :value="category.id" v-for="category in allCategories">{{ category.category }}</option>
        </select>
      </div>
      <div class="mx-auto w-full">
        <label class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload
          document</label>
        <input @change="handleImageChange"
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="user_avatar_help" id="user_avatar" type="file" />
        <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help"></div>
      </div>

      <div class="flex justify-center">
        <button @click="saveDocument" type="button"
        :disabled="createDocumentData.title === '' || !createDocumentData.image || createDocumentData.category === '' || uploading"
          class="text-white w-fit mb-20 bg-button-bg hover:bg-button-bg-hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex justify-center items-center disabled:opacity-50">
          <svg v-if="uploading" aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin"
            viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB" />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor" />
          </svg>
          {{ isEditing ? "Update Document" : "Add Document" }}
        </button>
      </div>
    </div>

  </div>
  <SuccessMessage :showSuccessMessage="showSuccessMessage" :successMessage="successMessage" />
  <ErrorMessage :errorAlert="errorAlert" :errorMessage="errorMessage" />
</template>
<script setup lang="ts">
import { url } from "@/functions/endpoint";
import axios from "axios";
import { initTooltips } from "flowbite";
import { computed, onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import SuccessMessage from "@/components/SuccessMessage.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import Loader from "@/components/Loader.vue";

onMounted(() => {
  initTooltips();
  getDocumentDetails()
});

const documentInfo = ref([]);
const getDocumentDetails = async () => {
  if (postId.value !== undefined) {
    isEditing.value = true;
    if (isEditing.value) {
      try {
        const response = await axios.get(`${url}/department-document/${postId.value}`);
        const documentData = response.data;
        documentInfo.value = documentData
        createDocumentData.title = documentData.title;
        createDocumentData.image = documentData.image;
        createDocumentData.category = documentData.category;
        console.log(documentData, 'data');
      } catch (error: any) {
        errorAlert.value = true;
        errorMessage.value = error.message
      }
    } else {
      console.log('creating');
    }
  }
}

const isEditing = ref(false);
const route = useRoute();
const postId = computed(() => route.params.id);
const router = useRouter();

const uploading = ref(false);
let successMessage = ref('');
let showSuccessMessage = ref(false);
let errorAlert = ref(false);
let errorMessage = ref('');

const createDocumentData = reactive({
  title: "",
  image: null,
  category: ""
});

const handleImageChange = async (event: any) => {
  const file = event.target.files[0];

  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    try {
      uploading.value = true;
      const response = await axios.post(`${url}/upload`, formData);
      createDocumentData.image = response.data;
      uploading.value = false;
    } catch (error) {
      console.error(error);
      uploading.value = false;
      throw error;
    }
  }
};


const saveDocument = async () => {
  uploading.value = true;

  try {
    const documentData = {
      title: createDocumentData.title,
      categoryId: createDocumentData.category,
      filename: createDocumentData.image
    };

    if (createDocumentData.image && typeof createDocumentData.image !== 'string') {
      const response = await axios.post(`${url}/upload`, { image: createDocumentData.image });
      documentData.filename = response.data;
    }

    if (!isEditing.value) {
      await axios.post(`${url}/department-document`, documentData);
    } else {
      await axios.patch(`${url}/department-document/update/${postId.value}`, documentData);
    }

    createDocumentData.title = '';
    createDocumentData.image = null;
    createDocumentData.category = '';
    uploading.value = false;
    showSuccessMessage.value = true;
    successMessage.value = isEditing.value ? 'Document updated successfully!' : 'Document created successfully!';

    setTimeout(() => {
      showSuccessMessage.value = false;

      if (isEditing.value) {
        router.push('/admin/view-documents');
      } else {
        // window.location.href = "add-document"
      }
    }, 2000);

  } catch (error: any) {
    uploading.value = false;
    errorAlert.value = true;
    setTimeout(() => {
      errorAlert.value = false;
    }, 1500)
    errorMessage.value = error.message;
  }
};

const allCategories: any = ref([]);
axios.get(`${url}/document-category`)
  .then((response: any) => {
    allCategories.value = response.data;
    console.error(allCategories.value);
  })
  .catch((error: string) => {
    console.error(error);
  });

</script>
<style>
/* * {
    outline: 1px solid;
  } */
</style>
  