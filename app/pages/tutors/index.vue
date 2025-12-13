<script lang="ts" setup>
import { getTutors } from '~/api/requests/tutor.requests'
import TutorModal from '~/components/modals/TutorModal.vue'
import CardVue from '~/components/molecules/Card.vue'
import tutorOne from '@assets/images/tutors/tutor-1.png'
import tutorTwo from '@assets/images/tutors/tutor-2.png'
import tutorThree from '@assets/images/tutors/tutor-3.png'
import tutorFour from '@assets/images/tutors/tutor-4.png'

import { useTutorStore } from '~/stores/tutors/store'
import { Discipline } from '~/constants/discipline.enum'
import type { Tutor } from '~/types/tutors.interface'

defineOptions({
  name: 'Tutors',
})

useHead({
  title: 'Brighterly | Tutors',
})

const store = useTutorStore()

onBeforeMount(() => {
  getTutors().then(data => {
    store.setTutors(data)
  })
})

const handleReadMore = (tutor: Tutor) => {
  store.openTutorModal(tutor)
}

const handleCloseModal = () => {
  store.closeTutorModal()
}

const handleBook = (tutorId: number) => {
  console.log('book', tutorId)
}

const additionalInfo = [
  {
    id: 1,
    photo: tutorOne,
    studentsCount: 2242,
    occupation: `${Discipline.MATH} tutor`,
  },
  {
    id: 2,
    photo: tutorTwo,
    studentsCount: 1197,
    occupation: `${Discipline.READING} tutor`,
  },
  {
    id: 3,
    photo: tutorThree,
    studentsCount: 115,
    occupation: `${Discipline.MATH} tutor`,
  },
  {
    id: 4,
    photo: tutorFour,
    studentsCount: 1,
    occupation: `${Discipline.READING} tutor`,
  },
]

const cards = computed(() => {
  const initialCards = store.getTutors.slice(0, 4)
  const cards = initialCards.map(tutor => {
    const info = additionalInfo.find(info => info.id === tutor.id)
    return {
      ...tutor,
      ...info,
      description: `${tutor.company?.name ?? ''} - ${
        tutor.company?.catchPhrase ?? ''
      }`,
    }
  })

  return cards
})
</script>

<template>
  <div class="tutors">
    <h1 class="tutors__title">
      Choose tutor
    </h1>
    <section
      v-if="cards.length"
      class="tutors__list"
    >
      <CardVue
        v-for="card in cards"
        :key="card.id"
        :teachers-name="card.name"
        :description="card.description"
        :students-count="card.studentsCount"
        :occupation="card.occupation"
        :photo="card.photo"
        @book="handleBook(card.id)"
        @read-more="handleReadMore(card)"
      />
    </section>
    <p
      v-else
      class="tutors__empty"
    >
      No tutors yet.
    </p>
    <TutorModal
      :open="store.getIsTutorModalOpen"
      :tutor="store.getSelectedTutor"
      @close="handleCloseModal"
    />
  </div>
</template>

<style
  scoped
  lang="scss"
  src="@assets/scss/components/UI/Pages/TutorsPage.scss"
/>
