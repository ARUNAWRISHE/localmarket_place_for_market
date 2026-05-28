import RoleRoute from './RoleRoute.jsx'
import { ROLES } from '../constants/roles.js'

export default function AdminRoute({ children }) {
  return <RoleRoute roles={[ROLES.ADMIN]}>{children}</RoleRoute>
}
