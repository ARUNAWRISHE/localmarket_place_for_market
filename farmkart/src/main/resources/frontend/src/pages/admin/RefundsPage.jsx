import Card from '../../components/ui/Card.jsx'

const refunds = [
  { id: 'R-9001', order: 'ORD-1024', amount: '₹480', status: 'REQUESTED' },
  { id: 'R-9002', order: 'ORD-1028', amount: '₹125', status: 'REFUNDED' },
]

export default function RefundsPage() {
  return (
    <div className="max-w-[1100px] mx-auto space-y-6">
      <section>
        <h1 className="font-literata text-3xl text-primary mb-2">Refund Management</h1>
        <p className="text-on-surface-variant">Review refund requests and settle payouts.</p>
      </section>

      <div className="space-y-3">
        {refunds.map((refund) => (
          <Card key={refund.id} className="flex items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-on-surface">{refund.id}</p>
              <p className="text-sm text-on-surface-variant">Order {refund.order} · {refund.amount}</p>
            </div>
            <span className="text-xs font-semibold tracking-wide text-primary">{refund.status}</span>
          </Card>
        ))}
      </div>
    </div>
  )
}
