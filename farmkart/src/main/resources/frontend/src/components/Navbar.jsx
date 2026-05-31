import { Link, NavLink } from 'react-router-dom'
import { Bell, Leaf, Search, ShoppingCart, UserCircle } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-card">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 md:px-margin-desktop py-4 gap-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-on-primary shadow-organic">
            <Leaf size={20} />
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">Farm2Kart</p>
            <p className="font-literata text-lg text-primary font-semibold">
              Farm Fresh from Tamil Nadu to Your Home
            </p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-4 flex-1 max-w-2xl">
          <div className="flex items-center gap-2 bg-surface-container-low border border-outline-variant/40 rounded-full px-4 py-2 w-full">
            <Search size={18} className="text-on-surface-variant" />
            <input
              className="bg-transparent outline-none text-sm flex-1"
              placeholder="Search Tamil Nadu farm produce..."
            />
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold">
          {[
            { to: '/', label: 'Home' },
            { to: '/shop', label: 'Shop' },
            { to: '/categories', label: 'Categories' },
            { to: '/orders', label: 'Orders' },
            { to: '/wishlist', label: 'Wishlist' },
            { to: '/profile', label: 'Profile' },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `transition-colors ${
                  isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden lg:inline-flex items-center justify-center h-10 w-10 rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary">
            <Bell size={18} />
          </button>
          <Link
            to="/cart"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary relative"
          >
            <ShoppingCart size={18} />
            <span className="absolute -top-1 -right-1 bg-secondary text-on-secondary text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center">
              3
            </span>
          </Link>
          <Link
            to="/profile"
            className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-primary text-on-primary"
          >
            <UserCircle size={20} />
          </Link>
        </div>
      </div>
    </header>
  )
}
