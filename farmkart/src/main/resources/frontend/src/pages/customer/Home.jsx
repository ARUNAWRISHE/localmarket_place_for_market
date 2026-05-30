import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
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
            Tamil Nadu Farms
          </span>
          <h1 className="font-literata text-4xl md:text-5xl leading-tight mb-6">
            Farm Fresh from Tamil Nadu to Your Home.
          </h1>
          <p className="text-base md:text-lg opacity-90 mb-8">
            Discover verified local farmers, seasonal harvests, and dairy from
            across Tamil Nadu, delivered with real-time tracking.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center px-6 py-3 bg-white text-primary font-semibold rounded-xl"
          >
            Explore marketplace
          </Link>
        </div>
      </motion.section>

      <section className="mt-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-literata text-2xl text-primary">Marketplace Updates</h2>
        </div>
        <div className="bg-white rounded-3xl shadow-card p-8 border border-outline-variant/20">
          <p className="text-on-surface-variant">
            No products available yet. Products will appear once sellers publish them.
          </p>
        </div>
      </section>
    </div>
  )
}
