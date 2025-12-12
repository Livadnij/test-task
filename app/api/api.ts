import type {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
} from "axios";
import type { ApiError } from "~/types/api.interface";

import axios from "axios";

const { baseUrl } = useRuntimeConfig().public

const api: AxiosInstance = axios.create({
    baseURL: baseUrl,
    timeout: 10_000,
});

function toApiError(error: unknown): ApiError {
    if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<any>;
        const status = axiosError.response?.status;
        const messageFromServer =
            axiosError.response?.data?.message ||
            axiosError.message ||
            "Unknown error";

        return {
            message: messageFromServer,
            status,
            isNetworkError: !axiosError.response,
        };
    }

    return {
        message: "Unexpected error",
        isNetworkError: false,
    };
}

export async function request<T>(
    config: AxiosRequestConfig
): Promise<T> {
    try {
        const response = await api.request<T>(config);
        return response.data;
    } catch (e) {
        throw toApiError(e);
    }
}