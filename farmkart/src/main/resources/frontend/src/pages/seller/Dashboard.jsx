import { BarChart3, PackageCheck, Star, Truck } from 'lucide-react'
import DashboardWidget from '../../components/DashboardWidget.jsx'

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-literata text-3xl text-primary mb-2">Seller Dashboard</h1>
        <p className="text-sm text-on-surface-variant">
          Real-time view of sales, orders, and inventory health.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <DashboardWidget title="Total Sales" value="$12,482" subtitle="+12%" icon={<BarChart3 />} />
        <DashboardWidget title="Active Orders" value="142" subtitle="Live" icon={<Truck />} />
        <DashboardWidget title="Low Stock" value="12" subtitle="Urgent" icon={<PackageCheck />} />
        <DashboardWidget title="Rating" value="4.9" subtitle="128 reviews" icon={<Star />} />
      </div>
      <div className="bg-white rounded-3xl shadow-card p-8">
        <h2 className="font-literata text-2xl text-primary mb-4">Revenue Trend</h2>
        <div className="h-52 flex items-end gap-2">
          {[30, 60, 45, 80, 70, 95].map((h, idx) => (
            <div key={idx} className="flex-1 bg-primary/20 rounded-t-lg" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  )
}
