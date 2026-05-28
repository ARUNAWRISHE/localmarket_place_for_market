export default function Modal({ title, description, open, onClose, children }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-glass max-w-lg w-full p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            {description && (
              <p className="text-sm text-on-surface-variant">{description}</p>
            )}
          </div>
          <button onClick={onClose} className="text-on-surface-variant">
            Close
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}
