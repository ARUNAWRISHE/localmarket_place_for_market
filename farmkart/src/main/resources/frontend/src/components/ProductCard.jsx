import { ShoppingBasket } from 'lucide-react'

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-organic transition-transform hover:-translate-y-1">
      <div className="aspect-square bg-surface-container flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-on-surface">{product.name}</h3>
          <span className="text-primary font-semibold">{product.price}</span>
        </div>
        <p className="text-sm text-on-surface-variant mb-4">{product.farm}</p>
        <button
          onClick={() => onAdd?.(product)}
          className="w-full bg-secondary text-on-secondary font-semibold py-2 rounded-xl flex items-center justify-center gap-2"
        >
          <ShoppingBasket size={16} /> Add to cart
        </button>
      </div>
    </div>
  )
}
