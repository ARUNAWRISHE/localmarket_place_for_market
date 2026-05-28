import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import ProductCard from '../../components/ProductCard.jsx'

const featured = [
  {
    id: 1,
    name: 'Organic Strawberries',
    price: '$4.50',
    farm: 'Green Valley Farm',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAGspIMavNkcbU2GNxlIOmpL4_7AssZr96mPl34qahPp9BCHLJaWj0xNcEWCao8EMl2VpKCu6UXfxQKZjWAgSz9saP22do6Ief0Xep5hSH__Zl3OnijBvndSqYJYm9dmB_8Pelj8aMLucs6pvVYmL0_5K-GxAx4ZNgcw3oOInQzRtVw77gbeR5RQWSZ4tpSGwN68s_T03C4H6GlRZu4pT5KtWLKD9IpFn7HIFxq9sEpz9j3Vyx4oGjtR1-kHKmRer7LNGhAjDZmwjk',
  },
  {
    id: 2,
    name: 'Artisan Cheddar',
    price: '$12.00',
    farm: 'Golden Creamery',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCA3fegcelv4QXa7gyan91rs9SrgPlM2gSJFDKP-B_d9uRdzlyjQ_iG2g4j9qFmQOdsrTepDZLqf38bgBU0P9B-CGE1x6HAAPRJUjoVVpRG6zhn0Mw3Qb4vkGGqqEW1-XxE_IwgvRhlxwbXFAuqz3j0gI8hWQk2Ue8dW-danbVYrkJFEF5CEPZkdgi2EUGVLim9-m91GLBDb9jk1W_C0lgw4ZCj6mUS31BXVjcjSp3NUAJWoMDdxKs5w8Yk7-CaOiaIyuEbLQCHvKA',
  },
  {
    id: 3,
    name: 'Superfood Kale',
    price: '$3.95',
    farm: 'Morning Harvest',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9UdMY3eA3xKAYcnBDtysyKK7boMlB67khJ5b6v0YM1ZDdhEnYQBgpYb2jVEptF8RxI7sjHagL6C50Xg18-Z-ebhTFfphPlwBrFrPso7cfsdZG3l8o5S-Eg06haskujPSnqdoS9EPTHIsSQpOZnn7l4IBl9m6VWAA4CPW6zRFu_dZPKF77nwzjYuMjeVFYIAthgJnR4Ep1rWt3_h0blCUzaum6ts2JkX9wqOQkk9UEnGakAQVqGIAgIjC8f-mfm262e7kGGZqEKus',
  },
  {
    id: 4,
    name: 'Sourdough',
    price: '$6.50',
    farm: 'Daily Baked',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCg58Hug3TV9T8w1Iy0gwYKrYMthrT54ehHYV1NA5txqDP8KaWcK22L9A0nhi2qUZnA4BVxXYx4nH3us3PZgWTG2dNyDRSoODXYtbSsKFXd7UDqCQiB-ZabRwUB7CWw-7DBSLDm7qXA5w6jRxyQka98ZWzLQs8GDP4gPHnZAOrrNFXmbb_XS47kHW-7lIjcgB-ZWCglwDbaUim8FtKoGKQu_8XJQmTOKhx3V7-5nW08Dn0258CmD6QngDV1g23zGniecUk7w7IALyM',
  },
]

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-gutter">
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-[32px] overflow-hidden shadow-organic bg-hero-gradient text-white p-10 md:p-16"
      >
        <div className="absolute inset-0 bg-soft-radial opacity-70" />
        <div className="relative z-10 max-w-xl">
          <span className="inline-flex items-center px-4 py-1 rounded-full bg-secondary text-on-secondary text-xs font-semibold tracking-wide mb-6">
            Seasonal Special
          </span>
          <h1 className="font-literata text-4xl md:text-5xl leading-tight mb-6">
            Fresh summer harvest, curated by local farms.
          </h1>
          <p className="text-base md:text-lg opacity-90 mb-8">
            Premium organic produce delivered in under 90 minutes. Sustainably
            sourced, thoughtfully packed.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-xl"
          >
            Shop now
          </Link>
        </div>
      </motion.section>

      <section className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-literata text-2xl text-primary">Flash Sales</h2>
          <Link to="/shop" className="text-sm text-primary font-semibold">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  )
}
