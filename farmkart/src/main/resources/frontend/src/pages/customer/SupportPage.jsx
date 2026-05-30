import { useState } from 'react'
import Card from '../../components/ui/Card.jsx'
import useNotifications from '../../hooks/useNotifications.js'

const sampleTickets = [
  { id: 'T-1001', subject: 'Late delivery', status: 'OPEN', priority: 'HIGH' },
  { id: 'T-1002', subject: 'Wrong item received', status: 'RESOLVED', priority: 'MEDIUM' },
]

export default function SupportPage() {
  const { addToast } = useNotifications()
  const [form, setForm] = useState({ subject: '', description: '' })

  const handleSubmit = (event) => {
    event.preventDefault()
    addToast({ title: 'Ticket created', message: 'Support ticket submitted successfully.' })
    setForm({ subject: '', description: '' })
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-margin-desktop space-y-8">
      <section>
        <h1 className="font-literata text-3xl text-primary mb-2">Support Center</h1>
        <p className="text-on-surface-variant">Create a ticket and track its status from one place.</p>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="space-y-4">
          <h2 className="font-semibold text-lg text-on-surface">New ticket</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              className="w-full px-4 py-3 rounded-xl border border-outline-variant/40"
              placeholder="Subject"
              value={form.subject}
              onChange={(event) => setForm((prev) => ({ ...prev, subject: event.target.value }))}
              required
            />
            <textarea
              className="w-full min-h-36 px-4 py-3 rounded-xl border border-outline-variant/40"
              placeholder="Describe your issue"
              value={form.description}
              onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))}
              required
            />
            <button className="bg-primary text-on-primary font-semibold px-5 py-3 rounded-xl">
              Submit ticket
            </button>
          </form>
        </Card>

        <Card className="space-y-4">
          <h2 className="font-semibold text-lg text-on-surface">Recent tickets</h2>
          <div className="space-y-3">
            {sampleTickets.map((ticket) => (
              <div key={ticket.id} className="rounded-2xl border border-outline-variant/20 p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-on-surface">{ticket.subject}</p>
                    <p className="text-sm text-on-surface-variant">{ticket.id}</p>
                  </div>
                  <div className="text-right text-xs uppercase tracking-wide text-on-surface-variant">
                    <p>{ticket.status}</p>
                    <p>{ticket.priority}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
