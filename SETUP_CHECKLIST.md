# Spion Pictures - Setup Checklist

Bu dosya, projeyi ilk kez kurduğunuzda takip etmeniz gereken adım adım kontrol listesidir.

## ✅ Ön Hazırlık

### 1. Sistem Gereksinimleri Kontrolü

- [ ] macOS işletim sistemi
- [ ] Terminal erişimi
- [ ] Homebrew kurulu mu? (`brew --version`)
- [ ] Node.js kurulu mu? (`node --version`)
  - Gereken: v18.17 veya üzeri
- [ ] npm kurulu mu? (`npm --version`)

**Node.js yoksa:**
\`\`\`bash
# Homebrew ile Node.js kurulumu
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
\`\`\`

### 2. Hesap Oluşturma

- [ ] [Supabase](https://supabase.com) hesabı oluşturuldu
- [ ] [iyzico](https://www.iyzico.com) sandbox hesabı oluşturuldu (test için)
- [ ] [Vercel](https://vercel.com) hesabı oluşturuldu (deployment için)
- [ ] GitHub hesabı var

## 📦 Proje Kurulumu

### 3. Proje Bağımlılıklarını Yükleme

\`\`\`bash
cd /Users/mehmethan/Desktop/SpionPictures
npm install
\`\`\`

**Kontrol:**
- [ ] `node_modules/` klasörü oluştu
- [ ] Hata mesajı almadınız
- [ ] `package-lock.json` oluştu

### 4. Supabase Projesi Oluşturma

1. [Supabase Dashboard](https://app.supabase.com)'a gidin
2. "New Project" tıklayın
3. Project Name: `spion-pictures` (veya istediğiniz isim)
4. Database Password: Güçlü bir şifre oluşturun (kaydedin!)
5. Region: `Europe West (Ireland)` seçin
6. "Create new project" tıklayın
7. Proje hazır olana kadar bekleyin (~2 dakika)

**Kontrol:**
- [ ] Proje başarıyla oluşturuldu
- [ ] Dashboard açıldı

### 5. Veritabanı Şemasını Çalıştırma

1. Supabase Dashboard'da **SQL Editor** sekmesine gidin
2. "New query" tıklayın
3. `/Users/mehmethan/Desktop/SpionPictures/database/schema.sql` dosyasını açın
4. İçeriği kopyalayın
5. SQL Editor'e yapıştırın
6. "Run" tıklayın

**Kontrol:**
- [ ] Query başarıyla çalıştı
- [ ] "Success. No rows returned" mesajı geldi
- [ ] Table Editor'de 15 tablo görünüyor

### 6. API Anahtarlarını Alma

1. Supabase Dashboard'da **Project Settings** > **API**'ye gidin
2. Şu bilgileri kopyalayın:
   - **Project URL** (örnek: `https://xxxxx.supabase.co`)
   - **anon public** key
   - **service_role** key (⚠️ GİZLİ - paylaşmayın)

**Kontrol:**
- [ ] URL kopyalandı
- [ ] anon key kopyalandı
- [ ] service_role key kopyalandı

### 7. Environment Variables Oluşturma

\`\`\`bash
cd /Users/mehmethan/Desktop/SpionPictures
cp .env.local.example .env.local
\`\`\`

`.env.local` dosyasını bir metin editörü ile açın ve doldurun:

\`\`\`env
# Supabase (yukarıda kopyaladığınız değerler)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...

# iyzico (sandbox - test için)
IYZICO_API_KEY=sandbox-xxx
IYZICO_SECRET_KEY=sandbox-xxx
IYZICO_BASE_URL=https://sandbox-api.iyzipay.com

# Site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Spion Pictures
\`\`\`

**Kontrol:**
- [ ] `.env.local` dosyası oluşturuldu
- [ ] Supabase değerleri dolduruldu
- [ ] Dosya kaydedildi

### 8. Geliştirme Sunucusunu Başlatma

\`\`\`bash
npm run dev
\`\`\`

**Beklenen Çıktı:**
\`\`\`
   ▲ Next.js 14.2.0
   - Local:        http://localhost:3000
   - Environments: .env.local

 ✓ Ready in 2.5s
\`\`\`

**Kontrol:**
- [ ] Sunucu başarıyla başladı
- [ ] "Ready" mesajı göründü
- [ ] Port 3000 açık

### 9. Tarayıcıda Test

Tarayıcınızda [http://localhost:3000](http://localhost:3000) açın.

**Görmeli:**
- [ ] Spion Pictures ana sayfa yüklendi
- [ ] Logo görünüyor
- [ ] Navigation çalışıyor
- [ ] Hero section görünüyor
- [ ] Konsol hatası yok

## 🔐 Admin Kullanıcı Oluşturma

### 10. İlk Admin Hesabı

1. Supabase Dashboard > **Authentication** > **Users** sekmesine gidin
2. "Add user" > "Create new user" tıklayın
3. Email: `admin@spionpictures.com` (veya kendi emailiniz)
4. Password: Güçlü bir şifre oluşturun
5. "Auto Confirm User" işaretleyin
6. "Create user" tıklayın

### 11. Admin Rolü Atama

1. Supabase Dashboard > **Table Editor** > `profiles` tablosuna gidin
2. Az önce oluşturduğunuz kullanıcıyı bulun
3. `role` kolonunu `admin` olarak değiştirin
4. Kaydet

**Kontrol:**
- [ ] Kullanıcı oluşturuldu
- [ ] Email confirmed
- [ ] Role = admin

## 🎨 Test Verileri (Opsiyonel)

### 12. Test Koleksiyonu Oluşturma

Supabase SQL Editor'de:

\`\`\`sql
INSERT INTO public.collections (slug, name_tr, name_en, description_tr, description_en, is_published, featured)
VALUES (
  'contemporary-visions',
  'Contemporary Visions',
  'Contemporary Visions',
  'Modern dijital sanat eserleri koleksiyonu.',
  'Modern digital art collection.',
  true,
  true
);
\`\`\`

### 13. Test Eseri Oluşturma

\`\`\`sql
-- Önce collection_id'yi alalım
SELECT id FROM public.collections WHERE slug = 'contemporary-visions';

-- Sonra artwork ekleyelim (collection_id'yi yukarıdan alın)
INSERT INTO public.artworks (
  slug, collection_id, title_tr, title_en, artist_name,
  description_tr, description_en, base_price, total_editions,
  is_published, featured
)
VALUES (
  'digital-dreams',
  'YOUR_COLLECTION_ID_HERE',
  'Digital Dreams',
  'Digital Dreams',
  'Spion Art',
  'Dijital düşler serisinden özgün bir eser.',
  'An original piece from the digital dreams series.',
  850.00,
  25,
  true,
  true
);
\`\`\`

**Kontrol:**
- [ ] Koleksiyon oluşturuldu
- [ ] Test eseri eklendi
- [ ] Ana sayfada görünüyor (geliştirme yapıldıktan sonra)

## 🧪 Fonksiyon Testleri

### 14. Supabase Bağlantı Testi

Tarayıcı console'unda (F12):

\`\`\`javascript
// Test Supabase connection
fetch('/api/test-connection') // Bu API route'u henüz yok, manuel test gerekli
\`\`\`

### 15. Sayfa Navigasyonu Testi

- [ ] Ana sayfa (`/`) yükleniyor
- [ ] Eserler (`/artworks`) yükleniyor
- [ ] Header navigation çalışıyor
- [ ] Dil değiştirici çalışıyor (TR/EN)
- [ ] Footer linkleri aktif

## 🚨 Sorun Giderme

### Node.js bulunamadı
\`\`\`bash
brew install node
\`\`\`

### npm install hatası
\`\`\`bash
# node_modules ve lock dosyasını sil
rm -rf node_modules package-lock.json
# Tekrar yükle
npm install
\`\`\`

### Port 3000 zaten kullanımda
\`\`\`bash
# Farklı port kullan
npm run dev -- -p 3001
\`\`\`

### Supabase bağlantı hatası
- `.env.local` dosyasının doğru konumda olduğunu kontrol edin
- Environment variable'ların doğru olduğunu kontrol edin
- Supabase projesinin aktif olduğunu kontrol edin

### "Module not found" hatası
\`\`\`bash
npm install
\`\`\`

## ✅ Kurulum Tamamlandı!

Tebrikler! Spion Pictures projeniz başarıyla kuruldu.

### Sonraki Adımlar:

1. **Geliştirme başlat:**
   - Artwork components oluştur
   - Admin panel geliştir
   - E-ticaret akışını tamamla

2. **Dokümantasyonu oku:**
   - [README.md](./README.md) - Genel kullanım
   - [PROGRESS.md](./PROGRESS.md) - Yapılacaklar listesi
   - [DEPLOYMENT.md](./DEPLOYMENT.md) - Production deployment

3. **Tasarım referansları:**
   - `SPİON MEDİA.pdf` katalogunu incele
   - Spion Media Instagram: [@spionmedia](https://instagram.com/spionmedia)

## 📞 Yardım

Sorunlarla karşılaşırsanız:

1. README.md dosyasına bakın
2. PROGRESS.md'de benzer sorunları kontrol edin
3. Supabase documentation: [supabase.com/docs](https://supabase.com/docs)
4. Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)

---

**Son Güncelleme:** 2024  
**Durum:** ✅ Setup Complete  
**Sonraki:** Start Development
