const orders = [
  { id: 'ORD-2041', status: 'In Transit', total: '$42.20' },
  { id: 'ORD-2042', status: 'Delivered', total: '$19.80' },
]

export default function OrderMonitoring() {
  return (
    <div className="space-y-6">
      <h1 className="font-literata text-3xl text-primary">Order Monitoring</h1>
      <div className="bg-white rounded-2xl shadow-card p-6">
        {orders.map((order) => (
          <div key={order.id} className="flex justify-between border-b border-outline-variant/10 py-3">
            <p className="font-semibold">{order.id}</p>
            <span className="text-sm text-on-surface-variant">{order.status}</span>
            <span className="text-sm text-primary">{order.total}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
