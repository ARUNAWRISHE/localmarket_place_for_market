import { storage } from '../utils/storage.js'
import { normalizeApiError } from './errorHandler.js'

export function attachInterceptors(api) {
  api.interceptors.request.use(
    (config) => {
      const token = storage.getToken()
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => Promise.reject(error),
  )

  api.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(normalizeApiError(error)),
  )

  return api
}
