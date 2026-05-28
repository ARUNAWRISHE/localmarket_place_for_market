export default function Pagination({ page, totalPages, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <button
        className="px-3 py-1 rounded-lg border border-outline-variant/40"
        disabled={page <= 1}
        onClick={() => onChange?.(page - 1)}
      >
        Prev
      </button>
      <span className="text-sm text-on-surface-variant">
        Page {page} of {totalPages}
      </span>
      <button
        className="px-3 py-1 rounded-lg border border-outline-variant/40"
        disabled={page >= totalPages}
        onClick={() => onChange?.(page + 1)}
      >
        Next
      </button>
    </div>
  )
}
