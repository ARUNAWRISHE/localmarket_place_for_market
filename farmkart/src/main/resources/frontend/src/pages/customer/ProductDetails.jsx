import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ProductDetails() {
  const { id } = useParams()
  const [qty, setQty] = useState(1)

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-gutter">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-surface-container">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDk_5TUYEjyeZ2Bzy1PRTIX0ABoKayjbh_kluGqIuN0QmSRvftsm8ddGnd_k4HZeDthcQX1LaXJoiM89lPxd1UPZaInrjMuwT6sLAbHVtnxmccrGN8GhiCA2_7uXnfPhz729zqndCWv1Tr6BttwIhhjTC8lk0-Y1qQtiapGa1BAmCbG-iaIyo2W1pvLZ1qCXOa5_Q0ZhUOtm3s8k451wsEybH2sMrx46uZjyS99avAqwVQH-jR79P9JURyq0BltBTaTV4lXGI6gKl4"
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="lg:col-span-5">
          <h1 className="font-literata text-3xl text-primary mb-2">
            Organic Heirloom Tomatoes
          </h1>
          <p className="text-on-surface-variant mb-6">by Sunny Valley Farms</p>
          <div className="bg-surface-container-low p-6 rounded-2xl mb-6">
            <div className="flex items-end justify-between">
              <div className="text-3xl font-semibold text-primary">$8.50</div>
              <div className="text-sm text-on-surface-variant">Harvested 4h ago</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-surface-container rounded-xl px-4 py-2 gap-4">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
              <span className="font-semibold">{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
            <Link
              to="/cart"
              className="flex-1 bg-primary text-on-primary py-3 rounded-xl text-center font-semibold"
            >
              Add to cart
            </Link>
          </div>
          <p className="text-xs text-on-surface-variant mt-4">
            Product ID: {id}
          </p>
        </div>
      </div>
    </div>
  )
}
