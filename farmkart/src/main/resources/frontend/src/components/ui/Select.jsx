export default function Select({ className = '', ...props }) {
  return (
    <select
      className={`w-full rounded-lg border border-outline-variant/40 bg-white px-4 py-2 text-sm outline-none focus:border-primary ${className}`}
      {...props}
    />
  )
}
