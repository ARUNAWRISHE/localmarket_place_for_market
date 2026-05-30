import Card from '../../components/ui/Card.jsx'

const metrics = [
  { label: 'Revenue', value: '₹1.8L' },
  { label: 'Top products', value: '24' },
  { label: 'Average rating', value: '4.8' },
  { label: 'Repeat buyers', value: '62%' },
]

export default function AnalyticsPage() {
  return (
    <div className="max-w-[1100px] mx-auto space-y-8">
      <section>
        <h1 className="font-literata text-3xl text-primary mb-2">Seller Analytics</h1>
        <p className="text-on-surface-variant">Track sales, reviews, and product performance.</p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.label} className="space-y-2">
            <p className="text-sm text-on-surface-variant">{metric.label}</p>
            <p className="font-literata text-3xl text-on-surface">{metric.value}</p>
          </Card>
        ))}
      </div>

      <Card className="space-y-3">
        <h2 className="font-semibold text-lg text-on-surface">Performance summary</h2>
        <p className="text-on-surface-variant">
          Add charts here for revenue trends, top products, and review distribution once live analytics data is wired.
        </p>
      </Card>
    </div>
  )
}
