import apiClient from '../api/axiosClient.js'
import { ENDPOINTS } from '../api/endpoints.js'
import { unwrapApiResponse } from '../api/response.js'

export const productService = {
  async list(params) {
    const response = await apiClient.get(ENDPOINTS.products, { params })
    return unwrapApiResponse(response)
  },
  async getById(id) {
    const response = await apiClient.get(`${ENDPOINTS.products}/${id}`)
    return unwrapApiResponse(response)
  },
}
