export default function Footer() {
  return (
    <footer className="mt-16 bg-surface-container-low border-t border-outline-variant/20">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 px-4 md:px-margin-desktop py-12">
        <div>
          <h3 className="font-literata text-2xl text-primary mb-3">Farm2Kart</h3>
          <p className="text-sm text-on-surface-variant">
            Farm Fresh from Tamil Nadu to Your Home
          </p>
          <div className="mt-6">
            <p className="text-xs uppercase tracking-[0.2em] text-on-surface-variant">
              Created By
            </p>
            <p className="font-semibold text-on-surface">Arunaw Rishe M</p>
            <a
              href="mailto:arunawrishe@gmail.com"
              className="text-sm text-primary hover:underline"
            >
              arunawrishe@gmail.com
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-4">Features</h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-on-surface-variant">
            <li>Organic Marketplace</li>
            <li>Local Farmers</li>
            <li>Real-Time Delivery Tracking</li>
            <li>Multi-Vendor Platform</li>
            <li>Secure Ordering</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-on-surface-variant py-4 border-t border-outline-variant/20">
        © Farm2Kart
      </div>
    </footer>
  )
}
