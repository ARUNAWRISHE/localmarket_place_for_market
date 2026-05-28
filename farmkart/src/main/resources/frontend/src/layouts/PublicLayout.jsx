import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import BottomNav from '../components/BottomNav.jsx'

export default function PublicLayout() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main className="pt-24 pb-24">
        <Outlet />
      </main>
      <Footer />
      <BottomNav />
    </div>
  )
}
