import apiClient from '../api/axiosClient.js'
import { ENDPOINTS } from '../api/endpoints.js'
import { unwrapApiResponse } from '../api/response.js'

export const cartService = {
  async get() {
    const response = await apiClient.get(ENDPOINTS.cart)
    return unwrapApiResponse(response)
  },
  async update(payload) {
    const response = await apiClient.put(`${ENDPOINTS.cart}/update`, payload)
    return unwrapApiResponse(response)
  },
}
