import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import BottomNav from '../components/BottomNav.jsx'

export default function CustomerLayout() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main className="pt-24 pb-24">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}
