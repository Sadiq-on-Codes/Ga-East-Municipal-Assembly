<template>
  <div class="flex justify-center flex-col items-center my-20">
    <p class="text-md">we value</p>
    <p class="text-6xl font-bold">Community</p>
  </div>
  <div class="grid-container mx-auto mb-20">
    <div v-for="pin in gallery" :key="pin.id" class="pin" :style="{
      gridRowEnd: `span ${pin.height}`,
      gridColumnEnd: `span ${pin.width}`
    }">
      <div class="pin-overlay">
        <img :src="`http://gema.gov.gh/images/${pin.image}`" class="pin-image rounded-lg" />
        <!-- <div class="pin-overlay-content">
            <h3>{{ pin.title }}</h3>
            <p>{{ pin.description }}</p>
          </div> -->
      </div>
    </div>
  </div>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div class="grid gap-4">
        <div v-for="pin in gallery" :key="pin.id">
          <img class="h-auto max-w-full rounded-lg" :src="`http://gema.gov.gh/images/${pin.image}`" :alt="pin.alt">
        </div>
      </div>
    </div>
  <Loader class="my-52" v-if="gallery.length === 0" />
  <Footer />
</template>
  
<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
import { url } from "@/functions/endpoint";
import Footer from "@/components/Footer.vue";
import Loader from "@/components/Loader.vue";

const gallery: any = ref([]);

onMounted(() => {
  axios
    .get(`${url}/posts`, {
      params: {
        category: "GALLERY"
      }
    })
    .then((response) => {
      if (response.data && Array.isArray(response.data)) {
        gallery.value = response.data[1];
        console.log(gallery.value);
      }
    })
    .catch((error) => {
      console.error(error);
    });
});
</script>
<style scoped>
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
  position: relative;
  overflow: hidden;
}

.pin-overlay {
  position: relative;
  overflow: hidden;
}

.pin-overlay-content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.pin-overlay:hover .pin-overlay-content {
  transform: translateY(0);
}

.pin-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.pin-overlay:hover .pin-image {
  transform: scale(1.1);
}

/* Additional styles */

.flex {
  display: flex;
}

.justify-center {
  justify-content: center;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.my-20 {
  margin-top: 5rem;
  margin-bottom: 5rem;
}

.text-md {
  font-size: 1.5rem;
}

.text-6xl {
  font-size: 4rem;
}

.font-bold {
  font-weight: bold;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.mb-20 {
  margin-bottom: 5rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

/* Responsive styles */

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 15px;
  }
}

@media (max-width: 576px) {
  .grid-container {
    width: 90%;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 10px;
  }

  .pin:nth-child(2n+1) {
    height: 20em;
  }
}
</style>
  