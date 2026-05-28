import AuthProvider from './AuthContext.jsx'
import CartProvider from './CartContext.jsx'
import OrdersProvider from './OrdersContext.jsx'
import NotificationProvider from './NotificationContext.jsx'
import ThemeProvider from './ThemeContext.jsx'

export default function AppProviders({ children }) {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <AuthProvider>
          <CartProvider>
            <OrdersProvider>{children}</OrdersProvider>
          </CartProvider>
        </AuthProvider>
      </NotificationProvider>
    </ThemeProvider>
  )
}
