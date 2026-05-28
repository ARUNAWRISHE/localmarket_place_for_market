import apiClient from '../api/axiosClient.js'
import { ENDPOINTS } from '../api/endpoints.js'
import { unwrapApiResponse } from '../api/response.js'

export const authService = {
  async login(payload) {
    const response = await apiClient.post(ENDPOINTS.auth.login, payload)
    return unwrapApiResponse(response)
  },
  async register(payload) {
    const response = await apiClient.post(ENDPOINTS.auth.register, payload)
    return unwrapApiResponse(response)
  },
  async getProfile() {
    const response = await apiClient.get(ENDPOINTS.auth.profile)
    return unwrapApiResponse(response)
  },
}
