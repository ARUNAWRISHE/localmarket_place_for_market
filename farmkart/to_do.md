# 🚀 Farm2Kart Backend Development To-Do List

**Current Backend Status:** 100%
**Target:** 100% Production-Ready Spring Boot Backend

---

# Phase 1 — Project Setup

## Spring Boot Configuration

### Files

```text
src/main/resources/

application.yml
application-dev.yml
application-prod.yml
```

### Tasks

* [x] Configure PostgreSQL (Supabase)
* [x] Configure JWT
* [x] Configure Swagger/OpenAPI
* [x] Configure CORS
* [x] Configure File Upload
* [x] Configure Environment Variables
* [x] Configure Logging

---

# Phase 2 — Security & Authentication

## Package

```text
security/

JwtAuthenticationFilter.java
JwtService.java
CustomUserDetailsService.java
SecurityConfig.java
AuthenticationEntryPoint.java
```

### Tasks

* [x] JWT Generation
* [x] JWT Validation
* [x] Refresh Token Support
* [x] Password Encryption (BCrypt)
* [x] Role-Based Authorization
* [x] Protected Routes
* [x] Logout Functionality

---

## Auth Module

### Files

```text
auth/

AuthController.java
AuthService.java
AuthServiceImpl.java

dto/auth/

LoginRequest.java
RegisterRequest.java
AuthResponse.java
```

### APIs

```http
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/refresh
```

---

# Phase 3 — User Management

## Files

```text
user/

UserController.java
UserService.java
UserRepository.java

entity/
User.java
UserRole.java
Address.java
```

### APIs

```http
GET    /api/users/profile
PUT    /api/users/profile
POST   /api/users/address
GET    /api/users/address
DELETE /api/users/address/{id}
```

### Tasks

* [x] Profile Management
* [x] Address Management
* [x] Profile Image Support

---

# Phase 4 — Category Module

## Files

```text
category/

CategoryController.java
CategoryService.java
CategoryRepository.java
```

### APIs

```http
GET  /api/categories
GET  /api/categories/{id}
POST /api/categories
PUT  /api/categories/{id}
DELETE /api/categories/{id}
```

### Tasks

* [x] Category CRUD
* [x] Category Tree
* [x] Parent Category Support

---

# Phase 5 — Farm Profile Module

## Files

```text
farm/

FarmProfileController.java
FarmProfileService.java
FarmProfileRepository.java

entity/
FarmProfile.java
FarmImage.java
```

### APIs

```http
POST   /api/farms
PUT    /api/farms/{id}
GET    /api/farms/{id}
DELETE /api/farms/{id}

POST   /api/farms/{id}/images
GET    /api/farms/{id}/images
```

### Tasks

* [x] Farm Creation
* [x] Farm Images
* [x] District Mapping
* [x] Organic Certificate Upload

---

# Phase 6 — Seller Module

## Files

```text
seller/

SellerController.java
SellerService.java
SellerRepository.java
```

### APIs

```http
GET  /api/sellers
GET  /api/sellers/{id}
PUT  /api/sellers/profile
```

### Tasks

* [x] Seller Profile
* [x] Seller Verification Status
* [x] Seller Rating Calculation
* [x] Seller Type Support

---

# Phase 7 — Product Module

## Files

```text
product/

ProductController.java
ProductService.java
ProductRepository.java

entity/
Product.java
ProductImage.java
```

### APIs

```http
POST   /api/products
PUT    /api/products/{id}
DELETE /api/products/{id}

GET    /api/products
GET    /api/products/{id}

GET    /api/products/search
GET    /api/products/category/{id}
```

### Tasks

* [x] Product CRUD
* [x] Product Search
* [x] Product Filters
* [x] Pagination
* [x] Sorting
* [x] Image Upload

### Filters

* [x] Category
* [x] District
* [x] Price
* [x] Organic Certified
* [x] Rating
* [x] Seller Type

---

# Phase 8 — Cart Module

## Files

```text
cart/

CartController.java
CartService.java
CartRepository.java
```

### APIs

```http
GET    /api/cart
POST   /api/cart/items
PUT    /api/cart/items/{id}
DELETE /api/cart/items/{id}
```

### Tasks

* [x] Add Product
* [x] Remove Product
* [x] Update Quantity

---

# Phase 9 — Order Module

## Files

```text
order/

OrderController.java
OrderService.java
OrderRepository.java
```

### APIs

```http
POST   /api/orders

GET    /api/orders
GET    /api/orders/{id}

PUT    /api/orders/{id}/cancel
GET    /api/orders/current
GET    /api/orders/history
```

### Status Flow

```text
PENDING
CONFIRMED
PACKED
SHIPPED
OUT_FOR_DELIVERY
DELIVERED
CANCELLED
```

### Tasks

* [x] Order Creation
* [x] Invoice Generation
* [x] Order Tracking
* [x] Cancellation Logic

---

# Phase 10 — Payment Module

## Files

```text
payment/

PaymentController.java
PaymentService.java
PaymentRepository.java
```

### APIs

```http
POST /api/payments/create
POST /api/payments/verify
GET  /api/payments/history
```

### Tasks

* [x] COD Support
* [x] UPI Support
* [x] Payment Verification
* [x] Payment History

---

# Phase 11 — Delivery Module

## Files

```text
delivery/

DeliveryController.java
DeliveryService.java
DeliveryRepository.java
```

### APIs

```http
GET  /api/delivery/assigned
PUT  /api/delivery/status

POST /api/delivery/location
POST /api/delivery/proof
```

### Tasks

* [x] Delivery Assignment
* [x] Status Updates
* [x] GPS Tracking
* [x] Delivery Proof Upload

### Status Flow

```text
ASSIGNED
PICKED_UP
IN_TRANSIT
OUT_FOR_DELIVERY
DELIVERED
```

---

# Phase 12 — Review System

## Files

```text
review/

ReviewController.java
ReviewService.java
```

### APIs

```http
POST /api/reviews/product
POST /api/reviews/seller
POST /api/reviews/delivery

GET  /api/reviews/product/{id}
```

### Tasks

* [x] Product Reviews
* [x] Seller Reviews
* [x] Delivery Reviews
* [x] Rating Aggregation

---

# Phase 13 — Wishlist

## Files

```text
wishlist/

WishlistController.java
WishlistService.java
```

### APIs

```http
POST   /api/wishlist
DELETE /api/wishlist/{id}
GET    /api/wishlist
```

---

# Phase 14 — Notifications

## Files

```text
notification/

NotificationController.java
NotificationService.java
```

### APIs

```http
GET /api/notifications
PUT /api/notifications/{id}/read
```

### Tasks

* [x] Order Notifications
* [x] Delivery Notifications
* [x] Refund Notifications

---

# Phase 15 — Support System

## Files

```text
support/

SupportController.java
SupportService.java
SupportRepository.java
```

### APIs

```http
POST /api/support
GET  /api/support
GET  /api/support/{id}
```

### Tasks

* [x] Ticket Creation
* [x] Ticket Resolution
* [x] Ticket Status Updates

---

# Phase 16 — Refund System

## Files

```text
refund/

RefundController.java
RefundService.java
```

### APIs

```http
POST /api/refunds
GET  /api/refunds
PUT  /api/refunds/{id}
```

### Tasks

* [x] Refund Request
* [x] Refund Approval
* [x] Refund Rejection

---

# Phase 17 — Admin Module

## Files

```text
admin/

AdminController.java
AdminService.java
```

### APIs

```http
GET /api/admin/users
GET /api/admin/sellers

PUT /api/admin/sellers/{id}/verify
PUT /api/admin/sellers/{id}/reject

GET /api/admin/refunds
GET /api/admin/support
```

### Tasks

* [x] Seller Verification
* [x] Product Moderation
* [x] User Management
* [x] Analytics Dashboard

---

# Phase 18 — DTO Layer

## Files

```text
dto/

auth/
user/
product/
seller/
farm/
order/
payment/
delivery/
review/
refund/
support/
```

### Tasks

* [x] Request DTOs
* [x] Response DTOs
* [x] Validation

---

# Phase 19 — Exception Handling

## Files

```text
exception/

GlobalExceptionHandler.java

ResourceNotFoundException.java
UnauthorizedException.java
BadRequestException.java
```

### Tasks

* [x] Standard Error Response
* [x] Validation Errors
* [x] JWT Errors

---

# Phase 20 — Testing

## Unit Tests

* [x] Services
* [x] Security
* [x] Repositories

## Integration Tests

* [x] Auth APIs
* [x] Product APIs
* [x] Order APIs
* [x] Payment APIs

---

# Phase 21 — Documentation

## Swagger

* [x] Document All APIs
* [x] JWT Authorization Support

Access:

```text
/swagger-ui/index.html
```

---

# 🎯 Definition of Done

```text
Database Integration      ✅
JWT Security             ✅
Authentication           ✅
Farm Profiles            ✅
Seller Management        ✅
Product Management       ✅
Cart                     ✅
Orders                   ✅
Payments                 ✅
Delivery Tracking        ✅
Reviews                  ✅
Wishlist                 ✅
Notifications            ✅
Support                  ✅
Refunds                  ✅
Admin Portal             ✅
Swagger                  ✅
Testing                  ✅
Production Build         ✅
```

## Estimated Backend Completion
```text
Current: 100%
After completing this list: 100% (Achieved)
```

At that point, your Spring Boot backend will be fully aligned with your Farm2Kart database and React frontend.
