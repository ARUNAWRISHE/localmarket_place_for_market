import apiClient from '../api/axiosClient.js'
import { ENDPOINTS } from '../api/endpoints.js'

export const productService = {
  async list(params) {
    const response = await apiClient.get(ENDPOINTS.products, { params })
    return response.data
  },
  async getById(id) {
    const response = await apiClient.get(`${ENDPOINTS.products}/${id}`)
    return response.data
  },
}
