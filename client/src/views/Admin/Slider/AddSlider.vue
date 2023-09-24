<template>
  <div class="flex gap-10 flex-col max-w-5xl mx-auto justify-center mt-28 ml-[30%]">
    <h1 class="text-xl uppercase font-semibold text-[#322121] dark:text-white">Add Slider</h1>
    <div class="text-left">
      <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
      <input type="text" id="title" v-model="slider.title"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter slider title" required />
    </div>

    <div class="text-left">
      <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short
        description</label>
      <input type="text" id="description" v-model="slider.description"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter slider description" required />
    </div>

    <div class="mx-auto w-full">
      <label class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white" for="user_avatar">Upload
        slider image</label>
      <input @change="handleImageChange"
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        aria-describedby="user_avatar_help" id="user_avatar" type="file" />
      <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help"></div>
    </div>

    <button type="button" @click="handleAddSlider"
      class="mt-10 self-center w-40 mb-20 button text-white font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-green-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-button-bg dark:hover:bg-button-bg-hover dark:focus:bg-button-bg-hover hover:bg-button-bg-hover">
      Add Slider
    </button>
  </div>
  <SuccessMessage :showSuccessMessage="showSuccessMessage" :successMessage="successMessage" />
  <ErrorMessage :errorAlert="errorAlert" :errorMessage="errorMessage" />
</template>
<script setup lang="ts">
import { url } from "@/functions/endpoint";
import router from "@/router";
import axios from "axios";
import { initTooltips } from "flowbite";
import { computed, onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import SuccessMessage from "@/components/SuccessMessage.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

onMounted(() => {
  initTooltips();
});

let successMessage = ref<string>('');
let showSuccessMessage = ref<boolean>(false);
let errorAlert = ref<boolean>(false);
let errorMessage = ref<string>('');
const route = useRoute();
const isEditing = ref<boolean>(false);
const postId = computed(() => route.params.id);
const uploading = ref(false);

const slider = reactive({
  title: '',
  description: '',
  image: ''
});

const handleImageChange = async (event: any) => {
  const file = event.target.files[0];

  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    try {
      uploading.value = true;
      const response = await axios.post(`${url}/upload`, formData);
      slider.image = response.data;
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

const handleAddSlider = async () => {
  uploading.value = true;

  try {
    const sliderData = {
      title: slider.title,
      description: slider.description,
      image: slider.image
    };

    if (slider.image && typeof slider.image !== 'string') {
      const response = await axios.post(`${url}/upload`, { image: slider.image });
      sliderData.image = response.data;
    }

    if (!isEditing.value) {
      await axios.post(`${url}/slider`, sliderData);
    } else {
      await axios.patch(`${url}/slider/update/${postId.value}`, sliderData);
    }

    slider.title = '';
    slider.description = '';
    slider.image = '';
    uploading.value = false;

    setTimeout(() => {
      showSuccessMessage.value = true;
    }, 1000)
    successMessage.value = isEditing.value ? 'Post updated successfully!' : 'Post created successfully!';

    setTimeout(() => {
      showSuccessMessage.value = false;

      if (isEditing.value) {
        router.push('/admin/view-sliders');
      } else {
        window.location.href = "add-slider"
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
<style>
/* * {
    outline: 1px solid;
  } */
</style>
  