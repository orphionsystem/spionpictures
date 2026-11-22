# Deployment Rehberi

Bu doküman, Spion Pictures web sitesini production ortamına deploy etmek için gerekli adımları içerir.

## ⚠️ Production Öncesi Kontrol Listesi

### 1. Yasal ve Ticari Hazırlık

- [ ] E-ticaret şirket kaydı tamamlandı
- [ ] ETBİS kaydı yapıldı (Elektronik Ticaret Bilgi Sistemi)
- [ ] Vergi kimlik numarası alındı
- [ ] Mesafeli Satış Sözleşmesi hukukçu tarafından onaylandı
- [ ] KVKK Aydınlatma Metni hazırlandı
- [ ] Gizlilik Politikası ve Kullanım Koşulları güncellendi
- [ ] İade ve teslimat koşulları netleştirildi

### 2. Domain ve Hosting

- [ ] Domain adı satın alındı
- [ ] SSL sertifikası aktif
- [ ] DNS ayarları yapıldı
- [ ] Email hesapları oluşturuldu (info@, orders@, support@)

### 3. Supabase Production Kurulumu

1. Supabase production projesi oluştur
2. Database'i production moduna al
3. Row Level Security (RLS) politikalarını kontrol et
4. Backup stratejisi belirle
5. Production environment variables'ı güvenli şekilde sakla

### 4. Ödeme Sistemi (iyzico)

- [ ] iyzico üye işyeri başvurusu yapıldı
- [ ] Üye işyeri onayı alındı
- [ ] Banka hesabı iyzico'ya tanıtıldı
- [ ] Production API keys alındı
- [ ] Test ödemeleri başarıyla tamamlandı
- [ ] Webhook URL'i iyzico'ya tanıtıldı
- [ ] 3D Secure aktif

**iyzico Production Environment Variables:**
\`\`\`env
IYZICO_API_KEY=production_api_key
IYZICO_SECRET_KEY=production_secret_key
IYZICO_BASE_URL=https://api.iyzipay.com
\`\`\`

### 5. Kargo Entegrasyonu

- [ ] Kargo firması seçildi (Aras, Yurtiçi, MNG, PTT vb.)
- [ ] Kargo anlaşması imzalandı
- [ ] Kargo fiyatları belirlendi
- [ ] Kargo takip sistemi entegre edildi (opsiyonel)

### 6. Baskı ve Üretim

- [ ] Fine Art baskı atölyesi ile anlaşma yapıldı
- [ ] Baskı malzemeleri ve kaliteleri belirlendi
- [ ] Çerçeve seçenekleri netleştirildi
- [ ] Üretim süreleri planlandı
- [ ] Ambalaj malzemeleri temin edildi
- [ ] Sertifika tasarımı hazırlandı

### 7. SEO ve Analytics

- [ ] Google Search Console kuruldu
- [ ] Google Analytics 4 kuruldu
- [ ] Google Merchant Center (opsiyonel)
- [ ] Sitemap submit edildi
- [ ] robots.txt kontrol edildi

### 8. Güvenlik

- [ ] Environment variables production'da güvenli şekilde saklanıyor
- [ ] API keys client-side'da expose edilmiyor
- [ ] HTTPS zorunlu
- [ ] Rate limiting aktif
- [ ] CORS ayarları doğru
- [ ] SQL injection koruması
- [ ] XSS koruması
- [ ] CSRF token kullanımı

## 🚀 Vercel Deployment

### Adım 1: GitHub Repository

\`\`\`bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/spion-pictures.git
git push -u origin main
\`\`\`

### Adım 2: Vercel'e Deploy

1. [Vercel Dashboard](https://vercel.com/dashboard)'a git
2. "Add New" > "Project"
3. GitHub repository'yi import et
4. Framework Preset: Next.js (otomatik seçilir)
5. Environment Variables ekle (aşağıdaki listeye göre)
6. Deploy'a tıkla

### Adım 3: Environment Variables

Vercel Project Settings > Environment Variables:

\`\`\`env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_production_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_production_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_production_service_key

# iyzico Production
IYZICO_API_KEY=production_key
IYZICO_SECRET_KEY=production_secret
IYZICO_BASE_URL=https://api.iyzipay.com

# Site
NEXT_PUBLIC_SITE_URL=https://spionpictures.com
NEXT_PUBLIC_SITE_NAME=Spion Pictures

# Email (SMTP)
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=orders@spionpictures.com
SMTP_PASS=your_password
SMTP_FROM=Spion Pictures <orders@spionpictures.com>

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
\`\`\`

### Adım 4: Custom Domain

1. Vercel Project Settings > Domains
2. Domain ekle: spionpictures.com
3. DNS ayarlarını yap (Vercel'in verdiği A kaydı)
4. SSL otomatik aktif olacak

### Adım 5: Webhook URL'lerini Güncelle

iyzico dashboard'da callback URL'i güncelle:
\`\`\`
https://spionpictures.com/api/payment/callback
\`\`\`

## 🔄 Alternatif Deployment Platformları

### Netlify

\`\`\`bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
\`\`\`

### Railway

1. [Railway](https://railway.app) hesabı oluştur
2. GitHub'dan proje import et
3. Environment variables ekle
4. Deploy

### DigitalOcean App Platform

1. [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)
2. GitHub bağla
3. Build command: `npm run build`
4. Start command: `npm start`
5. Environment variables ekle

## 📊 Production Monitoring

### Önerilen Monitoring Tools

- **Vercel Analytics:** Build-in, ücretsiz
- **Sentry:** Error tracking
- **LogRocket:** Session replay
- **Hotjar:** User behavior

### Metrics to Monitor

- Response time
- Error rate
- Conversion rate
- Cart abandonment rate
- Page load speed
- Core Web Vitals

## 🔐 Backup Stratejisi

### Supabase Database Backup

1. Supabase Dashboard > Database > Backups
2. Daily automatic backups enabled
3. Manual backup before major updates

### Code Backup

- GitHub repository (primary)
- Local backup
- Vercel deployment history

## 📧 Email Bildirimleri

Production'da email gönderimi için SMTP servis gerekli:

**Önerilen Servisler:**
- SendGrid
- Amazon SES
- Mailgun
- Postmark

### Email Template Listesi

- [ ] Sipariş onayı
- [ ] Ödeme alındı
- [ ] Ürün hazırlanıyor
- [ ] Kargoya verildi
- [ ] Teslim edildi
- [ ] İade talebi
- [ ] Hizmet teklifi cevabı
- [ ] İletişim formu otomatik yanıtı

## 🧪 Pre-Launch Testing

### Test Scenarios

- [ ] Complete purchase flow (end-to-end)
- [ ] iyzico sandbox payment test
- [ ] Cart functionality
- [ ] Edition stock management
- [ ] Mobile responsive test
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Load testing
- [ ] Security audit
- [ ] SEO audit (Lighthouse)
- [ ] Accessibility audit (WCAG 2.1)

### Test Checklist

- [ ] Homepage loads correctly
- [ ] Navigation works on all devices
- [ ] Artwork images load properly
- [ ] Add to cart works
- [ ] Checkout form validation
- [ ] Payment redirects correctly
- [ ] Order confirmation email sent
- [ ] Admin panel login
- [ ] Admin can manage artworks
- [ ] Language switcher works
- [ ] All forms have CSRF protection
- [ ] SSL is enforced

## 📱 Post-Launch Tasks

### Week 1

- [ ] Monitor error logs
- [ ] Check payment success rate
- [ ] Verify email deliverability
- [ ] Test customer support flow
- [ ] Monitor website performance

### Month 1

- [ ] Analyze user behavior (GA4)
- [ ] Review conversion funnel
- [ ] Optimize slow pages
- [ ] Gather customer feedback
- [ ] Update FAQ based on support questions

## 🆘 Troubleshooting

### Payment Failed

1. Check iyzico dashboard for error details
2. Verify API keys are correct
3. Ensure webhook URL is reachable
4. Check server logs

### Email Not Sending

1. Verify SMTP credentials
2. Check spam folder
3. Verify sender domain authentication (SPF, DKIM)
4. Check email service rate limits

### Images Not Loading

1. Check Supabase Storage policies
2. Verify CORS settings
3. Check image URL format
4. Ensure proper image optimization

### Supabase Connection Error

1. Verify environment variables
2. Check Supabase project status
3. Review RLS policies
4. Check API rate limits

## 📞 Production Support Contacts

- **Domain/Hosting:** support@vercel.com
- **Database:** support@supabase.com
- **Payment:** destek@iyzico.com
- **Development:** (your email)

## 🚨 Emergency Rollback

Eğer production'da kritik bir hata oluşursa:

\`\`\`bash
# Vercel Dashboard'dan önceki deployment'a rollback
# veya
vercel rollback
\`\`\`

---

**Son Kontrol:**
Production'a çıkmadan önce bütün bu checklistleri tamamladığınızdan emin olun. Yarım kalan entegrasyonlar müşteri deneyimini olumsuz etkiler ve yasal sorunlara yol açabilir.
