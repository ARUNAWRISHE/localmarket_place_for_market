import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth.js'
import useNotifications from '../../hooks/useNotifications.js'

export default function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const { addToast } = useNotifications()
  const [form, setForm] = useState({ email: '', password: '' })

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await login(form)
      addToast({ title: 'Welcome back', message: 'Signed in successfully.' })
      navigate('/')
    } catch (error) {
      addToast({ title: 'Login failed', message: error.message })
    }
  }

  return (
    <div className="w-full max-w-md bg-white shadow-card rounded-3xl p-8">
      <h2 className="font-literata text-2xl text-primary mb-2">Welcome back</h2>
      <p className="text-sm text-on-surface-variant mb-6">
        Sign in to access Farm2Kart.
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
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
          Sign in
        </button>
      </form>
      <p className="text-sm text-on-surface-variant mt-6">
        New here?{' '}
        <Link to="/auth/register" className="text-primary font-semibold">
          Create account
        </Link>
      </p>
      <p className="text-sm text-on-surface-variant mt-2">
        <Link to="/auth/forgot-password" className="text-primary font-semibold">
          Forgot password?
        </Link>
      </p>
    </div>
  )
}
