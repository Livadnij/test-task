<script setup lang="ts">
import NavigationButtonVue from "../atoms/NavigationButton.vue";

const base = useRuntimeConfig().app.baseURL || "/";
const logoSrc = `${base}logo.svg`;

const router = useRouter();
const goHome = () => router.push("/");
const goTutors = () => router.push("/tutors");
</script>

<template>
  <header class="layout-header">
    <img :src="logoSrc" alt="App icon" />
    <div class="button-group">
      <NavigationButtonVue :variant="'navigation'" :click="goHome"
        >Home</NavigationButtonVue
      >
      <NavigationButtonVue :variant="'navigation'" :click="goTutors"
        >Tutors</NavigationButtonVue
      >
    </div>
  </header>
</template>
