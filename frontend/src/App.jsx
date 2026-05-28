import AppRoutes from './routes/AppRoutes.jsx'
import AppProviders from './context/AppProviders.jsx'

function App() {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  )
}

export default App
