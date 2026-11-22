# 🛒 Shopier E-Ticaret Entegrasyonu - Kurulum Adımları

## ✅ Yapılanlar
- ✅ Frontend: Satın Al butonları eklendi
- ✅ Admin Panel: Shopier URL input alanı eklendi
- ✅ API: Shopier URL kaydetme özelliği eklendi
- ✅ Database Migration: SQL dosyası hazırlandı

## 🚀 Yapılacaklar (Sırayla)

### 1️⃣ Database Migration'ı Uygula
1. **Supabase Dashboard**'a git: https://supabase.com/dashboard
2. Projenizi seçin: **Spion Pictures**
3. Sol menüden **SQL Editor**'ı açın
4. Aşağıdaki SQL kodunu **kopyala-yapıştır**:

```sql
-- Add Shopier URL to artworks table
ALTER TABLE public.artworks 
ADD COLUMN IF NOT EXISTS shopier_url TEXT;

-- Add comment for documentation
COMMENT ON COLUMN public.artworks.shopier_url IS 'Shopier e-commerce product URL for direct purchase';
```

5. **Run** butonuna tıkla
6. ✅ "Success. No rows returned" mesajını gör

---

### 2️⃣ Test Eseri Yükle
1. **Admin Panel**'e git: http://localhost:3000/admin/artworks/upload
2. Test eseri yükle:
   - **Başlık**: "Digital Dreams 001"
   - **Sanatçı**: "Mehmet Han"
   - **Fiyat**: 500
   - **Edisyon**: 25
   - **Shopier URL**: `https://www.shopier.com/test` (şimdilik test linki)

3. **Kaydet** butonuna bas

---

### 3️⃣ Frontend'de Test Et
1. Ana sayfaya git: http://localhost:3000
   - Featured artworks'te **🛒 Satın Al** butonunu gör
   - Butonu tıkla → Yeni sekmede açılmalı

2. Eserler sayfasına git: http://localhost:3000/artworks
   - Her eser kartında **🛒 Satın Al** butonunu gör
   - Hover efektlerini kontrol et

3. İngilizce versiyonu test et: http://localhost:3000/en/artworks
   - **🛒 Buy Now** butonunu gör

---

### 4️⃣ Gerçek Shopier URL'leri Ekle
Shopier mağazanızda ürün oluşturduktan sonra:

```
1. Shopier'de ürün oluştur
2. Ürün linkini kopyala (örn: https://www.shopier.com/spionpictures/digital-dreams-001)
3. Admin Panel > Eserler Listesi
4. Eseri düzenle
5. Shopier URL'yi yapıştır
6. Kaydet
```

---

## 🎨 Özellikler

### Kullanıcı Deneyimi:
- ✅ Stokta olan eserlerde **"Satın Al"** butonu görünür
- ✅ Stokta olmayan eserlerde buton görünmez
- ✅ Yeni sekmede açılır (kullanıcı sayfadan çıkmaz)
- ✅ Minimal ve lüks tasarım
- ✅ Hover efektleri

### Admin:
- ✅ Opsiyonel alan - boş bırakılabilir
- ✅ URL validation
- ✅ Placeholder örnek gösteriyor

### Teknik:
- ✅ Null-safe implementation
- ✅ SEO-friendly (rel="noopener noreferrer")
- ✅ Event propagation kontrolü
- ✅ Stock-aware rendering

---

## 📋 Workflow

### Eser Satış Akışı:
```
1. [Admin] Eseri Supabase'e yükle
2. [Admin] Shopier'de ürün oluştur
3. [Admin] Shopier URL'yi esere ekle
4. [Müşteri] Sitede eseri görür
5. [Müşteri] "Satın Al" butonuna tıklar
6. [Shopier] Ödeme sayfası açılır
7. [Shopier] Ödeme tamamlanır
8. [Admin] Shopier'den bildirim alır
9. [Admin] Siparişi hazırlar ve gönderir
```

---

## 🔧 Troubleshooting

### Buton Görünmüyor?
- Database migration'ı uyguladın mı?
- Eserin `shopier_url` alanı dolu mu?
- Eserin stoku var mı? (`sold_editions < total_editions`)

### Migration Hatası?
```sql
-- Kolonu kontrol et:
SELECT column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'artworks' AND column_name = 'shopier_url';
```

### Server Hatası?
```bash
# Dev server loglarını kontrol et:
tail -f /Users/mehmethan/Desktop/SpionPictures/dev-server.log
```

---

## 📦 Dosya Konumları

```
database/migrations/001_add_shopier_url.sql  # Migration SQL
app/admin/artworks/upload/page.tsx           # Upload formu
app/api/artworks/route.ts                    # API endpoint
app/artworks/page.tsx                        # Eserler listesi (TR)
app/en/artworks/page.tsx                     # Eserler listesi (EN)
app/page.tsx                                 # Ana sayfa (TR)
app/en/page.tsx                              # Ana sayfa (EN)
```

---

## ✅ Checklist

- [ ] Database migration uygulandı
- [ ] Test eseri yüklendi
- [ ] Shopier URL eklendi
- [ ] Ana sayfada buton görünüyor
- [ ] Eserler sayfasında buton görünüyor
- [ ] Yeni sekmede açılıyor
- [ ] Mobil responsive
- [ ] İngilizce sayfalar test edildi

---

**Hazırsın! Müşteriler artık doğrudan Shopier üzerinden satın alabilir.** 🚀
