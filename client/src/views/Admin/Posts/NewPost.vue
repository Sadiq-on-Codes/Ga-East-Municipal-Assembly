<template>
  <div class="max-w-5xl mx-auto justify-center mt-28 ml-[30%]">
    <h1 class="mb-10 text-xl uppercase font-semibold text-[#322121] dark:text-white">{{ isEditing ? "Edit Post" : "New Post" }}</h1>

    <div v-if="isEditing && postInfo.length === 0">
      <Loader class="my-52" />
    </div>

    <div v-else class="flex gap-10 flex-col">
      <div class="text-left">
        <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
        <input type="text" id="title"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter post title" required v-model="createPostData.title" />
      </div>

      <div class="text-left h-96 dark:text-white">
        <label class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
          for="user_avatar">Description</label>
        <QuillEditor v-model:content="createPostData.article" contentType="html" theme="snow" />
      </div>

      <div class="text-left mt-20 dark:text-white">
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
          category</label>
        <select placeholder="Select category" id="countries" v-model="createPostData.category"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option disabled>Select Category</option>
          <option>NEWS</option>
          <option>GALLERY</option>
          <option>EVENTS</option>
        </select>
      </div>

      <div class="mx-auto w-full">
        <label class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload
          post
          image</label>
        <input @change="handleImageChange"
          class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="user_avatar_help" id="user_avatar" type="file" />
        <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help"></div>
      </div>

      <div class="flex justify-center">
        <button @click="savePost"
          :disabled="createPostData.title === '' || createPostData.article === '' || !createPostData.image || createPostData.category === '' || uploading"
          type="button"
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
          {{ isEditing ? "Update Post" : "Publish Post" }}
        </button>
      </div>
    </div>
  </div>
  <SuccessMessage :showSuccessMessage="showSuccessMessage" :successMessage="successMessage" />
  <ErrorMessage :errorAlert="errorAlert" :errorMessage="errorMessage" />
</template>

<script setup lang="ts">
import { initTooltips } from "flowbite";
import { QuillEditor } from '@vueup/vue-quill';
import "@vueup/vue-quill/dist/vue-quill.snow.css";
import { computed, onMounted, reactive, ref } from "vue";
import axios from 'axios';
import { decodeEntities } from "@/functions";
import { decryptString } from '@/functions/encryption';
import { url } from "@/functions/endpoint";
import { useRoute, useRouter } from "vue-router";
import Loader from "@/components/Loader.vue";
import SuccessMessage from "@/components/SuccessMessage.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

onMounted(() => {
  initTooltips();

  getPostDetails()
});

const postInfo = ref([]);

const getPostDetails = async () => {
  if (postId.value !== undefined) {
    isEditing.value = true;
    if (isEditing.value) {
      try {
        const response = await axios.get(`${url}/posts/${parseInt(postId.value)}`);
        const postData = response.data;
        postInfo.value = postData
        createPostData.title = postData.title;
        createPostData.article = decodeEntities(postData.article);
        createPostData.image = postData.image;
        createPostData.category = postData.category.toUpperCase();
        console.log(postData, 'data');
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log('creating');
    }
  }
}

const isEditing = ref(false)
const route = useRoute();
const postId = computed(() => decryptString(route.params.id.toString()));
const router = useRouter();

const uploading = ref(false);
let successMessage = ref('');
let showSuccessMessage = ref(false);
let errorAlert = ref(false);
let errorMessage = ref('');

const createPostData = reactive({
  title: "",
  article: "",
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
      createPostData.image = response.data;
      uploading.value = false;
      setTimeout(() => {
        showSuccessMessage.value = true;
      }, 1000)
    successMessage.value = isEditing.value ? 'New image uploaded successfully!' : 'Image uploaded successfully!';
    } catch (error: any) {
      uploading.value = false;
      setTimeout(() => {
        errorAlert.value = true;
      }, 1500)
      errorMessage.value = error?.message;
    }
  }
};


const savePost = async () => {
  uploading.value = true;

  try {
    const postData = {
      title: createPostData.title,
      article: createPostData.article,
      category: createPostData.category,
      image: createPostData.image
    };

    if (createPostData.image && typeof createPostData.image !== 'string') {
      const response = await axios.post(`${url}/upload`, { image: createPostData.image });
      postData.image = response.data;
    }

    if (!isEditing.value) {
      await axios.post(`${url}/posts/create/post`, postData);
    } else {
      await axios.patch(`${url}/posts/update/${parseInt(postId.value)}`, postData);
    }

    createPostData.title = '';
    createPostData.article = '';
    createPostData.image = null;
    createPostData.category = '';
    uploading.value = false;
    setTimeout(() => {
        showSuccessMessage.value = true;
      }, 1000)
    successMessage.value = isEditing.value ? 'Post updated successfully!' : 'Post created successfully!';

    setTimeout(() => {
      showSuccessMessage.value = false;

      if (isEditing.value) {
        router.push('/admin/view-posts');
      } else {
        window.location.href = "new-post"
      }
    }, 2000);

  } catch (error: any) {
    uploading.value = false;
    setTimeout(() => {
        errorAlert.value = true;
      }, 1500)
    errorMessage.value = error.message;
  }
};

</script>

<style scoped>
/* * {
  outline: 1px solid;
} */
.button {
  position: relative;
}

.button .animate-spin {
  position: absolute;
  top: 50%;
  left: calc(50% - 0.5rem);
  transform: translate(-50%, -50%);
}</style>
