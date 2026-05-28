import DashboardWidget from '../../components/DashboardWidget.jsx'
import { Activity, Users, ShoppingBasket, TrendingUp } from 'lucide-react'

export default function Analytics() {
  return (
    <div className="space-y-6">
      <h1 className="font-literata text-3xl text-primary">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <DashboardWidget title="Revenue" value="$24,850" subtitle="+12.5%" icon={<TrendingUp />} />
        <DashboardWidget title="Orders" value="1,124" subtitle="+8.2%" icon={<ShoppingBasket />} />
        <DashboardWidget title="Users" value="12,840" subtitle="+4.5%" icon={<Users />} />
        <DashboardWidget title="Engagement" value="68%" subtitle="+2.1%" icon={<Activity />} />
      </div>
      <div className="bg-white rounded-3xl shadow-card p-8">
        <p className="text-on-surface-variant">
          Performance charts and operational heatmaps will render here.
        </p>
      </div>
    </div>
  )
}
