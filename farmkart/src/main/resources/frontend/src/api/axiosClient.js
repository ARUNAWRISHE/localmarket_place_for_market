import api from './axios.js'
import { attachInterceptors } from './interceptors.js'

const apiClient = attachInterceptors(api)

export default apiClient
