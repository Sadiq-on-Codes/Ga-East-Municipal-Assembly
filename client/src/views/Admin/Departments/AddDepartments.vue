<template>
  <div class="flex gap-10 flex-col max-w-5xl mx-auto justify-center mt-28 ml-[30%]">
    <h1 class="text-xl uppercase font-semibold text-[#322121] dark:text-white">{{ isEditing ? "Edit Department" : "Add Department" }}</h1>
    <div class="text-left">
      <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
      <input type="text" id="title"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter post title" required v-model="data.title" />
    </div>

    <div class="text-left h-96 dark:text-white">
      <label class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
        for="user_avatar">Description</label>
      <QuillEditor contentType="html" theme="snow" v-model:content="data.description" />
    </div>

    <button type="button" @click="handleAddDepartment"
      class="mt-20 self-center w-fit mb-20 button text-white font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-green-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-button-bg dark:hover:bg-button-bg-hover dark:focus:bg-button-bg-hover hover:bg-button-bg-hover">
      {{ isEditing ? "Update Department" : "Add Department" }}
    </button>
  </div>
  <SuccessMessage :showSuccessMessage="showSuccessMessage" :successMessage="successMessage" />
  <ErrorMessage :errorAlert="errorAlert" :errorMessage="errorMessage" />
</template>
<script setup lang="ts">
import { initTooltips } from "flowbite";
import { onMounted } from "vue";
import { QuillEditor } from '@vueup/vue-quill';
import { reactive, ref, computed } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from "vue-router";
import SuccessMessage from "@/components/SuccessMessage.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import { url } from '@/functions/endpoint';

let successMessage = ref('');
let showSuccessMessage = ref(false);
let errorAlert = ref(false);
let errorMessage = ref('');
const isEditing = ref(false);
const route = useRoute();
const postId = computed(() => route.params.id);
const router = useRouter();
const data = reactive({
  title: '',
  description: ''
})

onMounted(() => {
  initTooltips();
  getDepartmentDetails();
});

const departmentInfo = ref([]);
const getDepartmentDetails = async () => {
  if (postId.value !== undefined) {
    isEditing.value = true;
    if (isEditing.value) {
      try {
        const response = await axios.get(`${url}/departments/${postId.value}`);
        const documentData = response.data;
        departmentInfo.value = documentData
        data.title = documentData.name;
        data.description = documentData.about;
      } catch (error) {
        errorAlert.value = true;
        errorMessage.value = error.message
      }
    } else {
      console.log('creating');
    }
  }
}

const handleAddDepartment = async () => {
  try {
    if (!isEditing.value) {
      await axios.post(`${url}/departments/create/department`, { name: data.title, about: data.description, })
    } else {
      await axios.patch(`${url}/departments/update/${postId.value}`, { name: data.title, about: data.description, })
    }
    showSuccessMessage.value = true
    successMessage = response.data.message;
    setTimeout(() => {
      showSuccessMessage.value = false;

      if (isEditing.value) {
        router.push('/admin/view-departments');
      } else {
        window.location.href = "/add-department"
      }
    }, 1000);
  }
  catch (error) {
    errorAlert.value = true;
    errorMessage.value = error.message;
    setTimeout(() => {
      errorAlert.value = false;
    }, 5000)
  }
};

</script>
<style>
/* * {
    outline: 1px solid;
  } */
</style>
  