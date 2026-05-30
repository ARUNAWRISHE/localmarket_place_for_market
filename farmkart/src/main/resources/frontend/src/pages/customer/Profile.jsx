import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.js'

export default function Profile() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/auth/login')
  }

  const profile = {
    name: user?.name || 'Aarthi Raman',
    email: user?.email || 'aarthi.r@farm2kart.in',
    phone: user?.phone || '+91 98400 22331',
    address: user?.address || '12, Anna Nagar East, Chennai, Tamil Nadu 600102',
    image:
      user?.image ||
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwVpt3eBdXV7ntHOCdmUcaX8m-urtyie4MwMIV-Hij1kJCZQBJxA6K9BTYGinPSDCyDEChUQvueipQz0QBjzRN5_TBZiTiBbEV0CZBGbE8iH3DdIrkadGw5EiSTnwvIIw3WHB9B7lEo9iMmjmWMvJqUyS7ow73kyI7w_mRZiVQJx5kq5uRbOCgg0C9quYNhSINqpBjiGJzdtat3BKCcsrDCmyZDciwUsr1f_Q8CC6alkDlNfJBuQtv12SIfBhtlhx7-Cm2I5_-vh4',
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-gutter">
      <h1 className="font-literata text-3xl text-primary mb-6">Profile</h1>
      <div className="bg-white rounded-3xl shadow-card p-8 flex flex-col lg:flex-row gap-8">
        <img
          src={profile.image}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-card"
        />
        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold">{profile.name}</h2>
              <p className="text-on-surface-variant">{profile.email}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl bg-error/10 text-error font-semibold"
            >
              Logout
            </button>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-4 rounded-xl">
              <p className="text-xs text-on-surface-variant">Phone</p>
              <p className="font-semibold">{profile.phone}</p>
            </div>
            <div className="bg-surface-container-low p-4 rounded-xl">
              <p className="text-xs text-on-surface-variant">Address</p>
              <p className="font-semibold">{profile.address}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-3xl shadow-card p-6">
          <h3 className="font-semibold mb-4">Order Summary</h3>
          <div className="space-y-3 text-sm text-on-surface-variant">
            <div className="flex items-center justify-between">
              <span>Total Orders</span>
              <span className="font-semibold text-on-surface">18</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Active Orders</span>
              <span className="font-semibold text-on-surface">2</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Completed Orders</span>
              <span className="font-semibold text-on-surface">16</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-card p-6 lg:col-span-2">
          <h3 className="font-semibold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['My Orders', 'Order History', 'Current Orders', 'Wishlist', 'Settings'].map((item) => (
              <button
                key={item}
                className="px-4 py-3 rounded-xl bg-surface-container-low text-sm font-semibold text-left"
              >
                {item}
              </button>
            ))}
            <button
              onClick={handleLogout}
              className="px-4 py-3 rounded-xl bg-error/10 text-error text-sm font-semibold text-left"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
