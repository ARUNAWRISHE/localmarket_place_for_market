import { createContext, useMemo, useReducer } from 'react'

export const OrdersContext = createContext(null)

const initialState = {
  orders: [],
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_ORDERS':
      return { ...state, orders: action.payload }
    default:
      return state
  }
}

export default function OrdersProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const value = useMemo(
    () => ({
      orders: state.orders,
      setOrders: (orders) => dispatch({ type: 'SET_ORDERS', payload: orders }),
    }),
    [state.orders],
  )

  return <OrdersContext.Provider value={value}>{children}</OrdersContext.Provider>
}
