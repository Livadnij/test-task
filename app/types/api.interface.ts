export interface ApiError {
    message: string;
    status?: number;
    isNetworkError: boolean;
}