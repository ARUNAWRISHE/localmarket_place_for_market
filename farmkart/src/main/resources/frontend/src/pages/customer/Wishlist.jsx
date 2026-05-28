const items = ['Heritage Sourdough', 'Wildflower Honey', 'Fresh Eggs']

export default function Wishlist() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-gutter">
      <h1 className="font-literata text-3xl text-primary mb-6">Wishlist</h1>
      <div className="bg-white rounded-2xl shadow-card p-6">
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="text-on-surface-variant">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
