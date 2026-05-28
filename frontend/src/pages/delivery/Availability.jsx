export default function Availability() {
  return (
    <div className="space-y-6">
      <h1 className="font-literata text-3xl text-primary">Availability</h1>
      <div className="bg-white rounded-3xl shadow-card p-6 flex items-center justify-between">
        <div>
          <p className="font-semibold">Shift Status</p>
          <p className="text-sm text-on-surface-variant">Set your availability.</p>
        </div>
        <button className="px-5 py-2 rounded-full bg-primary text-on-primary">Online</button>
      </div>
    </div>
  )
}
