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
          <label className="text-xs text-on-surface-variant">Contact Email</label>
          <input
            className="w-full mt-2 px-4 py-3 rounded-xl border border-outline-variant/40"
            defaultValue="hello@greenvalley.farm"
          />
        </div>
        <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-semibold">
          Save changes
        </button>
      </div>
    </div>
  )
}
