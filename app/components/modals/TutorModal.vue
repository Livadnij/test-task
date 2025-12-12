<script setup lang="ts">
import ButtonVue from "../atoms/Button.vue";
import type { Tutor } from "~/types/tutors.interface";

defineOptions({
  name: "TutorModal",
});

const props = defineProps<{
  open: boolean;
  tutor: Tutor | null;
}>();

const emit = defineEmits<{
  (event: "close"): void;
}>();

const handleClose = () => emit("close");
</script>

<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="open" class="tutor-modal--backdrop" @click.self="handleClose">
        <div class="tutor-modal">
          <button class="tutor-modal--close" type="button" @click="handleClose">
            ×
          </button>
          <h2 class="tutor-modal--teachers-name">
            {{ tutor?.name ?? "Unknown tutor" }}
          </h2>
          <div class="tutor-modal--teachers-grade">
            <span> Math tutor</span>
            <span> Students: 1197</span>
          </div>
          <p class="tutor-modal--description">
            {{
              `${tutor?.company?.name ?? ""} - ${
                tutor?.company?.catchPhrase ?? ""
              }`
            }}
          </p>
          <ButtonVue variant="secondary" @click="handleClose">
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
