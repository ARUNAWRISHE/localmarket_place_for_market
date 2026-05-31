import { Outlet } from 'react-router-dom'
import { ChartPie, CheckCircle2, ReceiptText, ShieldAlert, Users } from 'lucide-react'
import Sidebar from '../components/Sidebar.jsx'

const items = [
  { to: '/admin', label: 'Dashboard', icon: <ChartPie size={18} /> },
  { to: '/admin/users', label: 'Users', icon: <Users size={18} /> },
  { to: '/admin/sellers', label: 'Sellers', icon: <CheckCircle2 size={18} /> },
  { to: '/admin/products', label: 'Products', icon: <ShieldAlert size={18} /> },
  { to: '/admin/orders', label: 'Orders', icon: <ShieldAlert size={18} /> },
  { to: '/admin/support', label: 'Support', icon: <ReceiptText size={18} /> },
  { to: '/admin/refunds', label: 'Refunds', icon: <ReceiptText size={18} /> },
]

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar title="Admin Console" subtitle="Marketplace Control" items={items} />
      <main className="md:ml-64 px-4 md:px-margin-desktop py-8">
        <Outlet />
      </main>
    </div>
  )
}
