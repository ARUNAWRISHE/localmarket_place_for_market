import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' },
  { to: '/categories', label: 'Categories' },
  { to: '/orders', label: 'Orders' },
  { to: '/profile', label: 'Profile' },
]

export default function MobileMenu() {
  return (
    <nav className="md:hidden fixed bottom-20 left-4 right-4 z-40 rounded-3xl bg-surface/95 backdrop-blur-md shadow-organic border border-outline-variant/20 px-3 py-2">
      <div className="grid grid-cols-5 gap-2 text-xs font-semibold text-center">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              `rounded-2xl px-2 py-3 ${isActive ? 'bg-primary text-on-primary' : 'text-on-surface-variant'}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
