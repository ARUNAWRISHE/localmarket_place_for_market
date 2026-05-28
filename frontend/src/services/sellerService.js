import apiClient from '../api/axiosClient.js'
import { ENDPOINTS } from '../api/endpoints.js'

export const sellerService = {
  async dashboard() {
    const response = await apiClient.get(`${ENDPOINTS.seller}/dashboard`)
    return response.data
  },
  async products(params) {
    const response = await apiClient.get(`${ENDPOINTS.seller}/products`, { params })
    return response.data
  },
}
