<script setup lang="ts">
import ButtonVue from '../atoms/Button.vue'
import type { Tutor } from '~/types/tutors.interface'
import { computed } from 'vue'

defineOptions({
  name: 'TutorModal',
})

const props = defineProps<{
  open: boolean;
  tutor: Tutor | null;
}>()

const emit = defineEmits<{
  (event: 'close'): void;
}>()

const tutorDescription = computed(
  () =>
    `${props.tutor?.company?.name ?? ''} - ${
      props.tutor?.company?.catchPhrase ?? ''
    }`,
)

const tutorName = computed(() => props.tutor?.name ?? 'Unknown tutor')

const handleClose = () => emit('close')
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="open"
        class="tutor-modal__backdrop"
        @click.self="handleClose"
      >
        <div class="tutor-modal">
          <button
            class="tutor-modal__close"
            type="button"
            @click="handleClose"
          >
            ×
          </button>
          <div class="tutor-modal__content-container">
            <div class="tutor-modal__main-info-container">
              <div
                v-if="tutor?.photo"
                class="tutor-modal__image-container"
              >
                <img
                  :src="tutor.photo"
                  :alt="tutorName"
                />
              </div>
              <div class="tutor-modal__initials-container">
                <h2 class="tutor-modal__teachers-name">
                  {{ tutorName }}
                </h2>
                <div class="tutor-modal__teachers-grade">
                  <span>{{ tutor?.occupation }}</span>
                  <span> Students: {{ tutor?.studentsCount }}</span>
                </div>
              </div>
            </div>
            <p class="tutor-modal__description">
              {{ tutorDescription }}
            </p>
          </div>
          <ButtonVue
            variant="secondary"
            @click="handleClose"
          >
            Close
          </ButtonVue>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style
  scoped
  lang="scss"
  src="@assets/scss/components/UI/Modals/TutorModal.scss"
/>
