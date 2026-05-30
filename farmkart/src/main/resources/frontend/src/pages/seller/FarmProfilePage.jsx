import Card from '../../components/ui/Card.jsx'
import useNotifications from '../../hooks/useNotifications.js'

export default function FarmProfilePage() {
  const { addToast } = useNotifications()

  const handleSave = (event) => {
    event.preventDefault()
    addToast({ title: 'Farm profile saved', message: 'Farm profile details updated.' })
  }

  return (
    <div className="max-w-[1100px] mx-auto space-y-8">
      <section>
        <h1 className="font-literata text-3xl text-primary mb-2">Farm Profile</h1>
        <p className="text-on-surface-variant">
          Manage the farm identity shown on products and seller pages.
        </p>
      </section>

      <Card className="space-y-4">
        <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSave}>
          <input className="w-full px-4 py-3 rounded-xl border border-outline-variant/40" placeholder="Farm name" required />
          <input className="w-full px-4 py-3 rounded-xl border border-outline-variant/40" placeholder="Farmer name" />
          <input className="w-full px-4 py-3 rounded-xl border border-outline-variant/40" placeholder="District" />
          <input className="w-full px-4 py-3 rounded-xl border border-outline-variant/40" placeholder="Village" />
          <input className="w-full px-4 py-3 rounded-xl border border-outline-variant/40" placeholder="Established year" type="number" />
          <input className="w-full px-4 py-3 rounded-xl border border-outline-variant/40" placeholder="Organic certificate no" />
          <textarea className="md:col-span-2 w-full min-h-32 px-4 py-3 rounded-xl border border-outline-variant/40" placeholder="Farm description" />
          <button className="md:col-span-2 bg-primary text-on-primary font-semibold px-5 py-3 rounded-xl">
            Save farm profile
          </button>
        </form>
      </Card>
    </div>
  )
}
