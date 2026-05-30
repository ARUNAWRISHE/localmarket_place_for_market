import { useMemo, useState } from 'react'
import { formatCurrency } from '../../utils/formatters.js'

const currentOrders = [
  {
    id: 'F2K-10421',
    status: 'Pending',
    seller: 'Kaveri Organics',
    date: '2026-05-27',
    items: ['Tomato', 'Coriander', 'Curd'],
    total: 680,
  },
  {
    id: 'F2K-10432',
    status: 'Out For Delivery',
    seller: 'Madurai Fresh Mart',
    date: '2026-05-28',
    items: ['Drumstick', 'Ridge Gourd'],
    total: 420,
  },
]

const historyOrders = [
  {
    id: 'F2K-10398',
    status: 'Delivered',
    seller: 'Coimbatore Harvest',
    date: '2026-05-22',
    items: ['Banana', 'Milk', 'Paneer'],
    total: 915,
  },
  {
    id: 'F2K-10376',
    status: 'Cancelled',
    seller: 'Thanjavur Farms',
    date: '2026-05-18',
    items: ['Ragi', 'Thinai'],
    total: 540,
  },
]

export default function Orders() {
  const [activeTab, setActiveTab] = useState('current')

  const tabs = useMemo(
    () => [
      { id: 'current', label: 'Current Orders' },
      { id: 'history', label: 'Order History' },
      { id: 'tracking', label: 'Tracking' },
    ],
    [],
  )

  const canCancel = (status) => ['Pending', 'Confirmed'].includes(status)

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-gutter">
      <h1 className="font-literata text-3xl text-primary mb-6">Orders</h1>
      <div className="flex flex-wrap gap-3 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
              activeTab === tab.id
                ? 'bg-primary text-on-primary border-primary'
                : 'border-outline-variant/40 text-on-surface-variant'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'current' && (
        <div className="space-y-4">
          {currentOrders.map((order) => (
            <div key={order.id} className="bg-white p-6 rounded-3xl shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-on-surface-variant">Order #{order.id}</p>
                  <h3 className="text-lg font-semibold">{order.seller}</h3>
                  <p className="text-sm text-on-surface-variant">{order.date}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-secondary text-on-secondary text-xs font-semibold">
                  {order.status}
                </span>
                <span className="text-primary font-semibold">{formatCurrency(order.total)}</span>
              </div>
              <div className="mt-4 text-sm text-on-surface-variant">
                {order.items.join(', ')}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <button className="px-4 py-2 rounded-xl bg-surface-container-low text-sm font-semibold">
                  View Details
                </button>
                <button className="px-4 py-2 rounded-xl bg-primary text-on-primary text-sm font-semibold">
                  Track Order
                </button>
                <button className="px-4 py-2 rounded-xl bg-surface-container-low text-sm font-semibold">
                  Download Invoice
                </button>
                <button
                  className={`px-4 py-2 rounded-xl text-sm font-semibold ${
                    canCancel(order.status)
                      ? 'bg-error/10 text-error'
                      : 'bg-surface-container text-on-surface-variant cursor-not-allowed'
                  }`}
                  disabled={!canCancel(order.status)}
                >
                  Cancel Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'history' && (
        <div className="space-y-4">
          {historyOrders.map((order) => (
            <div key={order.id} className="bg-white p-6 rounded-3xl shadow-card">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-on-surface-variant">Order #{order.id}</p>
                  <h3 className="text-lg font-semibold">{order.seller}</h3>
                  <p className="text-sm text-on-surface-variant">{order.date}</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-surface-container-low text-xs font-semibold">
                  {order.status}
                </span>
                <span className="text-primary font-semibold">{formatCurrency(order.total)}</span>
              </div>
              <div className="mt-4 text-sm text-on-surface-variant">
                {order.items.join(', ')}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <button className="px-4 py-2 rounded-xl bg-surface-container-low text-sm font-semibold">
                  View Details
                </button>
                <button className="px-4 py-2 rounded-xl bg-surface-container-low text-sm font-semibold">
                  Download Invoice
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'tracking' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-3xl shadow-card p-6">
            <h3 className="font-semibold mb-4">Track active order</h3>
            <div className="space-y-3 text-sm text-on-surface-variant">
              <div className="flex items-center justify-between">
                <span>ETA</span>
                <span className="font-semibold text-on-surface">28 mins</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Status</span>
                <span className="font-semibold text-on-surface">Out For Delivery</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Delivery Partner</span>
                <span className="font-semibold text-on-surface">Anitha M • 4.8 rating</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Zone</span>
                <span className="font-semibold text-on-surface">Chennai</span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-card p-6">
            <h3 className="font-semibold mb-4">Delivery Stages</h3>
            <ul className="space-y-2 text-sm text-on-surface-variant">
              <li>Pending</li>
              <li>Confirmed</li>
              <li>Packed</li>
              <li className="font-semibold text-on-surface">Out For Delivery</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
