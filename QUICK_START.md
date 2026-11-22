# 🚀 Spion Pictures - Quick Start

## ⚡ 5 Dakikada Başla

### 1️⃣ Veritabanını Kur (2 dakika)

**a) SQL Editor'ü Aç:**
```bash
open https://app.supabase.com/project/bfnwyegmppxdyaakenuj/sql
```

**b) Schema Dosyasını Aç:**
```bash
open /Users/mehmethan/Desktop/SpionPictures/database/schema.sql
```

**c) İçeriği Kopyala ve Çalıştır:**
- Tüm içeriği seç (Cmd+A)
- Kopyala (Cmd+C)
- SQL Editor'de "New query"
- Yapıştır (Cmd+V)
- "Run" tıkla ⚡

✅ **Sonuç:** 15 tablo oluşturuldu!

---

### 2️⃣ Test Verisi Ekle (1 dakika)

SQL Editor'de çalıştır:

```sql
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
```

✅ **Sonuç:** Test koleksiyonu eklendi!

---

### 3️⃣ Siteyi Görüntüle (30 saniye)

**Tarayıcıda Aç:**
```bash
open http://localhost:3000
```

✅ **Görecekleriniz:**
- Ana sayfa
- Navigation menü
- Hero section
- Spion Media hizmetleri
- Footer

---

## 📂 Önemli Dosyalar

| Dosya | Ne İçin? |
|-------|----------|
| **COMPLETE_SUCCESS.md** | Tam durum raporu ve özet |
| **SUPABASE_SETUP.md** | Detaylı database kurulum |
| **README.md** | Genel kullanım kılavuzu |
| **.env.local** | Supabase credentials (GİZLİ) |

---

## 🛠️ Sık Kullanılan Komutlar

```bash
# Proje dizinine git
cd /Users/mehmethan/Desktop/SpionPictures

# Sunucu başlat
npm run dev

# Sunucu durdur
kill $(lsof -ti:3000)

# Log izle
tail -f dev.log

# Yeni terminal'de Node.js kullan
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

---

## 🆘 Hızlı Sorun Giderme

**Sunucu çalışmıyor mu?**
```bash
ps aux | grep "next dev"
npm run dev
```

**Port 3000 meşgul mü?**
```bash
kill $(lsof -ti:3000)
```

**Supabase bağlanamıyor mu?**
`.env.local` dosyasını kontrol et

---

## 📞 Hızlı Linkler

- **Site:** http://localhost:3000
- **Supabase SQL:** https://app.supabase.com/project/bfnwyegmppxdyaakenuj/sql
- **Supabase Tables:** https://app.supabase.com/project/bfnwyegmppxdyaakenuj/editor

---

## ✅ Tamamlandı mı?

- [x] Node.js kuruldu
- [x] Proje oluşturuldu
- [x] Server çalışıyor
- [ ] Database şeması yüklendi ⬅️ **ŞİMDİ BU**
- [ ] Test verisi eklendi
- [ ] Admin user oluşturuldu

---

**Detaylı bilgi:** [SUPABASE_SETUP.md](./SUPABASE_SETUP.md)  
**Tam durum:** [COMPLETE_SUCCESS.md](./COMPLETE_SUCCESS.md)
