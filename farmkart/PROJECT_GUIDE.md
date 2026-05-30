# Farmkart Project Guide

## 1) Project Overview

Farmkart is a full-stack marketplace application built with a Spring Boot backend and a React + Vite frontend.

The backend is the source of truth for authentication, users, products, cart, orders, reviews, delivery, payments, notifications, admin operations, and API security. The frontend is a role-based single-page app that serves customer, seller, delivery, and admin experiences from one React shell.

The current setup is already wired for PostgreSQL, with the active database direction documented as Supabase PostgreSQL. The project also includes a database repair script for auth-related schema cleanup.

## 2) Current Runtime State

- Backend entry point: `src/main/java/com/example/farmkart/FarmkartApplication.java`
- Backend port: `8080` by default
- Frontend entry point: `src/main/resources/frontend/src/main.jsx`
- Frontend dev server: Vite on `5173` by default
- Frontend API base URL: `http://localhost:8080` unless `VITE_API_BASE_URL` is set
- Database mode: PostgreSQL, with `.env`-driven configuration
- Swagger/OpenAPI: enabled at `/swagger-ui.html`

## 3) How The App Is Structured

### Backend

The backend lives under `src/main/java/com/example/farmkart` and is organized by feature and infrastructure layer:

- `controller`: REST endpoints for each domain area
- `service` and `service/impl`: business rules and orchestration
- `repository`: Spring Data JPA persistence interfaces
- `entity`: database models and relations
- `dto`: request and response objects grouped by feature
- `security`: JWT, authentication, authorization, and user details integration
- `config`: CORS, cache, OpenAPI, JWT properties, and websocket configuration
- `exception`: custom API exceptions and global error handling
- `constants`: enums for roles and status values
- `util`: shared helper classes such as API response wrappers

### Frontend

The frontend lives under `src/main/resources/frontend` and is organized as a modern React feature app:

- `src/app`: app shell composition
- `src/routes`: route definitions and route guards
- `src/layouts`: page shells for public, auth, seller, delivery, and admin sections
- `src/pages`: route-level screens grouped by domain
- `src/components`: shared UI and page widgets
- `src/features`: feature-specific stores, hooks, services, and components
- `src/context`: global providers for auth, cart, theme, orders, and notifications
- `src/services` and `src/api`: HTTP integration and request helpers
- `src/constants`: routes, roles, theme, and API constants
- `src/hooks`: reusable hooks
- `src/store`: state management entry points
- `src/utils`: formatting, storage, and class-name helpers

### Database

The `db/` folder contains database assets and notes:

- `dbschema.sql`: database schema definition
- `auth_schema_fix.sql`: repair script for auth-related tables and fields
- `README.md`: database-specific notes

## 4) Backend File Logic

### Application bootstrap

- `FarmkartApplication.java`: starts the Spring Boot app and enables JPA auditing.

### Controllers

These files expose the HTTP API surface:

- `AuthController`: register, login, refresh, logout, and auth flows
- `UserController`: profile and user-related actions
- `ProductController`: product browsing and management endpoints
- `CategoryController`: category CRUD and lookup endpoints
- `CartController`: cart item operations
- `OrderController`: order creation, retrieval, and status updates
- `PaymentController`: payment creation and verification flows
- `ReviewController`: product, seller, and delivery review endpoints
- `WishlistController`: wishlist add/remove/list operations
- `DeliveryController`: delivery status, tracking, and assignment endpoints
- `NotificationController`: notification retrieval and management
- `AdminController`: admin operations and platform oversight

### Services

The service layer contains the business logic behind those controllers:

- `AuthService` and `AuthServiceImpl`: authentication workflows, token handling, and account lifecycle
- `UserService` and `UserServiceImpl`: profile and account management
- `ProductService` and `ProductServiceImpl`: product catalog logic
- `CategoryService` and `CategoryServiceImpl`: category operations
- `CartService` and `CartServiceImpl`: cart state changes and validation
- `OrderService` and `OrderServiceImpl`: order lifecycle, totals, and transitions
- `PaymentService` and `PaymentServiceImpl`: payment request and verification logic
- `ReviewService` and `ReviewServiceImpl`: review creation and moderation flow
- `WishlistService` and `WishlistServiceImpl`: wishlist behavior
- `DeliveryService` and `DeliveryServiceImpl`: delivery tracking and status changes
- `NotificationService` and `NotificationServiceImpl`: notification creation and delivery
- `AdminService` and `AdminServiceImpl`: admin dashboards and verification operations

### Repositories

Repository interfaces under `repository` provide persistence access for the main entities such as users, products, categories, carts, orders, payments, reviews, delivery records, notifications, refresh tokens, and admin logs.

### Entities

Entity classes under `entity` map the domain and database model:

- Identity and auth: `User`, `RefreshToken`
- Commerce: `Product`, `ProductImage`, `Category`, `Cart`, `CartItem`, `Order`, `OrderItem`, `Coupon`, `Payment`
- Delivery: `Delivery`, `DeliveryProfile`, `DeliveryTrackingLog`
- Reviews and feedback: `ProductReview`, `SellerReview`, `DeliveryReview`
- Seller/admin support: `SellerProfile`, `AdminLog`
- User data: `Address`, `Notification`, `Wishlist`
- Shared base model: `BaseEntity`

### DTOs

DTO packages are split by feature so controllers do not expose entities directly:

- `dto/auth`: login, register, refresh, logout, and auth responses
- `dto/user`: profile and address transfer objects
- `dto/product`: product request and response shapes
- `dto/category`: category request and response shapes
- `dto/cart`: cart item and cart response objects
- `dto/order`: order creation and order update objects
- `dto/payment`: payment create, verify, and response objects
- `dto/review`: review request and response objects
- `dto/delivery`: delivery location, status, and earnings objects
- `dto/notification`: notification response shape
- `dto/wishlist`: wishlist request and response objects
- `dto/admin`: admin-facing response models
- `dto/common`: shared pagination response wrapper

### Security

The `security` package provides the request protection layer:

- `SecurityConfig`: Spring Security setup
- `JwtService`: token creation and parsing
- `JwtAuthenticationFilter`: request-time JWT validation
- `UserDetailsServiceImpl` and `CustomUserDetails`: security identity resolution
- `SecurityUtils`: helper methods for authenticated-user access

### Configuration

- `CorsConfig`: cross-origin settings for the frontend
- `WebSocketConfig`: websocket setup if realtime messaging is enabled
- `CacheConfig`: cache configuration
- `OpenApiConfig`: Swagger/OpenAPI setup
- `JwtProperties`: typed JWT configuration values

### Exceptions and Utilities

- `ApiException` and its subclasses: typed HTTP/business errors
- `GlobalExceptionHandler`: centralized API error translation
- `ApiResponse`: standard response wrapper used across the API

### Constants

The `constants` package defines enums for shared state:

- `Role`: customer, seller, delivery, admin-style access control
- `OrderStatus`: order lifecycle states
- `PaymentStatus`: payment states
- `DeliveryStatus`: delivery progress states
- `NotificationType`: notification categories

## 5) Frontend File Logic

### Application shell and startup

- `src/main.jsx`: bootstraps React, BrowserRouter, and the app root
- `src/App.jsx`: delegates to `AppShell`
- `src/app/AppShell.jsx`: wraps the app in providers and routes

### Routing

- `src/routes/AppRoutes.jsx`: central route table
- `ProtectedRoute.jsx`: blocks unauthenticated access
- `RoleRoute.jsx`: blocks unauthorized role access

The route map is organized into these user areas:

- public customer browsing: home, shop, categories, product details, search
- protected customer flows: cart, checkout, orders, profile, wishlist, delivery tracking
- auth: login and register pages
- seller portal: dashboard, products, inventory, orders, revenue, messages, profile settings
- delivery portal: active deliveries, routes, earnings, status, availability, notifications
- admin portal: users, sellers, products, orders, analytics

### Layouts

- `PublicLayout`: public-facing shell
- `AuthLayout`: auth screens shell
- `CustomerLayout`: customer experience shell
- `SellerLayout`: seller workspace shell
- `DeliveryLayout`: delivery workspace shell
- `AdminLayout`: admin workspace shell

### Feature folders

The codebase also contains feature-scoped modules that mirror the domain areas:

- `features/auth`: auth API calls, hooks, validation, forms, pages, and token utilities
- `features/products`: product API, services, hooks, store slice, and UI components
- `features/cart`: cart state and behavior
- `features/orders`: order state and behavior
- `features/delivery`: delivery API, service layer, store slice, hooks, and status UI
- `features/seller`: seller API, services, store slice, and dashboards
- `features/admin`: admin API, services, store slice, and tables

### Shared UI and helpers

- `components`: shared navigation, cards, tables, loaders, modals, toasts, pagination, filters, and dashboard widgets
- `context`: app-wide state providers for auth, cart, theme, orders, and notifications
- `hooks`: reusable hooks that wrap API, auth, products, cart, theme, delivery, orders, and notifications behavior
- `services`: direct API wrappers for the main domains
- `api`: axios client setup, interceptors, error handling, and response helpers
- `constants`: API URLs, routes, roles, and theme values
- `utils`: storage, formatting, and CSS helper utilities

## 6) Execution Guide

### Backend

From the `farmkart` directory:

```bash
./mvnw spring-boot:run
```

Useful alternatives:

```bash
./mvnw test
./mvnw clean package
```

Environment values are read from `.env` if present, or from the defaults in `application.yml`.

### Frontend

From `farmkart/src/main/resources/frontend`:

```bash
npm install
npm run dev
```

Other frontend commands:

```bash
npm run build
npm run lint
npm run preview
```

### Database setup

The Supabase-specific auth repair script lives at `db/auth_schema_fix.sql`. It adds the auth columns and `refresh_tokens` table expected by the current login/register flow.

The database README in `db/README.md` says the active backend environment is configured through `farmkart/.env` and that the Supabase pooler JDBC URL is the expected connection path.

## 7) Configuration Reference

Backend defaults from `src/main/resources/application.yml`:

- server port: `8080`
- datasource URL: localhost PostgreSQL unless `DB_URL` is set
- datasource username/password: `postgres` defaults unless overridden
- JPA DDL mode: `none` by default via `HIBERNATE_DDL_AUTO`
- CORS origin: `http://localhost:5173`
- Swagger UI path: `/swagger-ui.html`

Frontend defaults from `src/main/resources/frontend/src/config/env.js`:

- API base URL: `http://localhost:8080`
- app name: `Farm2Kart`

## 8) Build Artifacts And Generated Output

The `target/` directory contains compiled backend and frontend build output. It is useful for inspection, but it is not the source of truth for implementation changes.

## 9) Current Process Notes

- The project is already scaffolded and built around a full marketplace workflow.
- Backend logic is mostly organized by domain and should be edited in the source packages rather than in `target/`.
- Frontend routing is already role-aware and uses a single app shell with layered providers.
- Database access is expected to work against PostgreSQL/Supabase with auth schema alignment handled by the supplied SQL repair script.

## 10) Suggested Next Edits

If you want this document expanded further, the next useful additions would be:

- a literal per-file catalog for every Java file in `src/main/java`
- a literal per-file catalog for every React file in `src/main/resources/frontend/src`
- a request/response API map for each controller endpoint
- an environment variable reference table for backend and frontend
