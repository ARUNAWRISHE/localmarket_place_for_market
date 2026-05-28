import { storage } from '../../../utils/storage.js'

export const tokenUtils = {
  getAccessToken: storage.getToken,
  setAccessToken: storage.setToken,
  clearSession: storage.clearAll,
}
