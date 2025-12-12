import type { TutorsStore } from "~/stores/tutors/interface";
import type { Tutor } from "~/types/tutors.interface";

export const actions = {
    setTutors (this: TutorsStore, tutors: Tutor[])  {
        this.tutors = tutors
    },
}