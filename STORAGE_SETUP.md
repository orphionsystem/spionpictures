# 📦 Supabase Storage Kurulumu

Sanat eserlerinin görsellerini saklamak için Supabase Storage'da bir bucket oluşturmanız gerekiyor.

## 1️⃣ Storage Bucket Oluştur

### Adım 1: Supabase Storage'a Git
```
https://app.supabase.com/project/bfnwyegmppxdyaakenuj/storage/buckets
```

### Adım 2: Yeni Bucket Oluştur
1. "Create a new bucket" butonuna tıkla
2. **Name:** `artworks`
3. **Public bucket:** ✅ İşaretle (görseller public olmalı)
4. "Create bucket" tıkla

### Adım 3: Bucket Politikalarını Ayarla

Storage bucket oluşturulduktan sonra, politikaları ayarlayın:

#### Public Read Politikası (Herkes görselleri görebilir)
Supabase Dashboard > Storage > artworks > Policies > "New Policy"

**Policy Name:** Public Read Access
**Allowed Operations:** SELECT
**Target Roles:** public
**Policy Definition:**
```sql
true
```

#### Authenticated Upload (Sadece giriş yapanlar yükleyebilir)
**Policy Name:** Authenticated Upload
**Allowed Operations:** INSERT
**Target Roles:** authenticated
**Policy Definition:**
```sql
true
```

**VEYA SQL ile Direkt Oluştur:**

Supabase SQL Editor'de çalıştır:

```sql
-- Create storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('artworks', 'artworks', true)
ON CONFLICT (id) DO NOTHING;

-- Allow public to read files
CREATE POLICY "Public Access"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'artworks');

-- Allow authenticated users to upload
CREATE POLICY "Authenticated users can upload"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'artworks');

-- Allow authenticated users to update their uploads
CREATE POLICY "Authenticated users can update"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'artworks');

-- Allow authenticated users to delete
CREATE POLICY "Authenticated users can delete"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'artworks');
```

## 2️⃣ Test Et

### Manuel Test (SQL Editor'de)
```sql
-- Bucket oluşturuldu mu?
SELECT * FROM storage.buckets WHERE id = 'artworks';

-- Public mu?
SELECT id, name, public FROM storage.buckets WHERE id = 'artworks';
```

Beklenen sonuç: `public = true`

## 3️⃣ Eser Yükle

Artık admin panelinden eser yükleyebilirsiniz:

1. **Admin Panel:** http://localhost:3000/admin
2. **Eser Yükle** kartına tıkla
3. Görselleri seç
4. Formu doldur
5. "Eseri Kaydet"

### Yükleme Akışı:
1. ✅ Görseller `artworks` bucket'ına yüklenir
2. ✅ Eser bilgileri `artworks` tablosuna kaydedilir
3. ✅ Görsel URL'leri `artwork_images` tablosuna eklenir
4. ✅ Edisyon kayıtları `editions` tablosuna oluşturulur

## 4️⃣ Sorun Giderme

### "Bucket already exists" hatası
Normal! Bucket zaten oluşturulmuş demektir.

### "Permission denied" hatası
Storage politikaları doğru yapılandırılmamış. Yukarıdaki SQL komutlarını çalıştırın.

### Görseller yüklenmiyor
1. `.env.local` dosyasında Supabase credentials doğru mu kontrol edin
2. Storage bucket `public` olarak işaretli mi kontrol edin
3. Browser console'da hata mesajlarına bakın

### Görseller görünmüyor
1. Bucket `public` olarak oluşturuldu mu?
2. Public read politikası aktif mi?
3. Görsel URL'si doğru mu? (Supabase Storage'da kontrol edin)

## 5️⃣ Örnek Görsel URL

Yüklenen görseller şu formatta URL'e sahip olacak:
```
https://bfnwyegmppxdyaakenuj.supabase.co/storage/v1/object/public/artworks/digital-dreams-001-1234567890-0.jpg
```

## 6️⃣ Storage Limitleri

**Supabase Free Plan:**
- ✅ 1 GB storage
- ✅ 2 GB bandwidth/ay
- ✅ Unlimited requests

**Tavsiye:**
- Görselleri yüklemeden önce optimize edin
- Maksimum boyut: 2-3 MB
- Format: JPG (sıkıştırma için) veya PNG (kalite için)
- Boyut: 2000-3000px genişlik (web için yeterli)

## ✅ Kurulum Tamamlandı!

Storage bucket hazır olduğunda:
```
http://localhost:3000/admin/artworks/upload
```

Adresinden eserlerinizi yükleyebilirsiniz! 🎨

---

**Hızlı Link:**
- Storage Dashboard: https://app.supabase.com/project/bfnwyegmppxdyaakenuj/storage/buckets
- SQL Editor: https://app.supabase.com/project/bfnwyegmppxdyaakenuj/sql
