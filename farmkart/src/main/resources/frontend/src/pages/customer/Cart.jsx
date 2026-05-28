import { Link } from 'react-router-dom'
import useCart from '../../hooks/useCart.js'

const sample = [
  {
    id: 'item-1',
    name: 'Organic Heirloom Carrots',
    price: '$4.50',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC-hI__lQrqe9kJpYS1EkcnHmfZD5oxRldEL6LaxTozZeIH3mO3H-wyDsG3s7iaCdurkbrD2Oa68sypZsD-UUFxDE-DLBbrYjge26YsQjtXcYV-nVTBmW_CIIEFQMTb6k3SYd2bpr4YjpeHhw2a70_DglEKPSV0rGI-i4hw5x9B1ruZE-F0sFJmli8VGeU4f-hUmo0vRggly6cfRaeICLXlP7AuaK9A96pGZDjmrWnBFnr5HWmBkapnp135vXl95e_x-KG06H0L9i0',
  },
]

export default function Cart() {
  const { items } = useCart()
  const cartItems = items.length ? items : sample

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-gutter">
      <h1 className="font-literata text-3xl text-primary mb-6">Your Basket</h1>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-4">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl shadow-card flex gap-6">
              <img src={item.image} alt={item.name} className="w-24 h-24 rounded-xl object-cover" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{item.name}</h3>
                  <span className="text-primary font-semibold">{item.price}</span>
                </div>
                <button className="text-sm text-error mt-4">Remove</button>
              </div>
            </div>
          ))}
        </div>
        <div className="lg:col-span-4">
          <div className="bg-surface-container-low p-6 rounded-2xl shadow-card">
            <h3 className="font-semibold mb-4">Order Summary</h3>
            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>$12.50</span>
            </div>
            <div className="flex justify-between border-t pt-4 font-semibold">
              <span>Total</span>
              <span className="text-primary">$12.50</span>
            </div>
            <Link
              to="/checkout"
              className="mt-6 w-full inline-flex justify-center bg-primary text-on-primary py-3 rounded-xl font-semibold"
            >
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
