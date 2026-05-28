import { NavLink } from 'react-router-dom'

export default function Sidebar({ title, subtitle, items, footer }) {
  return (
    <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant/20 px-4 py-6">
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-primary font-literata">{title}</h2>
        <p className="text-xs text-on-surface-variant">{subtitle}</p>
      </div>
      <nav className="flex-1 space-y-1">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-colors ${
                isActive
                  ? 'bg-primary/10 text-primary font-semibold'
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              }`
            }
          >
            {item.icon}
            {item.label}
          </NavLink>
        ))}
      </nav>
      {footer && <div className="mt-6">{footer}</div>}
    </aside>
  )
}
