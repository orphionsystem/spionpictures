# 📦 Supabase Storage Bucket Kurulumu

## ⚠️ Önemli: Manuel Bucket Oluşturma Gerekli

Supabase Storage API'sinde authentication sorunu yaşandığı için bucket'ı **Supabase Dashboard'dan manuel olarak** oluşturmamız gerekiyor.

---

## 🔧 Adım 1: Storage Dashboard'a Git

**Storage sayfasını aç:**
https://app.supabase.com/project/bfnwyegmppxdyaakenuj/storage/buckets

Veya:
1. https://app.supabase.com'a git
2. Proje: **bfnwyegmppxdyaakenuj** seç
3. Sol menüden **Storage** tıkla
4. **Buckets** tab'ine tıkla

---

## 📦 Adım 2: Bucket Oluştur

1. **"New bucket" butonuna tıkla** (sağ üstte yeşil buton)

2. **Bucket ayarlarını gir:**

   **Bucket Name:**
   ```
   artworks
   ```

   **Public bucket:** ✅ İşaretle (public olmalı - herkes görselleri görebilmeli)

   **File size limit:** 
   ```
   10 MB
   ```

   **Allowed MIME types:** (opsiyonel, boş bırakılabilir)
   ```
   image/png, image/jpeg, image/jpg, image/webp, image/gif
   ```

3. **"Create bucket" butonuna tıkla**

✅ Bucket başarıyla oluşturuldu!

---

## 🔐 Adım 3: RLS Politikalarını Uygula

Storage bucket'ları için de Row Level Security (RLS) politikaları gerekli.

### SQL Editor'ü Aç

**SQL Editor sayfasına git:**
https://app.supabase.com/project/bfnwyegmppxdyaakenuj/sql

Veya:
1. Sol menüden **SQL Editor** tıkla
2. **"New query"** butonuna tıkla

### SQL Komutunu Yapıştır

Aşağıdaki SQL komutunu kopyala ve SQL Editor'e yapıştır:

```sql
-- ============================================
-- Supabase Storage RLS Policies
-- Bucket: artworks
-- ============================================

-- 1. Herkes görselleri görüntüleyebilir (SELECT)
CREATE POLICY IF NOT EXISTS "Public can view artwork images"
ON storage.objects FOR SELECT
USING (bucket_id = 'artworks');

-- 2. Herkes upload edebilir (INSERT)
-- Not: Admin kontrolü application layer'da yapılıyor
CREATE POLICY IF NOT EXISTS "Anyone can upload artwork images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'artworks');

-- 3. Herkes güncelleyebilir (UPDATE)
CREATE POLICY IF NOT EXISTS "Anyone can update artwork images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'artworks')
WITH CHECK (bucket_id = 'artworks');

-- 4. Herkes silebilir (DELETE)
CREATE POLICY IF NOT EXISTS "Anyone can delete artwork images"
ON storage.objects FOR DELETE
USING (bucket_id = 'artworks');

-- ============================================
-- Politika Kontrolü
-- ============================================

-- Oluşturulan politikaları göster
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  cmd
FROM pg_policies
WHERE tablename = 'objects'
ORDER BY policyname;
```

### Çalıştır

- **"Run" butonuna tıkla** (veya `Cmd+Enter` / `Ctrl+Enter`)
- Sonuç: **"Success. No rows returned"** görmelisin
- Altta politika listesi görünecek

---

## 🧪 Adım 4: Testi Çalıştır

Terminal'de test scriptini çalıştır:

```bash
cd /Users/mehmethan/Desktop/SpionPictures
node scripts/test-storage.js
```

Beklenen çıktı:
```
✅ Test upload başarılı!
✅ Public URL alındı: https://...
✅ Test dosyası temizlendi
```

---

## ✅ Adım 5: Artwork Upload'u Dene

Artık eser yükleme sistemi çalışıyor olmalı!

1. **Development server çalışıyor mu kontrol et:**
   ```bash
   # Eğer çalışmıyorsa:
   npm run dev
   ```

2. **Admin upload sayfasını aç:**
   ```
   http://localhost:3000/admin/artworks/upload
   ```

3. **Test eseri yükle:**
   - Başlık: "Test Artwork #1"
   - Sanatçı: "Spion Art Studio"
   - Açıklama: "Test açıklaması"
   - Fiyat: 1000 TRY
   - Edisyon: 10
   - Görsel: Bir test görseli seç
   - "Yayınla" işaretle
   - "Eseri Kaydet" butonuna tıkla

4. **Sonucu kontrol et:**
   - Başarılı mesajı görmelisin
   - http://localhost:3000/artworks sayfasına git
   - Yeni eklenen eseri görmelisin

---

## 🔍 Sorun Giderme

### "signature verification failed" hatası

**Çözüm:** Storage bucket'ı manuel olarak oluştur (bu dokümandaki adımlar)

### "Bucket artworks not found" hatası

**Çözüm:** 
1. Storage Dashboard'da bucket'ın oluşturulduğunu kontrol et
2. İsmin tam olarak `artworks` olduğundan emin ol (büyük/küçük harf önemli)

### Upload edilen görseller görünmüyor

**Kontrol et:**
1. Storage > Policies sayfasında RLS politikalarının oluşturulduğunu kontrol et
2. Bucket'ın **public** olduğunu kontrol et
3. Browser console'da hata var mı kontrol et

### "Row Level Security" hatası

**Çözüm:** Yukarıdaki SQL komutunu tekrar çalıştır

---

## 📁 Storage Yapısı

Görseller şu path'te saklanacak:

```
artworks/
  └── {slug}-{timestamp}-{index}.{ext}
      
Örnek:
  artworks/digital-dreams-001-1704139200000-0.jpg
  artworks/digital-dreams-001-1704139200000-1.jpg
```

Public URL formatı:
```
https://bfnwyegmppxdyaakenuj.supabase.co/storage/v1/object/public/artworks/{filename}
```

---

## ✅ Kurulum Tamamlandı!

Bucket oluşturulup RLS politikaları uygulandıktan sonra:

1. ✅ Storage bucket hazır
2. ✅ RLS politikaları aktif
3. ✅ Upload API endpoint çalışıyor
4. ✅ Admin panel ile eser yükleme hazır
5. ✅ Görseller public olarak erişilebilir

**Sonraki adım:** Gerçek sanat eserlerini yüklemeye başla! 🎨

---

## 📊 Storage Yönetimi

### Yüklenen Görselleri Görüntüle

Storage Dashboard:
https://app.supabase.com/project/bfnwyegmppxdyaakenuj/storage/buckets/artworks

### Storage Kullanımını Kontrol Et

```sql
-- Toplam dosya sayısı
SELECT COUNT(*) FROM storage.objects WHERE bucket_id = 'artworks';

-- Toplam storage boyutu (MB)
SELECT 
  bucket_id,
  COUNT(*) as file_count,
  ROUND(SUM(metadata->>'size')::numeric / 1024 / 1024, 2) as total_mb
FROM storage.objects
WHERE bucket_id = 'artworks'
GROUP BY bucket_id;

-- En son yüklenen dosyalar
SELECT 
  name,
  created_at,
  ROUND((metadata->>'size')::numeric / 1024, 2) as size_kb
FROM storage.objects
WHERE bucket_id = 'artworks'
ORDER BY created_at DESC
LIMIT 10;
```

---

## 🆘 Hala Sorun mu Var?

1. `.env.local` dosyasındaki credentials'ları kontrol et
2. Development server'ı yeniden başlat: `npm run dev`
3. Browser cache'ini temizle
4. Supabase Dashboard > Logs sayfasından hata mesajlarını kontrol et

**Hızlı Linkler:**
- Storage Buckets: https://app.supabase.com/project/bfnwyegmppxdyaakenuj/storage/buckets
- SQL Editor: https://app.supabase.com/project/bfnwyegmppxdyaakenuj/sql
- Logs: https://app.supabase.com/project/bfnwyegmppxdyaakenuj/logs
