import { Link, useParams } from 'react-router-dom'

export default function ProductDetails() {
  const { id } = useParams()

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-gutter">
      <div className="bg-white rounded-3xl shadow-card p-8 text-center">
        <h1 className="font-literata text-3xl text-primary mb-3">Product unavailable</h1>
        <p className="text-on-surface-variant mb-6">
          No products available yet. Products will appear once sellers publish them.
        </p>
        <p className="text-xs text-on-surface-variant mb-6">Requested ID: {id}</p>
        <Link
          to="/shop"
          className="inline-flex items-center px-6 py-3 bg-primary text-on-primary rounded-xl font-semibold"
        >
          Back to shop
        </Link>
      </div>
    </div>
  )
}
