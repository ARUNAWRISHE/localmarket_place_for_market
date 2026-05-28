const notifications = [
  { id: 1, text: 'New pickup available near Market St.' },
  { id: 2, text: 'Delivery completed. Tip added.' },
]

export default function Notifications() {
  return (
    <div className="space-y-6">
      <h1 className="font-literata text-3xl text-primary">Notifications</h1>
      <div className="space-y-4">
        {notifications.map((note) => (
          <div key={note.id} className="bg-white rounded-2xl shadow-card p-4">
            <p className="text-on-surface-variant">{note.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
