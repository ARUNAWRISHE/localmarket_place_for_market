export default function Profile() {
  return (
    <div className="max-w-[1200px] mx-auto px-4 md:px-gutter">
      <h1 className="font-literata text-3xl text-primary mb-6">Profile</h1>
      <div className="bg-white rounded-3xl shadow-card p-8 flex flex-col lg:flex-row gap-8">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwVpt3eBdXV7ntHOCdmUcaX8m-urtyie4MwMIV-Hij1kJCZQBJxA6K9BTYGinPSDCyDEChUQvueipQz0QBjzRN5_TBZiTiBbEV0CZBGbE8iH3DdIrkadGw5EiSTnwvIIw3WHB9B7lEo9iMmjmWMvJqUyS7ow73kyI7w_mRZiVQJx5kq5uRbOCgg0C9quYNhSINqpBjiGJzdtat3BKCcsrDCmyZDciwUsr1f_Q8CC6alkDlNfJBuQtv12SIfBhtlhx7-Cm2I5_-vh4"
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-card"
        />
        <div>
          <h2 className="text-2xl font-semibold">Julian Henderson</h2>
          <p className="text-on-surface-variant">julian.h@organicmarket.com</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-4 rounded-xl">
              <p className="text-xs text-on-surface-variant">Membership</p>
              <p className="font-semibold">Premium Organic</p>
            </div>
            <div className="bg-surface-container-low p-4 rounded-xl">
              <p className="text-xs text-on-surface-variant">Delivery Address</p>
              <p className="font-semibold">4521 Organic Way</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
