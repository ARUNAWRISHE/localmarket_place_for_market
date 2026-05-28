import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import { authService } from '../services/authService.js'
import { storage } from '../utils/storage.js'

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null)
  const [token, setToken] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const boot = async () => {
      const storedToken = storage.getToken()
      const storedRole = storage.getRole()
      const storedUser = storage.getUser()
      setToken(storedToken)
      setRole(storedRole)
      setUser(storedUser)
      setLoading(false)
    }

    boot()
  }, [])

  const login = useCallback(async (payload) => {
    const data = await authService.login(payload)
    storage.setToken(data.token)
    storage.setRole(data.role)
    storage.setUser(data.user)
    setToken(data.token)
    setRole(data.role)
    setUser(data.user)
    return data
  }, [])

  const register = useCallback(async (payload) => {
    const data = await authService.register(payload)
    return data
  }, [])

  const logout = useCallback(() => {
    storage.clearAll()
    setToken(null)
    setRole(null)
    setUser(null)
  }, [])

  const value = useMemo(
    () => ({
      user,
      role,
      token,
      loading,
      isAuthenticated: Boolean(token),
      login,
      register,
      logout,
    }),
    [user, role, token, loading, login, register, logout],
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
