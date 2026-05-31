import DashboardWidget from '../../components/DashboardWidget.jsx'
import { Activity, Truck, CheckCircle, IndianRupee } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="font-literata text-3xl text-primary">Delivery Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <DashboardWidget title="Today's Deliveries" value="12" subtitle="3 remaining" icon={<Truck />} />
        <DashboardWidget title="Completed Deliveries" value="9" subtitle="Today" icon={<CheckCircle />} />
        <DashboardWidget title="Pending Deliveries" value="3" subtitle="Today" icon={<Activity />} />
        <DashboardWidget title="Today's Earnings" value="₹450" subtitle="+₹50 bonus" icon={<IndianRupee />} />
      </div>
      <div className="bg-white rounded-3xl shadow-card p-8 mt-6">
        <p className="text-on-surface-variant font-medium mb-4">Current Status</p>
        <p className="text-sm">You are currently online and accepting new delivery requests.</p>
      </div>
    </div>
  )
}
