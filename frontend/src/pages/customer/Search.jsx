import { useState } from 'react'
import ProductCard from '../../components/ProductCard.jsx'
import SearchBar from '../../components/SearchBar.jsx'

const items = [
  {
    id: 21,
    name: 'Wildflower Honey',
    price: '$12.00',
    farm: 'Apiary Collective',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA4icf02vxSrFTVpm6ywDVPXbv5e6V2rXLbd_hehFKxgBDXU0Z5ZmBhKRUxnXJz5utY0WXpUFQOM9RVtseKaLjoValkage8y3E0GnoJ4-HOIYQtLwYv-hFLuPT8_W9Xe848ZvDvnRl6H4iMyR_AqR7sks7a1vOgGZjcvldbIJBwY4__zc-X9xzqzDYP1aIizqxbWq1IZi5MOxcb3DTd2o_ZUidpTvHnVR4zxHdcGs2PtfcqN6QNkpgeXButfV8KIV259cqprXk_Y-I',
  },
]

export default function Search() {
  const [query, setQuery] = useState('')

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-gutter">
      <h1 className="font-literata text-3xl text-primary mb-6">Search</h1>
      <SearchBar value={query} onChange={setQuery} placeholder="Search products" />
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
