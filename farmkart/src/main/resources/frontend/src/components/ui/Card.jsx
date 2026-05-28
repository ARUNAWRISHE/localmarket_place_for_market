export default function Card({ className = '', ...props }) {
  return (
    <section
      className={`rounded-lg border border-outline-variant/30 bg-white p-4 shadow-card ${className}`}
      {...props}
    />
  )
}
