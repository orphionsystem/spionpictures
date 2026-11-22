// Database types
export interface Profile {
  id: string
  email: string
  full_name?: string
  role: 'customer' | 'admin'
  phone?: string
  created_at: string
  updated_at: string
}

export interface Collection {
  id: string
  slug: string
  name_tr: string
  name_en: string
  description_tr?: string
  description_en?: string
  story_tr?: string
  story_en?: string
  cover_image?: string
  display_order: number
  is_published: boolean
  featured: boolean
  seo_title_tr?: string
  seo_title_en?: string
  seo_description_tr?: string
  seo_description_en?: string
  created_at: string
  updated_at: string
}

export interface Artwork {
  id: string
  slug: string
  collection_id?: string
  collection?: Collection
  title_tr: string
  title_en: string
  artist_name: string
  description_tr?: string
  description_en?: string
  story_tr?: string
  story_en?: string
  technique_tr?: string
  technique_en?: string
  print_info_tr?: string
  print_info_en?: string
  base_price: number
  currency: 'TRY' | 'USD' | 'EUR'
  total_editions: number
  sold_editions: number
  display_order: number
  is_published: boolean
  featured: boolean
  seo_title_tr?: string
  seo_title_en?: string
  seo_description_tr?: string
  seo_description_en?: string
  seo_keywords?: string[]
  created_at: string
  updated_at: string
  images?: ArtworkImage[]
  variants?: ProductVariant[]
}

export interface ArtworkImage {
  id: string
  artwork_id: string
  image_url: string
  alt_text_tr?: string
  alt_text_en?: string
  display_order: number
  is_primary: boolean
  created_at: string
}

export interface ProductVariant {
  id: string
  artwork_id: string
  size_name: string
  width_cm: number
  height_cm: number
  frame_type: 'framed' | 'unframed' | 'both'
  price_unframed?: number
  price_framed?: number
  stock_quantity: number
  is_available: boolean
  created_at: string
  updated_at: string
}

export interface Edition {
  id: string
  artwork_id: string
  edition_number: number
  is_sold: boolean
  is_reserved: boolean
  order_id?: string
  sold_at?: string
  created_at: string
}

export interface CartItem {
  id: string
  user_id?: string
  session_id?: string
  artwork_id: string
  artwork?: Artwork
  variant_id: string
  variant?: ProductVariant
  quantity: number
  frame_option: 'framed' | 'unframed'
  price_at_add: number
  created_at: string
  updated_at: string
}

export interface Order {
  id: string
  order_number: string
  user_id?: string
  customer_email: string
  customer_name: string
  customer_phone: string
  shipping_address: string
  shipping_city: string
  shipping_postal_code?: string
  shipping_country: string
  billing_address?: string
  billing_city?: string
  billing_postal_code?: string
  billing_country?: string
  subtotal: number
  tax_amount: number
  shipping_cost: number
  total_amount: number
  currency: string
  status: OrderStatus
  payment_method?: string
  payment_status: 'pending' | 'completed' | 'failed' | 'refunded'
  payment_transaction_id?: string
  shipping_method?: string
  tracking_number?: string
  shipped_at?: string
  delivered_at?: string
  customer_notes?: string
  admin_notes?: string
  created_at: string
  updated_at: string
  items?: OrderItem[]
}

export type OrderStatus =
  | 'pending_payment'
  | 'paid'
  | 'preparing'
  | 'printing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded'

export interface OrderItem {
  id: string
  order_id: string
  artwork_id: string
  variant_id: string
  edition_id?: string
  artwork_title: string
  artist_name: string
  size_name: string
  frame_option: string
  edition_number?: number
  quantity: number
  unit_price: number
  total_price: number
  created_at: string
}

export interface Payment {
  id: string
  order_id: string
  payment_provider: 'iyzico' | 'paytr'
  transaction_id?: string
  conversation_id?: string
  amount: number
  currency: string
  status: 'pending' | 'success' | 'failed' | 'refunded'
  payment_method?: string
  card_last_four?: string
  error_message?: string
  raw_response?: any
  created_at: string
  updated_at: string
}

export interface Service {
  id: string
  slug: string
  category: ServiceCategory
  title_tr: string
  title_en: string
  subtitle_tr?: string
  subtitle_en?: string
  description_tr: string
  description_en: string
  features_tr?: string[]
  features_en?: string[]
  process_tr?: string
  process_en?: string
  icon?: string
  cover_image?: string
  display_order: number
  is_published: boolean
  seo_title_tr?: string
  seo_title_en?: string
  seo_description_tr?: string
  seo_description_en?: string
  created_at: string
  updated_at: string
}

export type ServiceCategory =
  | 'film_production'
  | 'digital_technology'
  | 'marketing_growth'
  | 'experiential_products'

export interface Project {
  id: string
  slug: string
  title_tr: string
  title_en: string
  client_name?: string
  service_ids?: string[]
  description_tr?: string
  description_en?: string
  cover_image: string
  images?: string[]
  video_url?: string
  project_date?: string
  is_published: boolean
  featured: boolean
  display_order: number
  created_at: string
  updated_at: string
}

export interface Article {
  id: string
  slug: string
  title_tr: string
  title_en: string
  excerpt_tr?: string
  excerpt_en?: string
  content_tr: string
  content_en: string
  cover_image: string
  author: string
  category?: ArticleCategory
  tags?: string[]
  is_published: boolean
  published_at?: string
  seo_title_tr?: string
  seo_title_en?: string
  seo_description_tr?: string
  seo_description_en?: string
  created_at: string
  updated_at: string
}

export type ArticleCategory =
  | 'contemporary_art'
  | 'digital_art'
  | 'behind_artwork'
  | 'production'
  | 'creative_technology'
  | 'visual_culture'

export interface ContactRequest {
  id: string
  type: 'general' | 'service_quote' | 'artwork_inquiry'
  full_name: string
  company_name?: string
  email: string
  phone?: string
  service_id?: string
  artwork_id?: string
  message: string
  budget_range?: string
  preferred_contact?: 'email' | 'phone' | 'whatsapp'
  status: 'new' | 'contacted' | 'quoted' | 'closed'
  admin_notes?: string
  created_at: string
  updated_at: string
}

export interface SiteSetting {
  id: string
  key: string
  value_tr?: string
  value_en?: string
  type: 'text' | 'textarea' | 'image' | 'url' | 'boolean' | 'json'
  category: string
  updated_at: string
}

// Form types
export interface CheckoutFormData {
  customer_name: string
  customer_email: string
  customer_phone: string
  shipping_address: string
  shipping_city: string
  shipping_postal_code?: string
  billing_same_as_shipping: boolean
  billing_address?: string
  billing_city?: string
  billing_postal_code?: string
  customer_notes?: string
  accept_terms: boolean
  accept_privacy: boolean
}

export interface ContactFormData {
  full_name: string
  company_name?: string
  email: string
  phone?: string
  message: string
  service_id?: string
  budget_range?: string
  preferred_contact?: 'email' | 'phone' | 'whatsapp'
}

// API Response types
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

// Pagination
export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  per_page: number
  total_pages: number
}

// Filter and sort
export interface ArtworkFilters {
  collection_id?: string
  price_min?: number
  price_max?: number
  available_only?: boolean
  featured?: boolean
  search?: string
}

export interface SortOption {
  field: string
  direction: 'asc' | 'desc'
}
