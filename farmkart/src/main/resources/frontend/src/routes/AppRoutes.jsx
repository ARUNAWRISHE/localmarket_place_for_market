import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute.jsx'
import RoleRoute from './RoleRoute.jsx'
import { ROLES } from '../constants/roles.js'
import PublicLayout from '../layouts/PublicLayout.jsx'
import AuthLayout from '../layouts/AuthLayout.jsx'
import SellerLayout from '../layouts/SellerLayout.jsx'
import DeliveryLayout from '../layouts/DeliveryLayout.jsx'
import AdminLayout from '../layouts/AdminLayout.jsx'
import ToastContainer from '../components/ToastContainer.jsx'

import Login from '../pages/auth/Login.jsx'
import Register from '../pages/auth/Register.jsx'
import ForgotPassword from '../pages/auth/ForgotPassword.jsx'
import CustomerHome from '../pages/customer/Home.jsx'
import Shop from '../pages/customer/Shop.jsx'
import Categories from '../pages/customer/Categories.jsx'
import ProductDetails from '../pages/customer/ProductDetails.jsx'
import Search from '../pages/customer/Search.jsx'
import Cart from '../pages/customer/Cart.jsx'
import Checkout from '../pages/customer/Checkout.jsx'
import Orders from '../pages/customer/Orders.jsx'
import Profile from '../pages/customer/Profile.jsx'
import Wishlist from '../pages/customer/Wishlist.jsx'
import DeliveryTracking from '../pages/customer/DeliveryTracking.jsx'
import CustomerSupport from '../pages/customer/SupportPage.jsx'

import SellerDashboard from '../pages/seller/Dashboard.jsx'
import SellerProducts from '../pages/seller/ProductManagement.jsx'
import SellerInventory from '../pages/seller/Inventory.jsx'
import SellerOrders from '../pages/seller/Orders.jsx'
import SellerRevenue from '../pages/seller/Revenue.jsx'
import SellerMessages from '../pages/seller/Messages.jsx'
import SellerProfileSettings from '../pages/seller/ProfileSettings.jsx'
import SellerFarmProfile from '../pages/seller/FarmProfilePage.jsx'
import SellerAnalytics from '../pages/seller/AnalyticsPage.jsx'

import DeliveryDashboard from '../pages/delivery/DashboardPage.jsx'
import DeliveryActive from '../pages/delivery/ActiveDeliveries.jsx'
import DeliveryRouteDetails from '../pages/delivery/RouteDetails.jsx'
import DeliveryEarnings from '../pages/delivery/Earnings.jsx'
import DeliveryStatus from '../pages/delivery/DeliveryStatus.jsx'
import DeliveryAvailability from '../pages/delivery/Availability.jsx'
import DeliveryNotifications from '../pages/delivery/Notifications.jsx'
import DeliveryHistory from '../pages/delivery/HistoryPage.jsx'

import AdminDashboard from '../pages/admin/DashboardPage.jsx'
import AdminUsers from '../pages/admin/UserManagement.jsx'
import AdminSellers from '../pages/admin/SellerVerification.jsx'
import AdminProducts from '../pages/admin/ProductMonitoring.jsx'
import AdminOrders from '../pages/admin/OrderMonitoring.jsx'
import AdminSupport from '../pages/admin/SupportPage.jsx'
import AdminRefunds from '../pages/admin/RefundsPage.jsx'

import NotFound from '../pages/shared/NotFound.jsx'
import Unauthorized from '../pages/shared/Unauthorized.jsx'

export default function AppRoutes() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<CustomerHome />} />
          <Route path="shop" element={<Shop />} />
          <Route path="categories" element={<Categories />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="search" element={<Search />} />
          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />
          <Route
            path="orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="wishlist"
            element={
              <ProtectedRoute>
                <Wishlist />
              </ProtectedRoute>
            }
          />
          <Route
            path="tracking"
            element={
              <ProtectedRoute>
                <DeliveryTracking />
              </ProtectedRoute>
            }
          />
          <Route
            path="support"
            element={
              <ProtectedRoute>
                <CustomerSupport />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="auth/login" element={<Login />} />
          <Route path="auth/register" element={<Register />} />
          <Route path="auth/forgot-password" element={<ForgotPassword />} />
        </Route>

        <Route
          path="seller/*"
          element={
            <ProtectedRoute>
              <RoleRoute roles={[ROLES.SELLER, ROLES.ADMIN]}>
                <SellerLayout />
              </RoleRoute>
            </ProtectedRoute>
          }
        >
          <Route index element={<SellerDashboard />} />
          <Route path="products" element={<SellerProducts />} />
          <Route path="inventory" element={<SellerInventory />} />
          <Route path="orders" element={<SellerOrders />} />
          <Route path="revenue" element={<SellerRevenue />} />
          <Route path="messages" element={<SellerMessages />} />
          <Route path="profile" element={<SellerProfileSettings />} />
          <Route path="farm-profile" element={<SellerFarmProfile />} />
          <Route path="analytics" element={<SellerAnalytics />} />
        </Route>

        <Route
          path="delivery/*"
          element={
            <ProtectedRoute>
              <RoleRoute roles={[ROLES.DELIVERY, ROLES.ADMIN]}>
                <DeliveryLayout />
              </RoleRoute>
            </ProtectedRoute>
          }
        >
          <Route index element={<DeliveryDashboard />} />
          <Route path="active" element={<DeliveryActive />} />
          <Route path="routes" element={<DeliveryRouteDetails />} />
          <Route path="earnings" element={<DeliveryEarnings />} />
          <Route path="status" element={<DeliveryStatus />} />
          <Route path="availability" element={<DeliveryAvailability />} />
          <Route path="notifications" element={<DeliveryNotifications />} />
          <Route path="history" element={<DeliveryHistory />} />
        </Route>

        <Route
          path="admin/*"
          element={
            <ProtectedRoute>
              <RoleRoute roles={[ROLES.ADMIN]}>
                <AdminLayout />
              </RoleRoute>
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="sellers" element={<AdminSellers />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="support" element={<AdminSupport />} />
          <Route path="refunds" element={<AdminRefunds />} />
        </Route>

        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </>
  )
}
