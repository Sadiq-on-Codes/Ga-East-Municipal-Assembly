<template>
  <div class="flex gap-10 flex-col max-w-5xl mx-auto justify-center mt-28 ml-[30%]">
    <h1 class="text-xl uppercase font-semibold text-[#322121] dark:text-white">Add Slider</h1>

    <InputField label="Title" id="title" type="text" placeholder="Enter slider title" :isRequired="true"
      v-model="slider.title" />

    <InputField label="Short description" id="description" type="text" placeholder="Enter slider description" :isRequired="false"
      v-model="slider.description" />

    <InputField  label="Upload slider image" id="description" type="file" placeholder="Enter slider description" :isRequired="false"
       @change="handleImageChange" inputClasses="'block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'" />

    <Button :buttonText="'Add Slider'" :isDisabled="slider.title === '' || !slider.image || uploading"
      :uploading="uploading" :handleClick="handleAddSlider" />

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
import Button from "@/components/Inputs/Button.vue";
import InputField from "@/components/Inputs/InputField.vue";

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
      showSuccessMessage.value = true;
      const response = await axios.post(`${url}/upload`, formData);
      slider.image = response.data;
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
    successMessage.value = isEditing.value ? 'Slider updated successfully!' : 'Slider added successfully!';

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
  