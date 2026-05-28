export default function Badge({ className = '', ...props }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-on-secondary ${className}`}
      {...props}
    />
  )
}
