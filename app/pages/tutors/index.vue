<script lang="ts" setup>
import { getTutors } from "~/api/requests/tutor.requests";
import TutorModal from "~/components/modals/TutorModal.vue";
import CardVue from "~/components/molecules/Card.vue";

import { useTutorStore } from "~/stores/tutors/store";

defineOptions({
  name: "Tutors",
});

useHead({
  title: "Tutors",
});

const state = useTutorStore();

const {
  getTutors: tutors,
  getSelectedTutor: selectedTutor,
  getIsTutorModalOpen: isTutorModalOpen,
} = storeToRefs(state);

onBeforeMount(() => {
  getTutors().then((data) => {
    state.setTutors(data);
  });
});

const handleReadMore = (tutorId: number) => {
  state.openTutorModal(tutorId);
};

const handleCloseModal = () => {
  state.closeTutorModal();
};

const cards = computed(() =>
  tutors.value.slice(0, 4).map((tutor, index) => ({
    id: tutor.id ?? index,
    teachersName: tutor.name,
    description: `${tutor.company?.name ?? ""} - ${
      tutor.company?.catchPhrase ?? ""
    }`,
    studentsCount: "1197",
    occupation: "Math tutor",
  }))
);
</script>

<template>
  <div class="tutors">
    <h1 class="tutors__title">Choose tutor</h1>
    <section v-if="cards.length" class="tutors__list">
      <CardVue
        v-for="card in cards"
        :key="card.id"
        v-bind="card"
        @book="() => console.log('book', card.id)"
        @read-more="() => handleReadMore(card.id)"
      />
    </section>
    <p v-else class="tutors__empty">No tutors yet.</p>
    <TutorModal
      :open="isTutorModalOpen"
      :tutor="selectedTutor"
      @close="handleCloseModal"
    />
  </div>
</template>

<style
  scoped
  lang="scss"
  src="@assets/scss/components/UI/Pages/TutorsPage.scss"
/>
