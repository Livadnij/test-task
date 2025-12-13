import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import type { ApiError } from '~/types/api.interface'

const { baseUrl } = useRuntimeConfig().public

const api: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10_000,
})

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function getServerMessage(data: unknown): string | undefined {
  if (!isRecord(data)) return undefined

  const msg = data['message']
  if (typeof msg === 'string' && msg.trim().length > 0) return msg

  return undefined
}

function toApiError(error: unknown): ApiError {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status

    const messageFromServer =
      getServerMessage(error.response?.data) ??
      error.message ??
      'Unknown error'

    return {
      message: messageFromServer,
      status,
      isNetworkError: !error.response,
    }
  }

  return {
    message: 'Unexpected error',
    isNetworkError: false,
  }
}

export class ApiRequestError extends Error {
  public readonly api: ApiError

  constructor(apiError: ApiError) {
    super(apiError.message)
    this.name = 'ApiRequestError'
    this.api = apiError
  }
}

export async function request<T>(config: AxiosRequestConfig): Promise<T> {
  try {
    const response = await api.request<T>(config)
    return response.data
  } catch (e: unknown) {
    throw new ApiRequestError(toApiError(e))
  }
}
