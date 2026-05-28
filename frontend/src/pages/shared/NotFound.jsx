import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-center p-6">
      <h1 className="font-literata text-4xl text-primary mb-4">Page not found</h1>
      <p className="text-on-surface-variant mb-6">
        The page you are looking for does not exist.
      </p>
      <Link to="/" className="px-6 py-3 rounded-xl bg-primary text-on-primary">
        Back to home
      </Link>
    </div>
  )
}
