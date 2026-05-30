import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="hidden lg:flex flex-col justify-between p-12 bg-primary text-on-primary">
        <div>
          <p className="text-sm uppercase tracking-[0.3em]">Farm2Kart</p>
          <h1 className="font-literata text-4xl mt-6">
            Farm Fresh from Tamil Nadu to Your Home.
          </h1>
        </div>
        <p className="text-sm opacity-80">Local farmers. Trusted deliveries. Real-time updates.</p>
      </div>
      <div className="flex items-center justify-center p-6 bg-surface">
        <Outlet />
      </div>
    </div>
  )
}
