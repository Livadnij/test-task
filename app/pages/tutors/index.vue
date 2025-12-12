<script lang="ts" setup>
import { getTutors } from "~/api/requests/tutor.requests";
import type CardVue from "~/components/atoms/Card.vue";
import { useTutorStore } from "~/stores/tutors/store";

defineOptions({
  name: "Tutors",
});

useHead({
  title: "Tutors",
});

const state = useTutorStore();

onBeforeMount(() => {
  getTutors().then((data) => {
    state.setTutors(data);
    console.log(state.getTutors);
  });
});
</script>

<template>
  <div>Hello World! Tutors Page</div>
  <CardVue />
</template>
