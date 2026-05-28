import apiClient from '../api/axiosClient.js'
import { ENDPOINTS } from '../api/endpoints.js'

export const deliveryService = {
  async listActive() {
    const response = await apiClient.get(`${ENDPOINTS.delivery}/active`)
    return response.data
  },
  async updateStatus(payload) {
    const response = await apiClient.post(`${ENDPOINTS.delivery}/status`, payload)
    return response.data
  },
}
