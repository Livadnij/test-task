<script setup lang="ts">
import Header from "~/components/molecules/Header.vue";
</script>

<template>
  <div class="layout">
    <Header />
    <main>
      <slot />
    </main>
  </div>
</template>
