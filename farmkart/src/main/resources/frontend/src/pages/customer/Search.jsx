import { useState } from 'react'
import SearchBar from '../../components/SearchBar.jsx'

export default function Search() {
  const [query, setQuery] = useState('')

  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-gutter">
      <h1 className="font-literata text-3xl text-primary mb-6">Search</h1>
      <SearchBar value={query} onChange={setQuery} placeholder="Search products" />
      <div className="mt-6 bg-white rounded-3xl shadow-card p-8 border border-outline-variant/20">
        <p className="text-on-surface-variant">
          No products available yet. Products will appear once sellers publish them.
        </p>
      </div>
    </div>
  )
}
