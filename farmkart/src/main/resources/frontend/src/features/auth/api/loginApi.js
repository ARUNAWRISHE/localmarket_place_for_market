import { authService } from '../../../services/authService.js'

export const loginApi = (payload) => authService.login(payload)
