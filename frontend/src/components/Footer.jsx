export default function Footer() {
  return (
    <footer className="mt-16 bg-surface-container-low border-t border-outline-variant/20">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-margin-desktop py-12">
        <div>
          <h3 className="font-literata text-lg text-primary mb-3">GreenGrocer</h3>
          <p className="text-sm text-on-surface-variant">
            Farm-fresh produce, curated for conscious kitchens.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-on-surface-variant">
            <li>About</li>
            <li>Careers</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-on-surface-variant">
            <li>Help Center</li>
            <li>Shipping</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Get the app</h4>
          <button className="px-4 py-2 bg-black text-white rounded-xl text-sm">App Store</button>
        </div>
      </div>
      <div className="text-center text-xs text-on-surface-variant py-4 border-t border-outline-variant/20">
        GreenGrocer Marketplace © 2026
      </div>
    </footer>
  )
}
