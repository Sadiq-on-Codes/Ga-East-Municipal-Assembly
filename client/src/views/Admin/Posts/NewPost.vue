<template>
  <div class="max-w-5xl mx-auto justify-center mt-28 ml-[30%]">
    <h1 class="mb-10 text-xl uppercase font-semibold text-[#322121] dark:text-white">{{ isEditing ? "Edit Post" : "New Post" }}</h1>
    <div v-if="isEditing && postInfo.length === 0">
      <Loader class="my-52" />
    </div>

    <div v-else class="flex gap-10 flex-col">
      <InputField label="Title" id="title" type="text" placeholder="Enter post title" :isRequired="true"
        v-model="createPostData.title" />

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

      <InputField v-if="createPostData.category === 'EVENTS'" label="Event date" id="title" type="date" placeholder="Enter event date" :isRequired="true"
      v-model="createPostData.eventDate" />

      <InputField label="Upload slider image" id="description" type="file" placeholder="Enter slider description" :isRequired="false"
       @change="handleImageChange" inputClasses="'block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'" />

      <Button :buttonText="isEditing ? 'Update Post' : 'Publish Post'"
      :isDisabled="createPostData.title === '' || createPostData.article === '' || !createPostData.image || createPostData.category === '' || uploading"
      :uploading="uploading"
      :handleClick="savePost" />
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
import Button from "@/components/Inputs/Button.vue"
import InputField from "@/components/Inputs/InputField.vue";

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
  category: "NEWS",
  eventDate: ""
});

const handleImageChange = async (event: any) => {
  const file = event.target.files[0];

  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    try {
      uploading.value = true;
      showSuccessMessage.value = true;
      const response = await axios.post(`${url}/upload`, formData);
      createPostData.image = response.data;
      uploading.value = false;
      setTimeout(() => {
        showSuccessMessage.value = false;
      }, 1000)
      successMessage.value = isEditing.value ? 'New image uploaded successfully!' : 'Image uploaded successfully!';
    } catch (error: any) {
      uploading.value = false;
      errorAlert.value = true;
      setTimeout(() => {
        errorAlert.value = false;
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

    const eventPostData = {
      title: createPostData.title,
      article: createPostData.article,
      image: createPostData.image,
      eventDate: createPostData.eventDate
    };

    if (createPostData.image && typeof createPostData.image !== 'string') {
      const response = await axios.post(`${url}/upload`, { image: createPostData.image });
      postData.image = response.data;
    }

    const methodName = isEditing.value ? "patch" : "post";

    const endpoint = isEditing.value
      ? createPostData.category === "EVENTS"
        ? `${url}/events/update/eventt`
        : `${url}/posts/update/${parseInt(postId.value)}`
      : createPostData.category === "EVENTS"
        ? `${url}/events/create/event`
        : `${url}/posts/create/post`;

    await axios[methodName](endpoint, createPostData.category === "EVENTS" ? eventPostData : postData);

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
}
</style>
