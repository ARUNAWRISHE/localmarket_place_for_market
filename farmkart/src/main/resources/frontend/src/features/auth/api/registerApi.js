import { authService } from '../../../services/authService.js'

export const registerApi = (payload) => authService.register(payload)
