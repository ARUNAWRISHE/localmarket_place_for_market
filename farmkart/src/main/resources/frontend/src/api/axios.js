import axios from 'axios'
import { env } from '../config/env.js'

const api = axios.create({
  baseURL: env.apiBaseUrl,
  timeout: 15000,
})

export default api
