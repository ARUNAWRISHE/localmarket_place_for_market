export default function ProfileSettings() {
  return (
    <div className="space-y-6">
      <h1 className="font-literata text-3xl text-primary">Profile Settings</h1>
      <div className="bg-white rounded-3xl shadow-card p-8 space-y-6">
        <div>
          <label className="text-xs text-on-surface-variant">Farm Name</label>
          <input
            className="w-full mt-2 px-4 py-3 rounded-xl border border-outline-variant/40"
            defaultValue="Green Valley Organics"
          />
        </div>
        <div>
          <label className="text-xs text-on-surface-variant">Shop Description</label>
          <textarea
            className="w-full mt-2 px-4 py-3 rounded-xl border border-outline-variant/40"
            rows="3"
            defaultValue="Regenerative farm specializing in heirloom tomatoes and artisan greens."
          />
        </div>
        <div>
          <label className="text-xs text-on-surface-variant">Contact Email</label>
          <input
            className="w-full mt-2 px-4 py-3 rounded-xl border border-outline-variant/40"
            defaultValue="hello@greenvalley.farm"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-xs text-on-surface-variant">GST Number</label>
            <input
              className="w-full mt-2 px-4 py-3 rounded-xl border border-outline-variant/40"
              defaultValue="GSTIN-29ABCDE1234F2Z5"
            />
          </div>
          <div>
            <label className="text-xs text-on-surface-variant">Organic Certification</label>
            <input
              className="w-full mt-2 px-4 py-3 rounded-xl border border-outline-variant/40"
              defaultValue="USDA Organic"
            />
          </div>
        </div>
        <div>
          <label className="text-xs text-on-surface-variant">Verification Status</label>
          <input
            className="w-full mt-2 px-4 py-3 rounded-xl border border-outline-variant/40"
            defaultValue="PENDING"
            readOnly
          />
        </div>
        <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-semibold">
          Save changes
        </button>
      </div>
    </div>
  )
}
