import { useState } from 'react'
import Filters from '../../components/Filters.jsx'

export default function Shop() {
  const [filter, setFilter] = useState('All')

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-margin-desktop">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="font-literata text-3xl text-primary">Tamil Nadu Marketplace</h1>
          <p className="text-sm text-on-surface-variant">
            Browse listings from verified local farmers and vendors.
          </p>
        </div>
        <Filters
          items={['All', 'Vegetables', 'Fruits', 'Pulses & Grains', 'Dairy Products', 'Other']}
          selected={filter}
          onSelect={setFilter}
        />
      </div>
      <div className="bg-white rounded-3xl shadow-card p-8 border border-outline-variant/20">
        <p className="text-on-surface-variant">
          No products available yet. Products will appear once sellers publish them.
        </p>
      </div>
    </div>
  )
}
