# 🚨 ACİL: Storage Bucket Manuel Kurulum

## ❌ Sorun Nedir?

Supabase Storage API'si "signature verification failed" hatası veriyor. Bu, API üzerinden bucket oluşturamayacağımız anlamına geliyor. **Dashboard'dan manuel oluşturmalıyız.**

---

## ✅ ÇÖZÜM - 5 Dakikada Bitir

### 📦 ADIM 1: Supabase'e Giriş Yap

1. **Tarayıcıda aç:**
   ```
   https://supabase.com/dashboard
   ```

2. Giriş yap (eğer giriş yapmadıysan)

3. **Projeyi seç:** `bfnwyegmppxdyaakenuj`

---

### 📁 ADIM 2: Storage Sayfasına Git

Sol menüden **Storage** sekmesine tıkla

Veya direkt buraya git:
```
https://app.supabase.com/project/bfnwyegmppxdyaakenuj/storage/buckets
```

---

### ➕ ADIM 3: Yeni Bucket Oluştur

1. **Sağ üstteki yeşil "New bucket" butonuna tıkla**

2. **Formu doldur:**

   ```
   Name: artworks
   ```
   (Tam olarak `artworks` yaz, başka isim kullanma!)

   ```
   [✓] Public bucket
   ```
   (Bu kutucuğu **MUTLAKA** işaretle! Görseller herkese açık olmalı)

   ```
   File size limit: 10 MB
   ```

   ```
   Allowed MIME types: (boş bırakabilirsin)
   ```

3. **"Create bucket" butonuna tıkla**

✅ **Bucket oluşturuldu!**

---

### 🔐 ADIM 4: RLS Politikalarını Ekle

Bucket oluşturduktan sonra, kimler upload edebilir/görebilir onu belirlemeliyiz.

1. **SQL Editor'ü aç:**
   ```
   https://app.supabase.com/project/bfnwyegmppxdyaakenuj/sql
   ```

   Veya sol menüden: **SQL Editor** → **New query**

2. **Bu SQL'i KOMPLE kopyala ve yapıştır:**

```sql
-- ============================================
-- Spion Pictures - Storage RLS Policies
-- Bucket: artworks
-- ============================================

-- 1. Herkes artwork görsellerini görebilir
CREATE POLICY IF NOT EXISTS "Public can view artwork images"
ON storage.objects FOR SELECT
USING (bucket_id = 'artworks');

-- 2. Herkes upload edebilir (admin kontrolü app layer'da)
CREATE POLICY IF NOT EXISTS "Anyone can upload artwork images"
ON storage.objects FOR INSERT
WITH CHECK (bucket_id = 'artworks');

-- 3. Herkes güncelleyebilir
CREATE POLICY IF NOT EXISTS "Anyone can update artwork images"
ON storage.objects FOR UPDATE
USING (bucket_id = 'artworks')
WITH CHECK (bucket_id = 'artworks');

-- 4. Herkes silebilir
CREATE POLICY IF NOT EXISTS "Anyone can delete artwork images"
ON storage.objects FOR DELETE
USING (bucket_id = 'artworks');

-- Politikaları kontrol et
SELECT 
  policyname,
  cmd as operation
FROM pg_policies
WHERE tablename = 'objects'
  AND policyname LIKE '%artwork%'
ORDER BY policyname;
```

3. **"Run" butonuna tıkla** (veya Cmd/Ctrl + Enter)

4. **Sonuç kontrolü:**
   - Altta 4 satır politika görmeli sin
   - "Success" mesajı görmelisin

✅ **Politikalar uygulandı!**

---

### 🧪 ADIM 5: Test Et

Terminal'de şunu çalıştır:

```bash
cd /Users/mehmethan/Desktop/SpionPictures
node scripts/test-storage.js
```

**Beklenen çıktı:**
```
✅ Upload başarılı!
✅ Public URL alındı: https://...
✅ Test dosyası temizlendi
```

**Eğer hala hata alırsan:**
1. Bucket isminin tam olarak `artworks` olduğunu kontrol et
2. Public bucket kutucuğunun işaretli olduğunu kontrol et
3. RLS politikalarını tekrar çalıştır
4. 1-2 dakika bekle (Supabase cache'i temizleniyor)

---

### 🎨 ADIM 6: İlk Eseri Yükle!

Test başarılı olduktan sonra:

1. **Admin upload sayfasını aç:**
   ```
   http://localhost:3000/admin/artworks/upload
   ```

2. **Formu doldur:**
   - Başlık (TR): Digital Dreams #1
   - Başlık (EN): Digital Dreams #1
   - Sanatçı: Spion Art Studio
   - URL: digital-dreams-001
   - Açıklama: Test eseri
   - Fiyat: 1000
   - Para birimi: TRY
   - Edisyon sayısı: 10
   - [✓] Yayınla
   - [✓] Öne çıkan
   - **Görsel:** Bir test görseli seç

3. **"Eseri Kaydet" butonuna tıkla**

4. **Başarı mesajını gör! 🎉**

5. **Kontrol et:**
   ```
   http://localhost:3000/artworks
   ```
   Yeni eklenen eser burada görünmeli!

---

## 🔍 Sorun Giderme

### "Bucket artworks not found"
→ Bucket ismini kontrol et, tam olarak `artworks` olmalı (küçük harf)

### "Access denied" / "Permission denied"
→ RLS politikalarını tekrar çalıştır (ADIM 4)

### "Public bucket is not enabled"
→ Storage → Buckets → artworks → Settings → Public bucket kutucuğunu işaretle

### Görsel yükleniyor ama görünmüyor
→ Bucket'ın public olduğunu kontrol et
→ Browser console'da hata var mı kontrol et (F12)

### Hala çalışmıyor
1. Supabase Dashboard → Logs → Error Logs
2. Browser Developer Tools → Console
3. `/Users/mehmethan/Desktop/SpionPictures/dev-server.log` dosyasını kontrol et

---

## 📊 İşlem Sonrası Kontrol

### Bucket oluşturuldu mu?

Storage sayfasında:
```
https://app.supabase.com/project/bfnwyegmppxdyaakenuj/storage/buckets
```

`artworks` bucket'ını görmelisin.

### RLS politikaları uygulandı mı?

SQL Editor'de:
```sql
SELECT policyname 
FROM pg_policies 
WHERE tablename = 'objects';
```

4 politika görmelisin.

### Upload çalışıyor mu?

```bash
node scripts/test-storage.js
```

✅ mesajı görmelisin.

---

## ✅ Tamamlandı!

Artık:
- ✅ Storage bucket hazır
- ✅ Public erişim aktif
- ✅ RLS politikaları uygulandı
- ✅ Upload API çalışıyor
- ✅ Admin panel hazır

**Sanat eserlerini yüklemeye başlayabilirsin! 🎨**

---

## 🆘 Hızlı Yardım Linkleri

- **Storage Dashboard:** https://app.supabase.com/project/bfnwyegmppxdyaakenuj/storage/buckets
- **SQL Editor:** https://app.supabase.com/project/bfnwyegmppxdyaakenuj/sql
- **Error Logs:** https://app.supabase.com/project/bfnwyegmppxdyaakenuj/logs
- **Admin Upload:** http://localhost:3000/admin/artworks/upload
- **Eserler Sayfası:** http://localhost:3000/artworks

---

**Sorularını çekinmeden sor! Ben buradayım. 💬**
