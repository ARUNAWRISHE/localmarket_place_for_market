import AppRoutes from '../routes/AppRoutes.jsx'
import AppProviders from '../context/AppProviders.jsx'

export default function AppShell() {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  )
}
