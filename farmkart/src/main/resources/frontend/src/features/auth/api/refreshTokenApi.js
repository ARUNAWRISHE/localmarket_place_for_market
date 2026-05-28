import apiClient from '../../../api/axiosClient.js'
import { ENDPOINTS } from '../../../api/endpoints.js'
import { unwrapApiResponse } from '../../../api/response.js'

export async function refreshTokenApi(payload) {
  const response = await apiClient.post(ENDPOINTS.auth.refresh, payload)
  return unwrapApiResponse(response)
}
