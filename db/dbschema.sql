-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.addresses (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  user_id uuid,
  full_address text NOT NULL,
  city character varying,
  state character varying,
  country character varying DEFAULT 'India'::character varying,
  pincode character varying,
  latitude numeric,
  longitude numeric,
  is_default boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL,
  label character varying,
  line1 character varying NOT NULL,
  line2 character varying,
  postal_code character varying NOT NULL,
  CONSTRAINT addresses_pkey PRIMARY KEY (id),
  CONSTRAINT addresses_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id)
);
CREATE TABLE public.admin_logs (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  admin_id uuid,
  action character varying,
  target_entity text,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL,
  details character varying,
  CONSTRAINT admin_logs_pkey PRIMARY KEY (id),
  CONSTRAINT admin_logs_admin_id_fkey FOREIGN KEY (admin_id) REFERENCES public.users(id)
);
CREATE TABLE public.cart_items (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  cart_id uuid,
  product_id uuid,
  quantity integer NOT NULL DEFAULT 1,
  price numeric NOT NULL,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL,
  price_at_add numeric NOT NULL,
  CONSTRAINT cart_items_pkey PRIMARY KEY (id),
  CONSTRAINT cart_items_cart_id_fkey FOREIGN KEY (cart_id) REFERENCES public.carts(id),
  CONSTRAINT cart_items_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id)
);
CREATE TABLE public.carts (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  user_id uuid UNIQUE,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL,
  CONSTRAINT carts_pkey PRIMARY KEY (id),
  CONSTRAINT carts_customer_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id)
);
CREATE TABLE public.categories (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  name character varying NOT NULL,
  slug character varying NOT NULL UNIQUE,
  icon text,
  banner_image text,
  parent_category_id uuid,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL,
  CONSTRAINT categories_pkey PRIMARY KEY (id),
  CONSTRAINT categories_parent_category_id_fkey FOREIGN KEY (parent_category_id) REFERENCES public.categories(id)
);
CREATE TABLE public.coupons (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  code character varying NOT NULL UNIQUE,
  discount_type character varying,
  discount_value numeric,
  min_order_amount numeric,
  expiry_date timestamp without time zone,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL,
  active boolean,
  discount_percentage numeric NOT NULL,
  max_discount numeric,
  valid_from timestamp with time zone,
  valid_to timestamp with time zone,
  CONSTRAINT coupons_pkey PRIMARY KEY (id)
);
CREATE TABLE public.deliveries (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  order_id uuid UNIQUE,
  delivery_partner_id uuid,
  pickup_time timestamp without time zone,
  delivery_time timestamp without time zone,
  current_status character varying DEFAULT 'PENDING'::character varying,
  estimated_arrival timestamp without time zone,
  live_location text,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL,
  assigned_at timestamp with time zone,
  delivered_at timestamp with time zone,
  status character varying NOT NULL CHECK (status::text = ANY (ARRAY['ASSIGNED'::character varying, 'PICKED_UP'::character varying, 'IN_TRANSIT'::character varying, 'OUT_FOR_DELIVERY'::character varying, 'DELIVERED'::character varying, 'CANCELLED'::character varying]::text[])),
  CONSTRAINT deliveries_pkey PRIMARY KEY (id),
  CONSTRAINT deliveries_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id),
  CONSTRAINT deliveries_delivery_partner_id_fkey FOREIGN KEY (delivery_partner_id) REFERENCES public.users(id)
);
CREATE TABLE public.delivery_profiles (
  id uuid NOT NULL,
  created_at timestamp with time zone NOT NULL,
  updated_at timestamp with time zone NOT NULL,
  rating_average numeric,
  vehicle_type character varying,
  user_id uuid NOT NULL UNIQUE,
  CONSTRAINT delivery_profiles_pkey PRIMARY KEY (id),
  CONSTRAINT fk8ncjuxj3drgbp8m15j1d8wk3s FOREIGN KEY (user_id) REFERENCES public.users(id)
);
CREATE TABLE public.delivery_proofs (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  delivery_id uuid,
  photo_url text,
  signature_url text,
  notes text,
  created_at timestamp with time zone DEFAULT timezone('UTC'::text, now()),
  CONSTRAINT delivery_proofs_pkey PRIMARY KEY (id),
  CONSTRAINT delivery_proofs_delivery_id_fkey FOREIGN KEY (delivery_id) REFERENCES public.deliveries(id)
);
CREATE TABLE public.delivery_reviews (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  delivery_partner_id uuid,
  customer_id uuid,
  rating integer CHECK (rating >= 1 AND rating <= 5),
  feedback text,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL,
  comment character varying,
  delivery_id uuid NOT NULL,
  reviewer_id uuid NOT NULL,
  CONSTRAINT delivery_reviews_pkey PRIMARY KEY (id),
  CONSTRAINT delivery_reviews_delivery_partner_id_fkey FOREIGN KEY (delivery_partner_id) REFERENCES public.users(id),
  CONSTRAINT delivery_reviews_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.users(id),
  CONSTRAINT fks3i1dnk98o8bwpla0ao6974k2 FOREIGN KEY (delivery_id) REFERENCES public.deliveries(id),
  CONSTRAINT fkabg9oup3b1sipk0ilbth4a1s9 FOREIGN KEY (reviewer_id) REFERENCES public.users(id)
);
CREATE TABLE public.delivery_slots (
  id bigint NOT NULL DEFAULT nextval('delivery_slots_id_seq'::regclass),
  name text NOT NULL UNIQUE,
  start_time time without time zone,
  end_time time without time zone,
  created_at timestamp with time zone DEFAULT timezone('UTC'::text, now()),
  CONSTRAINT delivery_slots_pkey PRIMARY KEY (id)
);
CREATE TABLE public.delivery_tracking_logs (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  delivery_id uuid,
  latitude numeric,
  longitude numeric,
  tracking_message text,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL,
  recorded_at timestamp with time zone NOT NULL,
  CONSTRAINT delivery_tracking_logs_pkey PRIMARY KEY (id),
  CONSTRAINT delivery_tracking_logs_delivery_id_fkey FOREIGN KEY (delivery_id) REFERENCES public.deliveries(id)
);
CREATE TABLE public.districts (
  id bigint NOT NULL DEFAULT nextval('districts_id_seq'::regclass),
  name text NOT NULL UNIQUE,
  state text DEFAULT 'Tamil Nadu'::text,
  created_at timestamp with time zone DEFAULT timezone('UTC'::text, now()),
  updated_at timestamp with time zone DEFAULT timezone('UTC'::text, now()),
  CONSTRAINT districts_pkey PRIMARY KEY (id)
);
CREATE TABLE public.farm_images (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  farm_profile_id uuid,
  image_url text NOT NULL,
  caption text,
  is_primary boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT timezone('UTC'::text, now()),
  CONSTRAINT farm_images_pkey PRIMARY KEY (id),
  CONSTRAINT farm_images_farm_profile_id_fkey FOREIGN KEY (farm_profile_id) REFERENCES public.farm_profiles(id)
);
CREATE TABLE public.farm_profiles (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  farm_name text NOT NULL,
  farmer_name text,
  district text,
  district_id bigint,
  village text,
  description text,
  established_year integer,
  organic_certified boolean DEFAULT false,
  organic_certificate_no text,
  rating numeric DEFAULT 0,
  created_at timestamp with time zone DEFAULT timezone('UTC'::text, now()),
  updated_at timestamp with time zone DEFAULT timezone('UTC'::text, now()),
  CONSTRAINT farm_profiles_pkey PRIMARY KEY (id),
  CONSTRAINT farm_profiles_district_id_fkey FOREIGN KEY (district_id) REFERENCES public.districts(id)
);
CREATE TABLE public.inventory_logs (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  product_id uuid,
  previous_stock integer,
  updated_stock integer,
  reason text,
  updated_by uuid,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone DEFAULT timezone('UTC'::text, now()),
  CONSTRAINT inventory_logs_pkey PRIMARY KEY (id),
  CONSTRAINT inventory_logs_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id),
  CONSTRAINT inventory_logs_updated_by_fkey FOREIGN KEY (updated_by) REFERENCES public.users(id)
);
CREATE TABLE public.notifications (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  user_id uuid,
  title character varying,
  message character varying,
  type character varying,
  is_read boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL,
  CONSTRAINT notifications_pkey PRIMARY KEY (id),
  CONSTRAINT notifications_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id)
);
CREATE TABLE public.order_items (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  order_id uuid,
  product_id uuid,
  seller_id uuid,
  quantity integer NOT NULL,
  price numeric NOT NULL,
  total numeric NOT NULL,
  created_at timestamp with time zone NOT NULL,
  updated_at timestamp with time zone NOT NULL,
  CONSTRAINT order_items_pkey PRIMARY KEY (id),
  CONSTRAINT order_items_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id),
  CONSTRAINT order_items_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id),
  CONSTRAINT order_items_seller_id_fkey FOREIGN KEY (seller_id) REFERENCES public.sellers(id)
);
CREATE TABLE public.orders (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  customer_id uuid,
  delivery_partner_id uuid,
  address_id uuid,
  order_number character varying NOT NULL UNIQUE,
  subtotal numeric NOT NULL,
  tax_amount numeric DEFAULT 0,
  delivery_fee numeric DEFAULT 0,
  total_amount numeric NOT NULL,
  payment_status character varying DEFAULT 'PENDING'::character varying,
  placed_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  created_at timestamp with time zone NOT NULL,
  status character varying NOT NULL CHECK (status::text = ANY (ARRAY['PENDING'::character varying, 'CONFIRMED'::character varying, 'PACKED'::character varying, 'SHIPPED'::character varying, 'OUT_FOR_DELIVERY'::character varying, 'DELIVERED'::character varying, 'CANCELLED'::character varying]::text[])),
  user_id uuid NOT NULL,
  delivery_slot_id bigint,
  CONSTRAINT orders_pkey PRIMARY KEY (id),
  CONSTRAINT orders_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.users(id),
  CONSTRAINT orders_delivery_partner_id_fkey FOREIGN KEY (delivery_partner_id) REFERENCES public.users(id),
  CONSTRAINT orders_address_id_fkey FOREIGN KEY (address_id) REFERENCES public.addresses(id),
  CONSTRAINT fk32ql8ubntj5uh44ph9659tiih FOREIGN KEY (user_id) REFERENCES public.users(id),
  CONSTRAINT fk_orders_delivery_slot FOREIGN KEY (delivery_slot_id) REFERENCES public.delivery_slots(id)
);
CREATE TABLE public.payments (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  order_id uuid,
  payment_method character varying,
  transaction_id character varying,
  amount numeric,
  paid_at timestamp without time zone,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL,
  provider character varying,
  provider_reference character varying,
  status character varying NOT NULL CHECK (status::text = ANY (ARRAY['PENDING'::character varying, 'AUTHORIZED'::character varying, 'PAID'::character varying, 'FAILED'::character varying, 'REFUNDED'::character varying]::text[])),
  CONSTRAINT payments_pkey PRIMARY KEY (id),
  CONSTRAINT payments_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id)
);
CREATE TABLE public.product_images (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  product_id uuid,
  image_url character varying NOT NULL,
  is_primary boolean DEFAULT false,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL,
  CONSTRAINT product_images_pkey PRIMARY KEY (id),
  CONSTRAINT product_images_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id)
);
CREATE TABLE public.product_reviews (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  product_id uuid,
  customer_id uuid,
  rating integer CHECK (rating >= 1 AND rating <= 5),
  review text,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL,
  comment character varying,
  reviewer_id uuid NOT NULL,
  CONSTRAINT product_reviews_pkey PRIMARY KEY (id),
  CONSTRAINT product_reviews_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id),
  CONSTRAINT product_reviews_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.users(id),
  CONSTRAINT fkk3fbv680qghr3jfwb4xfbkr3g FOREIGN KEY (reviewer_id) REFERENCES public.users(id)
);
CREATE TABLE public.products (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  seller_id uuid,
  category_id uuid,
  name character varying NOT NULL,
  slug character varying NOT NULL UNIQUE,
  short_description text,
  description character varying,
  brand character varying,
  sku character varying,
  weight numeric,
  price numeric NOT NULL,
  discount_price numeric,
  stock_quantity integer DEFAULT 0,
  organic_certified boolean DEFAULT true,
  featured boolean DEFAULT false,
  average_rating numeric DEFAULT 0,
  total_reviews integer DEFAULT 0,
  status character varying DEFAULT 'ACTIVE'::character varying,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  rating_average numeric,
  farm_profile_id uuid,
  harvest_date date,
  unit_type USER-DEFINED,
  origin_district text,
  origin_village text,
  organic_certificate_no text,
  CONSTRAINT products_pkey PRIMARY KEY (id),
  CONSTRAINT products_seller_id_fkey FOREIGN KEY (seller_id) REFERENCES public.sellers(id),
  CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.categories(id),
  CONSTRAINT fk_products_farm_profile FOREIGN KEY (farm_profile_id) REFERENCES public.farm_profiles(id)
);
CREATE TABLE public.refresh_tokens (
  id uuid NOT NULL,
  created_at timestamp with time zone NOT NULL,
  updated_at timestamp with time zone NOT NULL,
  expires_at timestamp with time zone NOT NULL,
  revoked boolean NOT NULL,
  token character varying NOT NULL UNIQUE,
  user_id uuid NOT NULL,
  CONSTRAINT refresh_tokens_pkey PRIMARY KEY (id),
  CONSTRAINT fk1lih5y2npsf8u5o3vhdb9y0os FOREIGN KEY (user_id) REFERENCES public.users(id)
);
CREATE TABLE public.refunds (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  order_id uuid,
  amount numeric NOT NULL,
  reason text,
  status USER-DEFINED DEFAULT 'REQUESTED'::refund_status,
  created_at timestamp with time zone DEFAULT timezone('UTC'::text, now()),
  processed_at timestamp with time zone,
  CONSTRAINT refunds_pkey PRIMARY KEY (id),
  CONSTRAINT refunds_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id)
);
CREATE TABLE public.returns (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  order_id uuid,
  reason text,
  status USER-DEFINED DEFAULT 'REQUESTED'::return_status,
  created_at timestamp with time zone DEFAULT timezone('UTC'::text, now()),
  processed_at timestamp with time zone,
  CONSTRAINT returns_pkey PRIMARY KEY (id),
  CONSTRAINT returns_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id)
);
CREATE TABLE public.seller_reviews (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  seller_id uuid,
  customer_id uuid,
  rating integer CHECK (rating >= 1 AND rating <= 5),
  review text,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL,
  comment character varying,
  reviewer_id uuid NOT NULL,
  CONSTRAINT seller_reviews_pkey PRIMARY KEY (id),
  CONSTRAINT seller_reviews_seller_id_fkey FOREIGN KEY (seller_id) REFERENCES public.sellers(id),
  CONSTRAINT seller_reviews_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.users(id),
  CONSTRAINT fk6d8cdi4pbc665blm5ixen9f9w FOREIGN KEY (reviewer_id) REFERENCES public.users(id)
);
CREATE TABLE public.sellers (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  user_id uuid UNIQUE,
  shop_name character varying NOT NULL,
  shop_description text,
  gst_number character varying,
  organic_certification text,
  verification_status character varying DEFAULT 'PENDING'::character varying,
  rating numeric DEFAULT 0,
  total_reviews integer DEFAULT 0,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL,
  business_name character varying NOT NULL,
  rating_average numeric,
  verified boolean NOT NULL,
  seller_type USER-DEFINED DEFAULT 'FARMER'::seller_type,
  CONSTRAINT sellers_pkey PRIMARY KEY (id),
  CONSTRAINT sellers_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id)
);
CREATE TABLE public.support_tickets (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  user_id uuid,
  order_id uuid,
  subject text NOT NULL,
  description text,
  priority USER-DEFINED DEFAULT 'MEDIUM'::ticket_priority,
  status USER-DEFINED DEFAULT 'OPEN'::ticket_status,
  created_at timestamp with time zone DEFAULT timezone('UTC'::text, now()),
  updated_at timestamp with time zone DEFAULT timezone('UTC'::text, now()),
  CONSTRAINT support_tickets_pkey PRIMARY KEY (id),
  CONSTRAINT support_tickets_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id),
  CONSTRAINT support_tickets_order_id_fkey FOREIGN KEY (order_id) REFERENCES public.orders(id)
);
CREATE TABLE public.user_roles (
  user_id uuid NOT NULL,
  role character varying NOT NULL CHECK (role::text = ANY (ARRAY['CUSTOMER'::character varying, 'SELLER'::character varying, 'DELIVERY'::character varying, 'ADMIN'::character varying]::text[])),
  updated_at timestamp with time zone DEFAULT timezone('UTC'::text, now()),
  CONSTRAINT user_roles_pkey PRIMARY KEY (user_id, role),
  CONSTRAINT fkhfh9dx7w3ubf1co1vdev94g3f FOREIGN KEY (user_id) REFERENCES public.users(id)
);
CREATE TABLE public.users (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  full_name character varying NOT NULL,
  email character varying NOT NULL UNIQUE,
  password_hash character varying NOT NULL,
  role character varying NOT NULL CHECK (role::text = ANY (ARRAY['CUSTOMER'::character varying::text, 'SELLER'::character varying::text, 'DELIVERY'::character varying::text, 'ADMIN'::character varying::text])),
  phone character varying,
  profile_image text,
  status character varying DEFAULT 'ACTIVE'::character varying,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  active boolean NOT NULL,
  profile_image_url character varying,
  CONSTRAINT users_pkey PRIMARY KEY (id)
);
CREATE TABLE public.wishlists (
  id uuid NOT NULL DEFAULT uuid_generate_v4(),
  product_id uuid,
  created_at timestamp with time zone DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL,
  user_id uuid NOT NULL,
  CONSTRAINT wishlists_pkey PRIMARY KEY (id),
  CONSTRAINT wishlists_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id),
  CONSTRAINT fk330pyw2el06fn5g28ypyljt16 FOREIGN KEY (user_id) REFERENCES public.users(id)
);