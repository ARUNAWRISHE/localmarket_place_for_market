export default function ProductRating({ rating = 0, totalReviews = 0 }) {
  return (
    <span className="text-sm text-on-surface-variant">
      {Number(rating).toFixed(1)} ({totalReviews})
    </span>
  )
}
