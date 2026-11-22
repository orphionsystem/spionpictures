-- SPION PICTURES DATABASE SCHEMA
-- PostgreSQL / Supabase

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT DEFAULT 'customer' CHECK (role IN ('customer', 'admin')),
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Collections table
CREATE TABLE IF NOT EXISTS public.collections (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  name_tr TEXT NOT NULL,
  name_en TEXT NOT NULL,
  description_tr TEXT,
  description_en TEXT,
  story_tr TEXT,
  story_en TEXT,
  cover_image TEXT,
  display_order INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  seo_title_tr TEXT,
  seo_title_en TEXT,
  seo_description_tr TEXT,
  seo_description_en TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Artworks table
CREATE TABLE IF NOT EXISTS public.artworks (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  collection_id UUID REFERENCES public.collections(id) ON DELETE SET NULL,
  title_tr TEXT NOT NULL,
  title_en TEXT NOT NULL,
  artist_name TEXT NOT NULL,
  description_tr TEXT,
  description_en TEXT,
  story_tr TEXT,
  story_en TEXT,
  technique_tr TEXT,
  technique_en TEXT,
  print_info_tr TEXT,
  print_info_en TEXT,
  base_price DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'TRY' CHECK (currency IN ('TRY', 'USD', 'EUR')),
  total_editions INTEGER DEFAULT 1,
  sold_editions INTEGER DEFAULT 0,
  display_order INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  seo_title_tr TEXT,
  seo_title_en TEXT,
  seo_description_tr TEXT,
  seo_description_en TEXT,
  seo_keywords TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Artwork images table
CREATE TABLE IF NOT EXISTS public.artwork_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  artwork_id UUID REFERENCES public.artworks(id) ON DELETE CASCADE NOT NULL,
  image_url TEXT NOT NULL,
  alt_text_tr TEXT,
  alt_text_en TEXT,
  display_order INTEGER DEFAULT 0,
  is_primary BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Product variants (size, frame options)
CREATE TABLE IF NOT EXISTS public.product_variants (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  artwork_id UUID REFERENCES public.artworks(id) ON DELETE CASCADE NOT NULL,
  size_name TEXT NOT NULL, -- e.g., "30x40cm", "50x70cm"
  width_cm INTEGER NOT NULL,
  height_cm INTEGER NOT NULL,
  frame_type TEXT CHECK (frame_type IN ('framed', 'unframed', 'both')),
  price_unframed DECIMAL(10, 2),
  price_framed DECIMAL(10, 2),
  stock_quantity INTEGER DEFAULT 0,
  is_available BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Editions tracking
CREATE TABLE IF NOT EXISTS public.editions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  artwork_id UUID REFERENCES public.artworks(id) ON DELETE CASCADE NOT NULL,
  edition_number INTEGER NOT NULL,
  is_sold BOOLEAN DEFAULT false,
  is_reserved BOOLEAN DEFAULT false,
  order_id UUID,
  sold_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(artwork_id, edition_number)
);

-- Inventory reservations (prevent double-booking)
CREATE TABLE IF NOT EXISTS public.inventory_reservations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  artwork_id UUID REFERENCES public.artworks(id) ON DELETE CASCADE NOT NULL,
  variant_id UUID REFERENCES public.product_variants(id) ON DELETE CASCADE,
  edition_id UUID REFERENCES public.editions(id) ON DELETE SET NULL,
  session_id TEXT NOT NULL,
  reserved_until TIMESTAMP WITH TIME ZONE NOT NULL,
  is_completed BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Cart items
CREATE TABLE IF NOT EXISTS public.cart_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  session_id TEXT, -- For guest users
  artwork_id UUID REFERENCES public.artworks(id) ON DELETE CASCADE NOT NULL,
  variant_id UUID REFERENCES public.product_variants(id) ON DELETE CASCADE NOT NULL,
  quantity INTEGER DEFAULT 1 CHECK (quantity > 0),
  frame_option TEXT CHECK (frame_option IN ('framed', 'unframed')),
  price_at_add DECIMAL(10, 2) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Orders table
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_number TEXT UNIQUE NOT NULL,
  user_id UUID REFERENCES public.profiles(id) ON DELETE SET NULL,
  
  -- Customer info
  customer_email TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  
  -- Shipping address
  shipping_address TEXT NOT NULL,
  shipping_city TEXT NOT NULL,
  shipping_postal_code TEXT,
  shipping_country TEXT DEFAULT 'TR',
  
  -- Billing address
  billing_address TEXT,
  billing_city TEXT,
  billing_postal_code TEXT,
  billing_country TEXT DEFAULT 'TR',
  
  -- Order totals
  subtotal DECIMAL(10, 2) NOT NULL,
  tax_amount DECIMAL(10, 2) DEFAULT 0,
  shipping_cost DECIMAL(10, 2) DEFAULT 0,
  total_amount DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'TRY',
  
  -- Status
  status TEXT DEFAULT 'pending_payment' CHECK (status IN (
    'pending_payment', 
    'paid', 
    'preparing', 
    'printing', 
    'shipped', 
    'delivered', 
    'cancelled', 
    'refunded'
  )),
  
  -- Payment
  payment_method TEXT,
  payment_status TEXT DEFAULT 'pending' CHECK (payment_status IN ('pending', 'completed', 'failed', 'refunded')),
  payment_transaction_id TEXT,
  
  -- Shipping
  shipping_method TEXT,
  tracking_number TEXT,
  shipped_at TIMESTAMP WITH TIME ZONE,
  delivered_at TIMESTAMP WITH TIME ZONE,
  
  -- Notes
  customer_notes TEXT,
  admin_notes TEXT,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Order items table
CREATE TABLE IF NOT EXISTS public.order_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE NOT NULL,
  artwork_id UUID REFERENCES public.artworks(id) ON DELETE SET NULL NOT NULL,
  variant_id UUID REFERENCES public.product_variants(id) ON DELETE SET NULL NOT NULL,
  edition_id UUID REFERENCES public.editions(id) ON DELETE SET NULL,
  
  -- Product snapshot at order time
  artwork_title TEXT NOT NULL,
  artist_name TEXT NOT NULL,
  size_name TEXT NOT NULL,
  frame_option TEXT NOT NULL,
  edition_number INTEGER,
  
  quantity INTEGER DEFAULT 1,
  unit_price DECIMAL(10, 2) NOT NULL,
  total_price DECIMAL(10, 2) NOT NULL,
  
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Payments table
CREATE TABLE IF NOT EXISTS public.payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES public.orders(id) ON DELETE CASCADE NOT NULL,
  payment_provider TEXT NOT NULL, -- 'iyzico', 'paytr'
  transaction_id TEXT UNIQUE,
  conversation_id TEXT,
  amount DECIMAL(10, 2) NOT NULL,
  currency TEXT DEFAULT 'TRY',
  status TEXT NOT NULL CHECK (status IN ('pending', 'success', 'failed', 'refunded')),
  payment_method TEXT, -- 'credit_card', 'debit_card'
  card_last_four TEXT,
  error_message TEXT,
  raw_response JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Services table
CREATE TABLE IF NOT EXISTS public.services (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL CHECK (category IN (
    'film_production',
    'digital_technology',
    'marketing_growth',
    'experiential_products'
  )),
  title_tr TEXT NOT NULL,
  title_en TEXT NOT NULL,
  subtitle_tr TEXT,
  subtitle_en TEXT,
  description_tr TEXT NOT NULL,
  description_en TEXT NOT NULL,
  features_tr TEXT[],
  features_en TEXT[],
  process_tr TEXT,
  process_en TEXT,
  icon TEXT,
  cover_image TEXT,
  display_order INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  seo_title_tr TEXT,
  seo_title_en TEXT,
  seo_description_tr TEXT,
  seo_description_en TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Projects/Portfolio table
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title_tr TEXT NOT NULL,
  title_en TEXT NOT NULL,
  client_name TEXT,
  service_ids UUID[],
  description_tr TEXT,
  description_en TEXT,
  cover_image TEXT NOT NULL,
  images TEXT[],
  video_url TEXT,
  project_date DATE,
  is_published BOOLEAN DEFAULT true,
  featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Journal/Blog articles table
CREATE TABLE IF NOT EXISTS public.articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,
  title_tr TEXT NOT NULL,
  title_en TEXT NOT NULL,
  excerpt_tr TEXT,
  excerpt_en TEXT,
  content_tr TEXT NOT NULL,
  content_en TEXT NOT NULL,
  cover_image TEXT NOT NULL,
  author TEXT DEFAULT 'Spion Pictures',
  category TEXT CHECK (category IN (
    'contemporary_art',
    'digital_art',
    'behind_artwork',
    'production',
    'creative_technology',
    'visual_culture'
  )),
  tags TEXT[],
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  seo_title_tr TEXT,
  seo_title_en TEXT,
  seo_description_tr TEXT,
  seo_description_en TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact/Quote requests table
CREATE TABLE IF NOT EXISTS public.contact_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  type TEXT DEFAULT 'general' CHECK (type IN ('general', 'service_quote', 'artwork_inquiry')),
  full_name TEXT NOT NULL,
  company_name TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  service_id UUID REFERENCES public.services(id) ON DELETE SET NULL,
  artwork_id UUID REFERENCES public.artworks(id) ON DELETE SET NULL,
  message TEXT NOT NULL,
  budget_range TEXT,
  preferred_contact TEXT CHECK (preferred_contact IN ('email', 'phone', 'whatsapp')),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'quoted', 'closed')),
  admin_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Site settings table
CREATE TABLE IF NOT EXISTS public.site_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key TEXT UNIQUE NOT NULL,
  value_tr TEXT,
  value_en TEXT,
  type TEXT DEFAULT 'text' CHECK (type IN ('text', 'textarea', 'image', 'url', 'boolean', 'json')),
  category TEXT DEFAULT 'general',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_artworks_slug ON public.artworks(slug);
CREATE INDEX idx_artworks_collection ON public.artworks(collection_id);
CREATE INDEX idx_artworks_published ON public.artworks(is_published);
CREATE INDEX idx_collections_slug ON public.collections(slug);
CREATE INDEX idx_orders_user ON public.orders(user_id);
CREATE INDEX idx_orders_status ON public.orders(status);
CREATE INDEX idx_orders_number ON public.orders(order_number);
CREATE INDEX idx_cart_user ON public.cart_items(user_id);
CREATE INDEX idx_cart_session ON public.cart_items(session_id);
CREATE INDEX idx_editions_artwork ON public.editions(artwork_id);
CREATE INDEX idx_editions_sold ON public.editions(is_sold);
CREATE INDEX idx_services_category ON public.services(category);
CREATE INDEX idx_articles_published ON public.articles(is_published, published_at);
CREATE INDEX idx_projects_published ON public.projects(is_published);

-- Row Level Security (RLS) Policies
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.artworks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.cart_items ENABLE ROW LEVEL SECURITY;

-- Public read access to published artworks and collections
CREATE POLICY "Public artworks are viewable by everyone" ON public.artworks
  FOR SELECT USING (is_published = true);

CREATE POLICY "Public collections are viewable by everyone" ON public.collections
  FOR SELECT USING (is_published = true);

-- Users can view their own orders
CREATE POLICY "Users can view own orders" ON public.orders
  FOR SELECT USING (auth.uid() = user_id);

-- Users can manage their own cart
CREATE POLICY "Users can manage own cart" ON public.cart_items
  FOR ALL USING (auth.uid() = user_id);

-- Admin policies (create admin role first)
CREATE POLICY "Admins can manage all content" ON public.artworks
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Triggers for updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_artworks_updated_at BEFORE UPDATE ON public.artworks
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_collections_updated_at BEFORE UPDATE ON public.collections
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_orders_updated_at BEFORE UPDATE ON public.orders
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert default site settings
INSERT INTO public.site_settings (key, value_tr, value_en, type, category) VALUES
  ('site_name', 'Spion Pictures', 'Spion Pictures', 'text', 'general'),
  ('site_tagline_tr', 'Sanat, ekranda bitmez.', null, 'text', 'general'),
  ('site_tagline_en', null, 'Art Goes Beyond the Screen.', 'text', 'general'),
  ('contact_email', 'info@spionpictures.com', 'info@spionpictures.com', 'text', 'contact'),
  ('contact_phone', '+90 552 551 51 84', '+90 552 551 51 84', 'text', 'contact'),
  ('instagram_handle', '@spionmedia', '@spionmedia', 'text', 'social'),
  ('shipping_info_tr', 'Siparişler 7-14 iş günü içinde hazırlanır ve kargoya verilir.', null, 'textarea', 'shipping'),
  ('return_policy_tr', 'Ürün hasarlı veya hatalı gelirse 14 gün içinde iade kabul edilir.', null, 'textarea', 'legal')
ON CONFLICT (key) DO NOTHING;
