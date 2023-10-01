<template>
    <div class="flex gap-10 flex-col max-w-5xl mx-auto justify-center mt-28 ml-[30%]">
        <h1 class="text-xl uppercase font-semibold text-[#322121] dark:text-white">Add User</h1>
        
        <InputField label="Username" id="title" type="text" placeholder="Enter username" :isRequired="true"
        v-model="createUser.username" />

        <InputField label="Email" id="title" type="email" placeholder="Enter email" :isRequired="true"
        v-model="createUser.email" />

        <InputField label="Password" id="title" type="password" placeholder="Enter password" :isRequired="true"
        v-model="createUser.password" />

        <InputField label="Re-enter Password" id="title" type="password" placeholder="Re-enter Password" :isRequired="true"
        v-model="createUser.retypePassword" />

        <Button :buttonText="'Add User'"
        :isDisabled="createUser.username === '' || !createUser.email || createUser.password === '' || createUser.retypePassword === '' || uploading"
        :uploading="uploading" :handleClick="handleAddUser" />
    </div>
    <SuccessMessage :showSuccessMessage="showSuccessMessage" :successMessage="successMessage" />
  <ErrorMessage :errorAlert="errorAlert" :errorMessage="errorMessage" />
</template>
<script setup lang="ts">
import { url } from "@/functions/endpoint";
import router from "@/router";
import axios from "axios";
import { initTooltips } from "flowbite";
import { onMounted, reactive, ref } from "vue";
import InputField from "@/components/Inputs/InputField.vue";
import Button from "@/components/Inputs/Button.vue"
import SuccessMessage from "@/components/SuccessMessage.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";

onMounted(() => {
    initTooltips();
});

const uploading = ref(false);
let successMessage = ref<string>('');
let showSuccessMessage = ref<boolean>(false);
let errorAlert = ref<boolean>(false);
let errorMessage = ref<string>('');
const isEditing = ref<boolean>(false);

const createUser = reactive({
    username: "",
    email: "",
    password: "",
    retypePassword: ""
})

const handleAddUser = async () => {
    const userData = {
        username: createUser.username,
        email: createUser.email,
        password: createUser.password,
        retypedPassword: createUser.retypePassword
    }

    try {
        if (!isEditing.value) {
            await axios.post(`${url}/admin/auth/create`, userData)
                .then((response) => {
                    showSuccessMessage.value = true
                    successMessage.value = response.data.message;
                })
        } else {
            //   await axios.patch(`${url}/departments/update/${postId.value}`, { name: data.title, about: data.description, })
        }

        setTimeout(() => {
            showSuccessMessage.value = false;

            if (isEditing.value) {
                // router.push('/admin/view-departments');
            } else {
                window.location.href = "/admin/add-user"
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

</script>
<style>
/* * {
    outline: 1px solid;
  } */
</style>
  