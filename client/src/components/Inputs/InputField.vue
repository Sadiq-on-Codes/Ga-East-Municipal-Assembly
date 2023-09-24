<template>
    <div class="text-left">
      <label :for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label }}</label>
      <input
        :type="type"
        :id="id"
        :class="[defaultInputClasses, customInputClasses]"
        :placeholder="placeholder"
        :required="isRequired"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
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
    inputClasses: customInputClasses, // Custom input classes prop
  } = defineProps<{
    label: string;
    id: string;
    type?: string;
    placeholder?: string;
    isRequired?: boolean;
    modelValue?: any;
    inputClasses?: string; // Custom input classes prop
  }>(); 
  
  // Default input classes
  const defaultInputClasses = computed(() => {
    const classes = [
      'bg-gray-50',
      'border',
      'border-gray-300',
      'text-gray-900',
      'text-sm',
      'rounded-lg',
      'focus:ring-blue-500',
      'focus:border-blue-500',
      'block',
      'w-full',
      'p-2.5',
      'dark:bg-gray-700',
      'dark:border-gray-600',
      'dark:placeholder-gray-400',
      'dark:text-white',
      'dark:focus:ring-blue-500',
      'dark:focus:border-blue-500',
    ];
  
    if (isRequired) {
      classes.push('required');
    }
  
    return classes.join(' ');
  });
  </script>
  