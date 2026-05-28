import apiClient from '../api/axiosClient.js'
import { ENDPOINTS } from '../api/endpoints.js'
import { unwrapApiResponse } from '../api/response.js'

export const deliveryService = {
  async listActive() {
    const response = await apiClient.get(`${ENDPOINTS.delivery}/active`)
    return unwrapApiResponse(response)
  },
  async updateStatus(id, payload) {
    const response = await apiClient.put(`${ENDPOINTS.delivery}/status/${id}`, payload)
    return unwrapApiResponse(response)
  },
}
