import type { Tutor } from "~/types/tutors.interface";
import { request } from "~/api/api";

export function getTutors(): Promise<Tutor[]> {
    return request<Tutor[]>({
        method: "GET",
        url: "/users",
    });
}