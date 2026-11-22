# SpionPictures - Art Gallery & Creative Media Studio

Modern, minimal ve lüks bir sanat galerisi e-ticaret sitesi. İki dilli (TR/EN), SEO optimize, responsive tasarım.

## 🚀 Hızlı Başlangıç

```bash
# Dependencies
npm install

# Development
npm run dev

# Production build
npm run build
npm run start
```

## 📁 Proje Yapısı

```
SpionPictures/
├── app/                    # Next.js 14 App Router
│   ├── (pages)/           # Public pages (TR)
│   ├── en/                # English pages
│   ├── admin/             # Admin panel
│   ├── api/               # API routes
│   ├── globals.css        # Global styles + animations
│   ├── layout.tsx         # Root layout
│   ├── robots.ts          # SEO robots
│   └── sitemap.ts         # Dynamic sitemap
├── components/            # React components
├── lib/                   # Utilities & config
├── database/              # SQL schemas & migrations
│   ├── schema.sql
│   └── migrations/
├── public/                # Static files
└── types/                 # TypeScript types
```

## ✨ Özellikler

### 🌐 Sayfa Yapısı
- **Ana Sayfa** - Hero, featured artworks
- **Eserler** - Gallery with Shopier integration
- **Koleksiyonlar** - Curated collections
- **Hizmetler** - 60 services, cart system, PDF invoice
- **Projeler** - Portfolio showcase
- **Journal** - Blog/articles
- **Hakkımızda** - About page
- **İletişim** - Contact form (working)
- **Admin Panel** - Upload & manage artworks

### 🛒 E-Ticaret
- Shopier "Buy Now" buttons
- Services cart (localStorage)
- PDF invoice generation
- Stock management
- Price display (₺ TRY)

### 🎨 Tasarım
- Minimal luxury aesthetic
- Responsive (mobile-first)
- Smooth animations
- Custom fonts (Inter, Space Grotesk)
- Dark/light sections

### 🔍 SEO
- Dynamic sitemap
- Robots.txt
- Meta tags (OG, Twitter)
- hreflang (TR/EN)
- Canonical URLs
- Structured data ready

### 🌍 i18n
- Turkish (default)
- English (`/en/*`)
- Separate carts per language

## 🗄️ Veritabanı

**Supabase PostgreSQL**

### Mevcut Tablolar
- `artworks` - Art pieces
- `artwork_images` - Images
- `collections` - Collections
- `collection_artworks` - Relationships

### Migration Gerekli
```sql
-- 1. Shopier integration
-- Run: /database/migrations/001_add_shopier_url.sql

-- 2. Contact form
-- Run: /database/migrations/002_create_contact_messages.sql
```

## 🔧 Teknolojiler

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **PDF**: jsPDF
- **Deployment**: Vercel (önerilen)

## 🌟 Öne Çıkan Özellikler

### Hizmetler Sayfası
- Şık kategori dropdown menü
- 60+ hizmet (5 kategori)
- Sepet modal (overlay)
- PDF fatura indirme
- Smooth animasyonlar
- LocalStorage persistence

### Contact Form
- Backend API route
- Supabase integration
- Success/error messages
- Form validation
- Loading states

### Admin Panel
- Artwork upload
- Image management
- Shopier URL input
- Edit existing artworks
- Stock control

## 🎯 Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
NEXT_PUBLIC_SITE_URL=https://spionpictures.com
```

## 📦 Deployment

### Vercel (Önerilen)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Manuel Deployment

```bash
# Build
npm run build

# Start
npm run start
```

## 🚀 Launch Checklist

### Öncelik 1 (Kritik)
- [ ] Run database migrations
- [ ] Set environment variables
- [ ] Deploy to production
- [ ] Connect domain
- [ ] Verify SSL

### Öncelik 2 (İçerik)
- [ ] Upload artworks
- [ ] Create collections
- [ ] Add projects
- [ ] Write journal articles
- [ ] Update about page

### Öncelik 3 (Test)
- [ ] Test all pages
- [ ] Mobile responsiveness
- [ ] Form submissions
- [ ] PDF generation
- [ ] Shopier buttons

## 📚 Dokümantasyon

- `SITE_READY.md` - Detaylı özellik açıklaması
- `LAUNCH_CHECKLIST.md` - Yayın hazırlık listesi
- `SHOPIER_READY.md` - Shopier entegrasyon kılavuzu

## 🎨 Tasarım Sistemi

### Renkler
```css
--primary: #000000      /* Siyah */
--background: #F5F5F5   /* Açık Gri */
--pure-white: #FFFFFF   /* Beyaz */
--border: #E5E5E5       /* Border */
--dark-section: #1A1A1A /* Koyu Gri */
```

### Fontlar
- **Sans**: Inter (body text)
- **Display**: Space Grotesk (headings)

## 🔐 Güvenlik

- Supabase RLS enabled
- Environment variables
- Input sanitization
- HTTPS (Vercel automatic)
- No exposed secrets

## 📱 Responsive Breakpoints

- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## 📊 Performans

- Next.js optimization
- Image optimization
- Code splitting
- Server-side rendering
- Static generation

## 🤝 Katkıda Bulunma

1. Fork the repo
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open Pull Request

## 📄 Lisans

Proprietary - Spion Pictures © 2024

## 📞 İletişim

- **Web**: https://spionpictures.com
- **Email**: info@spionpictures.com
- **Phone**: +90 552 551 51 84
- **Instagram**: [@spionmedia](https://instagram.com/spionmedia)

---

**Status**: ✅ Production Ready (migration needed)

**Version**: 1.0.0

**Last Updated**: ${new Date().toLocaleDateString('tr-TR')}

Made with ❤️ by Kiro AI
