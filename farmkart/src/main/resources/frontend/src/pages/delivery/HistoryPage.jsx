import Card from '../../components/ui/Card.jsx'

const history = [
  { id: 'D-2001', route: 'Chennai Central', status: 'DELIVERED' },
  { id: 'D-2002', route: 'Coimbatore North', status: 'DELIVERED' },
  { id: 'D-2003', route: 'Madurai West', status: 'CANCELLED' },
]

export default function HistoryPage() {
  return (
    <div className="max-w-[1000px] mx-auto space-y-6">
      <section>
        <h1 className="font-literata text-3xl text-primary mb-2">Delivery History</h1>
        <p className="text-on-surface-variant">Review completed and cancelled deliveries.</p>
      </section>

      <div className="space-y-3">
        {history.map((item) => (
          <Card key={item.id} className="flex items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-on-surface">{item.id}</p>
              <p className="text-sm text-on-surface-variant">{item.route}</p>
            </div>
            <span className="text-xs font-semibold tracking-wide text-primary">{item.status}</span>
          </Card>
        ))}
      </div>
    </div>
  )
}
