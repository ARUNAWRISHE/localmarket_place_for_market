import { useState } from 'react'
import ProductCard from '../../components/ProductCard.jsx'
import Filters from '../../components/Filters.jsx'

const products = [
  {
    id: 11,
    name: 'Heirloom Purple Carrots',
    price: '$4.50',
    farm: 'Willowbrook Farm',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA_d3mqALsskRVNYGmfz2mJyIQAfE94ZgpyqSsXRfoygdWFi1Un41ZhDXkcsaOwgwtSKvrsdnqKSaO1q8oqHU4Lp_fMn36AfRavwylr4k-i3mLR6bWcYfMuJNgTLEHZ62ilZfBgTWCM_11hpDYI7cYsPRg6JuV5VF56Qb3U5LQEPRtUaj71ilKkUcPTdDT7-GnWBQPI2YW2y7CPEeu4_QZVS05ZH0Fw1u6OggbDXTyZJ9zcCU7fnnj0EZSchWhqsDO2s_JczVpdLmU',
  },
  {
    id: 12,
    name: 'Organic Hass Avocado',
    price: '$2.20',
    farm: 'California Local',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDMDYwFJTDENJXq452hZ3lPDsc2HtNRBKuy9oPMjV-P9J6fDc75jhF3R7Gt_ktU95NRnp9ttbhntDCJ8CgoffhrvYRtjryBLeakwi7wmZ76kzrtMWr7BPtcpMUQBQXSD39pSwPCSY1cBr2Qq70ihqqOKV2K3I9F3cs-xjUBIdvdHd-A81891-0E0ELEguQLVXJpm9ICAFVetwkFLCy9BwOjz9_eHR4xJYPzgTv4yvD6H7zaAGPazGHPSG1shzhJQThTHgYF72Ci5pA',
  },
  {
    id: 13,
    name: 'Heritage Sourdough',
    price: '$7.00',
    farm: 'Daily Baked',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAq3UtnsschLHP4D9VoBIe9uSbdA6MgV0uRFrGOPFkJQtXBNEKsNEllhIn1qY6nUsA6-wLx3M85a4RiINVYn1XkrGjzY1P0betKsCsnzpFAqcy2T65Vj0XAKBMNpCsbC59zBsEfi022FYosgIrl_dMz-SB2G-SyCxNzoU171b9a9P_TXsGXl9R3XmUXuWTkbcmt781VjxhVfY7hU9W_xAHQBhgu-g81M9AdsEv0dsQOeaWqYvJh9F23NtXcDs-EBS-U6XiZGkyP6wo',
  },
]

export default function Shop() {
  const [filter, setFilter] = useState('All')

  return (
    <div className="max-w-[1440px] mx-auto px-4 md:px-margin-desktop">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <h1 className="font-literata text-3xl text-primary">All Harvests</h1>
          <p className="text-sm text-on-surface-variant">
            Curated from verified partner farms.
          </p>
        </div>
        <Filters
          items={['All', 'Vegetables', 'Fruits', 'Pantry']}
          selected={filter}
          onSelect={setFilter}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
