import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.js'
import useNotifications from '../../hooks/useNotifications.js'

export default function Register() {
  const navigate = useNavigate()
  const { register } = useAuth()
  const { addToast } = useNotifications()
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
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
          value={form.name}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, name: event.target.value }))
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
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, password: event.target.value }))
          }
          required
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
