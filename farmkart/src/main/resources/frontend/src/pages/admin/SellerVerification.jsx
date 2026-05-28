const sellers = [
  { id: 'S-401', name: 'Green Valley Organics', status: 'Verified' },
  { id: 'S-402', name: 'Morning Harvest', status: 'Pending' },
]

export default function SellerVerification() {
  return (
    <div className="space-y-6">
      <h1 className="font-literata text-3xl text-primary">Seller Verification</h1>
      <div className="grid gap-4">
        {sellers.map((seller) => (
          <div key={seller.id} className="bg-white rounded-2xl shadow-card p-6 flex justify-between">
            <div>
              <p className="font-semibold">{seller.name}</p>
              <p className="text-xs text-on-surface-variant">{seller.id}</p>
            </div>
            <span className="text-sm text-primary">{seller.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
