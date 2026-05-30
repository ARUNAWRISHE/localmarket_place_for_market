import { Home, LayoutGrid, User, PackageCheck } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const items = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/shop', label: 'Shop', icon: LayoutGrid },
  { to: '/orders', label: 'Orders', icon: PackageCheck },
  { to: '/profile', label: 'Profile', icon: User },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 w-full md:hidden bg-surface/90 backdrop-blur-lg border-t border-outline-variant/30 z-50">
      <div className="grid grid-cols-4">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 py-3 text-[11px] ${
                isActive ? 'text-primary' : 'text-on-surface-variant'
              }`
            }
          >
            <item.icon size={18} />
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
