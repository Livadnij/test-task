import type { TutorsStore } from '~/stores/tutors/interface'
import type { Tutor } from '~/types/tutors.interface'

export const actions = {
  setTutors(this: TutorsStore, tutors: Tutor[]) {
    this.tutors = tutors
  },
  setSelectedTutorId(this: TutorsStore, tutorId: number | null) {
    this.selectedTutorId = tutorId
  },
  openTutorModal(this: TutorsStore, tutor: Tutor) {
    this.selectedTutorId = tutor.id
    this.isTutorModalOpen = true
    this.selectedTutor = tutor
  },
  closeTutorModal(this: TutorsStore) {
    this.isTutorModalOpen = false
    this.selectedTutorId = null
  },
}
