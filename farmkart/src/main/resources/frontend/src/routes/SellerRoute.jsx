import RoleRoute from './RoleRoute.jsx'
import { ROLES } from '../constants/roles.js'

export default function SellerRoute({ children }) {
  return <RoleRoute roles={[ROLES.SELLER, ROLES.ADMIN]}>{children}</RoleRoute>
}
