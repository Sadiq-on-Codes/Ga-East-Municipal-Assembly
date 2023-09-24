<template>
  <div class="flex gap-10 flex-col max-w-5xl mx-auto justify-center mt-28 ml-[30%]">
    <h1 v-if="isUnit" class="text-xl uppercase font-semibold text-[#322121] dark:text-white">{{ isEditing ? "Edit Unit" :
      "Add Unit" }}</h1>
    <h1 v-else class="text-xl uppercase font-semibold text-[#322121] dark:text-white">{{ isEditing ? "Edit Department" :
      "Add Department" }}</h1>

    <InputField :className="'w-fit'" label="Is this a unit?" id="title" type="checkbox" placeholder="Unit" :isRequired="false"
    v-model="isUnit" @checked="handleChecked" />

    <InputField label="Title" id="title" type="text" :placeholder="isUnit ? 'Enter unit title' : 'Enter department title'" :isRequired="true"
        v-model="data.title" />

    <div class="text-left h-96 dark:text-white">
      <label class="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
        for="user_avatar">Description</label>
      <QuillEditor contentType="html" theme="snow" v-model:content="data.description" />
    </div>

    <SelectField v-if="isUnit" :className="'mt-20'" label="Select department" id="departments" placeholder="Select department"
    v-model="data.department" :options="allDepartments" :param="'name'" />

    <Button v-if="isUnit" :buttonText="isEditing ? 'Update Unit' : 'Add Unit'"
      :isDisabled="data.title === '' || data.description === '' || !data.department || uploading" :uploading="uploading"
      :handleClick="handleAddUnit" />

    <Button :className="'mt-20'" v-else :buttonText="isEditing ? 'Update Department' : 'Add Department'"
      :isDisabled="data.title === '' || data.description === '' || !data.department || uploading" :uploading="uploading"
      :handleClick="handleAddDepartment" />

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
import Button from "@/components/Inputs/Button.vue";
import InputField from "@/components/Inputs/InputField.vue";
import SelectField from "@/components/Inputs/SelectField.vue";
import { url } from '@/functions/endpoint';

const uploading = ref(false);
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
        .then((response) => {
          showSuccessMessage.value = true
          successMessage.value = response.data.message;
        })
    } else {
      await axios.patch(`${url}/unit/update/${postId.value}`, { title: data.title, about: data.description, departmentId: data.department })
        .then((response) => {
          showSuccessMessage.value = true
          successMessage.value = response.data.message;
        })
    }

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
        .then((response) => {
          showSuccessMessage.value = true
          successMessage.value = response.data.message;
        })
    } else {
      await axios.patch(`${url}/departments/update/${postId.value}`, { name: data.title, about: data.description, })
        .then((response) => {
          showSuccessMessage.value = true
          successMessage.value = response.data.message;
        })
    }
    setTimeout(() => {
      showSuccessMessage.value = false;

      if (isEditing.value) {
        router.push('/admin/view-departments');
      } else {
        window.location.href = "/admin/add-department"
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
