# MASTER DEVELOPMENT PROMPT – FARM2KART

You are a Senior Full-Stack Software Architect, Product Architect, UI/UX Designer, Database Architect, Spring Boot Architect, and React Architect.

Your task is to build a production-ready application called **Farm2Kart**.

Do not create demo-level code.

Generate enterprise-grade code, architecture, documentation, APIs, database design, reusable components, services, and business logic.

---

# PROJECT INFORMATION

Project Name:
Farm2Kart

Tagline:
Farm Fresh from Tamil Nadu to Your Home

Project Type:
Multi-Vendor Organic Marketplace Platform

Region:
Tamil Nadu Only

Currency:
Indian Rupee (₹)

Architecture:

Frontend:

* React
* Vite
* Tailwind CSS
* React Router DOM
* Redux Toolkit
* Axios
* Framer Motion

Backend:

* Spring Boot 3
* Spring Security
* JWT Authentication
* Spring Data JPA
* Swagger/OpenAPI
* Maven

Database:

* Supabase PostgreSQL

---

# BUSINESS OBJECTIVE

Farm2Kart connects:

* Farmers
* Dairy Producers
* FPOs
* Cooperative Societies
* Organic Stores

with

* Customers

through

* Seller Portal
* Customer Marketplace
* Delivery Partner Portal
* Admin Portal

The platform operates exclusively within Tamil Nadu.

---

# USER ROLES

Implement complete role-based access control.

Roles:

CUSTOMER
SELLER
DELIVERY
ADMIN

All routes, APIs, pages, and permissions must be role-protected.

---

# PRODUCT CATEGORIES

Create categories exactly as follows.

## Vegetables

### Leafy Vegetables

* Spinach
* Moringa Leaves
* Coriander
* Mint

### Root Vegetables

* Carrot
* Beetroot
* Radish
* Sweet Potato

### Common Vegetables

* Tomato
* Onion
* Potato
* Brinjal
* Lady Finger
* Cabbage
* Cauliflower

### Native Tamil Nadu Vegetables

* Drumstick
* Snake Gourd
* Ridge Gourd
* Bitter Gourd
* Cluster Beans

---

## Fruits

### Local Fruits

* Banana
* Mango
* Guava
* Papaya
* Sapota

### Seasonal Fruits

* Watermelon
* Muskmelon
* Jackfruit

### Premium Fruits

* Apple
* Orange
* Grapes
* Pomegranate

---

## Pulses & Grains

### Pulses

* Toor Dal
* Urad Dal
* Moong Dal
* Chana Dal
* Horse Gram

### Grains

* Rice
* Traditional Rice Varieties

### Millets

* Ragi
* Kambu
* Thinai
* Varagu
* Samai

---

## Dairy Products

### Fresh Dairy

* Milk
* Curd
* Buttermilk

### Processed Dairy

* Paneer
* Butter
* Ghee

### Farm Fresh

* Cow Milk
* A2 Milk
* Organic Ghee

---

## Other

Custom seller-approved products.

---

# PRODUCT MODEL REQUIREMENTS

Every product must contain:

* Product Name
* Category
* Subcategory
* Description
* Images
* Seller
* Farm Name
* Farmer Name
* District
* Village
* Harvest Date
* Organic Certification Status
* Unit Type
* Stock Quantity
* Price
* Discount Price
* Rating
* Reviews

Supported Units:

* kg
* g
* litre
* ml
* bunch
* piece
* pack

Examples:

₹40/kg
₹65/litre
₹15/bunch

---

# CUSTOMER MODULE

Generate:

HomePage
ShopPage
CategoryPage
ProductDetailsPage
SearchPage
CartPage
CheckoutPage
OrdersPage
WishlistPage
ProfilePage
SupportPage

Features:

* Search
* Filters
* Cart
* Checkout
* Wishlist
* Reviews
* Ratings
* Profile
* Notifications

---

# ORDERS MODULE

Generate:

CurrentOrders
OrderHistory
TrackOrder
RefundRequests

Statuses:

PENDING
CONFIRMED
PACKED
OUT_FOR_DELIVERY
DELIVERED
CANCELLED

Customer Actions:

* View Order
* Track Order
* Cancel Order
* Download Invoice
* Request Refund

Cancellation Rules:

Allowed:

* PENDING
* CONFIRMED

Blocked:

* PACKED
* OUT_FOR_DELIVERY
* DELIVERED

---

# SELLER MODULE

Generate:

SellerDashboard
ProductsPage
InventoryPage
OrdersPage
RevenuePage
AnalyticsPage
FarmProfilePage

Features:

* Add Product
* Edit Product
* Delete Product
* Upload Images
* Manage Inventory
* Manage Orders
* Revenue Analytics
* Ratings Analytics

Seller Types:

* Farmer
* Dairy Farm
* FPO
* Cooperative Society
* Organic Store

Verification Status:

* Pending
* Under Review
* Verified
* Rejected
* Suspended

---

# FARM PROFILE MODULE

Create dedicated farm profile management.

Fields:

* Farm Name
* Farmer Name
* District
* Village
* Description
* Farm Images
* Organic Certificate
* Established Year
* Rating

---

# DELIVERY MODULE

Generate:

Dashboard
ActiveDeliveries
RoutesPage
EarningsPage
HistoryPage
AvailabilityPage
NotificationsPage

Features:

* Accept Delivery
* Update Status
* Route Tracking
* Live Tracking
* Earnings
* Delivery Proof

Statuses:

PENDING
PICKED_UP
ON_THE_WAY
DELIVERED

Delivery Proof:

* Photo Upload
* Customer Signature
* Delivery Notes

---

# SUPPORT MODULE

Generate:

Support Center

Ticket Types:

* Product Issue
* Delivery Issue
* Refund Issue
* Payment Issue
* General Inquiry

Statuses:

* Open
* In Progress
* Resolved
* Closed

---

# REFUND MODULE

Generate:

Refund Requests
Refund Management

Statuses:

* Requested
* Approved
* Rejected
* Refunded

Reasons:

* Damaged Product
* Wrong Product
* Missing Items
* Poor Quality

---

# REVIEW SYSTEM

Generate:

Product Reviews
Seller Reviews
Delivery Reviews

Rating:

1–5 Stars

Support:

* Text Review
* Image Review

---

# ADMIN MODULE

Generate:

Dashboard
Users
Sellers
Products
Orders
Support
Refunds
Analytics

Features:

* Seller Verification
* Product Moderation
* User Management
* Refund Approval
* Support Management
* Category Management

---

# DATABASE REQUIREMENTS

Generate:

users
refresh_tokens

sellers
seller_verifications
farm_profiles

categories
products
product_images
inventory_logs

carts
cart_items

orders
order_items

payments
coupons

deliveries
delivery_tracking_logs
delivery_proofs
delivery_slots

product_reviews
seller_reviews
delivery_reviews

wishlists
addresses
notifications

support_tickets
refunds
returns

admin_logs

Use:

* UUID Primary Keys
* Foreign Keys
* Indexes
* Constraints
* Audit Fields

---

# SPRING BOOT REQUIREMENTS

Generate:

Controllers
Services
Repositories
Entities
DTOs
Mappers
Security
Config
Exception Handling

Implement:

* JWT Authentication
* Refresh Tokens
* Role Authorization
* Validation
* Swagger Documentation
* Standard API Responses

---

# REACT REQUIREMENTS

Generate:

* Reusable Components
* Layouts
* Protected Routes
* Role Routes
* API Services
* Redux Slices
* Hooks
* Context Providers

Use:

* Responsive Design
* Mobile First Approach
* Tailwind CSS
* Framer Motion

---

# UI REQUIREMENTS

Brand:
Farm2Kart

Theme:
Organic Tamil Nadu Marketplace

Footer:

Farm2Kart
Farm Fresh from Tamil Nadu to Your Home

Created By:
Arunaw Rishe M

Email:
[arunawrishe@gmail.com](mailto:arunawrishe@gmail.com)

Remove all sample products.

Products must only appear after sellers create them.

Default Marketplace State:

"No products available yet. Products will appear once sellers publish them."

---

# TESTING REQUIREMENTS

Generate:

* Unit Tests
* Integration Tests
* API Tests
* Security Tests
* Frontend Tests

Validate:

* Customer Flow
* Seller Flow
* Delivery Flow
* Admin Flow

---

# DEFINITION OF DONE

The project is complete only when:

* Database completed
* Backend completed
* Frontend completed
* Authentication working
* Product management working
* Cart working
* Orders working
* Reviews working
* Delivery working
* Support working
* Refunds working
* Admin portal working
* Seller portal working
* Delivery portal working
* Mobile responsive
* Production build successful
* Documentation completed

Generate all code, architecture, file structure, APIs, database schema, UI, and documentation necessary to reach 100% project completion.
