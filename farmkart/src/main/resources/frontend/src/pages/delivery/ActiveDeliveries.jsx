const active = [
  { id: 'ORD-2841', eta: '12 mins', distance: '2.4 km', address: '841 Organic Way' },
  { id: 'ORD-2902', eta: '24 mins', distance: '4.8 km', address: '12 Harvest Lane' },
]

export default function ActiveDeliveries() {
  return (
    <div className="space-y-6">
      <h1 className="font-literata text-3xl text-primary">Active Deliveries</h1>
      <div className="space-y-4">
        {active.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl shadow-card p-6">
            <div className="flex justify-between">
              <div>
                <p className="text-xs text-on-surface-variant">{item.id}</p>
                <p className="font-semibold">{item.address}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-primary">{item.eta}</p>
                <p className="text-xs text-on-surface-variant">{item.distance}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
