# Spion Pictures - Project Structure

## 📁 Proje Dosya Yapısı

\`\`\`
SpionPictures/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx               # Root layout (fonts, metadata)
│   ├── page.tsx                 # Ana sayfa (Hero, Featured, Services)
│   ├── globals.css              # Global styles & Tailwind
│   ├── robots.ts                # robots.txt generator
│   ├── sitemap.ts               # sitemap.xml generator
│   │
│   ├── artworks/                # Sanat eserleri
│   │   ├── page.tsx            # Eser listesi
│   │   └── [slug]/             # Eser detay sayfası (TODO)
│   │
│   ├── collections/             # Koleksiyonlar (TODO)
│   ├── services/                # Spion Media hizmetleri (TODO)
│   ├── projects/                # Portföy (TODO)
│   ├── journal/                 # Blog/Journal (TODO)
│   ├── about/                   # Hakkımızda (TODO)
│   ├── contact/                 # İletişim (TODO)
│   ├── cart/                    # Sepet (TODO)
│   ├── checkout/                # Ödeme (TODO)
│   ├── admin/                   # Yönetim paneli (TODO)
│   │
│   └── api/                     # API Routes
│       └── payment/            # Ödeme endpoint'leri (TODO)
│
├── components/                   # React Components
│   ├── Header.tsx               # ✅ Navigation (sticky, responsive)
│   ├── Footer.tsx               # ✅ Footer (links, social)
│   │
│   ├── home/                    # Ana sayfa bileşenleri
│   │   └── Hero.tsx            # ✅ Hero section
│   │
│   ├── artworks/                # Eser bileşenleri (TODO)
│   ├── cart/                    # Sepet bileşenleri (TODO)
│   ├── admin/                   # Admin bileşenleri (TODO)
│   └── ui/                      # Reusable UI components (TODO)
│
├── lib/                          # Utility Functions & Integrations
│   ├── utils.ts                 # ✅ Helper functions
│   ├── structured-data.ts       # ✅ JSON-LD generators
│   │
│   ├── supabase/
│   │   └── client.ts           # ✅ Supabase client config
│   │
│   └── payment/
│       └── iyzico.ts           # ✅ iyzico integration
│
├── types/                        # TypeScript Type Definitions
│   └── index.ts                 # ✅ All database & app types
│
├── database/                     # Database Schemas
│   └── schema.sql               # ✅ PostgreSQL complete schema
│
├── public/                       # Static Assets
│   ├── logo-primary.svg         # ✅ Ana logo
│   ├── logo-symbol.svg          # ✅ Monogram
│   ├── favicon.svg              # ✅ Favicon
│   ├── favicon.ico              # (Needs generation)
│   ├── favicon-32x32.png        # (Needs generation)
│   ├── apple-touch-icon.png     # (Needs generation)
│   └── site.webmanifest         # ✅ PWA manifest
│
├── .env.local.example           # ✅ Environment variables template
├── .gitignore                   # ✅ Git ignore rules
├── package.json                 # ✅ Dependencies
├── tsconfig.json                # ✅ TypeScript config
├── tailwind.config.ts           # ✅ Tailwind design system
├── next.config.mjs              # ✅ Next.js config
├── postcss.config.mjs           # ✅ PostCSS config
│
├── README.md                    # ✅ Kurulum ve kullanım
├── DEPLOYMENT.md                # ✅ Production deployment guide
├── PROGRESS.md                  # ✅ Development progress tracker
└── PROJECT_STRUCTURE.md         # ✅ Bu dosya
\`\`\`

## 📊 Dosya İstatistikleri

| Kategori | Dosya Sayısı | Durum |
|----------|-------------|--------|
| TypeScript/TSX | 11 | ✅ Core tamamlandı |
| SQL Schema | 1 | ✅ Complete |
| SVG Assets | 3 | ✅ Logo & favicon |
| Config Files | 5 | ✅ Tümü yapılandırıldı |
| Documentation | 4 | ✅ Comprehensive |
| **TOPLAM** | **24+** | **Foundation Complete** |

## 🎯 Tamamlanan Dosyalar

### Core Application
- ✅ `app/layout.tsx` - Root layout, fonts, metadata
- ✅ `app/page.tsx` - Ana sayfa (Hero + sections)
- ✅ `app/globals.css` - Global styles, Tailwind, custom CSS
- ✅ `app/artworks/page.tsx` - Artwork listing (skeleton)

### Components
- ✅ `components/Header.tsx` - Full responsive navigation
- ✅ `components/Footer.tsx` - Footer with links and language switcher
- ✅ `components/home/Hero.tsx` - Homepage hero section

### Libraries & Utils
- ✅ `lib/utils.ts` - 20+ helper functions
- ✅ `lib/supabase/client.ts` - Database client setup
- ✅ `lib/payment/iyzico.ts` - Payment integration
- ✅ `lib/structured-data.ts` - SEO JSON-LD helpers

### Database & Types
- ✅ `database/schema.sql` - Complete PostgreSQL schema (15 tables)
- ✅ `types/index.ts` - All TypeScript type definitions

### Configuration
- ✅ `package.json` - Dependencies & scripts
- ✅ `tsconfig.json` - TypeScript configuration
- ✅ `tailwind.config.ts` - Design system (colors, fonts)
- ✅ `next.config.mjs` - Next.js optimizations
- ✅ `postcss.config.mjs` - PostCSS setup

### Assets & SEO
- ✅ `public/logo-primary.svg` - Main logo (vector)
- ✅ `public/logo-symbol.svg` - Monogram (vector)
- ✅ `public/favicon.svg` - Favicon (vector)
- ✅ `public/site.webmanifest` - PWA manifest
- ✅ `app/robots.ts` - robots.txt generator
- ✅ `app/sitemap.ts` - Sitemap generator

### Documentation
- ✅ `README.md` - Complete setup & usage guide
- ✅ `DEPLOYMENT.md` - Production deployment checklist
- ✅ `PROGRESS.md` - Development progress tracking
- ✅ `PROJECT_STRUCTURE.md` - This file

### Environment & Git
- ✅ `.env.local.example` - Environment variables template
- ✅ `.gitignore` - Git ignore rules

## 🚧 Henüz Yapılmamış Dosyalar

### Pages (Priority 1)
- [ ] `app/artworks/[slug]/page.tsx` - Artwork detail
- [ ] `app/collections/page.tsx` - Collections list
- [ ] `app/collections/[slug]/page.tsx` - Collection detail
- [ ] `app/cart/page.tsx` - Shopping cart
- [ ] `app/checkout/page.tsx` - Checkout flow

### Admin Panel (Priority 2)
- [ ] `app/admin/page.tsx` - Dashboard
- [ ] `app/admin/artworks/page.tsx` - Artwork management
- [ ] `app/admin/orders/page.tsx` - Order management
- [ ] `app/admin/login/page.tsx` - Admin login

### Services & Content (Priority 3)
- [ ] `app/services/page.tsx` - Services overview
- [ ] `app/services/[slug]/page.tsx` - Service detail
- [ ] `app/projects/page.tsx` - Portfolio
- [ ] `app/journal/page.tsx` - Blog listing
- [ ] `app/about/page.tsx` - About page
- [ ] `app/contact/page.tsx` - Contact form

### Components (Priority 1-2)
- [ ] `components/artworks/ArtworkCard.tsx`
- [ ] `components/artworks/ArtworkGrid.tsx`
- [ ] `components/artworks/ArtworkFilters.tsx`
- [ ] `components/cart/CartItem.tsx`
- [ ] `components/checkout/CheckoutForm.tsx`
- [ ] `components/ui/Button.tsx`
- [ ] `components/ui/Input.tsx`
- [ ] `components/ui/Modal.tsx`

### API Routes (Priority 1)
- [ ] `app/api/payment/initialize/route.ts`
- [ ] `app/api/payment/callback/route.ts`
- [ ] `app/api/cart/route.ts`
- [ ] `app/api/orders/route.ts`

## 📦 Dependencies

### Production Dependencies
\`\`\`json
{
  "next": "^14.2.0",
  "react": "^18.3.0",
  "react-dom": "^18.3.0",
  "@supabase/supabase-js": "^2.45.0",
  "@supabase/auth-helpers-nextjs": "^0.10.0",
  "framer-motion": "^11.3.0",
  "clsx": "^2.1.0",
  "lucide-react": "^0.400.0"
}
\`\`\`

### Dev Dependencies
\`\`\`json
{
  "typescript": "^5",
  "tailwindcss": "^3.4.0",
  "postcss": "^8",
  "autoprefixer": "^10.4.0",
  "@types/node": "^20",
  "@types/react": "^18",
  "@types/react-dom": "^18",
  "eslint": "^8",
  "eslint-config-next": "^14.2.0"
}
\`\`\`

## 🗄 Database Schema

### Tables (15 total)
1. **profiles** - User profiles & roles
2. **collections** - Art collections
3. **artworks** - Art pieces
4. **artwork_images** - Artwork photos
5. **product_variants** - Sizes & frame options
6. **editions** - Edition numbering & tracking
7. **inventory_reservations** - Stock locking
8. **cart_items** - Shopping cart
9. **orders** - Order records
10. **order_items** - Order line items
11. **payments** - Payment transactions
12. **services** - Spion Media services
13. **projects** - Portfolio items
14. **articles** - Blog posts
15. **contact_requests** - Contact form submissions
16. **site_settings** - Site configuration

## 🎨 Design System

### Colors
\`\`\`js
{
  background: '#F8F8F6',    // Açık gri arka plan
  primary: '#111111',        // Siyah (başlıklar)
  purewhite: '#FFFFFF',      // Beyaz
  secondarytext: '#777777',  // Gri (ikincil metin)
  border: '#E5E5E5',         // Açık gri çizgiler
  darksection: '#151515',    // Koyu bölümler
}
\`\`\`

### Typography
- **Display Font:** Space Grotesk (headings)
- **Body Font:** Inter (paragraphs)

### Breakpoints
- **sm:** 640px
- **md:** 768px
- **lg:** 1024px
- **xl:** 1280px
- **2xl:** 1536px

## 🔐 Environment Variables

### Required for Development
\`\`\`env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
\`\`\`

### Required for Production
\`\`\`env
# All above +
IYZICO_API_KEY=
IYZICO_SECRET_KEY=
IYZICO_BASE_URL=
NEXT_PUBLIC_SITE_URL=
SMTP_HOST=
SMTP_USER=
SMTP_PASS=
NEXT_PUBLIC_GA_ID=
\`\`\`

## 📈 Code Statistics

| Metric | Value |
|--------|-------|
| Total Lines of Code | ~3,500+ |
| TypeScript Files | 11 |
| React Components | 3 (+ more to come) |
| Database Tables | 15 |
| API Endpoints | 0 (skeleton ready) |
| Documentation Pages | 4 |
| Logo/Icon Files | 3 SVG |

## 🎯 Next Development Steps

1. **Install Node.js** (if not installed)
2. Run `npm install`
3. Create Supabase project
4. Run database schema
5. Configure `.env.local`
6. Run `npm run dev`
7. Start building artwork components

## 📚 Key Documentation

- **[README.md](./README.md)** - Kurulum ve temel kullanım
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - Production deployment
- **[PROGRESS.md](./PROGRESS.md)** - Development progress
- **[database/schema.sql](./database/schema.sql)** - Database structure

---

**Last Updated:** 2024  
**Status:** ✅ Foundation Complete, Ready for Development  
**Next Phase:** Core E-Commerce Implementation
