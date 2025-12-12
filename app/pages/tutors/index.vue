<script lang="ts" setup>
import { useTutorStore } from "~/stores/tutors/store";

defineOptions({
  name: "Tutors",
});

useHead({
  title: "Tutors",
});

const state = useTutorStore();

onBeforeMount(() => {
  state.setTutors([{ name: "John Doe" }]);
  console.log(state.getTutors);
});
</script>

<template>
  <div>sosite jhopi</div>
</template>
