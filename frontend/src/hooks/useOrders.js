import { useContext } from 'react'
import { OrdersContext } from '../context/OrdersContext.jsx'

export default function useOrders() {
  const context = useContext(OrdersContext)
  if (!context) {
    throw new Error('useOrders must be used within OrdersProvider')
  }
  return context
}
