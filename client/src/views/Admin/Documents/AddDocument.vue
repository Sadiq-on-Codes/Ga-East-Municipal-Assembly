<template>
  <div class="flex gap-10 flex-col max-w-5xl mx-auto justify-center mt-28 ml-[30%]">
    <h1 class="text-xl uppercase font-semibold text-[#322121] dark:text-white">{{ isEditing ? "Update Document" : "Add Document" }}</h1>

    <div v-if="isEditing && documentInfo.length === 0">
      <Loader class="my-52" />
    </div>

    <div v-else class="flex gap-10 flex-col">
      <InputField label="Title" id="title" type="text" placeholder="Enter document title" :isRequired="true"
        v-model="createDocumentData.title" />

      <SelectField label="Select category" id="categories" placeholder="Select category"
        v-model="createDocumentData.category" :options="allCategories" :param="'category'" />

      <InputField label="Upload document image" id="description" type="file" placeholder="Enter slider description"
        :isRequired="false" @change="handleImageChange"
        inputClasses="'block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'" />

      <Button :buttonText="isEditing ? 'Update Document' : 'Publish Document'"
        :isDisabled="createDocumentData.title === '' || !createDocumentData.image || createDocumentData.category === '' || uploading"
        :uploading="uploading" :handleClick="saveDocument" />
    </div>
  </div>
  <SuccessMessage :showSuccessMessage="showSuccessMessage" :successMessage="successMessage" />
  <ErrorMessage :errorAlert="errorAlert" :errorMessage="errorMessage" />
</template>
<script setup lang="ts">
import { url } from "@/functions/endpoint";
import { decryptString } from '@/functions/encryption';
import axios from "axios";
import { initTooltips } from "flowbite";
import { computed, onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import SuccessMessage from "@/components/SuccessMessage.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
import Loader from "@/components/Loader.vue";
import Button from "@/components/Inputs/Button.vue"
import InputField from "@/components/Inputs/InputField.vue";
import SelectField from "@/components/Inputs/SelectField.vue";

onMounted(() => {
  initTooltips();
  getDocumentDetails();
});


const documentInfo = ref([]);
const getDocumentDetails = async () => {
  if (documentId.value !== undefined) {
    isEditing.value = true;
    if (isEditing.value) {
      try {
        const response = await axios.get(`${url}/department-document/${parseInt(documentId.value)}`);
        const documentData = response.data;
        documentInfo.value = documentData;
        createDocumentData.title = documentData.title;
        createDocumentData.image = documentData.image;
        createDocumentData.category = documentData.category;
      } catch (error: any) {
        errorAlert.value = true;
        errorMessage.value = error.message;
      }
    } else {
      console.log('creating');
    }
  }
}

let isEditing = ref(false);
const route = useRoute();
const documentId = computed(() => decryptString(route.params.id.toString()));
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
      showSuccessMessage.value = true;
      const response = await axios.post(`${url}/upload`, formData);
      createDocumentData.image = response.data;
      uploading.value = false;
      setTimeout(() => {
        showSuccessMessage.value = false;
      }, 1000)
      successMessage.value = isEditing.value ? 'New document uploaded successfully!' : 'Document uploaded successfully!';
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


const saveDocument = async () => {
  uploading.value = true;

  try {
    const documentData = {
      title: createDocumentData.title,
      categoryId: parseInt(createDocumentData.category),
      filename: createDocumentData.image
    };

    if (createDocumentData.image && typeof createDocumentData.image !== 'string') {
      const response = await axios.post(`${url}/upload`, { image: createDocumentData.image });
      documentData.filename = response.data;
    }

    if (!isEditing.value) {
      await axios.post(`${url}/department-document`, documentData);
    } else {
      await axios.patch(`${url}/department-document/update/${parseInt(documentId.value)}`, documentData);
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
        window.location.href = "add-document";
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
  