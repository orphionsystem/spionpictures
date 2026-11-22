# 🗄️ Supabase Veritabanı Kurulumu

## ✅ Environment Variables Hazır

`.env.local` dosyası başarıyla oluşturuldu ve Supabase bilgileri eklendi!

**Supabase Project URL:** https://bfnwyegmppxdyaakenuj.supabase.co

---

## 📋 Veritabanı Şemasını Yükleme (2 Yöntem)

### Yöntem 1: Supabase Dashboard (Önerilen)

1. **Supabase Dashboard'a git:**
   https://app.supabase.com/project/bfnwyegmppxdyaakenuj

2. **SQL Editor'ü aç:**
   - Sol menüden **SQL Editor** tıkla
   - Veya: https://app.supabase.com/project/bfnwyegmppxdyaakenuj/sql

3. **Schema dosyasını yükle:**
   - "New query" butonuna tıkla
   - `/Users/mehmethan/Desktop/SpionPictures/database/schema.sql` dosyasını aç
   - İçeriğin **TAMAMINI** kopyala (Cmd+A, Cmd+C)
   - SQL Editor'e yapıştır (Cmd+V)

4. **Çalıştır:**
   - "Run" butonuna tıkla (veya Cmd+Enter)
   - İşlem ~10-15 saniye sürer
   - "Success" mesajı görmelisin

5. **Kontrol et:**
   - Sol menüden **Table Editor** tıkla
   - Şu tabloları görmelisin:
     - profiles
     - collections
     - artworks
     - artwork_images
     - product_variants
     - editions
     - inventory_reservations
     - cart_items
     - orders
     - order_items
     - payments
     - services
     - projects
     - articles
     - contact_requests
     - site_settings

---

### Yöntem 2: psql CLI (Alternatif)

PostgreSQL client kurulu ise:

\`\`\`bash
# Database URL'i al (Supabase Dashboard > Settings > Database)
psql "postgresql://postgres:trRTfFuBw6tjMAwG@db.bfnwyegmppxdyaakenuj.supabase.co:5432/postgres" < database/schema.sql
\`\`\`

---

## 🧪 Test Verileri Ekleme

Şema yüklendikten sonra, Supabase SQL Editor'de şu komutları çalıştır:

### 1. Test Koleksiyonu

\`\`\`sql
INSERT INTO public.collections (slug, name_tr, name_en, description_tr, description_en, is_published, featured)
VALUES (
  'contemporary-visions',
  'Contemporary Visions',
  'Contemporary Visions',
  'Modern dijital sanat eserleri koleksiyonu. Çağdaş görsel anlatımların fiziksel dünyada yaşadığı seri.',
  'Modern digital art collection. A series where contemporary visual narratives come to life in the physical world.',
  true,
  true
);
\`\`\`

### 2. Test Eseri

\`\`\`sql
-- Önce collection ID'yi al
SELECT id, name_tr FROM public.collections WHERE slug = 'contemporary-visions';

-- Sonra eseri ekle (COLLECTION_ID_BURAYA yazan yere yukarıdaki ID'yi yapıştır)
INSERT INTO public.artworks (
  slug, 
  collection_id, 
  title_tr, 
  title_en, 
  artist_name,
  description_tr, 
  description_en, 
  base_price, 
  currency,
  total_editions,
  sold_editions,
  is_published, 
  featured
)
VALUES (
  'digital-dreams-001',
  'COLLECTION_ID_BURAYA',
  'Digital Dreams #1',
  'Digital Dreams #1',
  'Spion Art Studio',
  'Dijital düşler serisinden ilk eser. Gerçeklik ve hayal arasındaki çizginin bulanıklaştığı bir görsel yolculuk.',
  'The first piece from the Digital Dreams series. A visual journey where the line between reality and imagination blurs.',
  850.00,
  'TRY',
  25,
  0,
  true,
  true
);
\`\`\`

### 3. Eser Görseli Ekle

\`\`\`sql
-- Önce artwork ID'yi al
SELECT id, title_tr FROM public.artworks WHERE slug = 'digital-dreams-001';

-- Görseli ekle (ARTWORK_ID_BURAYA yazan yere yukarıdaki ID'yi yapıştır)
INSERT INTO public.artwork_images (
  artwork_id,
  image_url,
  alt_text_tr,
  alt_text_en,
  display_order,
  is_primary
)
VALUES (
  'ARTWORK_ID_BURAYA',
  '/placeholder-artwork.jpg',
  'Digital Dreams #1 - Dijital sanat eseri',
  'Digital Dreams #1 - Digital artwork',
  0,
  true
);
\`\`\`

### 4. Ürün Varyantları (Ölçüler)

\`\`\`sql
-- ARTWORK_ID_BURAYA yazan yere artwork ID'sini yapıştır
INSERT INTO public.product_variants (
  artwork_id,
  size_name,
  width_cm,
  height_cm,
  frame_type,
  price_unframed,
  price_framed,
  stock_quantity,
  is_available
)
VALUES
  ('ARTWORK_ID_BURAYA', '30x40 cm', 30, 40, 'both', 850.00, 1200.00, 10, true),
  ('ARTWORK_ID_BURAYA', '50x70 cm', 50, 70, 'both', 1500.00, 2100.00, 5, true),
  ('ARTWORK_ID_BURAYA', '70x100 cm', 70, 100, 'both', 2500.00, 3400.00, 3, true);
\`\`\`

### 5. Admin Kullanıcı Oluştur

**Dikkat:** Önce Supabase Authentication'dan kullanıcı oluştur:

1. Dashboard > **Authentication** > **Users**
2. "Add user" > "Create new user"
3. Email: `admin@spionpictures.com`
4. Password: Güçlü bir şifre
5. "Auto Confirm User" işaretle
6. "Create user"

Sonra SQL ile admin rolü ver:

\`\`\`sql
-- Kullanıcının ID'sini al
SELECT id, email FROM auth.users WHERE email = 'admin@spionpictures.com';

-- Profile oluştur ve admin rolü ver (USER_ID_BURAYA yazan yere kullanıcı ID'si)
INSERT INTO public.profiles (id, email, full_name, role)
VALUES (
  'USER_ID_BURAYA',
  'admin@spionpictures.com',
  'Admin User',
  'admin'
)
ON CONFLICT (id) DO UPDATE SET role = 'admin';
\`\`\`

---

## ✅ Kurulum Kontrolü

### Tablolar Oluşturuldu mu?

\`\`\`sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
ORDER BY table_name;
\`\`\`

**Beklenen sonuç:** 15 tablo

### Test Verileri Eklendi mi?

\`\`\`sql
-- Koleksiyonlar
SELECT slug, name_tr, is_published FROM public.collections;

-- Eserler
SELECT slug, title_tr, base_price, is_published FROM public.artworks;

-- Görseller
SELECT ai.image_url, a.title_tr 
FROM public.artwork_images ai
JOIN public.artworks a ON ai.artwork_id = a.id;
\`\`\`

---

## 🔐 Row Level Security (RLS)

Şema otomatik olarak bazı RLS politikaları oluşturdu. Kontrol et:

\`\`\`sql
-- RLS aktif mi?
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename IN ('artworks', 'collections', 'orders', 'profiles');
\`\`\`

**Önemli:** Production'da tüm tabloların RLS'i aktif olmalı!

---

## 🚀 Development Server'ı Yeniden Başlat

Veritabanı kurulumu tamamlandıktan sonra:

\`\`\`bash
cd /Users/mehmethan/Desktop/SpionPictures

# Mevcut sunucuyu durdur
kill $(lsof -ti:3000)

# Yeniden başlat
npm run dev
\`\`\`

Tarayıcıda: http://localhost:3000

---

## 🧪 Bağlantıyı Test Et

Basit bir test scripti:

\`\`\`bash
cd /Users/mehmethan/Desktop/SpionPictures
node -e "
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

(async () => {
  const { data, error } = await supabase.from('collections').select('*');
  if (error) console.error('❌ Error:', error);
  else console.log('✅ Connected! Collections:', data.length);
})();
"
\`\`\`

---

## 📊 Site Settings (Opsiyonel)

Varsayılan site ayarları otomatik eklendi. Kontrol et:

\`\`\`sql
SELECT key, value_tr, category FROM public.site_settings;
\`\`\`

Değiştirmek için:

\`\`\`sql
UPDATE public.site_settings 
SET value_tr = 'Yeni değer', value_en = 'New value'
WHERE key = 'site_tagline_tr';
\`\`\`

---

## 🆘 Sorun Giderme

### "extension uuid-ossp does not exist"

Dashboard > **Database** > **Extensions** > "uuid-ossp" aktif et

### "permission denied for schema public"

Supabase projende RLS politikaları yanlış yapılandırılmış olabilir. Dashboard > Settings > Database > Reset ile database'i sıfırla ve şemayı tekrar yükle.

### "relation already exists"

Normal! Tablo zaten oluşturulmuş demektir. Schema'da `CREATE TABLE IF NOT EXISTS` kullanıldığı için sorun yok.

### Bağlantı hatası

1. `.env.local` dosyasında URL ve key'lerin doğru olduğunu kontrol et
2. Supabase projesinin aktif olduğunu kontrol et
3. İnternet bağlantını kontrol et

---

## ✅ Tamamlandı!

Şema yüklendikten sonra:

1. ✅ Supabase bağlantısı aktif
2. ✅ 15 tablo oluşturuldu
3. ✅ Test verileri eklendi
4. ✅ Admin kullanıcı hazır
5. ✅ Site kullanıma hazır

**Sonraki adım:** Gerçek eser görselleri ekle ve geliştirmeye başla!

---

**Hızlı Linkler:**
- Dashboard: https://app.supabase.com/project/bfnwyegmppxdyaakenuj
- SQL Editor: https://app.supabase.com/project/bfnwyegmppxdyaakenuj/sql
- Table Editor: https://app.supabase.com/project/bfnwyegmppxdyaakenuj/editor
- Storage: https://app.supabase.com/project/bfnwyegmppxdyaakenuj/storage/buckets
