import apiClient from '../api/axiosClient.js'
import { ENDPOINTS } from '../api/endpoints.js'

export const cartService = {
  async get() {
    const response = await apiClient.get(ENDPOINTS.cart)
    return response.data
  },
  async update(payload) {
    const response = await apiClient.put(ENDPOINTS.cart, payload)
    return response.data
  },
}
