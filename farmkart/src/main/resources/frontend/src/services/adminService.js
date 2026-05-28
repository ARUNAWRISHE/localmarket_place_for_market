import apiClient from '../api/axiosClient.js'
import { ENDPOINTS } from '../api/endpoints.js'

export const adminService = {
  async analytics() {
    const response = await apiClient.get(`${ENDPOINTS.admin}/analytics`)
    return response.data
  },
  async users(params) {
    const response = await apiClient.get(`${ENDPOINTS.admin}/users`, { params })
    return response.data
  },
}
