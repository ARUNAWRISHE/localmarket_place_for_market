export default function Input({ className = '', ...props }) {
  return (
    <input
      className={`w-full rounded-lg border border-outline-variant/40 px-4 py-2 text-sm outline-none focus:border-primary ${className}`}
      {...props}
    />
  )
}
