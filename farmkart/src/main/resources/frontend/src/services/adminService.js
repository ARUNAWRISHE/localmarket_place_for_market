import apiClient from '../api/axiosClient.js'
import { ENDPOINTS } from '../api/endpoints.js'
import { unwrapApiResponse } from '../api/response.js'

export const adminService = {
  async analytics() {
    const response = await apiClient.get(`${ENDPOINTS.admin}/users`)
    return unwrapApiResponse(response)
  },
  async users(params) {
    const response = await apiClient.get(`${ENDPOINTS.admin}/users`, { params })
    return unwrapApiResponse(response)
  },
}
