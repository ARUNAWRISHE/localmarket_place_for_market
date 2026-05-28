const products = [
  { id: 'P-1001', name: 'Heirloom Tomatoes', status: 'Active' },
  { id: 'P-1002', name: 'Raw Honey', status: 'Flagged' },
]

export default function ProductMonitoring() {
  return (
    <div className="space-y-6">
      <h1 className="font-literata text-3xl text-primary">Product Monitoring</h1>
      <div className="bg-white rounded-2xl shadow-card p-6">
        {products.map((product) => (
          <div key={product.id} className="flex justify-between border-b border-outline-variant/10 py-3">
            <p className="font-semibold">{product.name}</p>
            <span className="text-sm text-on-surface-variant">{product.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
