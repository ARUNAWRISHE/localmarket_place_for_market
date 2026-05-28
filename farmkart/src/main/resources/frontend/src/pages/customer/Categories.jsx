const categories = [
  { name: 'Fresh Produce', count: 124 },
  { name: 'Dairy & Eggs', count: 48 },
  { name: 'Bakery', count: 32 },
  { name: 'Pantry', count: 56 },
]

export default function Categories() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-gutter">
      <h1 className="font-literata text-3xl text-primary mb-6">Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.name}
            className="bg-white rounded-2xl p-6 shadow-card border border-outline-variant/10"
          >
            <h3 className="font-semibold text-on-surface mb-2">{cat.name}</h3>
            <p className="text-sm text-on-surface-variant">{cat.count} items</p>
          </div>
        ))}
      </div>
    </div>
  )
}
