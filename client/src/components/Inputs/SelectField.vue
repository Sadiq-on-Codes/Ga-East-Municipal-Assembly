<template>
    <div class="text-left" :class="className">
      <label :for="id" class="text-left block mb-2 text-sm font-medium text-gray-900 dark:text-white">{{ label }}</label>
      <select
        :id="id"
        :class="[defaultSelectClasses, customSelectClasses]"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event?.target?.value)"
      >
        <option disabled>{{ placeholder }}</option>
        <option :value="option.id" v-for="option in options">{{ option[param] }}</option>
      </select>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from 'vue';
  
  // Props
  const {
    label,
    id,
    placeholder = 'Select an option',
    modelValue,
    selectClasses: customSelectClasses, // Custom select classes prop
    options,
    param,
    className
  } = defineProps<{
    label: string;
    id: string;
    placeholder?: string;
    modelValue: any;
    param: string;
    selectClasses?: string; // Custom select classes prop
    options: Array<{ id: any; text: string }>;
    className: string;
  }>(); 
  
  // Default select classes
  const defaultSelectClasses = computed(() => {
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
  
    return classes.join(' ');
  });
  </script>
  