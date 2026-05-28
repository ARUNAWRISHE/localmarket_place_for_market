const orders = [
  { id: 'GRN-90210', status: 'In Transit', total: '$28.50' },
  { id: 'GRN-90122', status: 'Delivered', total: '$54.20' },
]

export default function Orders() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-gutter">
      <h1 className="font-literata text-3xl text-primary mb-6">Orders</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white p-6 rounded-2xl shadow-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-on-surface-variant">Order #{order.id}</p>
                <p className="font-semibold">{order.status}</p>
              </div>
              <span className="text-primary font-semibold">{order.total}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
