import apiClient from '../api/axiosClient.js'
import { ENDPOINTS } from '../api/endpoints.js'

export const orderService = {
  async list(params) {
    const response = await apiClient.get(ENDPOINTS.orders, { params })
    return response.data
  },
  async create(payload) {
    const response = await apiClient.post(ENDPOINTS.orders, payload)
    return response.data
  },
}
