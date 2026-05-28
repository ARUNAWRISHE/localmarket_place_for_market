import { Link } from 'react-router-dom'

export default function Unauthorized() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center p-6">
      <h1 className="font-literata text-4xl text-primary mb-4">Access denied</h1>
      <p className="text-on-surface-variant mb-6">
        You do not have permission to access this area.
      </p>
      <Link to="/" className="px-6 py-3 rounded-xl bg-primary text-on-primary">
        Back to home
      </Link>
    </div>
  )
}
