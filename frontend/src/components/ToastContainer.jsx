import { useEffect } from 'react'
import useNotifications from '../hooks/useNotifications.js'

export default function ToastContainer() {
  const { toasts, removeToast } = useNotifications()

  useEffect(() => {
    const timers = toasts.map((toast) =>
      setTimeout(() => removeToast(toast.id), toast.duration || 4000),
    )
    return () => timers.forEach(clearTimeout)
  }, [toasts, removeToast])

  return (
    <div className="fixed top-20 right-4 z-50 space-y-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="bg-white shadow-card border border-outline-variant/20 rounded-xl px-4 py-3 min-w-[240px]"
        >
          <p className="text-sm font-semibold text-on-surface">{toast.title}</p>
          {toast.message && (
            <p className="text-xs text-on-surface-variant">{toast.message}</p>
          )}
        </div>
      ))}
    </div>
  )
}
