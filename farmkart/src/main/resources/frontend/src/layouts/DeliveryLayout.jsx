import { Outlet } from 'react-router-dom'
import { Bell, Clock3, Map, Navigation, Shield, ToggleLeft } from 'lucide-react'
import Sidebar from '../components/Sidebar.jsx'

const items = [
  { to: '/delivery', label: 'Active', icon: <Navigation size={18} /> },
  { to: '/delivery/routes', label: 'Routes', icon: <Map size={18} /> },
  { to: '/delivery/earnings', label: 'Earnings', icon: <Shield size={18} /> },
  { to: '/delivery/status', label: 'Status', icon: <Navigation size={18} /> },
  { to: '/delivery/availability', label: 'Availability', icon: <ToggleLeft size={18} /> },
  { to: '/delivery/notifications', label: 'Notifications', icon: <Bell size={18} /> },
  { to: '/delivery/history', label: 'History', icon: <Clock3 size={18} /> },
]

export default function DeliveryLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar title="Delivery Portal" subtitle="Fleet Command" items={items} />
      <main className="md:ml-64 px-4 md:px-margin-desktop py-8">
        <Outlet />
      </main>
    </div>
  )
}
