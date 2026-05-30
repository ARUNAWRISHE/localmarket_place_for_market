import Card from '../../components/ui/Card.jsx'

const tickets = [
  { id: 'T-1001', subject: 'Late delivery', status: 'OPEN' },
  { id: 'T-1002', subject: 'Refund follow-up', status: 'IN_PROGRESS' },
]

export default function SupportPage() {
  return (
    <div className="max-w-[1100px] mx-auto space-y-6">
      <section>
        <h1 className="font-literata text-3xl text-primary mb-2">Support Management</h1>
        <p className="text-on-surface-variant">Monitor and resolve customer support tickets.</p>
      </section>

      <div className="space-y-3">
        {tickets.map((ticket) => (
          <Card key={ticket.id} className="flex items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-on-surface">{ticket.subject}</p>
              <p className="text-sm text-on-surface-variant">{ticket.id}</p>
            </div>
            <span className="text-xs font-semibold tracking-wide text-primary">{ticket.status}</span>
          </Card>
        ))}
      </div>
    </div>
  )
}
