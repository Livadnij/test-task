import type { TutorsStore } from '~/stores/tutors/interface'
import type { Tutor } from '~/types/tutors.interface'

export const getters = {
  getTutors: (state: TutorsStore): Tutor[] => state.tutors,
  getSelectedTutorId: (state: TutorsStore): number | null =>
    state.selectedTutorId,
  getSelectedTutor: (state: TutorsStore): Tutor | null => state.selectedTutor,
  getIsTutorModalOpen: (state: TutorsStore): boolean => state.isTutorModalOpen,
}
