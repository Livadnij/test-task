<script lang="ts" setup>
import { useHead } from '#imports'

defineOptions({
  name: 'Index',
})

useHead({
  title: 'Brighterly | Home',
    meta: [
    { name: 'description', content: 'Browse and book math and reading tutors.' },
    { property: 'og:title', content: 'Brighterly Home' },
    { property: 'og:description', content: 'Find the right tutor for your child.' },
    { property: 'og:type', content: 'website' },
  ],
})
</script>

<template>
  <div class="page-index" />
</template>
