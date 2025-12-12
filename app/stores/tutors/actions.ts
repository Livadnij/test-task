import type { TutorsStore } from "~/stores/tutors/interface";
import type { Tutor } from "~/types/tutors.interface";

export const actions = {
    setTutors (this: TutorsStore, tutors: Tutor[])  {
        this.tutors = tutors
    },
    setSelectedTutorId (this: TutorsStore, tutorId: number | null) {
        this.selectedTutorId = tutorId
    },
    openTutorModal (this: TutorsStore, tutorId: number) {
        this.selectedTutorId = tutorId
        this.isTutorModalOpen = true
    },
    closeTutorModal (this: TutorsStore) {
        this.isTutorModalOpen = false
        this.selectedTutorId = null
    },
}
