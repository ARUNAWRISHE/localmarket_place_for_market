import apiClient from '../api/axiosClient.js'
import { ENDPOINTS } from '../api/endpoints.js'
import { unwrapApiResponse } from '../api/response.js'

export const orderService = {
  async list(params) {
    const response = await apiClient.get(ENDPOINTS.orders, { params })
    return unwrapApiResponse(response)
  },
  async create(payload) {
    const response = await apiClient.post(ENDPOINTS.orders, payload)
    return unwrapApiResponse(response)
  },
}
