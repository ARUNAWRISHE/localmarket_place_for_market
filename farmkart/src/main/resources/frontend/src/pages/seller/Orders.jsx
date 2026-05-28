const orders = [
  { id: 'HV-89021', customer: 'Sarah Miller', status: 'New Order', total: '$84.50' },
  { id: 'HV-89019', customer: 'James Wilson', status: 'Shipped', total: '$42.00' },
]

export default function Orders() {
  return (
    <div className="space-y-6">
      <h1 className="font-literata text-3xl text-primary">Orders</h1>
      <div className="space-y-4">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-2xl shadow-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-on-surface-variant">Order #{order.id}</p>
                <p className="font-semibold">{order.customer}</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-on-surface-variant">{order.status}</p>
                <p className="font-semibold text-primary">{order.total}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
