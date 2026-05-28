import apiClient from '../api/axiosClient.js'
import { ENDPOINTS } from '../api/endpoints.js'

export const authService = {
  async login(payload) {
    const response = await apiClient.post(ENDPOINTS.auth.login, payload)
    return response.data
  },
  async register(payload) {
    const response = await apiClient.post(ENDPOINTS.auth.register, payload)
    return response.data
  },
  async getProfile() {
    const response = await apiClient.get(ENDPOINTS.auth.profile)
    return response.data
  },
}
