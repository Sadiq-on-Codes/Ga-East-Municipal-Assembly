<template>
  <div class="flex gap-10 flex-col max-w-5xl mx-auto justify-center mt-28 ml-[30%]">
    <h1 v-if="isUnit" class="text-xl uppercase font-semibold text-[#322121] dark:text-white">{{ isEditing ? "Edit Unit" : "Add Unit" }}</h1>
    <h1 v-else class="text-xl uppercase font-semibold text-[#322121] dark:text-white">{{ isEditing ? "Edit Department" : "Add Department" }}</h1>

    <div class="text-left mt-20">
      <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Is this a unit?</label>
      <input type="checkbox" id="title" @checked="handleChecked" v-model="isUnit"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Enter post title" required/>
    </div>


    <div class="text-left">
      <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
      <input type="text" id="title"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        :placeholder="isUnit ? 'Enter unit title' : 'Enter department title'" required v-model="data.title" />
    </div>

    <div class="text-left h-96 dark:text-white">
      <label class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
        for="user_avatar">Description</label>
      <QuillEditor contentType="html" theme="snow" v-model:content="data.description" />
    </div>

    <div v-if="isUnit" class="text-left mt-20 dark:text-white">
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
          category</label>
        <select placeholder="Select category" id="countries" v-model="data.department"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          <option disabled>Select Category</option>
          <option :value="department.id" v-for="department in allDepartments" :key="department.id">{{ department.name }}</option>
          
        </select>
      </div>

    <button v-if="isUnit" type="button" @click="handleAddUnit"
      class="mt-20 self-center w-fit mb-20 button text-white font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-green-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-button-bg dark:hover:bg-button-bg-hover dark:focus:bg-button-bg-hover hover:bg-button-bg-hover">
      {{ isEditing ? "Update Unit" : "Add Unit" }}
    </button>
    <button v-else type="button" @click="handleAddDepartment"
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

let successMessage = ref<string>('');
let showSuccessMessage = ref<boolean>(false);
let errorAlert = ref<boolean>(false);
let errorMessage = ref<string>('');
let isUnit = ref<boolean>(false)
const isEditing = ref<boolean>(false);
const route = useRoute();
const postId = computed(() => route.params.id);
const router = useRouter();
const data = reactive({
  title: '',
  description: '',
  department: ''
})

onMounted(() => {
  initTooltips();
  getDepartmentDetails();
});

const handleChecked = () => {
  isUnit.value = !isUnit.value;
}

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
      } catch (error: any) {
        errorAlert.value = true;
        errorMessage.value = error.message
      }
    } else {
      console.log('creating');
    }
  }
}

const handleAddUnit = async () => {
  try {
    if (!isEditing.value) {
      await axios.post(`${url}/unit`, { title: data.title, about: data.description, departmentId: data.department })
    } else {
      await axios.patch(`${url}/unit/update/${postId.value}`, { title: data.title, about: data.description, departmentId: data.department })
    }
    showSuccessMessage.value = true
    successMessage.value = response.data.message;
    setTimeout(() => {
      showSuccessMessage.value = false;

      if (isEditing.value) {
        router.push('/admin/view-departments');
      } else {
        window.location.href = "/add-department"
      }
    }, 1000);
  }
  catch (error: any) {
    errorAlert.value = true;
    errorMessage.value = error.message;
    setTimeout(() => {
      errorAlert.value = false;
    }, 5000)
  }
};

const handleAddDepartment = async () => {
  try {
    if (!isEditing.value) {
      await axios.post(`${url}/departments/create/department`, { name: data.title, about: data.description, })
    } else {
      await axios.patch(`${url}/departments/update/${postId.value}`, { name: data.title, about: data.description, })
    }
    showSuccessMessage.value = true
    successMessage.value = response.data.message;
    setTimeout(() => {
      showSuccessMessage.value = false;

      if (isEditing.value) {
        router.push('/admin/view-departments');
      } else {
        window.location.href = "/add-department"
      }
    }, 1000);
  }
  catch (error: any) {
    errorAlert.value = true;
    errorMessage.value = error.message;
    setTimeout(() => {
      errorAlert.value = false;
    }, 5000)
  }
};

const allDepartments: any = ref([]);
axios.get(`${url}/departments`)
  .then((response: any) => {
    allDepartments.value = response.data;
    console.error(allDepartments.value);
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
  