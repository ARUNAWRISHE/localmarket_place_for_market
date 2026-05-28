import { useCallback, useState } from 'react'
import apiClient from '../api/axiosClient.js'

export default function useApi() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const request = useCallback(async (config) => {
    setLoading(true)
    setError(null)
    try {
      const response = await apiClient.request(config)
      return response.data
    } catch (err) {
      setError(err)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  return { request, loading, error, setError }
}
