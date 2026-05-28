export default function DashboardWidget({ title, value, subtitle, icon }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-card border border-outline-variant/10">
      <div className="flex items-center justify-between mb-4">
        <div className="text-primary">{icon}</div>
        {subtitle && <span className="text-xs text-on-surface-variant">{subtitle}</span>}
      </div>
      <p className="text-sm text-on-surface-variant mb-1">{title}</p>
      <h3 className="text-2xl font-semibold text-on-surface">{value}</h3>
    </div>
  )
}
