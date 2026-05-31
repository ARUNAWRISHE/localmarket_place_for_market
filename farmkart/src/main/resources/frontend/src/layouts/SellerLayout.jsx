import { Outlet } from 'react-router-dom'
import { BarChart3, Boxes, Flower2, LayoutGrid, MessageSquare, Settings, ShoppingCart, Wallet } from 'lucide-react'
import Sidebar from '../components/Sidebar.jsx'

const items = [
  { to: '/seller', label: 'Dashboard', icon: <LayoutGrid size={18} /> },
  { to: '/seller/products', label: 'Products', icon: <Boxes size={18} /> },
  { to: '/seller/inventory', label: 'Inventory', icon: <ShoppingCart size={18} /> },
  { to: '/seller/orders', label: 'Orders', icon: <ShoppingCart size={18} /> },
  { to: '/seller/farm-profile', label: 'Farm Profile', icon: <Flower2 size={18} /> },
  { to: '/seller/analytics', label: 'Analytics', icon: <BarChart3 size={18} /> },
]

export default function SellerLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar title="Seller Hub" subtitle="Tamil Nadu Vendors" items={items} />
      <main className="md:ml-64 px-4 md:px-margin-desktop py-8">
        <Outlet />
      </main>
    </div>
  )
}
