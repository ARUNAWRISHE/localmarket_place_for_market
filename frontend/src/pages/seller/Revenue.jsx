export default function Revenue() {
  return (
    <div className="space-y-6">
      <h1 className="font-literata text-3xl text-primary">Revenue</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-primary text-on-primary rounded-3xl p-8 shadow-organic">
          <p className="text-xs uppercase tracking-[0.2em] opacity-80">Total Earnings</p>
          <h2 className="text-4xl font-semibold mt-4">$482,950</h2>
          <button className="mt-8 bg-secondary text-on-secondary px-6 py-3 rounded-xl font-semibold">
            Withdraw
          </button>
        </div>
        <div className="bg-white rounded-3xl p-8 shadow-card">
          <h3 className="font-semibold text-primary mb-4">Insight</h3>
          <p className="text-sm text-on-surface-variant">
            Reached 78% of monthly sales target.
          </p>
        </div>
      </div>
    </div>
  )
}
