# 🚀 GitHub'a Yükleme Talimatları

## ✅ Yapılanlar

1. ✅ Git repository başlatıldı
2. ✅ Tüm dosyalar commit edildi (90 dosya)
3. ✅ 4 yasal sayfa oluşturuldu (TR + EN)
   - Gizlilik Politikası (Privacy Policy)
   - Kullanım Koşulları (Terms of Use)
   - KVKK (Data Protection / GDPR)
   - İade ve Teslimat (Refund & Shipping)
4. ✅ Footer'a yasal linkler eklendi
5. ✅ İletişim sayfası dinamik yapıldı (TR/EN)

## 📋 GitHub'a Yükleme Adımları

### Yöntem 1: GitHub Web Üzerinden (Önerilen)

1. **GitHub'a Giriş Yap**
   - https://github.com adresine git
   - Giriş yap

2. **Yeni Repository Oluştur**
   - Sağ üstte "+" butonuna tıkla
   - "New repository" seç
   - Repository adı: `SpionPictures` veya `spionpictures-website`
   - Description: "Spion Pictures art gallery and creative media studio website"
   - Public veya Private seç (Private öneriyorum)
   - **ÖNEMLİ:** "Initialize this repository with" seçeneklerini BOŞBIRAK
   - "Create repository" butonuna tıkla

3. **Local Repository'yi Bağla**
   ```bash
   cd /Users/mehmethan/Desktop/SpionPictures
   
   # GitHub'dan aldığın remote URL'i ekle (örnek):
   git remote add origin https://github.com/kullaniciadin/SpionPictures.git
   
   # Branch adını main yap (zaten main)
   git branch -M main
   
   # Push yap
   git push -u origin main
   ```

4. **GitHub Username/Password İster**
   - Username: GitHub kullanıcı adın
   - Password: Artık şifre kabul edilmiyor!
   - **Personal Access Token kullanman gerekli**

### GitHub Personal Access Token Oluşturma

1. GitHub'da Settings > Developer settings > Personal access tokens > Tokens (classic)
2. "Generate new token (classic)"
3. Noteeddit: "SpionPictures deployment"
4. Expiration: 90 days veya No expiration
5. Seç: ✓ repo (tüm alt seçenekler)
6. "Generate token" butonuna tıkla
7. **Token'ı kopyala** (bir daha gösterilmeyecek!)
8. Push yaparken şifre yerine bu token'ı kullan

### Yöntem 2: GitHub Desktop (Daha Kolay)

1. **GitHub Desktop İndir** (yoksa)
   - https://desktop.github.com

2. **Repository Ekle**
   - File > Add Local Repository
   - `/Users/mehmethan/Desktop/SpionPictures` dizinini seç

3. **Publish to GitHub**
   - "Publish repository" butonuna tıkla
   - Name: SpionPictures
   - Description: ekle
   - Private seç
   - "Publish Repository"

## 🔐 Güvenlik Notları

### .gitignore Kontrolü

Hassas bilgiler commit edilmemeli:
```bash
cd /Users/mehmethan/Desktop/SpionPictures
cat .gitignore
```

Şunlar .gitignore'da olmalı:
```
.env.local
.env*.local
node_modules/
.next/
*.log
```

### Environment Variables

Production için şunları ayarla:
```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
NEXT_PUBLIC_SITE_URL=https://spionpictures.com
```

## 📦 Deployment Sonrası

### Vercel'e Deploy

```bash
# Vercel CLI yoksa
npm i -g vercel

# Deploy
vercel

# Production
vercel --prod
```

Veya Vercel Dashboard:
1. https://vercel.com/new
2. Import Git Repository
3. GitHub'daki SpionPictures repo'sunu seç
4. Environment variables ekle
5. Deploy

## ✅ Commit Edilenler

### Yeni Dosyalar (Bu Sefer Eklenenler)

**Yasal Sayfalar (Türkçe):**
- `/app/legal/privacy/page.tsx`
- `/app/legal/terms/page.tsx`
- `/app/legal/kvkk/page.tsx`
- `/app/legal/refund-shipping/page.tsx`

**Yasal Sayfalar (İngilizce):**
- `/app/en/legal/privacy/page.tsx`
- `/app/en/legal/terms/page.tsx`
- `/app/en/legal/kvkk/page.tsx`
- `/app/en/legal/refund-shipping/page.tsx`

**Güncelleneler:**
- `components/Footer.tsx` - Yasal linkler eklendi
- `app/contact/page.tsx` - Dinamik yapıldı
- `app/en/contact/page.tsx` - Dinamik yapıldı

### Toplam

- **90 dosya** commit edildi
- **29,313 satır kod**
- **Branch:** main
- **Commit mesajı:** "Initial commit: SpionPictures website with legal pages"

## 🎯 Sonraki Adımlar

1. ✅ GitHub'a push yap
2. ⏳ Vercel'e deploy et
3. ⏳ Domain bağla
4. ⏳ Environment variables ayarla
5. ⏳ Database migration'ları çalıştır

## 📞 Sorun Olursa

### Push Hatası Alırsan

```bash
# Remote URL kontrol
git remote -v

# Doğru URL'i ayarla
git remote set-url origin https://github.com/kullaniciadin/SpionPictures.git

# Tekrar dene
git push -u origin main
```

### Authentication Hatası

Personal Access Token kullan, şifre değil!

### Permission Hatası

Repository private ise erişim iznin olmalı.

---

**Hazır!** Sadece GitHub'da repo oluştur ve push yap! 🚀
