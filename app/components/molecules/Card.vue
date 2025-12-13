<script setup lang="ts">
import ButtonVue from '../atoms/Button.vue'

defineOptions({
  name: 'CustomCard',
})

interface CardProps {
  teachersName: string;
  description: string;
  studentsCount?: number;
  occupation?: string;
  photo?: string;
}

withDefaults(defineProps<CardProps>(), {
  studentsCount: 0,
  occupation: '',
  photo: '',
})

const emit = defineEmits<{
  (event: 'book'): void;
  (event: 'read-more'): void;
}>()

const handleBook = () => emit('book')
const handleReadMore = () => emit('read-more')
</script>

<template>
  <div class="card">
    <div class="card__image-container">
      <img
        :src="photo"
        :alt="teachersName"
      />
    </div>
    <div class="card__info-container">
      <h4 class="card__teachers-name">
        {{ teachersName }}
      </h4>
      <div class="card__teachers-grade">
        <span> {{ occupation }}</span>
        <span> Students: {{ studentsCount }}</span>
      </div>
      <p class="card__description">
        {{ description }}
      </p>
      <div class="card__actions">
        <ButtonVue
          variant="primary"
          @click="handleBook"
        >
          Book a lesson
        </ButtonVue>
        <ButtonVue
          variant="secondary"
          @click="handleReadMore"
        >
          Read more
        </ButtonVue>
      </div>
    </div>
  </div>
</template>

<style
  scoped
  lang="scss"
  src="@assets/scss/components/UI/Cards/CustomCard.scss"
/>
