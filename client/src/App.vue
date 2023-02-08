<template>
  <Navbar />
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Signika+Negative:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
  /* outline: 1px solid black; */
}

body {
  font-family: 'Lato', sans-serif;
  box-sizing: border-box;
}
</style>
