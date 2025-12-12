import { defineStore } from 'pinia'
import { actions } from './actions'
import { getters } from './getters'
import type { TutorsStore } from './interface'

export const useTutorStore = defineStore('tutor', {
    state: (): TutorsStore => ({
        tutors: [],
    }),
    actions,
    getters,
})
