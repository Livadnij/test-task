<script setup lang="ts">
import ButtonVue from "../atoms/Button.vue";

defineOptions({
  name: "CustomCard",
});

interface CardProps {
  teachersName: string;
  description: string;
  studentsCount: string;
  occupation: string;
}

const props = defineProps<CardProps>();

const emit = defineEmits<{
  (event: "book"): void;
  (event: "read-more"): void;
}>();

const handleBook = () => emit("book");
const handleReadMore = () => emit("read-more");
</script>

<template>
  <div class="card">
    <h4 class="card--teachers-name">{{ teachersName }}</h4>
    <div class="card--teachers-grade">
      <span> {{ occupation }}</span>
      <span> Students: {{ studentsCount }}</span>
    </div>
    <p class="card--description">
      {{ description }}
    </p>
    <div class="card--actions">
      <ButtonVue variant="primary" @click="handleBook">
        Book a lesson
      </ButtonVue>
      <ButtonVue variant="secondary" @click="handleReadMore">
        Read more
      </ButtonVue>
    </div>
  </div>
</template>

<style
  scoped
  lang="scss"
  src="@assets/scss/components/UI/Cards/CustomCard.scss"
/>
