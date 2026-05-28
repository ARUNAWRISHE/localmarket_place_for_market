import RoleRoute from './RoleRoute.jsx'
import { ROLES } from '../constants/roles.js'

export default function DeliveryRoute({ children }) {
  return <RoleRoute roles={[ROLES.DELIVERY, ROLES.ADMIN]}>{children}</RoleRoute>
}
