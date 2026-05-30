import { X } from 'lucide-react'

export default function DeliveryProofModal({ open = false, onClose }) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-organic">
        <div className="flex items-center justify-between gap-4 mb-4">
          <h2 className="font-literata text-2xl text-primary">Delivery proof</h2>
          <button onClick={onClose} className="rounded-full p-2 hover:bg-surface-container-low">
            <X size={18} />
          </button>
        </div>
        <div className="space-y-4">
          <input className="w-full px-4 py-3 rounded-xl border border-outline-variant/40" placeholder="Photo URL" />
          <input className="w-full px-4 py-3 rounded-xl border border-outline-variant/40" placeholder="Signature URL" />
          <textarea className="w-full min-h-28 px-4 py-3 rounded-xl border border-outline-variant/40" placeholder="Notes" />
          <button className="w-full bg-primary text-on-primary font-semibold px-5 py-3 rounded-xl">
            Save proof
          </button>
        </div>
      </div>
    </div>
  )
}
