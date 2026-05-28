export default function ETAWidget({ minutes }) {
  return (
    <div className="rounded-lg bg-surface-container px-4 py-3">
      <p className="text-xs text-on-surface-variant">ETA</p>
      <p className="font-semibold text-primary">{minutes} mins</p>
    </div>
  )
}
