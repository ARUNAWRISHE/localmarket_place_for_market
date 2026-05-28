import { useCallback, useState } from 'react'
import { deliveryService } from '../services/deliveryService.js'

export default function useDelivery() {
  const [deliveries, setDeliveries] = useState([])
  const [loading, setLoading] = useState(false)

  const loadActiveDeliveries = useCallback(async () => {
    setLoading(true)
    try {
      const data = await deliveryService.listActive()
      setDeliveries(data)
      return data
    } finally {
      setLoading(false)
    }
  }, [])

  return { deliveries, loading, loadActiveDeliveries }
}
