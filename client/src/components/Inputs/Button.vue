<template>
    <div class="flex justify-center" :class="className">
        <button @click="handleClick" :disabled="isDisabled" type="button"
            class="text-white w-fit mb-20 bg-button-bg hover:bg-button-bg-hover focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex justify-center items-center disabled:opacity-50">
            <svg v-if="uploading" aria-hidden="true" role="status" class="inline w-4 h-4 mr-3 text-white animate-spin"
                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            </svg>
            {{ buttonText }}
        </button>
    </div>
</template>
  
<script setup lang="ts">
const { buttonText, isDisabled, uploading, handleClick } = defineProps<{
    buttonText: string;
    isDisabled: boolean;
    uploading: boolean;
    className: string;
    handleClick: () => void;
}>();
</script>
  