<template>
  <Navbar v-if="showNavbar" />
  <AdminPage v-if="showAdminPage" />
  <Login v-if="showLoginPage" />
</template>

<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import AdminPage from "./views/Admin/AdminPage.vue";
import Login from "./views/Admin/Login.vue";

const showNavbar = ref(false);
const showAdminPage = ref(false);
const showLoginPage = ref(false);
const router = useRouter();

router.beforeEach((to, from, next) => {
  // Conditionally hide navbar on certain routes
  if (to.path === "/admin") {
    showAdminPage.value = true;
    showNavbar.value = false;
    showLoginPage.value = false;
  } else {
    showNavbar.value = true
    showAdminPage.value = false;
  }

  if (to.path === "/login") {
    showNavbar.value = false;
    showLoginPage.value = true;
  } 
  next();
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Signika+Negative:wght@400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Merriweather+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

/* * {
  outline: 1px solid black; 
} */

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
}
</style>
