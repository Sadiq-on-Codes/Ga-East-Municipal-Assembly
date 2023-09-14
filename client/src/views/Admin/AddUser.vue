<template>
    <div class="flex gap-10 flex-col max-w-5xl mx-auto justify-center mt-28 ml-[30%]">
        <h1 class="text-xl uppercase font-semibold text-[#322121] dark:text-white">Add User</h1>
        <div class="text-left">
            <label for="title" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input type="text" id="title"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter username" required v-model="createUser.username" />
        </div>

        <div class="text-left">
            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input type="text" id="description"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter email" required v-model="createUser.email" />
        </div>

        <div class="text-left">
            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" id="description"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter password" required v-model="createUser.password" />
        </div>

        <div class="text-left">
            <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Re-enter
                Password</label>
            <input type="password" id="description"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Re-enter Password" required v-model="createUser.retypePassword" />
        </div>

        <button type="button" @click="handleAddDepartment"
            class="mt-10 self-center w-40 mb-20 button text-white font-semibold bg-button-bg focus:ring-4 focus:outline-none focus:ring-green-300 text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-button-bg dark:hover:bg-button-bg-hover dark:focus:bg-button-bg-hover hover:bg-button-bg-hover">
            Add User
        </button>
    </div>
</template>
<script setup lang="ts">
import { url } from "@/functions/endpoint";
import router from "@/router";
import axios from "axios";
import { initTooltips } from "flowbite";
import { onMounted, reactive, ref } from "vue";

onMounted(() => {
    initTooltips();
});

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

const handleAddDepartment = async () => {
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

        // setTimeout(() => {
        //     showSuccessMessage.value = false;

        //     if (isEditing.value) {
        //         router.push('/admin/view-departments');
        //     } else {
        //         window.location.href = "/add-department"
        //     }
        // }, 1000);
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
  