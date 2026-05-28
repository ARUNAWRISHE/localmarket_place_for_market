export default function Inventory() {
  return (
    <div className="space-y-6">
      <h1 className="font-literata text-3xl text-primary">Inventory</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-error/10 text-error p-6 rounded-2xl">
          <h3 className="font-semibold">8 Products Unavailable</h3>
          <p className="text-sm">Immediate restock needed for Tomatoes & Spinach.</p>
        </div>
        <div className="bg-secondary/10 text-on-surface p-6 rounded-2xl">
          <h3 className="font-semibold">Expiring Soon</h3>
          <p className="text-sm">15 items expiring in less than 48 hours.</p>
        </div>
      </div>
    </div>
  )
}
