import { useState } from 'react'
import { Link } from 'react-router-dom'
import useNotifications from '../../hooks/useNotifications.js'

export default function ForgotPassword() {
  const { addToast } = useNotifications()
  const [email, setEmail] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()
    addToast({
      title: 'Reset link sent',
      message: `If ${email} exists, we sent a password reset link.`,
    })
  }

  return (
    <div className="w-full max-w-md bg-white shadow-card rounded-3xl p-8">
      <h2 className="font-literata text-2xl text-primary mb-2">Reset password</h2>
      <p className="text-sm text-on-surface-variant mb-6">
        Enter your email and we will send password reset instructions.
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          className="w-full px-4 py-3 rounded-xl border border-outline-variant/40"
          placeholder="Email address"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <button className="w-full bg-primary text-on-primary py-3 rounded-xl font-semibold">
          Send reset link
        </button>
      </form>
      <p className="text-sm text-on-surface-variant mt-6">
        Remembered your password?{' '}
        <Link to="/auth/login" className="text-primary font-semibold">
          Back to login
        </Link>
      </p>
    </div>
  )
}
