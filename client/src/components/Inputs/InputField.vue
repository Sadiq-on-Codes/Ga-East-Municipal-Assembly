<template>
  <div class="text-left">
    <label :for="id" class="block w-fit mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :class="className"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500"
      :placeholder="placeholder"
      :required="isRequired"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      @checked="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Props
const {
  label,
  id,
  type = 'text',
  placeholder = '',
  isRequired = false,
  modelValue,
} = defineProps<{
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  isRequired?: boolean;
  modelValue?: any;
  className: string;
}>(); 
</script>
