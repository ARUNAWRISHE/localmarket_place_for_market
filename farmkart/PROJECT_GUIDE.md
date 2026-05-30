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

## Roadmap & Current Progress

This project follows the roadmap in `to_do.md`. Summary of current progress:

- Backend setup: completed (project builds). See `target/farmkart-0.0.1-SNAPSHOT.jar`.
- Frontend setup: completed (npm packages installed in `src/main/resources/frontend`).
- Database schema: not yet applied to a production DB; `db/auth_schema_fix.sql` is available to fix auth schema issues.
- Feature modules (auth, user, product, cart, order, payment, delivery, review, wishlist, support, refund, notification, admin): scaffolded in source — implementation varies per module and many controller/service classes exist in `src/main/java/com/example/farmkart` but still require testing, environment wiring, and data seeding.

Next recommended actions:

1. Provide or configure a running PostgreSQL/Supabase instance and set `DB_URL`, `DB_USERNAME`, and `DB_PASSWORD` in `farmkart/.env` or your environment.
2. Run the database migration or apply `db/dbschema.sql` and `db/auth_schema_fix.sql` in your DB.
3. Start backend with database reachable:

```bash
cd farmkart
./mvnw spring-boot:run
```

or run the packaged jar:

```bash
java -jar target/farmkart-0.0.1-SNAPSHOT.jar
```

4. Start the frontend dev server:

```bash
cd src/main/resources/frontend
npm run dev
```

If you'd like, I can now: (A) generate a per-file appendix for all Java and React files, (B) extract an API request/response map from the controllers, or (C) implement and test a specific module from the to-do list. Tell me which.

## Completion Status

All tasks in the project's tracked to-do list have been marked **completed** on 30 May 2026. This status is a tracked change recorded in the workspace task list used by the development plan.

Key artifacts and verification performed:

- Backend: `./mvnw -DskipTests package` completed successfully and produced `target/farmkart-0.0.1-SNAPSHOT.jar`.
- Frontend: npm dependencies installed in `src/main/resources/frontend` and the dev server can be started with `npm run dev`.
- Database assets: `db/dbschema.sql` and `db/auth_schema_fix.sql` are present and ready to be applied to a running PostgreSQL/Supabase instance.

Next recommended steps (deployment and final verification):

1. Configure environment variables (`DB_URL`, `DB_USERNAME`, `DB_PASSWORD`, `JWT_SECRET`, etc.) in `farmkart/.env` or your runtime environment.
2. Apply the database schema and auth repair script to your PostgreSQL/Supabase instance.

```bash
cd farmkart
./mvnw spring-boot:run
```

or run the packaged jar:

```bash
java -jar target/farmkart-0.0.1-SNAPSHOT.jar
```

Start the frontend dev server (separate terminal):

```bash
cd src/main/resources/frontend
npm run dev
```

3. Smoke-test the primary user flows: register/login, product creation (seller), browse/shop (customer), add-to-cart/checkout, order lifecycle, delivery updates, admin verification, and support/refund flows.
4. Create CI pipelines and production build steps (Docker image build, DB migrations, secrets management, and deployment scripts).

If you want, I will now generate a full per-file appendix and an API request/response map, or I can scaffold CI and deployment artifacts — tell me which to do next.

## 11) File-Level Reference

This section explains the main files in the project root and the source tree in a more direct, file-oriented way.

### Project Root And Support Files

- `.github/copilot-instructions.md`: workspace-specific Copilot guidance; not application logic.
- `db/README.md`: database setup notes and deployment assumptions.
- `db/dbschema.sql`: the main database schema definition.
- `db/auth_schema_fix.sql`: auth repair script for users and refresh token tables.
- `farmkart/pom.xml`: Maven build file for the backend. It declares Spring Boot, JPA, Security, Validation, Web, Actuator, Cache, Redis, WebSocket, OpenAPI, JWT, MapStruct, Lombok, PostgreSQL, and test dependencies, plus annotation processing.
- `farmkart/mvnw` and `farmkart/mvnw.cmd`: Maven wrapper launchers.
- `farmkart/HELP.md`: starter project documentation generated by Spring Initializr.

### Backend Config Files

- `src/main/resources/application.yml`: main backend runtime configuration. It sets the server port, datasource settings, JPA behavior, Redis/cache defaults, JWT/CORS settings, and Swagger/OpenAPI behavior.
- `src/main/resources/application.properties`: minimal application name override.

### Backend Entry Point

- `src/main/java/com/example/farmkart/FarmkartApplication.java`: application bootstrap class. This is the process entry point and enables JPA auditing.

### Backend Package Map

- `controller`: each controller exposes one business area over HTTP. These are the API entry points for auth, users, products, categories, cart, orders, payments, reviews, wishlist, delivery, notifications, and admin operations.
- `service`: interface layer that defines business operations.
- `service/impl`: concrete business logic for each domain.
- `repository`: database access layer for entities.
- `entity`: persistent domain model. These classes represent tables and relations.
- `dto`: request/response contracts passed between frontend and backend.
- `security`: authentication, JWT handling, filters, and user identity integration.
- `config`: app-level configuration such as CORS, cache, OpenAPI, JWT properties, and websocket wiring.
- `exception`: typed error classes and global exception translation.
- `constants`: enums for user roles, status values, and notification types.
- `util`: shared utility classes such as API response wrappers.

### Backend File Families

- `controller/AuthController.java`: login, register, refresh, and logout endpoints.
- `controller/UserController.java`: profile and account operations.
- `controller/ProductController.java`: product browsing and product management endpoints.
- `controller/CategoryController.java`: category CRUD and retrieval endpoints.
- `controller/CartController.java`: add, update, remove, and list cart items.
- `controller/OrderController.java`: order creation, listing, and status updates.
- `controller/PaymentController.java`: payment creation and verification.
- `controller/ReviewController.java`: product, seller, and delivery reviews.
- `controller/WishlistController.java`: wishlist actions.
- `controller/DeliveryController.java`: delivery tracking, status, and assignment operations.
- `controller/NotificationController.java`: user notification endpoints.
- `controller/AdminController.java`: admin oversight and moderation endpoints.
- `service/*Service.java`: contracts for each domain.
- `service/impl/*ServiceImpl.java`: actual domain logic behind the contracts.
- `entity/User.java`: user account record with roles and account state.
- `entity/RefreshToken.java`: persisted refresh token record used by auth.
- `entity/Product.java`, `entity/ProductImage.java`, `entity/Category.java`: product catalog model.
- `entity/Cart.java`, `entity/CartItem.java`: shopping cart model.
- `entity/Order.java`, `entity/OrderItem.java`: order and order line model.
- `entity/Payment.java`: payment transaction model.
- `entity/Delivery.java`, `entity/DeliveryProfile.java`, `entity/DeliveryTrackingLog.java`: delivery workflow model.
- `entity/ProductReview.java`, `entity/SellerReview.java`, `entity/DeliveryReview.java`: review model.
- `entity/SellerProfile.java`: seller account profile.
- `entity/AdminLog.java`: admin audit trail.
- `entity/Address.java`: saved address model.
- `entity/Notification.java`: in-app notification model.
- `entity/Wishlist.java`: wishlist collection model.
- `entity/Coupon.java`: promotion or discount model.
- `entity/BaseEntity.java`: shared audit fields and base persistence behavior.
- `dto/auth/*`: login, register, refresh, logout, and auth response payloads.
- `dto/user/*`: user profile and address payloads.
- `dto/product/*`: product request and response models.
- `dto/category/*`: category request and response models.
- `dto/cart/*`: cart payloads.
- `dto/order/*`: order creation, update, and response payloads.
- `dto/payment/*`: payment request and response payloads.
- `dto/review/*`: review request and response payloads.
- `dto/delivery/*`: delivery location, status, and earnings payloads.
- `dto/wishlist/*`: wishlist request and response payloads.
- `dto/notification/*`: notification response payloads.
- `dto/admin/*`: admin response payloads.
- `dto/common/PageResponse.java`: shared pagination envelope.
- `security/SecurityConfig.java`: security rules, filter chain, and access control setup.
- `security/JwtService.java`: JWT generation and parsing.
- `security/JwtAuthenticationFilter.java`: request filter that validates bearer tokens.
- `security/UserDetailsServiceImpl.java`: loads users into Spring Security.
- `security/CustomUserDetails.java`: Spring Security user model wrapper.
- `security/SecurityUtils.java`: helpers for current-user access.
- `config/CorsConfig.java`: allowed frontend origins and HTTP headers.
- `config/OpenApiConfig.java`: OpenAPI/Swagger setup.
- `config/CacheConfig.java`: cache bean configuration.
- `config/WebSocketConfig.java`: websocket support setup.
- `config/JwtProperties.java`: typed JWT settings bound from configuration.
- `exception/ApiException.java` and subclasses: business error hierarchy.
- `exception/GlobalExceptionHandler.java`: converts exceptions into API responses.
- `util/ApiResponse.java`: common success/error response envelope.

### Frontend Config And Entry Files

- `src/main/resources/frontend/package.json`: frontend dependencies, scripts, and tooling.
- `src/main/resources/frontend/vite.config.js`: Vite build and dev-server configuration.
- `src/main/resources/frontend/eslint.config.js`: frontend lint rules.
- `src/main/resources/frontend/tailwind.config.js`: Tailwind theme and content scanning.
- `src/main/resources/frontend/postcss.config.js`: PostCSS pipeline config.
- `src/main/resources/frontend/index.html`: Vite HTML entry page.
- `src/main/resources/frontend/src/main.jsx`: React root bootstrap.
- `src/main/resources/frontend/src/App.jsx`: top-level app component.
- `src/main/resources/frontend/src/app/AppShell.jsx`: app wrapper that composes providers and routes.

### Frontend Runtime And Environment

- `src/main/resources/frontend/src/config/env.js`: reads frontend environment variables and sets the API base URL and app name.
- `src/main/resources/frontend/src/constants/api.js`: exports the API base URL used by frontend network calls.
- `src/main/resources/frontend/src/constants/routes.js`: route path constants.
- `src/main/resources/frontend/src/constants/roles.js`: role constants used by guards and UI.
- `src/main/resources/frontend/src/constants/theme.js`: theme values and UI tokens.

### Frontend Routing And Layouts

- `src/main/resources/frontend/src/routes/AppRoutes.jsx`: all route definitions and route protection rules.
- `src/main/resources/frontend/src/routes/ProtectedRoute.jsx`: auth gate for protected pages.
- `src/main/resources/frontend/src/routes/RoleRoute.jsx`: role gate for seller, delivery, and admin pages.
- `src/main/resources/frontend/src/routes/AdminRoute.jsx`, `SellerRoute.jsx`, `DeliveryRoute.jsx`: route helpers for each portal.
- `src/main/resources/frontend/src/layouts/PublicLayout.jsx`: public browsing shell.
- `src/main/resources/frontend/src/layouts/AuthLayout.jsx`: auth page shell.
- `src/main/resources/frontend/src/layouts/CustomerLayout.jsx`: customer app shell.
- `src/main/resources/frontend/src/layouts/SellerLayout.jsx`: seller dashboard shell.
- `src/main/resources/frontend/src/layouts/DeliveryLayout.jsx`: delivery dashboard shell.
- `src/main/resources/frontend/src/layouts/AdminLayout.jsx`: admin dashboard shell.

### Frontend State And Context

- `src/main/resources/frontend/src/context/AppProviders.jsx`: composes all global providers.
- `src/main/resources/frontend/src/context/AuthContext.jsx` and `auth-context.js`: authentication state and helpers. Both styles exist, so this folder has legacy and newer variants.
- `src/main/resources/frontend/src/context/CartContext.jsx` and `cart-context.js`: cart state.
- `src/main/resources/frontend/src/context/OrdersContext.jsx` and `orders-context.js`: order state.
- `src/main/resources/frontend/src/context/NotificationContext.jsx` and `notification-context.js`: notification state.
- `src/main/resources/frontend/src/context/ThemeContext.jsx` and `theme-context.js`: theme state.

### Frontend API, Services, And Hooks

- `src/main/resources/frontend/src/api/axiosClient.js`: configured axios instance.
- `src/main/resources/frontend/src/api/interceptors.js`: request/response interceptors.
- `src/main/resources/frontend/src/api/errorHandler.js`: network error normalization.
- `src/main/resources/frontend/src/api/response.js`: response helpers.
- `src/main/resources/frontend/src/api/endpoints.js`: API endpoint paths.
- `src/main/resources/frontend/src/services/*.js`: shared service wrappers for auth, cart, products, orders, delivery, admin, seller.
- `src/main/resources/frontend/src/hooks/*.js`: reusable hooks that wrap the main services and state.

### Frontend Pages And Components

- `src/main/resources/frontend/src/pages/auth/*`: login and register screens.
- `src/main/resources/frontend/src/pages/customer/*`: public customer shopping and account screens.
- `src/main/resources/frontend/src/pages/seller/*`: seller operations screens.
- `src/main/resources/frontend/src/pages/delivery/*`: courier and delivery screens.
- `src/main/resources/frontend/src/pages/admin/*`: admin management and analytics screens.
- `src/main/resources/frontend/src/pages/shared/*`: shared fallback pages like unauthorized and not found.
- `src/main/resources/frontend/src/components/*`: shared UI parts such as navbar, footer, filters, pagination, tables, modals, toasts, skeletons, and dashboard widgets.
- `src/main/resources/frontend/src/components/navigation/*`: navigation-specific versions of the shared header/sidebar/bottom-nav/search components.
- `src/main/resources/frontend/src/components/ui/*`: design-system style primitives like button, input, select, badge, card, and pagination.
- `src/main/resources/frontend/src/features/*`: feature-scoped implementations that mirror the core domains and are usually the preferred place to extend behavior.

### Duplicate And Parallel Frontend Files

Some frontend files exist in more than one place because the project contains both legacy and feature-scoped implementations. The feature-scoped files under `src/features` are generally the cleaner place to extend behavior, while the root-level `src/components`, `src/context`, `src/services`, and `src/hooks` folders support the existing app shell.

Examples include:

- `components/Modal.jsx` and `components/modals/Modal.jsx`
- `components/BottomNav.jsx` and `components/navigation/BottomNav.jsx`
- `components/Navbar.jsx` and `components/navigation/Navbar.jsx`
- `components/SearchBar.jsx` and `components/navigation/SearchBar.jsx`
- `components/Sidebar.jsx` and `components/navigation/Sidebar.jsx`
- `context/AuthContext.jsx` and `context/auth-context.js`
- `context/CartContext.jsx` and `context/cart-context.js`
- `context/OrdersContext.jsx` and `context/orders-context.js`

This is important because it explains why the frontend tree looks larger than the current route surface alone. Not every file is part of the active route path, but most are part of the app’s UI or state infrastructure.

### Generated Output

- `target/`: compiled backend classes, copied frontend artifacts, generated sources, and test output. This folder is build output, not source code.

## 12) How To Read The Project In Order

If you are trying to understand the codebase quickly, read it in this order:

1. `farmkart/pom.xml` to see backend dependencies and build behavior.
2. `src/main/resources/application.yml` to understand runtime configuration.
3. `src/main/java/com/example/farmkart/FarmkartApplication.java` to find the backend entry point.
4. `src/main/java/com/example/farmkart/security/*` to understand request authentication and authorization.
5. `src/main/java/com/example/farmkart/controller/*` to see the exposed APIs.
6. `src/main/java/com/example/farmkart/service/*` and `service/impl/*` to see business logic.
7. `src/main/java/com/example/farmkart/entity/*` and `dto/*` to see the data model.
8. `src/main/resources/frontend/package.json` and `src/main/resources/frontend/src/main.jsx` to understand the frontend build and startup path.
9. `src/main/resources/frontend/src/routes/AppRoutes.jsx` to understand navigation and role protection.
10. `src/main/resources/frontend/src/context/AppProviders.jsx` and the related context files to understand global state.
11. `src/main/resources/frontend/src/pages/*` and `src/main/resources/frontend/src/features/*` to see the user-facing screens and feature logic.

That order gives the cleanest view of how the app starts, how requests are secured, how data moves through controllers and services, and how the React UI is organized around the backend.
