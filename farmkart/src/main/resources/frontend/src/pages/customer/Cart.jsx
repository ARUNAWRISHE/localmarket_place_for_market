import { Link } from 'react-router-dom'
import useCart from '../../hooks/useCart.js'
import { formatCurrency } from '../../utils/formatters.js'

export default function Cart() {
  const { items } = useCart()
  const cartItems = items
  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price || 0) * (item.quantity || 1),
    0,
  )

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-gutter">
      <h1 className="font-literata text-3xl text-primary mb-6">Your Basket</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-4">
          {cartItems.length === 0 ? (
            <div className="bg-white p-6 rounded-2xl shadow-card">
              <p className="text-on-surface-variant">
                No products available yet. Products will appear once sellers publish them.
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-2xl shadow-card flex gap-6">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 rounded-xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{item.name}</h3>
                    <span className="text-primary font-semibold">
                      {formatCurrency(Number(item.price || 0))}
                    </span>
                  </div>
                  <button className="text-sm text-error mt-4">Remove</button>
                </div>
              </div>
            ))
          )}
        </div>
        <div className="lg:col-span-4">
          <div className="bg-surface-container-low p-6 rounded-2xl shadow-card">
            <h3 className="font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between border-t pt-4 font-semibold">
              <span>Total</span>
              <span className="text-primary">{formatCurrency(subtotal)}</span>
            </div>
            <Link
              to="/checkout"
              className={`mt-6 w-full inline-flex justify-center py-3 rounded-xl font-semibold ${
                cartItems.length
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container text-on-surface-variant pointer-events-none'
              }`}
            >
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
