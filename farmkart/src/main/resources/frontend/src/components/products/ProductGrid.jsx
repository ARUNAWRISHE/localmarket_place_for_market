import ProductCard from './ProductCard.jsx'

const demoProducts = [
  {
    id: 'p1',
    name: 'Farm Fresh Tomatoes',
    price: '₹42/kg',
    farm: 'Kanchipuram Farm',
    image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'p2',
    name: 'Organic Potatoes',
    price: '₹36/kg',
    farm: 'Coimbatore Fields',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80',
  },
]

export default function ProductGrid({ products = demoProducts, onAdd }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={onAdd} />
      ))}
    </div>
  )
}
