import { useState } from 'react'
import { formatCurrency } from '../../utils/formatters.js'

export default function Checkout() {
  const [placed, setPlaced] = useState(false)

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-gutter">
      <h1 className="font-literata text-3xl text-primary mb-6">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 space-y-6">
          <section className="bg-white p-6 rounded-2xl shadow-card">
            <h2 className="font-semibold mb-3">Delivery Address</h2>
            <div className="p-4 bg-surface-container rounded-xl">
              12, Anna Nagar East, Chennai, Tamil Nadu 600102
            </div>
          </section>
          <section className="bg-white p-6 rounded-2xl shadow-card">
            <h2 className="font-semibold mb-3">Payment Method</h2>
            <div className="p-4 border border-primary rounded-xl bg-primary/5">
              UPI • Farm2Kart Pay
            </div>
          </section>
        </div>
        <div className="lg:col-span-5">
          <div className="bg-white p-6 rounded-2xl shadow-card">
            <h3 className="font-semibold mb-4">Total Amount</h3>
            <div className="text-3xl font-semibold text-primary mb-6">
              {formatCurrency(0)}
            </div>
            <button
              onClick={() => setPlaced(true)}
              className="w-full bg-primary text-on-primary py-3 rounded-xl font-semibold"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      {placed && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-md flex items-center justify-center">
          <div className="bg-white rounded-3xl shadow-card p-8 text-center">
            <h2 className="font-literata text-3xl text-primary mb-2">Order Placed!</h2>
            <p className="text-sm text-on-surface-variant mb-6">
              Your Farm2Kart order is on the way.
            </p>
            <button
              onClick={() => setPlaced(false)}
              className="px-6 py-2 rounded-xl bg-primary text-on-primary"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
