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
        <div className="flex-1">
          <h2 className="text-2xl font-semibold">Julian Henderson</h2>
          <p className="text-on-surface-variant">julian.h@organicmarket.com</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-4 rounded-xl">
              <p className="text-xs text-on-surface-variant">Role</p>
              <p className="font-semibold">CUSTOMER</p>
            </div>
            <div className="bg-surface-container-low p-4 rounded-xl">
              <p className="text-xs text-on-surface-variant">Status</p>
              <p className="font-semibold">ACTIVE</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-3xl shadow-card p-6">
          <h3 className="font-semibold mb-4">Personal Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-on-surface-variant">Full name</label>
              <input
                className="w-full mt-2 px-4 py-3 rounded-xl border border-outline-variant/40"
                defaultValue="Julian Henderson"
              />
            </div>
            <div>
              <label className="text-xs text-on-surface-variant">Email</label>
              <input
                className="w-full mt-2 px-4 py-3 rounded-xl border border-outline-variant/40"
                defaultValue="julian.h@organicmarket.com"
              />
            </div>
            <div>
              <label className="text-xs text-on-surface-variant">Phone</label>
              <input
                className="w-full mt-2 px-4 py-3 rounded-xl border border-outline-variant/40"
                defaultValue="+91 98100 11223"
              />
            </div>
            <div>
              <label className="text-xs text-on-surface-variant">Profile image URL</label>
              <input
                className="w-full mt-2 px-4 py-3 rounded-xl border border-outline-variant/40"
                defaultValue="https://example.com/profile.jpg"
              />
            </div>
          </div>
        </div>
        <div className="bg-white rounded-3xl shadow-card p-6">
          <h3 className="font-semibold mb-4">Default Address</h3>
          <div className="space-y-4">
            <div>
              <label className="text-xs text-on-surface-variant">Full address</label>
              <input
                className="w-full mt-2 px-4 py-3 rounded-xl border border-outline-variant/40"
                defaultValue="4521 Organic Way"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-on-surface-variant">City</label>
                <input
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-outline-variant/40"
                  defaultValue="Green Valley"
                />
              </div>
              <div>
                <label className="text-xs text-on-surface-variant">State</label>
                <input
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-outline-variant/40"
                  defaultValue="CA"
                />
              </div>
              <div>
                <label className="text-xs text-on-surface-variant">Country</label>
                <input
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-outline-variant/40"
                  defaultValue="India"
                />
              </div>
              <div>
                <label className="text-xs text-on-surface-variant">Pincode</label>
                <input
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-outline-variant/40"
                  defaultValue="411001"
                />
              </div>
              <div>
                <label className="text-xs text-on-surface-variant">Latitude</label>
                <input
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-outline-variant/40"
                  defaultValue="18.5204"
                />
              </div>
              <div>
                <label className="text-xs text-on-surface-variant">Longitude</label>
                <input
                  className="w-full mt-2 px-4 py-3 rounded-xl border border-outline-variant/40"
                  defaultValue="73.8567"
                />
              </div>
            </div>
            <label className="inline-flex items-center gap-2 text-sm text-on-surface-variant">
              <input type="checkbox" defaultChecked className="accent-primary" />
              Default address
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
