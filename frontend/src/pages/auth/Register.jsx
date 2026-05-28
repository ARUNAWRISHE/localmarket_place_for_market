import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.js'
import useNotifications from '../../hooks/useNotifications.js'
import { ROLES } from '../../constants/roles.js'

export default function Register() {
  const navigate = useNavigate()
  const { register } = useAuth()
  const { addToast } = useNotifications()
  const [form, setForm] = useState({
    full_name: '',
    email: '',
    password: '',
    phone: '',
    role: ROLES.CUSTOMER,
    profile_image: '',
  })
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      if (form.password !== confirmPassword) {
        addToast({ title: 'Password mismatch', message: 'Please check again.' })
        return
      }
      await register(form)
      addToast({ title: 'Account created', message: 'Please sign in.' })
      navigate('/auth/login')
    } catch (error) {
      addToast({ title: 'Registration failed', message: error.message })
    }
  }

  return (
    <div className="w-full max-w-lg bg-white shadow-card rounded-3xl p-8">
      <h2 className="font-literata text-2xl text-primary mb-2">Create account</h2>
      <p className="text-sm text-on-surface-variant mb-6">
        Join the organic marketplace network.
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          className="w-full px-4 py-3 rounded-xl border border-outline-variant/40"
          placeholder="Full name"
          value={form.full_name}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, full_name: event.target.value }))
          }
          required
        />
        <input
          className="w-full px-4 py-3 rounded-xl border border-outline-variant/40"
          placeholder="Email address"
          type="email"
          value={form.email}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, email: event.target.value }))
          }
          required
        />
        <input
          className="w-full px-4 py-3 rounded-xl border border-outline-variant/40"
          placeholder="Phone"
          type="tel"
          value={form.phone}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
        <select
          className="w-full px-4 py-3 rounded-xl border border-outline-variant/40 bg-white"
          value={form.role}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, role: event.target.value }))
          }
        >
          <option value={ROLES.CUSTOMER}>Customer</option>
          <option value={ROLES.SELLER}>Seller</option>
          <option value={ROLES.DELIVERY}>Delivery Partner</option>
          <option value={ROLES.ADMIN}>Admin</option>
        </select>
        <input
          className="w-full px-4 py-3 rounded-xl border border-outline-variant/40"
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, password: event.target.value }))
          }
          required
        />
        <input
          className="w-full px-4 py-3 rounded-xl border border-outline-variant/40"
          placeholder="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          required
        />
        <input
          className="w-full px-4 py-3 rounded-xl border border-outline-variant/40"
          placeholder="Profile image URL (optional)"
          type="url"
          value={form.profile_image}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, profile_image: event.target.value }))
          }
        />
        <button className="w-full bg-primary text-on-primary py-3 rounded-xl font-semibold">
          Create account
        </button>
      </form>
      <p className="text-sm text-on-surface-variant mt-6">
        Already have an account?{' '}
        <Link to="/auth/login" className="text-primary font-semibold">
          Sign in
        </Link>
      </p>
    </div>
  )
}
