import type { Tutor } from "~/types/tutors.interface";

export interface TutorsStore {
    tutors: Tutor[];
    selectedTutorId: number | null;
    isTutorModalOpen: boolean;
}
