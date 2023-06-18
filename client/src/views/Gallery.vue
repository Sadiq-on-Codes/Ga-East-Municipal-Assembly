<template>
    <div class="grid-container mx-auto">
      <div v-for="pin in gallery" :key="pin.id" class="pin" :style="{ gridRowEnd: `span ${pin.height}`, gridColumnEnd: `span ${pin.width}` }">
        <img :src="`http://gema.gov.gh/images/${pin.image}`"  class="pin-image rounded-lg h-52" />
      </div>
    </div>
  </template>
  
  
  <script setup lang="ts">
  import { Stack, StackItem } from "vue-stack-grid";
  import axios from 'axios';
  import { ref, onMounted } from 'vue';
  
  const gallery: any = ref([]);
  
  onMounted(() => {
    axios.get('http://localhost:8000/api/v1/posts', {
      params: {
        category: 'NEWS'
      }
    })
      .then((response) => {
        if (response.data && Array.isArray(response.data)) {
          gallery.value = response.data;
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });
  </script>
  
  <style>
  .grid-container {
    display: grid;
    width: 75%;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 25px;
    grid-auto-flow: dense;
  }
  
  .pin {
    display: flex;
    justify-content: center;
  }
  
  .pin-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>
  