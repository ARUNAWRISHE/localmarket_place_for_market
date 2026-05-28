export default function DeliveryStatusBadge({ status }) {
  return (
    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-on-secondary">
      {status}
    </span>
  )
}
