import type { TutorsStore } from "~/stores/tutors/interface";
import type { Tutor } from "~/types/tutors.interface";

export const getters = {
    getTutors: (state: TutorsStore): Tutor[] => state.tutors,
}