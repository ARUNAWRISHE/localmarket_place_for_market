export default function ProductPrice({ price, discountPrice }) {
  return (
    <div className="flex items-baseline gap-2">
      <span className="font-semibold text-primary">${discountPrice ?? price}</span>
      {discountPrice && (
        <span className="text-sm text-on-surface-variant line-through">${price}</span>
      )}
    </div>
  )
}
